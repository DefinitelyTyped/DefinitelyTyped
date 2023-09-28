import { AbstractCrudObject } from './../abstract-crud-object';
export default class WhatsAppBusinessProfile extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<WhatsAppBusinessProfile>;
    update(fields: string[], params?: Record<string, any>): Promise<WhatsAppBusinessProfile>;
}
