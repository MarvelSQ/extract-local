import { defineConfig } from "vite";

export default defineConfig({
  root: __dirname,
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
});
