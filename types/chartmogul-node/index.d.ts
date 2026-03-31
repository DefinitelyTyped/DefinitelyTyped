import { Cursor, CursorParams, Entries, EntriesSummary, Map, Strings } from "./common";

export interface ResourceDestroyed {
    message: string;
}

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

export namespace Account {
    type WeekStartOn = "monday" | "sunday";
    type ChurnRecognition =
        | "churn_at_time_of_cancelation"
        | "churn_at_period_end"
        | "churn_at_click";
    type RefundHandling = "refund_ignore" | "refund_full_only";
    type ProximateMovementReclassification =
        | "reclassification_off"
        | "one_minute_reclassification"
        | "ten_minutes_reclassification"
        | "one_hour_reclassification"
        | "one_day_reclassification"
        | "one_week_reclassification"
        | "thirty_days_reclassification"
        | "sixty_days_reclassification"
        | "ninety_days_reclassification";

    interface ExtraAccountParams {
        /**
         * Comma-separated list of fields to include. Allowed values:
         * - churn_recognition,
         * - churn_when_zero_mrr,
         * - auto_churn_subscription,
         * - refund_handling,
         * - proximate_movement_reclassification
         * Example: auto_churn_subscription,churn_when_zero_mrr
         */
        include?: string;
    }

    interface Account {
        id: string;
        name: string;
        currency: string;
        time_zone: string;
        week_start_on: WeekStartOn;
        churn_recognition?: ChurnRecognition;
        churn_when_zero_mrr?: boolean;
        auto_churn_subscription?: boolean;
        refund_handling?: RefundHandling;
        proximate_movement_reclassification?: ProximateMovementReclassification;
    }

    function retrieve(config: Config, params?: ExtraAccountParams): Promise<Account>;
}

export namespace DataSource {
    type DataSourceStatus =
        | "never_imported"
        | "import_complete"
        | "import_in_progress"
        | "import_failed"
        | string;

    interface ProcessingStatus {
        processed?: number;
        pending?: number;
        failed?: number;
    }
    interface AutoChurnSubscriptionSetting {
        enabled: boolean;
        interval: number | null;
    }
    interface ExtraDataSourceParams {
        with_processing_status?: boolean;
        with_auto_churn_subscription_setting?: boolean;
        with_invoice_handling_setting?: boolean;
    }
    interface ListDataSourcesParams extends ExtraDataSourceParams {
        name?: string;
        system?: string;
    }
    interface DataSource {
        uuid?: string;
        name: string;
        created_at?: string;
        status?: DataSourceStatus;
        system?: string;
        processing_status?: ProcessingStatus;
        auto_churn_subscription_setting?: AutoChurnSubscriptionSetting;
        invoice_handling_setting?: Record<string, any>;
    }
    interface NewDataSource {
        name: string;
    }
    interface DataSources {
        data_sources: DataSource[];
    }

