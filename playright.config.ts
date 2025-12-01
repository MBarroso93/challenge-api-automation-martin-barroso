import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 20000,
  reporter: [["list"], ["html"]],
  use: {
    baseURL: "https://petstore.swagger.io/v2",
  },
});
