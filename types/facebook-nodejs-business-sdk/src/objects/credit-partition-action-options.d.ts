import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * CreditPartitionActionOptions
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreditPartitionActionOptions extends AbstractCrudObject {
    static get Fields(): Readonly<{
        liability_type: "liability_type";
        partition_type: "partition_type";
        send_bill_to: "send_bill_to";
    }>;
}
