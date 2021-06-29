import '../../';

declare module '../../' {
    // Based on https://codemirror.net/demo/simplemode.html
    interface Rule {
        regex?: string | RegExp;
        token?: string | string[] | null;
        sol?: boolean;
        next?: string;
        push?: string;
        pop?: boolean;
        mode?: {
            spec: string | ModeSpec<any>;
            end?: RegExp;
            persistent?: boolean;
        };
        indent?: boolean;
        dedent?: boolean;
        dedentIfLineStart?: boolean;
    }

    function defineSimpleMode<K extends string>(
        name: string,
        // tslint:disable-next-line:no-unnecessary-generics
        mode: { [P in K]: P extends 'meta' ? Record<string, any> : Rule[] } & { start: Rule[] },
    ): void;
}
