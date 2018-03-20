// Type definitions for linkify-it 2.0.3
// Project: https://github.com/markdown-it/linkify-it
// Definitions by: Lindsey Smith <https://github.com/praxxis>, Robert Coie <https://github.com/rapropos/typed-linkify-it>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const LinkifyIt: {
  (schemas?: LinkifyIt.SchemaRules, options?: LinkifyIt.Options): LinkifyIt.LinkifyIt;
  new (schemas?: LinkifyIt.SchemaRules, options?: LinkifyIt.Options): LinkifyIt.LinkifyIt;
};

declare namespace LinkifyIt {
  interface FullRule {
    validate(text: string, pos: number, self: LinkifyIt): number;
    normalize?(match: string): string;
  }

  type Rule = string | RegExp | FullRule;

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
    match(text: string): Match[];
    normalize(raw: string): string;
    pretest(text: string): boolean;
    set(options: Options): LinkifyIt;
    test(text: string): boolean;
    testSchemaAt(text: string, schemaName: string, pos: number): number;
    tlds(list: string | string[], keepOld?: boolean): LinkifyIt;
  }
}

export = LinkifyIt;
