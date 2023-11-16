import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BusinessVideo
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
    get(fields: string[], params?: Record<any, any>): Promise<BusinessVideo>;
}
