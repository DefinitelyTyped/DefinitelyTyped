// Type definitions for chartmogul-node 1.0
// Project: https://github.com/chartmogul/chartmogul-node
// Definitions by: ChartMogul <https://github.com/chartmogul>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Map, Cursor, CursorParams, Strings, Entries, EntriesSummary } from './common';

export class Config {
    VERSION: string;
    API_BASE: string;
    retries: number;

    constructor(token: string, secret: string, base?: string);
    getAccountToken(): string;
    getSecretKey(): string;
}

export namespace Ping {
    function ping(config: Config): Promise<string>;
}

export namespace DataSource {
    interface DataSource {
        uuid?: string;
        name: string;
        created_at?: string;
        status?: string;
        system?: string;
    }
    interface DataSources {
        data_sources: DataSource[];
    }
    interface ListDataSourcesParams {
        name?: string;
        system?: string;
    }

    function create(config: Config, data: DataSource): Promise<DataSource>;
    function retrieve(config: Config, uuid: string): Promise<DataSource>;
    function destroy(config: Config, uuid: string): Promise<{}>;
    function all(config: Config, params?: ListDataSourcesParams): Promise<DataSources>;
}

export namespace Customer {
    interface Customer {
        id?: number;
        data_source_uuid?: string;
        data_source_uuids?: Strings;
        uuid?: string;
        external_id?: string;
        external_ids?: Strings;
        name?: string;
        email?: string;
        status?: string;
        ['customer-since']?: string;
        attributes?: Attributes;
        address?: {
            address_zip?: string;
            city?: string;
            state?: string;
            country?: string;
        };
        mrr?: number;
        arr?: number;
        ['billing-system-url']?: string;
        ['chartmogul-url']?: string;
        ['billing-system-type']?: string;
        currency?: string;
        ['currency-sign']?: string;
        company?: string;
        country?: string;
        state?: string;
        city?: string;
        zip?: string;
        lead_created_at?: string;
        free_trial_started_at?: string;
    }
    interface NewCustomer {
        data_source_uuid: string;
        external_id: string;
        name: string;
        email?: string;
        company?: string;
        country?: string;
        state?: string;
        city?: string;
        zip?: string;
        lead_created_at?: string;
        free_trial_started_at?: string;
        attributes?: NewAttributes;
    }
    interface UpdateCustomer {
        name?: string;
        email?: string;
        company?: string;
        country?: string;
        state?: string;
        city?: string;
        zip?: string;
        lead_created_at?: string;
        free_trial_started_at?: string;
        attributes?: NewAttributes;
    }
    interface NewAttributes {
        tags?: Strings;
        custom?: NewCustomAttributes[];
    }
    interface NewCustomAttributes {
        type?: string;
        key: string;
        value: any;
        source?: string;
    }
    interface Attributes {
        tags?: Strings;
        stripe?: Map;
        clearbit?: Map;
        custom?: Map;
    }
    interface ListCustomersParams extends CursorParams {
        data_source_uuid?: string;
        status?: string;
        system?: string;
        external_id?: string;
    }
    interface SearchCustomersParams extends CursorParams {
        email: string;
    }
    interface MergeID {
        customer_uuid?: string;
        external_id?: string;
    }
    interface MergeCustomersParams {
        from: MergeID;
        into: MergeID;
    }

    function create(config: Config, data: NewCustomer): Promise<Customer>;
    function retrieve(config: Config, uuid: string): Promise<Customer>;
    function modify(config: Config, uuid: string, data: UpdateCustomer): Promise<Customer>;
    function destroy(config: Config, uuid: string): Promise<{}>;
    function all(config: Config, params?: ListCustomersParams): Promise<Entries<Customer>>;
    function search(config: Config, params?: SearchCustomersParams): Promise<Entries<Customer>>;
    function merge(config: Config, params?: MergeCustomersParams): Promise<{}>;
    function attributes(config: Config, uuid: string): Promise<Attributes>;
}

