import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ManagedPartnerExtendedCredit
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ManagedPartnerExtendedCredit extends AbstractCrudObject {
    static get Fields(): Readonly<{
        id: "id";
        max_balance: "max_balance";
        receiving_credit_allocation_config: "receiving_credit_allocation_config";
    }>;
}
