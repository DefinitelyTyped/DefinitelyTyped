// Type definitions for @storybook/addon-knobs 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="storybook__react" />

// TODO: Once TS2.3 is released,
// https://github.com/Microsoft/TypeScript/issues/14819 should be fixed.
// Then, upgrade this package's typescript version to 2.3 and
// Remove the `declare module` wrapper.
// tslint:disable-next-line no-single-declare-module
declare module '@storybook/addon-knobs' {
    import * as React from 'react';
    import { RenderFunction } from '@storybook/react';

    interface KnobOption<T> {
        value: T;
        type: 'text' | 'boolean' | 'number' | 'color' | 'object' | 'select' | 'date';
    }

    interface StoryContext {
        kind: string;
        story: string;
    }

    interface NumberOptions {
        range: boolean;
        min: number;
        max: number;
        step: number;
    }

    function knob<T>(name: string, options: KnobOption<T>): T;

    function text(name: string, value: string | null): string;

    function boolean(name: string, value: boolean): boolean;

    function number(name: string, value: number, options?: NumberOptions): number;

    function color(name: string, value: string): string;

    function object<T>(name: string, value: T): T;

    function select<T>(name: string, options: { [s: string]: T }, value: string): T;
    function select(name: string, options: string[], value: string): string;

    function date(name: string, value?: Date): Date;

    interface WrapStoryProps {
        context?: object;
        storyFn?: RenderFunction;
        channel?: object;
        knobStore?: object;
        initialContent?: object;
    }

    function withKnobs(storyFn: RenderFunction, context: StoryContext): React.ReactElement<WrapStoryProps>;
    function withKnobsOptions(options: { debounce: boolean, timestamps: boolean }): (storyFn: RenderFunction, context: StoryContext) => React.ReactElement<WrapStoryProps>;
}
