import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * VideoAsset
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class VideoAsset extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    getInsights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<any>;
    get(fields: string[], params?: Record<string, any>): Promise<VideoAsset>;
}
