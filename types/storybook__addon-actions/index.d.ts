// Type definitions for @storybook/addon-actions 3.0
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// TODO: Once https://github.com/DefinitelyTyped/DefinitelyTyped/pull/17434 is merged
// Remove the `declare module` wrapper.
// tslint:disable-next-line no-single-declare-module
declare module '@storybook/addon-actions' {
  type HandlerFunction = (...args: any[]) => undefined;
  type DecoratorFunction = (args: any[]) => any[];

  function decorateAction(decorators: DecoratorFunction[]): HandlerFunction;
  function action(name: string): HandlerFunction;
}
