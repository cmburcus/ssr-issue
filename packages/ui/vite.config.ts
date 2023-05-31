import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      fileName: (format) => `index.${format}.js`,
      name: "LLUI",
    },
    rollupOptions: {
      /**
       * Externalize peer dependencies
       */
      external: ["react", "react-dom", "styled-components", "framer-motion"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
          "framer-motion": "framerMotion",
        },
      },
    },
  },

  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 3002,
  },

  plugins: [
    svgr({
      exportAsDefault: true,
    }),

    /**
     * Generate typings
     */
    dts({
      insertTypesEntry: true,
    }),

    react(),
  ],
});
