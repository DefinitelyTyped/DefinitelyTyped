import '../../';

declare module '../../' {
    // Based on https://codemirror.net/demo/simplemode.html
    interface Rule {
        regex?: string | RegExp | undefined;
        token?: string | string[] | null | undefined;
        sol?: boolean | undefined;
        next?: string | undefined;
        push?: string | undefined;
        pop?: boolean | undefined;
        mode?: {
            spec: string | ModeSpec<any>;
            end?: RegExp | undefined;
            persistent?: boolean | undefined;
        } | undefined;
        indent?: boolean | undefined;
        dedent?: boolean | undefined;
        dedentIfLineStart?: boolean | undefined;
    }

    function defineSimpleMode<K extends string>(
        name: string,
        // eslint-disable-next-line no-unnecessary-generics
        mode: { [P in K]: P extends 'meta' ? Record<string, any> : Rule[] } & { start: Rule[] },
    ): void;
}
