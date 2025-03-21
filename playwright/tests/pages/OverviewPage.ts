import {expect, Page} from '@playwright/test';

export class OverviewPage {
    //readonly to remove reassignment, can remove if we want to reassign page later
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/overview.htm');
    }

    async verifyOverviewSite() {
        const confirmationMessageTitle = this.page.locator('#rightPanel #showOverview .title');
        await expect(confirmationMessageTitle).toContainText(`Accounts Overview`);
    }

    async getBankAccountName(): Promise<string> {
        const accountNameElement = this.page.locator('#accountTable tbody tr:nth-child(1) td:nth-child(1)');
        return await accountNameElement.textContent() ?? '';
    }

    async checkIfBankAccountExists(bankAccount: string): Promise<boolean> {
        const accountRow = this.page.locator('#accountTable tbody tr td:nth-child(1)');

        // Get all text values from matching rows
        const accountTexts = await accountRow.allTextContents();

        console.log(`Searching for bank account: ${bankAccount}`);
        console.log(`Table contains:`, accountTexts);  // Logs all bank account numbers in the table

        // Check if any of them match the expected bank account number
        return accountTexts.includes(bankAccount);
    }


}
