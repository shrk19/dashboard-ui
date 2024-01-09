import React from 'react'

const Card = (props) => {
  return (
    <div className='p-1 m-1 md:p-3 md:m-3 w-1/3'>
        <h1 className='text-md font-bitter font-bold text-lg'>{`${props.num}`}</h1>
        <p className='poppins-light'>{`${props.title}`}</p>
        <div className='bg-blue h-[2px] my-3 rounded-full'></div>
    </div>
  )
}

export default Card