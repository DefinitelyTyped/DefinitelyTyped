import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsAppPaymentCapabilities
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppPaymentCapabilities extends AbstractCrudObject {
    static get Fields(): Readonly<{
        is_enabled: "is_enabled";
        payment_capability_details: "payment_capability_details";
    }>;
}
