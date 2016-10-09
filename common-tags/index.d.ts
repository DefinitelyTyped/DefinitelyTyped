// Type definitions for common-tags v1.2.1
// Project: https://github.com/declandewet/common-tags
// Definitions by: Viktor Zozuliak <https://github.com/zuzusik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'common-tags' {
    type TemplateTag = (literals: TemplateStringsArray, ...placeholders: any[]) => string;

    type TemplateTransformer = {
        onSubstitution?: (substitution: string, resultSoFar: string) => string;
        onEndResult?: (endResult : string) => string;
    }

    /* Built-in Tags */
    export var commaLists: TemplateTag;

    export var commaListsAnd: TemplateTag;

    export var commaListsOr: TemplateTag;

    export var html: TemplateTag;

    export var codeBlock: TemplateTag;

    export var source: TemplateTag;

    export var oneLine: TemplateTag;

    export var oneLineTrim: TemplateTag;

    export var oneLineCommaLists: TemplateTag;

    export var oneLineCommaListsOr: TemplateTag;

    export var oneLineCommaListsAnd: TemplateTag;

    export var inlineLists: TemplateTag;

    export var oneLineInlineLists: TemplateTag;

    export var stripIndent: TemplateTag;

    export var stripIndents: TemplateTag;

    /* New Tag Constructor */
    export var TemplateTag: {
        new(): TemplateTag;
        new(...transformers: TemplateTransformer[]): TemplateTag;
        new(transformers: TemplateTransformer[]): TemplateTag;
    };

    /* Built-in Transformers */
    export var trimResultTransformer: (side?: 'left'|'right') => TemplateTransformer;

    export var stripIndentTransformer: (type?: 'initial'|'all') => TemplateTransformer;

    export var replaceResultTransformer: (replaceWhat: string, replaceWith: string) => TemplateTransformer;

    export var inlineArrayTransformer: (opts?: {separator?: string, conjunction?: string}) => TemplateTransformer;

    export var splitStringTransformer: (splitBy: string) => TemplateTransformer;
}
