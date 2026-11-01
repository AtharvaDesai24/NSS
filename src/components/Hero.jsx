import { memo, useCallback } from "react";
import Logo from "./Logo";
import { HERO_VIDEO, HERO_POSTER } from "../config";

function Hero() {
  const startVideo = useCallback((v) => {
    if (!v) return;

    v.volume = 0.3;
    v.play().catch(() => {});
  }, []);
  return (
    <section className="container hero" id="top">
      <div className="hero-text">
        <Logo size={260} className="hero-watermark" aria-hidden="true" />
        <span className="eyebrow">National Service Scheme</span>
        <h1>
          Not Me
          <br />
          But You
        </h1>
        <p style={{ maxWidth: 380 }}>
          Blood drives, plantations and village outreach, led by students.
        </p>
        <div className="hero-actions">
          {/*<a className="btn btn-primary" href="#contact">
            Join NSS
          </a>*/}
          <a className="btn btn-glass" href="#gallery">
            View archive
          </a>
        </div>
      </div>
      <div className="glass video-frame">
        <video
          ref={startVideo}
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          loop
          playsInline
          controls
          onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
        />
      </div>
    </section>
  );
}
export default memo(Hero);
