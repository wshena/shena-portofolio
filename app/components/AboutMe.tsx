import React from 'react'
import Link from 'next/link'
import { experiences } from '../const'

const Experience = ({date, position, at, desc}:{date:string, position:string, at:string, desc:string}) => {
  return (
    <div className="pb-[10px] border-b flex flex-col gap-[5px]">
      <h3 className='text-[13px] text-orange-500'>{date}</h3>
      <h1 className='uppercase text-lg font-bold'>{position} <span className='capitalize text-gray-500 text-sm font-light'>/ {at}</span> </h1>
      <p className='text-gray-500 text-[14px]'>{desc}</p>
    </div>
  )
}

const AboutMe = () => {
  return (
    <section id='aboutMe' className="xl:px-[70px] my-[80px] flex flex-col lg:flex-row justify-between gap-[50px] lg:gap-[50px]">
      <div className="w-[100%]">
        <h1 className='text-3xl font-bold mb-[30px] uppercase'>about me</h1>
        <div className="flex flex-col gap-[30px] text-justify">
          <p className='text-gray-500'>Hallo, my name is Wisnu Shena Arrafi. I am a third year informatics engineering student at Surabaya State University. I studied in IT for 2 years and have interest in web development (frontend side) and cloud computing. I don't have a professional work history yet, but I do have experience contributing to the development of application projects. Besides that, I have also made several personal projects as a means of training and honing my skills. My goal for the future is to develop my skills in the IT field, especially in the field of cloud computing, as well as learning new technologies and adapting to technological developments. The hope is that my abilities and expertise can be used to develop technology that can provide convenience for people.</p>
          <p className='text-gray-500'>Apart from learning about web development, in my free time my hobbies are reading manga, listening to music, or jogging in the afternoon.</p>

          <Link href={'https://www.linkedin.com/in/wisnu-shena-arrafi-866226251'} target='blank' className='transition-color duration-300 text-[1rem] border-b hover:border-b hover:border-black hover:text-black w-[100%] md:w-[40%] lg:w-[60%]'>Connect me on Linkedin</Link>
        </div>
      </div>

      <div className="w-[100%]">
        <h1 className='text-3xl font-bold mb-[30px] uppercase'>experience</h1>
        <div className="flex flex-col gap-[20px]">
          {
            experiences.map((item, idx) => {
              return (
                <Experience date={item.date} position={item.position} at={item.at} desc={item.desc} key={idx} />
              )
            })
          }
        </div>
      </div>

      {/* <div className="w-[100%]">
        <h1 className='text-3xl font-bold mb-[30px] uppercase'>Recent</h1>
      </div> */}
    </section>
  )
}

export default AboutMe