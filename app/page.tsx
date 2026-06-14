"use client";

import { useEffect, useMemo, useState } from "react";

type Exercise = {
  name: string;
  prescription: string;
  rest: string;
  cue: string;
};

type WorkoutDay = {
  id: string;
  day: string;
  title: string;
  focus: string;
  exercises: Exercise[];
};

type ExerciseLog = {
  completed: boolean;
  weight: string;
  notes: string;
};

type BodyweightEntry = {
  date: string;
  weight: string;
};

type WorkoutState = {
  exerciseLogs: Record<string, ExerciseLog>;
  bodyweight: BodyweightEntry[];
  records: Record<string, string>;
};

const workoutDays: WorkoutDay[] = [
  {
    id: "day-1",
    day: "Day 1",
    title: "Lower Body Strength",
    focus: "Squat first. Own every rep.",
    exercises: [
      { name: "Back Squat", prescription: "Warm-up, then 3 × 5 working sets", rest: "2–4 min", cue: "Brace hard and drive evenly." },
      { name: "Romanian Deadlift", prescription: "3 × 8", rest: "2–3 min", cue: "Hips back, lats tight." },
      { name: "Walking Lunges", prescription: "3 × 10 each leg", rest: "90 sec", cue: "Long stride, controlled knee." },
      { name: "Leg Curl", prescription: "3 × 10", rest: "90 sec", cue: "Squeeze the hamstrings." },
      { name: "Standing Calf Raise", prescription: "4 × 15", rest: "60 sec", cue: "Pause at the top." },
      { name: "Plank", prescription: "3 × 60 seconds", rest: "60 sec", cue: "Ribs down, glutes tight." },
    ],
  },
  {
    id: "day-2",
    day: "Day 2",
    title: "Upper Body Strength",
    focus: "Press heavy. Pull with intent.",
    exercises: [
      { name: "Bench Press", prescription: "3 × 5 working sets", rest: "2–4 min", cue: "Leg drive and steady bar path." },
      { name: "Pull-Ups", prescription: "4 sets", rest: "2–3 min", cue: "Full hang to chest up." },
      { name: "Barbell Row", prescription: "4 × 8", rest: "2 min", cue: "Pull elbows to hips." },
      { name: "Seated Dumbbell Shoulder Press", prescription: "3 × 8", rest: "2 min", cue: "Stack wrists over elbows." },
      { name: "Lateral Raise", prescription: "3 × 15", rest: "60 sec", cue: "Lead with elbows." },
      { name: "Face Pulls", prescription: "3 × 15", rest: "60 sec", cue: "Pull high and rotate out." },
    ],
  },
  {
    id: "day-3",
    day: "Day 3",
    title: "Full Body Power",
    focus: "Move fast. Stay technical.",
    exercises: [
      { name: "Deadlift", prescription: "5 × 3", rest: "3–4 min", cue: "Push the floor away." },
      { name: "Front Squat", prescription: "4 × 5", rest: "2–4 min", cue: "Tall torso, elbows high." },
      { name: "Incline Dumbbell Press", prescription: "4 × 8", rest: "2 min", cue: "Deep stretch, strong lockout." },
      { name: "Chin-Ups", prescription: "4 × 6–10", rest: "2–3 min", cue: "Drive elbows down." },
      { name: "Farmer’s Walk", prescription: "3 rounds", rest: "2 min", cue: "Crush the handles." },
    ],
  },
];

const targets = [
  { lift: "Squat", target: 120, reps: "× 5", color: "from-amber-400 to-orange-500" },
  { lift: "Bench", target: 90, reps: "× 5", color: "from-sky-400 to-blue-500" },
  { lift: "Deadlift", target: 150, reps: "× 5", color: "from-red-400 to-rose-500" },
  { lift: "Overhead Press", target: 60, reps: "× 5", color: "from-emerald-400 to-teal-500" },
  { lift: "Pull-Ups", target: 10, reps: "+ strict reps", color: "from-violet-400 to-purple-500" },
];

const initialState: WorkoutState = { exerciseLogs: {}, bodyweight: [], records: {} };
const storageKey = "strength-dashboard-state";

function today() {
  return new Date().toISOString().slice(0, 10);
}

