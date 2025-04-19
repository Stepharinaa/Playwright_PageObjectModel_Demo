exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.locator("id=username");
    this.password_textbox = page.locator("id=password");
    this.submit_button = page.getByRole("button", { name: " Login" });
  }

  async goToLoginPage() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  // Instead of hardcoding a username and password, I've added dynamic variables instead to ensure the login function is more resuable
  async login(username, password) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.submit_button.click();
  }
};
