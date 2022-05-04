import { NightwatchBrowser, globalElement } from './index';
import { By as seleniumBy } from "selenium-webdriver";

declare global {
    const browser: NightwatchBrowser;
    const element: typeof globalElement;
    const by: typeof seleniumBy;
    const By: typeof seleniumBy;
}
