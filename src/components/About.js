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
               <li>D.O.B- 7th November, 2004</li>              
               <li>Age- 18</li>
               <li>Email- shreyjoshi1394@gmail.com</li>
               <li>Phone no- +91(private) </li>
               <li>Sem-1 GPA- 9.41</li>
               <li>Sem-2 GPA- 9.43</li>

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
                 
              <h2 className='text-green-400 text-[35px]'>University Experience</h2>
              <br></br>
              
              <h3 className='text-pink-400 text-[20px]'>SRM Institute of Science and Technology.</h3>
              <br></br>
              <button className='bg-slate-500 rounded-md px-3 text-[15px]'>Currently in 2nd year</button>
              <br></br>
              <br></br>
              <p> My university experience has been an exhilarating journey of technological exploration. I've delved into the intricacies of coding, algorithms, and software development, honing my technical skills and problem-solving abilities.
              This year, I've had the opportunity to work on exciting projects, collaborate with professors on research, and even engage in hackathons and coding competitions. These experiences have not only deepened my understanding of the field but have also sparked my passion for innovation and the limitless potential of technology. 
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
