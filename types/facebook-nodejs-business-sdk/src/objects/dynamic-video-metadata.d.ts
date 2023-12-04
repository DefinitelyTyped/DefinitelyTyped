import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * DynamicVideoMetadata
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DynamicVideoMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        tags: "tags";
        url: "url";
        video: "video";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<DynamicVideoMetadata>;
}
