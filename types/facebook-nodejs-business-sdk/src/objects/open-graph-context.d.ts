import { AbstractCrudObject } from './../abstract-crud-object';
export default class OpenGraphContext extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<OpenGraphContext>;
}
