// Type definitions for linkify-issues 1.3
// Project: https://github.com/sindresorhus/linkify-issues#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = linkifyIssues;

declare function linkifyIssues(input: string, options?: linkifyIssues.TypeStringOptions): string;
declare function linkifyIssues(
    input: string,
    options: linkifyIssues.TypeDomOptions
): DocumentFragment;

declare namespace linkifyIssues {
    interface BaseOptions {
        user: string;
        repo: string;
        attributes?: { [attrName: string]: string | number | boolean | Array<string | number> };
        baseUrl?: string;
    }

    interface TypeStringOptions extends BaseOptions {
        type?: 'string';
    }

    interface TypeDomOptions extends BaseOptions {
        type: 'dom';
    }
}
