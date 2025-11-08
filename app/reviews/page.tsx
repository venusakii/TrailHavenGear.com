import { Navigation } from "@/components/navigation"
import { Star } from "lucide-react"
import Image from "next/image"

const productReviews = [
  {
    product: "Cascade Ultralight Tent",
    rating: 5,
    author: "Emma Rodriguez",
    date: "March 2024",
    image: "/ultralight-tent-in-mountain-campsite.jpg",
    review:
      "This tent has completely transformed my backcountry experience. At just 1.8 lbs, it feels like carrying air, yet it stood strong through a surprise storm in the Cascades. The setup is intuitive even in fading light.",
    pros: ["Incredibly lightweight", "Easy setup", "Great in wind"],
    cons: ["Premium price point"],
  },
  {
    product: "Titanium Cook Kit Pro",
    rating: 5,
    author: "Marcus Chen",
    date: "February 2024",
    image: "/titanium-camping-cookware-on-trail.jpg",
    review:
      "As someone who's tried dozens of cook systems, this one finally checks all the boxes. The titanium construction means it's virtually indestructible, and the nesting design is brilliant. My morning coffee ritual just got a serious upgrade.",
    pros: ["Durable titanium", "Nests perfectly", "Even heat distribution"],
    cons: ["Requires careful cleaning"],
  },
  {
    product: "Alpine Water Filter",
    rating: 4,
    author: "Sarah Morrison",
    date: "January 2024",
    image: "/water-filter-being-used-at-mountain-stream.jpg",
    review:
      "The flow rate is impressive and the taste is noticeably cleaner than my old filter. I appreciate the minimal hand fatigue even after filtering several liters. Only wish it came with a spare cartridge.",
    pros: ["Fast flow rate", "Great taste", "Compact design"],
    cons: ["No spare cartridge included"],
  },
  {
    product: "Cloud Sleeping Pad",
    rating: 5,
    author: "David Park",
    date: "March 2024",
    image: "/sleeping-pad-inside-tent-at-night.jpg",
    review:
      "Finally, a sleeping pad that doesn't sacrifice comfort for weight. The insulation kept me warm down to 20°F, and the thickness provides genuine cushioning against rocky ground. Packs down smaller than my water bottle.",
    pros: ["Excellent R-value", "Compact packed size", "Comfortable"],
    cons: ["None identified"],
  },
]

const testimonials = [
  {
    quote:
      "TrailHaven's recommendations have never steered me wrong. Every piece of gear performs exactly as promised.",
    author: "Ella Marlowe",
    role: "Thru-Hiker",
    image: "/female-hiker-portrait-outdoors.jpg",
    trails: "PCT, AT, CDT",
  },
  {
    quote:
      "As a photographer carrying heavy camera gear, every ounce matters. These ultralight picks are game-changers.",
    author: "Jiro Nakamura",
    role: "Adventure Photographer",
    image: "/male-photographer-portrait-with-camera.jpg",
    trails: "Alps, Patagonia, Nepal",
  },
  {
    quote: "The curation here is exceptional. It's clear they actually use and test everything they recommend.",
    author: "Maya Chen",
    role: "Ultralight Backpacker",
    image: "/asian-female-backpacker-portrait-smiling.jpg",
    trails: "Sierra Nevada, Rockies",
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 border-b border-border/50">
          <div className="text-center mb-8">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-foreground text-balance">
              Trail Reviews
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real experiences from adventurers who trust TrailHaven gear recommendations
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-4xl font-bold text-foreground mb-2">2,400+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-4xl font-bold text-foreground mb-2">4.8</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-4xl font-bold text-foreground mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Recommend</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-4xl font-bold text-foreground mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Trail Miles</div>
            </div>
          </div>
        </div>

        {/* Product Reviews */}
        <div className="container mx-auto px-4 py-24">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Gear Tested on Real Trails
          </h2>

          <div className="space-y-16 max-w-5xl mx-auto">
            {productReviews.map((review, index) => (
              <div key={index} className="glass-effect rounded-2xl overflow-hidden ripple-hover">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Image */}
                  <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.product}
                      fill
                      className="object-cover"
                    />
                    {/* Mirror reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        {review.product}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          by {review.author} • {review.date}
                        </span>
                      </div>

                      {/* Review Text */}
                      <p className="text-foreground/90 mb-6 leading-relaxed text-pretty">{review.review}</p>

                      {/* Pros & Cons */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-sm text-foreground mb-2">Pros</h4>
                          <ul className="space-y-1">
                            {review.pros.map((pro, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">+</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {review.cons.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-sm text-foreground mb-2">Cons</h4>
                            <ul className="space-y-1">
                              {review.cons.map((con, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-muted-foreground/50 mt-1">-</span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-24 px-4 bg-muted/20">
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
                      <p className="text-xs text-muted-foreground/70 mt-1">{testimonial.trails}</p>
                    </div>
                  </div>

                  {/* Mirror reflection of profile image */}
                  <div
                    className="absolute top-full left-1/2 w-20 h-10 opacity-20 pointer-events-none overflow-hidden"
                    style={{
                      transform: "translateX(-50%) scaleY(-1)",
                      filter: "blur(4px)",
                      marginTop: "-40px",
                    }}
                  >
                    <Image src={testimonial.image || "/placeholder.svg"} alt="" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        
      </main>
    </div>
  )
}
