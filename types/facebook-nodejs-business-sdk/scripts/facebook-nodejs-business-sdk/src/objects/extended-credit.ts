import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ExtendedCreditInvoiceGroup from "./extended-credit-invoice-group";
import ExtendedCreditAllocationConfig from "./extended-credit-allocation-config";
/**
 * ExtendedCredit
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */

export default class ExtendedCredit extends AbstractCrudObject {
  static get Fields() {
    return Object.freeze({
      allocated_amount: 'allocated_amount',
      balance: 'balance',
      credit_available: 'credit_available',
      credit_type: 'credit_type',
      id: 'id',
      is_access_revoked: 'is_access_revoked',
      is_automated_experience: 'is_automated_experience',
      legal_entity_name: 'legal_entity_name',
      liable_address: 'liable_address',
      liable_biz_name: 'liable_biz_name',
      max_balance: 'max_balance',
      online_max_balance: 'online_max_balance',
      owner_business: 'owner_business',
      owner_business_name: 'owner_business_name',
      partition_from: 'partition_from',
      receiving_credit_allocation_config: 'receiving_credit_allocation_config',
      send_bill_to_address: 'send_bill_to_address',
      send_bill_to_biz_name: 'send_bill_to_biz_name',
      sold_to_address: 'sold_to_address'
    });
  }

  getExtendedCreditInvoiceGroups(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ExtendedCreditInvoiceGroup, fields, params, fetchFirstPage, '/extended_credit_invoice_groups');
  }

  createExtendedCreditInvoiceGroup(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ExtendedCreditInvoiceGroup> {
    return this.createEdge('/extended_credit_invoice_groups', fields, params, ExtendedCreditInvoiceGroup, pathOverride);
  }

  getOwningCreditAllocationConfigs(fields: Array<string>, params: Record<string, any> = {}, fetchFirstPage: boolean = true): Cursor | Promise<any> {
    return this.getEdge(ExtendedCreditAllocationConfig, fields, params, fetchFirstPage, '/owning_credit_allocation_configs');
  }

  createOwningCreditAllocationConfig(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<ExtendedCreditAllocationConfig> {
    return this.createEdge('/owning_credit_allocation_configs', fields, params, ExtendedCreditAllocationConfig, pathOverride);
  }

  createWhatsAppCreditSharingAnDAttach(fields: Array<string>, params: Record<string, any> = {}, pathOverride?: string | null | undefined = null): Promise<AbstractObject> {
    return this.createEdge('/whatsapp_credit_sharing_and_attach', fields, params, null, pathOverride);
  }

  get(fields: Array<string>, params: Record<string, any> = {}): ExtendedCredit {
    // $FlowFixMe : Support Generic Types
    return this.read(fields, params);
  }

}