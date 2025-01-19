import React from 'react'

export default function Card({title, description}) {
  return (
    <>
      {/* <Image src={""} alt='Card'/> */}

      <div className="border-[1px] border-[#282829] p-4 bg-[#1E1E1F] flex flex-col justify-start items-start gap-2 rounded-xl">
        <h1 className="title text-lg font-semibold">{title}<div className='bg'></div></h1>
        <p className="text">{description}</p></div>

    </>
  )
}
