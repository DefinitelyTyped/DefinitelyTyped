// Type definitions for @storybook/addon-storyshots 3.4
// Project: https://github.com/storybooks/storybook/tree/master/addons/storyshots, https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as React from 'react';
import { StoryObject } from '@storybook/react';
import { Page, NavigationOptions, ScreenshotOptions } from "puppeteer";

export type Test = (options: {
    story: StoryObject;
    context: StoryContext;
    renderShallowTree: RenderTree;
    renderTree: RenderTree;
    snapshotFileName: string;
}) => undefined | void | Promise<void>;

export type RenderTree = (
    story: StoryObject,
    context: StoryContext,
    options?: SnapshotOptions
) => undefined | void | Promise<void>;

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

// tslint:disable-next-line no-unnecessary-generics
export default function initStoryshots<Rendered>(options: InitOptions<Rendered>): void;

export interface InitOptions<Rendered = any> {
    configPath?: string;
    suite?: string;
    storyKindRegex?: RegExp;
    storyNameRegex?: RegExp;
    framework?: string;
    test?: Test;
    renderer?: (node: React.ReactElement) => Rendered;
    serializer?: (rendered: Rendered) => any;
    integrityOptions?: {};
}
