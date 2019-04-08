// Type definitions for get-urls 8.0
// Project: https://github.com/sindresorhus/get-urls#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Options as NormalizeUrlOptions } from 'normalize-url';

export = getUrls;

declare function getUrls(text: string, options?: getUrls.Options): Set<string>;

declare namespace getUrls {
    interface Options extends NormalizeUrlOptions {
        extractFromQueryString?: boolean;
        exclude?: string[];
    }
}
