import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * ApacMonSellerStatusAPIContainer
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ApacMonSellerStatusAPIContainer extends AbstractCrudObject {
    static get Fields(): Readonly<{
        structured_messaging_commerce: "structured_messaging_commerce";
    }>;
}
