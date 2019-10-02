// Type definitions for jsdom-global 3.0
// Project: https://www.npmjs.com/package/jsdom-global
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import { CookieJar, VirtualConsole} from 'jsdom';

export = jsdom_global;

declare function jsdom_global(html?: string | Buffer, options?: jsdom_global.JsdomOptions): () => void;

declare namespace jsdom_global {
    interface JsdomOptions {
        contentType: string;
        url?: string;
        referrer?: string;
        includeNodeLocations?: boolean;
        cookieJar?: CookieJar;
        virtualConsole?: VirtualConsole;
        resources?: string;
        runScripts?: string;
        beforeParse?: () => void;
        pretendToBeVisual?: boolean;
        storageQuota?: number;
    }
}
