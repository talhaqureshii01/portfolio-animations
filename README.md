
# Portfolio (React Converted)

This project is an exact React conversion of the original HTML/CSS portfolio you provided.
- **No content or styling was changed** — your original HTML is rendered verbatim inside React.
- Original assets (CSS, JS, images, favicons) are preserved under **/public**.
- Any local scripts referenced in the original `<head>` are **loaded after mount** so their behavior remains intact.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Structure
```
/public      # your original assets (css/, js/, images/, etc.)
/src
  /components/OriginalBody.jsx   # renders original body HTML verbatim
  App.jsx
  main.jsx
index.html   # uses your original <head> (minus local css/js duplicates)
```

## Notes
- Local CSS files from your original project are kept under **public/** and still loaded via `<link>` tags in `index.html`.
- Local JS files (e.g., none) are dynamically injected after React mounts to preserve execution order and original behavior.