    function create(config: Config, data: NewDataSource): Promise<DataSource>;
    function retrieve(config: Config, uuid: string, params?: ExtraDataSourceParams): Promise<DataSource>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
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
        ["customer-since"]?: string;
        attributes?: Attributes;
        address?: {
            address_zip?: string;
            city?: string;
            state?: string;
            country?: string;
        };
        mrr?: number;
        arr?: number;
        ["billing-system-url"]?: string;
        ["chartmogul-url"]?: string;
        ["billing-system-type"]?: string;
        currency?: string;
        ["currency-sign"]?: string;
        company?: string;
        country?: string;
        state?: string;
        city?: string;
        zip?: string;
        lead_created_at?: string;
        free_trial_started_at?: string;
        owner?: string;
        website_url?: string;
    }
    interface PrimaryContact {
        first_name?: string;
        last_name?: string;
        email?: string;
        title?: string;
        phone?: string;
        linked_in?: string;
        twitter?: string;
        notes?: string;
    }
    interface NewCustomer {
        data_source_uuid: string;
        external_id: string;
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
        owner?: string;
        primary_contact?: PrimaryContact;
        website_url?: string;
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
        attributes?: UpdateAttributes;
        owner?: string;
        primary_contact?: PrimaryContact;
        website_url?: string;
        status?: string;
    }
    interface UpdateAttributes {
        tags?: Strings;
        custom?: Map;
    }
    interface NewAttributes {
        tags?: Strings;
        custom?: CustomAttribute.NewCustomAttribute[];
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
        email?: string;
    }
    type MergeID =
        | {
            customer_uuid: string;
            data_source_uuid?: never;
            external_id?: never;
        }
        | {
            customer_uuid?: never;
            data_source_uuid: string;
            external_id: string;
        };
    interface MergeCustomersParams {
        from: MergeID;
        into: MergeID;
    }
    type MoveToNewCustomerField = "tasks" | "opportunities" | "notes";
    type UnmergeCustomersParams = MergeID & {
        move_to_new_customer?: MoveToNewCustomerField[];
    };

    interface SubscriptionData {
        subscriptions: Array<{ uuid: string; data_source_uuid?: string }>;
    }

    function create(config: Config, data: NewCustomer): Promise<Customer>;
    function retrieve(config: Config, uuid: string): Promise<Customer>;
    function modify(config: Config, uuid: string, data: UpdateCustomer): Promise<Customer>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, params?: ListCustomersParams): Promise<Entries<Customer>>;
    function search(config: Config, params?: SearchCustomersParams): Promise<Entries<Customer>>;
    function merge(config: Config, params?: MergeCustomersParams): Promise<{}>;
    function unmerge(config: Config, params: UnmergeCustomersParams): Promise<{}>;
    function attributes(config: Config, uuid: string): Promise<Attributes>;
    /**
     * @deprecated Use Metrics.Customer.connectSubscriptions instead
     */
    function connectSubscriptions(config: Config, customerUuid: string, data: SubscriptionData): Promise<{}>;
    /**
     * @deprecated Use Metrics.Customer.disconnectSubscriptions instead
     */
    function disconnectSubscriptions(config: Config, customerUuid: string, data: SubscriptionData): Promise<{}>;

    function contacts(
        config: Config,
        customerId: string,
        params?: Contact.ListContactsParams,
    ): Promise<Entries<Contact.Contact>>;
    function createContact(
        config: Config,
        customerId: string,
        data: Contact.NewCustomerContact,
    ): Promise<Contact.Contact>;

    function notes(
        config: Config,
        customerId: string,
        params?: CustomerNote.ListCustomerNotesParams,
    ): Promise<Entries<CustomerNote.CustomerNote>>;
    function createNote(
        config: Config,
        customerId: string,
        data: CustomerNote.NewCustomerNote,
    ): Promise<CustomerNote.CustomerNote>;

    function opportunities(
        config: Config,
        customerId: string,
        params?: Opportunity.ListOpportunitiesParams,
    ): Promise<Entries<Opportunity.Opportunity>>;
    function createOpportunity(
        config: Config,
        customerId: string,
        data: Opportunity.NewOpportunity,
    ): Promise<Opportunity.Opportunity>;

    function tasks(
        config: Config,
        customerId: string,
        params?: Task.ListTasksParams,
    ): Promise<Entries<Task.Task>>;
    function createTask(config: Config, customerId: string, data: Task.NewTask): Promise<Task.Task>;
}

export namespace Opportunity {
    type OpportunityType = "one-time" | "recurring";
    type ForecastCategory = "pipeline" | "best_case" | "committed" | "omitted";
    type OpportunityPipeline = "New Business" | "Renewals";
    type OpportunityPipelineStage =
        | "Discovery"
        | "Evaluation"
        | "Negotiation"
        | "Verbal Commit"
        | "Closed Won"
        | "Closed Lost";
    interface Opportunity {
        uuid?: string;
        customer_uuid?: string;
        owner?: string;
        pipeline?: OpportunityPipeline | (string & {});
        pipeline_stage?: OpportunityPipelineStage | (string & {});
        estimated_close_date?: string;
        currency?: string;
        amount_in_cents?: number;
        type?: OpportunityType;
        forecast_category?: ForecastCategory;
        win_likelihood?: number;
        custom?: Map;
        created_at?: string;
        updated_at?: string;
    }
    interface ListOpportunitiesParams extends CursorParams {
        customer_uuid?: string;
        owner?: string;
        pipeline?: OpportunityPipeline | (string & {});
        pipeline_stage?: OpportunityPipelineStage | (string & {});
        estimated_close_date_on_or_after?: string;
        estimated_close_date_on_or_before?: string;
    }
    interface NewOpportunity {
        customer_uuid: string;
        owner: string;
        pipeline: OpportunityPipeline | (string & {});
        pipeline_stage: OpportunityPipelineStage | (string & {});
        estimated_close_date: string;
        amount_in_cents: number;
        currency: string;
        type?: OpportunityType;
        forecast_category?: ForecastCategory;
        win_likelihood?: number;
        custom?: Array<{ key: string; value: any }>;
    }
    interface UpdateOpportunity {
        owner?: string;
        pipeline?: OpportunityPipeline | (string & {});
        pipeline_stage?: OpportunityPipelineStage | (string & {});
        estimated_close_date?: string;
        amount_in_cents?: number;
        currency?: string;
        type?: OpportunityType;
        forecast_category?: ForecastCategory;
        win_likelihood?: number;
        custom?: Array<{ key: string; value: any }>;
    }

