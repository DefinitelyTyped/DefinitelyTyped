import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * TargetingSubscriberUniverse
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingSubscriberUniverse extends AbstractCrudObject {
    static get Fields(): Readonly<{
        messenger_subscriber_source: "messenger_subscriber_source";
        whatsapp_subscriber_pool: "whatsapp_subscriber_pool";
        whatsapp_subscriber_source: "whatsapp_subscriber_source";
    }>;
}
