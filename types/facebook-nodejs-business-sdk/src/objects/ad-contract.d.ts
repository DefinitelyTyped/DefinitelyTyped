import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdContract
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdContract extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        account_mgr_fbid: "account_mgr_fbid";
        account_mgr_name: "account_mgr_name";
        adops_person_name: "adops_person_name";
        advertiser_address_fbid: "advertiser_address_fbid";
        advertiser_fbid: "advertiser_fbid";
        advertiser_name: "advertiser_name";
        agency_discount: "agency_discount";
        agency_name: "agency_name";
        bill_to_address_fbid: "bill_to_address_fbid";
        bill_to_fbid: "bill_to_fbid";
        campaign_name: "campaign_name";
        created_by: "created_by";
        created_date: "created_date";
        customer_io: "customer_io";
        io_number: "io_number";
        io_terms: "io_terms";
        io_type: "io_type";
        last_updated_by: "last_updated_by";
        last_updated_date: "last_updated_date";
        max_end_date: "max_end_date";
        mdc_fbid: "mdc_fbid";
        media_plan_number: "media_plan_number";
        min_start_date: "min_start_date";
        msa_contract: "msa_contract";
        payment_terms: "payment_terms";
        rev_hold_flag: "rev_hold_flag";
        rev_hold_released_by: "rev_hold_released_by";
        rev_hold_released_on: "rev_hold_released_on";
        salesrep_fbid: "salesrep_fbid";
        salesrep_name: "salesrep_name";
        sold_to_address_fbid: "sold_to_address_fbid";
        sold_to_fbid: "sold_to_fbid";
        status: "status";
        subvertical: "subvertical";
        thirdparty_billed: "thirdparty_billed";
        thirdparty_uid: "thirdparty_uid";
        thirdparty_url: "thirdparty_url";
        vat_country: "vat_country";
        version: "version";
        vertical: "vertical";
    }>;
}
