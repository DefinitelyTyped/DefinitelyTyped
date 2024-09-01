import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdTopline
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdTopline extends AbstractCrudObject {
    static get Fields(): Readonly<{
        account_id: "account_id";
        client_approval_date: "client_approval_date";
        created_by: "created_by";
        created_date: "created_date";
        description: "description";
        flight_end_date: "flight_end_date";
        flight_start_date: "flight_start_date";
        func_cap_amount: "func_cap_amount";
        func_cap_amount_with_offset: "func_cap_amount_with_offset";
        func_line_amount: "func_line_amount";
        func_line_amount_with_offset: "func_line_amount_with_offset";
        func_price: "func_price";
        func_price_with_offset: "func_price_with_offset";
        gender: "gender";
        id: "id";
        impressions: "impressions";
        io_number: "io_number";
        is_bonus_line: "is_bonus_line";
        keywords: "keywords";
        last_updated_by: "last_updated_by";
        last_updated_date: "last_updated_date";
        line_number: "line_number";
        line_position: "line_position";
        line_type: "line_type";
        location: "location";
        max_age: "max_age";
        max_budget: "max_budget";
        min_age: "min_age";
        price_per_trp: "price_per_trp";
        product_type: "product_type";
        rev_assurance_approval_date: "rev_assurance_approval_date";
        targets: "targets";
        trp_updated_time: "trp_updated_time";
        trp_value: "trp_value";
        uom: "uom";
    }>;
    get(fields: string[], params?: Record<string, any>): Promise<AdTopline>;
}
