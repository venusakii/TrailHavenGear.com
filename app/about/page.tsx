"use client"

import { Navigation } from "@/components/navigation"
import { Compass, Heart, Mountain, Users, Award, Globe } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Mountain,
    title: "Adventure First",
    description: "We design for those who push boundaries and seek the untouched wilderness.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Every product is chosen for durability and minimal environmental impact.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our recommendations come from real adventurers and trail-tested experiences.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "We only feature gear that meets our rigorous standards for performance and reliability.",
  },
]

const team = [
  {
    name: "Alex Thompson",
    role: "Founder & Trail Expert",
    image: "/team-sarah-hiking-portrait.jpg",
    bio: "10+ years hiking the PCT, AT, and CDT. Ultralight enthusiast with 6,000+ trail miles.",
  },
  {
    name: "Jordan Martinez",
    role: "Gear Testing Lead",
    image: "/team-marcus-with-gear.jpg",
    bio: "Former wilderness guide with expertise in technical equipment and survival gear.",
  },
  {
    name: "Taylor Anderson",
    role: "Content & Community",
    image: "/team-emma-at-campsite.jpg",
    bio: "Adventure photographer and writer documenting gear performance in extreme conditions.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <Compass className="h-64 w-64 text-foreground" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-foreground relative z-10">
              About TrailHaven
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto relative z-10 leading-relaxed">
              Where reflection meets adventure. We curate the finest ultralight gear for those who seek freedom on the
              trail.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="glass-effect rounded-2xl p-8 md:p-12 ripple-hover">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  TrailHaven was born from a simple realization: every ounce matters when you're carrying your world on
                  your back. Founded by long-distance hikers who've logged thousands of miles on America's most
                  challenging trails, we understand the profound connection between lightweight gear and true wilderness
                  freedom.
                </p>
                <p>
                  What started as a personal quest to find the perfect ultralight setup has evolved into a
                  community-driven platform helping adventurers make informed gear choices. We test everything
                  ourselves, from the alpine peaks of the Sierra Nevada to the humid forests of the Appalachian Trail.
                </p>
                <p>
                  Today, TrailHaven serves as a trusted guide for both weekend warriors and thru-hikers, offering
                  carefully curated recommendations that balance weight, durability, and performance. Our mission is
                  simple: help you carry less, experience more.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-24">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="group relative glass-effect rounded-xl p-6 ripple-hover">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>

                  {/* Mirror effect on hover */}
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

          {/* Team Section */}
          <div className="mb-24">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="glass-effect rounded-xl overflow-hidden ripple-hover">
                    {/* Team member photo with mirror effect */}
                    <div className="relative h-80 overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                      {/* Mirror reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-2xl font-bold mb-1 text-foreground">{member.name}</h3>
                      <p className="text-sm text-primary mb-3 font-medium">{member.role}</p>
                      <p className="text-foreground/70 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>

                  {/* Subtle mirror glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl -z-10 blur-xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="relative glass-effect rounded-2xl p-8 md:p-12 ripple-hover overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />

              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-8 w-8 text-foreground" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Mission</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    To empower adventurers with knowledge and gear recommendations that enhance their wilderness
                    experiences while minimizing environmental impact. We believe that the right equipment isn't just
                    about going lighter—it's about connecting deeper with nature and discovering what truly matters when
                    you're miles from civilization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How We Choose Gear Section */}
          <div className="mb-24">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              How We Choose Gear
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-effect rounded-xl p-8 ripple-hover">
                <div className="text-6xl font-serif font-bold text-primary/30 mb-4">01</div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Real-World Testing</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every product is tested on actual trails in various conditions. We don't just read specs—we live with
                  the gear.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-8 ripple-hover">
                <div className="text-6xl font-serif font-bold text-primary/30 mb-4">02</div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Community Feedback</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We aggregate reviews from thousands of hikers to ensure our recommendations reflect real experiences.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-8 ripple-hover">
                <div className="text-6xl font-serif font-bold text-primary/30 mb-4">03</div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Value Analysis</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We evaluate the weight-to-performance ratio to ensure you're getting the best bang for your buck.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center"></div>
        </div>
      </main>
    </div>
  )
}
