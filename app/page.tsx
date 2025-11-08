import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductGrid } from "@/components/product-grid"
import { HighlightProduct } from "@/components/highlight-product"
import { VideoSection } from "@/components/video-section"
import { HowItsMade } from "@/components/how-its-made"
import { Testimonials } from "@/components/testimonials"
import { BlogSection } from "@/components/blog-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { CookieNotification } from "@/components/cookie-notification"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductGrid />
      <HighlightProduct />
      <VideoSection />
      <HowItsMade />
      <Testimonials />
      <BlogSection />
      <CTASection />
      <Footer />
      <CookieNotification />
    </main>
  )
}
