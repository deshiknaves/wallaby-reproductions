import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json"],
      include: ["**/src/**/*.{ts,tsx}", "**/components/**/*.{ts,tsx}"],
      exclude: ["**/*.test.{ts,tsx}", "**/node_modules/**"],
    },
  },
});
