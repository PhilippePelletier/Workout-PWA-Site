export function DayDetail({ day, minutes, timeSaver, onBack, onLog }) {
  return (
    <div className="card detail-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">Workout detail</p>
          <h2>{day.name}</h2>
        </div>
        <span className="chip">Est. {minutes} min</span>
      </div>
      <p className="muted">{day.notes}</p>
      <div className="exercise-list">
        {day.exercises
          .filter((exercise) => !(timeSaver && exercise.optional))
          .map((exercise) => (
            <div className="exercise" key={exercise.name}>
              <div className="exercise-header">
                <h4>{exercise.name}</h4>
                <span className="mini-chip">{exercise.rest ? `${exercise.rest}s` : '—'}</span>
              </div>
              <div className="exercise-grid">
                <div>
                  <p className="muted">Sets · Reps</p>
                  <strong>
                    {exercise.sets} × {exercise.reps}
                  </strong>
                </div>
                <div>
                  <p className="muted">Tempo</p>
                  <strong>{exercise.tempo ?? '—'}</strong>
                </div>
                <div>
                  <p className="muted">Notes</p>
                  <strong>{exercise.optional ? 'Optional finisher' : '—'}</strong>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="card-actions">
        <button className="button" type="button" onClick={onLog}>
          Log this workout →
        </button>
        <button className="button ghost" type="button" onClick={onBack}>
          Back to days
        </button>
      </div>
    </div>
  );
}
