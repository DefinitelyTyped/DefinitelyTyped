import { AbstractCrudObject } from './../abstract-crud-object';
export default class PageUpcomingChange extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PageUpcomingChange>;
    update(fields: string[], params?: Record<string, any>): Promise<PageUpcomingChange>;
}
