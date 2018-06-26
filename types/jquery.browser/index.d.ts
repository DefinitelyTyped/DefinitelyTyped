// Type definitions for jQuery Browser Plugin 0.1
// Project: https://github.com/gabceb/jquery-browser-plugin
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export interface Matchs {
    version?: string;
    versionNumber?: number;
    platform?: string;
    mobile?: boolean;
    desktop?: boolean;
    webkit?: boolean;
    name?: string;
    android?: boolean;
    bb?: boolean;
    blackberry?: boolean;
    ipad?: boolean;
    iphone?: boolean;
    ipod?: boolean;
    kindle?: boolean;
    playbook?: boolean;
    silk?: boolean;
    ['windows phone']?: boolean;
    cros?: boolean;
    mac?: boolean;
    linux?: boolean;
    win?: boolean;
    chrome?: boolean;
    opr?: boolean;
    safari?: boolean;
    rv?: boolean;
    iemobile?: boolean;
    msie?: boolean;
    msedge?: boolean;
    uaMatch: ((ua?: string) => Matchs);
}
declare global {
    interface Window {
        jQBrowser: Matchs;
    }
    interface JQueryStatic {
        browser: Matchs;
    }
}
