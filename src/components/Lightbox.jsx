import { useEffect } from "react";

const Icon = ({ d }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

export default function Lightbox({ photos, index, onClose, onNavigate }) {
  const photo = photos[index];
  const go = (step) => onNavigate((index + step + photos.length) % photos.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  });

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <div className="glass lightbox-card" onClick={(e) => e.stopPropagation()}>
        <button className="lb-btn lb-close" onClick={onClose} aria-label="Close photo"><Icon d="M5 5l14 14M19 5L5 19" /></button>
        {photos.length > 1 && (
          <>
            <button className="lb-btn lb-prev" onClick={() => go(-1)} aria-label="Previous photo"><Icon d="M15 5l-7 7 7 7" /></button>
            <button className="lb-btn lb-next" onClick={() => go(1)} aria-label="Next photo"><Icon d="M9 5l7 7-7 7" /></button>
          </>
        )}
        <img src={photo.src} alt={photo.caption} />
        <p className="lightbox-caption">{photo.caption} ({index + 1} of {photos.length})</p>
      </div>
    </div>
  );
}
