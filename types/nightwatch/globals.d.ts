import { NightwatchBrowser, globalElement, Ensure, NightwatchAPI, Expect } from './index';
import { By as seleniumBy, locateWith as seleniumLocateWith } from 'selenium-webdriver';

declare global {
    const browser: NightwatchBrowser;
    const app: NightwatchAPI;
    const element: typeof globalElement;
    const by: typeof seleniumBy;
    const By: typeof seleniumBy;
    const ensure: Ensure;
    const expect: Expect;
    const locateWith: typeof seleniumLocateWith;
}
