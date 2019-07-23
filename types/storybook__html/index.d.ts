// Type definitions for @storybook/html 5.0
// Project: https://github.com/storybookjs/storybook, https://github.com/storybookjs/storybook/tree/master/app/html
// Definitions by: Christian Murphy <https://github.com/ChristianMurphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="webpack-env" />

export type RenderFunction = () => string | string[] | HTMLElement;

export interface DecoratorParameters {
    [key: string]: any;
}
export type StoryDecorator = (story: RenderFunction, context: { kind: string, story: string }) => string | null;

export interface Story {
    readonly kind: string;
    add(storyName: string, callback: RenderFunction, parameters?: DecoratorParameters): this;
    addDecorator(decorator: StoryDecorator): this;
    addParameters(parameters: DecoratorParameters): this;
}

export function addDecorator(decorator: StoryDecorator): void;
export function addParameters(parameters: DecoratorParameters): void;
export function clearDecorators(): void;
export function configure(fn: () => void, module: NodeModule): void;
export function setAddon(addon: object): void;
export function storiesOf(name: string, module: NodeModule): Story;
export function storiesOf<T>(name: string, module: NodeModule): Story & T;
export function forceReRender(): void;

export interface StoryObject {
    name: string;
    render: RenderFunction;
}

export interface StoryBucket {
    kind: string;
    stories: StoryObject[];
}

export function getStorybook(): StoryBucket[];
