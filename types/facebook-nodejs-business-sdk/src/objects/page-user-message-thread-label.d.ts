import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
export default class PageUserMessageThreadLabel extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    deleteLabel(params?: Record<string, any>): Promise<any>;
    createLabel(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<PageUserMessageThreadLabel>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<PageUserMessageThreadLabel>;
}
