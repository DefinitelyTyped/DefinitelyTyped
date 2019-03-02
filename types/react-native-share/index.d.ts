// Type definitions for react-native-share 1.1
// Project: https://github.com/react-native-community/react-native-share#readme
// Definitions by: Mark Nelissen <https://github.com/marknelissen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace Share {
    function open(options: Options | MultipleOptions): Promise<OpenReturn>;
    function shareSingle(
        options: Options & { social: SupportedSocialApps }
    ): Promise<ShareSingleReturn>;
}

export default Share;

interface OpenReturn {
    app?: string;
    dismissedAction?: boolean;
}

interface ShareSingleReturn {
    message: string;
}

interface Options {
    url: string;
    urls?: string[];
    type?: string;
    message?: string;
    title?: string;
    subject?: string;
    excludedActivityTypes?: string;
    failOnCancel?: boolean;
    showAppsToView?: boolean;
}
interface MultipleOptions {
    url?: string;
    urls: string[];
    type?: string;
    message?: string;
    title?: string;
    subject?: string;
    excludedActivityTypes?: string;
    failOnCancel?: boolean;
    showAppsToView?: boolean;
}

type SupportedSocialApps =
    | "facebook"
    | "pagesmanager"
    | "twitter"
    | "whatsapp"
    | "instagram"
    | "googleplus"
    | "email";
