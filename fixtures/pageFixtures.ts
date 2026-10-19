import { test as base } from '@playwright/test';
import dotenv from 'dotenv';

import { HomePage } from '../pages/pages/HomePage';
import { RegisterPage } from '../pages/pages/RegisterPage';
import { LoginPage } from '../pages/pages/LoginPage';
import { MyAccountPage } from '../pages/pages/MyAccountPage';
import { SuccessPage } from '../pages/pages/SuccessPage';
import { LogoutPage } from '../pages/pages/LogoutPage';
import { SearchResultsPage } from '../pages/pages/SearchResultsPage';
import { ProductPage } from '../pages/pages/ProductPage';
import { CartPage } from '../pages/pages/CartPage';
import { AdminLoginPage } from '../pages/pages/AdminLoginPage';
import { AdminCustomersPage } from '../pages/pages/AdminCustomersPage';
import { AdminCustomerEditPage } from '../pages/pages/AdminCustomerEditPage';

dotenv.config();

const APP_URL = process.env.WEB_APP_URL || 'https://tutorialsninja.com/demo/';

type PageFixtures = {
    homePage: HomePage;
    registerPage: RegisterPage;
    loginPage: LoginPage;
    myAccountPage: MyAccountPage;
    successPage: SuccessPage;
    logoutPage: LogoutPage;
    searchResultsPage: SearchResultsPage;
    productPage: ProductPage;
    cartPage: CartPage;
    adminLoginPage: AdminLoginPage;
    adminCustomersPage: AdminCustomersPage;
    adminCustomerEditPage: AdminCustomerEditPage;
};

export const test = base.extend<PageFixtures>({
    homePage: async ({ page }, use) => {
        await page.goto(APP_URL);
        await use(new HomePage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },
    successPage: async ({ page }, use) => {
        await use(new SuccessPage(page));
    },
    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page));
    },
    searchResultsPage: async ({ page }, use) => {
        await use(new SearchResultsPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    adminLoginPage: async ({ page }, use) => {
        await use(new AdminLoginPage(page));
    },
    adminCustomersPage: async ({ page }, use) => {
        await use(new AdminCustomersPage(page));
    },
    adminCustomerEditPage: async ({ page }, use) => {
        await use(new AdminCustomerEditPage(page));
    },
});

export { expect } from '@playwright/test';