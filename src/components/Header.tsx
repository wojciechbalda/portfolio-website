import { motion } from "framer-motion";
import ContentContainer from "./ContentContainer";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import { cn } from "@/utils";
import Link from "next/link";

const sections: {text: string, link: string}[] = [
    {
        link: '#about',
        text: 'About me'
    },
    {
        link: '#projects',
        text: 'Projects'
    },
] 

export default function Header() {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleSwitchNavState = () => {
    if (open) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
    setOpen((state) => !state);
  };

  useEffect(() => {
    setOpen(false);
    document.body.classList.remove("overflow-hidden");
  }, [router]);

  const item = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <header className="sticky top-0 bg-white text-black py-1 z-50">
      <ContentContainer className="flex-row justify-between">
        <motion.div
          className="py-2 uppercase font-bold text-lg cursor-pointer select-none"
          whileTap={{ scale: 0.5 }}
        >
          Wojciech B
        </motion.div>
        <div className={cn("inset-0 absolute top-full bg-white h-[calc(100vh_-_52px)] z-50", { hidden: !open })}>
            <ContentContainer className="flex flex-col justify-between h-full">
          <nav>
              <ul>
                {sections.map((section, index) => (
                 <motion.li key={index} variants={item}
                  animate={open ? "visible" : "hidden"}
                  custom={index}>
                    <Link className="w-full block py-2 font-bold hover:text-primary/90" href={section.link}>
                        {section.text}
                    </Link>
                    
                </motion.li>
            ))}
              </ul>
          </nav>
          <div className="text-lg md:text-3xl pb-32 md:pb-12">
            Contact
            <p className="font-bold">wojciech.balda@gmail.com</p>
          </div>
            </ContentContainer>
        </div>
        <Button onClick={handleSwitchNavState}>
          {open ? <X /> : <Menu />}
        </Button>
      </ContentContainer>
    </header>
  );
}
