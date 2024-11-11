import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingMarketingMessageChannels
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingMarketingMessageChannels extends AbstractCrudObject {
    static get Fields(): Readonly<{
        whatsapp: "whatsapp";
    }>;
}
