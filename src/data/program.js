export const program = {
  name: '12-Week Plan',
  weeks: 12,
  days: [
    {
      id: 'U1',
      name: 'Upper — Strength',
      goal: 'Strength',
      notes: 'RPE 7–8 on big lifts.',
      exercises: [
        { name: 'Barbell Bench Press', sets: 4, reps: '5', rest: 170, tempo: '2-0-1' },
        { name: 'Weighted Pull-up', sets: 4, reps: '5', rest: 160, tempo: '2-1-1' },
        { name: 'Overhead Press', sets: 3, reps: '6', rest: 140, tempo: '2-0-1' },
        { name: 'Barbell Row', sets: 3, reps: '6–8', rest: 130, tempo: '2-1-1' },
        { name: 'Incline DB Press', sets: 2, reps: '8–10', rest: 90, tempo: '2-0-1' },
        { name: 'Face Pull', sets: 2, reps: '12–15', rest: 60, tempo: '2-1-1' },
        { name: 'EZ-Bar Curl', sets: 2, reps: '10–12', rest: 50, tempo: '2-1-1', optional: true },
        { name: 'Cable Triceps Pressdown', sets: 2, reps: '10–12', rest: 50, tempo: '2-1-1', optional: true }
      ]
    },
    {
      id: 'L1',
      name: 'Lower — Strength',
      goal: 'Strength',
      notes: 'Brace and control tempo.',
      exercises: [
        { name: 'Back Squat', sets: 4, reps: '5', rest: 170, tempo: '3-0-1' },
        { name: 'Romanian Deadlift', sets: 3, reps: '6', rest: 160, tempo: '3-1-1' },
        { name: 'Bulgarian Split Squat', sets: 3, reps: '8/side', rest: 100, tempo: '2-1-1' },
        { name: 'Lying Leg Curl', sets: 2, reps: '10–12', rest: 80, tempo: '2-1-2' },
        { name: 'Standing Calf Raise', sets: 3, reps: '10–12', rest: 60, tempo: '2-1-2' },
        { name: 'Hanging Knee Raise', sets: 3, reps: '10–15', rest: 50, tempo: '1-1-1' }
      ]
    },
    {
      id: 'P',
      name: 'Push — Hypertrophy',
      goal: 'Hypertrophy',
      notes: 'Keep 1–2 RIR.',
      exercises: [
        { name: 'Incline DB Bench', sets: 3, reps: '8–12', rest: 90, tempo: '2-0-1' },
        { name: 'Seated DB Shoulder Press', sets: 3, reps: '8–12', rest: 90, tempo: '2-0-1' },
        { name: 'Cable Fly', sets: 3, reps: '12–15', rest: 60, tempo: '2-1-2' },
        { name: 'DB Lateral Raise', sets: 3, reps: '12–20', rest: 45, tempo: '1-1-1' },
        { name: 'Rope Pressdown', sets: 2, reps: '10–15', rest: 60, tempo: '2-1-1' },
        { name: 'Overhead Triceps Extension', sets: 2, reps: '10–12', rest: 60, tempo: '2-1-1' },
        { name: 'Push-ups (AMRAP)', sets: 1, reps: 'AMRAP', rest: 0, tempo: 'controlled', optional: true }
      ]
    },
    {
      id: 'PL',
      name: 'Pull — Hypertrophy',
      goal: 'Hypertrophy',
      notes: 'Squeeze the back.',
      exercises: [
        { name: 'Lat Pulldown', sets: 3, reps: '8–12', rest: 90, tempo: '2-1-1' },
        { name: 'Chest-Supported Row', sets: 3, reps: '8–12', rest: 90, tempo: '2-1-1' },
        { name: '1-Arm DB Row', sets: 3, reps: '10/side', rest: 70, tempo: '2-1-1' },
        { name: 'Rear Delt Fly', sets: 3, reps: '15', rest: 50, tempo: '1-1-1' },
        { name: 'Hammer Curl', sets: 2, reps: '10–12', rest: 60, tempo: '2-1-1' },
        { name: 'Incline DB Curl', sets: 2, reps: '10–12', rest: 60, tempo: '2-1-1' }
      ]
    },
    {
      id: 'L2',
      name: 'Legs & Core — Hypertrophy',
      goal: 'Hypertrophy',
      notes: 'Range + control.',
      exercises: [
        { name: 'Barbell Hip Thrust', sets: 4, reps: '8–12', rest: 90, tempo: '2-1-1' },
        { name: 'Leg Press', sets: 3, reps: '10–12', rest: 90, tempo: '2-1-1' },
        { name: 'Walking Lunge', sets: 3, reps: '12/side', rest: 70, tempo: '1-0-1' },
        { name: 'Leg Extension', sets: 2, reps: '12–15', rest: 60, tempo: '2-1-2' },
        { name: 'Seated Leg Curl', sets: 2, reps: '12–15', rest: 60, tempo: '2-1-2' },
        { name: 'Seated Calf Raise', sets: 3, reps: '12–15', rest: 60, tempo: '2-1-2' },
        { name: 'Plank', sets: 3, reps: '45–60s hold', rest: 45, tempo: '—', optional: true }
      ]
    }
  ]
};
