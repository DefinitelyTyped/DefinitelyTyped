import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsAppBusinessPartnerClientVerificationSubmission
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessPartnerClientVerificationSubmission extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get RejectionReasons(): Record<string, any>;
    static get VerificationStatus(): Record<string, any>;
}
