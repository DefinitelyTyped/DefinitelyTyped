import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * PageRestaurantServices
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageRestaurantServices extends AbstractCrudObject {
    static get Fields(): Readonly<{
        catering: "catering";
        delivery: "delivery";
        groups: "groups";
        kids: "kids";
        outdoor: "outdoor";
        pickup: "pickup";
        reserve: "reserve";
        takeout: "takeout";
        waiter: "waiter";
        walkins: "walkins";
    }>;
}
