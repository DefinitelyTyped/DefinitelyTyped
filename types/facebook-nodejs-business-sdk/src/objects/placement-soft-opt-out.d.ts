import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PlacementSoftOptOut
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PlacementSoftOptOut extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience_network_positions: "audience_network_positions";
        facebook_positions: "facebook_positions";
        instagram_positions: "instagram_positions";
        messenger_positions: "messenger_positions";
        oculus_positions: "oculus_positions";
        threads_positions: "threads_positions";
        whatsapp_positions: "whatsapp_positions";
    }>;
}
