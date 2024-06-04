import { Project } from "@/types";
import Image from "next/image";
import { Github, Link, Youtube } from "lucide-react";
import ExternalLink from "./ExternalLink";

export default function ProjectCard({
  description,
  githubUrl,
  preview,
  previewUrl,
  title,
  image,
}: Project) {
  return (
    <div className="gap-10 flex flex-col md:flex-row md:odd:flex-row-reverse items-center">
      <div className="aspect-square w-full md:basis-1/2 rounded-lg overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src={`/images/${image}`}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div className="basis-1/2 grid gap-3 text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <ExternalLink href={githubUrl}>
          <Github />
          See project on github
        </ExternalLink>
        <ExternalLink href={previewUrl}>
          {preview === "live" ? (
            <>
              <Link /> See the live version
            </>
          ) : (
            <>
              <Youtube />
              Youtube
            </>
          )}
        </ExternalLink>
      </div>
    </div>
  );
}
