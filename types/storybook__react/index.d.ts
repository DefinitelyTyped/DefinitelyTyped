// Type definitions for @storybook/react 3.0.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

// TODO: Once TS2.3 is released,
// https://github.com/Microsoft/TypeScript/issues/14819 should be fixed.
// Then, upgrade this package's typescript version to 2.3 and
// Remove the `declare module` wrapper.
// tslint:disable-next-line no-single-declare-module
declare module "@storybook/react" {
    type RenderFunction = () => JSX.Element;

    interface StoryDecorator {
        (story: RenderFunction, context: { kind: string, story: string }): Object | null;
    }

    interface Story {
        add (storyName: string, callback: RenderFunction): Story;
        addDecorator (decorator: StoryDecorator): Story;
    }

    export function addDecorator(decorator: StoryDecorator): void;
    export function configure(fn: Function, module: any): void;
    export function setAddon(addon: object): void;
    export function storiesOf(name: string, module: NodeModule): Story;
    export function storiesOf<T>(name: string, module: NodeModule): Story & T;

    type StoryObject = {
        name: string,
        render: RenderFunction,
    };

    type StoryBucket = {
        kind: string,
        stories: StoryObject[],
    };

    export function getStorybook(): StoryBucket[];
}
