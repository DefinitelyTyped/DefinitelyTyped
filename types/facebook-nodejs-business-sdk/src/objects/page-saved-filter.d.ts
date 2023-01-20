import { AbstractCrudObject } from './../abstract-crud-object';
export default class PageSavedFilter extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PageSavedFilter>;
}
