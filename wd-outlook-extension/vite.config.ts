import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import hotReloadExtension from "hot-reload-extension-vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    hotReloadExtension({
      log: true,
      backgroundPath:
        "src/extension-scripts/background/wd-extension-websocket.ts",
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/main.tsx"),
        styles: path.resolve(__dirname, "src/index.css"),
        consts: path.resolve(__dirname, "src/lib/consts.ts"),
        "wd-extension-load": path.resolve(
          __dirname,
          "src/extension-scripts/content/wd-extension-load.ts"
        ),
        "wd-extension-proxy": path.resolve(
          __dirname,
          "src/extension-scripts/content/wd-extension-proxy.ts"
        ),
        "wd-extension-sw": path.resolve(
          __dirname,
          "src/extension-scripts/background/wd-extension-sw.ts"
        ),
      },
      output: {
        entryFileNames: "src/[name].js",
        chunkFileNames: "src/[name].js",
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
