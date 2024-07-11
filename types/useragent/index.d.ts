/**
 * Small nifty thick that allows us to download a fresh set regexs from t3h
 * Int3rNetz when we want to. We will be using the compiled version by default
 * but users can opt-in for updates.
 *
 * @param [refresh] Refresh the dataset from the remote
 */
declare function useragent(refresh?: boolean): void;

declare namespace useragent {
    class Agent {
        family: string;
        major: string;
        minor: string;
        patch: string;
        source: string;
        os: OperatingSystem;
        device: Device;

        /**
         * The representation of a parsed user agent.
         * @param [family=`Other`] The name of the browser
         * @param [major='0'] Major version of the browser
         * @param [minor='0'] Minor version of the browser
         * @param [patch='0'] Patch version of the browser
         * @param [source] The actual user agent string
         */
        constructor(family?: string, major?: string, minor?: string, patch?: string, source?: string);

        /**
         * Generates a string output of the parsed user agent.
         */
        toAgent(): string;

        /**
         * Generates a string output of the parser user agent and operating system.
         */
        toString(): string;

        /**
         * Outputs a compiled veersion number of the user agent.
         */
        toVersion(): string;

        /**
         * The representation of a parsed Operating System.
         */
        toJSON(): {
            family: string;
            major: string;
            minor: string;
            patch: string;
            device: string;
            os: string;
        };
    }

    class OperatingSystem {
        family: string;
        major: string;
        minor: string;
        patch: string;

        /**
         * The representation of a parsed Operating System.
         * @param [family='Other'] The name of the os
         * @param [major='0'] Major version of the os
         * @param [minor='0'] Minor version of the os
         * @param [patch='0'] Patch version of the os
         */
        constructor(family?: string, major?: string, minor?: string, patch?: string);

        /**
         * Generates a stringified version of the Operating System.
         */
        toString(): string;

        /**
         * Generates the version of the Operating System.
         */
        toVersion(): string;

        /**
         * Outputs a JSON string of the OS, values are defaulted to undefined so they are not outputed in the stringify.
         */
        toJSON(): {
            family: string;
            major: string | undefined;
            minor: string | undefined;
            patch: string | undefined;
        };
    }

    class Device {
        family: string;
        major: string;
        minor: string;
        patch: string;

        /**
         * The representation of a parsed Device.
         * @param [family='Other'] The name of the device
         * @param [major='0'] Major version of the device
         * @param [minor='0'] Minor version of the device
         * @param [patch='0'] Patch version of the device
         */
        constructor(family?: string, major?: string, minor?: string, patch?: string);

        /**
         * Generates a stringified version of the Device.
         */
        toString(): string;

        /**
         * Generates the version of the Device.
         */
        toVersion(): string;

        /**
         * Outputs a JSON string of the Device, values are defaulted to undefined so they are not outputed in the stringify.
         */
        toJSON(): {
            family: string;
            major: string | undefined;
            minor: string | undefined;
            patch: string | undefined;
        };
    }

    /**
     * Parses the user agent string with the generated parsers from the ua-parser project on google code.
     * @param userAgent The user agent string
     * @param jsAgent Optional UA from js to detect chrome frame
     */
    function parse(userAgent?: string, jsAgent?: string): Agent;

    /**
     * If you are doing a lot of lookups you might want to cache the results of the parsed user agent string instead, in memory.
     * @param userAgent The user agent string
     * @param jsAgent Optional UA from js to detect chrome frame
     */
    function lookup(userAgent?: string, jsAgent?: string): Agent;

    /**
     * Does a more inaccurate but more common check for useragents identification.
     * @param useragent The user agent
     */
    function is(useragent?: string): Details;
    interface Details {
        chrome: boolean;
        firefox: boolean;
        ie: boolean;
        mobile_safari: boolean;
        mozilla: boolean;
        opera: boolean;
        safari: boolean;
        webkit: boolean;
        android: boolean;
        version: string;
    }

    /**
     * Transform a JSON object back to a valid userAgent string
     * @param obj A JSON object or stringified JSON object
     */
    function fromJSON(
        obj:
            | string
            | {
                family: string;
                major: string;
                minor: string;
                patch: string;
                device?: string | undefined;
                os?: string | undefined;
            },
    ): Agent;

    /**
     * Library version
     */
    const version: number;
}

export = useragent;
