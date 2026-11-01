# NSS Unit Website

Official website of the **National Service Scheme (NSS) Unit A-107**, Marathwada Mitramandal's College of Engineering (MMCOE), Pune.

> **"Not Me, But You"**

Built with React and Vite. It has a glass-style design on an animated background, an archive that filters by academic year, event showcases, and photo albums with a lightbox viewer.

## Features

- **Academic year archive:** pick a year from the dropdown to filter stats, events and gallery. The year is saved in the URL (`?year=2024-25`) so links can be shared.
- **Hero video:** autoplaying, muted highlight video with the NSS motto.
- **Impact stats:** blood units, trees planted and volunteer numbers for the selected year.
- **Events showcase:** event name, date, impact summary and participant count.
- **Photo gallery:** albums by event, with a full-screen viewer (close button, next/previous arrows, Esc key).
- **Core Committee link:** opens the committee website in a new tab.
- **Responsive:** works on phones, tablets and desktops, with a hamburger menu on small screens.

## Tech stack

- React 18
- Vite 5
- Plain CSS (no UI library)

## Getting started

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
# 1. Clone the repo
git clone <repo-url>
cd <repo-folder>/frontend

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the address shown in the terminal, usually `http://localhost:5173`.

Other commands:

```bash
npm run build     # create the production build in /dist
npm run preview   # preview the production build locally
```

## Project structure

```
frontend/
├─ public/
│  ├─ logo.svg                 # unit logo
│  ├─ videos/nss-highlight.mp4 # hero video
│  └─ gallery/                 # one folder per event album
│     ├─ camp/ shiv/ chavan/ ambedkar/
│     └─ wari/ cyber/ blood/ grocery/ ganesh/
└─ src/
   ├─ components/              # Navbar, Hero, Stats, Gallery, Lightbox, ...
   ├─ data/nssData.js          # years, stats, events and albums
   ├─ config.js                # unit name, links, video, contact details
   ├─ App.jsx
   └─ styles.css
```

## Customising the site

| What to change                                              | Where                                                                         |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Unit name, Core Committee link, video path, contact details | `src/config.js`                                                               |
| Years, stats, events, albums                                | `src/data/nssData.js`                                                         |
| Logo                                                        | replace `public/logo.svg` (or change `LOGO_SRC` in `src/components/Logo.jsx`) |
| Hero video                                                  | replace `public/videos/nss-highlight.mp4`                                     |
| Colours and layout                                          | CSS variables at the top of `src/styles.css`                                  |

### Adding an academic year

1. Add the label to `YEARS` in `src/data/nssData.js`, for example `"2026–27"`.
2. Add a matching entry to `ARCHIVE` with `stats`, `events` and `albums`.

### Adding photos to an album

1. Put images in `public/gallery/<album-id>/`, named `1.jpg`, `2.jpg`, `3.jpg` and so on.
2. In `nssData.js`, set the last number in the `album(...)` line to the number of photos in that folder.

Tips: resize photos to about 1600px wide before adding them, and use lowercase `.jpg` file names.

### Hero video

Use an H.264 (MP4) file at 720p for smooth playback. The video starts muted because browsers block autoplay with sound. Visitors can unmute it with the speaker icon.

## Deployment

Run `npm run build` and upload the `dist/` folder to any static host, such as Netlify, Vercel or GitHub Pages.

## Credits

- Website by **Atharva Desai**
- Programme Officer: Santosh S. Raut
- NSS Unit A-107, MMCOE, Pune

## License

Released under the [MIT License](LICENSE).
