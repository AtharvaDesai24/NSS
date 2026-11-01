export default function TeamGrid({ team, year }) {
  return (
    <section className="container section" id="team">
      <span className="eyebrow">Core committee</span>
      <h2 className="section-title">The team of {year}</h2>
      {team.length === 0 ? (
        <p className="glass empty">No committee listed for {year} yet.</p>
      ) : (
        <div className="grid-4">
          {team.map((m) => (
            <article className="glass member" key={m.id}>
              <img src={m.photo} alt={m.name} loading="lazy" />
              <h3>{m.name}</h3>
              <div className="role">{m.role}</div>
              <p>{m.dept}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
