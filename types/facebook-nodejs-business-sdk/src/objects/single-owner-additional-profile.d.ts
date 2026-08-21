import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * SingleOwnerAdditionalProfile
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SingleOwnerAdditionalProfile extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        name: "name";
        user_name: "user_name";
    }>;
}
