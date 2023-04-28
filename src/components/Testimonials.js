import React, { useState } from 'react'
import Card from './Card'
import reviews from '../data'
import { FaChevronLeft,FaChevronRight } from 'react-icons/fa';


const Testimonials = (props) => {

    let [index,SetIndex] = useState(0);

    function LeftHandler(){
        if(index <= 0){
            SetIndex(reviews.length-1);
        }else{
            SetIndex(index-1);
        } 
    }
    function RightHandler(){
        if(index >= reviews.length-1){
            SetIndex(0);
        }else{
            SetIndex(index+1);
        }
    }
    function SupriseHandler(){
       let randomIndex =  Math.floor(Math.random() * reviews.length);
       SetIndex(randomIndex);
    }

    const reviews_data = props.reviews[index];
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 rounded-lg'>
        <Card 
            review = {reviews_data}
        />

        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-pointer hover:text-violet-500 ' 
            onClick={LeftHandler} >
                <FaChevronLeft fontSize = "1.75rem" />
            </button>

            <button className='cursor-pointer hover:text-violet-500'
            onClick={RightHandler}>
                <FaChevronRight fontSize = "1.75rem" />
            </button>
        </div>
        <br></br>
        <div>
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'
            onClick={SupriseHandler} > 
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonials
