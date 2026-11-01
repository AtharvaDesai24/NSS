// Sample data. Replace names, numbers and image URLs with your real ones.
// To add a new academic year, add one more entry to ARCHIVE and put its label in YEARS.
const img = (seed, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const YEARS = ["2026–27"];
export const CURRENT_YEAR = YEARS[0];

const album = (id, title, date, count) => ({
  id,
  title,
  date,
  photos: Array.from({ length: count }, (_, i) => {
    const src = `/gallery/${id}/${i + 1}.jpg`;
    return {
      id: `${id}-${i}`,
      src,
      thumb: src,
      caption: `${title} · photo ${i + 1}`,
    };
  }),
});

export const ARCHIVE = {
  "2026–27": {
    stats: { blood: 100, trees: 150, volunteers: 100 },

    events: [
      {
        id: 1,
        name: "7-Day Special Winter Camp, Kamthadi",
        date: "Jan 2026",
        impact:
          "Residential camp: tree plantation, village cleanliness, school sessions, expert talks, yoga, nursery and Purandar Fort visits.",
        participants: null,
      },
      {
        id: 2,
        name: "Shiv Jayanti Celebration",
        date: "Feb 2026",
        impact:
          "Campus procession and student performances honouring Chhatrapati Shivaji Maharaj.",
        participants: null,
      },
      {
        id: 3,
        name: "Dr. Shankarrao Chavan Jayanti",
        date: "26 Feb 2026",
        impact:
          "Floral tribute and group programme remembering his contribution to public life and education.",
        participants: null,
      },
      {
        id: 4,
        name: "Dr. B. R. Ambedkar Jayanti & Essay Competition",
        date: "17 Apr 2026",
        impact:
          "Tribute programme and essay-writing competition on constitutional values, with prizes presented by faculty.",
        participants: null,
      },
      {
        id: 5,
        name: "Nirmal Wari Cleanliness Drive",
        date: "11 Jul 2026",
        impact:
          "Waste collected and segregated along the pilgrim route, with cleanliness awareness spread among Varkaris.",
        participants: null,
      },
      {
        id: 6,
        name: "Cyber Fraud Awareness & Alert Session",
        date: "21 Jul 2026",
        impact:
          "Session with Pune City Police (Warje Malwadi) on online threats and digital safety.",
        participants: null,
      },
      {
        id: 7,
        name: "Blood Donation Camp",
        date: "14 Aug 2026",
        impact:
          "Campus camp with students, faculty and staff, organised with a partner blood bank.",
        participants: "100+",
      },
      {
        id: 8,
        name: "Grocery Donation Drive",
        date: "18 Aug 2026",
        impact:
          "Rice, oil and essentials handed over to children and families in need.",
        participants: null,
      },
      {
        id: 9,
        name: "Ganeshotsav Celebrations",
        date: "Aug–Sep 2026",
        impact:
          "Volunteers, faculty and staff came together to celebrate, promoting fellowship and cultural harmony.",
        participants: null,
      },
    ],
    albums: [
      album("camp", "7-Day Special Winter Camp, Kamthadi", "Jan 2026", 12),
      album("shiv", "Shiv Jayanti Celebration", "Feb 2026", 3),
      album("chavan", "Dr. Shankarrao Chavan Jayanti", "26 Feb 2026", 3),
      album(
        "ambedkar",
        "Ambedkar Jayanti & Essay Competition",
        "17 Apr 2026",
        6,
      ),
      album("wari", "Nirmal Wari Cleanliness Drive", "11 Jul 2026", 3),
      album("cyber", "Cyber Fraud Awareness Session", "21 Jul 2026", 3),
      album("blood", "Blood Donation Camp", "14 Aug 2026", 3),
      album("grocery", "Grocery Donation Drive", "18 Aug 2026", 3),
      album("ganesh", "Ganeshotsav Celebrations", "Aug–Sep 2026", 3),
    ],
  },
};