    function create(config: Config, data: NewOpportunity): Promise<Opportunity>;
    function retrieve(config: Config, uuid: string): Promise<Opportunity>;
    function modify(config: Config, uuid: string, data: UpdateOpportunity): Promise<Opportunity>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, params?: ListOpportunitiesParams): Promise<Entries<Opportunity>>;
}

export namespace Task {
    interface Task {
        task_uuid?: string;
        customer_uuid?: string;
        task_details?: string;
        assignee?: string;
        due_date?: string;
        completed_at?: string;
        created_at?: string;
        updated_at?: string;
    }
    interface ListTasksParams extends CursorParams {
        customer_uuid?: string;
        assignee?: string;
        due_date_on_or_after?: string;
        due_date_on_or_before?: string;
        completed?: boolean;
    }
    interface NewTask {
        customer_uuid: string;
        task_details: string;
        assignee: string;
        due_date: string;
        completed_at?: string;
    }
    interface UpdateTask {
        task_details?: string;
        assignee?: string;
        due_date?: string;
        completed_at?: string;
    }

    function create(config: Config, data: NewTask): Promise<Task>;
    function retrieve(config: Config, taskUuid: string): Promise<Task>;
    function modify(config: Config, taskUuid: string, data: UpdateTask): Promise<Task>;
    function destroy(config: Config, taskUuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, params?: ListTasksParams): Promise<Entries<Task>>;
}

export namespace CustomerNote {
    type CustomerNoteType = "note" | "call";
    interface CustomerNote {
        uuid?: string;
        customer_uuid?: string;
        type?: CustomerNoteType;
        text?: string;
        author?: string;
        call_duration?: number;
        created_at?: string;
        updated_at?: string;
    }
    interface ListCustomerNotesParams extends CursorParams {
        customer_uuid?: string;
        type?: CustomerNoteType;
        author_email?: string;
    }
    interface NewCustomerNote {
        customer_uuid: string;
        type: CustomerNoteType;
        author_email?: string;
        text?: string;
        call_duration?: number;
        created_at?: string;
    }
    interface UpdateCustomerNote {
        author_email?: string;
        text?: string;
        call_duration?: number;
        created_at?: string;
        updated_at?: string;
    }

    function create(config: Config, data: NewCustomerNote): Promise<CustomerNote>;
    function retrieve(config: Config, uuid: string): Promise<CustomerNote>;
    function modify(config: Config, uuid: string, data: UpdateCustomerNote): Promise<CustomerNote>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, params?: ListCustomerNotesParams): Promise<Entries<CustomerNote>>;
}

export namespace Contact {
    interface Contact {
        uuid?: string;
        customer_uuid?: string;
        customer_external_id?: string;
        data_source_uuid?: string;
        position?: number;
        first_name?: string;
        last_name?: string;
        title?: string;
        email?: string;
        phone?: string;
        linked_in?: string;
        twitter?: string;
        notes?: string;
        custom?: Map;
    }
    interface ListContactsParams extends CursorParams {
        customer_uuid?: string;
        data_source_uuid?: string;
        email?: string;
        customer_external_id?: string;
    }
    interface NewContact {
        customer_uuid: string;
        data_source_uuid: string;
        position?: number;
        first_name?: string;
        last_name?: string;
        title?: string;
        email?: string;
        phone?: string;
        linked_in?: string;
        twitter?: string;
        notes?: string;
        custom?: CustomAttribute.NewCustomAttribute[];
    }
    type NewCustomerContact = Omit<NewContact, "customer_uuid">;
    interface UpdateContact {
        position?: number;
        first_name?: string;
        last_name?: string;
        title?: string;
        email?: string;
        phone?: string;
        linked_in?: string;
        twitter?: string;
        notes?: string;
        custom?: CustomAttribute.NewCustomAttribute[];
    }

