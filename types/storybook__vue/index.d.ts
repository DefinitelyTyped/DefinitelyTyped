// Type definitions for @storybook/vue 3.0
// Project: https://github.com/storybooks/storybook/tree/master/app/vue
// Definitions by: Yutaro Miyazaki <https://github.com/vwxyutarooo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="webpack-env" />

import Vue, { ComponentOptions } from 'vue';

export type Renderable = string | ComponentOptions<Vue>;
export type RenderFunction = () => Renderable;
export type StoryDecorator = (story: RenderFunction, context: { kind: string, story: string }) => Renderable | null;

export interface Story {
    readonly kind: string;
    add(storyName: string, callback: RenderFunction | string): this;
    addDecorator(decorator: StoryDecorator): this;
}

export function addDecorator(decorator: StoryDecorator): void;
export function configure(fn: () => void, module: NodeModule): void;
export function setAddon(addon: object): void;
export function storiesOf<T>(name: string, module: NodeModule): Story & T;

export interface StoryObject {
    name: string;
    render: RenderFunction;
}

export interface StoryBucket {
    kind: string;
    stories: StoryObject[];
}

export function getStorybook(): StoryBucket[];
