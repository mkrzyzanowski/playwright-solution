import { test, expect } from '@playwright/test';
import { WikipediaPage } from '../../pages/WikipediaPage';
import { addScreenshot } from '../../utils';
import { GooglePage } from '../../pages/GooglePage';

const expectedTitle = 'Automation - Wikipedia';
const expectedDate = 1785;
const searchTerm = 'Automation';
const searchedParagraph = 'first completely automated industrial process';

test.describe('Navigation via Google', () => {
  test('the Automation page in Wikipedia should contain the date of first automation process', async ({ page }, testInfo) => {
    const googlePage = new GooglePage(page);
    const wikipediaPage = new WikipediaPage(page);

    await googlePage.searchFor(searchTerm);
    await googlePage.acceptCookies();
    await googlePage.goToResult('wikipedia');

    const actualTitle = await wikipediaPage.getTitle();
    expect(actualTitle).toBe(expectedTitle);

    const actualDates = await wikipediaPage.getDatesFromParagraph(searchedParagraph);
    expect(actualDates).toContain(expectedDate);

    await addScreenshot(page, testInfo, 'google-wikipedia-automation');
  });
})

test.describe('Navigation via Wikipedia', () => {
  test('the Automation page in Wikipedia should contain the date of first automation process', async ({ page }, testInfo) => {
    const wikipediaPage = new WikipediaPage(page);

    await wikipediaPage.open();
    await wikipediaPage.searchFor(searchTerm);

    const actualTitle = await wikipediaPage.getTitle();
    expect(actualTitle).toBe(expectedTitle);

    const actualDates = await wikipediaPage.getDatesFromParagraph(searchedParagraph);
    expect(actualDates).toContain(expectedDate);

    await addScreenshot(page, testInfo, 'wikipedia-automation');
  });
})

