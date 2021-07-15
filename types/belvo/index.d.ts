// Type definitions for belvo 0.16
// Project: https://github.com/belvo-finance/belvo-js#readme
// Definitions by: Renan Araújo <https://github.com/renan-at-belvo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

    export default class Client {
        constructor(secretId: string, secretPassword: string, baseURL: string);

        // WIDGET TOKEN
        widgetToken: WidgetTokenResource;
        connect: () => void;

        // CORE ENDPOINTS
        institutions: InstitutionsResources<InstitutionReturn>;
        links: LinksResources<LinksRetrieveBody, LinksUpdate, LinksReturn>;

        // BANKING AND GIG API
        accounts: AccountsResources;
        transactions: TransactionsResources;
        balances: BalancesResources;
        owners: OwnersResources;
        statements: StatementsResources;
        incomes: IncomesResources;

        // FISCAL API
        invoices: InvoicesResources;
        taxComplianceStatus: TaxComplianceStatusResources;
        taxReturns: TaxReturnsResources;
        taxStatus: TaxStatusResources;
    }

    export type InstitutionsResources<V> = Omit<BaseResources<V>, "delete" | "resume">;

    export type LinksResources<T, U, V> = BaseResources<V> & UpdateResource<U, V> & RegisterResource<T, V>;

    export type TransactionsResources = BaseResources<TransactionsReturn> & RetrieveResource<TransactionsRetrieveBody>;

    export type BalancesResources = BaseResources<BalancesReturn> & RetrieveResource<BalancesRetrieveBody>;

    export type OwnersResources = BaseResources<OwnersReturn> & RetrieveResource<OwnersRetrieveBody>;

    export type StatementsResources = BaseResources<StatementsReturn> & RetrieveResource<StatementsRetrieveBody>;

    export type IncomesResources = BaseResources<IncomesReturn> & RetrieveResource<IncomesRetrieveBody>;

    export type AccountsResources = BaseResources<AccountsReturn> & RetrieveResource<AccountsRetrieveBody>;

    export type InvoicesResources = Omit<BaseResources<InvoicesReturn>, "resume"> & RetrieveResource<InvoicesRetrieveBody>;

    export type TaxComplianceStatusResources = Omit<BaseResources<TaxComplianceStatusReturn>, "resume"> & RetrieveResource<TaxComplianceStatusRetrieveBody>;

    export type TaxReturnsResources = Omit<BaseResources<TaxReturnsReturn>, "resume"> & RetrieveResource<TaxReturnsRetrieveBody>;

    export type TaxStatusResources = Omit<BaseResources<TaxStatusReturn>, "resume"> & RetrieveResource<TaxStatusRetrieveBody>;

    export interface WidgetTokenResource {
        create: (options?: TokenOptions) => Promise<TokenReturn>;
    }

    export interface TokenOptions {
        scopes?: string;
        link?: string;
        widget?: {
            branding?: {
                company_icon?: string;
                company_logo?: string;
                company_name?: string;
                company_benefit_header?: string;
                company_benefit_content?: string;
                opportunity_loss?: string;
            }
        };
    }

    export interface TokenReturn {
        access: string;
        refresh: string;
    }

    export interface BaseResources<V> {
        list: (params?: { filters?: object, limit?: number }) => Promise<ListReturn<V>>;
        detail: (id: string) => Promise<V>;
        delete: (id: string) => Promise<void>;
        resume: (session: string, token: string, link: string) => Promise<V>;
    }

    export interface RetrieveResource<K> {
        retrieve: K;
    }

    export interface RegisterResource<K, T> {
        register: (institution: string, username: string, password: string, options?: K) => Promise<T>;
    }

    export interface UpdateResource<K, T> {
        update: (id: string, options?: K) => Promise<T>;
    }

    export interface ListReturn<T> {
        count: number;
        next: string | null;
        previous: string | null;
        results: T[];
    }

    export interface LinksRetrieveBody {
        username2?: string;
        username3?: string;
        password2?: string;
        token?: string;
        access_mode?: string;
        username_type?: string;
        certificate?: string;
        private_key?: string;
    }

    export interface LinksUpdate {
        password?: string;
        password2?: string;
        token?: string | null;
        username_type?: string | null;
        certificate?: string | null;
        private_key?: string | null;
    }

    export type TransactionsRetrieveBody = (
        link: string,
        dateFrom: string,
        dateTo: string,
        options?: {
            token?: string,
            saveData?: boolean,
            account?: string,
        }
    ) => Promise<TransactionsReturn | TransactionsReturn[]>;

    export type BalancesRetrieveBody = (
        link: string,
        dateFrom: string,
        options?: {
            token?: string,
            saveData?: boolean,
            account?: string,
            dateTo?: string
        }
    ) => Promise<BalancesReturn | BalancesReturn[]>;

    export type OwnersRetrieveBody = (
        link: string,
        options?: {
            token?: string,
            saveData?: string
        }
    ) => Promise<OwnersReturn | OwnersReturn[]>;

    export type StatementsRetrieveBody = (
        link: string,
        account: string,
        year: string,
        month: string,
        options?: {
            token?: string;
            attachPDF?: boolean;
            saveData?: boolean;
        }
    ) => Promise<StatementsReturn | StatementsReturn[]>;

    export type IncomesRetrieveBody = (
        link: string,
        options?: {
            token?: string,
            saveData?: string
        }
    ) => Promise<IncomesReturn | IncomesReturn[]>;

    export type AccountsRetrieveBody = (
        link: string,
        options?: {
            token?: string,
            saveData?: string
        }
    ) => Promise<AccountsReturn | AccountsReturn[]>;

    export type InvoicesRetrieveBody = (
        date_from: string,
        date_to: string,
        link: string,
        type: string,
        options?: {
            token?: string,
            attachXML?: boolean,
            saveData?: boolean
        }
    ) => Promise<InvoicesReturn | InvoicesReturn[]>;

    export type TaxComplianceStatusRetrieveBody = (
        link: string,
        options?: {
            attachPDF?: boolean,
            saveData?: boolean
        }
    ) => Promise<TaxComplianceStatusReturn | TaxComplianceStatusReturn[]>;

    export type TaxReturnsRetrieveBody = (
        link: string,
        yearFrom: number,
        yearTo: number,
        options?: {
            attachPDF?: boolean,
            saveData?: boolean
        }
    ) => Promise<TaxReturnsReturn | TaxReturnsReturn[]>;

    export type TaxStatusRetrieveBody = (
        link: string,
        options?: {
            attachPDF?: boolean,
            saveData?: boolean
        }
    ) => Promise<TaxStatusReturn | TaxStatusReturn[]>;

    export interface LinksReturn {
        id: string;
        institution: string;
        access_mode: string;
        status: string;
        created_by: string;
        last_accessed_at: string;
        external_id: string | null;
    }

    export interface InstitutionReturn {
        id: number;
        name: string;
        type: string;
        code?: any;
        website: string;
        display_name: string;
        country_code: string;
        country_codes: string[];
        primary_color: string;
        logo: string;
        icon_logo?: any;
        text_logo?: any;
        form_fields: InstitutionFormFields[];
        customization?: any;
        features: any[];
    }

    export interface TransactionsReturn {
        id?: string;
        account: AccountsReturn;
        collected_at: string;
        value_date: string;
        accounting_date: string;
        internal_identification: string | null;
        amount: number;
        balance: number;
        currency: string;
        description: string;
        observations: string;
        category: string;
        reference: string;
        type: string;
        status: string;
        gig_data?: any;
        credit_card_data: CreditCardData;
    }

    export interface BalancesReturn {
        id?: string;
        account: Pick<AccountsReturn, "id" | "name" | "category" | "currency">;
        collected_at: string;
        value_date: string;
        balance: number;
    }

    export interface StatementsReturn {
        id?: string;
        link: string;
        account: Pick<AccountsReturn, "id" | "name" | "category" | "currency">;
        collected_at: string;
        account_number: string;
        client_number: number;
        RFC: string;
        CLABE: string;
        period_start_date: string;
        period_end_date: string;
        cut_date: string;
        final_balance: number;
        previous_balance: number;
        total_inflow_amount: number;
        total_outflow_amount: number;
        total_inflow_transactions: number;
        total_outflow_transactions: number;
        transactions: TransactionsReturn[];
        pdf: string;
    }

    export interface OwnersReturn {
        id?: string;
        link: string;
        collected_at: string;
        display_name: string;
        first_name: string;
        last_name: string;
        second_last_name: string;
        email: string;
        phone_number: string;
        address: string;
        internal_identification: string;
        accounts: AccountsReturn[];
        gig_data?: any;
    }

    export interface IncomesReturn {
        id?: string;
        collected_at: string;
        account: Pick<AccountsReturn, "name" | "currency" | "category">;
        currency: string;
        sources: IncomesSource[];
    }

    export interface AccountsReturn {
        id?: string;
        link: string;
        institution: Institution;
        collected_at: string;
        category: string;
        type: string;
        name: string;
        number: string;
        balance: Balance;
        currency: string;
        bank_product_id: string;
        internal_identification: string;
        public_identification_name: string;
        public_identification_value: string;
        last_accessed_at: string;
        credit_data?: CreditData;
        loan_data?: any;
        funds_data?: any;
        gig_payment_data?: any;
    }

    export interface InvoicesReturn {
        id?: string;
        link: string;
        collected_at: string;
        invoice_identification: string;
        invoice_date: string;
        status: string;
        invoice_type: string;
        type: string;
        sender_id: string;
        sender_name: string;
        receiver_id: string;
        receiver_name: string;
        cancelation_status?: any;
        cancelation_update_date?: any;
        certification_date: string;
        certification_authority: string;
        payment_type: string;
        payment_method: string;
        usage: string;
        place_of_issue: string;
        version: string;
        invoice_details: InvoiceDetail[];
        currency: string;
        subtotal_amount: number;
        exchange_rate: number;
        tax_amount: number;
        discount_amount: number;
        total_amount: number;
        payments: any[];
        payroll?: any;
        xml: string;
        warnings: Warnings;
    }

    export interface TaxComplianceStatusReturn {
        id?: string;
        collected_at: string;
        internal_identification: string;
        pdf: string;
        rfc: string;
        outcome: string;
    }

    export interface TaxReturnsReturn {
        id?: string;
        link: string;
        collected_at: string;
        informacion_general: object;
        sueldos_salarios: object;
        servicios_profesionales: object;
        deducciones_personales: object;
        determinacion_impuesto: object;
        retenciones: object;
        dividendos: object;
        datos_informativos: object;
        pdf: string;
        receipt_pdf: string;
    }

    export interface TaxStatusReturn {
        id?: string;
        link: string;
        collected_at: string;
        place_and_date_of_issuance: string;
        official_name: string;
        id_cif: string;
        tax_payer_information: TaxPayerInformation;
        address: Address;
        economic_activity: EconomicActivity[];
        regimes: Regime[];
        obligations: Obligation[];
        digital_stamp: string;
        digital_stamp_chain: string;
        pdf: string;
    }

    export interface Institution {
        name: string;
        type: string;
    }

    export interface Balance {
        available: number;
        current: number;
    }

    export interface InstitutionFormFields {
        name: string;
        type: string;
        label: string;
        validation: string;
        placeholder: string;
        validation_message: string;
    }

    export interface IncomesSource {
        transactions: Pick<TransactionsReturn, "amount" | "value_date" | "description">;
        confidence: string;
        type: string;
    }

    export interface CreditCardData {
        bill_name: string;
    }

    export interface CreditData {
        credit_limit: number;
        collected_at: string;
        cutting_date: string;
        end_date: string;
        minimum_payment: number;
        monthly_payment: number;
        no_interest_payment: number;
        last_payment_date: string;
        last_period_balance: number;
        interest_rate: number;
    }

    export interface InvoiceDetail {
        description: string;
        product_identification: string;
        quantity: number;
        unit_code: string;
        unit_description: string;
        unit_amount: number;
        pre_tax_amount: number;
        tax_percentage: number;
        tax_amount: number;
        total_amount: number;
        retained_taxes: any[];
        collected_at: string;
    }

    export interface Warnings {
        code: string;
        message: string;
    }

    export interface TaxPayerInformation {
        rfc: string;
        curp: string;
        name: string;
        first_last_name: string;
        second_last_name: string;
        start_operations_date: string;
        status_padron: string;
        last_status_change_date: string;
        commercial_name: string;
        social_name?: any;
        email: string;
        phone: string;
    }

    export interface Address {
        postal_code: string;
        street_type: string;
        street: string;
        exterior_number: string;
        interior_number: string;
        suburb: string;
        locality?: any;
        municipality: string;
        state: string;
        between_street: string[];
    }

    export interface EconomicActivity {
        order: string;
        economic_activity: string;
        percentage: string;
        initial_date: string;
        end_date?: any;
    }

    export interface Regime {
        regime: string;
        initial_date: string;
        end_date?: any;
    }

    export interface Obligation {
        obligation: string;
        expiration: string;
        initial_date: string;
        end_date?: any;
    }
