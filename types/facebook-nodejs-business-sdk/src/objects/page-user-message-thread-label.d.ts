import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
/**
 * PageUserMessageThreadLabel
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageUserMessageThreadLabel extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        page_label_name: "page_label_name";
    }>;
    deleteLabel(params?: Record<string, any>): Promise<any>;
    createLabel(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<PageUserMessageThreadLabel>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<PageUserMessageThreadLabel>;
}
