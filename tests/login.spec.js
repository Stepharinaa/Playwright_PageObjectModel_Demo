import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/login";

// @ts-check

test("should log in successfully with valid credentials", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goToLoginPage();
  await login.login("tomsmith", "SuperSecretPassword!");

  await login.securePage();
});

test("should show an error with invalid credentials", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goToLoginPage();
  await login.login("wrongUsername", "SuperSecretPassword!");

  await expect(login.invalid_alert).toBeVisible();

  await page.close();
});
