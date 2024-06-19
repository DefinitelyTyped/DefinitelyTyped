import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * PublisherBlockList
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PublisherBlockList extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createAppendPublisherUrl(fields: Array<string>, params?: Record<string, any>, pathOverride?: string | null | undefined): Promise<AbstractObject>;
    getPagedWebPublishers(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    delete(fields: Array<string>, params?: Record<string, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<string, any>): PublisherBlockList;
    update(fields: Array<string>, params?: Record<string, any>): PublisherBlockList;
}
