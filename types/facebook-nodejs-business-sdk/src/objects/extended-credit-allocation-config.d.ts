import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * ExtendedCreditAllocationConfig
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ExtendedCreditAllocationConfig extends AbstractCrudObject {
    static get Fields(): Readonly<{
        currency_amount: "currency_amount";
        id: "id";
        liability_type: "liability_type";
        owning_business: "owning_business";
        owning_credential: "owning_credential";
        partition_type: "partition_type";
        receiving_business: "receiving_business";
        receiving_credential: "receiving_credential";
        request_status: "request_status";
        send_bill_to: "send_bill_to";
    }>;
    static get LiabilityType(): Readonly<{
        msa: "MSA";
        normal: "Normal";
        sequential: "Sequential";
    }>;
    static get PartitionType(): Readonly<{
        auth: "AUTH";
        fixed: "FIXED";
        fixed_without_partition: "FIXED_WITHOUT_PARTITION";
    }>;
    static get SendBillTo(): Readonly<{
        advertiser: "Advertiser";
        agency: "Agency";
    }>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<ExtendedCreditAllocationConfig>;
    update(fields: string[], params?: Record<any, any>): Promise<ExtendedCreditAllocationConfig>;
}
