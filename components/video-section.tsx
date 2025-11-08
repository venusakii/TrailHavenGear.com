"use client"

import Image from "next/image"

export function VideoSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Mirage in Motion</h2>

        <div className="relative">
          {/* Main image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-effect">
            <Image
              src="/misty-mountain-landscape-at-dawn-with-hiking-trail.jpg"
              alt="Misty mountain landscape at dawn"
              fill
              className="object-cover"
            />

            {/* Mirror overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
              <div
                className="w-full h-full relative"
                style={{
                  transform: "scaleY(-1)",
                  filter: "blur(4px)",
                }}
              >
                <Image
                  src="/misty-mountain-landscape-at-dawn-with-hiking-trail.jpg"
                  alt="Reflected mountain landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
