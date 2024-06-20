import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * PageCallToAction

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCallToAction extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AndroidDestinationType(): Record<string, any>;
    static get IphoneDestinationType(): Record<string, any>;
    static get Type(): Record<string, any>;
    static get WebDestinationType(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<PageCallToAction>;    get(fields: string[], params?: Record<string, any>): Promise<PageCallToAction>;
}
