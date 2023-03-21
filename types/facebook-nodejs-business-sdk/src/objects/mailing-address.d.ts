import { AbstractCrudObject } from './../abstract-crud-object';
export default class MailingAddress extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<MailingAddress>;
}
