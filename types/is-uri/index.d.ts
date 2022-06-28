// Type definitions for is-uri 1.0
// Project: https://github.com/Kikobeats/is-uri
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { URI, Options } from 'parse-uri';

declare function isURI(uri: string | URI, opts?: Options): boolean;

export = isURI;
