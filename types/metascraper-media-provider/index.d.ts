import metascraper = require("metascraper");

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
        cacheDir?: string | undefined;
        /**
         * It will be called to determinate if a proxy should be used for
         * resolving the next request URL.
         */
        getProxy?: GetProxyFunction | undefined;
        /** A function to be called when something wrong happens. */
        onError?: OnErrorFunction | undefined;
        /**
         * The maximum time allowed to wait until considering the request as
         * timed out. Default is `30000`.
         */
        timeout?: number | undefined;
        /** It specifies a custom user agent. */
        userAgent?: string | undefined;
    }
}

declare function getData(options?: getData.Options): metascraper.Rule;

export = getData;
