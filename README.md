# Kelvin Chinagorm (Klintech) - Professional Portfolio

A modern, fully-responsive portfolio website showcasing professional work experience, projects, skills, and blog articles. Built with Next.js 16, React 19, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **Dark Mode Support**: Built-in dark mode toggle with system preference detection
- **Smooth Animations**: Elegant fade-in and slide animations
- **Organized Sections**:
  - Hero Section with call-to-action
  - About Me with quick facts and specializations
  - Work Experience with timeline layout
  - Technical Skills with progress indicators
  - Featured Projects showcase
  - Blog Articles with categories
  - Contact Form with validation
  - Footer with social links
- **SEO Optimized**: Metadata and viewport configuration for search engines
- **Accessibility**: Semantic HTML and ARIA labels throughout

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4.2
- **Typography**: Geist Font Family
- **Icons**: Lucide React
- **Theme**: next-themes with localStorage persistence
- **Analytics**: Vercel Analytics

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles and design tokens
│   └── favicon.ico
├── components/
│   ├── theme-provider.tsx  # Theme configuration
│   ├── navbar.tsx          # Navigation bar with theme toggle
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── experience.tsx      # Work experience timeline
│   ├── skills.tsx          # Technical skills with progress bars
│   ├── projects.tsx        # Featured and other projects
│   ├── blog.tsx            # Blog articles showcase
│   ├── contact.tsx         # Contact form
│   └── footer.tsx          # Footer with links
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   ├── icon.svg
│   └── apple-icon.png
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)

### Installation

1. Clone or download this project
2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit the components to add your actual information:

1. **Navbar & Hero**: Update name and social links in `/components/navbar.tsx` and `/components/hero.tsx`
2. **About Section**: Customize your bio in `/components/about.tsx`
3. **Experience**: Add/edit work history in `/components/experience.tsx`
4. **Skills**: Modify skills and proficiency levels in `/components/skills.tsx`
5. **Projects**: Update project details in `/components/projects.tsx`
6. **Blog**: Add articles in `/components/blog.tsx`
7. **Contact**: Update email and social links in `/components/contact.tsx`

### Customize Colors

Edit the color variables in `/app/globals.css`:

```css
:root {
  --primary: #2563eb;
  --accent: #06b6d4;
  /* ... more colors ... */
}
```

### Customize Fonts

Fonts are configured in `/app/layout.tsx` using Google Fonts. Modify the imports to use different fonts.

## Building for Production

```bash
pnpm build
pnpm start
```

## Deployment

This portfolio is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

Alternatively, you can deploy to any Node.js hosting platform that supports Next.js.

## Components Overview

### Navbar
- Fixed navigation with smooth scrolling links
- Mobile-responsive hamburger menu
- Theme toggle button (light/dark mode)
- Logo/branding

### Hero
- Professional headline with gradient text
- Compelling call-to-action buttons
- Social media links
- Responsive grid layout

### About
- Personal introduction
- Key statistics (experience, projects, companies)
- Areas of specialization
- Professional values

### Experience
- Timeline layout of work history
- Job descriptions and achievements
- Technology stack for each role
- Visual timeline indicators

### Skills
- Categorized technical skills
- Interactive category tabs
- Progress bars with proficiency levels
- Additional competencies section

### Projects
- Featured projects in grid layout
- Project descriptions and technology tags
- Live demo and GitHub links
- Other notable projects section

### Blog
- Featured article highlight
- Article grid with categories
- Read time estimates
- Links to full articles

### Contact
- Professional contact information
- Contact form with validation
- Social media links
- Map/location information

### Footer
- Quick navigation links
- Social media links
- Copyright information
- Privacy and terms links

## Performance Optimizations

- Image optimization with Next.js Image
- CSS-in-JS with Tailwind for minimal bundle
- Server-side rendering where possible
- Lazy loading of components
- Optimized animations using CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This portfolio is open source and available under the MIT License.

## Contact

For inquiries or feedback:
- Email: kelvin@example.com
- GitHub: [@username](https://github.com)
- LinkedIn: [Kelvin Chinagorm](https://linkedin.com)
- Twitter: [@username](https://twitter.com)

---

Built with ❤️ using Next.js and Tailwind CSS
