import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdImage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdImage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        created_time: "created_time";
        creatives: "creatives";
        hash: "hash";
        height: "height";
        id: "id";
        is_associated_creatives_in_adgroups: "is_associated_creatives_in_adgroups";
        name: "name";
        original_height: "original_height";
        original_width: "original_width";
        owner_business: "owner_business";
        permalink_url: "permalink_url";
        status: "status";
        updated_time: "updated_time";
        url: "url";
        url_128: "url_128";
        width: "width";
    }>;
    static get Status(): Readonly<{
        active: "ACTIVE";
        deleted: "DELETED";
        internal: "INTERNAL";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<AdImage>;
}
