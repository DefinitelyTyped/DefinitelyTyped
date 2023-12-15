import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * BusinessCreativeFolder
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BusinessCreativeFolder extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        creation_time: "creation_time";
        creative_insight_permissions: "creative_insight_permissions";
        description: "description";
        id: "id";
        media_library_url: "media_library_url";
        name: "name";
        owner_business: "owner_business";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<BusinessCreativeFolder>;
}
