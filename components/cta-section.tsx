"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function CTASection() {
  const shimmerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (shimmerRef.current) {
        shimmerRef.current.style.animation = "none"
        setTimeout(() => {
          if (shimmerRef.current) {
            shimmerRef.current.style.animation = "shimmer 3s ease-in-out infinite"
          }
        }, 10)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Mirror surface background with light glints */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10">
        <div
          ref={shimmerRef}
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
            backgroundSize: "200% 200%",
            animation: "shimmer 3s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-effect rounded-2xl p-12 md:p-16 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance text-foreground">
            See Yourself in the Wild
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Every reflection tells a story. Start yours.
          </p>
          <Button
            size="lg"
            className="glass-effect text-foreground hover:bg-primary/30 text-lg px-8 py-6 group"
            asChild
          >
            <Link href="/gear">
              <ShoppingBag className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Shop Gear
            </Link>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  )
}
