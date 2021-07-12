import browser, { Tabs } from 'webextension-polyfill';

const promise: Promise<Tabs.Tab> = browser.tabs.create({});
