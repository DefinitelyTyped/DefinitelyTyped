import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * BusinessRoleRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessRoleRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Role(): Record<string, any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): BusinessRoleRequest;
    update(fields: Array<string>, params?: Record<string, any>): BusinessRoleRequest;
}
