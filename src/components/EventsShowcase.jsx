export default function EventsShowcase({ events, year }) {
  return (
    <section className="container section" id="events">
      <span className="eyebrow">Events</span>
      <h2 className="section-title">What we did in {year}</h2>
      {events.length === 0 ? (
        <p className="glass empty">No events logged for {year} yet.</p>
      ) : (
        <div
          className="grid-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {events.map((e) => (
            <article className="glass event" key={e.id}>
              <h3>{e.name}</h3>
              <p>{e.date}</p>
              <p>{e.impact}</p>
              <div>
                {e.participants != null ? (
                  <span className="badge gold">
                    {" "}
                    {e.participants} participants
                  </span>
                ) : (
                  ""
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
