import { IconDots, IconEdit, IconPlus, IconTableOptions } from '@tabler/icons-react'
import Link from 'next/link'

interface CardItemProps {
    text: string
    href: string
    color: string
}

export default function CardItem(props: CardItemProps) {
    return (
        <div className={`flex items-center justify-between gap-2 p-2 hover:bg-black/30  ${props.color} rounded-lg border `}>
            <Link href={props.href} className=" text-sm ">
                {props.text}
            </Link>

            <div className='flex gap-2'>
                <IconEdit size={20} stroke={1} />
                <IconDots size={20} stroke={1} />
            </div>
        </div>
    )
}