export default function Home() {
  const [state, setState] = useState<WorkoutState>(() => {
    if (typeof window === "undefined") return initialState;

    const saved = window.localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : initialState;
  });
  const [bodyweightInput, setBodyweightInput] = useState("");


  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state]);

  const totalExercises = workoutDays.reduce((sum, day) => sum + day.exercises.length, 0);
  const completedExercises = Object.values(state.exerciseLogs).filter((log) => log.completed).length;
  const completion = Math.round((completedExercises / totalExercises) * 100);

  const latestBodyweight = state.bodyweight.at(-1)?.weight ?? "—";

  const recordAverage = useMemo(() => {
    const percentages = targets.map((target) => {
      const value = Number(state.records[target.lift] || 0);
      return Math.min(100, Math.round((value / target.target) * 100));
    });
    return Math.round(percentages.reduce((sum, value) => sum + value, 0) / percentages.length);
  }, [state.records]);

  function exerciseKey(dayId: string, exerciseName: string) {
    return `${dayId}-${exerciseName}`;
  }

  function updateExercise(key: string, field: keyof ExerciseLog, value: string | boolean) {
    setState((current) => ({
      ...current,
      exerciseLogs: {
        ...current.exerciseLogs,
        [key]: {
          completed: current.exerciseLogs[key]?.completed ?? false,
          weight: current.exerciseLogs[key]?.weight ?? "",
          notes: current.exerciseLogs[key]?.notes ?? "",
          [field]: value,
        },
      },
    }));
  }

  function updateRecord(lift: string, value: string) {
    setState((current) => ({ ...current, records: { ...current.records, [lift]: value } }));
  }

  function addBodyweight() {
    if (!bodyweightInput.trim()) return;
    setState((current) => ({
      ...current,
      bodyweight: [...current.bodyweight, { date: today(), weight: bodyweightInput }].slice(-8),
    }));
    setBodyweightInput("");
  }

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,#243042,transparent_35%),linear-gradient(135deg,#111827,#050608)] p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-amber-300">Strength System</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Show up. Lift clean. Get stronger.</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">A mobile-first gym dashboard for strength, muscle, and athletic discipline.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <Metric label="Complete" value={`${completion}%`} />
              <Metric label="Bodyweight" value={`${latestBodyweight}kg`} />
              <Metric label="Targets" value={`${recordAverage}%`} />
            </div>
          </div>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {workoutDays.map((day) => (
            <a key={day.id} href={`#${day.id}`} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.09]">
              <p className="text-sm font-bold uppercase text-amber-300">{day.day}</p>
              <h2 className="mt-2 text-2xl font-black">{day.title}</h2>
              <p className="mt-2 text-slate-400">{day.focus}</p>
            </a>
          ))}
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.06] p-5">
          <h2 className="text-2xl font-black">Rules of Progress</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Big lifts first", "Add weight only after clean sets", "Rest 2–4 minutes heavy", "Eat 130–150g protein", "Target 70–72kg bodyweight", "Creatine 5g daily"].map((rule) => (
              <div key={rule} className="rounded-2xl bg-black/30 p-4 text-sm font-semibold text-slate-200">{rule}</div>
            ))}
          </div>
        </section>

        <section className="mt-6 space-y-6">
          {workoutDays.map((day) => (
            <article id={day.id} key={day.id} className="rounded-3xl border border-white/10 bg-[#10141d] p-5 shadow-2xl sm:p-6">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase text-amber-300">{day.day}</p>
                  <h2 className="text-3xl font-black">{day.title}</h2>
                </div>
                <p className="text-slate-400">{day.focus}</p>
              </div>
              <div className="space-y-3">
                {day.exercises.map((exercise) => {
                  const key = exerciseKey(day.id, exercise.name);
                  const log = state.exerciseLogs[key] ?? { completed: false, weight: "", notes: "" };
                  return (
                    <div key={exercise.name} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                      <div className="flex items-start gap-3">
                        <input className="mt-1 h-6 w-6 accent-amber-400" type="checkbox" checked={log.completed} onChange={(event) => updateExercise(key, "completed", event.target.checked)} />
                        <div className="flex-1">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="text-xl font-extrabold">{exercise.name}</h3>
                            <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-black text-black">Rest {exercise.rest}</span>
                          </div>
                          <p className="mt-1 font-semibold text-slate-200">{exercise.prescription}</p>
                          <p className="mt-1 text-sm text-slate-400">{exercise.cue}</p>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <label className="text-sm font-bold text-slate-300">Weight used (kg)<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-amber-300" value={log.weight} onChange={(event) => updateExercise(key, "weight", event.target.value)} placeholder="e.g. 80" /></label>
                            <label className="text-sm font-bold text-slate-300">Notes<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-amber-300" value={log.notes} onChange={(event) => updateExercise(key, "notes", event.target.value)} placeholder="Clean reps, repeat weight..." /></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
            <h2 className="text-2xl font-black">Bodyweight Tracker</h2>
            <p className="mt-2 text-slate-400">Target range: 70–72kg.</p>
            <div className="mt-4 flex gap-2">
              <input className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-amber-300" value={bodyweightInput} onChange={(event) => setBodyweightInput(event.target.value)} placeholder="Today’s weight" />
              <button className="rounded-xl bg-amber-300 px-5 font-black text-black" onClick={addBodyweight}>Save</button>
            </div>
            <div className="mt-4 space-y-2">
              {state.bodyweight.map((entry) => <div key={`${entry.date}-${entry.weight}`} className="flex justify-between rounded-xl bg-black/25 px-4 py-3"><span>{entry.date}</span><strong>{entry.weight}kg</strong></div>)}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
            <h2 className="text-2xl font-black">Personal Records</h2>
            <p className="mt-2 text-slate-400">Enter current best working weights or reps.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {targets.map((target) => (
                <label key={target.lift} className="text-sm font-bold text-slate-300">{target.lift}<input className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-amber-300" value={state.records[target.lift] ?? ""} onChange={(event) => updateRecord(target.lift, event.target.value)} placeholder={target.lift === "Pull-Ups" ? "Strict reps" : "kg"} /></label>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-6 rounded-3xl border border-white/10 bg-[#10141d] p-5 shadow-2xl sm:p-6">
          <h2 className="text-3xl font-black">12-Month Strength Targets</h2>
          <p className="mt-2 text-slate-400">Progression: squat +2.5kg, bench +2.5kg, deadlift +5kg after all reps are completed. Miss reps? Repeat the same weight next session.</p>
          <div className="mt-5 space-y-4">
            {targets.map((target) => {
              const value = Number(state.records[target.lift] || 0);
              const percent = Math.min(100, Math.round((value / target.target) * 100));
              return (
                <div key={target.lift}>
                  <div className="mb-2 flex justify-between gap-4 text-sm font-bold"><span>{target.lift}: {target.target}kg {target.reps}</span><span>{percent}%</span></div>
                  <div className="h-4 overflow-hidden rounded-full bg-black/40"><div className={`h-full rounded-full bg-gradient-to-r ${target.color}`} style={{ width: `${percent}%` }} /></div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/10 p-4"><p className="text-xs font-bold uppercase text-slate-400">{label}</p><p className="mt-1 text-2xl font-black">{value}</p></div>;
}
