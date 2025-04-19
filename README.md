# Playwright Page Object Model Demo

This project is a demo of using [Playwright](https://playwright.dev/) with the **Page Object Model (POM)** pattern to structure and organize E2E tests. It automates login functionality on [the-internet.herokuapp.com](https://the-internet.herokuapp.com/login).

## Features

- Automated login test using Playwright
- Page Object Model pattern for clean, reusable code
- Modular structure (separating tests from page logic)
- Written in JavaScript with optional type checking (`// @ts-check`)

## Tech Stack

- [Playwright](https://playwright.dev/)
- JavaScript (ES6+)
- Node.js

## Setup & Installation

1. **Clone the repo:**

```
git clone https://github.com/Stepharinaa/Playwright_PageObjectModel_Demo.git
cd Playwright_PageObjectModel_Demo
```

2. **Install dependencies:**

```
npm install
```

2. **Run the test:**

```
npx playwright test
```

> [!NOTE]
> The tests are located in `tests/login.spec.js`.

## Why Page Object Model (POM) ?

- Makes tests more readable
- Keeps locators in one place
- Encourages reusable components
- Easier maintenance if UI changes
