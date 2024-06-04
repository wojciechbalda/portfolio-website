import { cn } from "@/utils"

type CircleProps = {
    className?: string,
}

export default function Circle({className}: CircleProps)
{
    return <div className={cn('rounded-full from-primary to-primary/0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] aspect-square absolute z-10', className)} />
}
