import React from 'react'
import ProfileCard from './visuals/ProfileCard/ProfileCard.jsx'
import { assets } from '../assets/assets.js'
import PixelCard from './visuals/PixelCard.jsx'

const AboutMe = () => {

  const [stopScroll, setStopScroll] = React.useState(false)
  const fe_icon = [
    {
      image: <img src={assets.icon_java} alt={'react'} className={'lg:w-36 lg:h-36 w-32 h-32'}/>,
    },
    {
      image: <img src={assets.icon_spring} alt={'react'} className={'lg:w-36 lg:h-36 w-32 h-32'}/>,
    },
    {
      image: <img src={assets.icon_mysql} alt={'react'} className={'lg:w-36 lg:h-36 w-32 h-32'}/>,
    },
    {
      image: <img src={assets.icon_docker} alt={'react'} className={'lg:w-36 lg:h-36 w-32 h-32'}/>,
    },
    {
      image: <img src={assets.icon_react} alt={'react'} className={'lg:w-36 lg:h-36 w-32 h-32'}/>,
    },
    {
      image: <img src={assets.icon_css} alt={'react'} className={'lg:w-36 lg:h-36 w-32 h-32'}/>,
    },
    {
      image: <img src={assets.icon_html} alt={'react'} className={'lg:w-36 lg:h-36 w-32 h-32'}/>,
    },
  ]

  return (
    <div className={'container h-[100vh] lg:pt-28 lg:py-0'} id="aboutMe">
      <div className={'flex flex-col lg:flex-row items-start flex-wrap gap-10 lg:gap-0 mt-10'}>
        <div className={'w-full lg:w-1/3 flex flex-col items-center h-full justify-center'}>
          <ProfileCard
            handle="Le Nguyen Minh Kha"
            status="Back-end Developer"
            avatarUrl={assets.avatar}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            className={'w-fit ml-0'}
            iconUrl={assets.icon_code}
            onContactClick={(e) => {
              document.getElementById('contact').scrollIntoView({})
            }}
          />
        </div>
        <div className={'w-full lg:w-2/3 flex flex-col items-center pl-10 gap-10'}>
          <div className={'w-full'}>
            <p className="text-4xl font-bold text-white mb-4">My Skills</p>
            <div className="overflow-hidden w-full relative max-w-6xl mx-auto pt-10" onMouseEnter={() => setStopScroll(true)}
                 onMouseLeave={() => setStopScroll(false)}>
              <div
                className="flex w-fit animate-marquee"
                style={{
                  animationPlayState: stopScroll ? 'paused' : 'running',
                  animationDuration: `${fe_icon.length * 2500}ms`,
                }}
              >
                <div className="flex">
                  {[...fe_icon, ...fe_icon].map((card, index) => (
                    <div key={index}
                         className="w-56 mx-4 relative group transition-all duration-300">
                      {card.image}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={'h-[500px] w-full'}>
            <p className="text-4xl font-bold text-white mb-4">My Hobbies</p>
            <div className={'flex flex-col lg:flex-row justify-between gap-6 pt-10 items-center'} >
              <PixelCard variant="blue">
                <div className={'absolute flex flex-col items-center justify-center top-0 bottom-0'}>
                  <img src={assets.icon_code2} alt={'react'} className={'w-36 h-36'}/>
                  <p className={'text-white font-bold mt-4 px-4'}>Passionate about creating impactful solutions and bringing ideas to life with code.</p>
                </div>
              </PixelCard>
              <PixelCard variant="blue">
                <div className={'absolute flex flex-col items-center justify-center top-0 bottom-0'}>
                  <img src={assets.icon_game} alt={'react'} className={'w-36 h-36'}/>
                  <p className={'text-white font-bold mt-4 px-4'}>Love immersing myself in open-world adventures and competitive e-sports challenges.</p>
                </div>
              </PixelCard>
              <PixelCard variant="blue">
                <div className={'absolute flex flex-col items-center justify-center top-0 bottom-0'}>
                  <img src={assets.icon_sport} alt={'react'} className={'w-36 h-36'}/>
                  <p className={'text-white font-bold mt-4 px-4'}>Stay energized and focused through football, badminton, and strength training at the gym.</p>
                </div>
              </PixelCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe