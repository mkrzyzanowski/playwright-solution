# Test Automation Solution

This repository contains an automation testing solution using Playwright for both E2E and API testing.

## Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm (comes with Node.js)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
    Note: this step will also install Playwright Browsers

## Available Scripts

The project includes several npm scripts for different testing scenarios:

- **Run E2E Tests**
  ```bash
  npm run test:e2e
  ```
  This will run end-to-end tests across Firefox, Chrome, and Safari browsers.

- **Run API Tests**
  ```bash
  npm run test:api
  ```
  Executes API tests only.

- **Debug API Tests**
  ```bash
  npm run test:api:debug
  ```
  Runs API tests with debug logging enabled.

- **Run Tests in UI Mode**
  ```bash
  npm run test:ui
  ```
  Opens Playwright's UI mode for interactive test debugging and development.

- **View Test Report**
  ```bash
  npm run test:report
  ```
  Shows the HTML report of the last test run.

## Project Structure

- `/src/tests/e2e/` - End-to-end tests
- `/src/tests/api/` - API tests
- `/src/pages/` - Page Objects for E2E tests
- `/src/apiClients/` - implemented API clients
- `/src/data/` - test data generators
- `/src/utils/` - Utility functions and helpers

## Continuous Integration

The project is configured with GitHub Actions workflows:

- **E2E Tests**: runs all the E2E tests
- **API Tests**: runs all the API tests

Both workflows run on push/PR to main branch and on demand.

## Dependencies

Main dependencies include:
- `@playwright/test`: Testing framework
- `typescript`: Programming language
- `ts-node`: TypeScript execution engine
- `@faker-js/faker`: Fake data generation
- `cross-env`: Cross-platform environment variables
