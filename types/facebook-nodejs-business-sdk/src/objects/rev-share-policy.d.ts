import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * RevSharePolicy
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class RevSharePolicy extends AbstractCrudObject {
    static get Fields(): Readonly<{
        policy_id: "policy_id";
        policy_name: "policy_name";
    }>;
}
