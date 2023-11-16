import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * DeliveryCheck
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DeliveryCheck extends AbstractCrudObject {
    static get Fields(): Readonly<{
        check_name: "check_name";
        description: "description";
        extra_info: "extra_info";
        summary: "summary";
    }>;
}
