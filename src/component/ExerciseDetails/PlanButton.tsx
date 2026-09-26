"use client"

import { workoutContext } from '@/app/context/exerciseContext';
import { WorkoutItem } from '@/types/Workout';
import { Calendar, Check } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PlanButton = ({exercise}:{exercise:WorkoutItem}) => {
 const {addToPlan, 
    setAddToPlan} = useContext(workoutContext)   
    
    const isAdded = addToPlan?.map((item:WorkoutItem) => item.id).includes(exercise.id)
    const handleAddToPlan = () => {
if(isAdded){
setAddToPlan(addToPlan.filter((item:WorkoutItem) => item.id !==exercise.id));
toast.info('Removed from my list')
}else{
setAddToPlan([...addToPlan, exercise])
toast.success("Added to today's plan")
}
}
    
    
    return (
        <div>

<button
              onClick={() => handleAddToPlan()}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md ${
                isAdded
                  ? "bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white ring-2 ring-[#f44369]/50 shadow-[#f44369]/20"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-[#f44369]/40 hover:text-white"
              }`}
            >
              {isAdded ? <Check className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
              {isAdded ? "Added to Today's Plan" : "Add to Today's Plan"}
            </button>

        </div>
    );
};

export default PlanButton;