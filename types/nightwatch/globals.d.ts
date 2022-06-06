import { NightwatchBrowser, globalElement, Ensure, globalExpect } from './index';
import { By as seleniumBy, locateWith as seleniumLocateWith } from 'selenium-webdriver';

declare global {
    const browser: NightwatchBrowser;
    const element: typeof globalElement;
    const by: typeof seleniumBy;
    const By: typeof seleniumBy;
    const ensure: Ensure;
    const expect: typeof globalExpect;
    const locateWith: typeof seleniumLocateWith;
}
