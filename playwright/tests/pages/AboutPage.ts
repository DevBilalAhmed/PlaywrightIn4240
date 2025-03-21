import {expect, Page} from '@playwright/test';

export class AboutPage {
    //readonly to remove reassignment, can remove if we want to reassign page later
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
    }

    async verifyAboutSite() {
        const confirmationMessageTitle = this.page.locator('#rightPanel .title');
        await expect(confirmationMessageTitle).toContainText(`ParaSoft Demo Website`);
    }
}
