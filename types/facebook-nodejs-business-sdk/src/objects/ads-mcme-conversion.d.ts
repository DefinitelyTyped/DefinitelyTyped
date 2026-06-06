import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsMcmeConversion
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsMcmeConversion extends AbstractCrudObject {
    static get Fields(): Readonly<{
        creation_time: "creation_time";
        description: "description";
        id: "id";
        is_archived: "is_archived";
        mcme_conversion_type: "mcme_conversion_type";
        name: "name";
        omnichannel_object_id: "omnichannel_object_id";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdsMcmeConversion>;
}
