import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
export default class AppRequest extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AppRequest>;
}
