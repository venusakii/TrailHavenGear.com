"use client"

import { Droplet, Layers, Sparkles } from "lucide-react"

const features = [
  {
    icon: Droplet,
    title: "Waterproof Fabrics",
    description: "Advanced silnylon materials that repel water while remaining breathable and lightweight.",
  },
  {
    icon: Layers,
    title: "Silnylon Threading",
    description: "Triple-stitched seams using specialized thread for maximum durability and minimal weight.",
  },
  {
    icon: Sparkles,
    title: "Titanium Microframe",
    description: "Aerospace-grade titanium construction provides strength without the weight penalty.",
  },
]

export function HowItsMade() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Engineering Reflections
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative glass-effect rounded-xl p-8 ripple-hover">
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>

              {/* Mirror segment effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(205, 231, 240, 0.5), transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
