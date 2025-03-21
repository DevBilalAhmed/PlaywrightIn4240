# Manual Test Cases for Parabank Website

## Table of Contents
1. [Run Guide](#run-guide)
2. [User Account](#User)
3. [Test Case 1 - Customer Care Test](#test-case-1-customer-care-test)
4. [Test Case 2 - About Test](#test-case-2-about-test)
5. [Test Case 3 - Services Test](#test-case-3-services-test)
6. [Test Case 4 - Failing Login Info](#test-case-4-failing-login-info)
7. [Test Case 5 - Open a New Checking Account](#test-case-5-open-a-new-checking-account)
---
## Run Guide
To Run this on your computer you will need\
Node installed for npm\
npm install in the directory\
npx playwright install\
And now you can run the tests 1 by 1\
e.g you want to run example.spec.ts\
npx playwright test example.spec.ts --debug

## User
Username: ParaJohn
Password: parajohn123


## Test Case 1 - Customer Care Test

### Test Case Description:

| Step No | Action | Expected Result |
|---------|--------|----------------|
| 1 | Open a web browser and navigate to [Parabank Homepage](https://parabank.parasoft.com/parabank/index.htm). | The homepage loads successfully. |
| 2 | Locate and click on the **mail icon** to navigate to the "Customer Care" page. | The "Customer Care" page opens. |
| 3 | The website should navigate to [Customer Care Page](https://parabank.parasoft.com/parabank/contact.htm). | The Customer Care page loads successfully. |
| 4 | In the form, enter a valid **Name**. | The name is entered without issues. |
| 5 | Enter a valid **Email Address**. | The email is entered correctly. |
| 6 | Enter a valid **Phone Number**. | The phone number is entered correctly. |
| 7 | Enter a **Message** in the provided text box. | The message is typed in successfully. |
| 8 | Click the **"Send to Customer Care"** button. | The form submits successfully. |
| 9 | Verify that a confirmation message appears stating: “Customer Care Thank you ‘Name’. A Customer Care Representative will be contacting you.” | The confirmation message is displayed correctly. |

### Expected Results:

- The website should successfully navigate to the **Customer Care Page** when the mail icon is clicked.
- The **confirmation message** should appear after the form submission, indicating successful form entry.

---

## Test Case 2 - About Test

### Test Case Description:

| Step No | Action | Expected Result |
|---------|--------|----------------|
| 1 | Open a web browser and navigate to [Parabank Homepage](https://parabank.parasoft.com/parabank/index.htm). | The homepage loads successfully. |
| 2 | From the homepage, locate and click on the **person icon** to navigate to the "About" page. | The "About" page opens. |
| 3 | Verify that the website navigates to [About Page](https://parabank.parasoft.com/parabank/about.htm). | The "About" page should load successfully. |
| 4 | On the "About" page, verify that a message with the title **"ParaSoft Demo Website"** is displayed. | The message with the title "ParaSoft Demo Website" is visible on the page. |

### Expected Results:

- The website should open the **About Page** upon clicking the **person icon**.
- The **"ParaSoft Demo Website"** title should be visible on the About Page.

---

## Test Case 3 - Services Test

### Test Case Description:

| Step No | Action | Expected Result |
|---------|--------|----------------|
| 1 | Open a web browser and navigate to [Parabank Homepage](https://parabank.parasoft.com/parabank/index.htm). | The homepage loads successfully. |
| 2 | Under the **Services** section, locate and click on the **"Read More"** link (document icon). | The Services page opens. |
| 3 | Verify that the website navigates to [Services Page](https://parabank.parasoft.com/parabank/services.htm). | The Services page should load successfully. |
| 4 | On the Services page, verify that the heading **"Available Bookstore SOAP services:"** is displayed. | The heading "Available Bookstore SOAP services:" should be visible on the page. |

### Expected Results:

- The website should successfully navigate to the **Services Page** when the "Read More" link is clicked.
- The heading **"Available Bookstore SOAP services:"** should be visible on the page.

---

## Test Case 4 - Failing Login Info

### Test Case Description:

| Step No | Action | Expected Result |
|---------|--------|----------------|
| 1 | Open a web browser and navigate to [Parabank Homepage](https://parabank.parasoft.com/parabank/index.htm). | The homepage loads successfully. |
| 2 | Click on the **"Forgot Login Info?"** link. | The website should navigate to the following URL: [Forgot Login Info Page](https://parabank.parasoft.com/parabank/lookup.htm). |
| 3 | On the "Lookup" page, begin filling out the form with incorrect information. | The form should allow entering incorrect details. |
| 4 | Fill in the **First Name** field. | The First Name is entered without issues. |
| 5 | Fill in the **Last Name** field. | The Last Name is entered without issues. |
| 6 | Fill in the **Address** field. | The Address is entered without issues. |
| 7 | Fill in the **City** field. | The City is entered without issues. |
| 8 | Fill in the **State** field. | The State is entered without issues. |
| 9 | Fill in the **Zip Code** field. | The Zip Code is entered without issues. |
| 10 | Fill in the **SSN** field. | The SSN is entered without issues. |
| 11 | Click the **"Find My Login Info"** button. | The form submits successfully. |
| 12 | Verify that the title **"Error!"** is displayed. | The page should display the **"Error!"** title due to incorrect information. |

### Expected Results:

- The website should allow users to navigate to the **Forgot Login Info** page correctly.
- The form should accept invalid information without issues.
- After submitting the form, an **Error!** message should be displayed indicating that the login information was not found.

---
## Test Case 5 - Open a New Checking Account

### Test Case Description:

| Step No | Action | Expected Result |
|---------|--------|----------------|
| 1 | Open a web browser and navigate to [Parabank Homepage](https://parabank.parasoft.com/parabank/index.htm). | The homepage loads successfully. |
| 2 | Log into your existing account. | The user is successfully logged in. |
| 3 | Click **"Open a New Account"** in the left menu. | The browser redirects to [Open Account Page](https://parabank.parasoft.com/parabank/openaccount.htm). |
| 4 | Confirm the verification for the new bank account number (e.g., "15120"). | The new bank account number is displayed. |
| 5 | Click **"Accounts Overview"**. | The browser redirects to [Accounts Overview](https://parabank.parasoft.com/parabank/overview.htm). |
| 6 | Verify that the newly opened bank account appears in the table. | The new bank account is listed in the overview. |

### Expected Results:

- A new checking account should be created successfully.
- The new account number should be displayed.
- The new account should be visible in the **Accounts Overview** section.

---

## Summary

These manual test cases verify the following key features on the Parabank website:
- **Customer Care page functionality**
- **About page verification**
- **Services page accessibility**
- **Handling of incorrect login recovery attempts**
- **Opening a new checking account**
---