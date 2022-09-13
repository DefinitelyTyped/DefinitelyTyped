// Type definitions for pa11y 5.3
// Project: https://github.com/pa11y/pa11y
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
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
    debug?: (() => void) | undefined;
    error?: (() => void) | undefined;
    info?: (() => void) | undefined;
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
    actions?: string[] | undefined;
    browser?: Browser | undefined;
    page?: Page | undefined;
    pages?: Page[] | undefined;
    chromeLaunchConfig?: LaunchConfig | undefined;
    headers?: object | undefined;
    hideElements?: string | undefined;
    ignore?: string[] | undefined;
    ignoreUrl?: boolean | undefined;
    includeNotices?: boolean | undefined;
    includeWarnings?: boolean | undefined;
    level?: string | undefined;
    log?: LogConfig | undefined;
    method?: string | undefined;
    postData?: string | undefined;
    reporter?: string | undefined;
    rootElement?: string | undefined;
    runners?: string[] | undefined;
    rules?: string[] | undefined;
    screenCapture?: string | undefined;
    standard?: AccessibilityStandard | undefined;
    threshold?: number | undefined;
    timeout?: number | undefined;
    userAgent?: string | undefined;
    viewport?: Viewport | undefined;
    wait?: number | undefined;
}

declare function pa11y(url: string, options?: Options): Promise<Results>;

declare namespace pa11y {
    function isValidAction(action: string): boolean;
}

export = pa11y;
