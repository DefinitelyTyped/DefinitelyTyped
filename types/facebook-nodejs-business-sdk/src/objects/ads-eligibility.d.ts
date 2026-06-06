import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsEligibility
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsEligibility extends AbstractCrudObject {
    static get Fields(): Readonly<{
        live_shopping: "live_shopping";
    }>;
}
