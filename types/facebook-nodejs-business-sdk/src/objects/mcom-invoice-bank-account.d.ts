import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * McomInvoiceBankAccount
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class McomInvoiceBankAccount extends AbstractCrudObject {
    static get Fields(): Readonly<{
        num_pending_verification_accounts: "num_pending_verification_accounts";
        num_verified_accounts: "num_verified_accounts";
        pending_verification_accounts: "pending_verification_accounts";
        verified_accounts: "verified_accounts";
    }>;
}
