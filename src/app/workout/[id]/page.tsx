import PlanButton from '@/component/ExerciseDetails/PlanButton';
import SaveButton from '@/component/ExerciseDetails/SaveButton';
import { WorkoutItem } from '@/types/Workout';
import { Dumbbell } from 'lucide';
import { Clock, DumbbellIcon, Flame, Gauge, Layers, Repeat, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface WorkoutDetailsProps {
  exercise: WorkoutItem;
  params: Promise<{
    id: string;
  }>
}

const workoutLibrary = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
  const data = await response.json();
  return data;}

const ExerciseDetailsPage = async({params}:WorkoutDetailsProps) => {
   const {id} = await params; 
   const exerciseData = await workoutLibrary()
   const exercise = exerciseData.find ((exercise: WorkoutItem) => String(exercise.id) === String(id))
    
    return (
       <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-3xl bg-[#191830] border border-slate-800/80 shadow-2xl text-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        
        {/* Left Side: Full Size Image */}
        <div className="lg:col-span-5 relative w-full h-72 lg:h-full min-h-[320px] bg-slate-900 overflow-hidden">
          <Image
            src={exercise.image}
            alt={exercise.name}
            width={800}
            height={600}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay gradient to blend with the card theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#191830] via-transparent to-transparent lg:hidden" />
        </div>

        {/* Right Side: Details Content */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Header: Name */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {exercise.name}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {exercise.description}
            </p>

            {/* Muscle Group Badges (Side by Side) */}
            <div className="flex flex-wrap gap-2 pt-1">
              {exercise.muscleGroups.map((group, idx) => (
                <span
                  key={idx}
                  className="inline-block rounded-full bg-[#f44369]/15 border border-[#f44369]/30 px-3.5 py-1 text-xs font-semibold text-[#f44369]"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Workout Details Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-slate-950/50 my-4">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <th className="py-2.5 px-4 font-semibold text-[#7f7cd0] w-1/3">
                      <div className="flex items-center gap-2">
                        <DumbbellIcon className="w-4 h-4 text-[#7f7cd0]" />
                        Equipment
                      </div>
                    </th>
                    <td className="py-2.5 px-4 text-slate-200 font-medium">{exercise.equipment}</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <th className="py-2.5 px-4 font-semibold text-[#7f7cd0]">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-[#7f7cd0]" />
                        Difficulty
                      </div>
                    </th>
                    <td className="py-2.5 px-4 text-slate-200 font-medium">{exercise.difficulty}</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <th className="py-2.5 px-4 font-semibold text-[#7f7cd0]">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#7f7cd0]" />
                        Sets
                      </div>
                    </th>
                    <td className="py-2.5 px-4 text-slate-200 font-medium">{exercise.sets} sets</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <th className="py-2.5 px-4 font-semibold text-[#7f7cd0]">
                      <div className="flex items-center gap-2">
                        <Repeat className="w-4 h-4 text-[#7f7cd0]" />
                        Reps
                      </div>
                    </th>
                    <td className="py-2.5 px-4 text-slate-200 font-medium">{exercise.reps}</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <th className="py-2.5 px-4 font-semibold text-[#7f7cd0]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#7f7cd0]" />
                        Duration
                      </div>
                    </th>
                    <td className="py-2.5 px-4 text-slate-200 font-medium">{exercise.duration} mins</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <th className="py-2.5 px-4 font-semibold text-[#7f7cd0]">
                      <div className="flex items-center gap-2">
                        <Flame className="w-4 h-4 text-[#f44369]" />
                        Calories Burned
                      </div>
                    </th>
                    <td className="py-2.5 px-4 text-slate-200 font-medium">{exercise.caloriesBurned} kcal</td>
                  </tr>
                  <tr className="hover:bg-slate-900/40 transition-colors">
                    <th className="py-2.5 px-4 font-semibold text-[#7f7cd0]">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-400" />
                        Rating
                      </div>
                    </th>
                    <td className="py-2.5 px-4 text-slate-200 font-medium">{exercise.rating} / 5.0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Instructions Section */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                {exercise.instructions.map((step, index) => (
                  <li key={index} className="pl-1 marker:text-[#f44369] marker:font-bold">
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
            {/* Add to Today's Plan */}
            
            <PlanButton exercise ={exercise}/>
            
           
            {/* Save for Later */}
            
            <SaveButton exercise ={exercise}/>
          </div>

        </div>

      </div>
    </div>
    );
};

export default ExerciseDetailsPage;