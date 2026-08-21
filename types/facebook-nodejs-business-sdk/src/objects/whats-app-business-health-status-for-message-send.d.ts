import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsAppBusinessHealthStatusForMessageSend
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessHealthStatusForMessageSend extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_send_message: "can_send_message";
        entities: "entities";
    }>;
}
