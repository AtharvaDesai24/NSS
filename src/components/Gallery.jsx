import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Gallery({ albums, year }) {
  const [open, setOpen] = useState({});      // which albums are expanded
  const [viewer, setViewer] = useState(null); // { albumId, index }

  const isOpen = (id, i) => (open[id] === undefined ? i < 2 : open[id]);
  const current = viewer && albums.find((a) => a.id === viewer.albumId);

  return (
    <section className="container section" id="gallery">
      <div className="glass gallery">
        <span className="eyebrow">Photo gallery · albums by date</span>
        <h2 className="section-title">Moments from {year}</h2>

        {albums.length === 0 && <p className="empty">No albums uploaded for {year} yet.</p>}

        {albums.map((album, i) => (
          <div className="album" key={album.id}>
            <button className="album-toggle" aria-expanded={isOpen(album.id, i)}
              onClick={() => setOpen({ ...open, [album.id]: !isOpen(album.id, i) })}>
              {isOpen(album.id, i) ? "▾" : "▸"} {album.title} — {album.date} · {album.photos.length} photos
            </button>
            {isOpen(album.id, i) && (
              <div className="thumbs">
                {album.photos.map((p, idx) => (
                  <button key={p.id} className="thumb" aria-label={`Open ${p.caption}`}
                    onClick={() => setViewer({ albumId: album.id, index: idx })}>
                    <img src={p.thumb} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {current && (
        <Lightbox photos={current.photos} index={viewer.index}
          onClose={() => setViewer(null)}
          onNavigate={(index) => setViewer({ ...viewer, index })} />
      )}
    </section>
  );
}
