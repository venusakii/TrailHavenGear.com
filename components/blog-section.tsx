import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "How to Cut 2 lbs Off Your Pack",
    excerpt: "Essential strategies for ultralight backpacking without sacrificing comfort or safety.",
    image: "/ultralight-backpack-gear-laid-out.jpg",
    slug: "cut-2-lbs-off-pack",
  },
  {
    title: "Why Lightness Equals Freedom",
    excerpt: "Exploring the philosophy behind minimalist outdoor travel and gear selection.",
    image: "/solo-hiker-mountain-ridge-freedom.jpg",
    slug: "lightness-equals-freedom",
  },
  {
    title: "The Art of Brewing in the Mountains",
    excerpt: "Perfect your trail coffee ritual with our guide to lightweight brewing methods.",
    image: "/coffee-brewing-mountain-campsite.jpg",
    slug: "brewing-in-mountains",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Reflected Stories</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="glass-effect rounded-xl overflow-hidden ripple-hover">
                <div className="aspect-[4/3] relative bg-primary/10">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground text-balance">{post.title}</h3>
                  <p className="text-foreground/70 mb-4 text-pretty leading-relaxed">{post.excerpt}</p>
                  <Button variant="ghost" size="sm" className="text-foreground hover:bg-primary/20 group/btn" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Mirror reflection */}
              <div
                className="absolute -bottom-6 left-0 right-0 h-12 opacity-20 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, rgba(205, 231, 240, 0.4), transparent)",
                  transform: "scaleY(-1)",
                  filter: "blur(6px)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
