import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * DirectDebit
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DirectDebit extends AbstractCrudObject {
    static get Fields(): Readonly<{
        bank_account_last_4: "bank_account_last_4";
        bank_code_last_4: "bank_code_last_4";
        bank_name: "bank_name";
        default_receiving_method_products: "default_receiving_method_products";
        display_string: "display_string";
        id: "id";
        last_four_digits: "last_four_digits";
        onboarding_url: "onboarding_url";
        owner_name: "owner_name";
        status: "status";
    }>;
}
