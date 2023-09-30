import React from 'react';
import Logo from '../assets/logo2.jpg';
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between item-center'>
          <a href='#'>
            <img src={Logo} alt='iuhu'
            className='h-[130px] rounded-b-full'
            />
          </a>
          <button className='btn btn-sm px-[25px] h-[60px]'> Scroll down to<br></br>
          Know more about me</button>
        </div>
      </div>
    </header>
  // <div className='bg-pink-300'>Header</div>;
  );
};

export default Header;
