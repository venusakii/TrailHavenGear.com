"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function CookieNotification() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <div className="glass-effect rounded-xl p-6 shadow-xl animate-in slide-in-from-bottom-4">
        <p className="text-sm text-foreground/80 mb-4 text-pretty leading-relaxed">
          This website uses cookies to improve your experience and analyze site usage. By continuing, you consent to our
          use of cookies.
        </p>
        <Button
          onClick={() => setIsVisible(false)}
          className="w-full glass-effect text-foreground hover:bg-primary/30 group"
        >
          <Sparkles className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
          Accept Reflection
        </Button>
      </div>
    </div>
  )
}
