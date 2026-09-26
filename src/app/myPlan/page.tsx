"use client"
import React, { useContext } from 'react';
import { workoutContext } from '../context/exerciseContext';

const PlanPage = () => {

const {addToPlan, 
    savedForLater} = useContext(workoutContext) 

console.log('add to plan:', addToPlan);
console.log('saved for later:', savedForLater);
    return (
        <div className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-[#7f7cd0]">
          My Plan
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
    );
};

export default PlanPage;


