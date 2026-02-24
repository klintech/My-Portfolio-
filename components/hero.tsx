import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Welcome Text */}
          <div className="space-y-3 opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <p className="text-primary font-semibold text-sm tracking-wide">..................................................</p>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 opacity-0 animate-slideInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Hi, I'm <span className="gradient-text">Kelvin Chinagorm</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary font-semibold">
              Senior Frontend Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-foreground/70 leading-relaxed max-w-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            I craft beautiful, scalable web applications with modern technologies. Specializing in React, Next.js, and full-stack development with a passion for clean code and exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-slideInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 rounded-lg font-semibold hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            {[
              { icon: Github, href: 'https://github.com/klintech', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:clintonkelvin739@gmail.com', label: 'Email' },
            ].map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Right - Illustration Placeholder */}
        <div className="hidden md:flex items-center justify-center opacity-0 animate-scaleIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:from-primary/30 hover:to-accent/30">
            <div className="text-center space-y-4">
              <div className="text-7xl animate-bounce" style={{ animationDelay: '0.6s' }}>💻</div>
              <p className="text-foreground/60 font-semibold">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
