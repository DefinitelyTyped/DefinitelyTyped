// Type definitions for react-native-app-link 1.0
// Project: https://github.com/datwheat/react-native-app-link#readme
// Definitions by: John Wright <https://github.com/johngeorgewright>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface AppLinkOptions {
    readonly appName: string;
    readonly appStoreId: number;
    readonly appStoreLocale: string;
    readonly playStoreId: string;
}

declare namespace AppLink {
    function maybeOpenURL(url: string, options: AppLinkOptions): Promise<void>;
    function openInStore(options: AppLinkOptions): Promise<void>;
}

export default AppLink;

import maybeOpenURL = AppLink.maybeOpenURL;
import openInStore = AppLink.openInStore;
export { maybeOpenURL, openInStore };
