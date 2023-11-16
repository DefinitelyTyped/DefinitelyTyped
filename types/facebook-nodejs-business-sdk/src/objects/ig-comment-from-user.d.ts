import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * IGCommentFromUser
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IGCommentFromUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        username: "username";
    }>;
}
