import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
// import img from '../assets/aboutme3.jpg';



const About = () => {
  const [ref, inView] = useInView({
   threshold:0.5, 
  })
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>

        {/* img */}

       {/* <a href='#'>
        <img src={img} alt='kjhk'
         className='flex-1 h-[300px] rounded-3xl mx-[75px] '/>
         </a>  */}
      {/* </motion.div> */}
      {/* texttt */}
      <motion.div  variants={fadeIn('left' ,0.4)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: false , amount:0.3}}
          

      className='flex-1 '>

        <h2 className='h2 text-accent '>About Me.</h2>
        <h3 className='h3 mb-4'>
          I'm Currently Persuing My B.Tech from SRM Institute of Science and Technology.
        </h3>

        {/* states */}
        <div className='flex'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient mb-2'>
              {inView ?                
              <CountUp start ={0} end ={300} duration={3}/>: null}
              +
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
             Hours of <br/>
             Coding.
              <h2>
              <ul  className='marker:text-sky-400 list-disc pl-8 space-y-3 text-white '>
               <li>Birthday- 7th November, 2004</li>              
               <li>Home Town- Bhilwara, Rajasthan</li>
               <li>Currently in- Chennai</li>
               <li>Age- 18</li>
               <li>Email- shreyjoshi1394@gmail.com</li>
               <li>Phone no- +91(private) </li>
            
                </ul>
                </h2>
                <br></br>
                <br></br>

               <motion.div
                variants={fadeIn('right' ,0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false , amount:0.3}}
                className='flex-1'>
                 
              <h2 className='text-green-400 text-[35px]'>Club Experience</h2>
              <br></br>
              
              <h3 className='text-pink-400 text-[20px]'> SRM Quantum Computing Club (SQCC)</h3>
              <br></br>
              <button className='bg-slate-500 rounded-md px-3 text-[15px]'>Member</button>
              <br></br>
              <br></br>
              <p>This club is based on study of quantum computing related stuffs.
              This club has provided me enough knowledge about Quantum Computing and web development with a platform for which I was looking forward too!.
              My domain leads helped me with one on one interaction by assigning projects. I have completed the assigned projects very sincerely!!
                There are several domains available in this club, I was in tech domain (web dev) 
                I'm consistently striving to improve my techniques, capabilities & expand my skill set and find new opportunities to grow.
                  </p>
                  <br></br>
                  </motion.div>
                  

            </div>  
          </div>
        </div>
      </motion.div>
      <br></br>
      <br></br>
      {/* <motion.p  
          variants={fadeIn('up' ,0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false , amount:0.3}}
          className='lg:flex flex-1 mb-8 max-w-lg mx-auto lg:mx-0'> */}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis */}
{/* 
         <a href='#'>
        <img src={img} alt='kjhk'
         className='flex-1 h-[300px] rounded-3xl mx-[200px] my-[20px]'/>
         </a>  */}
        {/* </motion.p> */}

    </div>
    <br></br>
    <br></br>
  </section>
  
  );
};

export default About;
