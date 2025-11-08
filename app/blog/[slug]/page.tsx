import type React from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"

const blogPosts = {
  "cut-2-lbs-off-pack": {
    title: "How to Cut 2 lbs Off Your Pack",
    author: "Alex Thompson",
    date: "March 15, 2024",
    image: "/ultralight-backpack-gear-laid-out.jpg",
    content: `
      <h2>The Weight That Holds You Back</h2>
      <p>Every ounce matters on the trail. When you're carrying your home on your back through rugged terrain, that extra weight compounds with every step. After years of ultralight backpacking, I've learned that cutting 2 pounds from your pack isn't just about comfort—it's about freedom.</p>

      <h2>Start With the Big Three</h2>
      <p>Your shelter, sleep system, and backpack make up roughly 60% of your base weight. These are where the most dramatic savings happen:</p>
      
      <h3>1. Shelter Solutions</h3>
      <p>Swap that 4-pound tent for a tarp and bivy system (1.5 lbs) or an ultralight solo shelter (under 2 lbs). Modern fabrics like Dyneema offer incredible durability at a fraction of traditional weights.</p>

      <h3>2. Sleep System</h3>
      <p>Down quilts instead of mummy bags save 8-12 ounces while providing better ventilation. Pair with an insulated pad rated for your conditions—no need to carry extra warmth you won't use.</p>

      <h3>3. Pack Choice</h3>
      <p>Once your load is truly ultralight, you can downsize to frameless packs under 1 pound. The key is getting your total weight low enough first.</p>

      <h2>The Small Stuff Adds Up</h2>
      <p>After optimizing the big three, scrutinize every item. Replace heavy cook systems with alcohol stoves (0.5 oz). Cut your toothbrush handle. Use micro-thin stakes. Each decision saves ounces that become pounds.</p>

      <h2>What Not to Cut</h2>
      <p>Safety gear is non-negotiable. Keep your first aid kit, navigation tools, and emergency shelter. Smart lightweight hiking means calculated choices, not dangerous ones.</p>
    `,
  },
  "lightness-equals-freedom": {
    title: "Why Lightness Equals Freedom",
    author: "Jordan Martinez",
    date: "March 10, 2024",
    image: "/solo-hiker-mountain-ridge-freedom.jpg",
    content: `
      <h2>The Philosophy of Going Light</h2>
      <p>There's a moment on every ultralight trip when it hits you: the weight you're not carrying changes how you experience the wilderness. It's not just physical—it's a fundamental shift in your relationship with the outdoors.</p>

      <h2>Moving Through, Not Against Nature</h2>
      <p>Traditional backpacking feels like conquering terrain. With an ultralight setup, you flow through landscapes. Hills that once demanded breaks become gentle rises. Stream crossings transform from obstacles into opportunities.</p>

      <h3>The Mental Load</h3>
      <p>When your pack weighs 15 pounds instead of 40, your mind relaxes. You're not bracing against weight with every step. This mental freedom lets you notice the forest floor's patterns, hear distant bird calls, see how light filters through canyon walls.</p>

      <h2>More Ground, Deeper Experiences</h2>
      <p>Ultralight gear doesn't mean rushing through nature. It means having energy at day's end to explore side trails, climb that promising ridge, wade into alpine lakes. You go farther when you want to, not because you have to reach camp before exhaustion hits.</p>

      <h2>Minimalism as Connection</h2>
      <p>Carrying less creates space—physical and mental. You learn what you truly need versus what comfort culture convinced you to carry. This simplicity brings clarity: in the backcountry and in life.</p>

      <h2>The Price of Freedom</h2>
      <p>Ultralight gear costs more upfront. Quality materials, advanced engineering, and specialized design don't come cheap. But the return—thousands of trail miles with less wear on your body and more capacity for wonder—makes it the best investment in your outdoor life.</p>
    `,
  },
  "brewing-in-mountains": {
    title: "The Art of Brewing in the Mountains",
    author: "Taylor Anderson",
    date: "March 5, 2024",
    image: "/coffee-brewing-on-mountain-campsite-at-sunrise.jpg",
    content: `
      <h2>Morning Ritual at 10,000 Feet</h2>
      <p>There's something sacred about brewing coffee as the sun crests distant peaks. That first sip, steam rising into cold mountain air, becomes the punctuation mark between night and day, rest and adventure.</p>

      <h2>The Ultralight Brewing Arsenal</h2>
      <p>Great trail coffee doesn't require heavy equipment. Here's what works at altitude and after miles:</p>

      <h3>Pour Over Perfection</h3>
      <p>A collapsible silicone dripper weighs under an ounce and produces café-quality results. Pre-grind your beans at home, pack in a small bag, and you're set. The ritual of pouring becomes meditation.</p>

      <h3>French Press Alternative</h3>
      <p>The JavaPress titanium system (3 oz) delivers rich, full-bodied coffee without the bulk of traditional presses. Perfect for those who can't compromise on taste but won't compromise on weight.</p>

      <h3>Instant Innovation</h3>
      <p>Modern instant coffee has evolved beyond freeze-dried mediocrity. Premium single-origin packets from specialty roasters now rival fresh-brewed quality—at zero weight penalty and maximum convenience.</p>

      <h2>The Water Factor</h2>
      <p>Mountain water makes exceptional coffee. That crisp, mineral-rich taste from high-altitude streams creates flavors impossible to replicate at home. Always filter first, then let it sing.</p>

      <h2>Timing and Temperature</h2>
      <p>At altitude, water boils at lower temperatures. This actually benefits coffee brewing—you're naturally hitting the ideal 195-205°F range. Let grounds bloom for 30 seconds before full pour to release oils and aromatics.</p>

      <h2>The Cup That Matters</h2>
      <p>Titanium double-wall mugs keep coffee hot longer while weighing just 2-3 ounces. Worth every gram when you're savoring sunrise views and don't want to rush.</p>
    `,
  },
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Navigation />

      <article className="container mx-auto max-w-4xl px-4 py-24">
        {/* Back button */}
        <Button variant="ghost" size="sm" className="mb-8 text-foreground/80 hover:text-foreground" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Hero image */}
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 glass-effect">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Title and meta */}
        <div className="glass-effect rounded-2xl p-8 mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none glass-effect rounded-2xl p-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={
            {
              "--tw-prose-body": "hsl(var(--foreground) / 0.8)",
              "--tw-prose-headings": "hsl(var(--foreground))",
              "--tw-prose-links": "hsl(var(--primary))",
            } as React.CSSProperties
          }
        />

        {/* CTA */}
        <div className="mt-12 glass-effect rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Ready to lighten your load?</h3>
          <p className="text-foreground/70 mb-6">Explore our curated collection of ultralight gear.</p>
          <Button size="lg" className="glass-effect text-foreground hover:bg-primary/30" asChild>
            <Link href="/gear">Browse Gear</Link>
          </Button>
        </div>
      </article>
    </div>
  )
}
