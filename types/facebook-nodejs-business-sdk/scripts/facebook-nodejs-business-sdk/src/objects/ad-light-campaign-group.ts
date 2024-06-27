import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdLightCampaignGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdLightCampaignGroup extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdLightCampaignGroup {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}