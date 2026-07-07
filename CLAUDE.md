# CLAUDE.md — Mavelle Fashion

## Project Role

You are working as a senior frontend developer and UI designer for the Mavelle Fashion landing page.

The project is a Next.js landing page for an elegant formal fashion brand. The website must be written in English and must clearly explain:

- The company name: Mavelle Fashion.
- The company logo/brand identity.
- What the company sells.
- Where the company is located.
- How customers can contact the company.

The company sells formal and elegant clothing, including blazers, formal shoes, ties, dress pants, shirts, suits, and accessories.

## Main Goal

Build a polished, elegant, responsive landing page for Mavelle Fashion using:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- React Icons or Lucide icons if installed

The final result must feel like a real formal fashion boutique, not a generic school assignment.

## Mandatory Documentation

Before writing or editing code, read these files in order:

1. `docs/claude/00-index.md`
2. `docs/claude/01-project-brief.md`
3. `docs/claude/02-brand-identity.md`
4. `docs/claude/03-design-system.md`
5. `docs/claude/04-content-copy.md`
6. `docs/claude/05-site-structure.md`
7. `docs/claude/06-component-architecture.md`
8. `docs/claude/07-animation-guidelines.md`
9. `docs/claude/08-responsive-accessibility-seo.md`
10. `docs/claude/09-implementation-tasks.md`
11. `docs/claude/10-code-standards.md`
12. `docs/claude/11-quality-checklist.md`
13. `docs/claude/13-dependencies.md`
14. `docs/claude/14-final-prompt-for-claude.md`

Do not start implementation until you understand the design direction, component structure, content, color palette, and quality checklist.

## Brand Rules

The visual identity must use a clear black, white, and purple palette.

Recommended colors:

- Black: `#08070A`
- Soft Black: `#111018`
- White: `#FFFFFF`
- Off White: `#F7F5FA`
- Purple: `#7C3AED`
- Deep Purple: `#4C1D95`
- Lavender: `#C4B5FD`
- Muted Gray: `#A1A1AA`

Use purple as an accent color, not as the dominant color.

The design must feel:

- Elegant
- Formal
- Premium
- Modern
- Clean
- Professional

Avoid:

- Childish colors
- Excessive gradients
- Generic fashion templates
- Overloaded sections
- Random icons
- Too many animations
- Spanish text inside the UI

## Content Rules

All visible website content must be in English.

The landing page must include these sections:

1. Header
2. Hero section
3. About section
4. Product categories
5. Featured collection
6. Why choose us
7. Location
8. Contact
9. Footer

The page must clearly mention that Mavelle Fashion is located in Cusco, Peru.

Use this location unless the documentation says otherwise:

Mavelle Fashion  
Avenida El Sol 450  
Cusco, Peru

## Technical Rules

Use the App Router structure.

Preferred structure:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
      HeroSection.tsx
      AboutSection.tsx
      ProductCategories.tsx
      FeaturedCollection.tsx
      WhyChooseUs.tsx
      LocationSection.tsx
      ContactSection.tsx
    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx
      ProductCard.tsx
  data/
    brand.ts
    navigation.ts
    products.ts
  lib/
    utils.ts
  types/
    index.ts
```

Use semantic HTML:

```txt
- header
- main
- section
- footer
- nav
- h1
- h2
- p
```

Use reusable components. Do not put the entire landing page into one giant page.tsx.

## Animation Rules

Use Motion only for subtle animations:

- Fade in
- Slight vertical movement
- Button hover
- Card hover
- Section reveal

Avoid excessive movement. The brand is formal and elegant, so animations must feel smooth and controlled.

## Responsive Rules

The landing page must work well on:

- Mobile
- Tablet
- Desktop

Start with a mobile-first layout and improve it for larger screens.

Avoid horizontal overflow.

## SEO and Accessibility Rules

Add proper metadata in layout.tsx or page metadata.

Include:

- Title
- Description
- Open Graph title
- Open Graph description

Use meaningful alt text for images.

Buttons and links must have clear accessible labels.

The website must be easy to scan and understand.

## Development Behavior

Work in small, safe steps.

Before making large changes:

- Read the relevant documentation.
- Explain the implementation plan briefly.
- Create or edit the required files.
- Keep the code clean and typed.
- Run lint/build checks when appropriate.

Do not install extra dependencies unless they are listed in docs/claude/13-dependencies.md or unless the user approves them.

## Main Implementation Order

Follow this order:

1. Review documentation.
2. Create project structure.
3. Configure global styles and design tokens.
4. Create shared UI components.
5. Create layout components.
6. Create landing sections.
7. Connect all sections in page.tsx.
8. Add responsive improvements.
9. Add Motion animations.
10. Add metadata and accessibility improvements.
11. Run final quality checklist.

## Final Acceptance Criteria

The project is complete when:

- The page clearly presents Mavelle Fashion.
- The website explains what the company sells.
- The website includes the company location.
- The design uses black, white, and purple correctly.
- The landing feels elegant and formal.
- The page is responsive.
- The project builds without errors.
- The code is component-based and clean.
- The UI content is in English.
