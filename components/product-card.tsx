"use client"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  product: {
    name: string
    category: string
    weight: string
    price: string
    image: string
    slug?: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      {/* Main card */}
      <Link href={`/product/${product.slug || product.name.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="glass-effect rounded-xl overflow-hidden ripple-hover cursor-pointer">
          <div className="aspect-square relative bg-primary/10">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {product.category}
              </span>
              <span className="text-xs font-medium text-muted-foreground">{product.weight}</span>
            </div>

            <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{product.name}</h3>

            <div className="flex items-center justify-between">{/* Placeholder for additional content */}</div>
          </div>
        </div>
      </Link>

      {/* Mirror reflection effect */}
      <div
        className="absolute -bottom-8 left-0 right-0 h-16 opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(205, 231, 240, 0.3), transparent)",
          transform: "scaleY(-1)",
          filter: "blur(8px)",
        }}
      />
    </div>
  )
}
