// Type definitions for react-native-share 1.0
// Project: https://github.com/react-native-community/react-native-share#readme
// Definitions by: Mark Nelissen <https://github.com/marknelissen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Share {
    function open(options: OpenOptions): Promise<any>;
    function shareSingle(options: ShareSingleOptions): Promise<any>;
}

export default Share;

interface OpenOptions {
    url: string;
    type?: string;
    message: string;
    title?: string;
    subject?: string;
    excludedActivityTypes?: string;
    showAppsToview?: boolean;
}

interface ShareSingleOptions {
    url: string;
    type?: string;
    message: string;
    title?: string;
    subject?: string;
    social: SupportedSocialApps;
}

type SupportedSocialApps = 'twitter' | 'facebook' | 'whatsapp' | 'googleplus' | 'email';
