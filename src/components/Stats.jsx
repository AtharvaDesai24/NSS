const fmt = (n) => n.toLocaleString("en-IN");

export default function Stats({ stats, year }) {
  const items = [
    ["Blood units donated", `${stats.blood}+`],
    ["Trees planted", `${stats.trees}+`],
    [`Volunteer hours (A.Y ${year})`, `${stats.volunteers}+`],
  ];
  return (
    <section className="container section" aria-label={`Impact in ${year}`}>
      <div className="glass stats">
        {items.map(([label, value]) => (
          <div key={label}>
            <div className="stat-num">{fmt(value)}</div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
