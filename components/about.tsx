export function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto animate-fadeIn">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="section-title">About Me</h2>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              I'm a passionate full-stack developer with over 5+ years of experience building scalable web applications. My journey in tech started with a curiosity about how the web works, and it has evolved into a deep commitment to creating exceptional digital experiences.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. I'm dedicated to writing clean, maintainable code and following best practices in software development.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, writing about web development, or exploring new technologies. I'm always eager to learn and grow as a developer.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-foreground">Quick Facts</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex justify-between">
                  <span>Years of Experience:</span>
                  <span className="font-semibold text-foreground">5+ years</span>
                </li>
                <li className="flex justify-between">
                  <span>Projects Completed:</span>
                  <span className="font-semibold text-foreground">20+ projects</span>
                </li>
                <li className="flex justify-between">
                  <span>Companies Worked With:</span>
                  <span className="font-semibold text-foreground">8 companies</span>
                </li>
                <li className="flex justify-between">
                  <span>Client Satisfaction:</span>
                  <span className="font-semibold text-foreground">100%</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-foreground">Specializations</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Full-Stack Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Frontend Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  API Design & Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Database Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  DevOps & Deployment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
