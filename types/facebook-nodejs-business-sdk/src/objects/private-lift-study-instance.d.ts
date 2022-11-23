import { AbstractCrudObject } from './../abstract-crud-object';
export default class PrivateLiftStudyInstance extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Operation(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<PrivateLiftStudyInstance>;
    update(fields: string[], params?: Record<string, any>): Promise<PrivateLiftStudyInstance>;
}
