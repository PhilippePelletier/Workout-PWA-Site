export function DayCard({ day, minutes, onView, onLog }) {
  return (
    <div className="card day-card">
      <div className="card-header">
        <h3>{day.name}</h3>
        <span className="chip">{day.goal}</span>
      </div>
      <p className="muted">Est. Time: {minutes} min</p>
      <p className="muted">{day.notes}</p>
      <div className="card-actions">
        <button className="button" type="button" onClick={() => onView(day.id)}>
          View workout
        </button>
        <button className="button ghost" type="button" onClick={() => onLog(day.id)}>
          Log this →
        </button>
      </div>
    </div>
  );
}
