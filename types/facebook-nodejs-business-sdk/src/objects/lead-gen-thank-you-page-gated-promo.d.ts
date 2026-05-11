import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * LeadGenThankYouPageGatedPromo
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenThankYouPageGatedPromo extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        online_offer_url: "online_offer_url";
        online_promo_code: "online_promo_code";
    }>;
}
