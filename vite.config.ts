import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // relative base so the built index.html works from file:// inside Electron
  base: "./",
  plugins: [react(), tailwindcss()],
});
