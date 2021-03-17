// Type definitions for data-urls 2.0
// Project: https://github.com/jsdom/data-urls#readme
// Definitions by: Jaime Filho <https://github.com/jaimeadf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

/// <reference types="node" />

import MIMEType = require('whatwg-mimetype');
import { URLRecord } from 'whatwg-url';

declare function parseDataURL(stringInput: string): parseDataURL.DataURL | null;

declare namespace parseDataURL {
    interface DataURL {
        mimeType: MIMEType;
        body: Buffer;
    }

    function fromURLRecord(urlRecord: URLRecord): DataURL | null;
}

export = parseDataURL;
