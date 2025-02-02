import { Page, TestInfo } from "@playwright/test";

export const addScreenshot = async (page: Page, testInfo: TestInfo, name: string): Promise<void> => {
    const browser = page.context().browser()!.browserType().name();
    if (browser === 'chromium') {
        const screenshot = await page.screenshot({ fullPage: true });
        await testInfo.attach(name, { body: screenshot, contentType: 'image/png' });
    }
}

export const getLanguage = async (page: Page): Promise<string> => {
    const language = await page.locator('html').getAttribute('lang');
    if (!language) {
        throw new Error('Cannot find the language');
    }
    return language;
}
