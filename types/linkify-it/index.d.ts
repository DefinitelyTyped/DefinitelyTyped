// Type definitions for linkify-it 2.1.0
// Project: https://github.com/markdown-it/linkify-it
// Definitions by: Lindsey Smith <https://github.com/praxxis>, Robert Coie <https://github.com/rapropos/typed-linkify-it>, Alex Plumb <https://github.com/alexplumb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare const LinkifyIt: {
    (
        schemas?: LinkifyIt.SchemaRules | LinkifyIt.Options,
        options?: LinkifyIt.Options
    ): LinkifyIt.LinkifyIt;
    new (
        schemas?: LinkifyIt.SchemaRules | LinkifyIt.Options,
        options?: LinkifyIt.Options
    ): LinkifyIt.LinkifyIt;
};

declare namespace LinkifyIt {
    type Validate = (text: string, pos: number, self: LinkifyIt) => number | boolean;

    interface FullRule {
        validate: string | RegExp | Validate;
        normalize?: (match: Match) => void;
    }

    type Rule = string | FullRule;

    interface SchemaRules {
        [schema: string]: Rule;
    }

    interface Options {
        fuzzyLink?: boolean;
        fuzzyIP?: boolean;
        fuzzyEmail?: boolean;
    }

    interface Match {
        index: number;
        lastIndex: number;
        raw: string;
        schema: string;
        text: string;
        url: string;
    }

    interface LinkifyIt {
        add(schema: string, rule: Rule): LinkifyIt;
        match(text: string): Match[] | null;
        normalize(raw: string): string;
        pretest(text: string): boolean;
        set(options: Options): LinkifyIt;
        test(text: string): boolean;
        testSchemaAt(text: string, schemaName: string, pos: number): number;
        tlds(list: string | string[], keepOld?: boolean): LinkifyIt;
        re: {
            [key: string]: RegExp;
        };
    }
}

export = LinkifyIt;
