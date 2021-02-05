// Type definitions for pa11y 5.3
// Project: https://github.com/pa11y/pa11y
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Browser, Page, } from "puppeteer";
import { Viewport } from "puppeteer/DeviceDescriptors";

type AccessibilityStandard = "Section508" | "WCAG2A" | "WCAG2AA" | "WCAG2AAA";

interface LaunchConfig {
    executablePath: string;
    ignoreHTTPSErrors: boolean;
}

interface LogConfig {
    debug?: () => void;
    error?: () => void;
    info?: () => void;
}

interface ResultIssue {
    code: string;
    context: string;
    message: string;
    selector: string;
    type: string;
    typeCode: number;
}

interface Results {
    documentTitle: string;
    pageUrl: string;
    issues: ResultIssue[];
}

interface Options {
    actions?: string[];
    browser?: Browser;
    page?: Page;
    pages?: Page[];
    chromeLaunchConfig?: LaunchConfig;
    headers?: object;
    hideElements?: string;
    ignore?: string[];
    ignoreUrl?: boolean;
    includeNotices?: boolean;
    includeWarnings?: boolean;
    level?: string;
    log?: LogConfig;
    method?: string;
    postData?: string;
    reporter?: string;
    rootElement?: string;
    runners?: string[];
    rules?: string[];
    screenCapture?: string;
    standard?: AccessibilityStandard;
    threshold?: number;
    timeout?: number;
    userAgent?: string;
    viewport?: Viewport;
    wait?: number;
}

declare function pa11y(url: string, options?: Options): Promise<Results>;

declare namespace pa11y {
    function isValidAction(action: string): boolean;
}

export = pa11y;
