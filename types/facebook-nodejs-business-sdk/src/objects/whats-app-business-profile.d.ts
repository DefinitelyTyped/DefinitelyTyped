import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * WhatsAppBusinessProfile
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WhatsAppBusinessProfile extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name_verification: "name_verification";
        whatsapp_business_api_data: "whatsapp_business_api_data";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<WhatsAppBusinessProfile>;
    update(fields: string[], params?: Record<any, any>): Promise<WhatsAppBusinessProfile>;
}
