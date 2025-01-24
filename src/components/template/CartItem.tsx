import Link from 'next/link'

interface CardItemProps {
    text: string
    href: string
}

export default function CardItem(props: CardItemProps) {
    return (
        <div className="flex items-center gap-2 p-2 hover:bg-black/30">
            <Link href={props.href} className=" text-sm ">
                {props.text}
            </Link>
        </div>
    )
}