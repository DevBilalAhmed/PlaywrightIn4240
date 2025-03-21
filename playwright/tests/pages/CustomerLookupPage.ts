import { Page, expect } from '@playwright/test';

export class CustomerLookupPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/lookup.htm');
    }

    //  \\ disse er for å fortelle locator at . er en del av Id
    async fillForm(firstName: string, lastName: string, Address: string, City: string, State: string, zipCode: string, SSN: string) {
        await this.page.locator('#firstName').fill(firstName)
        await this.page.locator('#lastName').fill(lastName)
        await this.page.locator('#address\\.street').fill(Address)
        await this.page.locator('#address\\.city').fill(City)
        await this.page.locator('#address\\.state').fill(State)
        await this.page.locator('#address\\.zipCode').fill(zipCode)
        await this.page.locator('#ssn').fill(SSN)
    }

    async submitForm() {
        await this.page.locator('input[type="submit"][value="Find My Login Info"]').click();
    }

    async verifyConfirmationMessage() {
        const confirmationMessageTitle = this.page.locator('#rightPanel .title');
        await expect(confirmationMessageTitle).toContainText(`Error!`);
    }
}
