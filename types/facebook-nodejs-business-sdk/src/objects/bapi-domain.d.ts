import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * BAPIDomain
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BAPIDomain extends AbstractCrudObject {
    static get Fields(): Readonly<{
        domain: "domain";
        in_cool_down_until: "in_cool_down_until";
        is_eligible_for_vo: "is_eligible_for_vo";
        is_in_cool_down: "is_in_cool_down";
    }>;
}
