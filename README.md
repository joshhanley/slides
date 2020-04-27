# Cynosure Slides

A framework for creating simple and beautiful, no frills HTML presentations with [Tailwind CSS](https://tailwindcss.com/) and [Vue.js](https://vuejs.org/).

## Table of Contents
- [Cynosure Slides](#cynosure-slides)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Editing your presentation](#editing-your-presentation)
  - [Presenting](#presenting)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Installation

1) Clone, or download and unzip, a copy of this repo, and open the `index.html` file directly in your browser.
2) Run `npm install`
3) Run `npm run dev`, or run `npm run watch` if you'd like npm to watch your changes in your browser on `localhost:3000`.

## Editing your presentation

Include your slides between the HTML comments `<!-- Slide content goes here -->` and `<!-- End slide content -->`.
Running `npm run watch` will allow you to view changes in real time in your browser on `localhost:3000`.

## Presenting

You can toggle presentation and preview mode by:
1) Editing the variable `presentationMode` to be `true` or `false`, or simply by pressing `p` while the presentation is open in the browser.

You can navigate through your slides by pressing the left and right arrow keys.
The `Home` and `End` keys will take you to the first and last slides.
If you forget, you can show the shortcut keys in preview mode by pressing `s`.

## Built With

* [Tailwind CSS](https://tailwindcss.com/)
* [Vue.js](https://vuejs.org/)

## Authors

* **Josh Hanley** - *Pretty much everything* - [GitHub](https://github.com/joshhanley)
* **Dorian Minors** - *Needed a slide framework that was easier than [reveal.js](https://revealjs.com/), and did some of the design* - [Website](https://dorian.mino.rs)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details