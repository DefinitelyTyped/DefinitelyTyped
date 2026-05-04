import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * CustomerElasticityStudyMetrics
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CustomerElasticityStudyMetrics extends AbstractCrudObject {
    static get Fields(): Readonly<{
        customer_elasticity_study_metrics: "customer_elasticity_study_metrics";
    }>;
}
