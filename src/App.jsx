import { useMemo, useState } from 'react';
import { program } from './data/program';
import { useWorkoutStore } from './store/useWorkoutStore';
import { DayCard } from './components/DayCard';
import { DayDetail } from './components/DayDetail';
import { TabBar } from './components/TabBar';
import './styles/app.css';

const estimateTime = (day, timeSaver) => {
  let total = 0;
  day.exercises.forEach((exercise) => {
    if (timeSaver && exercise.optional) return;
    const sets = exercise.sets ?? 0;
    const reps = String(exercise.reps).toLowerCase();
    let perSetWork = 18;
    if (reps.includes('amrap') || reps.includes('hold')) perSetWork = 30;
    else if (reps.includes('12') || reps.includes('10')) perSetWork = 30;
    else if (reps.includes('5')) perSetWork = 18;
    const rest = exercise.rest ?? 60;
    total += sets * (perSetWork + Math.min(rest, 180) + 15);
  });
  return Math.round(total / 60);
};

const getDayById = (id) => program.days.find((day) => day.id === id) ?? program.days[0];

export default function App() {
  const {
    activeTab,
    timeSaver,
    selectedDayId,
    setActiveTab,
    toggleTimeSaver,
    setSelectedDay
  } = useWorkoutStore();
  const [detailDayId, setDetailDayId] = useState(null);

  const selectedDay = useMemo(() => getDayById(detailDayId ?? selectedDayId), [detailDayId, selectedDayId]);
  const minutes = useMemo(() => estimateTime(selectedDay, timeSaver), [selectedDay, timeSaver]);

  const handleLogDay = (dayId) => {
    setSelectedDay(dayId);
    setActiveTab('log');
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">12-week strength plan</p>
          <h1>🏋️‍♂️ Workout Dashboard</h1>
        </div>
        <div className="header-actions">
          <button className="button ghost" type="button">
            Today
          </button>
          <button className="button" type="button">
            Start session
          </button>
        </div>
      </header>

      <main className="app-main">
        {activeTab === 'program' && (
          <section className="section">
            <div className="card hero">
              <div>
                <h2>5-Day Split (hit everything 2×/week)</h2>
                <p className="muted">
                  Upper/Lower (strength) + Push/Pull/Legs (hypertrophy). Sessions average 50–60 minutes.
                </p>
              </div>
              <div className="hero-actions">
                <label className="toggle">
                  <input type="checkbox" checked={timeSaver} onChange={toggleTimeSaver} />
                  <span>Time-saver mode</span>
                </label>
                <div className="chip">Warm-up: 5 min cardio + 5 min mobility</div>
              </div>
            </div>

            {detailDayId ? (
              <DayDetail
                day={selectedDay}
                minutes={minutes}
                timeSaver={timeSaver}
                onBack={() => setDetailDayId(null)}
                onLog={() => handleLogDay(selectedDay.id)}
              />
            ) : (
              <div className="grid">
                {program.days.map((day) => (
                  <DayCard
                    key={day.id}
                    day={day}
                    minutes={estimateTime(day, timeSaver)}
                    onView={setDetailDayId}
                    onLog={handleLogDay}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === 'log' && (
          <section className="section">
            <div className="card">
              <h2>Training Log</h2>
              <p className="muted">
                The new log experience will sync across devices, support offline-first entries, and auto-suggest
                progressions. We will migrate the existing local logging into the new data model next.
              </p>
              <div className="empty-state">
                <p>Next up: structured sets, quick input, and auto PR detection.</p>
                <button className="button" type="button">
                  Build today’s log
                </button>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'progress' && (
          <section className="section">
            <div className="card">
              <h2>Progress</h2>
              <p className="muted">
                Progress charts will show estimated 1RM, weekly volume, and exercise trends once the backend is
                wired in.
              </p>
              <div className="empty-state">
                <p>Coming soon: analytics dashboard and personalized insights.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'help' && (
          <section className="section">
            <div className="card">
              <h2>Help & Onboarding</h2>
              <p className="muted">
                This space will host onboarding, technique tips, and quick links to your most-used actions.
              </p>
              <div className="help-grid">
                <div>
                  <h3>Setup checklist</h3>
                  <ul>
                    <li>Connect your account</li>
                    <li>Choose a program variant</li>
                    <li>Configure rest timers</li>
                  </ul>
                </div>
                <div>
                  <h3>Quick actions</h3>
                  <button className="button ghost" type="button">
                    Export data
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <TabBar activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
