import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsAppBusinessProfile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessProfile extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): WhatsAppBusinessProfile;
    update(fields: Array<string>, params?: Record<string, any>): WhatsAppBusinessProfile;
}
