import React from 'react';
import banner from '@/assets/banner.png'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src={banner} alt='banner image'/>

    <div className='text-center lg:text-start'>
<p className="py-6 text-[#7f7cd0]">WORKOUT LIBRARY</p>

      <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>
      <p className="py-6">
        Forge & Flow is a dark, no-nonsense gym companion: pick a lift, lock it <br />
into today's plan, and watch the week's work add up.
      </p>
      <button className="btn bg-[linear-gradient(135deg,#f44369,#3e3b92)]">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;