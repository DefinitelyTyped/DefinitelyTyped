import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ArAdsDataContainer
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ArAdsDataContainer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        camera_facing_override: "camera_facing_override";
        creation_time: "creation_time";
        effect: "effect";
        id: "id";
        is_published: "is_published";
        last_modified_time: "last_modified_time";
        name: "name";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<ArAdsDataContainer>;
}
