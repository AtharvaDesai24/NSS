import { YEARS } from "../data/nssData";

export default function YearSelector({ year, onChange }) {
  return (
    <label>
      <span className="year-label">Academic Year</span>
      <select
        className="year-select"
        value={year}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Select academic year"
      >
        {YEARS.map((y, i) => (
          <option key={y} value={y}>
            {y}
            {i === 0 ? " (current)" : ""}
          </option>
        ))}
      </select>
    </label>
  );
}
