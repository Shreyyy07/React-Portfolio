import React from 'react';
// import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import img from '../assets/work.1.jpg';

const work =  [ 
 
  {
    name:'First Website',
    description:
    "My 1st Website which I developed for my Club it was a basic webpage.",
    link1: 'Click here',
    
  },
  {
    name:'To-Do-List',
    description:
    "This is a To-Do-List Application . It helps me to remembar my daily tasks.",
    link2: 'Click here',
    
  },
  {  
    name:'Basic Portfolio',
    description:
    "Basic Portfolio Website made using HTML,CSS & Javascript. ",
    link4: 'Click here',
    
  },

  {
    name:'Calculator',
    description:
    "I made this Calculator Application using Javascript. Click here to visit.",
    link3: 'Click here',
    
  },

  {
    name:'Currency-Converter',
    description:
    "In this we can enter any amount in INR,USD & EUR and it will convert them into all the known currency.",
    link5: 'Click here',
    
  },
  
]; 
const Work = () => {
  return ( 
     <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
        {/* text * and image*/}

      
        <motion.div variants={fadeIn('left' ,0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false , amount:0.3}}
        className='flex-1 lg:bg-work.1 lg:bg-bottom bg-no-repeat'>

        <h2 className='h2 text-accent mb-6 py-[5px]'>My Works.</h2>
        <h4 className=' text-[35px] max-w-[455px] mb-20 font-weight: 700 font-style: italic py-[10px] '>
        <h2 className='text-green-400 text-[35px] font-semibold '>I'm a Front-End Developer.</h2>
        <h3 className="text-[26px]">
        Languages I'm known too ~ HTML, CSS, Javascript, ReactJS, TailwindCSS.</h3>
        </h4>
    
      </motion.div>

      {/* work */}

      <div className='flex-1'>
  
        {/* work list */}
     
       <div>

        {work.map((work , index)=>{
          // destructure work
          const { name , description , link1,link2,link3,link4,link5 } = work;
          return (
          <div
          className='border-b border-white/20 h-[75px] mb-[95px] flex'
          key={index}>
          <div className='max-w-[450px] py-[70px]'>
            
            <h4 className='text-[18px] tracking-wider font-primary font-semibold mb-6'>
              {name}</h4>
            <p className='text-[17px] font-style: italic font-semibold leading-tight h-[40px]'>
              {description}</p>

            </div>
            
            <div className=' flex flex-col flex-1 items-end mx-[80px] py-[90px]'>
              <a href='https://github.com/Shreyyy07?tab=repositories'
              className='btn w-10 h-10 mb-[15px] flex justify-center items-center'>
                {/* <BsArrowUpRight/> */}

              </a>

              <a href='https://64ce1acb759c68279a0302b1--fancy-figolla-418226.netlify.app/' className='text-gradient text-sm'>{link1}</a>
              <a href='https://shreyyy07.github.io/To-Do-List/' className='text-gradient text-sm'>{link2}</a>
              <a href='https://64ce1c5774696f32d24b9dc3--cool-croquembouche-d7bd4c.netlify.app/' className='text-gradient text-sm'>{link3}</a>
              <a href='https://650dd01f426292168c61c14a--vocal-cheesecake-465029.netlify.app/' className='text-gradient text-sm'>{link4}</a>
              <a href='https://651027c75ed17f541a60febf--gentle-bonbon-8f404e.netlify.app/' className='text-gradient text-sm'>{link5}</a>
              <hr></hr>
              <br></br>
              <br></br>
              <br></br>
            </div>
           </div>
          
          );
        })}
        
      </div>
      </div>
      </div>
      </div>
  </section>
  );
};

export default Work;
