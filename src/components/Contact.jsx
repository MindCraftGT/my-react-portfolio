import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full hover:border-pink-600 bg-inherit'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me a message @nyakundi2010@gmail.com</p>
            </div>
            <input type="text" className='bg-[#ccd6f6] p-2' placeholder='Name' name='name' />
            <input type="email" className='bg-[#ccd6f6] p-2' placeholder='Email' name='email' />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='bg-[#cc6f6] p-2'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center mt-3'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact