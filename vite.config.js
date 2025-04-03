import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";
import { defineConfig } from "vite";
import path from "path";
import { BASE_PATH } from "./src/constants/basePath";

export default mergeConfig(
  defineConfig({
    base: BASE_PATH + "/",
    build: {
      rollupOptions: {
        input: {
          history: path.resolve(__dirname, "index.html"),
          hash: path.resolve(__dirname, "index.hash.html"),
          notFound: path.resolve(__dirname, "404.html"),
        },
      },
    },
    esbuild: {
      jsxFactory: "createVNode",
    },
    optimizeDeps: {
      esbuildOptions: {
        jsx: "transform",
        jsxFactory: "createVNode",
      },
    },
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.js",
      exclude: ["**/e2e/**", "**/*.e2e.spec.js", "**/node_modules/**"],
    },
  }),
);
