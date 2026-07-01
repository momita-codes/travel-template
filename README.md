# MY TOUR — Travel Template

A lightweight, responsive single-page travel landing page template built with plain HTML, CSS and JavaScript. It provides a hero image slider, destination tiles, a simple search area, and footer sections for newsletter and social links — ideal as a brochure site or a starting frontend for a travel business.

## Features

- Responsive layout for desktop and mobile
- Hero image slider with next/previous controls and dot indicators
- Sections for packages, destinations (state, country, continent), and curated travel ideas
- Footer with newsletter, quick links, social icons, and app download buttons
- No build step or backend required — drop-in static site

## Built With

- HTML5
- CSS3
- JavaScript (vanilla)
- Font Awesome (for icons)

## Project structure

```
index.html                 Single-page entry (markup for header, search, hero slider, content sections, footer)
style.css                  Styles and responsive rules
script.js                  Slider logic and event handlers
images/                    Content images used by the page
icon_image/                Social/app icons used in the footer
README.md                  Project description and usage (this file)
.vscode/settings.json      VS Code Live Server port (optional)
```

## How to run

1. Clone the repo:

```
git clone https://github.com/momita-codes/travel-template.git
cd travel-template
```

2. Open `index.html` directly in your browser, or serve the folder with a simple HTTP server:

- Python 3 built-in server (recommended):

```
python -m http.server 8000
# then open http://localhost:8000
```

- Or use VSCode Live Server (this repo includes a `.vscode/settings.json` that sets port 5501).

## Notes / TODOs

- Dot-click bug: The slider dots in `index.html` are plain `<span class="dot"></span>` elements but `script.js` expects each dot to include a `data-index` attribute. Clicking dots won't work until one of the following fixes is applied:
  - Add `data-index` attributes to each dot in `index.html` (e.g. `<span class="dot" data-index="0"></span>`), or
  - Update `script.js` to compute each dot's index from the NodeList (e.g. use `dots.forEach((dot, i) => { dot.addEventListener('click', () => { currentSlide = i; showSlide(currentSlide); }); });`).

- Accessibility: Consider adding ARIA roles/labels and keyboard support for the slider (left/right arrows to change slides, focus outlines for controls).

## Contributing

Contributions are welcome. To propose changes:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them
4. Push to your fork and open a Pull Request

## License

This project currently has no license file. Add a `LICENSE` if you want to specify terms.

---

*Generated README: adds project description, usage instructions, quick run commands, and notes about a concrete bug and accessibility improvements.*