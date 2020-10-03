/*
 * lib.dom.d.ts compatible console definition, copied from NodeJS defintiions
 * and modified for Titanium
 */

declare module "console" {
  global {
    // This needs to be global to avoid TS2403 in case lib.dom.d.ts is present in the same build
    /**
     * Console logging facilities.
     */
    interface Console {
      /**
       * A simple assertion test that verifies whether value is truthy. If it is not, Assertion failed is logged. If provided, the error message is formatted using `util.format()` by passing along all message arguments. The output is used as the error message.
       */
      assert(value?: any, ...message: any[]): void;

      /**
       * Maintains an internal counter specific to `label` and outputs to stdout the number of times `console.count()` has been called with the given `label`.
       */
      count(label?: string): void;

      /**
       * Resets the internal counter specific to `label`.
       */
      countReset(label?: string): void;

      /**
       * Log a message at the `debug` level.
       */
      debug(...message: any[]): void;

      /**
       * Log a message at the `error` level.
       */
      error(...message: any[]): void;

      /**
       * Increases indentation of subsequent lines by spaces for `groupIndentation` length.
       */
      group(...label: any[]): void;

      /**
       * Alias for `group()`
       */
      groupCollapsed(...label: any[]): void;

      /**
       * Decreases indentation of subsequent lines by spaces for `groupIndentation` length.
       */
      groupEnd(): void;

      /**
       * Log a message at the `info` level.
       */
      info(...message: any[]): void;

      /**
       * Log a message at the `info` level.
       */
      log(...message: any[]): void;

      /**
       * Start a timer to track duration of an operation.
       */
      time(label?: string): void;

      /**
       * Stop a timer that was previously started.
       */
      timeEnd(label?: string): void;

      /**
       * Log duration taken so far for an operation.
       */
      timeLog(label?: string, ...data: any[]): void;

      /**
       * Log a message at the `trace` level.
       */
      trace(...message: any[]): void;

      /**
       * Log a message at the `warn` level.
       */
      warn(...message: any[]): void;
    }

    var console: Console;

    namespace Titanium {
      interface ConsoleConstructorOptions {
        stdout: object;
        stderr?: object;
        ignoreErrors?: boolean;
        colorMode?: boolean | 'auto';
        inspectOptions?: object;
      }

      interface ConsoleConstructor {
        prototype: Console;
        new(stdout: object, stderr?: object, ignoreErrors?: boolean): Console;
        new(options: ConsoleConstructorOptions): Console;
      }

      interface Global {
        console: typeof console;
      }
    }
  }

  export = console;
}
