import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BusinessVideo
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessVideo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        id: "id";
        media_library_url: "media_library_url";
        name: "name";
        video: "video";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): BusinessVideo;
}
