import { defineConfig } from 'tsup';

const isDev = process.env.npm_lifecycle_event === "dev";

export default defineConfig({
  clean: true,
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"],
  minify: !isDev,
  target: "esnext",
  outDir: "dist",
  sourcemap: true,
});

