import { Navigation } from "@/components/navigation"
import { ProductGrid } from "@/components/product-grid"
import { HighlightProduct } from "@/components/highlight-product"

export default function GearPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">Ultralight Gear</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of the finest ultralight hiking and camping gear
            </p>
          </div>

          <ProductGrid />

          <div className="mt-24">
            <HighlightProduct />
          </div>
        </div>
      </main>
    </div>
  )
}
