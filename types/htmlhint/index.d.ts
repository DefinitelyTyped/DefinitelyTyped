// Type definitions for HTMLHint 0.9
// Project: https://github.com/yaniswang/HTMLHint
// Definitions by: Alan Agius <https://github.com/alan-agius4/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface LintResult {
    evidence: string;
    line: number;
    col: number;
    message: string;
    rule: Rule;
}

export interface FormatOptions {
    indent?: number;
    colors?: boolean;
}

export interface Rule {
    id: string;
    description: string;
    link: string;
}

export interface RuleSet {
    [id: string]: boolean | string;
}

export namespace HTMLHint {
    function addRule(rule: Rule): void;
    function verify(fileContent: string, ruleSet?: RuleSet): LintResult[];
    function format(arrMessages: LintResult[], options?: FormatOptions): string[];
}
