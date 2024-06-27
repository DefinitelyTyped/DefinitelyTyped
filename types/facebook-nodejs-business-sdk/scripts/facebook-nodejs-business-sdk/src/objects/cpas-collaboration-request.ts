import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CPASCollaborationRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CPASCollaborationRequest extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      brands: 'brands',
      contact_email: 'contact_email',
      contact_first_name: 'contact_first_name',
      contact_last_name: 'contact_last_name',
      id: 'id',
      phone_number: 'phone_number',
      receiver_business: 'receiver_business',
      requester_agency_or_brand: 'requester_agency_or_brand',
      sender_client_business: 'sender_client_business',
      status: 'status'
    });
  }

  static get RequesterAgencyOrBrand() {
    return Object.freeze({
      agency: 'AGENCY',
      brand: 'BRAND',
      merchant: 'MERCHANT'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): CPASCollaborationRequest {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}