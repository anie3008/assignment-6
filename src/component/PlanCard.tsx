import { WorkoutItem } from '@/types/Workout';
import { Clock, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


interface PlanCardProps {
    exercise : WorkoutItem;
}
const PlanCard = ({exercise,}:PlanCardProps) => {
    return (
        <div className="w-full bg-[#12131e] border border-[#23253b] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[#7f7cd0] shadow-xl hover:border-[#3e3b92] transition-all duration-300">
      
     

      
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
    <Link href={`/workout/${exercise.id}`}>
    <button 
      type="button"
      style={{ background: 'linear-gradient(135deg, #f44369, #3e3b92)' }}
      className="px-4 py-2 text-xs font-semibold text-white rounded-xl hover:opacity-90 transition-opacity shadow-md shadow-[#f44369]/20"
    >
      View Details
    </button>
    </Link>
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
    );
};

export default PlanCard;