// Type definitions for browser-util-inspect 0.2
// Project: https://github.com/deecewan/browser-util-inspect
// Definitions by: William So <https://github.com/polyipseity>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = inspect;

declare function inspect(obj: unknown, opts?: inspect.Options): string;

declare namespace inspect {
    type Options = {
        readonly showHidden?: boolean;
        readonly depth?: number;
        readonly customInspect?: boolean;
    } & (
        | {
              readonly colors?: boolean;
              readonly stylize?: never;
          }
        | {
              readonly colors?: never;
              readonly stylize?: (str: string, styleType: StyleType) => string;
          }
    );

    type StyleType = 'boolean' | 'date' | 'name' | 'null' | 'number' | 'regexp' | 'special' | 'string' | 'undefined';
}
