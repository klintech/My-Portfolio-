import { Briefcase, Calendar } from 'lucide-react'

interface Job {
  id: number
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2023 - Present',
    description: [
      'Led development of microservices architecture serving 500k+ users',
      'Mentored junior developers and conducted code reviews',
      'Improved application performance by 40% through optimization',
      'Architected and deployed scalable cloud infrastructure',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'React'],
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2021 - 2023',
    description: [
      'Developed and maintained 15+ production applications',
      'Implemented real-time features using WebSockets',
      'Collaborated with product and design teams on feature specifications',
      'Reduced technical debt through systematic refactoring',
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'GraphQL', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartupXYZ',
    period: '2019 - 2021',
    description: [
      'Built responsive UI components and layouts',
      'Fixed bugs and implemented new features in React',
      'Wrote unit tests and improved code coverage',
      'Participated in agile development process',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Firebase', 'Git'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto animate-fadeIn">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="section-title">Work Experience</h2>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="relative pl-6 md:pl-12 pb-8 md:pb-0 md:pb-8 animate-slideInLeft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              {index < jobs.length - 1 && (
                <div className="absolute left-[7px] top-6 w-0.5 h-32 bg-border"></div>
              )}

              {/* Content */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase size={20} className="text-primary" />
                      {job.title}
                    </h3>
                    <p className="text-primary font-semibold">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/60 text-sm">
                    <Calendar size={16} />
                    {job.period}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground/70">
                      <span className="text-accent mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
