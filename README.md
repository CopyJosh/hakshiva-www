# Hakshiva

Static website for Hakshiva, a youth mental health and education nonprofit in
Beit Shemesh.

The site is plain HTML, CSS, and vanilla JavaScript. It needs no build step.

## Contents

| Path | Description |
|---|---|
| `index.html` | Homepage and all program sections |
| `about.html` | About the organization |
| `team.html` | Staff and board |
| `styles.css` | All styles |
| `script.js` | Navigation, carousels, and localization |
| `images/` | Photography and logos |

## Run it locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Deploy

GitHub Pages serves this repository from the root of the `main` branch. A push
to `main` publishes the site. The `.nojekyll` file turns off Jekyll processing.
