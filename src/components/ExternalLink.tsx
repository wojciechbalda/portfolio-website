import React from "react"

type ExternalLinkProps = {
    href: string, 
    children: React.ReactNode
}

export default function ExternalLink({href, children}: ExternalLinkProps)
{
    return <a className="text-white font-bold bg-primary/90 px-3 py-2 rounded-md text-center hover:bg-primary/70 flex justify-center gap-3 items-center" href={href} target="_blank" rel="nofollow">{children}</a>
}