import { NightwatchBrowser, globalElement, Ensure } from './index';
import { By as seleniumBy, locateWith as seleniumLocateWith } from 'selenium-webdriver';
import { expect as chaiExpect } from 'chai';

declare global {
    const browser: NightwatchBrowser;
    const element: typeof globalElement;
    const by: typeof seleniumBy;
    const By: typeof seleniumBy;
    const ensure: Ensure;
    const expect: typeof chaiExpect;
    const locateWith: typeof seleniumLocateWith;
}
