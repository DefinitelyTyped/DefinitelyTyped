/// <reference types="jquery" />

export interface Matchs {
    version?: string | undefined;
    versionNumber?: number | undefined;
    platform?: string | undefined;
    mobile?: boolean | undefined;
    desktop?: boolean | undefined;
    webkit?: boolean | undefined;
    name?: string | undefined;
    android?: boolean | undefined;
    bb?: boolean | undefined;
    blackberry?: boolean | undefined;
    ipad?: boolean | undefined;
    iphone?: boolean | undefined;
    ipod?: boolean | undefined;
    kindle?: boolean | undefined;
    playbook?: boolean | undefined;
    silk?: boolean | undefined;
    ["windows phone"]?: boolean | undefined;
    cros?: boolean | undefined;
    mac?: boolean | undefined;
    linux?: boolean | undefined;
    win?: boolean | undefined;
    chrome?: boolean | undefined;
    opr?: boolean | undefined;
    safari?: boolean | undefined;
    rv?: boolean | undefined;
    iemobile?: boolean | undefined;
    msie?: boolean | undefined;
    msedge?: boolean | undefined;
    uaMatch: (ua?: string) => Matchs;
}
declare global {
    interface Window {
        jQBrowser: Matchs;
    }
    interface JQueryStatic {
        browser: Matchs;
    }
}
