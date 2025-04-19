import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/login";

// @ts-check

test("Ensure login passes with correct username and password", async ({
  page,
}) => {
  const Login = new LoginPage(page);

  await Login.goToLoginPage();
  await Login.login("tomsmith", "SuperSecretPassword!");

  await Login.securePage();

  // await page.locator("id=username").click();
  // await page.locator("id=username").fill("tomsmith");

  // await page.locator("id=password").click();
  // await page.locator("id=password").fill("SuperSecretPassword!");

  // await page.getByRole("button", { name: " Login" }).click();
});

test("Ensure user is met with error message when username and/or password is incorrect", async ({
  page,
}) => {
  const Login = new LoginPage(page);

  await Login.goToLoginPage();
  await Login.login("wrongUsername", "SuperSecretPassword!");

  await expect(Login.invalid_alert).toBeVisible();

  await page.close();
});
