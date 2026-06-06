import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * {@link https://github.com/karma-runner/karma-browserstack-launcher#global-options}
         */
        browserStack?: BrowserStackOptions | undefined;
    }

    interface CustomLauncher {
        /** name of the browser */
        browser?: string | null | undefined;
        /** version of the browser */
        browser_version?: string | null | undefined;
        /** name of the device */
        device?: string | null | undefined;
        /** allows the session to run on a real mobile device instead of an emulator / simulator */
        real_mobile?: boolean | undefined;
        /** allows the session to run on a real mobile device instead of an emulator / simulator */
        realMobile?: boolean | undefined;
        /** which platform */
        os?: string | null | undefined;
        /** version of the platform */
        os_version?: string | null | undefined;
        /** the BS worker build name (optional, defaults to global) */
        build?: string | undefined;
        /** the BS worker name (optional, defaults to global) */
        name?: string | undefined;
        /** the BS worker project name (optional, defaults to global) */
        project?: string | undefined;
        /**
         * you can also pass through any additional options supported by browserstack. (EG. `url`, `resolution`, etc.)
         * See {@link browserstack.com/automate/capabilities} for a full list of supported options.
         */
        [option: string]: any;
    }

    interface BrowserStackOptions {
        /** BS username, you can also use BROWSERSTACK_USERNAME env variable */
        username?: string | undefined;
        /**  BS access key, you can also use BROWSERSTACK_ACCESS_KEY env variable */
        accessKey?: string | undefined;
        /** do you wanna establish the BrowserStack tunnel */
        startTunnel?: boolean | undefined;
        /**
         * in case you want to start the BrowserStack tunnel outside `karma` by setting `startTunnel` to `false`,
         * set the identifier passed to the `-localIdentifier` option here
         */
        tunnelIdentifier?: string | undefined;
        /**
         * @alias tunnelIdentifier
         */
        localIdentifier?: string | undefined;
        /** how many times do you want to retry to capture the browser */
        retryLimit?: number | undefined;
        /** the browser capture timeout */
        captureTimeout?: number | undefined;
        /** the BS worker timeout */
        timeout?: number | undefined;
        /** the BS worker build name */
        build?: string | undefined;
        /** the BS worker name  */
        name?: string | undefined;
        /** the BS worker project name */
        project?: string | undefined;
        /** the host of your proxy for communicating with BrowserStack REST API and BrowserStackLocal */
        proxyHost?: string | undefined;
        /** the port of your proxy */
        proxyPort?: number | undefined;
        /** the username used for authentication with your proxy */
        proxyUser?: string | undefined;
        /** the password used for authentication with your proxy */
        proxyPass?: string | undefined;
        /** the protocol of your proxy (optional. default: http. valid: http or https) */
        proxyProtocol?: string | undefined;
        /** force traffic through the local BrowserStack tunnel, passes flag through to BrowserStackTunnel */
        forcelocal?: boolean | undefined;
        /** enable video recording of session on BrowserStack */
        video?: boolean | undefined;
    }
}
