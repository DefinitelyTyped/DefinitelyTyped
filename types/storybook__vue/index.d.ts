// Type definitions for @storybook/vue 3.3
// Project: https://github.com/storybooks/storybook
// Definitions by: Punit Gupta <https://github.com/pntgupta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
// Created with the help of storybook__react types

/// <reference types="webpack-env" />

import Vue, { ComponentOptions } from 'vue';

// Story can be used as template or component
export type Component = ComponentOptions<Vue> | string;
export type StoryFunction = () => Component;
export type StoryDecorator = (story: StoryFunction, context: { kind: string, story: string }) => Component | null;

export interface Story {
    readonly kind: string;
    add(storyName: string, getStory: StoryFunction): this;
    addDecorator(decorator: StoryDecorator): this;
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
export function configure(loaders: () => void, module: NodeModule): void;
export function getStorybook(): StoryStore[];
export function setAddon(addon: Addon): void;
export function storiesOf(kind: string, module: NodeModule): Story;
export function storiesOf<T>(kind: string, module: NodeModule): Story & T;
