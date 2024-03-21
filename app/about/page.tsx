import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const page = () => {
  return (
    <section className="container xl:px-[70px] lg:my-[20px]">
      <div className="flex flex-col lg:flex-row justify-between gap-[30px] xl:gap-0">
        <div className="order-2 lg:order-1 flex flex-col gap-[10px] lg:w-[60%]">
          <h1 className='font-bold text-3xl tracking-wide'>I'M A HARD WORKING PERSON.</h1>
          <h1 className='font-bold text-3xl tracking-wide'>I ALSO HAVE STRONG PASSION.</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-[20px]">
            <p className='text-[15px] text-gray-500'>Hallo, my name is Wisnu Shena Arrafi. I am a third year informatics engineering student at Surabaya State University. I studied in IT for 2 years and have interest in web development (frontend side) and cloud computing. I don't have a professional work history yet, but I do have experience contributing to the development of application projects.</p>
            <p className='text-[15px] text-gray-500'>I don't have any formal experience in the field of frontend development. Therefore, I am very open to job opportunities in this field. With a tenacious personality, hard work, easy communication, and being able to work in a team, I am confident in preparing myself to enter the world of the IT industry.</p>
            <p className='text-[15px] text-gray-500'>Besides that, I have also made several personal projects as a means of training and honing my skills. My goal for the future is to develop my skills in the IT field, especially in the field of cloud computing, as well as learning new technologies and adapting to technological developments. The hope is that my abilities and expertise can be used to develop technology that can provide convenience for people.</p>
            <p className='text-[15px] text-gray-500'>I really enjoyed my time learning about web development. I feel especially happy when I can implement designs on my website. I always try to improve my skills and knowledge. Beyond usual tasks, I really enjoy reading manga, fiction and non-fiction books, and listening to music</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex items-center justify-center lg:items-start">
          <Image src='/Wisnu.jpg' alt="photo-profile" height={400} width={400} loading='lazy'/>
        </div>
      </div>

      <div className="bg-gray-300 py-[50px] mt-[50px] flex flex-col gap-[20px] items-center justify-center ">
        <div className="text-center lg:w-[40%]">
          <h1 className='text-2xl font-bold uppercase mb-[10px]'>React Out To Me!</h1>
          <p className='text-sm text-gray-500'>If you want to communcate with me regarding project, work, and other things, don't hesitate to contact and follow me on linkedIn</p>
        </div>
        <Link href='https://www.linkedin.com/in/wisnu-shena-arrafi-866226251' target='blank'>
          <button className='py-[15px] px-[20px] bg-orange-500 text-white hover:bg-orange-400 transition-colors duration-500'>Connect on LinkedIn</button>
        </Link>
      </div>
    </section>
  )
}

export default page