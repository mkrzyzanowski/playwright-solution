import { Locator, Page } from '@playwright/test';

export class WikipediaPage {
  private readonly searchBox: Locator;
  private readonly searchButton: Locator;

  constructor(private page: Page) { 
    this.searchBox = page.locator('input[id="searchInput"]');
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  async open() {
    await this.page.goto('https://en.wikipedia.org');
  }

  async searchFor(term: string) {
    await this.searchBox.fill(term);
    await this.searchButton.click();
  }

  async getDatesFromParagraph(text: string) {
    const element = await this.page.getByText(new RegExp(text, 'i')).first().textContent();
    if (!element) { 
      throw new Error(`Cannot find a paragraph matching the provided text: ${text}`); 
    }
    return element.match(/\d+/g)?.map(Number) ?? [];
  }

  async getTitle() {
    return this.page.title();
  }
}
