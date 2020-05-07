// Type definitions for karma-browserstack-launcher 1.5
// Project: https://github.com/karma-runner/karma-browserstack-launcher#readme
// Definitions by: Peter Blazejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * {@link https://github.com/karma-runner/karma-browserstack-launcher#global-options}
         */
        browserStack?: BrowserStackOptions;
    }

    interface CustomLauncher {
        /** name of the browser */
        browser?: string | null;
        /** version of the browser */
        browser_version?: string | null;
        /** name of the device */
        device?: string | null;
        /** allows the session to run on a real mobile device instead of an emulator / simulator */
        real_mobile?: boolean;
        /** allows the session to run on a real mobile device instead of an emulator / simulator */
        realMobile?: boolean;
        /** which platform */
        os?: string | null;
        /** version of the platform */
        os_version?: string | null;
        /** the BS worker build name (optional, defaults to global) */
        build?: string;
        /** the BS worker name (optional, defaults to global) */
        name?: string;
        /** the BS worker project name (optional, defaults to global) */
        project?: string;
        /**
         * you can also pass through any additional options supported by browserstack. (EG. url, resolution, etc.)
         * See {@link browserstack.com/automate/capabilities} for a full list of supported options.
         */
        [option: string]: any;
    }

    interface BrowserStackOptions {
        /** BS username, you can also use BROWSERSTACK_USERNAME env variable */
        username: string;
        /**  BS access key, you can also use BROWSERSTACK_ACCESS_KEY env variable */
        accessKey: string;
        /** do you wanna establish the BrowserStack tunnel */
        startTunnel?: boolean;
        /**
         * in case you want to start the BrowserStack tunnel outside karma
         * by setting `startTunnel` to `false`,
         * set the identifier passed to the -localIdentifier option here (optional)
         */
        tunnelIdentifier?: string;
        /** how many times do you want to retry to capture the browser */
        retryLimit?: number;
        /** the browser capture timeout */
        captureTimeout?: number;
        /** the BS worker timeout */
        timeout?: number;
        /** the BS worker build name */
        build?: string;
        /** the BS worker name  */
        name?: string;
        /** the BS worker project name */
        project?: string;
        /** the host of your proxy for communicating with BrowserStack REST API and BrowserStackLocal */
        proxyHost?: string;
        /** the port of your proxy */
        proxyPort?: number;
        /** the username used for authentication with your proxy */
        proxyUser?: string;
        /** the password used for authentication with your proxy */
        proxyPass?: string;
        /** the protocol of your proxy (optional. default: http. valid: http or https) */
        proxyProtocol?: string;
        /** force traffic through the local BrowserStack tunnel, passes flag through to BrowserStackTunnel */
        forcelocal?: boolean;
        /** enable video recording of session on BrowserStack */
        video?: boolean;
    }
}
