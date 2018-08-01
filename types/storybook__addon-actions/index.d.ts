// Type definitions for @storybook/addon-actions 3.4
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>, June <https://github.com/jicjjang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type HandlerFunction = (...args: any[]) => undefined;
export type DecoratorFunction = (args: any[]) => any[];
export interface Options {
    depth?: number;
    clearOnStoryChange?: boolean;
    limit?: number;
}

export function decorateAction(decorators: DecoratorFunction[]): (name: string, options?: Options) => HandlerFunction;
export function configureActions(options: Options): undefined;
export function action(name: string): HandlerFunction;
