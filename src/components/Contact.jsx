import React from 'react'
import TrueFocus from './visuals/TrueFocus.jsx'

const Contact = () => {
  return (
    <div id={'contact'} className="flex relative lg:flex-row flex-col items-center lg:gap-28 h-screen p-10 container">
      <div className={'lg:w-1/2 w-full'}>
        <div className={'text-white lg:ml-0 w-full'}>
          <TrueFocus
            sentence="LET'S CONNECT"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
          <p className={'pt-10 text-white lg:text-justify lg:text-3xl hidden lg:block'}>
            I am open to collaborating with valued partners on promising new initiatives. If you have a strategic idea,
            a specialized requirement, or a vision you would like to bring to life, please feel free to get in touch.
            Whether it’s a short-term engagement or a large-scale implementation, I prioritize listening, understanding
            your needs, and delivering optimal solutions.
          </p>
        </div>
      </div>
      <div className={'lg:w-1/2 w-full'}>
        <div className="lg:text-4xl text-sm w-full flex flex-col justify-center gap-10 h-full lg:pt-0 pt-10">
          <a href="mailto:lenguyenminhkha1606@gmail.com"
             className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-900/70 to-indigo-900/70 border border-purple-500/50 p-4 text-white shadow-lg transition duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.7),0_0_50px_rgba(122,92,255,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4h16v16H4z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4l8 8 8-8"/>
            </svg>
            <span>lenguyenminhkha1606@gmail.com</span>
          </a>

          <a href="tel:0346810167"
             className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-900/70 to-indigo-900/70 border border-purple-500/50 p-4 text-white shadow-lg transition duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.7),0_0_50px_rgba(122,92,255,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.12 1.06a11.04 11.04 0 005.52 5.52l1.06-2.12a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"/>
            </svg>
            <span>+84 346 810 167</span>
          </a>

          <div
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-900/70 to-indigo-900/70 border border-purple-500/50 p-4 text-white shadow-lg transition duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.7),0_0_50px_rgba(122,92,255,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>Ho Chi Minh City, Vietnam</span>
          </div>
        </div>

      </div>
      <div className={'absolute z-1 right-0 left-0 bottom-0 text-center'}>
        <p className={'text-white font-semibold text-sm'}>© {new Date().getFullYear()} Minh Kha – Ho Chi Minh City, Vietnam. All rights reserved.
        </p>
      </div>
    </div>
  )
}
export default Contact