    function create(config: Config, data: NewContact): Promise<Contact>;
    function retrieve(config: Config, uuid: string): Promise<Contact>;
    function modify(config: Config, uuid: string, data: UpdateContact): Promise<Contact>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function merge(config: Config, intoContactUuid: string, fromContactUuid: string): Promise<Contact>;
    function all(config: Config, params?: ListContactsParams): Promise<Entries<Contact>>;
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
    interface NewPlan {
        data_source_uuid: string;
        name: string;
        interval_count: number;
        interval_unit: string;
        external_id?: string;
    }
    interface UpdatePlan {
        name?: string;
        interval_count?: number;
        interval_unit?: string;
    }

    function create(config: Config, data: NewPlan): Promise<Plan>;
    function retrieve(config: Config, uuid: string): Promise<Plan>;
    function modify(config: Config, uuid: string, data: UpdatePlan): Promise<Plan>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, params?: ListPlansParams): Promise<Plans>;
}

export namespace PlanGroup {
    interface PlanGroup {
        uuid?: string;
        name?: string;
        plans_count?: number;
    }
    interface PlanGroups extends Cursor {
        plan_groups: PlanGroup[];
    }
    interface NewPlanGroup {
        name: string;
        plans: string[];
    }
    interface UpdatePlanGroup {
        name?: string;
        plans?: string[];
    }

    function create(config: Config, data: NewPlanGroup): Promise<PlanGroup>;
    function retrieve(config: Config, uuid: string): Promise<PlanGroup>;
    function modify(config: Config, uuid: string, data: UpdatePlanGroup): Promise<PlanGroup>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, planGroupUuid: string, params?: CursorParams): Promise<Plan.Plans>;
    function all(config: Config, params?: CursorParams): Promise<PlanGroups>;
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

    interface NewLineItemBase {
        amount_in_cents: number;
        quantity?: number;
        discount_amount_in_cents?: number;
        discount_code?: string;
        tax_amount_in_cents?: number;
        transaction_fees_in_cents?: number;
        external_id?: string;
        account_code?: string;
        transaction_fees_currency?: string;
        discount_description?: string;
        event_order?: number;
    }

    interface NewSubscriptionLineItem extends NewLineItemBase {
        type: "subscription";
        subscription_external_id: string;
        subscription_set_external_id?: string;
        plan_uuid: string;
        service_period_start: string;
        service_period_end?: string;
        cancelled_at?: string;
        prorated?: boolean;
        proration_type?: "differential" | "full" | "differential_mrr";
    }

    interface NewOneTimeLineItem extends NewLineItemBase {
        type: "one_time";
        description?: string;
    }

    interface NewTrialLineItem extends NewLineItemBase {
        type: "trial";
        subscription_external_id: string;
        subscription_set_external_id?: string;
        plan_uuid: string;
        service_period_start: string;
        service_period_end: string;
        cancelled_at?: string;
        prorated?: boolean;
        proration_type?: "differential" | "full" | "differential_mrr";
    }

    type NewLineItem = NewSubscriptionLineItem | NewOneTimeLineItem | NewTrialLineItem;

    interface NewTransaction {
        date: string;
        type: "payment" | "refund";
        result: "successful" | "failed";
        amount_in_cents?: number;
        external_id?: string;
    }

    interface NewInvoice {
        external_id: string;
        date: string;
        currency: string;
        line_items: NewLineItem[];
        customer_external_id?: string;
        data_source_uuid?: string;
        transactions?: NewTransaction[];
        due_date?: string;
        collection_method?: "automatic" | "manual";
    }

    interface ListInvoicesParams extends CursorParams {
        data_source_uuid?: string;
        customer_uuid?: string;
        external_id?: string;
    }
    interface RetrieveInvoiceParams {
        validation_type?: "valid" | "invalid" | "all";
        include_edit_histories?: boolean;
        with_disabled?: boolean;
    }
    interface UpdateInvoice {
        date?: string;
        due_date?: string;
        currency?: string;
        collection_method?: "automatic" | "manual";
    }
    interface Invoices extends Cursor {
        customer_uuid?: string;
        invoices: Invoice[];
    }

    function create(
        config: Config,
        uuid: string,
        data: {
            invoices: NewInvoice[];
        },
    ): Promise<{ invoices: Invoice[] }>;
    function retrieve(config: Config, uuid: string, params?: RetrieveInvoiceParams): Promise<Invoice>;
    function modify(config: Config, uuid: string, data: UpdateInvoice): Promise<Invoice>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, uuid: string, params?: ListInvoicesParams): Promise<Invoices>;
    function all(config: Config, params?: ListInvoicesParams): Promise<Invoices>;
}

