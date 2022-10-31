import { AbstractCrudObject } from './../abstract-crud-object';
export default class IGBCAdsPermission extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<IGBCAdsPermission>;
}
