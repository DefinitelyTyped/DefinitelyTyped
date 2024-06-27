import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * OpenBridgeConfiguration
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class OpenBridgeConfiguration extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      active: 'active',
      endpoint: 'endpoint',
      fallback_domain: 'fallback_domain',
      fallback_domain_enabled: 'fallback_domain_enabled',
      host_business_id: 'host_business_id',
      host_external_id: 'host_external_id',
      id: 'id',
      instance_id: 'instance_id',
      pixel_id: 'pixel_id'
    });
  }

  // $FlowFixMe : Support Generic Types
  delete(fields: Array<string>, params: Record<string, any> = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(params);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): OpenBridgeConfiguration {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

  // $FlowFixMe : Support Generic Types
  update(fields: Array<string>, params: Record<string, any> = {}): OpenBridgeConfiguration {
    // $FlowFixMe : Support Generic Types
    return super.update(params);
  }

}