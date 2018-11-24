// Type definitions for @storybook/react 4.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 Anton Izmailov <https://github.com/wapgear>
//                 Dan Dean <https://github.com/dandean>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="webpack-env" />

import * as React from 'react';

// NOTE: a Renderable is only Renderable if _at least one_ element is a ReactElement.
// Only the result from the last decorator ultimately has to be Renderable, though.
// c.f. https://github.com/storybooks/storybook/blob/3a029494/app/react/src/client/preview/element_check.js
export type Renderable = React.ReactNonTextFragment;
export type RenderFunction = () => Renderable;

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
