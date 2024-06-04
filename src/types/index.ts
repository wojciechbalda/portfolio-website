export type Skill = {
    image: string,
    name: string,
}

export type Project = {
    title: string,
    description: string,
    preview: "youtube" | "live",
    previewUrl: string,
    githubUrl: string,
    image: string,
}