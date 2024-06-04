import { Skill } from "@/types"
import Image from "next/image"

export default function SkillCard({image, name}: Skill)
  {
    return <div className="bg-primary/90 flex flex-col justify-center gap-5 items-center p-5 rounded-lg aspect-[3/4] embla__slide">
      <div className="w-full aspect-square">
        <Image className="select-none w-full h-full object-cover" width={100} height={100} alt={name} src={`/images/${image}`} />
      </div>
      <p className="text-white font-bold select-none">{name}</p>
    </div>
  }