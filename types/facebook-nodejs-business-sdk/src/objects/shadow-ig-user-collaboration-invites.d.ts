import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ShadowIGUserCollaborationInvites
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGUserCollaborationInvites extends AbstractCrudObject {
    static get Fields(): Readonly<{
        caption: "caption";
        media_id: "media_id";
        media_owner_username: "media_owner_username";
        media_url: "media_url";
    }>;
}
