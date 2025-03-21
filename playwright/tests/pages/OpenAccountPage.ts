import {expect, Page} from '@playwright/test';

export class OpenAccountPage {
    //readonly to remove reassignment, can remove if we want to reassign page later
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/openaccount.htm');
    }

    async verifyOpenAccountSite() {
        const confirmationMessageTitle = this.page.locator('#rightPanel #openAccountForm .title');
        await expect(confirmationMessageTitle).toContainText(`Open New Account`);
    }

    async openNewCheckingAccount(){
        await this.page.locator('#openAccountForm input.button[value="Open New Account"]').click();
    }

    async getNewAccountBankNumber(): Promise<string>{
        const bankNumber = await this.page.locator('#openAccountResult #newAccountId');
        return await bankNumber.textContent()??'';
    }

    async verifyNewAccountConfirmation(){
        const confirmationMessageTitle = this.page.locator('#rightPanel #openAccountResult .title');
        await expect(confirmationMessageTitle).toContainText(`Account Opened!`);
    }
}
