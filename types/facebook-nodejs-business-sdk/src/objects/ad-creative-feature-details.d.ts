import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeFeatureDetails
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeFeatureDetails extends AbstractCrudObject {
    static get Fields(): Readonly<{
        enroll_status: "enroll_status";
    }>;
}
