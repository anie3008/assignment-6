export interface WorkoutItem {
    id: number;
    name: string;
    description: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | string;
    duration: number; // in minutes
    caloriesBurned: number;
    rating: number;
    sets: number;
    reps: string;
    equipment: string;
    image: string;
    muscleGroups: string[];
    instructions: string[];
}