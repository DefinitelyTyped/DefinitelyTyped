import { Cursor, CursorParams, Entries, EntriesSummary, Map, Strings } from "./common";

export class Config {
    VERSION: string;
    API_BASE: string;
    retries: number;

    constructor(token: string, base?: string);
    getAccountToken(): string;
}

export namespace Ping {
    function ping(config: Config): Promise<string>;
}

export namespace DataSource {
    interface DataSource {
        uuid?: string | undefined;
        name: string;
        created_at?: string | undefined;
        status?: string | undefined;
        system?: string | undefined;
    }
    interface DataSources {
        data_sources: DataSource[];
    }
    interface ListDataSourcesParams {
        name?: string | undefined;
        system?: string | undefined;
    }

    function create(config: Config, data: DataSource): Promise<DataSource>;
    function retrieve(config: Config, uuid: string): Promise<DataSource>;
    function destroy(config: Config, uuid: string): Promise<{}>;
    function all(config: Config, params?: ListDataSourcesParams): Promise<DataSources>;
}

export namespace Customer {
    interface Customer {
        id?: number | undefined;
        data_source_uuid?: string | undefined;
        data_source_uuids?: Strings | undefined;
        uuid?: string | undefined;
        external_id?: string | undefined;
        external_ids?: Strings | undefined;
        name?: string | undefined;
        email?: string | undefined;
        status?: string | undefined;
        ["customer-since"]?: string | undefined;
        attributes?: Attributes | undefined;
        address?: {
            address_zip?: string | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
        } | undefined;
        mrr?: number | undefined;
        arr?: number | undefined;
        ["billing-system-url"]?: string | undefined;
        ["chartmogul-url"]?: string | undefined;
        ["billing-system-type"]?: string | undefined;
        currency?: string | undefined;
        ["currency-sign"]?: string | undefined;
        company?: string | undefined;
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        lead_created_at?: string | undefined;
        free_trial_started_at?: string | undefined;
    }
    interface NewCustomer {
        data_source_uuid: string;
        external_id: string;
        name: string;
        email?: string | undefined;
        company?: string | undefined;
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        lead_created_at?: string | undefined;
        free_trial_started_at?: string | undefined;
        attributes?: NewAttributes | undefined;
    }
    interface UpdateCustomer {
        name?: string | undefined;
        email?: string | undefined;
        company?: string | undefined;
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        lead_created_at?: string | undefined;
        free_trial_started_at?: string | undefined;
        attributes?: NewAttributes | undefined;
    }
    interface NewAttributes {
        tags?: Strings | undefined;
        custom?: NewCustomAttributes[] | undefined;
    }
    interface NewCustomAttributes {
        type?: string | undefined;
        key: string;
        value: any;
        source?: string | undefined;
    }
    interface Attributes {
        tags?: Strings | undefined;
        stripe?: Map | undefined;
        clearbit?: Map | undefined;
        custom?: Map | undefined;
    }
    interface ListCustomersParams extends CursorParams {
        data_source_uuid?: string | undefined;
        status?: string | undefined;
        system?: string | undefined;
        external_id?: string | undefined;
    }
    interface SearchCustomersParams extends CursorParams {
        email: string;
    }
    interface MergeID {
        customer_uuid?: string | undefined;
        external_id?: string | undefined;
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
        uuid?: string | undefined;
        data_source_uuid?: string | undefined;
        external_id?: string | undefined;
        name?: string | undefined;
        interval_count?: number | undefined;
        interval_unit?: string | undefined;
    }
    interface ListPlansParams extends CursorParams {
        data_source_uuid?: string | undefined;
        system?: string | undefined;
        external_id?: string | undefined;
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
        uuid?: string | undefined;
        customer_uuid?: string | undefined;
        currency?: string | undefined;
        data_source_uuid?: string | undefined;
        date?: string | undefined;
        due_date?: string | undefined;
        external_id?: string | undefined;
        line_items?: LineItem[] | undefined;
        transactions?: Transaction[] | undefined;
    }
    interface LineItem {
        uuid?: string | undefined;
        account_code?: string | undefined;
        amount_in_cents?: number | undefined;
        cancelled_at?: string | undefined;
        description?: string | undefined;
        discount_amount_in_cents?: number | undefined;
        discount_code?: string | undefined;
        external_id?: string | undefined;
        plan_uuid?: string | undefined;
        prorated?: boolean | undefined;
        quantity?: number | undefined;
        service_period_end?: string | undefined;
        service_period_start?: string | undefined;
        subscription_external_id?: string | undefined;
        subscription_uuid?: string | undefined;
        tax_amount_in_cents?: number | undefined;
        transaction_fees_in_cents?: number | undefined;
        type?: string | undefined;
    }
    interface Transaction {
        uuid?: string | undefined;
        date?: string | undefined;
        external_id?: string | undefined;
        result?: string | undefined;
        type?: string | undefined;
    }
    interface ListInvoicesParams extends CursorParams {
        data_source_uuid?: string | undefined;
        customer_uuid?: string | undefined;
        external_id?: string | undefined;
    }
    interface Invoices extends Cursor {
        customer_uuid?: string | undefined;
        invoices: Invoice[];
    }

    function create(config: Config, uuid: string, data: {
        invoices: Invoice[];
    }): Promise<Invoice>;
    function retrieve(config: Config, uuid: string): Promise<Invoice>;
    function destroy(config: Config, uuid: string): Promise<{}>;
    function all(config: Config, uuid: string, params?: ListInvoicesParams): Promise<Invoices>;
    function all(config: Config, params?: ListInvoicesParams): Promise<Invoices>;
}

export namespace Transaction {
    interface Transaction {
        uuid?: string | undefined;
        date: string;
        external_id?: string | undefined;
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
        cancelled_at?: string | undefined;
        cancellation_dates?: Strings | undefined;
    }
    interface Subscriptions extends Cursor {
        customer_uuid?: string | undefined;
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
        interval?: string | undefined;
    }
    interface ParamsNoInterval {
        ["start-date"]: string;
        ["end-date"]: string;
        geo?: string | undefined;
        plans?: string | undefined;
    }
    interface All {
        entries: {
            date: string;
            ["customer-churn-rate"]: number;
            ["mrr-churn-rate"]: number;
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
        ["mrr-new-business"]: number;
        ["mrr-expansion"]: number;
        ["mrr-contraction"]: number;
        ["mrr-churn"]: number;
        ["mrr-reactivation"]: number;
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
        ["customer-churn-rate"]: number;
    }
    interface MRRChurnRate {
        date: string;
        ["mrr-churn-rate"]: number;
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
            ["billing-cycle"]: string;
            ["billing-cycle-count"]: number;
            ["start-date"]: string;
            ["end-date"]: string;
            currency: string;
            ["currency-sign"]: string;
        }
        interface MetricsActivity {
            id: number;
            date: string;
            ["activity-arr"]: number;
            ["activity-mrr"]: number;
            ["activity-mrr-movement"]: number;
            currency: string;
            ["currency-sign"]: string;
            description: string;
            type: string;
        }

        function subscriptions(
            config: Config,
            uuid: string,
            params?: CursorParams,
        ): Promise<Entries<MetricsSubscription>>;
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
