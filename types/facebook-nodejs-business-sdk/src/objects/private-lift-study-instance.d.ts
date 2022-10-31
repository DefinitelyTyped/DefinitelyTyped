import { AbstractCrudObject } from './../abstract-crud-object';
export default class PrivateLiftStudyInstance extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Operation(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<PrivateLiftStudyInstance>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<PrivateLiftStudyInstance>;
}
