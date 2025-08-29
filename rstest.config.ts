import { defineConfig } from "@rstest/core";

export default defineConfig({
  include: ["rstests/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
});
