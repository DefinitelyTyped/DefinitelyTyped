import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdsOptimalDeliveryGrowthOpportunity
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsOptimalDeliveryGrowthOpportunity extends AbstractCrudObject {
    static get Fields(): Readonly<{
        child_metadata: "child_metadata";
        metadata: "metadata";
        optimization_type: "optimization_type";
    }>;
}
