# KUNAL KAJALA — THE SERIES

A cinematic, streaming-style portfolio for Kunal Kajala: future teacher, poet and webnovelist at IIT Jodhpur.
Every section is an episode and every work is an Original. It is a personal site with a fictional streaming look — not affiliated with any streaming service.

Built on the open source structure of Sushmita Dasari's "The Series" portfolio (https://github.com/Sushmitadasari/Portfolio_series). All content, names, photos and files here are Kunal's own; please credit her for the original design.

## Run it

Requires Node.js 18+.

    npm install
    npm run dev        # http://localhost:5173
    npm run build      # static site in dist/ — deploy to Vercel, Netlify or GitHub Pages

## Edit the content

Everything lives in `src/data/portfolio.ts`. Search for `PLACEHOLDER` and replace those lines with your own words
(poems, webnovel titles, lesson plans, reflections). Add `github:` under `links` and a project's `github` field to show GitHub buttons.
Add entries to `certifications` and a "Certified" rail appears.

## Your photo

Your photo is already in place. To swap it, put a high-resolution photo in the project root as `pic1.jpeg`
and a background-removed cutout of the same framing as `pic.png`, then run:

    npm run images

That rebuilds the responsive portraits and the social share image in `public/assets/`.

Stack: React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.
