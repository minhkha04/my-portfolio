import React from 'react'
import ProfileCard from './visuals/ProfileCard/ProfileCard.jsx'
import { assets } from '../assets/assets.js'
import TextType from './visuals/TextType.jsx'
import PixelCard from './visuals/PixelCard.jsx'

const AboutMe = () => {

  const [stopScroll, setStopScroll] = React.useState(false)
  const fe_icon = [
    {
      image: <img src={assets.icon_java} alt={'react'} className={'w-36 h-36'}/>,
    },
    {
      image: <img src={assets.icon_spring} alt={'react'} className={'w-36 h-36'}/>,
    },
    {
      image: <img src={assets.icon_mysql} alt={'react'} className={'w-36 h-36'}/>,
    },
    {
      image: <img src={assets.icon_docker} alt={'react'} className={'w-36 h-36'}/>,
    },
    {
      image: <img src={assets.icon_react} alt={'react'} className={'w-36 h-36'}/>,
    },
    {
      image: <img src={assets.icon_css} alt={'react'} className={'w-36 h-36'}/>,
    },
    {
      image: <img src={assets.icon_html} alt={'react'} className={'w-36 h-36'}/>,
    },
  ]

  return (
    <div className={'container h-[100vh] pt-28'} id="aboutMe">
      <div className={'w-full text-center'}>
        <p className={'text-5xl text-white font-bold'}>About me</p>
      </div>
      <div className={'flex flex-row items-start flex-wrap h-2/3 mt-10'}>
        <div className={'w-1/4 flex flex-col items-center h-full'}>
          <ProfileCard
            name="Minh Kha"
            title="Software Engineer"
            handle="emkay"
            status="Online"
            avatarUrl={assets.avatar}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            className={'w-fit ml-0'}
            iconUrl={assets.icon_code}
          />
          <div className={'w-full mt-5 text-white '}>
            <p className="text-2xl font-bold text-red-500">
              As a developer,
            </p>
            <TextType
              text={[
                'I paint with code, so every product is a masterpiece.',
                'I code like an artist, so ideas become art.',
                'I turn logic into beauty, so technology feels human.'
              ]}
              typingSpeed={75}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
        <div className={'w-3/4 flex flex-col items-center pl-10 gap-10'}>
          <div>
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
            <div className={'flex flex-row gap-10 justify-center pt-10'} >
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