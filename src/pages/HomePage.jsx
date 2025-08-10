import React, { useEffect, useRef, useState } from 'react'
import Galaxy from '.././components/visuals/GalaxyBackground.jsx'
import GradientText from '../components/visuals/GradientText.jsx'
import ShinyText from '../components/visuals/ShinyText.jsx'
import Introduction from '../components/Introduction.jsx'
import Lanyard from '../components/visuals/Lanyard.jsx'
import AboutMe from '../components/AboutMe.jsx'

const HomePage = () => {

  const navRef = useRef(null)
  const [navHeight, setNavHeight] = useState(0)
  const [hideLeft, setHideLeft] = useState(false)

  const handleClickNav = (e, id) => {
    document.getElementById(id)?.scrollIntoView({})
  }

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return
      if (window.scrollY > navHeight) {
        setHideLeft(true)
      } else {
        setHideLeft(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} fov={20}/>
      {/*background-galaxy*/}
      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <Galaxy mouseRepulsion={true}
                density={1.5}
                glowIntensity={0.8}
                saturation={0.8}
                hueShift={200}
                mouseInteraction={false}
        />
      </div>
      {/*header*/}
      <nav ref={navRef}
           className={`container flex items-center fixed top-2 left-0 right-0 z-10 ${hideLeft ? 'md:justify-center' : 'md:justify-between'}`}
           id={'introduction'}>
        {/*left*/}
        <GradientText
          colors={['#4F46E5', '#9333EA', '#06B6D4', '#9333EA', '#4F46E5']}
          animationSpeed={3}
          showBorder={false}
          className={`text-7xl md:text-9xl md:ml-0 font-bold ${hideLeft ? 'hidden' : ''}`}
        >
          <p>Portfolio</p>
        </GradientText>

        {/*right*/}
        <div
          className={`hidden md:flex items-center gap-6 text-4xl font-semibold ${hideLeft ? 'bg-gray-500/30 rounded-md p-2 text-5xl duration-1000' : 'duration-500'}`}>
          <a onClick={() => {
            scrollTo(0, 0)
          }
          } className="relative overflow-hidden group cursor-pointer">
          <span className="block group-hover:-translate-y-full transition-transform duration-300 p-1">
            <ShinyText text="Introduction" disabled={false} speed={1.5} className=""/>
          </span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-accent1 p-1">
            Introduction
          </span>
          </a>
          <a onClick={(e) => {
            handleClickNav(e, 'aboutMe')
          }} className="relative overflow-hidden group cursor-pointer">
          <span className="block group-hover:-translate-y-full transition-transform duration-300 p-1">
            <ShinyText text="About me" disabled={false} speed={1.5} className=""/>
          </span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-accent1 p-1">
              About me
          </span>
          </a>
          <a onClick={(e) => {
            handleClickNav(e, 'introduction')
          }} className="relative overflow-hidden group cursor-pointer">
          <span className="block group-hover:-translate-y-full transition-transform duration-300 p-1">
            <ShinyText text="Project" disabled={false} speed={1.5} className=""/>
          </span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-accent1 p-1">
              Project
          </span>
          </a>
          <a onClick={(e) => {
            handleClickNav(e, 'introduction')
          }} className="relative overflow-hidden group cursor-pointer">
          <span className="block group-hover:-translate-y-full transition-transform duration-300 p-1">
            <ShinyText text="Contact" disabled={false} speed={1.5} className=""/>
          </span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-accent1 p-1">
            Contact
          </span>
          </a>
        </div>
      </nav>
      {/*content*/}
      <div style={{ paddingTop: navHeight }}>
        <Introduction />
        <AboutMe />
      </div>
    </div>
  )
}

export default HomePage