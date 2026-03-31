import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdAccountAgencyFeeConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAgencyFeeConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_add_agency_fee_to_invoice: "can_add_agency_fee_to_invoice";
        default_agency_fee_pct: "default_agency_fee_pct";
        id: "id";
        is_agency_fee_disabled: "is_agency_fee_disabled";
        status: "status";
    }>;
    static get Status(): Readonly<{
        active: "ACTIVE";
        archived: "ARCHIVED";
        draft: "DRAFT";
        unknown: "UNKNOWN";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdAccountAgencyFeeConfig>;
}
