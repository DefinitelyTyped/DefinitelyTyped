import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * OfflineConversionDataSetUsage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetUsage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        num_lift_studies: "num_lift_studies";
    }>;
}
