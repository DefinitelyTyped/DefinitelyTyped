import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CTWAWhatsAppNumbersInfo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CTWAWhatsAppNumbersInfo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_manage_wa_flows: "can_manage_wa_flows";
        formatted_whatsapp_number: "formatted_whatsapp_number";
        is_business_number: "is_business_number";
        page_whatsapp_number_id: "page_whatsapp_number_id";
        whatsapp_number: "whatsapp_number";
        whatsapp_smb_device: "whatsapp_smb_device";
    }>;
}
