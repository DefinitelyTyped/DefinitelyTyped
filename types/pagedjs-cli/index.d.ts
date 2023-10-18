import type { EventEmitter } from "events";
import type { Page } from "puppeteer";

export interface PrinterOptions {
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

export interface PDFOptions {
    outlineTags?: string[];
    width?: string | number;
    height?: string | number;
    orientation?: string;
}

export interface RenderInput {
    url?: string;
    html?: string;
}

export class Printer extends EventEmitter {
    constructor(options: PrinterOptions);
    pdf: (input: string | RenderInput, options?: PDFOptions) => Promise<Uint8Array>;
    html: (input: string | RenderInput, stayopen?: boolean) => Promise<string>;
    preview: (input: string | RenderInput) => Promise<Page>;
    close: () => Promise<boolean>;
}
