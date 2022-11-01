import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class AdRule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get UiCreationSource(): Record<string, any>;
    createExecute(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getHistory(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    createPreview(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null): Promise<AdRule>;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<AdRule>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<AdRule>;
}
