import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
  return (
    <div className='flex flex-col md:relative '>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            {/* <img src='https://picsum.photos/200/300'/> */}
            <img 
            className='aspect-square rounded-full w-[140px] h-[140px] z-25'
            src={props.review.image}/>
            <div className='w-[140px] h-[140px] bg-violet-300 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
        </div>
        <div className='text-center mt-7'>
            <p className='font-bold text-2xl tracking-wider  capitalize'>{props.review.name}</p>
            <p className='text-violet-300 uppercase text-small'>{props.review.job}</p>
        </div>
         
        <div className='text-violet-400 mx-auto mt-5 '>
            <FaQuoteLeft fontSize = "1.75rem" />
        </div>
        <div className='text-center mt-4 text-slate-500'>
                   {props.review.text}
        </div>
        <div className='text-violet-400 mx-auto mt-5 '>
            <FaQuoteRight fontSize = "1.75rem" />            
        </div>
            <div className='btn'>
        </div>

        
    </div>
  )
}

export default Card
