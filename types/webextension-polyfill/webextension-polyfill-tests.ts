import * as browser from 'webextension-polyfill';
import { Tabs } from 'webextension-polyfill';

const promise: Promise<Tabs.Tab> = browser.tabs.create({});
