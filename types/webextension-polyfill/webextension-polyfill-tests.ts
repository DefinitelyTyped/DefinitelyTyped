import * as browser from "webextension-polyfill";
// eslint-disable-next-line no-duplicate-imports
import { Browser, Tabs } from "webextension-polyfill";

const x: Browser = browser;

const promise: Promise<Tabs.Tab> = browser.tabs.create({});
