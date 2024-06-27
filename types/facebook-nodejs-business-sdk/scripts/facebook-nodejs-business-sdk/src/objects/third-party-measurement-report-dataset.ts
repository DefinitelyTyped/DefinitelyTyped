import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ThirdPartyMeasurementReportDataset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ThirdPartyMeasurementReportDataset extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      category: 'category',
      id: 'id',
      partner: 'partner',
      product: 'product',
      schema: 'schema'
    });
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ThirdPartyMeasurementReportDataset {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}