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
        | string
        | undefined;

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
        owner?: string | undefined;
        website_url?: string | undefined;
    }
    interface PrimaryContact {
        first_name?: string | undefined;
        last_name?: string | undefined;
        email?: string | undefined;
        title?: string | undefined;
        phone?: string | undefined;
        linked_in?: string | undefined;
        twitter?: string | undefined;
        notes?: string | undefined;
    }
    interface NewCustomer {
        data_source_uuid: string;
        external_id: string;
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
        owner?: string | undefined;
        primary_contact?: PrimaryContact | undefined;
        website_url?: string | undefined;
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
        attributes?: UpdateAttributes | undefined;
        owner?: string | undefined;
        primary_contact?: PrimaryContact | undefined;
        website_url?: string | undefined;
        status?: string | undefined;
    }
    interface UpdateAttributes {
        tags?: Strings | undefined;
        custom?: Map | undefined;
    }
    interface NewAttributes {
        tags?: Strings | undefined;
        custom?: CustomAttribute.NewCustomAttribute[] | undefined;
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
        email?: string | undefined;
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
        move_to_new_customer?: MoveToNewCustomerField[] | undefined;
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
        uuid?: string | undefined;
        customer_uuid?: string | undefined;
        owner?: string | undefined;
        pipeline?: (OpportunityPipeline | (string & {})) | undefined;
        pipeline_stage?: (OpportunityPipelineStage | (string & {})) | undefined;
        estimated_close_date?: string | undefined;
        currency?: string | undefined;
        amount_in_cents?: number | undefined;
        type?: OpportunityType | undefined;
        forecast_category?: ForecastCategory | undefined;
        win_likelihood?: number | undefined;
        custom?: Map | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    }
    interface ListOpportunitiesParams extends CursorParams {
        customer_uuid?: string | undefined;
        owner?: string | undefined;
        pipeline?: (OpportunityPipeline | (string & {})) | undefined;
        pipeline_stage?: (OpportunityPipelineStage | (string & {})) | undefined;
        estimated_close_date_on_or_after?: string | undefined;
        estimated_close_date_on_or_before?: string | undefined;
    }
    interface NewOpportunity {
        customer_uuid: string;
        owner: string;
        pipeline: OpportunityPipeline | (string & {});
        pipeline_stage: OpportunityPipelineStage | (string & {});
        estimated_close_date: string;
        amount_in_cents: number;
        currency: string;
        type?: OpportunityType | undefined;
        forecast_category?: ForecastCategory | undefined;
        win_likelihood?: number | undefined;
        custom?: Array<{ key: string; value: any }> | undefined;
    }
    interface UpdateOpportunity {
        owner?: string | undefined;
        pipeline?: (OpportunityPipeline | (string & {})) | undefined;
        pipeline_stage?: (OpportunityPipelineStage | (string & {})) | undefined;
        estimated_close_date?: string | undefined;
        amount_in_cents?: number | undefined;
        currency?: string | undefined;
        type?: OpportunityType | undefined;
        forecast_category?: ForecastCategory | undefined;
        win_likelihood?: number | undefined;
        custom?: Array<{ key: string; value: any }> | undefined;
    }

    function create(config: Config, data: NewOpportunity): Promise<Opportunity>;
    function retrieve(config: Config, uuid: string): Promise<Opportunity>;
    function modify(config: Config, uuid: string, data: UpdateOpportunity): Promise<Opportunity>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, params?: ListOpportunitiesParams): Promise<Entries<Opportunity>>;
}

export namespace Task {
    interface Task {
        task_uuid?: string | undefined;
        customer_uuid?: string | undefined;
        task_details?: string | undefined;
        assignee?: string | undefined;
        due_date?: string | undefined;
        completed_at?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    }
    interface ListTasksParams extends CursorParams {
        customer_uuid?: string | undefined;
        assignee?: string | undefined;
        due_date_on_or_after?: string | undefined;
        due_date_on_or_before?: string | undefined;
        completed?: boolean | undefined;
    }
    interface NewTask {
        customer_uuid: string;
        task_details: string;
        assignee: string;
        due_date: string;
        completed_at?: string | undefined;
    }
    interface UpdateTask {
        task_details?: string | undefined;
        assignee?: string | undefined;
        due_date?: string | undefined;
        completed_at?: string | undefined;
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
        uuid?: string | undefined;
        customer_uuid?: string | undefined;
        type?: CustomerNoteType | undefined;
        text?: string | undefined;
        author?: string | undefined;
        call_duration?: number | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    }
    interface ListCustomerNotesParams extends CursorParams {
        customer_uuid?: string | undefined;
        type?: CustomerNoteType | undefined;
        author_email?: string | undefined;
    }
    interface NewCustomerNote {
        customer_uuid: string;
        type: CustomerNoteType;
        author_email?: string | undefined;
        text?: string | undefined;
        call_duration?: number | undefined;
        created_at?: string | undefined;
    }
    interface UpdateCustomerNote {
        author_email?: string | undefined;
        text?: string | undefined;
        call_duration?: number | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
    }

