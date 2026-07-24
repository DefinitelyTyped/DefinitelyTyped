export {};

declare global {
    // https://wicg.github.io/ua-client-hints/#dictdef-navigatoruabrandversion
    interface NavigatorUABrandVersion {
        brand: string;
        version: string;
    }
    // https://wicg.github.io/ua-client-hints/#dictdef-uadatavalues
    interface UADataValues {
        architecture: string;
        bitness: string;
        brands: NavigatorUABrandVersion[];
        formFactors: string[];
        fullVersionList: NavigatorUABrandVersion[];
        model: string;
        mobile: boolean;
        platform: string;
        platformVersion: string;
        /**
         * @deprecated in favor of fullVersionList
         */
        uaFullVersion: string;
        wow64: boolean;
    }

    // https://wicg.github.io/ua-client-hints/#dictdef-ualowentropyjson
    interface UALowEntropyJSON {
        brands: NavigatorUABrandVersion[];
        mobile: boolean;
        platform: string;
    }

    // https://wicg.github.io/ua-client-hints/#navigatoruadata
    interface NavigatorUAData {
        readonly brands: NavigatorUABrandVersion[];
        readonly mobile: boolean;
        readonly platform: string;
        getHighEntropyValues(hints: string[]): Promise<UADataValues>;
        toJSON(): UALowEntropyJSON;
    }

    // https://wicg.github.io/ua-client-hints/#navigatorua
    interface NavigatorUA {
        /**
         * Available only in secure contexts.
         */
        readonly userAgentData: NavigatorUAData;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Navigator extends NavigatorUA {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface WorkerNavigator extends NavigatorUA {}
}