export namespace Plan {
    interface Plan {
        uuid?: string;
        data_source_uuid?: string;
        external_id?: string;
        name?: string;
        interval_count?: number;
        interval_unit?: string;
    }
    interface ListPlansParams extends CursorParams {
        data_source_uuid?: string;
        system?: string;
        external_id?: string;
    }
    interface Plans extends Cursor {
        plans: Plan[];
    }

    function create(config: Config, data: Plan): Promise<Plan>;
    function retrieve(config: Config, uuid: string): Promise<Plan>;
    function modify(config: Config, uuid: string, data: Plan): Promise<Plan>;
    function destroy(config: Config, uuid: string): Promise<{}>;
    function all(config: Config, params?: ListPlansParams): Promise<Plans>;
}

export namespace Invoice {
    interface Invoice {
        uuid?: string;
        customer_uuid?: string;
        currency?: string;
        data_source_uuid?: string;
        date?: string;
        due_date?: string;
        external_id?: string;
        line_items?: LineItem[];
        transactions?: Transaction[];
    }
    interface LineItem {
        uuid?: string;
        account_code?: string;
        amount_in_cents?: number;
        cancelled_at?: string;
        description?: string;
        discount_amount_in_cents?: number;
        discount_code?: string;
        external_id?: string;
        plan_uuid?: string;
        prorated?: boolean;
        quantity?: number;
        service_period_end?: string;
        service_period_start?: string;
        subscription_external_id?: string;
        subscription_uuid?: string;
        tax_amount_in_cents?: number;
        transaction_fees_in_cents?: number;
        type?: string;
    }
    interface Transaction {
        uuid?: string;
        date?: string;
        external_id?: string;
        result?: string;
        type?: string;
    }
    interface ListInvoicesParams  extends CursorParams {
        data_source_uuid?: string;
        customer_uuid?: string;
        external_id?: string;
    }
    interface Invoices extends Cursor {
        customer_uuid?: string;
        invoices: Invoice[];
    }

    function create(config: Config, uuid: string, data: {
        invoices: Invoice[]
    }): Promise<Invoice>;
    function retrieve(config: Config, uuid: string): Promise<Invoice>;
    function destroy(config: Config, uuid: string): Promise<{}>;
    function all(config: Config, uuid: string, params?: ListInvoicesParams): Promise<Invoices>;
    function all(config: Config, params?: ListInvoicesParams): Promise<Invoices>;
}

export namespace Transaction {
    interface Transaction {
        uuid?: string;
        date: string;
        external_id?: string;
        result: string;
        type: string;
    }

    function create(config: Config, uuid: string, data: Transaction): Promise<Transaction>;
}

export namespace Subscription {
    interface Subscription {
        uuid: string;
        external_id: string;
        customer_uuid: string;
        plan_uuid: string;
        cancellation_dates: Strings;
        data_source_uuid: string;
    }
    interface CancelSubscriptionParams {
        cancelled_at?: string;
        cancellation_dates?: Strings;
    }
    interface Subscriptions extends Cursor {
        customer_uuid?: string;
        subscriptions: Subscription[];
    }

    function all(config: Config, uuid: string, data: CursorParams): Promise<Subscriptions>;
    function cancel(config: Config, uuid: string, data: CancelSubscriptionParams): Promise<Subscription>;
}

export namespace Tag {
    interface Tags {
        tags: Strings;
    }
    interface TagsWithEmail {
        email: string;
        tags: Strings;
    }
    function add(config: Config, uuid: string, data: TagsWithEmail): Promise<Entries<Customer.Customer>>;
    function add(config: Config, uuid: string, data: Tags): Promise<Tags>;
    function remove(config: Config, uuid: string, data: Tags): Promise<Tags>;
}

export namespace CustomAttribute {
    import NewCustomAttributes = Customer.NewCustomAttributes;

