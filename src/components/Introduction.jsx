import React from 'react'
import RotatingText from './visuals/RotatingText.jsx'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import StarBorder from './visuals/StarBorder.jsx'

const Introduction = () => {

  const CV_URL = import.meta.env.VITE_CV_URL
  return (
    <div className={`container flex gap-1 h-[calc(100vh-128px)]`}>
      {/*left*/}
      <div className="w-1/2 text-8xl font-bold text-white flex flex-col justify-center relative z-2">
        <div className="items-center">
          <p>Hi! I am</p>
          <RotatingText
            texts={['Le Nguyen Minh Kha', 'Back-end Developer']}
            mainClassName="p-2 bg-primary rounded-lg text-7xl w-[800px] h-[9.9vh]"
            staggerFrom={'last'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={4000}
          />
        </div>
        <div className={'flex justify-center gap-11 mt-8'}>
          <a href="https://github.com/minhkha04"
             target="_blank"
             rel="noopener noreferrer">
            <FaGithub size={80}/>
          </a>
          <a href="https://www.facebook.com/imMinhKha"
             target="_blank"
             rel="noopener noreferrer">
            <FaFacebook size={80}/>
          </a>
          <a href="https://www.linkedin.com/in/l%C3%AA-nguy%E1%BB%85n-minh-kha-b805a9279"
             target="_blank"
             rel="noopener noreferrer">
            <FaLinkedin size={80}/>
          </a>
        </div>

        <StarBorder
          as="a"
          href={CV_URL}
          className="mt-10 w-fit container"
          color="cyan"
          speed="5s"
          thickness={2.5}
        >
          <p
            className="text-center text-4xl font-extrabold tracking-wide text-white hover:text-accent2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            Download CV
          </p>
        </StarBorder>

      </div>
      {/*right*/}
      <div className="w-1/2">
      </div>
    </div>
  )
}

export default Introduction