// Type definitions for pagedjs-cli 0.3
// Project: https://pagedjs.org
// Definitions by: Valentin Schabschneider <https://github.com/valentinschabschneider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import EventEmitter from 'events';

interface PrinterOptions {
    debug?: boolean;
    headless?: boolean;
    allowLocal?: boolean;
    allowRemote?: boolean;
    additionalScripts?: string[];
    allowedPaths?: string[];
    allowedDomains?: string[];
    ignoreHTTPSErrors?: boolean;
    browserEndpoint?: string;
    browserArgs?: string[];
    overrideDefaultBackgroundColor?: boolean;
    timeout?: number;
    closeAfter?: boolean;
    emulateMedia?: string;
    styles?: string[];
    enableWarnings?: boolean;
}

interface PDFOptions {
    outlineTags?: string[];
    width?: string | number;
    height?: string | number;
    orientation?: string;
}

declare class Printer extends EventEmitter {
    constructor(options: PrinterOptions);
    pdf: (input: string, options?: PDFOptions) => Uint8Array;
    html: (input: string, stayopen?: boolean) => string;
    preview: (input: string) => string;
}
