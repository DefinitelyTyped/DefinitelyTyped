import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * WhatsAppBusinessProfile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessProfile extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name_verification: "name_verification";
        whatsapp_business_api_data: "whatsapp_business_api_data";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): WhatsAppBusinessProfile;
    update(fields: Array<string>, params?: Record<any, any>): WhatsAppBusinessProfile;
}
