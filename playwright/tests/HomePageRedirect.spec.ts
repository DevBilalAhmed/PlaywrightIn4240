import { test } from '@playwright/test';
import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/AboutPage";
import {ServicesPage} from "./pages/ServicesPage";
import {CustomerLookupPage} from "./pages/CustomerLookupPage";

test('Forgot Login Info', async ({ page }) => {
    const homePage = new HomePage(page);
    const customerLookupPage = new CustomerLookupPage(page);

    // Step 1: Navigate to homepage
    await homePage.navigate();

    // Step 2: Go to Customer Lookup
    await homePage.goToCustomerLookup();

    // Step 3-6: Fill the form
    await customerLookupPage.fillForm(
        'Johnjohnjohn',
        'Doedoedoe',
        'New Harlem 123',
        'Bronx',
        'New York',
        '123456',
        '123456789');

    // Step 7: Submit the form
    await customerLookupPage.submitForm();

    // Step 8: Verify confirmation message
    await customerLookupPage.verifyConfirmationMessage();
});



