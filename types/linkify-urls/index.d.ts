// Type definitions for linkify-urls 3.0
// Project: https://github.com/sindresorhus/linkify-urls#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = linkifyUrls;

declare function linkifyUrls(input: string, options?: linkifyUrls.TypeStringOptions): string;
declare function linkifyUrls(input: string, options: linkifyUrls.TypeDomOptions): DocumentFragment;

declare namespace linkifyUrls {
    interface BaseOptions {
        attributes?: { [attrName: string]: string | number | boolean | Array<string | number> };
        value?: string | ((url: string) => string);
    }

    interface TypeStringOptions extends BaseOptions {
        type?: 'string';
    }

    interface TypeDomOptions extends BaseOptions {
        type: 'dom';
    }
}
