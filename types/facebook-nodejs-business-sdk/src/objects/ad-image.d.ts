import { AbstractCrudObject } from './../abstract-crud-object';
export default class AdImage extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<AdImage>;
}
