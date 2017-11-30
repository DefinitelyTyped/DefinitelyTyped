// Type definitions for @storybook/addon-actions 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export type HandlerFunction = (...args: any[]) => undefined;
export type DecoratorFunction = (args: any[]) => any[];

export function decorateAction(decorators: DecoratorFunction[]): HandlerFunction;
export function action(name: string): HandlerFunction;
