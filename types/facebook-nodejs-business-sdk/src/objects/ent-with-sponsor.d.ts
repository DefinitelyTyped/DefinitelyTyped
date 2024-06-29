import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * EntWithSponsor
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class EntWithSponsor extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        owner_linked_instagram_user_v1_id: "owner_linked_instagram_user_v1_id";
        owner_picture: "owner_picture";
        post_id: "post_id";
        post_info: "post_info";
    }>;
}
