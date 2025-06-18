import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * WITUser
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class WITUser extends AbstractCrudObject {
    static get Fields(): Readonly<{
        access_token: "access_token";
        id: "id";
        name: "name";
    }>;
}
