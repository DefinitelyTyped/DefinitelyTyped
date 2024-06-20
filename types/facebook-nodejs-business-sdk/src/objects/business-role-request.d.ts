import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * BusinessRoleRequest

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessRoleRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Role(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<BusinessRoleRequest>;    get(fields: string[], params?: Record<string, any>): Promise<BusinessRoleRequest>;
}
