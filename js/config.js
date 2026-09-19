/* =========================================================================
   EDIT THIS FILE TO UPDATE THE SITE. Nothing else needs to change.
   ========================================================================= */

const SITE = {

  /* ---- 1. BASICS -------------------------------------------------- */
  headline: "Basement Rooms for Rent",
  tagline: "Three private rooms in a quiet, well-kept home. Move-in ready.",

  /* ---- 2. CONTACT (WhatsApp) --------------------------------------
     Country code + number, digits only. No +, no spaces, no dashes.
     Example: US number (416) 555-0199  ->  "14165550199"            */
  whatsappNumber: "10000000000",
  whatsappMessage: "Hi! I saw the basement rental site and I'd like to ask about the rooms.",

  /* ---- 3. LOCATION ------------------------------------------------
     neighborhood/city show on the page. mapQuery drives the embedded
     Google Map — use a full address for an exact pin, or just the
     neighborhood + city to keep the exact address private.           */
  neighborhood: "Neighborhood name",
  city: "City, Province/State",
  mapQuery: "Neighborhood name, City",
  areaBlurb: "Quiet residential street, close to transit, groceries and everyday essentials.",

  /* ---- 4. WHAT'S NEARBY -------------------------------------------
     mins = number shown in the badge. mode = how you get there.      */
  nearby: [
    { name: "Grocery store",        mins: 4,  mode: "drive" },
    { name: "Transit / bus stop",   mins: 5,  mode: "walk"  },
    { name: "Downtown core",        mins: 20, mode: "drive" },
    { name: "Shopping mall",        mins: 12, mode: "drive" },
    { name: "Park & trails",        mins: 8,  mode: "walk"  },
    { name: "Airport",              mins: 35, mode: "drive" }
  ],

  /* ---- 5. THE ROOMS -----------------------------------------------
     photos: put your files in images/rooms/ and list the filenames.
     Each room can have as many photos as you like.                   */
  rooms: [
    {
      id: "room-1",
      name: "Room 1",
      blurb: "Private bedroom with window and closet.",
      features: ["Private entrance access", "Window", "Closet", "Furnished"],
      photos: ["images/rooms/room1-a.svg", "images/rooms/room1-b.svg"]
    },
    {
      id: "room-2",
      name: "Room 2",
      blurb: "Bright room, good natural light.",
      features: ["Window", "Closet", "Furnished"],
      photos: ["images/rooms/room2-a.svg", "images/rooms/room2-b.svg"]
    },
    {
      id: "room-3",
      name: "Room 3",
      blurb: "Quiet corner room at the back of the unit.",
      features: ["Quiet side of house", "Closet", "Furnished"],
      photos: ["images/rooms/room3-a.svg", "images/rooms/room3-b.svg"]
    }
  ],

  /* ---- 6. SHARED SPACES ------------------------------------------- */
  shared: {
    blurb: "Shared with the other tenants in the basement.",
    photos: [
      { src: "images/shared/kitchen.svg",  caption: "Kitchen"  },
      { src: "images/shared/bathroom.svg", caption: "Bathroom" },
      { src: "images/shared/laundry.svg",  caption: "Laundry"  },
      { src: "images/shared/entrance.svg", caption: "Entrance" }
    ]
  },

  /* ---- 7. COSTS ---------------------------------------------------
     Rent is intentionally not listed anywhere on this site.          */
  utilities: {
    share: "30%",
    text: "Utilities are split 30% with all other tenants. This covers heat, hydro, water and internet."
  },
  parking: {
    price: "$50",
    period: "/ month",
    text: "One parking spot available on the driveway. Optional — only pay if you need it."
  },

  /* ---- 8. HOUSE RULES (optional, delete any line) ------------------ */
  rules: [
    "No smoking indoors",
    "Quiet hours after 11 PM",
    "Keep shared spaces clean",
    "Guests welcome — let others know in advance"
  ]
};
