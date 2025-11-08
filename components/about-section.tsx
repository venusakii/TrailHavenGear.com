export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Floating mirror logo background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <div className="font-serif text-[200px] font-bold">TH</div>
        </div>

        <div className="relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 text-balance">
            Reflections in Design
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="glass-effect p-8 rounded-xl ripple-hover">
              <p className="text-lg text-foreground/80 leading-relaxed">
                TrailHaven Gear crafts outdoor equipment where aesthetics meet performance — each piece a reflection of
                mindful travel.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-xl ripple-hover">
              <p className="text-lg text-foreground/80 leading-relaxed">
                We believe that lightness equals freedom, and every gram saved brings you closer to nature's essence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
