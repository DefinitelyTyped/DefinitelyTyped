// Type definitions for configurable 0.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Vilim Stubičan <https://github.com/jewbre>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// Make any object configurable
export default function(obj: any): Configurable;

export class Configurable {
    settings: {
        [key: string]: any;
    };

    set(name: string, val: any): Configurable;

    get(name: string): any;

    enable(name: string): Configurable;

    disable(name: string): Configurable;

    enabled(name: string): boolean;

    disabled(name: string): boolean;
}
