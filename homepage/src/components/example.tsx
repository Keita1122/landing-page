"use client"

import type React from "react"

import { useState } from "react"
import { ChevronUp, ChevronDown, Building2, Users, Target, Phone, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationItem {
  id: number
  title: string
  subtitle: string
  content: React.ReactNode
  color: string
  icon: React.ReactNode
}

const navigationItems: NavigationItem[] = [
  {
    id: 1,
    title: "会社概要",
    subtitle: "Company Overview",
    color: "bg-blue-500",
    icon: <Building2 className="w-8 h-8 text-white" />,
    content: (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">会社概要</h1>
        <p className="text-xl text-white/90">Company Overview</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "事業内容",
    subtitle: "Our Business",
    color: "bg-red-500",
    icon: <Target className="w-8 h-8 text-white" />,
    content: (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">事業内容</h1>
        <p className="text-xl text-white/90">Our Business</p>
      </div>
    ),
  },
  {
    id: 3,
    title: "サービス",
    subtitle: "Our Services",
    color: "bg-orange-500",
    icon: <Users className="w-8 h-8 text-white" />,
    content: (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">サービス</h1>
        <p className="text-xl text-white/90">Our Services</p>
      </div>
    ),
  },
  {
    id: 4,
    title: "実績",
    subtitle: "Our Results",
    color: "bg-yellow-500",
    icon: <Info className="w-8 h-8 text-white" />,
    content: (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">実績</h1>
        <p className="text-xl text-white/90">Our Results</p>
      </div>
    ),
  },
  {
    id: 5,
    title: "お問い合わせ",
    subtitle: "Contact Us",
    color: "bg-green-500",
    icon: <Phone className="w-8 h-8 text-white" />,
    content: (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">お問い合わせ</h1>
        <p className="text-xl text-white/90">Contact Us</p>
      </div>
    ),
  },
]

export default function CircularNavigation() {
  // Current active circle index (0-4)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNavigation = (direction: "up" | "down") => {
    if (isAnimating) return

    setIsAnimating(true)

    // Rotate circles: up = previous, down = next
    if (direction === "up") {
      setCurrentIndex((prev) => (prev - 1 + navigationItems.length) % navigationItems.length)
    } else {
      setCurrentIndex((prev) => (prev + 1) % navigationItems.length)
    }

    setTimeout(() => setIsAnimating(false), 500)
  }

  const getCirclePosition = (index: number) => {
    // Calculate relative position from current active circle
    const relativeIndex = (index - currentIndex + navigationItems.length) % navigationItems.length

    // Position mapping: 0=main(left), 1-4=stack(right) in descending size
    switch (relativeIndex) {
      case 0:
        return { x: 0, y: 0, scale: 1, zIndex: 10 } // Main display circle (left)
      case 1:
        return { x: 400, y: -100, scale: 0.7, zIndex: 4 } // Top of stack
      case 2:
        return { x: 450, y: 0, scale: 0.6, zIndex: 3 } // Second in stack
      case 3:
        return { x: 400, y: 100, scale: 0.5, zIndex: 2 } // Third in stack
      case 4:
        return { x: 350, y: 150, scale: 0.4, zIndex: 1 } // Bottom of stack
      default:
        return { x: 300, y: 200, scale: 0.3, zIndex: 0 }
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Navigation Controls */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4">
        <Button
          onClick={() => handleNavigation("up")}
          disabled={isAnimating}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 hover:bg-white"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
        <Button
          onClick={() => handleNavigation("down")}
          disabled={isAnimating}
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 hover:bg-white"
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>

      {/* Animated Circles */}
      {navigationItems.map((item, index) => {
        const position = getCirclePosition(index)
        const isMain = (index - currentIndex + navigationItems.length) % navigationItems.length === 0

        return (
          <div
            key={item.id}
            className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
              isAnimating ? "pointer-events-none" : ""
            }`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
              zIndex: position.zIndex,
            }}
            onClick={() => !isMain && !isAnimating && setCurrentIndex(index)}
          >
            <div
              className={`w-80 h-80 rounded-full ${item.color} flex items-center justify-center shadow-2xl transition-all duration-300 hover:shadow-3xl`}
            >
              {isMain ? (
                // Main circle shows full content
                <div className="w-full h-full p-8 flex items-center justify-center">
                  <div className="text-white">{item.content}</div>
                </div>
              ) : (
                // Stack circles show icon and title only
                <div className="text-center text-white">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.subtitle}</p>
                </div>
              )}
            </div>
          </div>
        )
      })}

      {/* Company Logo */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-2xl font-bold text-gray-800">SalesFinder</h1>
        <p className="text-sm text-gray-600">CRM Solutions</p>
      </div>
    </div>
  )
}
