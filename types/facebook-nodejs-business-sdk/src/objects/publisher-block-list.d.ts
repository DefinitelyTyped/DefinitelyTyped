import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class PublisherBlockList extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createAppEndPublisherUrl(
        fields: Array<string>,
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getPagedWebPublishers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor;
    delete(fields: Array<string>, params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: Array<string>, params?: Record<string, any>): Promise<PublisherBlockList>;
    update(fields: Array<string>, params?: Record<string, any>): Promise<PublisherBlockList>;
}
