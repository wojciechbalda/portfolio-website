import { cn } from "@/utils";

export default function Button({children, onClick, className, ...properties}: React.ComponentPropsWithoutRef<"button">)
{
    return <button onClick={onClick} {...properties} className={cn("text-white font-bold bg-primary/90 px-3 py-2 rounded-lg text-center", className)}>
        {children}
    </button>
}