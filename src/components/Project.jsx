import React from 'react'
import InfiniteMenu from './visuals/InfiniteMenu.jsx'

const Project = () => {

  const items = [
    {
      image: 'https://res.cloudinary.com/di6hi1r0g/image/upload/v1754852646/pet_feed_oxhw8s.png',
      link: 'https://youtu.be/vp49y4P6AcY',
      title: 'Based Smart Pet Feeding System',
      linkGit: 'https://github.com/minhkha04/iot-pet-feeder',
      description: 'Based Smart Pet Feeding System — built on ESP8266 (NodeMCU) with Blynk app control, supporting manual, scheduled, and smart feeding modes, plus real-time remote monitoring of food and water dispensing.',
      techStack: 'Arduino C++, Blynk, HX711, Servo.h.'
    },
    {
      image: 'https://res.cloudinary.com/di6hi1r0g/image/upload/v1754852098/infertility_wzf0c3.png',
      link: 'https://techleaf.pro/projects/infertility-system/',
      linkGit: 'https://github.com/minhkha04/infertility-system',
      title: 'Infertility Treatment Management and Monitoring System',
      description: 'Fullstack infertility treatment management platform — streamlining IUI/IVF registration, scheduling, medication & test reminders, with MoMo/VNPAY payments, email alerts, and Google OAuth login.',
      techStack: 'ReactJs, Java, Spring Boot, MySQL, Docker'
    },
    {
      image: 'https://res.cloudinary.com/di6hi1r0g/image/upload/v1754853363/auto_car_sn87k1.png',
      link: 'https://techleaf.pro/',
      title: 'AutoCar Garage Management System',
      linkGit: 'https://github.com/minhkha04/auto-car',
      description: 'Java Servlet/JSP-based garage management system with role-based access, customer portal, reporting features, and CRUD modules for cars, parts, services, and invoices.',
      techStack: 'Java Servlet/JSP, SQL Server, Bootstrap, HTML/CSS'
    },
  ];

  return (
    <div className={'h-[100vh] lg:mt-[200px] mt-[1200px] mb-32 lg:mb-0'} id="project">
      <div style={{position: 'relative'}} className={'text-white'}>
        <InfiniteMenu  items={items} act/>
      </div>
    </div>
  )
}

export default Project