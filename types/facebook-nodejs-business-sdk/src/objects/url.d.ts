import { AbstractCrudObject } from './../abstract-crud-object';
export default class URL extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Scopes(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<URL>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<URL>;
}
