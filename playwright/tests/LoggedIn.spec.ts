import {test} from "@playwright/test";
import {HomePage} from "./pages/HomePage";
import {OverviewPage} from "./pages/OverviewPage";
import {OpenAccountPage} from "./pages/OpenAccountPage";
import {ServicesPage} from "./pages/ServicesPage";
import {AboutPage} from "./pages/AboutPage";



test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    // Ensure account exists before testing (Parabank might delete accounts)
    await homePage.fillLoginForm("ParaJohn", "parajohn123");
    await homePage.submitLoginForm();
});

test.afterEach(async ({ page }) => {
    const homepage = new HomePage(page);

    await homepage.logOutAccount();
});



test('Open new checking account', async ({ page }) => {
    const homePage = new HomePage(page)
    const overViewPage = new OverviewPage(page)
    const openAccountPage = new OpenAccountPage(page)

    //verify we are logged in
    await overViewPage.verifyOverviewSite();

    //check for accountNumber(name)
    const accountName = await overViewPage.getBankAccountName();
    console.log(accountName)

    //click openNewAccount
    await homePage.goToOpenNewAccount();

    //verify we are on the right page
    await openAccountPage.verifyOpenAccountSite();

    //open new account
    await openAccountPage.openNewCheckingAccount();

    //verify new account got opened
    await openAccountPage.verifyNewAccountConfirmation();

    //get new account number of created account
    const bankAccountNumber = await openAccountPage.getNewAccountBankNumber();

    //go back to account overvire
    await homePage.goToAccountsOverview();

    //looks for our bankaccountnumber
    await overViewPage.checkIfBankAccountExists(bankAccountNumber);
});


test('Services Page redirect', async ({ page }) => {
    const homePage = new HomePage(page);
    const servicesPage = new ServicesPage(page);

    // Step 1: Navigate to homepage
    await homePage.navigate();

    // Step 2: Go to Customer Care page
    await homePage.goToServices();

    // Step 3: Verify confirmation message
    await servicesPage.verifyServiceSite();
});

test('About Page redirect', async ({ page }) => {
    const homePage = new HomePage(page);
    const aboutPage = new AboutPage(page);

    // Step 1: Navigate to homepage
    await homePage.navigate();

    // Step 2: Go to Customer Care page
    await homePage.goToAbout()

    // Step 3: Verify confirmation message
    await aboutPage.verifyAboutSite();
});