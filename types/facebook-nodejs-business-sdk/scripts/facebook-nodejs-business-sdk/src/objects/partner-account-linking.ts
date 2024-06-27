import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * PartnerAccountLinking
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class PartnerAccountLinking extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      adaccount: 'adaccount',
      app: 'app',
      business: 'business',
      externalidentifier: 'externalidentifier',
      externalidentifieruri: 'externalidentifieruri',
      id: 'id',
      partnername: 'partnername',
      pixel: 'pixel'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): PartnerAccountLinking {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}