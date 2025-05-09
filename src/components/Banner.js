import React from 'react';
import {FaGithub , FaHackerrank, FaInstagram , FaLinkedin} from 'react-icons/fa';                    //importing github and instagram //
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';


const Banner = () => {
  return(
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
     id='home'>
    <div className='container mx-auto'>

      <div className=' flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>         {/*  gap-y-8 means gapimg between rows is 8 px */}

        {/* Text stuffs */}

        <div className='flex-1 text-center font-secondary lg:text-left'>

          <motion.h1 
          variants={fadeIn('up' ,0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false , amount:0.7}}
          className='text-[50px] font-bold leading-[0.8] md:text-[70px]'>

            SHREY <span>JOSHI</span>
          </motion.h1>

          <motion.div  variants={fadeIn('up' ,0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false , amount:0.7}}
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <spam className=' text-white mr-4'>I am a</spam>
            <TypeAnimation
            sequence={[
              'Web Developer',
              2000,
              'Programmer',
              2000,
              'Software Engineer',
              2000,
              'AI/ML Enthusiast',
              2000,   
            ]}
            speed={70}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
        </motion.div>

        <motion.div  variants={fadeIn('up' ,0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false , amount:0.7}}
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'> 
        <button className='btn btn-lg'>Add Me</button>
        <a href='#' className='text-gradient btn-link'></a>
      </motion.div>
      
     {/* socials link */}

      <motion.div  variants={fadeIn('up' ,0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false , amount:0.7}}
      className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
        <a href='https://www.instagram.com/shreyyy___07/'>
          <FaInstagram/>
        </a>
        <a href='https://github.com/Shreyyy07'>
          <FaGithub/>
        </a>
        <a href='https://www.linkedin.com/in/shrey-joshi-1b038a249/'>
          <FaLinkedin/>
        </a>
        <a href='https://www.hackerrank.com/dashboard'>
          <FaHackerrank/>
        </a>
        </motion.div>   
       <motion.p
       variants={fadeIn('left' ,0.4)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false , amount:0.4}}
        className='font-primary text-md tracking-[2px]'>
         I'm a 3rd year B.Tech student with a passion for Web Development. <br></br>
        I am eager to learn & understand new things and collaborate with <br></br>
        professionals to contribute in real-world projects.<br></br>
        </motion.p>



  </div>
  </div>
  </div>
  </section>
  );
};


export default Banner;
