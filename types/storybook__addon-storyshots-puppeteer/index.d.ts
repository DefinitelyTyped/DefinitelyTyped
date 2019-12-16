// Type definitions for @storybook/addon-storyshots-puppeteer 5.1
// Project: https://github.com/storybookjs/storybook/tree/master/addons/storyshots, https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-puppeteer
// Definitions by: Yama-Tomo <https://github.com/Yama-Tomo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import { StoryContext } from '@storybook/addon-storyshots';
import { MatchImageSnapshotOptions } from 'jest-image-snapshot';
import { ScreenshotOptions, Page, DirectNavigationOptions, Browser } from 'puppeteer';

export interface Context {
    context: StoryContext;
    url: string;
}

export interface CustomConfig {
    storybookUrl?: string;
    chromeExecutablePath?: string;
    getMatchOptions?: (ctx: Context) => MatchImageSnapshotOptions;
    getScreenshotOptions?: (ctx: Context) => ScreenshotOptions;
    beforeScreenshot?: (page: Page, ctx: Context) => Promise<void>;
    getGotoOptions?: (ctx: Context) => DirectNavigationOptions;
    customizePage?: (page: Page) => Promise<void>;
    getCustomBrowser?: () => Promise<Browser>;
}

export function imageSnapshot(customConfig?: CustomConfig): ({ context }: { context: StoryContext }) =>
    Promise<void>;
