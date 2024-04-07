import React from 'react'

import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/vimeo'

const Footer = () => {
  return (
    <div className='w-full h-[300px] flex items-center justify-center bg-[#122540] text-gray-200 text-xl px-4 mx-2' >
        <h3>Connect with Me On These Social Sites</h3>
        <div>
        <SocialIcon url="www.vimeo.com" />
        </div>
    </div>
  )
}

export default Footer