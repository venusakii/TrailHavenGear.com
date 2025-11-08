"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function HighlightProduct() {
  const waveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (waveRef.current) {
        const scrollY = window.scrollY
        const distortion = Math.sin(scrollY * 0.005) * 10
        waveRef.current.style.transform = `translateY(${distortion}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="relative">
          {/* Main image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass-effect">
            <Image
              src="/ultralight-tent-reflected-in-mountain-lake-water.jpg"
              alt="Ultralight tent reflection"
              fill
              className="object-cover"
            />
          </div>

          {/* Mirrored reflection with wave distortion */}
          <div
            ref={waveRef}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-4 opacity-40"
            style={{
              transform: "scaleY(-1)",
              filter: "blur(6px)",
            }}
          >
            <Image
              src="/ultralight-tent-reflected-in-mountain-lake-water.jpg"
              alt="Reflection"
              fill
              className="object-cover"
            />
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-effect p-8 md:p-12 rounded-2xl text-center max-w-2xl mx-4">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
                Minimal Weight.
                <br />
                Maximum Soul.
              </h2>
              <p className="text-lg text-foreground/80 mb-6 text-pretty">
                The Ultralight Solo Tent — engineered for those who seek silence in the wilderness.
              </p>
              <Button size="lg" className="glass-effect text-foreground hover:bg-primary/30" asChild>
                <Link
                  href="https://www.amazon.com/Headlamp-Warning-Zoomable-Waterproof-Adjustable/dp/B0CWPBH697"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore on Amazon
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
