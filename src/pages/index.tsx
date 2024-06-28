import Carousel from "@/components/Carousel";
import Circle from "@/components/Circle";
import ContentContainer from "@/components/ContentContainer";
import H2 from "@/components/H2";
import ExternalLink from "@/components/ExternalLink";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Wojciech Bałda</title>
      </Head>
      <Circle className="w-[1000px] -right-[900px] lg:-right-[700px] -z-10 -top-[500px]" />
      <Circle className="w-[500px] -left-[450px] lg:-left-[400px] -z-10 top-[250px]" />
      <HeroSection />
      <AboutMeSection />
      <Projects />
    </>
  );
}

function HeroSection() {
  const firstText = "Hi, my name is".split(" ");
  const secondText = "Wojciech Bałda".split(" ");
  return (
    <ContentContainer className="pt-10">
      <div className="w-2/3 flex flex-col gap-5 items-start">
        <h1 className="uppercase text-6xl">
          {firstText.map((sign, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: i / 10 }}
            >
              {sign}{" "}
            </motion.span>
          ))}
          {secondText.map((sign, i) => (
            <motion.span
              className="font-bold"
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: (i + firstText.length) / 10,
              }}
            >
              {sign}{" "}
            </motion.span>
          ))}
        </h1>
        <p className="text-balance text-lg">
          I create web applications, with a focus on React.js and Next.js.
          Presently, I am actively seeking opportunities to build my
          professional experience.
        </p>
        {/* <Link href="https://github.com/">github</Link> */}
        <ExternalLink href="https://github.com/wojciechbalda">
          Go to my github
        </ExternalLink>
      </div>
    </ContentContainer>
  );
}

function AboutMeSection() {
  return (
    <ContentContainer id="about" className="gap-5 text-center py-14">
      <H2 text="About me" />
      <p className="text-lg">
        Hello! My name is Wojciech and I&#39;m from Poland. I really enjoy
        creating web-apps, learning new technologies. I am a conscientious and
        ambitious person who is looking for first professional experience as a
        front-end developer. I specialize in Astro, React and Next.js.
      </p>
      <Carousel />
    </ContentContainer>
  );
}

function Projects() {
  return (
    <ContentContainer id="projects" className="gap-5 py-14">
      <H2 text="My projects" />
      <div className="grid gap-5">
        {projects.map(
          ({ description, githubUrl, image, preview, previewUrl, title }) => (
            <ProjectCard
              description={description}
              githubUrl={githubUrl}
              image={image}
              preview={preview}
              previewUrl={previewUrl}
              title={title}
              key={title}
            />
          )
        )}
      </div>
    </ContentContainer>
  );
}
