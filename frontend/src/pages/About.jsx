import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox.jsx'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col sm:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum iste dolorem repudiandae, itaque sit quia illum explicabo ipsum voluptate cum eligendi veritatis, ab unde quo debitis, sunt exercitationem aut ratione?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt omnis blanditiis, ratione, dolore magni esse harum iure debitis quos molestias distinctio, ex fugiat vero fugit doloremque corrupti qui. Sunt!</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:mx-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil pariatur rem alias earum perferendis optio! Magnam doloremque eligendi perferendis reiciendis eum libero impedit recusandae minima doloribus? Minus molestias similique nesciunt.</p>
        </div>
        <div className='border px-10 md:mx-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Convenienc:</b>
          <p className='text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil pariatur rem alias earum perferendis optio! Magnam doloremque eligendi perferendis reiciendis eum libero impedit recusandae minima doloribus? Minus molestias similique nesciunt.</p>
        </div>
         <div className='border px-10 md:mx-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil pariatur rem alias earum perferendis optio! Magnam doloremque eligendi perferendis reiciendis eum libero impedit recusandae minima doloribus? Minus molestias similique nesciunt.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About