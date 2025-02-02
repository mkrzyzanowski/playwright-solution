import { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  fullyParallel: true,
  use: {
    screenshot: 'only-on-failure',
  },
  reporter: 'html',
  projects: [
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      },
      testIgnore: /.*api.*/,
    }, {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome']
      },
      testIgnore: /.*api.*/,
    }, {
      name: 'safari', use: {
        ...devices['Desktop Safari']
      },
      testIgnore: /.*api.*/,
    },
    {
      name: 'api',
      testMatch: /.*api.*/,
    }
  ]
};

export default config;
