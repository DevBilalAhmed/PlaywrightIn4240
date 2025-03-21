import { Page } from '@playwright/test';

export class HomePage {
    //readonly to remove reassignment, can remove if we want to reassign page parameter later
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    async goToCustomerCare() {
        await this.page.locator('.contact').click();
    }
    async goToAbout() {
        await this.page.locator('.aboutus').click();
    }

    async goToServices() {
        await this.page.locator('#rightPanel .more a[href*="services.htm"]').click();
    }

    async goToCustomerLookup() {
        await this.page.locator('#loginPanel p a[href*="lookup.htm"]').click();
    }

    async fillLoginForm(username: string, password: string) {
        await this.page.locator('.login input[type="text"][name="username"] ').fill(username)
        await this.page.locator('.login input[type="password"][name="password"]').fill(password)
    }
    async submitLoginForm() {
        await this.page.locator('input[type="submit"][value="Log In"]').click();
    }

    async goToOpenNewAccount(){
        await this.page.locator('#leftPanel li a[href*="openaccount.htm"]').click();
    }

    async goToAccountsOverview(){
        await this.page.locator('#leftPanel li a[href*="overview.htm"]').click();
    }

    async logOutAccount(){
        await this.page.locator('#leftPanel li a[href*="logout.htm"]').click();
    }


}
