// Type definitions for react-native-share 1.1
// Project: https://github.com/react-native-community/react-native-share#readme
// Definitions by: Mark Nelissen <https://github.com/marknelissen>
//                 pera <https://github.com/santiagofm>
//                 MateusAndrade <https://github.com/MateusAndrade>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace Share {
    function open(options: Options | MultipleOptions): Promise<OpenReturn>;
    function shareSingle(options: Options & { social: SupportedSocialApps }): Promise<ShareSingleReturn>;
}

export default Share;

export interface OpenReturn {
    app?: string;
    dismissedAction?: boolean;
}

export interface ShareSingleReturn {
    message: string;
}

export interface Options {
    url?: string;
    urls?: string[];
    type?: string;
    message?: string;
    title?: string;
    subject?: string;
    filename?: string;
    excludedActivityTypes?: string;
    failOnCancel?: boolean;
    showAppsToView?: boolean;
}
export interface MultipleOptions {
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

export type SupportedSocialApps =
    | 'facebook'
    | 'pagesmanager'
    | 'twitter'
    | 'whatsapp'
    | 'instagram'
    | 'googleplus'
    | 'email';
