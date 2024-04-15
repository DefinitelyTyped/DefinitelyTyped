import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AssignedUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AssignedUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        business: "business";
        id: "id";
        name: "name";
        user_type: "user_type";
    }>;
}
