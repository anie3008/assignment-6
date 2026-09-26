import WorkoutCards from './WorkoutCards';
import { WorkoutItem } from '@/types/Workout';



const workoutLibrary = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
  const data = await response.json();
  return data;
}
const Library = async () => {
  const workoutData = await workoutLibrary();

  return (
    <div>
      <div className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-300 to-[#7f7cd0]">
          Workout Library
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-2">
          Click anywhere on any card to explore step-by-step instructions and workout details.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {workoutData.map((exercise: WorkoutItem) => {
          return <WorkoutCards key={exercise.id} exercise={exercise} />

        })}


      </div>

    </div>
  );
};

export default Library;