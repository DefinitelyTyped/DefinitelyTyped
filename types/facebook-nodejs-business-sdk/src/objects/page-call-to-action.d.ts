import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
export default class PageCallToAction extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get AndroidDestinationType(): Record<string, any>;
    static get IphoneDestinationType(): Record<string, any>;
    static get Type(): Record<string, any>;
    static get WebDestinationType(): Record<string, any>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<PageCallToAction>;
    update(fields: string[], params?: Record<string, any>): Promise<PageCallToAction>;
}
