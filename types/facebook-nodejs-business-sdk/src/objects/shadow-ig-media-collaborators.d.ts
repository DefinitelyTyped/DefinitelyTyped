import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ShadowIGMediaCollaborators
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ShadowIGMediaCollaborators extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        invite_status: "invite_status";
        username: "username";
    }>;
}
