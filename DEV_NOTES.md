## KEY: 01 — Project Setup & Structure

### [2026-04-01]

- Initialized project repository (Git + GitHub)
- Created required project structure:
  - travel_recommendation.html
  - travel_recommendation.js
  - travel_recommendation_api.json
- Implemented base HTML template (Task 1)
- Added navigation bar (Task 2):
  - Home, About Us, Contact Us links
  - Search input field
  - Search button
  - Reset button
- Followed IBM course requirements for initial setup

## KEY: 02 — Home Section (Hero Layout)

### [2026-04-02]

- Implemented main Home section as landing view
- Added full-screen hero layout using `min-height: 100vh`
- Integrated background image with `background-size: cover` and `background-position: center`
- Created overlay using `::before` pseudo-element for improved text readability
- Applied `isolation: isolate` to manage stacking context and prevent overlay conflicts

### Layout structure

- Introduced three main areas:
  - Social links (left side)
  - Main content (headline, description, CTA button)
  - Results container (right side, prepared for dynamic rendering)
- Used Flexbox for horizontal layout and spacing

### Styling decisions

- Maintained simple and clean layout aligned with course requirements
- Used spacing (`gap`, `padding`) for consistent layout structure
- Applied hover effects for links and buttons for basic UX feedback
- Used margin-based spacing for social section (intentionally kept simple for MVP)

### Technical notes

- Avoided overengineering layout (no absolute positioning for main layout)
- Prepared `#results` container for upcoming JavaScript rendering (Task 6–8)
- Ensured layout remains flexible for further extension (cards, API data)

### Next steps

- Implement data fetching from JSON using `fetch`
- Add search logic and keyword normalization
- Dynamically render recommendation cards into results container