/* =========================================================================
   EDIT THIS FILE TO UPDATE THE SITE. Nothing else needs to change.
   ========================================================================= */

const SITE = {

  /* ---- 1. BASICS -------------------------------------------------- */
  headline: "Basement Rooms for Rent",
  tagline: "Three private rooms in a clean, freshly painted basement. Move-in ready.",

  /* ---- 2. CONTACT (WhatsApp) --------------------------------------
     Country code + number, digits only. No +, no spaces, no dashes.    */
  whatsappNumber: "16472822497",
  whatsappMessage: "Hi! I saw the Culford Rd basement rental site and I'd like to ask about the rooms.",

  /* ---- 3. LOCATION ------------------------------------------------ */
  neighborhood: "302 Culford Rd",
  city: "North York, Toronto",
  mapQuery: "302 Culford Rd, North York, ON",
  areaBlurb: "Quiet residential street near Keele & Lawrence. Steps from bus routes, minutes to Hwy 401, Yorkdale and Lawrence West station.",

  /* ---- 4. WHAT'S NEARBY -------------------------------------------
     NOTE: these are estimates — check them against Google Maps and
     adjust the `mins` values to whatever you know to be right.
     mode can be: walk, drive, transit, bike                           */
  nearby: [
    { name: "Bus stop (Culford / Keele)", mins: 3,  mode: "walk"    },
    { name: "Highway 401",                mins: 5,  mode: "drive"   },
    { name: "Lawrence West Station",      mins: 7,  mode: "drive"   },
    { name: "Yorkdale Shopping Centre",   mins: 10, mode: "drive"   },
    { name: "Humber River Hospital",      mins: 8,  mode: "drive"   },
    { name: "York University",            mins: 15, mode: "drive"   },
    { name: "Pearson Airport",            mins: 20, mode: "drive"   },
    { name: "Downtown Toronto",           mins: 30, mode: "drive"   }
  ],

  /* ---- 5. THE ROOMS ------------------------------------------------ */
  rooms: [
    {
      id: "room-1",
      name: "Room 1",
      blurb: "The largest of the three. Above-grade window with blinds, panelled feature wall and tile flooring throughout.",
      features: ["Largest room", "Window with blinds", "Tile floor", "Unfurnished"],
      photos: ["images/rooms/room1-a.jpg"]
    },
    {
      id: "room-2",
      name: "Room 2",
      blurb: "Freshly painted private room with tile flooring and its own ceiling light. Quiet and self-contained.",
      features: ["Freshly painted", "Tile floor", "Private door", "Unfurnished"],
      photos: ["images/rooms/room2-a.jpg"]
    },
    {
      id: "room-3",
      name: "Room 3",
      blurb: "Private room in the same basement unit. Photo coming soon — message for details and a viewing.",
      features: ["Tile floor", "Unfurnished"],
      photos: ["images/rooms/room3-a.svg"]
    }
  ],

  /* ---- 6. SHARED SPACES -------------------------------------------- */
  shared: {
    blurb: "Shared with the other tenants in the basement.",
    photos: [
      { src: "images/shared/kitchen.jpg",  caption: "Kitchen" },
      { src: "images/shared/entrance.jpg", caption: "Entrance & stairs" },
      { src: "images/shared/dining.jpg",   caption: "Dining / spare room" }
    ]
  },

  /* ---- 7. COSTS ----------------------------------------------------
     Rent is intentionally not listed anywhere on this site.            */
  utilities: {
    share: "30%",
    text: "Utilities are split 30% with all other tenants. This covers heat, hydro, water and internet."
  },
  parking: {
    price: "$50",
    period: "/ month",
    text: "One parking spot available. Optional — only pay if you need it."
  },

  /* ---- 8. HOUSE RULES (optional, delete any line) ------------------- */
  rules: [
    "No smoking indoors",
    "Quiet hours after 11 PM",
    "Keep shared spaces clean",
    "Guests welcome — let others know in advance"
  ]
};
