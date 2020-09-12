// Type definitions for metascraper-media-provider 5.14
// Project: https://nicedoc.io/microlinkhq/metascraper/packages/metascraper-media-provider
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import metascraper = require('metascraper');

declare namespace getData {
    type OnErrorFunction = (url: string, error: Error) => void;
    type GetProxyFunction = (data: GetProxyData) => string;

    interface GetProxyData {
        url: string;
        retryCount: number;
    }

    interface Options {
        /**
         * It specifies cache based on file system to be used by
         * [youtube-dl](https://github.com/microlinkhq/metascraper/blob/master/packages/metascraper-media-provider/youtube-dl).
         */
        cacheDir?: string;
        /**
         * It will be called to determinate if a proxy should be used for
         * resolving the next request URL.
         */
        getProxy?: GetProxyFunction;
        /** A function to be called when something wrong happens. */
        onError?: OnErrorFunction;
        /**
         * The maximum time allowed to wait until considering the request as
         * timed out. Default is `30000`.
         */
        timeout?: number;
        /** It specifies a custom user agent. */
        userAgent?: string;
    }
}

declare function getData(options?: getData.Options): metascraper.Rule;

export = getData;
