import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about gear or recommendations? We'd love to hear from you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Send a Message</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                  <Input placeholder="Your name" className="bg-background/50" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <Textarea placeholder="Tell us about your hiking plans..." rows={6} className="bg-background/50" />
                </div>

                <Button className="w-full">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Contact Info</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">hello@trailhaven.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">+1 805-240-0953</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-sm text-muted-foreground">
                        1848 Euclid Avenue
                        <br />
                        Oxnard, California 93032
                        <br />
                        United States
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10am - 4pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
