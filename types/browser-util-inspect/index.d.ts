// Type definitions for browser-util-inspect 0.2
// Project: https://github.com/deecewan/browser-util-inspect
// Definitions by: William So <https://github.com/polyipseity>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = inspect;

declare function inspect(obj: unknown, opts?: inspect.Options): string;

declare namespace inspect {
    type Options = {
        readonly showHidden?: boolean | undefined;
        readonly depth?: number | undefined;
        readonly customInspect?: boolean | undefined;
    } & (
        | {
              readonly colors?: boolean | undefined;
              readonly stylize?: undefined;
          }
        | {
              readonly colors?: undefined;
              readonly stylize?: ((str: string, styleType: StyleType) => string) | undefined;
          }
    );
    type StyleType = 'boolean' | 'date' | 'name' | 'null' | 'number' | 'regexp' | 'special' | 'string' | 'undefined';
    type Effect = [startSgr: number, endSgr: number];
    interface Effects {
        bold: Effect;
        italic: Effect;
        underline: Effect;
        inverse: Effect;
        white: Effect;
        grey: Effect;
        black: Effect;
        blue: Effect;
        cyan: Effect;
        green: Effect;
        magenta: Effect;
        red: Effect;
        yellow: Effect;
    }
    let colors: Effects;
    let styles: {
        [_ in StyleType]?: keyof typeof colors | undefined;
    };
}
