import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * TrackingAndConversionWithDefaults
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TrackingAndConversionWithDefaults extends AbstractCrudObject {
    static get Fields(): Readonly<{
        custom_conversion: "custom_conversion";
        custom_tracking: "custom_tracking";
        default_conversion: "default_conversion";
        default_tracking: "default_tracking";
    }>;
}
