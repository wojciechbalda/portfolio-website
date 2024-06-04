import { cn } from "@/utils"

type ContentContainerProps = {
    children: React.ReactNode,
    className?: string,
    id?: string
}

export default function ContentContainer({children, className, id}: ContentContainerProps)
{ 
    return <div id={id} className={cn("max-w-5xl mx-auto w-full flex flex-col px-5", className)}>{children}</div>
}