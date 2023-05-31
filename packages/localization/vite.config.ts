import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      fileName: (format) => `index.${format}.js`,
      name: "LLLocalization",
    },
    rollupOptions: {
      /**
       * Externalize peer dependencies
       */
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
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
    /**
     * Generate typings
     */
    dts({
      insertTypesEntry: true,
    }),

    react(),
  ],
});
