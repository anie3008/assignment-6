import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-300 text-base-content p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
<div>
    
    <a className="btn btn-ghost h-auto py-1.5 flex items-center gap-1.5">
        <Image src={logo} alt='logo'/>
  <div className="flex flex-col text-left leading-none font-black tracking-tight text-lg">
    <span className="text-white">FORGE</span>
    <span className="text-white/80">FLOW</span>
  </div>
  <span className="bg-[linear-gradient(135deg,#f44369,#3e3b92)] bg-clip-text text-transparent text-2xl font-black">
    &
  </span>
</a>
</div>

  
   <div>
     <p className='font-extralight text-xs'> © {new Date().getFullYear()} Forge & Flow — Workout Library. Train hard, log honest.</p>
   </div>
  
</footer>
        </div>
    );
};

export default Footer;