    interface CustomAttributes {
        custom: Map;
    }
    function add(config: Config, uuid: string, data: {
        email: string;
        custom: NewCustomAttributes[];
    }): Promise<Entries<Customer.Customer>>;
    function add(config: Config, uuid: string, data: {
        custom: NewCustomAttributes[];
    }): Promise<CustomAttributes>;
    function update(config: Config, uuid: string, data: CustomAttributes): Promise<CustomAttributes>;
    function remove(config: Config, uuid: string, data: {
        custom: Strings;
    }): Promise<CustomAttributes>;
}

export namespace Metrics {
    interface Params extends ParamsNoInterval {
        interval?: string;
    }
    interface ParamsNoInterval {
        ['start-date']: string;
        ['end-date']: string;
        geo?: string;
        plans?: string;
    }
    interface All {
        entries: {
            date: string;
            ['customer-churn-rate']: number;
            ['mrr-churn-rate']: number;
            ltv: number;
            customers: number;
            asp: number;
            arpa: number;
            arr: number;
            mrr: number;
        };
    }

    interface MRR {
        date: string;
        mrr: number;
        ['mrr-new-business']: number;
        ['mrr-expansion']: number;
        ['mrr-contraction']: number;
        ['mrr-churn']: number;
        ['mrr-reactivation']: number;
    }
    interface ARR {
        date: string;
        arr: number;
    }
    interface ARPA {
        date: string;
        arpa: number;
    }
    interface ASP {
        date: string;
        asp: number;
    }
    interface CustomerCount {
        date: string;
        customers: number;
    }
    interface CustomerChurnRate {
        date: string;
        ['customer-churn-rate']: number;
    }
    interface MRRChurnRate {
        date: string;
        ['mrr-churn-rate']: number;
    }
    interface LTV {
        date: string;
        ltv: number;
    }

    function all(config: Config, params: Params): Promise<All>;
    function mrr(config: Config, params: Params): Promise<EntriesSummary<MRR>>;
    function arr(config: Config, params: Params): Promise<EntriesSummary<ARR>>;
    function asp(config: Config, params: Params): Promise<EntriesSummary<ASP>>;
    function arpa(config: Config, params: Params): Promise<EntriesSummary<ARPA>>;
    function customerCount(config: Config, params: Params): Promise<EntriesSummary<CustomerCount>>;
    function customerChurnRate(config: Config, params: ParamsNoInterval): Promise<EntriesSummary<CustomerChurnRate>>;
    function mrrChurnRate(config: Config, params: ParamsNoInterval): Promise<EntriesSummary<MRRChurnRate>>;
    function ltv(config: Config, params: ParamsNoInterval): Promise<EntriesSummary<LTV>>;

    namespace Customer {
        interface MetricsSubscription {
            id: number;
            external_id: string;
            plan: string;
            quantity: number;
            mrr: number;
            arr: number;
            status: string;
            ['billing-cycle']: string;
            ['billing-cycle-count']: number;
            ['start-date']: string;
            ['end-date']: string;
            currency: string;
            ['currency-sign']: string;
        }
        interface MetricsActivity {
            id: number;
            date: string;
            ['activity-arr']: number;
            ['activity-mrr']: number;
            ['activity-mrr-movement']: number;
            currency: string;
            ['currency-sign']: string;
            description: string;
            type: string;
        }

        function subscriptions(config: Config, uuid: string, params?: CursorParams): Promise<Entries<MetricsSubscription>>;
        function activities(config: Config, uuid: string, params?: CursorParams): Promise<Entries<MetricsActivity>>;
    }
}

export class ChartMogulError extends Error {
    response: any;
    httpStatus: number;
}
export class ConfigurationError extends ChartMogulError {}
export class ForbiddenError extends ChartMogulError {}
export class NotFoundError extends ChartMogulError {}
export class ResourceInvalidError extends ChartMogulError {}
export class SchemaInvalidError extends ChartMogulError {}
