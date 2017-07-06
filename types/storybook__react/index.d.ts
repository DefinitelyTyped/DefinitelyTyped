// Type definitions for @storybook/react 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

// TODO: Once TS2.3 is released,
// https://github.com/Microsoft/TypeScript/issues/14819 should be fixed.
// Then, upgrade this package's typescript version to 2.3 and
// Remove the `declare module` wrapper.
// tslint:disable-next-line no-single-declare-module
declare module '@storybook/react' {
    import * as React from 'react';

    type Renderable = React.StatelessComponent<any> | React.Component<any> | JSX.Element;
    type RenderFunction = () => Renderable;

    type StoryDecorator = (story: RenderFunction, context: { kind: string, story: string }) => Renderable | null;

    interface Story {
        add(storyName: string, callback: RenderFunction): Story;
        addDecorator(decorator: StoryDecorator): Story;
    }

    function addDecorator(decorator: StoryDecorator): void;
    function configure(fn: () => void, module: any): void;
    function setAddon(addon: object): void;
    function storiesOf(name: string, module: NodeModule): Story;
    function storiesOf<T>(name: string, module: NodeModule): Story & T;

    interface StoryObject {
        name: string;
        render: RenderFunction;
    }

    interface StoryBucket {
        kind: string;
        stories: StoryObject[];
    }

    function getStorybook(): StoryBucket[];
}
