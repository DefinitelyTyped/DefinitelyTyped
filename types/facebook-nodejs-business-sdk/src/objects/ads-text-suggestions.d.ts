import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsTextSuggestions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsTextSuggestions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_account_id: "ad_account_id";
        bodies: "bodies";
        descriptions: "descriptions";
        inactive_session_tally: "inactive_session_tally";
        long: "long";
        short: "short";
        titles: "titles";
    }>;
}
