import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DeliveryStatus
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DeliveryStatus extends AbstractCrudObject {
    static get Fields(): Readonly<{
        status: "status";
        substatuses: "substatuses";
    }>;
}
