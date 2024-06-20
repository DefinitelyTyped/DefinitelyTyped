import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MailingAddress

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MailingAddress extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<MailingAddress>;
}
