import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * VideoAsset
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoAsset extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getInsights(fields: Array<string>, params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: Array<string>, params?: Record<string, any>): VideoAsset;
}
