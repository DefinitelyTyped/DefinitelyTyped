import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * PageUserMessageThreadLabel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUserMessageThreadLabel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        page_label_name: "page_label_name";
    }>;
    deleteLabel(params?: Record<any, any>): Promise<any>;
    createLabel(fields: Array<string>, params?: Record<any, any>, pathOverride?: string | null): Promise<PageUserMessageThreadLabel>;
    delete(fields: Array<string>, params?: Record<any, any>): AbstractObject;
    get(fields: Array<string>, params?: Record<any, any>): PageUserMessageThreadLabel;
}
