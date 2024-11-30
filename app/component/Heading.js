import React from 'react'

export default function Heading({title}) {
    return (
        <div className="heading py-4">
            <div className=" text-3xl leading-relaxed font-bold">{title}</div>
            <div className="h-1 bg-[#E4B255] w-[100px] rounded-lg"></div>
        </div>
    )
}
