import { ProductCard } from "./product-card"

const products = [
  {
    slug: "featherstone-ultralight-tent",
    name: "Featherstone Ultralight Backpacking Tent",
    category: "Shelter",
    weight: "2.1 lbs (952g)",
    price: "$129.99",
    image: "https://m.media-amazon.com/images/I/71RwqpEi36L._AC_SX679_.jpg",
    url: "https://www.amazon.com/Featherstone-Ultralight-Backpacking-3-Season-Expeditions/dp/B0727Y4XLT"
  },
  {
    slug: "chemex-8-cup",
    name: "Chemex Pour-Over Glass Coffeemaker - 8 Cup",
    category: "Cook",
    weight: "1.3 lbs (590g)",
    price: "$48.93",
    image: "https://m.media-amazon.com/images/I/51oVjI30xdL._AC_SX679_.jpg",
    url: "https://www.amazon.com/Chemex-Classic-Pour-over-Glass-Coffeemaker/dp/B000I1WP7W"
  },
  {
    slug: "toaks-titanium-1100-pot",
    name: "TOAKS Titanium 1100ml Pot with Pan",
    category: "Cook",
    weight: "5.4 oz (153g)",
    price: "$44.95",
    image: "https://m.media-amazon.com/images/I/519nYT7ylqL._AC_SX679_.jpg",
    url: "https://www.amazon.com/TOAKS-Titanium-1100ml-Pot-Pan/dp/B009MZHRKU"
  },
  {
    slug: "emergency-water-straws",
    name: "High-Capacity Emergency Water Filter Straws (4-Pack)",
    category: "Hydration",
    weight: "2 oz each (56g)",
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/81xDaUJnCyL._SX522_.jpg",
    url: "https://www.amazon.com/High-Capacity-Emergency-Water-Straws-Emergencies/dp/B09LDFR8HX"
  },
  {
    slug: "cymula-memory-foam-mattress",
    name: "CYMULA 4-inch Memory Foam Camping Mattress",
    category: "Sleep",
    weight: "9.5 lbs (4.3kg)",
    price: "$89.99",
    image: "https://m.media-amazon.com/images/I/91syF9lzr+L._AC_SX679_.jpg",
    url: "https://www.amazon.com/CYMULA-CertiPUR-US-Mattress-Portable-Sleepover/dp/B0BZ87ZQ7W"
  },
  {
    slug: "fire-maple-greenpeak-stove",
    name: "Fire-Maple Greenpeak 3-Season Backpacking Stove",
    category: "Cook",
    weight: "7.8 oz (221g)",
    price: "$59.95",
    image: "https://m.media-amazon.com/images/I/51ilprX3FyL._AC_SX679_.jpg",
    url: "https://www.amazon.com/Fire-Maple-Greenpeak-Backpacking-Camping-Regulated/dp/B0DGTJPVZ2"
  },
  {
    slug: "cartman-bungee-cords",
    name: "Cartman Bungee Cords Assortment 28pc",
    category: "Gear",
    weight: "3.2 lbs (1.45kg)",
    price: "$16.99",
    image: "https://m.media-amazon.com/images/I/81jT19fv8JL._AC_SX679_.jpg",
    url: "https://www.amazon.com/Cartman-Multipurpose-Protective-Durable-Finished/dp/B089PY2LCV"
  },
  {
    slug: "prime-adventure-trekking-poles",
    name: "Prime Adventure Carbon Fiber Trekking Poles",
    category: "Gear",
    weight: "8.2 oz per pole (232g)",
    price: "$49.99",
    image: "https://m.media-amazon.com/images/I/81pHzGGf8jL._AC_SX679_.jpg",
    url: "https://www.amazon.com/Prime-Adventure-Hiking-Stick-Walking/dp/B0C86S9Z91"
  },
  {
    slug: "poygik-camping-blanket",
    name: "Poygik Premium Puffy Camping Blanket",
    category: "Sleep",
    weight: "1.8 lbs (816g)",
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/81Ua6zNMiLL._AC_SX679_.jpg",
    url: "https://www.amazon.com/Poygik-Premium-Camping-Vehicle-Emergencies/dp/B0C9M3VMD5"
  },
  {
    slug: "danforce-g2-headlamp",
    name: "DanForce G2 Headlamp 1080 Lumens",
    category: "Gear",
    weight: "3.5 oz (99g)",
    price: "$39.99",
    image: "https://m.media-amazon.com/images/I/71yVS+GS5XL._AC_SX679_.jpg",
    url: "https://www.amazon.com/DanForce-Headlamp-Rechargeable-Flashlight-HeadLamps/dp/B0762CW1C1"
  }
]

export function ProductGrid() {
  return (
    <section id="products" className="py-24 px-4 bg-gradient-to-b from-background to-primary/10">
      <div className="container mx-auto max-w-7xl">
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
