import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 20000,
  fullyParallel: false,
  workers: 1,
  reporter: [
    ["list"],
    ["html"],
    ["allure-playwright", { outputFolder: "allure-results" }],
  ],
  use: {
    baseURL: "https://petstore.swagger.io/v2",
  },
});