    function create(config: Config, data: NewCustomerNote): Promise<CustomerNote>;
    function retrieve(config: Config, uuid: string): Promise<CustomerNote>;
    function modify(config: Config, uuid: string, data: UpdateCustomerNote): Promise<CustomerNote>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, params?: ListCustomerNotesParams): Promise<Entries<CustomerNote>>;
}

export namespace Contact {
    interface Contact {
        uuid?: string | undefined;
        customer_uuid?: string | undefined;
        customer_external_id?: string | undefined;
        data_source_uuid?: string | undefined;
        position?: number | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        title?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        linked_in?: string | undefined;
        twitter?: string | undefined;
        notes?: string | undefined;
        custom?: Map | undefined;
    }
    interface ListContactsParams extends CursorParams {
        customer_uuid?: string | undefined;
        data_source_uuid?: string | undefined;
        email?: string | undefined;
        customer_external_id?: string | undefined;
    }
    interface NewContact {
        customer_uuid: string;
        data_source_uuid: string;
        position?: number | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        title?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        linked_in?: string | undefined;
        twitter?: string | undefined;
        notes?: string | undefined;
        custom?: CustomAttribute.NewCustomAttribute[] | undefined;
    }
    type NewCustomerContact = Omit<NewContact, "customer_uuid">;
    interface UpdateContact {
        position?: number | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        title?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        linked_in?: string | undefined;
        twitter?: string | undefined;
        notes?: string | undefined;
        custom?: CustomAttribute.NewCustomAttribute[] | undefined;
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
    interface NewPlan {
        data_source_uuid: string;
        name: string;
        interval_count: number;
        interval_unit: string;
        external_id?: string | undefined;
    }
    interface UpdatePlan {
        name?: string | undefined;
        interval_count?: number | undefined;
        interval_unit?: string | undefined;
    }

    function create(config: Config, data: NewPlan): Promise<Plan>;
    function retrieve(config: Config, uuid: string): Promise<Plan>;
    function modify(config: Config, uuid: string, data: UpdatePlan): Promise<Plan>;
    function destroy(config: Config, uuid: string): Promise<ResourceDestroyed>;
    function all(config: Config, params?: ListPlansParams): Promise<Plans>;
}

export namespace PlanGroup {
    interface PlanGroup {
        uuid?: string | undefined;
        name?: string | undefined;
        plans_count?: number | undefined;
    }
    interface PlanGroups extends Cursor {
        plan_groups: PlanGroup[];
    }
    interface NewPlanGroup {
        name: string;
        plans: string[];
    }
    interface UpdatePlanGroup {
        name?: string | undefined;
        plans?: string[] | undefined;
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

    interface NewLineItemBase {
        amount_in_cents: number;
        quantity?: number | undefined;
        discount_amount_in_cents?: number | undefined;
        discount_code?: string | undefined;
        tax_amount_in_cents?: number | undefined;
        transaction_fees_in_cents?: number | undefined;
        external_id?: string | undefined;
        account_code?: string | undefined;
        transaction_fees_currency?: string | undefined;
        discount_description?: string | undefined;
        event_order?: number | undefined;
    }

    interface NewSubscriptionLineItem extends NewLineItemBase {
        type: "subscription";
        subscription_external_id: string;
        subscription_set_external_id?: string | undefined;
        plan_uuid: string;
        service_period_start: string;
        service_period_end?: string | undefined;
        cancelled_at?: string | undefined;
        prorated?: boolean | undefined;
        proration_type?: "differential" | "full" | "differential_mrr" | undefined;
    }

    interface NewOneTimeLineItem extends NewLineItemBase {
        type: "one_time";
        description?: string | undefined;
    }

    interface NewTrialLineItem extends NewLineItemBase {
        type: "trial";
        subscription_external_id: string;
        subscription_set_external_id?: string | undefined;
        plan_uuid: string;
        service_period_start: string;
        service_period_end: string;
        cancelled_at?: string | undefined;
        prorated?: boolean | undefined;
        proration_type?: "differential" | "full" | "differential_mrr" | undefined;
    }

    type NewLineItem = NewSubscriptionLineItem | NewOneTimeLineItem | NewTrialLineItem;

    interface NewTransaction {
        date: string;
        type: "payment" | "refund";
        result: "successful" | "failed";
        amount_in_cents?: number | undefined;
        external_id?: string | undefined;
    }

