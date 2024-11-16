import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdjacentContentDeliveryReport
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdjacentContentDeliveryReport extends AbstractCrudObject {
    static get Fields(): Readonly<{
        content: "content";
    }>;
}
