import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WhatsAppBusinessProfile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class WhatsAppBusinessProfile extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      name_verification: 'name_verification',
      whatsapp_business_api_data: 'whatsapp_business_api_data'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): WhatsAppBusinessProfile {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): WhatsAppBusinessProfile {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}