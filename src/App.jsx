import { useEffect, useState } from "react";
import { ARCHIVE, YEARS, CURRENT_YEAR } from "./data/nssData";
import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import EventsShowcase from "./components/EventsShowcase";
import TeamGrid from "./components/TeamGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Read ?year=2025-26 from the URL so archive links can be shared.
const fromUrl = () => {
  const p = new URLSearchParams(window.location.search).get("year");
  return YEARS.find((y) => y.replace("–", "-") === p) || CURRENT_YEAR;
};

export default function App() {
  const [year, setYear] = useState(fromUrl);
  const data = ARCHIVE[year];

  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set("year", year.replace("–", "-"));
    window.history.replaceState({}, "", url);
  }, [year]);

  return (
    <>
      <AuroraBackground />
      <Navbar year={year} onYearChange={setYear} />
      <main>
        <Hero />
        <About />
        <Stats stats={data.stats} year={year} />
        <Gallery key={year} albums={data.albums} year={year} />
        <EventsShowcase events={data.events} year={year} />
        {/* Core Committee opens an external site from the navbar.
            To also show the team on this page, uncomment the next line: */}
        {/* <TeamGrid team={data.team} year={year} /> */}

        <Contact year={year} />
      </main>
      <Footer />
    </>
  );
}
