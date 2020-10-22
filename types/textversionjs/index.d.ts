// Type definitions for textversionjs 1.1
// Project: https://github.com/EDMdesigner/textversionjs
// Definitions by: Aaron Osher <https://github.com/aaronosher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================
    import * as textVersion from "textversionjs";
 =============================================== */

declare function textversionjs(html: string, styleConfig?: textversionjs.styleConfig): string;

declare namespace textversionjs {
    type linkProcess = (href: string, linkText: string) => string;

    type imgProcess = (src: string, alt: string) => string;

    interface styleConfig {
        linkProcess?: linkProcess;
        imgProcess?: imgProcess;
        headingStyle?: 'underline' | 'linebreak' |  'hashify';
        listStyle?: 'indentation' | 'linebreak';
        uIndentionChar?: string;
        oIndentionChar?: string;
        listIndentionTabs?: number;
        keepNbsps?: boolean;
    }
}

export = textversionjs;
