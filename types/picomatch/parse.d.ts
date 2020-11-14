interface Token {
    type: string;
    value: string;
    output: any;
}

interface State {
    globstar: boolean;
    consumed: string;
    tokens: Token[];
    index: number;
    start: number;
    brackets: number;
    parens: number;
    braces: number;
    backtrack: boolean;
    output: string;
}

declare function parse(input: string, options: { maxLength: number }): State;
export = parse;
