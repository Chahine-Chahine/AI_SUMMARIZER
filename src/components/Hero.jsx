import React from 'react'
import {logo} from '../assets'

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between item-center w-full mb-10 pt-3'>
            <img src={logo} alt='app-logo' className='w-28 object-contain'/>
            <button type='button' onclick={()=> window.open('https://github.com/Chahine-Chahine/AI_SUMMARIZER')} className='black_btn'>
            Github
            </button>
        </nav>
        <h1 className='head_text'>Summarize articles with <br className='max-md:hidden'/> <span className='orange_gradient'>OpenAi GPT-4</span></h1>
    </header>
  )
}

export default Hero