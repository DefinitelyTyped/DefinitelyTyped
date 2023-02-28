import { AbstractCrudObject } from './../abstract-crud-object';
export default class CRMAddress extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<CRMAddress>;
}
