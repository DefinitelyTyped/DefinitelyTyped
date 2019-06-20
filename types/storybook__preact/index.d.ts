// Type definitions for @storybook/preact 5.0
// Project: https://github.com/storybookjs/storybook, https://github.com/storybookjs/storybook/tree/master/app/preact
// Definitions by: Keisuke Kan <https://github.com/9renpoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3
// Created with the help of storybook__react types

/// <reference types="webpack-env" />

import * as Preact from 'preact';

export type Renderable = Preact.AnyComponent | JSX.Element;
export type RenderFunction = () => Renderable | Renderable[];

export interface DecoratorParameters {
    [key: string]: any;
}
export type StoryDecorator = (story: RenderFunction, context: { kind: string, story: string }) => Renderable | null;

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
