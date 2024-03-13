import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdPlacePageSetMetadata
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdPlacePageSetMetadata extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audience: "audience";
        custom: "custom";
        extra_data: "extra_data";
        fixed_radius: "fixed_radius";
    }>;
}
