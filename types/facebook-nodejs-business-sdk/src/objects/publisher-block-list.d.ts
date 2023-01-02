import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
export default class PublisherBlockList extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createAppEndPublisherUrl(
        fields: string[],
        params?: Record<string, any>,
        pathOverride?: string | null,
    ): Promise<AbstractObject>;
    getPagedWebPublishers(fields: string[], params?: Record<string, any>): Promise<Cursor>;
    getPagedWebPublishers(fields: string[], params: Record<string, any> | undefined, fetchFirstPage: false): Cursor;
    getPagedWebPublishers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<PublisherBlockList>;
    update(fields: string[], params?: Record<string, any>): Promise<PublisherBlockList>;
}
