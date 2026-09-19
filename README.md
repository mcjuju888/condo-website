# Basement Rooms — Rental Site

Mobile-first single-page site for renting three basement rooms.
Plain HTML/CSS/JS — no build step, no dependencies. Open `index.html` and it works.

## Editing the site

**Everything you'll want to change lives in `js/config.js`.** Open it, edit the
values, save. You never need to touch the HTML.

| What | Where in `js/config.js` |
|---|---|
| WhatsApp number | `whatsappNumber` — digits only, with country code (`"14165550199"`) |
| Address / map pin | `mapQuery`, `neighborhood`, `city` |
| Commute times | `nearby` — each entry has `mins` and `mode` (`walk`, `drive`, `transit`, `bike`) |
| Room names, descriptions, features | `rooms` |
| Utility split | `utilities.share` |
| Parking price | `parking.price` |
| House rules | `rules` |

Rent is deliberately not listed anywhere. The Costs section tells people to
message for the rate.

## Adding your photos

1. Drop the image files into `images/rooms/` and `images/shared/`.
2. List the filenames in `js/config.js` under each room's `photos` array and
   under `shared.photos`.

Room 3 still uses a grey SVG placeholder (`images/rooms/room3-a.svg`).
Drop a real photo in as `images/rooms/room3-a.jpg` and change the filename in
`js/config.js` to swap it in.

Photo tips: shoot landscape (horizontal), resize to ~1600px wide, save as JPG
under ~300 KB each so the page stays fast on mobile data.

## Previewing locally

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publishing

The site is static, so any static host works. For GitHub Pages: repo
**Settings → Pages → Source: Deploy from a branch**, pick the branch and the
root folder.
