import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * DynamicVideoMetadata
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicVideoMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        tags: "tags";
        url: "url";
        video: "video";
    }>;
    get(fields: Array<string>, params?: Record<any, any>): DynamicVideoMetadata;
}
