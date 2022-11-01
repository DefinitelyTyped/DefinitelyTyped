import { AbstractCrudObject } from './../abstract-crud-object';
export default class LiveVideoError extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: string[], params?: Record<string, any>): Promise<LiveVideoError>;
}
