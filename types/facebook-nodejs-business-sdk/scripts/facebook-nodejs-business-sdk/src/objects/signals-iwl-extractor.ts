import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SignalsIWLExtractor
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class SignalsIWLExtractor extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      domain_uri: 'domain_uri',
      event_type: 'event_type',
      extractor_type: 'extractor_type',
      id: 'id'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): SignalsIWLExtractor {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}