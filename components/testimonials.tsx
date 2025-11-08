import Image from "next/image"

const testimonials = [
  {
    quote: "The tent practically disappears in my pack.",
    author: "Ella Marlowe",
    role: "Thru-Hiker",
    image: "/female-hiker-portrait.jpg",
  },
  {
    quote: "Beautifully designed gear for minimalist travel.",
    author: "Jiro Nakamura",
    role: "Adventure Photographer",
    image: "/male-photographer-portrait.png",
  },
  {
    quote: "Every piece feels like art you can actually use.",
    author: "Maya Chen",
    role: "Ultralight Backpacker",
    image: "/asian-female-backpacker-portrait.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Echoes from the Trail
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Main card */}
              <div className="glass-effect rounded-xl p-8 ripple-hover">
                {/* Profile image */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 mx-auto ring-2 ring-primary/20">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Quote */}
                <p className="text-lg font-medium text-foreground mb-4 text-center text-pretty">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Mirror reflection of profile image */}
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-20 h-10 opacity-20 pointer-events-none overflow-hidden"
                style={{
                  transform: "translateX(-50%) scaleY(-1)",
                  filter: "blur(4px)",
                  marginTop: "-40px",
                }}
              >
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt=""
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
