import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class AdRule extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get Status(): Record<string, any>;
    static get UiCreationSource(): Record<string, any>;
    createExecute(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getHistory(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getHistory(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getHistory(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createPreview(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AdRule>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<AdRule>;
    update(fields: string[], params?: Record<string, any>): Promise<AdRule>;
}
