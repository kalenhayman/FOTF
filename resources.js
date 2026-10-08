// Maps external URLs used by the Design Components runtime (support.js) and the
// components to local copies, so the mock-up works without a network connection.
// Load this BEFORE support.js on every page.
window.__resources = {
  "https://unpkg.com/react@18.3.1/umd/react.production.min.js": "vendor/react.production.min.js",
  "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js": "vendor/react-dom.production.min.js",
  "lucide-instagram": "assets/icons/instagram.svg",
  "lucide-facebook": "assets/icons/facebook.svg",
  "lucide-linkedin": "assets/icons/linkedin.svg",
  "lucide-youtube": "assets/icons/youtube.svg"
};
