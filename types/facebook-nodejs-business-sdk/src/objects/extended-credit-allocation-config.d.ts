import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
export default class ExtendedCreditAllocationConfig extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get LiabilityType(): Record<string, any>;
    static get PartitionType(): Record<string, any>;
    static get SendBillTo(): Record<string, any>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCreditAllocationConfig>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<ExtendedCreditAllocationConfig>;
}
