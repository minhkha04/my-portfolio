import React, { useEffect, useRef, useState } from 'react'
import Galaxy from '.././components/visuals/GalaxyBackground.jsx'
import GradientText from '../components/visuals/GradientText.jsx'
import ShinyText from '../components/visuals/ShinyText.jsx'
import Introduction from '../components/Introduction.jsx'
import Lanyard from '../components/Lanyard.jsx'

const HomePage = () => {

  const navRef = useRef(null)
  const [navHeight, setNavHeight] = useState(0)

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight)
    }
  }, [])

  return (
    <div>
      <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} fov={20}/>
      {/*background-galaxy*/}
      <div style={{ width: '100%', height: "100%", position: 'fixed', top: 0,left: 0, zIndex: -1 }}>
        <Galaxy mouseRepulsion={true}
                density={1.5}
                glowIntensity={0.8}
                saturation={0.8}
                hueShift={200}
                mouseInteraction={false}
        />
      </div>
      {/*header*/}
      <nav ref={navRef} className="container flex items-center md:justify-between justify-center px-6 py-4 fixed top-0 left-0 right-0 z-50">
        {/*left*/}
        <GradientText
          colors={['#4F46E5', '#9333EA', '#06B6D4', '#9333EA', '#4F46E5']}
          animationSpeed={3}
          showBorder={false}
          className="text-7xl md:text-9xl md:ml-0 font-bold"
        >
          <p>Portfolio</p>
        </GradientText>

        {/*right*/}
        <div className="hidden md:flex items-center gap-6 ml-7 text-4xl font-semibold ">
          <a href="#" className="relative overflow-hidden group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300 p-1">
            <ShinyText text="Introduction" disabled={false} speed={1.5} className=""/>
          </span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-accent1 p-1">
            Introduction
          </span>
          </a>
          <a href="#" className="relative overflow-hidden group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300 p-1">
            <ShinyText text="About me" disabled={false} speed={1.5} className=""/>
          </span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-accent1 p-1">
              About me
          </span>
          </a>
          <a href="#" className="relative overflow-hidden group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300 p-1">
            <ShinyText text="Project" disabled={false} speed={1.5} className=""/>
          </span>
            <span
              className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-accent1 p-1">
              Project
          </span>
          </a>
          <a href="#" className="relative overflow-hidden group">
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
        <Introduction/>
      </div>
    </div>
  )
}

export default HomePage