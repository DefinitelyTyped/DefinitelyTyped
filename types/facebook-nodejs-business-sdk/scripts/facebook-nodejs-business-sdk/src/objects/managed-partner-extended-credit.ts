import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ManagedPartnerExtendedCredit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ManagedPartnerExtendedCredit extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      id: 'id',
      max_balance: 'max_balance',
      receiving_credit_allocation_config: 'receiving_credit_allocation_config'
    });
  }

}