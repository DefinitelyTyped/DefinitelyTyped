import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * PageCallToAction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCallToAction extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AndroidDestinationType(): Record<string, any>;
    static get IphoneDestinationType(): Record<string, any>;
    static get Type(): Record<string, any>;
    static get WebDestinationType(): Record<string, any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): PageCallToAction;
    update(fields: Array<string>, params?: Record<string, any>): PageCallToAction;
}
