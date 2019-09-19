// Type definitions for @storybook/addon-storyshots 5.1
// Project: https://github.com/storybookjs/storybook/tree/master/addons/storyshots, https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core
// Definitions by: Bradley Ayers <https://github.com/bradleyayers>
//                 Yama-Tomo <https://github.com/Yama-Tomo>
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

export interface SnapshotOptionsObject {
    createNodeMock?: (element: any) => any;
}

export interface SnapshotOptionsFn {
    (story: StoryObject): SnapshotOptionsObject;
}

export type SnapshotOptions = SnapshotOptionsObject | SnapshotOptionsFn;

export interface StoryContext {
    kind: string;
    story: string;
}

export function multiSnapshotWithOptions(options: SnapshotOptions): Test;

export const shallowSnapshot: Test;

export const snapshot: Test;

export function snapshotWithOptions(options: SnapshotOptions): Test;

export const renderOnly: Test;

export function renderWithOptions(options?: SnapshotOptions): Test;

export function getSnapshotFileName(context: StoryContext): string;

export default function initStoryshots<Rendered>(
  // tslint:disable-next-line no-unnecessary-generics
  options?: InitOptions<Rendered>,
): void;

export interface InitOptions<Rendered = any> {
    configPath?: string;
    suite?: string;
    storyKindRegex?: RegExp;
    storyNameRegex?: RegExp;
    framework?: string;
    test?: Test;
    renderer?: (node: JSX.Element) => Rendered;
    serializer?: (rendered: Rendered) => any;
    integrityOptions?: {};
}
