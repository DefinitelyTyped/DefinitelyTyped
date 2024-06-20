import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * IGUserForIGOnlyAPI

 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGUserForIGOnlyAPI extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getLiveMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getMedia(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    getStories(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<IGUserForIGOnlyAPI>;
}