export namespace Transaction {
    interface Transaction {
        uuid?: string;
        external_id?: string;
        type?: string;
        date?: string;
        result?: string;
        amount_in_cents?: number | null;
        transaction_fees_in_cents?: number | null;
        transaction_fees_currency?: string | null;
        disabled?: boolean;
        disabled_at?: string | null;
        disabled_by?: string | null;
        user_created?: boolean;
    }

    interface NewTransaction {
        type: "payment" | "refund";
        date: string;
        result: "successful" | "failed";
        external_id?: string;
        amount_in_cents?: number;
        transaction_fees_in_cents?: number;
        transaction_fees_currency?: string;
    }

    function create(config: Config, invoiceUuid: string, data: NewTransaction): Promise<Transaction>;
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

export namespace SubscriptionEvent {
    type SubscriptionEventType =
        | "subscription_start"
        | "subscription_start_scheduled"
        | "scheduled_subscription_start_retracted"
        | "subscription_cancelled"
        | "subscription_cancellation_scheduled"
        | "scheduled_subscription_cancellation_retracted"
        | "subscription_updated"
        | "subscription_update_scheduled"
        | "scheduled_subscription_update_retracted"
        | "subscription_event_retracted";

    interface SubscriptionEvent {
        id?: number;
        data_source_uuid?: string;
        customer_external_id?: string;
        subscription_set_external_id?: string | null;
        subscription_external_id?: string;
        plan_external_id?: string;
        event_date?: string;
        effective_date?: string;
        event_type?: SubscriptionEventType;
        external_id?: string;
        errors?: Record<string, any>;
        created_at?: string;
        updated_at?: string;
        quantity?: number;
        currency?: string;
        amount_in_cents?: number | string;
        tax_amount_in_cents?: number;
        event_order?: number | null;
        retracted_event_id?: string | null;
    }

    interface NewSubscriptionEvent {
        data_source_uuid: string;
        customer_external_id: string;
        event_type: SubscriptionEventType;
        event_date: string;
        effective_date: string;
        subscription_external_id: string;
        plan_external_id?: string;
        currency?: string;
        amount_in_cents?: number;
        quantity?: number;
        subscription_set_external_id?: string;
        tax_amount_in_cents?: number;
        retracted_event_id?: string;
        external_id?: string;
        event_order?: number;
    }

    interface ListSubscriptionEventsParams extends CursorParams {
        external_id?: string;
        customer_external_id?: string;
        data_source_uuid?: string;
        subscription_external_id?: string;
        event_type?: SubscriptionEventType;
        event_date?: string;
        effective_date?: string;
        plan_external_id?: string;
        include_edit_histories?: boolean;
        with_disabled?: boolean;
    }

    interface SubscriptionEvents extends Cursor {
        subscription_events: SubscriptionEvent[];
    }

    interface UpdateSubscriptionEvent {
        external_id?: string;
        data_source_uuid?: string;
        id?: number;
        customer_external_id?: string;
        event_type?: SubscriptionEventType;
        event_date?: string;
        effective_date?: string;
        subscription_external_id?: string;
        plan_external_id?: string;
        currency?: string;
        amount_in_cents?: number;
        quantity?: number;
        subscription_set_external_id?: string;
        tax_amount_in_cents?: number;
        retracted_event_id?: string;
        event_order?: number;
    }

    interface DestroySubscriptionEvent {
        external_id?: string;
        data_source_uuid?: string;
        id?: number;
    }

    function create(config: Config, data: { subscription_event: NewSubscriptionEvent }): Promise<SubscriptionEvent>;
    function all(config: Config, params?: ListSubscriptionEventsParams): Promise<SubscriptionEvents>;
    function modify(config: Config, data: { subscription_event: UpdateSubscriptionEvent }): Promise<SubscriptionEvent>;
    function updateWithParams(
        config: Config,
        data: { subscription_event: UpdateSubscriptionEvent },
    ): Promise<SubscriptionEvent>;
    function destroy(
        config: Config,
        data: { subscription_event: DestroySubscriptionEvent },
    ): Promise<ResourceDestroyed>;
    function deleteWithParams(
        config: Config,
        data: { subscription_event: DestroySubscriptionEvent },
    ): Promise<ResourceDestroyed>;
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
    interface NewCustomAttribute {
        type?: string;
        key: string;
        value: any;
        source?: string;
    }

