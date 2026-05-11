import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IGCommentFromUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGCommentFromUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        self_ig_scoped_id: "self_ig_scoped_id";
        username: "username";
    }>;
}
