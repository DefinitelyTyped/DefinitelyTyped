import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsPixelCapabilityOverride
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class AdsPixelCapabilityOverride extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      capability: 'capability',
      id: 'id',
      override_value: 'override_value',
      reason: 'reason'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): AdsPixelCapabilityOverride {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}