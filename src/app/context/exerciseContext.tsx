"use client"
import { WorkoutItem } from "@/types/Workout";
import { createContext,  ReactNode ,useState } from "react";

interface WorkoutContextType {
   addToPlan: WorkoutItem[]; 
    setAddToPlan: React.Dispatch<React.SetStateAction<WorkoutItem[]>>;
    savedForLater : WorkoutItem[]; 
    setSavedForLater: React.Dispatch<React.SetStateAction<WorkoutItem[]>>; 
}

export const workoutContext = createContext<WorkoutContextType >(null);
const WorkoutProvider = ({children}:{children: ReactNode}) => {
   const [addToPlan, setAddToPlan] = useState <WorkoutItem[]>([]);
  const [savedForLater, setSavedForLater] = useState<WorkoutItem[]>([]);

   const sharedData = {
    addToPlan, 
    setAddToPlan,
    savedForLater, 
    setSavedForLater,
  }
   
    return (
      <workoutContext.Provider value={sharedData}>
        {children}
      </workoutContext.Provider>
    );
};

export default WorkoutProvider;