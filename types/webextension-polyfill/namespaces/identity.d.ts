//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.identity
 *
 * Use the chrome.identity API to get OAuth2 access tokens.
 * Permissions: "identity"
 */
import { Manifest } from "./manifest";

export namespace Identity {
    /**
     * An object encapsulating an OAuth account id.
     */
    interface AccountInfo {
        /**
         * A unique identifier for the account. This ID will not change for the lifetime of the account.
         */
        id: string;
    }

    interface LaunchWebAuthFlowDetailsType {
        url: Manifest.HttpURL;

        /**
         * Optional.
         */
        interactive?: boolean;
    }

    interface Static {
        /**
         * Starts an auth flow at the specified URL.
         *
         * @param details
         */
        launchWebAuthFlow(details: LaunchWebAuthFlowDetailsType): Promise<string>;

        /**
         * Generates a redirect URL to be used in |launchWebAuthFlow|.
         *
         * @param path Optional. The path appended to the end of the generated URL.
         */
        getRedirectURL(path?: string): string;
    }
}
