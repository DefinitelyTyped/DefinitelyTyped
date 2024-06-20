import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
/**
 * PublisherBlockList

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PublisherBlockList extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    createAppendPublisherUrl(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getPagedWebPublishers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<PublisherBlockList>;    get(fields: string[], params?: Record<string, any>): Promise<PublisherBlockList>;
}
