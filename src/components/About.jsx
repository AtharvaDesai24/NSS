import Logo from "./Logo";

export default function About() {
  return (
    <section className="container section" id="about">
      <div className="glass two-col">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span className="eyebrow">About us</span>
          <h2 className="section-title">Education through service</h2>
          <p>
            The National Service Scheme builds social responsibility in students
            through community work. Our unit runs health camps, plantation
            drives and village adoption programmes throughout the year.
          </p>
          <p>
            [Add your unit's story and the Programme Officer's message here.]
          </p>
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <Logo size={190} />
        </div>
      </div>
    </section>
  );
}
