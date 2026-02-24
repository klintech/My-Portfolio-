import { Calendar, ArrowRight, User } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  readTime: number
  category: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with Next.js',
    excerpt:
      'Learn how to leverage Next.js features to build scalable and performant web applications. We explore server components, API routes, and deployment strategies.',
    date: 'Mar 15, 2024',
    author: 'Kelvin Chinagorm',
    readTime: 8,
    category: 'Next.js',
    slug: 'nextjs-scalable-apps',
  },
  {
    id: 2,
    title: 'TypeScript Best Practices in 2024',
    excerpt:
      'Master advanced TypeScript patterns and best practices. This guide covers type inference, generics, utility types, and how to avoid common pitfalls.',
    date: 'Mar 10, 2024',
    author: 'Kelvin Chinagorm',
    readTime: 10,
    category: 'TypeScript',
    slug: 'typescript-best-practices',
  },
  {
    id: 3,
    title: 'Understanding React Server Components',
    excerpt:
      'A deep dive into React Server Components and how they revolutionize the way we build full-stack React applications with automatic code splitting and data fetching.',
    date: 'Mar 5, 2024',
    author: 'Kelvin Chinagorm',
    readTime: 12,
    category: 'React',
    slug: 'react-server-components',
  },
  {
    id: 4,
    title: 'Database Design Patterns for Microservices',
    excerpt:
      'Explore database design patterns suitable for microservices architecture. Learn about data consistency, sharding, and polyglot persistence.',
    date: 'Feb 28, 2024',
    author: 'Kelvin Chinagorm',
    readTime: 11,
    category: 'Architecture',
    slug: 'db-patterns-microservices',
  },
  {
    id: 5,
    title: 'Performance Optimization: The Complete Guide',
    excerpt:
      'Comprehensive guide to web performance optimization covering Core Web Vitals, image optimization, code splitting, and caching strategies.',
    date: 'Feb 20, 2024',
    author: 'Kelvin Chinagorm',
    readTime: 15,
    category: 'Performance',
    slug: 'performance-optimization',
  },
  {
    id: 6,
    title: 'Docker for Full-Stack Developers',
    excerpt:
      'Learn Docker containerization from scratch. We cover images, containers, Docker Compose, and best practices for development and production.',
    date: 'Feb 15, 2024',
    author: 'Kelvin Chinagorm',
    readTime: 9,
    category: 'DevOps',
    slug: 'docker-fullstack-devs',
  },
]

export function Blog() {
  const featuredPost = blogPosts[0]

  return (
    <section id="blog" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-2 opacity-0 animate-fadeIn">
          <h2 className="section-title">Latest Article</h2>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Featured Blog Post */}
        <Link
          href={`/blog/${featuredPost.slug}`}
          className="group block opacity-0 animate-fadeIn"
        >
          <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-500 hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-foreground/70 text-lg">{featuredPost.excerpt}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {featuredPost.author}
                  </div>
                  <div>{featuredPost.readTime} min read</div>
                </div>

                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-all duration-300">
                  Read Article <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">✍️</div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* View All Articles Button */}
        <div className="text-center opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 hover:shadow-lg transition-all duration-300 group"
          >
            Explore All Articles <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
