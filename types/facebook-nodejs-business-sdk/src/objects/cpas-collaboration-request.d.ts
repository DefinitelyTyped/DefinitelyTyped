import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CPASCollaborationRequest
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASCollaborationRequest extends AbstractCrudObject {
    static get Fields(): Readonly<{
        brands: "brands";
        contact_email: "contact_email";
        contact_first_name: "contact_first_name";
        contact_last_name: "contact_last_name";
        id: "id";
        phone_number: "phone_number";
        receiver_business: "receiver_business";
        requester_agency_or_brand: "requester_agency_or_brand";
        sender_client_business: "sender_client_business";
        status: "status";
    }>;
    static get RequesterAgencyOrBrand(): Readonly<{
        agency: "AGENCY";
        brand: "BRAND";
        merchant: "MERCHANT";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<CPASCollaborationRequest>;
}
