// Type definitions for @storybook/vue 5.0
// Project: https://github.com/storybooks/storybook, https://github.com/storybooks/storybook/tree/master/app/vue
// Definitions by: Punit Gupta <https://github.com/pntgupta>
//                 Jurgis Rudaks <https://github.com/jurgisrudaks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
// Created with the help of storybook__react types

/// <reference types="webpack-env" />

import Vue, { ComponentOptions } from 'vue';

// Story can be used as template or component
export type StoryFunction = () => ComponentOptions<Vue> | string;

export interface DecoratorParameters {
    [key: string]: any;
}
export type StoryDecorator = (story: () => ComponentOptions<Vue>, context: { kind: string, story: string }) => ComponentOptions<Vue> | null;

export interface Story {
    readonly kind: string;
    add(storyName: string, getStory: StoryFunction): this;
    addDecorator(decorator: StoryDecorator): this;
    addParameters(parameters: DecoratorParameters): this;
}

export interface Addon {
    [addonName: string]: (storyName: string, storyFn: StoryFunction) => void;
}
export interface StoryStore {
    fileName: string | undefined;
    kind: string;
    stories: StoryObject[];
}
export interface StoryObject {
    name: string;
    render: StoryFunction;
}

export function addDecorator(decorator: StoryDecorator): void;
export function addParameters(parameters: DecoratorParameters): void;
export function configure(loaders: () => void, module: NodeModule): void;
export function getStorybook(): StoryStore[];
export function setAddon(addon: Addon): void;
export function storiesOf(kind: string, module: NodeModule): Story;
