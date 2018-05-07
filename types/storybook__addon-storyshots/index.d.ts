// Type definitions for @storybook/addon-storyshots 3.4
// Project: https://github.com/storybooks/storybook/tree/master/addons/storyshots
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';
import { StoryObject } from '@storybook/react';
import { Page, NavigationOptions, ScreenshotOptions } from "puppeteer";

export type Test = (options: {
    story: StoryObject;
    context: StoryContext;
    renderShallowTree: any;
    renderTree: any;
    snapshotFileName: string;
}) => void | undefined | Promise<void>;

export interface SnapshotOptions {
    createNodeMock?: (element: any) => any;
}

export interface StoryContext {
    kind: string;
    story: string;
}

export interface ImageSnapshotOptions {
    context: {
        kind: any;
        story: string
    };
    url: string;
}

export function imageSnapshot(options?: {
    storybookUrl?: string;
    getMatchOptions?: (options: ImageSnapshotOptions) => { failureThreshold: number, failureThresholdType: 'percent' };
    getScreenshotOptions?: (options: ImageSnapshotOptions) => ScreenshotOptions;
    beforeScreenshot?: (page: Page, options: ImageSnapshotOptions) => Promise<void>;
    getGotoOptions?: (options: ImageSnapshotOptions) => NavigationOptions;
    chromeExecutablePath?: string;
}): Test;

export function multiSnapshotWithOptions(options: SnapshotOptions): Test;

export const shallowSnapshot: Test;

export const snapshot: Test;

export function snapshotWithOptions(options: SnapshotOptions): Test;

export const renderOnly: Test;

export function getSnapshotFileName(context: StoryContext): string;

export default function initStoryshots(options: {
    configPath?: string;
    framework?: string;
    integrityOptions?: {};
    suite?: string;
    test?: Test;
}): void;
