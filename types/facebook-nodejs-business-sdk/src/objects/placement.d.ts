import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * Placement
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Placement extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience_network_positions: "audience_network_positions";
        device_platforms: "device_platforms";
        effective_audience_network_positions: "effective_audience_network_positions";
        effective_device_platforms: "effective_device_platforms";
        effective_facebook_positions: "effective_facebook_positions";
        effective_instagram_positions: "effective_instagram_positions";
        effective_messenger_positions: "effective_messenger_positions";
        effective_oculus_positions: "effective_oculus_positions";
        effective_publisher_platforms: "effective_publisher_platforms";
        effective_threads_positions: "effective_threads_positions";
        effective_whatsapp_positions: "effective_whatsapp_positions";
        facebook_positions: "facebook_positions";
        instagram_positions: "instagram_positions";
        messenger_positions: "messenger_positions";
        oculus_positions: "oculus_positions";
        publisher_platforms: "publisher_platforms";
        threads_positions: "threads_positions";
        whatsapp_positions: "whatsapp_positions";
    }>;
    static get DevicePlatforms(): Readonly<{
        desktop: "desktop";
        mobile: "mobile";
    }>;
    static get EffectiveDevicePlatforms(): Readonly<{
        desktop: "desktop";
        mobile: "mobile";
    }>;
}