    interface NewInvoice {
        external_id: string;
        date: string;
        currency: string;
        line_items: NewLineItem[];
        customer_external_id?: string | undefined;
        data_source_uuid?: string | undefined;
        transactions?: NewTransaction[] | undefined;
        due_date?: string | undefined;
        collection_method?: "automatic" | "manual" | undefined;
    }

    interface ListInvoicesParams extends CursorParams {
        data_source_uuid?: string | undefined;
        customer_uuid?: string | undefined;
        external_id?: string | undefined;
    }
    interface RetrieveInvoiceParams {
        validation_type?: "valid" | "invalid" | "all" | undefined;
        include_edit_histories?: boolean | undefined;
        with_disabled?: boolean | undefined;
    }
    interface UpdateInvoice {
        date?: string | undefined;
        due_date?: string | undefined;
        currency?: string | undefined;
        collection_method?: "automatic" | "manual" | undefined;
    }
    interface Invoices extends Cursor {
        customer_uuid?: string | undefined;
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
        uuid?: string | undefined;
        external_id?: string | undefined;
        type?: string | undefined;
        date?: string | undefined;
        result?: string | undefined;
        amount_in_cents?: number | null | undefined;
        transaction_fees_in_cents?: number | null | undefined;
        transaction_fees_currency?: string | null | undefined;
        disabled?: boolean | undefined;
        disabled_at?: string | null | undefined;
        disabled_by?: string | null | undefined;
        user_created?: boolean | undefined;
    }

    interface NewTransaction {
        type: "payment" | "refund";
        date: string;
        result: "successful" | "failed";
        external_id?: string | undefined;
        amount_in_cents?: number | undefined;
        transaction_fees_in_cents?: number | undefined;
        transaction_fees_currency?: string | undefined;
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
        id?: number | undefined;
        data_source_uuid?: string | undefined;
        customer_external_id?: string | undefined;
        subscription_set_external_id?: string | null | undefined;
        subscription_external_id?: string | undefined;
        plan_external_id?: string | undefined;
        event_date?: string | undefined;
        effective_date?: string | undefined;
        event_type?: SubscriptionEventType | undefined;
        external_id?: string | undefined;
        errors?: Record<string, any> | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
        quantity?: number | undefined;
        currency?: string | undefined;
        amount_in_cents?: number | string | undefined;
        tax_amount_in_cents?: number | undefined;
        event_order?: number | null | undefined;
        retracted_event_id?: string | null | undefined;
    }

    interface NewSubscriptionEvent {
        data_source_uuid: string;
        customer_external_id: string;
        event_type: SubscriptionEventType;
        event_date: string;
        effective_date: string;
        subscription_external_id: string;
        plan_external_id?: string | undefined;
        currency?: string | undefined;
        amount_in_cents?: number | undefined;
        quantity?: number | undefined;
        subscription_set_external_id?: string | undefined;
        tax_amount_in_cents?: number | undefined;
        retracted_event_id?: string | undefined;
        external_id?: string | undefined;
        event_order?: number | undefined;
    }

    interface ListSubscriptionEventsParams extends CursorParams {
        external_id?: string | undefined;
        customer_external_id?: string | undefined;
        data_source_uuid?: string | undefined;
        subscription_external_id?: string | undefined;
        event_type?: SubscriptionEventType | undefined;
        event_date?: string | undefined;
        effective_date?: string | undefined;
        plan_external_id?: string | undefined;
        include_edit_histories?: boolean | undefined;
        with_disabled?: boolean | undefined;
    }

    interface SubscriptionEvents extends Cursor {
        subscription_events: SubscriptionEvent[];
    }

    interface UpdateSubscriptionEvent {
        external_id?: string | undefined;
        data_source_uuid?: string | undefined;
        id?: number | undefined;
        customer_external_id?: string | undefined;
        event_type?: SubscriptionEventType | undefined;
        event_date?: string | undefined;
        effective_date?: string | undefined;
        subscription_external_id?: string | undefined;
        plan_external_id?: string | undefined;
        currency?: string | undefined;
        amount_in_cents?: number | undefined;
        quantity?: number | undefined;
        subscription_set_external_id?: string | undefined;
        tax_amount_in_cents?: number | undefined;
        retracted_event_id?: string | undefined;
        event_order?: number | undefined;
    }

    interface DestroySubscriptionEvent {
        external_id?: string | undefined;
        data_source_uuid?: string | undefined;
        id?: number | undefined;
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
        type?: string | undefined;
        key: string;
        value: any;
        source?: string | undefined;
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
        interval?: string | undefined;
    }
    interface ParamsNoInterval {
        ["start-date"]: string;
        ["end-date"]: string;
        geo?: string | undefined;
        plans?: string | undefined;
        filters?: string | undefined;
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
