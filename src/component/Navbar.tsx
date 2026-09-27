"use client"
import Link from 'next/link';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { workoutContext } from '@/app/context/exerciseContext';

const Navbar = () => {
const { addToPlan, savedForLater,} = useContext(workoutContext);

const pathname = usePathname()
    const links = <>
        <li><Link href="/workout"
            className={pathname === "/workout" ? "border-2 border-solid border-[#3e3b92]" : ""}>Workouts</Link></li>
        <li><Link href="/myPlan" className={pathname === "/myPlan" ? "border-2 border-solid border-[#3e3b92]" : ""}>My plan</Link></li></>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Image src={logo} alt='logo'/>

<a className="btn btn-ghost h-auto py-1.5 flex items-center gap-1.5">
  <div className="flex flex-col text-left leading-none text-xl">
    <span className="text-white">FORGE</span>
    <span className="text-white/80">FLOW</span>
  </div>
  <span className="bg-[linear-gradient(135deg,#f44369,#3e3b92)] bg-clip-text text-transparent text-2xl font-black">
    &
  </span>
</a>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={'/myPlan'}>
                <button className="btn rounded-4xl bg-[linear-gradient(135deg,#f44369,#3e3b92)]">
                    Plan ({addToPlan?.length || 0})
                   </button>
                </Link>

                <Link href={'/myPlan'}>
                    <button className="btn rounded-4xl border-2 border-solid border-[#f44369]">
                    Saved ({savedForLater?.length || 0})
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;