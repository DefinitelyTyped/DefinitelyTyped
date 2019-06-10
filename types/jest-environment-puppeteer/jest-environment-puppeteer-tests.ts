import * as puppeteer from "puppeteer";
import JestEnvironment, { setup, teardown } from 'jest-environment-puppeteer';

const myBrowser: puppeteer.Browser = browser;
const myPage: puppeteer.Page = page;
const myContext: puppeteer.BrowserContext = context;

jestPuppeteer.debug();
jestPuppeteer.resetPage();

setup().then(() => {
    // Setup completed
});

teardown().then(() => {
    // Teardown completed
});

const config: any = {};
const environment = new JestEnvironment(config);
