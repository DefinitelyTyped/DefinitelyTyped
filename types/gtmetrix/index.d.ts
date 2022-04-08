// Type definitions for gtmetrix 1.3
// Project: https://github.com/fvdm/nodejs-gtmetrix#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Node.js module for the GTmetrix API to run and access tests.
 *
 * All methods return promises,
 * but you can also provide a callback function instead which gets the standard err and data arguments.
 */
declare function gtmetrix(opts?: gtmetrix.Options): gtmetrix.GTmetrix;

declare namespace gtmetrix {
    /**
     * {@link https://github.com/fvdm/nodejs-gtmetrix#methods}
     */
    interface GTmetrix {
        account: AccountApi;
        browsers: BrowsersApi;
        locations: LocationsApi;
        test: TestApi;
    }

    /**
     * {@link https://github.com/fvdm/nodejs-gtmetrix#configuration}
     */
    interface Options {
        /**
         * API email
         * @default null
         */
        email?: string;
        /**
         * API key
         * @default null
         */
        apikey?: string;

        /**
         * Request timeout in ms
         * @default 5000
         */
        timeout?: number;
    }

    interface BrowsersApi {
        /**
         * Get details about a test browser
         */
        get(browserId: number, callback: (error: MetricsError, data: Readonly<BrowserFeatures>) => void): void;
        get(browserId: number): Promise<Readonly<BrowserFeatures>>;

        /**
         * Get a list of available test browsers.
         */
        list(callback: (error: MetricsError, data: ReadonlyArray<BrowserFeatures>) => void): void;
        list(): Promise<ReadonlyArray<BrowserFeatures>>;
    }

    interface BrowserFeatures {
        features: {
            [feature: string]: boolean;
        };
        browser: string;
        name: string;
        platform: string;
        id: number;
        device?: string;
    }

    interface TestBasicInfo {
        credits_left: number;
        test_id: string;
        poll_state_url: string;
    }

    interface TestDetails {
        resources: {
            [resource: string]: string;
        };
        error?: string;
        results: {
            [result: string]: any;
        };
        state: string;
    }

    interface LocationInfo {
        name: string;
        default: boolean;
        id: string;
        browsers: number[];
    }

    interface AccountApi {
        /**
         * Get account status
         */
        status(callback?: (err: MetricsError, data: Readonly<AccountStatus>) => void): void;
        status(): Promise<Readonly<AccountStatus>>;
    }

    interface AccountStatus {
        api_refill: number;
        api_credits: number;
    }

    interface LocationsApi {
        /**
         * Get a list of available test locations.
         */
        list(callback: (error: MetricsError, data: ReadonlyArray<LocationInfo>) => void): void;
        list(): Promise<ReadonlyArray<LocationInfo>>;
    }

    interface TestApi {
        /**
         * Run a test.
         * {@link https://github.com/fvdm/nodejs-gtmetrix#testcreate}
         */
        create(
            params: { [param: string]: any },
            callback: (error: MetricsError, data: Readonly<TestBasicInfo>) => void,
        ): void;
        create(params: { [param: string]: any }): Promise<Readonly<TestBasicInfo>>;

        /**
         * Get details about a test or one of its resources.
         * When you specify a binary resource, i.e. screenshot,
         * the callback data will be a Buffer instance, so you can post-process the binary data however you like.
         */
        get(
            testId: string,
            resource: BinaryResourceType,
            polling: number,
            callback: (error: MetricsError, data: Buffer) => void,
        ): void;
        get(
            testId: string,
            resource: NonBinaryResourceType,
            polling: number,
            callback: (error: MetricsError, data: Readonly<TestDetails>) => void,
        ): void;
        get(
            testId: string,
            resource: NonBinaryResourceType,
            callback: (error: MetricsError, data: Readonly<TestDetails>) => void,
        ): void;
        get(testId: string, resource: BinaryResourceType, callback: (error: MetricsError, data: Buffer) => void): void;
        get(testId: string, callback: (error: MetricsError, data: Readonly<TestDetails>) => void): void;
        get(testId: string, resource: BinaryResourceType, polling: number): Promise<Buffer>;
        get(testId: string, resource: NonBinaryResourceType, polling: number): Promise<Readonly<TestDetails>>;
        get(testId: string, resource: BinaryResourceType): Promise<Readonly<Buffer>>;
        get(testId: string, resource: NonBinaryResourceType, polling: number): Promise<TestDetails>;
        get(testId: string): Promise<Readonly<TestDetails>>;
    }

    /**
     * Can't process response
     */
    interface InvalidResponseError extends Error {
        readonly statusCode: number;
        readonly contentType: string;
    }

    /**
     * API returned an error
     */
    interface ApiError extends Error {
        readonly statusCode: number;
        readonly contentType: string;
    }

    type MetricsError = Error | InvalidResponseError | ApiError;

    /**
     * https://github.com/fvdm/nodejs-gtmetrix#resources
     */
    type NonBinaryResourceType = 'har' | 'pagespeed' | 'yslow';

    /**
     * https://github.com/fvdm/nodejs-gtmetrix#resources
     */
    type BinaryResourceType =
        | 'filmstrip'
        | 'pagespeed-files'
        | 'report-pdf'
        | 'report-pdf-full'
        | 'screenshot'
        | 'video';
}

export = gtmetrix;
