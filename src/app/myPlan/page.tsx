"use client";
import { useContext, useState } from 'react';
import { workoutContext } from '../context/exerciseContext';
import Link from 'next/link';
import PlanCard from '@/component/PlanCard';
import { WorkoutItem } from '@/types/Workout';

const PlanPage = () => {
  const { addToPlan, savedForLater } = useContext(workoutContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "caloriesBurned" | "rating">("duration");

  const sortExercise = (exercise: WorkoutItem[] = []) => {
    const sortedExercise = [...exercise];
    if (sortBy === 'duration') {
      sortedExercise.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === 'caloriesBurned') {
      sortedExercise.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === 'rating') {
      sortedExercise.sort((a, b) => b.rating - a.rating);
    }
    return sortedExercise;
  };

  const sortedPlan = sortExercise(addToPlan);
  const sortedSave = sortExercise(savedForLater);

  const currentList = activeTab === "plan" ? sortedPlan : sortedSave;
  const totalExercises = currentList?.length || 0;
  const totalDuration = currentList?.reduce((acc, curr) => acc + (curr.duration || 0), 0) || 0;
  const totalCalories = currentList?.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0) || 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-slate-200 to-[#8a87ea]">
            My Plan
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
      </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/40 p-2 sm:p-3 rounded-2xl border border-slate-800/60 backdrop-blur-md">
          
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Exercises</span>
            <span className="text-sm font-bold text-slate-100">{totalExercises}</span>
          </div>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="text-sm"></span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Time:</span>
            <span className="text-sm font-bold text-slate-100">{totalDuration} min</span>
          </div>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            <span className="text-sm"></span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Burn:</span>
            <span className="text-sm font-bold text-rose-400">{totalCalories} kcal</span>
          </div>
        </div>
     
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/40 p-2 sm:p-3 rounded-2xl border border-slate-800/60 backdrop-blur-md">
       
        <div className="flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800/80 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab("plan")}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === "plan"
                ? "bg-linear-to-r from-[#f44369] to-[#3e3b92] text-white shadow-lg shadow-rose-950/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
            }`}
          >
            Today&apos;s Plan 
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === "saved"
                ? "bg-linear-to-r from-[#f44369] to-[#3e3b92] text-white shadow-lg shadow-rose-950/30"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
            }`}
          >
            Saved for Later 
          </button>
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto">
          <label htmlFor="sort-by" className="text-xs uppercase tracking-wider text-slate-400 font-semibold hidden md:inline-block">
            Sort:
          </label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "duration" | "caloriesBurned" | "rating")}
            className="w-full sm:w-48 bg-slate-950 text-slate-200 text-sm font-medium border border-slate-800 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f44369]/50 focus:border-[#f44369] transition-all cursor-pointer"
          >
            <option value="duration"> Duration</option>
            <option value="caloriesBurned"> Calories</option>
            <option value="rating"> Rating</option>
          </select>
        </div>
      </div>

      
      <div className="mt-6">
        {currentList && currentList.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {currentList.map((exercise) => (
              <PlanCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        ) : (
          
          <div className="flex flex-col items-center justify-center text-center p-10 sm:p-16 rounded-3xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-sm my-8 space-y-4">
            
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-slate-100 via-slate-300 to-[#8a87ea]">
              {activeTab === "plan" ? "YOUR PLAN IS EMPTY" : "NO SAVED WORKOUTS"}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
              Browse the library and add a lift to get today moving and hit your daily goals.
            </p>

            <Link
              href="/workout"
              className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-[#f44369] to-[#3e3b92] hover:opacity-95 active:scale-95 transition-all duration-200 shadow-lg shadow-rose-950/40"
            >
              <span>Go to Workouts</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanPage;