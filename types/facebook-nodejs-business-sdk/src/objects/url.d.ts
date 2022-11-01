import { AbstractCrudObject } from './../abstract-crud-object';
export default class URL extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Scopes(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<URL>;
    update(fields: string[], params?: Record<string, any>): Promise<URL>;
}
