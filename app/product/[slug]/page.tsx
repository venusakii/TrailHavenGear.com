import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

const products = {
  "featherstone-ultralight-tent": {
    name: "Featherstone Ultralight Backpacking Tent",
    category: "Shelter",
    weight: "952g",
    price: "$129.99",
    image: "https://m.media-amazon.com/images/I/71RwqpEi36L._AC_SX679_.jpg",
    rating: 4.7,
    reviews: 842,
    description:
      "Freestanding 1-person ultralight tent designed for 3-season backpacking. Fully waterproof with factory-sealed seams and durable silnylon floor.",
    features: [
      "20D silnylon ripstop fabric",
      "Full coverage rainfly with vents",
      "Aluminum DAC poles",
      "Fast setup with color-coded clips",
    ],
    specs: {
      "Pack Weight": "952g (2.1 lbs)",
      "Floor Space": "19 sq ft",
      "Peak Height": "40 inches",
      "Packed Size": "16 × 6 inches",
    },
    amazonLink: "https://www.amazon.com/Featherstone-Ultralight-Backpacking-3-Season-Expeditions/dp/B0727Y4XLT",
  },
  "chemex-8-cup": {
    name: "Chemex Pour-Over Glass Coffeemaker - 8 Cup",
    category: "Cook",
    weight: "590g",
    price: "$48.93",
    image: "https://m.media-amazon.com/images/I/51oVjI30xdL._AC_SX679_.jpg",
    rating: 4.8,
    reviews: 12000,
    description:
      "Iconic pour-over coffeemaker made from non-porous borosilicate glass. Delivers the purest flavor experience with thick paper filters.",
    features: [
      "Hand-blown borosilicate glass",
      "Wood collar with leather tie",
      "Polished wood aesthetic",
      "Works with CHEMEX bonded filters",
    ],
    specs: {
      Weight: "590g (1.3 lbs)",
      Capacity: "40 oz (8 cups)",
      Height: "9 inches",
      Material: "Borosilicate glass + wood",
    },
    amazonLink: "https://www.amazon.com/Chemex-Classic-Pour-over-Glass-Coffeemaker/dp/B000I1WP7W",
  },
  "toaks-titanium-1100-pot": {
    name: "TOAKS Titanium 1100ml Pot with Pan",
    category: "Cook",
    weight: "153g",
    price: "$44.95",
    image: "https://m.media-amazon.com/images/I/519nYT7ylqL._AC_SX679_.jpg",
    rating: 4.9,
    reviews: 2300,
    description:
      "Ultralight titanium pot and pan combo. Perfect nesting design for solo or duo backpacking meals.",
    features: [
      "100% pure titanium construction",
      "Folding bail handles",
      "Lid with lockable grip",
      "Includes mesh storage sack",
    ],
    specs: {
      "Total Weight": "153g (5.4 oz)",
      "Pot Capacity": "1100ml",
      "Pan Diameter": "135mm",
      "Packed Size": "135 × 115mm",
    },
    amazonLink: "https://www.amazon.com/TOAKS-Titanium-1100ml-Pot-Pan/dp/B009MZHRKU",
  },
  "emergency-water-straws": {
    name: "High-Capacity Emergency Water Filter Straws (4-Pack)",
    category: "Hydration",
    weight: "56g",
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/81xDaUJnCyL._SX522_.jpg",
    rating: 4.6,
    reviews: 3200,
    description:
      "Personal water filter straws that remove 99.9999% of bacteria and parasites. Essential emergency or ultralight hydration solution.",
    features: [
      "0.1 micron filtration",
      "No shelf life – lasts indefinitely",
      "Filters up to 1,000 gallons per straw",
      "BPA-free construction",
    ],
    specs: {
      Weight: "56g each",
      "Filter Life": "4,000 liters (total)",
      "Flow Rate": "700ml/min",
      Length: "8.5 inches",
    },
    amazonLink: "https://www.amazon.com/High-Capacity-Emergency-Water-Straws-Emergencies/dp/B09LDFR8HX",
  },
  "cymula-memory-foam-mattress": {
    name: "CYMULA 4-inch Memory Foam Camping Mattress",
    category: "Sleep",
    weight: "4.3kg",
    price: "$89.99",
    image: "https://m.media-amazon.com/images/I/91syF9lzr+L._AC_SX679_.jpg",
    rating: 4.5,
    reviews: 890,
    description:
      "Luxurious 4-inch thick memory foam mattress for car camping and glamping. Rolls up compactly with compression straps.",
    features: [
      "CertiPUR-US certified foam",
      "Water-resistant cover",
      "Anti-slip bottom",
      "Includes carry bag + straps",
    ],
    specs: {
      Weight: "4.3kg (9.5 lbs)",
      Thickness: "4 inches",
      Size: "75 × 30 inches",
      "Rolled Size": "32 × 14 inches",
    },
    amazonLink: "https://www.amazon.com/CYMULA-CertiPUR-US-Mattress-Portable-Sleepover/dp/B0BZ87ZQ7W",
  },
  "fire-maple-greenpeak-stove": {
    name: "Fire-Maple Greenpeak Backpacking Stove",
    category: "Cook",
    weight: "221g",
    price: "$59.95",
    image: "https://m.media-amazon.com/images/I/51ilprX3FyL._AC_SX679_.jpg",
    rating: 4.7,
    reviews: 560,
    description:
      "High-efficiency remote canister stove with precise flame control. Built for cold weather and windy conditions.",
    features: [
      "Remote canister design",
      "Pre-heat tube for cold weather",
      "Wind-resistant burner",
      "Foldable pot supports",
    ],
    specs: {
      Weight: "221g (7.8 oz)",
      "Boil Time": "3:15 (1L)",
      "Power Output": "3200W",
      "Folded Size": "11 × 8 × 7cm",
    },
    amazonLink: "https://www.amazon.com/Fire-Maple-Greenpeak-Backpacking-Camping-Regulated/dp/B0DGTJPVZ2",
  },
  "cartman-bungee-cords": {
    name: "Cartman Bungee Cords Assortment 28pc",
    category: "Gear",
    weight: "1.45kg",
    price: "$16.99",
    image: "https://m.media-amazon.com/images/I/81jT19fv8JL._AC_SX679_.jpg",
    rating: 4.6,
    reviews: 18400,
    description:
      "Complete bungee cord set for securing gear, tarps, and luggage. UV-resistant coating for outdoor durability.",
    features: [
      "Premium rubber core",
      "UV-resistant polyester jacket",
      "Steel hooks with plastic coating",
      "28 pieces in multiple sizes",
    ],
    specs: {
      Weight: "1.45kg (3.2 lbs)",
      "Pack Contents": "28 cords",
      Sizes: "10″ to 40″",
      "Max Stretch": "2x original length",
    },
    amazonLink: "https://www.amazon.com/Cartman-Multipurpose-Protective-Durable-Finished/dp/B089PY2LCV",
  },
  "prime-adventure-trekking-poles": {
    name: "Prime Adventure Carbon Fiber Trekking Poles",
    category: "Gear",
    weight: "464g",
    price: "$49.99",
    image: "https://m.media-amazon.com/images/I/81pHzGGf8jL._AC_SX679_.jpg",
    rating: 4.8,
    reviews: 2100,
    description:
      "Ultralight carbon fiber poles with cork grips and quick-lock system. Ideal for long-distance hikers and thru-hikers.",
    features: [
      "100% 3K carbon fiber shafts",
      "Natural cork grips",
      "Quick-lock adjustment",
      "Includes mud & snow baskets",
    ],
    specs: {
      "Weight (pair)": "464g (16.4 oz)",
      "Collapsed Length": "24 inches",
      "Max Length": "53 inches",
      Material: "Carbon fiber + cork",
    },
    amazonLink: "https://www.amazon.com/Prime-Adventure-Hiking-Stick-Walking/dp/B0C86S9Z91",
  },
  "poygik-camping-blanket": {
    name: "Poygik Premium Puffy Camping Blanket",
    category: "Sleep",
    weight: "816g",
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/81Ua6zNMiLL._AC_SX679_.jpg",
    rating: 4.7,
    reviews: 3400,
    description:
      "Packable puffy blanket with synthetic insulation. Water-resistant and perfect as quilt, top layer, or emergency shelter.",
    features: [
      "20D ripstop nylon shell",
      "Synthetic insulation (warm to 40°F)",
      "Stuff sack doubles as pillow",
      "Snap buttons for wearable use",
    ],
    specs: {
      Weight: "816g (1.8 lbs)",
      Size: "78 × 54 inches",
      "Packed Size": "14 × 7 inches",
      "Fill Power Equivalent": "650+",
    },
    amazonLink: "https://www.amazon.com/Poygik-Premium-Camping-Vehicle-Emergencies/dp/B0C9M3VMD5",
  },
  "danforce-g2-headlamp": {
    name: "DanForce G2 Headlamp 1080 Lumens",
    category: "Gear",
    weight: "99g",
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/71yVS+GS5XL._AC_SX679_.jpg",
    rating: 4.6,
    reviews: 6800,
    description:
      "Professional-grade rechargeable headlamp with 1080 lumens and red light mode. Built tough for search & rescue and night hiking.",
    features: [
      "1080 lumen CREE LED",
      "USB-C rechargeable",
      "90° adjustable beam",
      "IPX8 waterproof rating",
    ],
    specs: {
      Weight: "99g (3.5 oz)",
      "Max Output": "1080 lumens",
      Runtime: "3–120 hours",
      "Beam Distance": "180 meters",
    },
    amazonLink: "https://www.amazon.com/DanForce-Headlamp-Rechargeable-Flashlight-HeadLamps/dp/B0762CW1C1",
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link
            href="/gear"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Gear
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="glass-effect rounded-2xl overflow-hidden p-4">
                <div className="aspect-square relative bg-primary/10 rounded-xl overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Mirror reflection */}
              <div
                className="h-32 opacity-20 rounded-2xl"
                style={{
                  background: "linear-gradient(to bottom, rgba(205, 231, 240, 0.3), transparent)",
                  transform: "scaleY(-1)",
                  filter: "blur(12px)",
                }}
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4 text-foreground">{product.name}</h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-foreground">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                <p className="text-lg text-foreground/80 leading-relaxed mb-6">{product.description}</p>

                <div className="glass-effect rounded-xl p-6 mb-6">
                  <Button
                    size="lg"
                    className="w-full group glass-effect ripple-hover text-foreground hover:bg-primary/30"
                    asChild
                  >
                    <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                      View on Amazon
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Specifications</h3>
                <dl className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border/30">
                      <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                      <dd className="text-sm font-medium text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
