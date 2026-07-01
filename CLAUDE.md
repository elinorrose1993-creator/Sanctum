# Sanctum — project guide (for Claude Code)

Sanctum is a **front-end prototype** for a specialist online-therapy platform focused on **gambling addiction**. It connects people seeking help with gambling-specialist therapists (anonymous, filterable directory + treatment plans), and pitches therapists on keeping 100% of their fee for one flat subscription.

It is a **design / UX prototype**: it looks and behaves like the real product but uses **mock data** and has **no backend** (no accounts, payments, or messaging yet).

## Stack & how to run
- Plain **HTML + CSS + JavaScript**. No framework, no build step, nothing to install.
- Only external resource is **Google Fonts** (loaded via CDN in `index.html`) — needs internet for the exact fonts, otherwise falls back to system fonts.
- **To view:** double-click `index.html` (opens in the browser). That's the whole thing.
- **Optional dev server:** from this folder run `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Files
- **index.html** — all markup: top nav, every "page" (they're `<section>`s toggled by JS, not separate files), the entrance "gate" overlay, footer, modals, and the support chat.
- **styles.css** — the entire design system and every component.
- **app.js** — the mock therapist data, the router (page switching), the live search/filtering, the pricing toggle, the crisis/chat behaviour, and the entrance-gate animation.

## Architecture
- **Single-page app.** One HTML file. Each "page" is a `<section class="view" id="view-...">`. A link with `data-go="search"` calls `go('search')` in app.js, which shows that view and hides the others — no page reloads.
- **Therapist directory** is driven by the `THERAPISTS` array near the top of `app.js`. Each therapist is a plain object (name, specialisms, rating, price, `lived` experience, etc.). The search filters this array live. Edit the array to change/add therapists.
- **Entrance gate** — on load, a full-screen overlay (`#gate`) shows the arch logo + "ENTER" over a blurred homepage; clicking Enter parts it like gates to reveal the site. Styled under "ENTRANCE GATE" in styles.css; wired up at the bottom of app.js.

## Design system (the look)
- **Feel:** dark, masculine, premium — a "fort / safe stronghold" theme.
- **Colours** — CSS variables in the `:root { }` block at the top of `styles.css`. Near-black stone backgrounds, steel-grey lines, and a **brass/bronze accent** (`--brass: #C2A06B`).
- **Fonts:** `Space Grotesk` for headings/labels, `Inter` for body.
- **Straight edges everywhere** — `border-radius: 0` is set globally, on purpose.
- **Brick masonry texture** — a subtle running-bond brick pattern (the `--brick` variable) behind the hero and the section dividers, for the castle theme.
- **Logo** — a thin-line engraved pointed **arch** with a small keystone, used small in the nav/footer and large in the entrance gate. Keep these two in sync if you change it.

## Common edits
- **Rebrand the name:** the word `SANCTUM` / `Sanctum` appears throughout `index.html` (and a few spots in `app.js`) — search-and-replace both cases.
- **Change colours:** edit the CSS variables in `:root` at the top of `styles.css`.
- **Change the therapists:** edit the `THERAPISTS` array in `app.js`.
- **Change page text/content:** it's all in `index.html`, organised by view (`view-home`, `view-search`, `view-therapists`, `view-how`, `view-support`, plus the JS-rendered profile).
- After any edit, just refresh the browser.

Keep new work matching the existing style: dark + brass, straight edges, `Space Grotesk` / `Inter`, thin brass line-work, brick texture. Prototype-quality inline data is fine — there is no backend to wire up.
