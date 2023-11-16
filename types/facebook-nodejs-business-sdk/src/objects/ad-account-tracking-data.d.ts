import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdAccountTrackingData
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountTrackingData extends AbstractCrudObject {
    static get Fields(): Readonly<{
        tracking_specs: "tracking_specs";
    }>;
}
