import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdsGuidanceQEExposure
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsGuidanceQEExposure extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_exposed: "account_exposed";
    }>;
}
