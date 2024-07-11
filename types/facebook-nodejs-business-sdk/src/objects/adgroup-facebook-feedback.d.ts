import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdgroupFacebookFeedback
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupFacebookFeedback extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        preview: "preview";
    }>;
    getComments(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
}
