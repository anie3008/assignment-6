"use client"

import { workoutContext } from '@/app/context/exerciseContext';
import { WorkoutItem } from '@/types/Workout';
import { Bookmark, Calendar, Check } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



const SaveButton = ({exercise}:{exercise:WorkoutItem}) => {
 const {savedForLater, 
    setSavedForLater} = useContext(workoutContext)
    const isSaved = savedForLater?.map((item:WorkoutItem) => item.id).includes(exercise.id)
    
    const handleSavedForLater = () => {
if(isSaved){
setSavedForLater(savedForLater.filter((item:WorkoutItem) => item.id !==exercise.id));
toast.info('Removed from my list')
}else{
setSavedForLater([...savedForLater, exercise])
toast.info("Saved")
}
}
 return (
        <div>

<button
              onClick={() => handleSavedForLater()}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md ${
          isSaved
            ? "bg-gradient-to-r from-[#f44369] to-[#3e3b92] text-white ring-2 ring-[#f44369]/50 shadow-[#f44369]/20"
            : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-[#f44369]/40 hover:text-white"
        }`}
      >
        {isSaved ? <Bookmark  className="w-4 h-4" /> : <Check className="w-4 h-4" />}
        {isSaved ? "Save for Later" : "Saved in Library"}
            
            </button>
        </div>
    );
};

export default SaveButton;