    interface CustomAttributes {
        custom: Map;
    }
    function add(config: Config, uuid: string, data: {
        email: string;
        custom: NewCustomAttribute[];
    }): Promise<Entries<Customer.Customer>>;
    function add(config: Config, uuid: string, data: {
        custom: NewCustomAttribute[];
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
        ["start-date"]: string;
        ["end-date"]: string;
        geo?: string;
        plans?: string;
        filters?: string;
    }
    interface All {
        entries: {
            date: string;
            mrr: number;
            ["mrr-percentage-change"]: number;
            arr: number;
            ["arr-percentage-change"]: number;
            ["customer-churn-rate"]: number;
            ["customer-churn-rate-percentage-change"]: number;
            ["mrr-churn-rate"]: number;
            ["mrr-churn-rate-percentage-change"]: number;
            ltv: number;
            ["ltv-percentage-change"]: number;
            customers: number;
            ["customers-percentage-change"]: number;
            asp: number;
            ["asp-percentage-change"]: number;
            arpa: number;
            ["arpa-percentage-change"]: number;
        };
        summary: {
            ["current-mrr"]: number;
            ["previous-mrr"]: number;
            ["mrr-percentage-change"]: number;
            ["current-arr"]: number;
            ["previous-arr"]: number;
            ["arr-percentage-change"]: number;
            ["current-customer-churn-rate"]: number;
            ["previous-customer-churn-rate"]: number;
            ["customer-churn-rate-percentage-change"]: number;
            ["current-mrr-churn-rate"]: number;
            ["previous-mrr-churn-rate"]: number;
            ["mrr-churn-rate-percentage-change"]: number;
            ["current-ltv"]: number;
            ["previous-ltv"]: number;
            ["ltv-percentage-change"]: number;
            ["current-customers"]: number;
            ["previous-customers"]: number;
            ["customers-percentage-change"]: number;
            ["current-asp"]: number;
            ["previous-asp"]: number;
            ["asp-percentage-change"]: number;
            ["current-arpa"]: number;
            ["previous-arpa"]: number;
            ["arpa-percentage-change"]: number;
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
            uuid: string;
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
        function connectSubscriptions(
            config: Config,
            dataSourceUuid: string,
            customerUuid: string,
            data: Array<{ uuid: string }>,
        ): Promise<{}>;
        function disconnectSubscriptions(
            config: Config,
            dataSourceUuid: string,
            customerUuid: string,
            data: Array<{ uuid: string }>,
        ): Promise<{}>;
    }

    namespace Activity {
        type ActivityType = "new_biz" | "reactivation" | "expansion" | "contraction" | "churn";

        interface Activity {
            description?: string;
            ["activity-mrr-movement"]?: number;
            ["activity-mrr"]?: number;
            ["activity-arr"]?: number;
            date?: string;
            type?: ActivityType;
            currency?: string;
            ["subscription-external-id"]?: string;
            ["plan-external-id"]?: string;
            subscription_set_external_id?: string | null;
            ["customer-name"]?: string;
            ["customer-uuid"]?: string;
            ["customer-external-id"]?: string;
            ["billing-connector-uuid"]?: string;
            uuid?: string;
        }

        interface ListActivitiesParams {
            cursor?: string;
            ["per-page"]?: number;
            ["start-date"]?: string;
            ["end-date"]?: string;
            type?: ActivityType;
            order?: "date" | "-date";
            ["start-after"]?: string;
        }

        interface Activities extends Cursor {
            entries: Activity[];
        }

        function all(config: Config, params?: ListActivitiesParams): Promise<Activities>;
    }

    namespace ActivitiesExport {
        type ActivityType = "new_biz" | "reactivation" | "expansion" | "contraction" | "churn";
        type ExportStatus = "pending" | "processing" | "failed" | "successful";

        interface ActivitiesExport {
            id?: string;
            status?: ExportStatus;
            file_url?: string | null;
            params?: {
                kind?: string;
                params?: {
                    activity_type?: ActivityType;
                    start_date?: string;
                    end_date?: string;
                };
            };
            expires_at?: string | null;
            created_at?: string;
        }

        interface NewActivitiesExport {
            ["start-date"]?: string;
            ["end-date"]?: string;
            type?: ActivityType;
        }

        function create(config: Config, data?: NewActivitiesExport): Promise<ActivitiesExport>;
        function retrieve(config: Config, id: string): Promise<ActivitiesExport>;
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
