import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * CommerceOrderTransactionDetail
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class CommerceOrderTransactionDetail extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      net_payment_amount: 'net_payment_amount',
      order_details: 'order_details',
      payout_reference_id: 'payout_reference_id',
      processing_fee: 'processing_fee',
      tax_rate: 'tax_rate',
      transaction_date: 'transaction_date',
      transaction_type: 'transaction_type',
      transfer_id: 'transfer_id',
      id: 'id'
    });
  }

  getItems(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/items');
  }

  getTaxDetails(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(AbstractObject, fields, params, fetchFirstPage, '/tax_details');
  }

}