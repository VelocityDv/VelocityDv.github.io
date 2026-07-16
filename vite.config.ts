import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // relative base so the site works under any GitHub Pages subpath
  base: "./",
  plugins: [react(), tailwindcss()],
});
