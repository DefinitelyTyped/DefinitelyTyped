// Type definitions for es6template 1.0
// Project: https://github.com/zalmoxisus/es6-template
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Default {
    render: (str: string, locals: Record<string, unknown>) => string;

    // This rule is disabled because the caller of `compile()` knows what the type of the `locals` parameter should be when
    // calling the `compile` function.
    // tslint:disable-next-line:no-unnecessary-generics
    compile: <Locals>(str: string) => ((locals: Locals) => string);
    (str: string, locals: Record<string, unknown>): string;
}
declare const _default: Default;
export = _default;
