import 'codemirror';

declare module 'codemirror' {
    // Based on https://codemirror.net/demo/simplemode.html
    interface Rule {
        regex?: string | RegExp;
        token?: string | Array<string> | null;
        sol?: boolean;
        next?: string;
        push?: string;
        pop?: boolean;
        mode?: any;
        indent?: boolean;
        dedent?: boolean;
        dedentIfLineStart?: boolean;
    }

    function defineSimpleMode<K extends string>(
        name: string,
        mode: { [P in K]: P extends 'meta' ? Record<string, any> : Array<Rule> } & { start: Array<Rule> },
    ): void;
}
