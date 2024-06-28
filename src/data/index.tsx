import { Project, Skill } from "@/types"

export const skills: Skill[] = [
    {
        image: 'ts.svg',
        name: 'TypeScript'
    },
    {
        image: 'js.svg',
        name: 'JavaScript'
    },
    {
        image: 'tailwind.svg',
        name: 'Tailwind'
    },
    {
        image: 'nextjs.svg',
        name: 'Next.js'
    },
    {
        image: 'react.svg',
        name: 'React'
    },
    {
        image: 'sass.svg',
        name: 'Sass'
    },
    {
        image: 'css.svg',
        name: 'CSS'
    },
    {
        image: 'html.svg',
        name: 'HTML'
    },
    {
        image: 'astro.svg',
        name: 'Astro'
    },
    {
        image: 'prisma.svg',
        name: 'Prisma'
    },
    {
        image: 'redux.svg',
        name: 'Redux'
    }
]

export const projects: Project[] = [
    {
        description: 'Web application made in nextjs using prisma, tailwind, shadcn, postgres database, auth.js, react-hook-form. The application allows users to create quizzes and then solve them.',
        githubUrl: 'https://github.com/wojciechbalda/quiz-app',
        image: 'quizapp.png',
        preview: 'youtube',
        previewUrl: 'https://www.youtube.com/watch?v=nyV2XvWSRRA',
        title: 'Application to create and solve quizes'
    },
    {
        description: 'Real estate agency website made in nextjs. The website uses hygraph cms with grapql.',
        githubUrl: 'https://github.com/wojciechbalda/real-estate-agency-website',
        image: 'project.webp',
        preview: 'live',
        previewUrl: 'https://real-estate-agency-website.vercel.app/',
        title: 'Real estate agency website'
    },
    {
        description: 'Website using external API. It was built using react, react query, shadcn, react router, tailwind.',
        githubUrl: 'https://github.com/wojciechbalda/rick-and-morty',
        image: 'rick.png',
        preview: 'live',
        previewUrl: 'https://rick-and-morty-nine-peach.vercel.app/',
        title: 'Website that uses rick and morty api'
    },
    {
        description: 'Pizzeria website (simulation without backend) built using astro and react. GSAP was used for animation.',
        githubUrl: 'https://github.com/wojciechbalda/astro-pizzeria-website',
        image: 'pizzeria.png',
        preview: 'live',
        previewUrl: 'https://astro-pizzeria-website.vercel.app/',
        title: 'Pizzeria website'
    },
    {
        description: 'Blog template built with astro. The website uses markdown files.',
        githubUrl: 'https://github.com/wojciechbalda/blog-layout',
        image: 'blog.png',
        preview: 'live',
        previewUrl: 'https://blog-layout-lake.vercel.app/',
        title: 'Blog template'
    },
    {
        description: 'Web application built with react. Uses many external APIs. The dashboard includes a todo list, the ability to see the latest world news, weather and a cryptocurrency chart.',
        githubUrl: 'https://github.com/wojciechbalda/dashboard',
        image: 'dashboard.png',
        preview: 'live',
        previewUrl: 'https://dashboard-topaz-tau-65.vercel.app/',
        title: 'Dashboard'
    },
]