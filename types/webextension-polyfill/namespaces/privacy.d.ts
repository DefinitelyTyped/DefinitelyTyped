//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.privacy
 *
 * Permissions: "privacy"
 */
import { PrivacyNetwork } from "./privacy_network";
import { PrivacyServices } from "./privacy_services";
import { PrivacyWebsites } from "./privacy_websites";

export namespace Privacy {
    interface Static {
        network: PrivacyNetwork.Static;
        services: PrivacyServices.Static;
        websites: PrivacyWebsites.Static;
    }
}
