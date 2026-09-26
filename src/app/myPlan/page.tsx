"use client"
import React, { useContext } from 'react';
import { workoutContext } from '../context/exerciseContext';
import WorkoutCards from '@/component/WorkoutCards';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Flame, Star } from 'lucide-react';

const PlanPage = () => {

const {addToPlan,savedForLater} = useContext(workoutContext) 

    return (
        <div className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-[#7f7cd0]">
          My Plan
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* tab and sorting section */}


<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_6" className="tab" aria-label="Today's Plan"defaultChecked />

  <div className="tab-content bg-base-100 border-base-300 p-6">
    {addToPlan.length>0?
        addToPlan.map((exercise) => {
            return(
                 <div key={exercise.id} className="w-full bg-[#12131e] border border-[#23253b] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[#7f7cd0] shadow-xl hover:border-[#3e3b92] transition-all duration-300">
      
     

      {/* Right Section: Details & Image */}
      <div className="flex items-center gap-4 w-full md:w-auto">
<Image 
          src={exercise.image}
              alt={exercise.name}
              width={800}
              height={600}
          className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#23253b]"
        />
        {/* Exercise Information */}
        <div className="flex flex-col text-left">
          {/* Title & Difficulty Badge */}
          <div className="flex items-center gap-2 mb-1">
            
            <h3 className="text-base font-bold text-white tracking-wide">
              {exercise.name}
            </h3>
          </div>

          {/* Equipment */}
          <p className="text-xs text-[#7f7cd0]/80 font-medium mb-2">
            {exercise.equipment}
          </p>

          {/* Stats Row (Duration, Calories, Rating) */}
           <div className="flex items-center gap-2 text-xs font-medium text-[#a5a3e0]">
        <div className="flex items-center gap-1.5 p-1.5 px-2.5 rounded-lg bg-[#1f1d33]/50">
          <Clock size={14} className="text-[#f44369]" />
          <span>{exercise.duration} mins</span>
        </div>

        <div className="flex items-center gap-1.5 p-1.5 px-2.5 rounded-lg bg-[#1f1d33]/50">
          <Flame size={14} className="text-[#f44369]" />
          <span>{exercise.caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-1.5 p-1.5 px-2.5 rounded-lg bg-[#1f1d33]/50">
          <Star size={14} className="text-[#f44369]" />
          <span>{exercise.rating}</span>
        </div>
      </div>
    </div>
        </div>
        
      

       <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
    {/* View Details Button */}
    <button 
      type="button"
      style={{ background: 'linear-gradient(135deg, #f44369, #3e3b92)' }}
      className="px-4 py-2 text-xs font-semibold text-white rounded-xl hover:opacity-90 transition-opacity shadow-md shadow-[#f44369]/20"
    >
      View Details
    </button>

    {/* Mark as Done Button */}
    <button 
      type="button"
      aria-label="Mark as Done" 
      className="p-2 rounded-xl bg-[#1c1d2e] hover:bg-[#23253b] text-emerald-400 hover:text-emerald-300 border border-[#2d2f4a] transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </button>

    {/* Delete Button */}
    <button 
      type="button"
      aria-label="Delete" 
      className="p-2 rounded-xl bg-[#1c1d2e] hover:bg-[#23253b] text-rose-400 hover:text-rose-300 border border-[#2d2f4a] transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
      

    </div>
            ) 
        }): <div className='text-center'>
            <h1 className="text-xl sm:text-4xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-[#7f7cd0]">
          NOTHING HERE YET
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-2 mb-3">
         Browse the library and add a lift to get today moving.
        </p>
        <button className="btn bg-[linear-gradient(135deg,#f44369,#3e3b92)]"><Link href={'/workout'}>Go to Workouts</Link></button>
        </div>
    }
  </div>

  <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved"/>
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {savedForLater.length>0?
        savedForLater.map((exercise) => {
            return(
                 <div key={exercise.id} className="w-full bg-[#12131e] border border-[#23253b] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[#7f7cd0] shadow-xl hover:border-[#3e3b92] transition-all duration-300">
      
     

      {/* Right Section: Details & Image */}
      <div className="flex items-center gap-4 w-full md:w-auto">
<Image 
          src={exercise.image}
              alt={exercise.name}
              width={800}
              height={600}
          className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#23253b]"
        />
        {/* Exercise Information */}
        <div className="flex flex-col text-left">
          {/* Title & Difficulty Badge */}
          <div className="flex items-center gap-2 mb-1">
            
            <h3 className="text-base font-bold text-white tracking-wide">
              {exercise.name}
            </h3>
          </div>

          {/* Equipment */}
          <p className="text-xs text-[#7f7cd0]/80 font-medium mb-2">
            {exercise.equipment}
          </p>

          {/* Stats Row (Duration, Calories, Rating) */}
           <div className="flex items-center gap-2 text-xs font-medium text-[#a5a3e0]">
        <div className="flex items-center gap-1.5 p-1.5 px-2.5 rounded-lg bg-[#1f1d33]/50">
          <Clock size={14} className="text-[#f44369]" />
          <span>{exercise.duration} mins</span>
        </div>

        <div className="flex items-center gap-1.5 p-1.5 px-2.5 rounded-lg bg-[#1f1d33]/50">
          <Flame size={14} className="text-[#f44369]" />
          <span>{exercise.caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-1.5 p-1.5 px-2.5 rounded-lg bg-[#1f1d33]/50">
          <Star size={14} className="text-[#f44369]" />
          <span>{exercise.rating}</span>
        </div>
      </div>
    </div>
        </div>
        
      

       <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
    {/* View Details Button */}
    <button 
      type="button"
      style={{ background: 'linear-gradient(135deg, #f44369, #3e3b92)' }}
      className="px-4 py-2 text-xs font-semibold text-white rounded-xl hover:opacity-90 transition-opacity shadow-md shadow-[#f44369]/20"
    >
      View Details
    </button>
    {/* Delete Button */}
    <button 
      type="button"
      aria-label="Delete" 
      className="p-2 rounded-xl bg-[#1c1d2e] hover:bg-[#23253b] text-rose-400 hover:text-rose-300 border border-[#2d2f4a] transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
      

    </div>
            ) 
        }): <div className='text-center'>
            <h1 className="text-xl sm:text-4xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-[#7f7cd0]">
          NOTHING HERE YET
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-2 mb-3">
         Browse the library and add a lift to get today moving.
        </p>
        <button className="btn bg-[linear-gradient(135deg,#f44369,#3e3b92)]"><Link href={'/workout'}>Go to Workouts</Link></button>
        </div>
    }
  </div>

</div>
      </div>
    );
};

export default PlanPage;


