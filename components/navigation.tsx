"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-foreground">
            TrailHaven
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/gear"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Gear
            </Link>
            <Link
              href="/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/gear"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              Gear
            </Link>
            <Link
              href="/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              Reviews
            </Link>
            <Link
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
