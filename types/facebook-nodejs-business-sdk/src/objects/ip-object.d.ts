import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * IPObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class IPObject extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ip_permission: "ip_permission";
        user: "user";
    }>;
}
