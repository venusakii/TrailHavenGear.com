"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import Link from "next/link"

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (parallaxRef.current) {
        const { clientX, clientY } = e
        const x = (clientX / window.innerWidth - 0.5) * 20
        const y = (clientY / window.innerHeight - 0.5) * 20
        parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mirror lake effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background">
        <div
          ref={parallaxRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `url('/serene-mountain-lake-reflection-misty-morning.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Mirrored reflection effect */}
      <div className="absolute inset-0 top-1/2 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('/serene-mountain-lake-reflection-misty-morning.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scaleY(-1)",
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Find calm in motion.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Ultralight gear for those who walk beyond the horizon.
        </p>
        <Button size="lg" className="group glass-effect ripple-hover text-foreground hover:bg-primary/30" asChild>
          <Link href="/gear">
            Explore the Collection
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Decorative wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
