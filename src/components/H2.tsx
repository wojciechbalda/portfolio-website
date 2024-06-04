type H2Props = {
    text: string,
}

export default function H2({text}: H2Props)
{
    return <h2 className="font-bold text-center text-4xl">{text}</h2>
}