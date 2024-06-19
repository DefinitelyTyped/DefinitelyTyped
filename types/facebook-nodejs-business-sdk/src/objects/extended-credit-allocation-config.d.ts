import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * ExtendedCreditAllocationConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditAllocationConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get LiabilityType(): Record<string, any>;
    static get PartitionType(): Record<string, any>;
    static get SendBillTo(): Record<string, any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): ExtendedCreditAllocationConfig;
    update(fields: Array<string>, params?: Record<string, any>): ExtendedCreditAllocationConfig;
}
