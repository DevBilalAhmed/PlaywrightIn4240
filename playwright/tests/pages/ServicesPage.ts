import {expect, Page} from '@playwright/test';

export class ServicesPage {
    //readonly to remove reassignment, can remove if we want to reassign page later
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/services.htm');
    }

    async verifyServiceSite() {
        const confirmationMessageTitle = this.page.locator('#rightPanel span.heading',{ hasText: `Available Bookstore SOAP services` });
        await expect(confirmationMessageTitle).toContainText(`Available Bookstore SOAP services:`);
    }
}
