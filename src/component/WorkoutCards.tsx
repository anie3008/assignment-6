import { Clock, Flame, Star, X, Dumbbell } from 'lucide-react';
import Image from 'next/image';
import { WorkoutItem } from '@/types/Workout';
import Link from 'next/link';

interface WorkoutCardsProps {
  exercise: WorkoutItem;
}

const WorkoutCards = ({ exercise }: WorkoutCardsProps) => {
  return (
<Link href={`/workout/${exercise.id}`}>

    <div className="bg-[#161524] rounded-2xl overflow-hidden border border-[#2a274c] shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:border-[#3e3b92] cursor-pointer">

      <div>




        <div>

          <div className="relative w-full  overflow-hidden bg-[#1f1d33]">
            <Image
              src={exercise.image}
              alt={exercise.name}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>


          <div className="p-5">

            <div className="flex flex-wrap gap-2 mb-3">
              {exercise.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-[#f44369]/15 text-[#ff758c] border border-[#f44369]/30"
                >
                  {muscle}
                </span>
              ))}
            </div>


            <h3 className="text-xl font-bold text-white mb-1 tracking-wide">
              {exercise.name}
            </h3>


            <p className="text-sm text-[#7f7cd0]/80 mb-4 font-medium">
              Equipment: <span className="text-[#a5a3e0]">{exercise.equipment}</span>
            </p>


            <hr className="border-t border-[#2a274c] my-4" />


            <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium text-[#a5a3e0] mb-5">

              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#1f1d33]/50">
                <div className="flex items-center gap-1 text-[#f44369] mb-1">
                  <Clock size={16} />
                </div>
                <span>{exercise.duration} mins</span>
              </div>


              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#1f1d33]/50">
                <div className="flex items-center gap-1 text-[#f44369] mb-1">
                  <Flame size={16} />
                </div>
                <span>{exercise.caloriesBurned} kcal</span>
              </div>


              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-[#1f1d33]/50">
                <div className="flex items-center gap-1 text-[#f44369] mb-1">
                  <Star size={16} />
                </div>
                <span>{exercise.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</Link>
  );
};

export default WorkoutCards;