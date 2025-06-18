import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MediaCopyrightUpdateRecord
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MediaCopyrightUpdateRecord extends AbstractCrudObject {
    static get Fields(): Readonly<{
        action_types: "action_types";
        actor: "actor";
        actor_type: "actor_type";
        creation_time: "creation_time";
        id: "id";
        ownership_countries: "ownership_countries";
        whitelisted_accounts: "whitelisted_accounts";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<MediaCopyrightUpdateRecord>;
}
