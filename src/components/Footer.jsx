import React from 'react'

import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/vimeo'

const Footer = () => {
  return (
    <div className='w-full h-[300px] bg-[#122540] text-gray-200 text-xl' >
        <div className='flex justify-center'>
          <h3>Connect with Me On These Social Sites</h3>
        </div>
        <div className='w-[100%] flex flex-row justify-center'>
          <SocialIcon url="www.vimeo.com" className='py-3 flex justify-items-center'/>
          <SocialIcon url="www.youtube.com " /> 
          <SocialIcon url="www.x.com " /> 
          <SocialIcon url="www.reddit.com " />
          <SocialIcon url="www.linkedin.com " /> 
        </div>
    </div>
  )
}

export default Footer