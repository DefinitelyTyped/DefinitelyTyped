import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountMaxBid
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountMaxBid extends AbstractCrudObject {
    static get Fields(): Readonly<{
        max_bid: "max_bid";
    }>;
}
