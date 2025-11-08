export function Footer() {
  return (
    <footer className="py-16 px-4 glass-effect">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">TrailHaven</h3>
            <p className="text-sm text-foreground/70 text-pretty">Mirrors of nature, reflections of the soul.</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="text-foreground/70 hover:text-foreground transition-colors">
                  All Gear
                </a>
              </li>
              <li>
                <a href="#products" className="text-foreground/70 hover:text-foreground transition-colors">
                  Shelter
                </a>
              </li>
              <li>
                <a href="#products" className="text-foreground/70 hover:text-foreground transition-colors">
                  Cook Systems
                </a>
              </li>
              <li>
                <a href="#products" className="text-foreground/70 hover:text-foreground transition-colors">
                  Sleep Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-foreground/70 hover:text-foreground transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/60 mb-2">© 2025 TrailHavenGear.com — All Rights Reserved.</p>
          <p className="text-xs text-foreground/50">
            Amazon Affiliate Partner 🛒 As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
