import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory',
    longDescription:
      'A comprehensive e-commerce platform built with Next.js and PostgreSQL. Features include real-time inventory management, payment processing, order tracking, and an admin dashboard for sellers.',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    image: '/projects/ecommerce.jpg',
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
  },
  {
    id: 2,
    title: 'SaaS Analytics Dashboard',
    description: 'Real-time analytics and reporting platform for businesses',
    longDescription:
      'An analytics platform that visualizes complex business data. Built with React, Node.js, and MongoDB, featuring real-time updates, custom reports, and data export capabilities.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Socket.io', 'AWS'],
    image: '/projects/analytics.jpg',
    liveUrl: 'https://example.com/analytics',
    githubUrl: 'https://github.com/example/analytics',
    featured: true,
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'Full-featured social network with messaging and notifications',
    longDescription:
      'A social media platform with real-time messaging, notifications, user profiles, and feed algorithms. Built with modern technologies and focusing on scalability.',
    technologies: ['Next.js', 'Firebase', 'GraphQL', 'React Query', 'Tailwind CSS'],
    image: '/projects/social.jpg',
    liveUrl: 'https://example.com/social',
    githubUrl: 'https://github.com/example/social',
    featured: true,
  },
  {
    id: 4,
    title: 'Project Management Tool',
    description: 'Collaborative project management for distributed teams',
    longDescription:
      'A project management tool with real-time collaboration, task tracking, and team communication features. Designed for remote teams.',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'WebSocket', 'Docker'],
    image: '/projects/project-mgmt.jpg',
    liveUrl: 'https://example.com/projectmgmt',
    githubUrl: 'https://github.com/example/projectmgmt',
    featured: false,
  },
  {
    id: 5,
    title: 'Content Management System',
    description: 'Headless CMS with flexible content modeling',
    longDescription:
      'A headless CMS that provides flexibility in content modeling and API-first architecture. Perfect for modern web and mobile applications.',
    technologies: ['Next.js', 'PostgreSQL', 'GraphQL', 'Redis', 'AWS S3'],
    image: '/projects/cms.jpg',
    liveUrl: 'https://example.com/cms',
    githubUrl: 'https://github.com/example/cms',
    featured: false,
  },
  {
    id: 6,
    title: 'Mobile App Backend',
    description: 'Scalable backend API for mobile applications',
    longDescription:
      'A high-performance backend API serving millions of mobile app users. Built with Node.js and optimized for speed and reliability.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'GraphQL'],
    image: '/projects/mobile-api.jpg',
    liveUrl: 'https://example.com/mobile',
    githubUrl: 'https://github.com/example/mobile-api',
    featured: false,
  },
]

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="space-y-12">
        {/* Section Title */}
        <div className="space-y-2 opacity-0 animate-fadeIn">
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-2xl hover:scale-105 opacity-0 animate-slideInUp"
              style={{ animationDelay: `${(index + 1) * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-500">
                <div className="text-5xl group-hover:scale-125 transition-transform duration-500">📦</div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-foreground/70 text-sm">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded hover:bg-primary/20 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-foreground/70 text-xs font-semibold rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Live <ExternalLink size={16} />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 border border-border bg-card text-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:bg-muted hover:border-primary transition-all duration-300"
                  >
                    Code <Github size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground opacity-0 animate-fadeIn" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-500 hover:shadow-lg hover:translate-y-[-4px] opacity-0 animate-slideInUp"
                  style={{ animationDelay: `${(index + 4) * 0.08}s`, animationFillMode: 'forwards' }}
                >
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                  <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded hover:bg-primary/20 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-muted text-foreground/70 text-xs font-semibold rounded">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent hover:translate-x-1 transition-all duration-300"
                    >
                      Live <ExternalLink size={14} />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-primary text-sm font-semibold hover:text-accent hover:translate-x-1 transition-all duration-300"
                    >
                      Code <Github size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
