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
