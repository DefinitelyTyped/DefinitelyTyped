import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CreditPartitionActionOptions
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CreditPartitionActionOptions extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      liability_type: 'liability_type',
      partition_type: 'partition_type',
      send_bill_to: 'send_bill_to'
    });
  }

}