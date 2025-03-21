import { Page, expect } from '@playwright/test';

export class CustomerCarePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/contact.htm');
    }

    async fillForm(name: string, email: string, phone: string, message: string) {
        await this.page.locator('#name').fill(name)
        await this.page.locator('#email').fill(email)
        await this.page.locator('#phone').fill(phone)
        await this.page.locator('#message').fill(message)
    }

    async submitForm() {
        await this.page.locator('input[type="submit"][value="Send to Customer Care"]').click();
    }

    async verifyConfirmationMessage(name: string) {
        const confirmationMessageTitle = this.page.locator('#rightPanel .title');
        // i also want to handle name check, and we dont have id or class for this P in the #rightpanel
        const confirmationMessageP= this.page.locator('#rightPanel p', { hasText: `Thank you ${name}` });
        //await confirmationMessage.waitFor({ state: 'visible' });
        await expect(confirmationMessageTitle).toContainText(`Customer Care`);
        //need
        await expect(confirmationMessageP).toContainText(` Thank you ${name}`);
    }
}
