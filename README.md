# Café Order System (React + TypeScript)

A simple drink ordering UI that tracks per-item counts and calculates total items & total price.

## Tech
- React 18 + TypeScript
- Vite (dev/build)
- Plain CSS (no runtime deps)

## How to run
```bash
npm install
npm run dev
# open the shown local URL


npm run build
npm run preview


Spec compliance

5 buttons with IDs: coffee, tea, milk, coke, beer

Per-item counters with IDs: coffee-count, tea-count, milk-count, coke-count, beer-count

Totals with IDs: count, price

Each click increments the correct item, total item count, and total price

Enhancements

Maintainability: Typed Drink union + Record<Drink, number> for prices & counts; mapping UI from keys reduces duplication

UX: Pill buttons with price on the right; red count badges; bill summary card; responsive two-column layout

Accessibility: Clear button labels; large hit targets

Extensibility: Add a new drink by updating the Drink type and prices map

Future ideas

Reset / Undo last item

Unit tests for price math

Persist counts in localStorage

i18n (en/ja) for labels and currency
