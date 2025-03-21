// tests/customerCare.spec.ts
import { test } from '@playwright/test';
import {HomePage} from "./pages/HomePage";
import {CustomerCarePage} from "./pages/CustomerCarePage";

test('Customer Care form submission', async ({ page }) => {
    const homePage = new HomePage(page);
    const customerCarePage = new CustomerCarePage(page);

    // Step 1: Navigate to homepage
    await homePage.navigate();

    // Step 2: Go to Customer Care page
    await homePage.goToCustomerCare();

    // Step 3-6: Fill the form
    await customerCarePage.fillForm('John Doe', 'johndoe@example.com', '1234567890', 'This is a test message.');

    // Step 7: Submit the form
    await customerCarePage.submitForm();

    // Step 8: Verify confirmation message
    await customerCarePage.verifyConfirmationMessage('John Doe');
});