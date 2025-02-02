import test, { Locator, Page } from "@playwright/test";
import { getLanguage } from "../utils";
import { acceptCookiesLabels, getLabel } from "./i18n/labels";

export class GooglePage {
  private get acceptCookieButton() {
    return (async () => {
      const label = getLabel(acceptCookiesLabels, await getLanguage(this.page));
      return this.page.getByRole('button', { name: label });
    })();
  }

  constructor(private page: Page) {}

  async open() {
    await test.step('Opening Google', async () => {
      await this.page.goto('https://www.google.com');
    })
  }

  async acceptCookies() {
    await test.step('Accepting cookies', async () => {
      await (await this.acceptCookieButton).click();
    })
  }

  async searchFor(term: string) {
    await test.step(`Searching for ${term}`, async () => {
      await this.page.goto(`https://www.google.com/search?q=${term}`);

    })
  }

  async goToResult(text: string) {
    await test.step(`Navigating to the result ${text}`, async () => {      
      await this.page.locator(`a[href*="${text}"]`).first().click();
    })
  }

}
