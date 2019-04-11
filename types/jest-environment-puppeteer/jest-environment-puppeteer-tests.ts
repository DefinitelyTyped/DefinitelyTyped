import * as puppeteer from "puppeteer";

const myBrowser: puppeteer.Browser = browser;
const myPage: puppeteer.Page = page;
const myContext: puppeteer.BrowserContext = context;

jestPuppeteer.debug();
jestPuppeteer.resetPage();
