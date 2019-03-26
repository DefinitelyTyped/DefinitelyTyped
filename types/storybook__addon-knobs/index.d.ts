// Type definitions for @storybook/addon-knobs 4.0
// Project: https://github.com/storybooks/storybook, https://github.com/storybooks/storybook/tree/master/addons/knobs
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 Martynas Kadisa <https://github.com/martynaskadisa>
//                 A.MacLeay <https://github.com/amacleay>
//                 Michael Loughry <https://github.com/MLoughry>
//                 Alan Choi <https://github.com/alanhchoi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import * as React from 'react';
import { RenderFunction } from '@storybook/react';

export interface KnobOption<T> {
    value: T;
    type: 'text' | 'boolean' | 'number' | 'color' | 'object' | 'select' | 'date' | 'radios';
}

export interface StoryContext {
    kind: string;
    story: string;
}

export interface NumberOptions {
    range: boolean;
    min: number;
    max: number;
    step: number;
}

export interface EmptyNumberOptions {
    range?: undefined;
    min?: undefined;
    max?: undefined;
    step?: undefined;
}

export function knob<T>(name: string, options: KnobOption<T>): T;

export function text(name: string, value: string | null, groupId?: string): string;

export function boolean(name: string, value: boolean, groupId?: string): boolean;

export function files(label: string, accept: string, defaultValue: string[]): string[];

export function number(name: string, value: number, options?: NumberOptions | EmptyNumberOptions, groupId?: string): number;

export function color(name: string, value: string, groupId?: string): string;

export function object<T>(name: string, value: T, groupId?: string): T;

export function radios<T>(name: string, options: { [s: string]: T }, value?: T, groupId?: string): string;

export function select<T>(name: string, options: { [s: string]: T }, value: T, groupId?: string): T;
export function select<
    T extends Exclude<
        React.OptionHTMLAttributes<HTMLOptionElement>['value'],
        undefined
    >
>(name: string, options: ReadonlyArray<T>, value: T, groupId?: string): T;

export function date(name: string, value?: Date, groupId?: string): Date;

export function array<T>(name: string, value: ReadonlyArray<T>, separator?: string, groupId?: string): T[];

export function button(name: string, handler: () => any, groupId?: string): void;

export interface WrapStoryProps {
    context?: object;
    storyFn?: RenderFunction;
    channel?: object;
    knobStore?: object;
    initialContent?: object;
}

export function withKnobs(storyFn: RenderFunction, context: StoryContext): React.ReactElement<WrapStoryProps>;
export function withKnobsOptions(options: { debounce: boolean, timestamps: boolean }): (storyFn: RenderFunction, context: StoryContext) => React.ReactElement<WrapStoryProps>;
