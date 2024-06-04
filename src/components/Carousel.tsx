import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import SkillCard from './SkillCard'
import { skills } from '@/data'

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({loop: true, dragFree: true}, [Autoplay({delay: 2500, stopOnInteraction: false})])


  return (
    <>
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {skills.map(({image, name}) => <SkillCard image={image} name={name} key={name} />)}
      </div>
    </div>
    </>
  )
}
