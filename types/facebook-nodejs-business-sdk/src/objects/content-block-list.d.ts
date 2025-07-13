import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * ContentBlockList
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ContentBlockList extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        id: "id";
        name: "name";
    }>;
    getAppliedAdAccounts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getFacebookContent(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getInstagramContent(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<ContentBlockList>;
}
