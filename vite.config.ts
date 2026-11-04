import { defineConfig } from 'vite'

// Static-only build: no backend, no API calls, no server proxy.
// Output is plain HTML/CSS/JS in `dist/` for static hosting.
export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Single-chunk static output needs no modulepreload polyfill (which uses
    // fetch); disable it so the bundle makes zero network calls of its own.
    modulePreload: { polyfill: false },
  },
})
