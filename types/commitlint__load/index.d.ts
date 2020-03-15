// Type definitions for @commitlint/load 8.3
// Project: https://github.com/conventional-changelog/commitlint
// Definitions by: Martin McWhorter <https://github.com/martinmcwhorter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function commitlintLoad(): Promise<CommitlintConfig>;

export type Case =
    | 'lower-case'
    | 'lowercase'
    | 'lowerCase'
    | 'upper-case'
    | 'uppercase'
    | 'camel-case'
    | 'kebab-case'
    | 'pascal-case'
    | 'sentence-case'
    | 'sentencecase'
    | 'start-case'
    | 'snake-case';

export type Applicability = 'always' | 'never';

export type Rule<T> = [Level | 0 | 1 | 2, Applicability, T];

export interface Rules {
    'body-leading-blank'?: Rule<undefined>;
    'body-max-length'?: Rule<number>;
    'body-max-line-length'?: Rule<number>;
    'body-min-length'?: Rule<number>;
    'footer-leading-blank'?: Rule<undefined>;
    'footer-max-length'?: Rule<number>;
    'footer-min-length'?: Rule<number>;
    'footer-max-line-length'?: Rule<number>;
    'header-case'?: Rule<Case>;
    'header-full-stop'?: Rule<string>;
    'header-max-length'?: Rule<number>;
    'header-min-length'?: Rule<number>;
    'references-empty'?: Rule<undefined>;
    'scope-enum'?: Rule<string[]>;
    'scope-case'?: Rule<Case>;
    'scope-empty'?: Rule<undefined>;
    'scope-max-length'?: Rule<number>;
    'scope-min-length'?: Rule<number>;
    'subject-case'?: Rule<Case | Case[]>;
    'subject-empty'?: Rule<undefined>;
    'subject-full-stop'?: Rule<string>;
    'subject-max-length'?: Rule<number>;
    'subject-min-length'?: Rule<number>;
    'type-enum'?: Rule<string[]>;
    'type-case'?: Rule<Case>;
    'type-empty'?: Rule<undefined>;
    'type-max-length'?: Rule<number>;
    'type-min-length'?: Rule<number>;
    'signed-off-by'?: Rule<string>;
}

export interface CommitlintConfig {
    extends?: string[];
    rules: Rules;
}

// tslint:disable-next-line:no-const-enum
export const enum Level {
    Disable = 0,
    Warn = 1,
    Error = 2,
}
