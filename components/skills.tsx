'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface SkillCategory {
  category: string
  skills: { name: string; level: number }[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML/CSS', level: 98 },
      { name: 'JavaScript', level: 98 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 92 },
      { name: 'MongoDB', level: 88 },
      { name: 'Firebase', level: 85 },
      { name: 'Redis', level: 82 },
      { name: 'MySQL', level: 85 },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 71 },
      { name: 'AWS', level: 62 },
      { name: 'CI/CD', level: 45 },
      { name: 'Vercel', level: 92 },
      { name: 'Linux', level: 85 },
    ],
  },
]

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Frontend')

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-2 opacity-0 animate-fadeIn">
          <h2 className="section-title">Technical Skills</h2>
          <div className="w-12 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 opacity-0 animate-fadeIn`}
              style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <span
                className={`inline-block transition-all duration-300 ${
                  selectedCategory === cat.category
                    ? 'bg-primary text-primary-foreground px-4 py-2 rounded-lg'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {cat.category}
              </span>
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {skillCategories
            .find((cat) => cat.category === selectedCategory)
            ?.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-card/50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3 flex-1">
                    <ChevronRight className="text-accent group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    <span className="font-semibold text-foreground text-lg">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex w-48 bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-primary font-bold text-sm md:text-base min-w-[50px] text-right">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: 'Soft Skills',
              items: ['Leadership & Mentoring', 'Problem Solving', 'Communication', 'Team Collaboration'],
            },
            {
              title: 'Methodologies',
              items: ['Agile/Scrum', 'Test-Driven Development', 'SOLID Principles', 'Microservices'],
            },
            {
              title: 'Other Skills',
              items: ['UI/UX Principles', 'Performance Optimization', 'System Design', 'Technical Writing'],
            },
          ].map((category, idx) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6 opacity-0 animate-fadeIn hover:border-primary transition-all duration-300"
              style={{ animationDelay: `${(idx + 4) * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <h4 className="font-semibold text-primary mb-4 text-lg">{category.title}</h4>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/70 hover:text-foreground transition-colors">
                    <span className="text-accent mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
