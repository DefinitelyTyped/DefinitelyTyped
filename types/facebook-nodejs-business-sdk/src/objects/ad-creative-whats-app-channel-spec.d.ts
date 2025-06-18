import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeWhatsAppChannelSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeWhatsAppChannelSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        channel_id: "channel_id";
        channel_url: "channel_url";
    }>;
}
