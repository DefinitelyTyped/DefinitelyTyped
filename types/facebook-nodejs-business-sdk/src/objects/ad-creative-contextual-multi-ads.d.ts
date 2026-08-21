import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeContextualMultiAds
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeContextualMultiAds extends AbstractCrudObject {
    static get Fields(): Readonly<{
        enroll_status: "enroll_status";
    }>;
}
