import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * IGUserForIGOnlyAPI

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getLiveMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getStories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<IGUserForIGOnlyAPI>;
}
