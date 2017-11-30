// Type definitions for inline-css
// Project: https://github.com/jonkemp/inline-css
// Definitions by: Philip Spain <https://github.com/philipisapain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="bluebird" />


import Promise = require('bluebird');

declare namespace InlineCss {
    export interface Options {
        url: string;
        extraCss?: string;
        applyStyleTags?: boolean;
        applyLinkTags?: boolean;
        removeStyleTags?: boolean;
        removeLinkTags?: boolean;
        preserveMediaQueries?: boolean;
        applyWidthAttributes?: boolean;
        applyTableAttributes?: boolean;
    }
}

declare function InlineCss(html: string, options: InlineCss.Options): Promise<string>;

export = InlineCss;
