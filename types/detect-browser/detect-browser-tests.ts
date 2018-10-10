import { detect } from 'detect-browser';
const browser = detect();

if (browser) {
    const name: string = browser.name;
    const version: string = browser.version;
}
