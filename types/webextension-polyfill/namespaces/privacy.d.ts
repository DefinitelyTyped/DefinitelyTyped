//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { PrivacyNetwork } from "./privacy_network";
import { PrivacyServices } from "./privacy_services";
import { PrivacyWebsites } from "./privacy_websites";

/**
 * Namespace: browser.privacy
 */
export namespace Privacy {
    interface Static {
        network: PrivacyNetwork.Static;
        services: PrivacyServices.Static;
        websites: PrivacyWebsites.Static;
    }
}
