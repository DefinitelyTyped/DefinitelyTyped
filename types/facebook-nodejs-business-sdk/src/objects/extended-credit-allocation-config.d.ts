import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * ExtendedCreditAllocationConfig

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditAllocationConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get LiabilityType(): Record<string, any>;
    static get PartitionType(): Record<string, any>;
    static get SendBillTo(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ExtendedCreditAllocationConfig>;    get(fields: string[], params?: Record<string, any>): Promise<ExtendedCreditAllocationConfig>;
}
