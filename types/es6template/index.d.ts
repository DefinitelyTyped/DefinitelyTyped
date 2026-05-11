interface Default {
    render: (str: string, locals: Record<string, unknown>) => string;

    // This rule is disabled because the caller of `compile()` knows what the type of the `locals` parameter should be when
    // calling the `compile` function.
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    compile: <Locals>(str: string) => (locals: Locals) => string;
    (str: string, locals: Record<string, unknown>): string;
}
declare const _default: Default;
export = _default;
