# レース情報
id = 202509030411  # 宝塚記念
race_url = "https://race.netkeiba.com/race/shutuba.html?race_id=" + str(id) + "&rf=race_submenu"

# import
import re
from bs4 import BeautifulSoup
import requests
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from math import isnan
import pyperclip
from io import StringIO


# レース情報取得
response = requests.get(race_url, headers={'User-Agent': 'Mozilla/5.0'})
soup = BeautifulSoup(response.content, "html.parser")

# 競走馬成績urlを取得
urls = [cell.find("a")["href"] for cell in soup.select("td.HorseInfo")]

# レース情報を取得
race_name = soup.find('h1', class_='RaceName').text.strip()
race_info = soup.find('div', class_='RaceData01').find_all('span')[0].text.strip()
race_type = ''.join(filter(str.isalpha, race_info.split('m')[0]))
distance = ''.join(filter(str.isdigit, race_info))
track_condition = soup.find('div', class_='RaceData01').text.split('馬場:')[1].split()[0].strip()
track_name = soup.find('div', class_='RaceData02').find_all('span')[1].text

# 出馬表取得
table_data = []
table = soup.find('table', {'class': 'Shutuba_Table'})
if table:
    rows = table.find_all('tr')
    for row in rows:
        row_data = []
        cols = row.find_all('td')
        for col in cols:
            row_data.append(col.get_text(strip=True))
        table_data.append(row_data)

    table_data = table_data[2:]  # 0,1行目のゴミを削除

    # 不要列削除（印、オッズなど）
    for row in table_data:
        if len(row) > 2:
            del row[2]
        if len(row) > 6:
            del row[6:]

    # pandas変換
    headers = ["枠", "馬番", "馬名", "性齢", "斤量", "騎手"]
    df = pd.DataFrame(table_data, columns=headers)

    # 平均斤量の計算
    df['斤量'] = pd.to_numeric(df['斤量'], errors='coerce')
    average_weight = df['斤量'].mean()

    # 出馬表表示（必要に応じて有効化）
    print(df)

    for index in range(len(urls)):
        horse_name = df["馬名"][index]
        print(f"\n🐎 馬名: {horse_name}")

        relative_url = urls[index]
        horse_url = relative_url if relative_url.startswith("http") else "https://db.netkeiba.com" + relative_url

        try:
            race_results_list_response = requests.get(horse_url, headers={'User-Agent': 'Mozilla/5.0'})
            race_results_list_soup = BeautifulSoup(race_results_list_response.content, "html.parser")
            race_results_table = race_results_list_soup.find('table', {'class': 'db_h_race_results'})

            if race_results_table:
                html_str = str(race_results_table)
                race_results = pd.read_html(StringIO(html_str), encoding='utf-8')[0]

                # 列名確認（デバッグ用）
                print("📎 列名:", list(race_results.columns))

                # 存在する列だけを選択するように変更
                cols_to_show = [col for col in ["日付", "開催", "レース名", "着順", "距離", "馬場", "タイム", "騎手"] if col in race_results.columns]

                print("📋 最新5走:")
                print(race_results[cols_to_show].head(5))
            else:
                print("⚠️ 成績テーブルが見つかりません。")

        except Exception as e:
            print(f"⚠️ 取得失敗: {e}")
else:
    print("出馬表(Shutuba_Table class)が見つかりませんでした。")