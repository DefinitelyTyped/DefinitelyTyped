// Type definitions for clamp-js 0.7
// Project: https://github.com/xavi160/Clamp.js
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = clamp_js;
declare function clamp_js(element: HTMLElement,
    options?: {
        clamp?: string | number,
        useNativeClamp?: boolean,
        truncationHTML?: string,
        splitOnChars?: string[],
        animate?: boolean
    }, ...args: any[]): any;
