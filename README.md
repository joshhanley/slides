# Cynosure Slides

A framework for creating simple and beautiful, no frills HTML presentations with [tailwindcss](https://tailwindcss.com/) and [alpinejs](https://github.com/alpinejs/alpine).

## Table of Contents
- [Cynosure Slides](#cynosure-slides)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Editing your presentation](#editing-your-presentation)
  - [Presenting](#presenting)
  - [Advanced configuration](#advanced-configuration)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Installation

Simply clone, or download and unzip, a copy of this repo, and open the `index.html` file directly in your browser.

## Editing your presentation

Include your slides between the HTML comments `<!-- Slide content goes here -->` and `<!-- End slide content -->`.

## Presenting

You can toggle presentation and preview mode by:
1) Editing the variable `presentationMode` to be `true` or `false`, or simply by pressing `p` while the presentation is open in the browser.

You can navigate through your slides by pressing the left and right arrow keys.
The `Home` and `End` keys will take you to the first and last slides.
If you forget, you can show the shortcut keys in preview mode by pressing `s`.

## Advanced configuration

All default tailwindcss classes and alpinejs behaviour is available. If you introduce modifications, you must:
1) `npm install`
2) `npm run dev`

## Built With

* [tailwindcss](https://tailwindcss.com/)
* [alpinejs](https://github.com/alpinejs/alpine)

## Authors

* **Josh Hanley** - *Pretty much everything* - [GitHub](https://github.com/joshhanley)
* **Dorian Minors** - *Needed a slide framework that was easier than [reveal.js](https://revealjs.com/), and did some of the design* - [Website](https://dorian.mino.rs)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details