import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CPASMerchantConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CPASMerchantConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        accepted_tos: "accepted_tos";
        beta_features: "beta_features";
        business_outcomes_status: "business_outcomes_status";
        id: "id";
        is_test_merchant: "is_test_merchant";
        outcomes_compliance_status: "outcomes_compliance_status";
        qualified_to_onboard: "qualified_to_onboard";
    }>;
    get(fields: string[], params?: Record<any, any>): Promise<CPASMerchantConfig>;
}
