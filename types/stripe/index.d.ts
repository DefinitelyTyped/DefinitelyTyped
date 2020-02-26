// Type definitions for stripe 7.13
// Project: https://github.com/stripe/stripe-node/
// Definitions by: William Johnston <https://github.com/wjohnsto>
//                 Peter Harris <https://github.com/codeanimal>
//                 Sampson Oliver <https://github.com/sampsonjoliver>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 Brannon Jones <https://github.com/brannon>
//                 Kyle Kamperschroer <https://github.com/kkamperschroer>
//                 Kensuke Hoshikawa <https://github.com/starhoshi>
//                 Gal Talmor <https://github.com/galtalmor>
//                 Hunter Tunnicliff <https://github.com/htunnicliff>
//                 Tyler Jones <https://github.com/squirly>
//                 Troy Zarger <https://github.com/tzarger>
//                 Slava Yultyyev <https://github.com/yultyyev>
//                 Corey Psoinos <https://github.com/cpsoinos>
//                 Adam Duren <https://github.com/adamduren>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Jonas Keisel <https://github.com/0xJoKe>
//                 Andrew Delianides <https://github.com/delianides>
//                 Gokul Chandrasekaran <https://github.com/gokulchandra>
//                 Jamie Davies <https://github.com/viralpickaxe>
//                 Christopher Eck <https://github.com/chrisleck>
//                 Joshua Feltimo <https://github.com/opticalgenesis>
//                 Josiah <https://github.com/spacetag>
//                 Oleg Vaskevich <https://github.com/vaskevich>
//                 Dylan Aspden <https://github.com/dhaspden>
//                 Ethan Setnik <https://github.com/esetnik>
//                 Pavel Ivanov <https://github.com/schfkt>
//                 Chris Zieba <https://github.com/ChrisZieba>
//                 Jeffery Grajkowski <https://github.com/pushplay>
//                 Claus Stilborg <https://github.com/stilborg>
//                 Jorgen Vik <https://github.com/jvik>
//                 Richard Ward <https://github.com/richardwardza>
//                 Aseel Al Dallal <https://github.com/Aseelaldallal>
//                 Collin Pham <https://github.com/collin-pham>
//                 Timon van Spronsen <https://github.com/TimonVS>
//                 Sean Chen <https://github.com/kamiyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import { Agent } from 'http';

interface RequestEvent {
    api_version: string;
    account?: string;
    idempotency_key?: string;
    method: string;
    path: string;
    request_start_time: number;
}

interface ResponseEvent {
    api_version: string;
    account?: string;
    idempotency_key?: string;
    method: string;
    path: string;
    status: number;
    request_id: string;
    elapsed: number;
    request_start_time: number;
    request_end_time: number;
}

interface StripeConfig {
    apiVersion?: string | null;
    maxNetworkRetries?: number;
    httpAgent?: Agent | null;
    timeout?: number;
    host?: string;
    port?: number;
    telemetry?: boolean;
}

declare class Stripe {
    DEFAULT_HOST: string;
    DEFAULT_PORT: string;
    DEFAULT_BASE_PATH: string;
    DEFAULT_API_VERSION: string;
    DEFAULT_TIMEOUT: number;
    PACKAGE_VERSION: string;
    USER_AGENT: {
        bindings_version: string;
        lang: string;
        lang_version: string;
        platform: string;
        publisher: string;
        uname: string;
    };
    USER_AGENT_SERIALIZED: string;

    resources: typeof Stripe.resources;
    StripeResource: typeof Stripe.StripeResource;

    constructor(apiKey: string, version?: string);
    constructor(apiKey: string, config?: StripeConfig);

    accounts: Stripe.resources.Accounts;
    balance: Stripe.resources.Balance;
    balanceTransactions: Stripe.resources.BalanceTransaction;
    charges: Stripe.resources.Charges;
    checkout: Stripe.resources.Checkout;
    coupons: Stripe.resources.Coupons;
    creditNotes: Stripe.resources.CreditNotes;
    customers: Stripe.resources.Customers;
    disputes: Stripe.resources.Disputes;
    events: Stripe.resources.Events;
    invoices: Stripe.resources.Invoices;
    invoiceItems: Stripe.resources.InvoiceItems;
    issuing: Stripe.resources.Issuing;
    paymentIntents: Stripe.resources.PaymentIntents;
    paymentMethods: Stripe.resources.PaymentMethods;
    payouts: Stripe.resources.Payouts;
    plans: Stripe.resources.Plans;
    oauth: Stripe.resources.OAuth;

    /**
     * @deprecated
     */
    recipientCards: Stripe.resources.RecipientCards;
    /**
     * @deprecated
     */
    recipients: Stripe.resources.Recipients;
    subscriptions: Stripe.resources.Subscriptions;
    subscriptionItems: Stripe.resources.SubscriptionItems;
    taxRates: Stripe.resources.TaxRates;
    tokens: Stripe.resources.Tokens;
    topups: Stripe.resources.Topups;
    transfers: Stripe.resources.Transfers;
    applicationFees: Stripe.resources.ApplicationFees;
    files: Stripe.resources.Files;
    fileLinks: Stripe.resources.FileLinks;
    bitcoinReceivers: Stripe.resources.BitcoinReceivers;
    refunds: Stripe.resources.Refunds;
    reviews: Stripe.resources.Reviews;
    countrySpecs: Stripe.resources.CountrySpecs;
    orders: Stripe.resources.Orders;
    products: Stripe.resources.Products;
    setupIntents: Stripe.resources.SetupIntents;
    skus: Stripe.resources.SKUs;
    webhooks: Stripe.resources.WebHooks;
    webhookEndpoints: Stripe.resources.WebhookEndpoints;
    ephemeralKeys: Stripe.resources.EphemeralKeys;
    usageRecords: Stripe.resources.UsageRecords;
    usageRecordSummaries: Stripe.resources.UsageRecordSummaries;
    sources: Stripe.resources.Sources;

    setHost(host: string): void;
    setHost(host: string, port: string | number): void;
    setHost(host: string, port: string | number, protocol: string): void;

    setProtocol(protocol: string): void;
    setPort(port: string | number): void;
    setApiVersion(version?: string): void;
    setApiKey(key?: string): void;
    setAppInfo(info?: { partner_id?: string; name: string; url?: string; version?: string }): void;
    setTimeout(timeout?: number): void;
    setMaxNetworkRetries(maxNetworkRetries: number): void;
    setTelemetryEnabled(enabled: boolean): void;
    setHttpAgent(agent: Agent): void;
    getConstant(c: string): any;
    getMaxNetworkRetries(): number;
    getTelemetryEnabled(): boolean;
    getClientUserAgent(response: (userAgent: string) => void): void;

    on(event: 'request', handler: (event: RequestEvent) => void): void;
    on(event: 'response', handler: (event: ResponseEvent) => void): void;
    once(event: 'request', handler: (event: RequestEvent) => void): void;
    once(event: 'response', handler: (event: ResponseEvent) => void): void;
    off(event: 'request', handler: (event: RequestEvent) => void): void;
    off(event: 'response', handler: (event: ResponseEvent) => void): void;
}

export = Stripe;

declare namespace Stripe {
    // Helper
    type IBankAccount = bankAccounts.IBankAccount;
    type ICard = cards.ICard;
    type ISource = sources.ISource;

    /** Any Stripe source, including a bank account, credit/debit card, or less common "Source" types (see https://stripe.com/docs/api/sources/object). */
    type IStripeSource = cards.ICard | bitcoinReceivers.IBitcoinReceiver | bankAccounts.IBankAccount | sources.ISource;

    namespace accounts {
        // Helper
        type IExternalAccount = bankAccounts.IBankAccount | cards.ICard;

        interface IAccount extends IResourceObject, IAccountShared {
            /**
             * Value is "account"
             */
            object: 'account';

            /**
             * A hash containing the set of capabilities that was requested for this
             * account and their associatedstates. Keys are names of capabilities.
             * You can see the full list here. Values may be active, inactive, or pending.
             */
            capabilities?: {
                /**
                 * The status of the card payments capability of the account, or whether
                 * the account can directly process credit and debit card charges.
                 */
                card_payments?: 'active' | 'inactive' | 'pending';

                /**
                 * The status of the legacy payments capability of the account.
                 */
                legacy_payments?: 'active' | 'inactive' | 'pending';

                /**
                 * The status of the transfers capability of the account, or whether your
                 * platform can transfer funds to the account.
                 */
                transfers?: 'active' | 'inactive' | 'pending';
            };

            /**
             * Whether or not the account can create live charges
             */
            charges_enabled: boolean;

            /**
             * Information about the company or business.
             * This field is null unless business_type is set to company.
             */
            company?: ICompany;

            /**
             * The country of the account
             */
            country: string;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created?: number;

            /**
             * Whether or not account details have been submitted yet. Standalone
             * accounts cannot receive transfers before this is true.
             */
            details_submitted: boolean;

            /**
             * The display name for this account. This is used on the Stripe dashboard to
             * help you differentiate between accounts.
             */
            display_name: string;

            /**
             * External accounts (bank accounts and debit cards) currently
             * attached to this account
             */
            external_accounts?: IList<IExternalAccount>;

            /**
             * Information about the person represented by the account.
             * This field is null unless business_type is set to individual.
             */
            individual?: IIndividual;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful
             * for storing additional information about the object in a structured format.
             */
            metadata?: IMetadata;

            /**
             * Whether or not Stripe will send automatic transfers for this account. This
             * is only false when Stripe is waiting for additional information from the
             * account holder.
             */
            payouts_enabled: boolean;

            /**
             * Information about the requirements for the account, including what information
             * needs to be collected, and by when.
             */
            requirements?: IAccountRequirements;

            /**
             * The Stripe account type. Can be standard, express, or custom.
             */
            type: 'standard' | 'express' | 'custom';

            /**
             * The state of the account’s information requests, including what
             * information is needed and by when it must be provided.
             * @deprecated
             */
            verification?: {
                /**
                 * A string describing the reason for this account being unable to charge
                 * and/or transfer, if that is the case. Possible values are "rejected.fraud",
                 * "rejected.terms_of_service", "rejected.listed", "rejected.other",
                 * "fields_needed", "listed", or "other".
                 */
                disabled_reason: string;

                /**
                 * At what time the fields_needed must be provided. If this date is in
                 * the past, the account is already in bad standing, and providing
                 * fields_needed is necessary to re-enable transfers and prevent other
                 * consequences. If this date is in the future, fields_needed must be
                 * provided to ensure the account remains in good standing.
                 */
                due_by: number;

                /**
                 * Field names that need to be provided for the account to remain in good
                 * standing. Nested fields are separated by "." (for example,
                 * "legal_entity.first_name").
                 */
                fields_needed: string[];

                /**
                 * The set of capabilities you want to unlock for this account (US only).
                 * Each capability will be inactive until you have provided its specific requirements and Stripe has verified them.
                 * An account may have some of its requested capabilities be active and some be inactive.
                 */
                requested_capabilities?: string[];
            };
        }

        interface IAccountCreationOptions extends IAccountUpdateOptions {
            /**
             * The country the account holder resides in or that the business is legally
             * established in. For example, if you are in the United States and the
             * business you’re creating an account for is legally represented in Canada,
             * you would use “CA” as the country for the account being created.
             *
             * optional, default is your own country
             */
            country?: string;

            /**
             * The email address of the account holder. For standalone accounts, Stripe
             * will email your user with instructions for how to set up their account. For
             * managed accounts, this is only to make the account easier to identify to
             * you: Stripe will never directly reach out to your users.
             *
             * required if type is "standard"
             */
            email?: string;

            /**
             * The type of Stripe account to create. Currently must be custom, as only Custom
             * accounts may be created via the API.
             */
            type: 'custom';

            /**
             * Information about the company or business.
             * This field is null unless business_type is set to company.
             */
            company?: ICompanyCreateUpdateOptions;

            /**
             * Information about the person represented by the account.
             * This field is null unless business_type is set to individual.
             */
            individual?: IIndividualCreateUpdateOptions;
        }

        interface IAccountRequirements {
            /**
             * The date the fields in currently_due must be collected by to keep payouts enabled for the account.
             * These fields might block payouts sooner if the next threshold is reached before these fields are collected.
             */
            current_deadline: number | null;

            /**
             * The fields that need to be collected to keep the account enabled. If not collected by the current_deadline, these fields appear in past_due as well, and the account is disabled.
             */
            currently_due?: string[];

            /**
             * If the account is disabled, this string describes why the account can’t create charges or receive payouts. Can be requirements.past_due, requirements.pending_verification, rejected.fraud, rejected.terms_of_service, rejected.listed, rejected.other, listed, under_review, or other.
             */
            disabled_reason?: string | null;

            /**
             * The fields that need to be collected assuming all volume thresholds are reached. As they become required, these fields appear in currently_due as well, and the current_deadline is set.
             */
            eventually_due?: string[];

            /**
             * The fields that weren’t collected by the current_deadline. These fields need to be collected to re-enable the account.
             */
            past_due?: string[];

            /**
             * Fields that may become required depending on the results of verification or review. An empty array unless an asynchronous verification is pending. If verification fails, the fields in this array become required and move to currently_due or past_due.
             */
            pending_verification?: string[];
        }

        interface IAccountShared {
            /**
             * Optional information related to the business.
             */
            business_profile?: {
                /**
                 * The merchant category code for the account. MCCs are used to classify businesses
                 * based on the goods or services they provide.
                 */
                mcc?: string;

                /**
                 * The customer-facing business name.
                 */
                name?: string;

                /**
                 * Internal-only description of the product sold or service provided by the
                 * business. It’s used by Stripe for risk and underwriting purposes.
                 */
                product_description?: string;

                /**
                 * A publicly available mailing address for sending support issues to.
                 */
                support_address?: {
                    /**
                     * Address line 1 (Street address/PO Box/Company name)
                     */
                    line1?: string;

                    /**
                     * Address line 2 (Apartment/Suite/Unit/Building)
                     */
                    line2?: string;

                    /**
                     * City/Suburb/Town/Village
                     */
                    city?: string;

                    /**
                     * State/Province/County
                     */
                    state?: string;

                    /**
                     * Zip/Postal Code
                     */
                    postal_code?: string;

                    /**
                     * 2-letter country code
                     */
                    country?: string;
                };

                /**
                 * A publicly available email address for sending support issues to.
                 */
                support_email?: string;

                /**
                 * A publicly available phone number to call with support issues.
                 */
                support_phone?: string;

                /**
                 * A publicly available website for handling support issues.
                 */
                support_url?: string;

                /**
                 * The business’s publicly available website.
                 */
                url?: string;
            };

            /**
             * The business type. Can be individual or company.
             */
            business_type?: 'individual' | 'company';

            /**
             * Three-letter ISO currency code representing the default currency for the
             * account. This must be a currency that Stripe supports in the account’s
             * country.
             */
            default_currency?: string;

            /**
             * Email address of the account holder. For standalone accounts, this is used
             * to email them asking them to claim their Stripe account. For managed
             * accounts, this is only to make the account easier to identify to you: Stripe
             * will not email the account holder.
             */
            email?: string;

            /**
             * Internal-only description of the product being sold or service being
             * provided by this account. It’s used by Stripe for risk and underwriting
             * purposes.
             */
            product_description?: string;

            /**
             * The set of capabilities you want to unlock for this account (US only).
             * Each capability will be inactive until you have provided its specific
             * requirements and Stripe has verified them. An account may have some of
             * its requested capabilities be active and some be inactive.
             */
            requested_capabilities?: string[];

            /**
             * Account options for customizing how the account functions within Stripe.
             */
            settings?: {
                /**
                 * Settings used to apply the account’s branding to email receipts, invoices,
                 * Checkout, and other products.
                 */
                branding?: {
                    /**
                     * (ID of a file) An icon for the account. Must be square and at
                     * least 128px x 128px.
                     */
                    icon?: string;

                    /**
                     * (ID of a file) A logo for the account that will be used in
                     * Checkout instead of the icon and without the account’s name next to it
                     * if provided. Must be at least 128px x 128px. This can be unset by
                     * updating the value to null and then saving.
                     */
                    logo?: string;

                    /**
                     * A CSS hex color value representing the primary branding color for this account.
                     */
                    primary_color?: string;
                };

                /**
                 * Settings specific to card charging on the account.
                 */
                card_payments?: {
                    /**
                     * Automatically declines certain charge types regardless of whether the card
                     * issuer accepted or declined the charge.
                     */
                    decline_on?: {
                        /**
                         * Whether Stripe automatically declines charges with an incorrect ZIP or
                         * postal code. This setting only applies when a ZIP or postal code is
                         * provided and they fail bank verification.
                         */
                        avs_failure?: boolean;

                        /**
                         * Whether Stripe automatically declines charges with an incorrect CVC.
                         * This setting only applies when a CVC is provided and it fails bank
                         * verification.
                         */
                        cvc_failure?: boolean;
                    };

                    /**
                     * The default text that appears on credit card statements when a charge is
                     * made. This field prefixes any dynamic statement_descriptor specified on the
                     * charge. statement_descriptor_prefix is useful for maximizing descriptor space
                     * for the dynamic portion.
                     */
                    statement_descriptor_prefix?: string;
                };

                /**
                 * Settings used to configure the account within the Stripe dashboard.
                 */
                dashboard?: {
                    /**
                     * The display name for this account. This is used on the Stripe Dashboard to
                     * differentiate between accounts.
                     */
                    display_name?: string;

                    /**
                     * The timezone used in the Stripe Dashboard for this account. A list of
                     * possible time zone values is maintained at the IANA Time Zone Database.
                     */
                    timezone?: string;
                };

                /**
                 * Settings that apply across payment methods for charging on the account.
                 */
                payments?: {
                    /**
                     * The default text that appears on credit card statements when a charge is
                     * made. This field prefixes any dynamic statement_descriptor specified on the
                     * charge.
                     */
                    statement_descriptor?: string;

                    /**
                     * The Kana variation of the default text that appears on credit card statements
                     * when a charge is made (Japan only)
                     */
                    statement_descriptor_kana?: string | null;

                    /**
                     * The Kanji variation of the default text that appears on credit card statements
                     * when a charge is made (Japan only)
                     */
                    statement_descriptor_kanji?: string | null;
                };

                /**
                 * Settings specific to the account’s payouts.
                 */
                payouts?: {
                    /**
                     * A Boolean indicating if Stripe should try to reclaim negative balances from
                     * an attached bank account. See our Understanding Connect Account Balances
                     * documentation for details. Default value is true for Express accounts and
                     * false for Custom accounts.
                     */
                    debit_negative_balances?: boolean;

                    /**
                     * Details on when funds from charges are available, and when they are paid out
                     * to an external account. See our Setting Bank and Debit Card Payouts
                     * documentation for details.
                     */
                    schedule?: {
                        /**
                         * The number of days charges for the account will be held before being paid out.
                         * May also be the string “minimum” for the lowest available value (based on
                         * country). Default is “minimum”. Does not apply when interval is “manual”.
                         */
                        delay_days?: number | string;

                        /**
                         * How frequently funds will be paid out. One of "manual" (for only triggered
                         * via API call), "daily", "weekly", or "monthly". Default is "daily".
                         */
                        interval?: 'manual' | 'daily' | 'weekly' | 'monthly';

                        /**
                         * The day of the month funds will be paid out. Required and available only if
                         * interval is "monthly".
                         */
                        monthly_anchor?: number;

                        /**
                         * The day of the week funds will be paid out, of the style ‘monday’,
                         * ‘tuesday’, etc. Required and available only if interval is weekly.
                         */
                        weekly_anchor?:
                            | 'monday'
                            | 'tuesday'
                            | 'wednesday'
                            | 'thursday'
                            | 'friday'
                            | 'saturday'
                            | 'sunday';
                    };

                    /**
                     * The text that appears on the bank account statement for payouts. If not set,
                     * this defaults to the platform’s bank descriptor as set in the Dashboard.
                     */
                    statement_descriptor?: string;
                };
            };

            /**
             * Details on who accepted the Stripe terms of service, and when they
             * accepted it. See our updating managed accounts guide for more
             * information
             */
            tos_acceptance?: {
                /**
                 * The unix timestamp that Stripe’s terms of service were agreed to by the
                 * account holder
                 */
                date: number;

                /**
                 * The IP address from which Stripe’s terms of service were agreed to by the account holder
                 */
                ip?: string;

                /**
                 * The user agent of the browser from which Stripe’s terms of service
                 * were agreed to by the account holder
                 */
                user_agent?: string;
            };
        }

        interface IAccountUpdateOptions extends IDataOptionsWithMetadata, IAccountShared {
            /**
             * An account token, used to securely provide details to the account.
             */
            account_token?: string;

            /**
             * Information about the company or business.
             * This field is null unless business_type is set to company.
             */
            company?: ICompanyCreateUpdateOptions;

            /**
             * A card or bank account to attach to the account. You can provide either a
             * token, like the ones returned by Stripe.js, or a dictionary as documented in
             * the external_account parameter for either card or bank account creation.
             *
             * This will create a new external account object, make it the new default
             * external account for its currency, and delete the old default if one exists. If
             * you want to add additional external accounts instead of replacing the
             * existing default for this currency, use the bank account or card creation
             * API.
             */
            external_account?: {
                /**
                 * The type of external account. Should be "bank_account".
                 */
                object: string;

                /**
                 * The account number for the bank account in string form. Must be a
                 * checking account.
                 */
                account_number: string;

                /**
                 * The country the bank account is in.
                 */
                country: string;

                /**
                 * The currency the bank account is in. This must be a country/currency
                 * pairing that Stripe supports.
                 */
                currency: string;

                /**
                 * The name of the person or business that owns the bank account. This
                 * field is required when attaching the bank account to a customer object.
                 */
                account_holder_name?: string;

                /**
                 * The type of entity that holds the account. This can be either
                 * "individual" or "company". This field is required when attaching the
                 * bank account to a customer object.
                 */
                account_holder_type?: 'individual' | 'company' | null;

                /**
                 * The routing number, sort code, or other country-appropriate institution
                 * number for the bank account. For US bank accounts, this is required
                 * and should be the ACH routing number, not the wire routing number. If
                 * you are providing an IBAN for account_number, this field is not
                 * required.
                 */
                routing_number?: string;
            };

            /**
             * Information about the person represented by the account.
             * This field is null unless business_type is set to individual.
             */
            individual?: IIndividualCreateUpdateOptions;
        }

        interface IExternalAccountCreationOptions extends IDataOptionsWithMetadata {
            /**
             * When adding a card to a customer, the parameter name is source. When
             * adding to an account, the parameter name is external_account. The
             * value can either be a token, like the ones returned by our Stripe.js, or a
             * dictionary containing a user’s credit card details (with the options shown
             * below). Stripe will automatically validate the card.
             */
            external_account: string;

            /**
             * Only applicable on accounts (not customers or recipients). If you set this to true (or if this is the first external account being added
             * in this currency) this card will become the default external account for its currency.
             */
            default_for_currency?: boolean;
        }

        interface IExternalAccountUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * If set to true, this bank account will become the default external account for its currency.
             */
            default_for_currency?: boolean;
        }

        interface IBankAccountListOptions extends IListOptions {
            object: 'bank_account';
        }

        interface ICardListOptions extends IListOptions {
            object: 'card';
        }

        interface IRejectReason {
            /**
             * The reason for rejecting the account. May be one of "fraud",
             * "terms_of_service", or "other".
             */
            reason: 'fraud' | 'terms_of_service' | 'other';
        }

        interface ILoginLink {
            object: 'login_link';
            created: number;

            /**
             * A single-use login link for an Express account to access their Stripe dashboard.
             */
            url: string;
        }

        interface ILoginLinkOptions {
            /**
             * Where to redirect the user after they log out of their dashboard.
             */
            redirect_url: string;
        }

        interface ICompanyShared {
            /**
             * The company’s primary address.
             */
            address?: IAddress;

            /**
             * The Kana variation of the company’s primary address (Japan only).
             */
            address_kana?: IAddressKana;

            /**
             * The Kanji variation of the company’s primary address (Japan only).
             */
            address_kanji?: IAddressKanji;

            /**
             * Whether the company’s directors have been provided. Set this Boolean
             * to true after creating all the company’s directors with the Persons API
             * for accounts with a relationship.director requirement. This value is
             * not automatically set to true after creating directors, so it needs to
             * be updated to indicate all directors have been provided.
             */
            directors_provided?: boolean;

            /**
             * The company’s legal name.
             * This can be unset by updating the value to null and then saving.
             */
            name?: string;

            /**
             * The Kana variation of the company’s legal name (Japan only).
             * This can be unset by updating the value to null and then saving.
             */
            name_kana?: string;

            /**
             * The Kanji variation of the company’s legal name (Japan only).
             * This can be unset by updating the value to null and then saving.
             */
            name_kanji?: string;

            /**
             * Whether the company’s owners have been provided. Set this Boolean
             * to true after creating all the company’s owners with the Persons API
             * for accounts with a relationship.owner requirement.
             */
            owners_provided?: boolean;

            /**
             * The company’s phone number (used for verification).
             * This can be unset by updating the value to null and then saving.
             */
            phone?: string;

            /**
             * The jurisdiction in which the tax_id is registered (Germany-based companies only).
             * This can be unset by updating the value to null and then saving.
             */
            tax_id_registrar?: string;
        }

        interface ICompanyCreateUpdateOptions extends ICompanyShared {
            /**
             * The business ID number of the company, as appropriate for the company’s country.
             * (Examples are an Employer ID Number in the U.S., a Business Number in Canada, or a
             * Company Number in the UK.) This can be unset by updating the value to null and then saving.
             */
            tax_id?: string;

            /**
             * The VAT number of the company.
             * This can be unset by updating the value to null and then saving.
             */
            vat_id?: string;
        }

        interface ICompany extends ICompanyShared {
            /**
             * Whether the company’s business ID number was provided.
             */
            tax_id_provided?: boolean;

            /**
             * Whether the company’s business VAT number was provided.
             */
            vat_id_provided?: boolean;
        }

        interface IIndividualShared {
            /**
             * The individual’s primary address.
             */
            address?: IAddress;

            /**
             * The Kana variation of the the individual’s primary address (Japan only).
             */
            address_kana?: IAddressKana;

            /**
             * The Kanji variation of the the individual’s primary address (Japan only).
             */
            address_kanji?: IAddressKanji;

            /**
             * The individual’s date of birth.
             */
            dob?: {
                /**
                 * The day of birth, between 1 and 31.
                 */
                day: number;
                /**
                 * The month of birth, between 1 and 12.
                 */
                month: number;
                /**
                 * The four-digit year of birth.
                 */
                year: number;
            };

            /**
             * The individual's email address.
             */
            email?: string;

            /**
             * The individual’s first name.
             * This can be unset by updating the value to null and then saving.
             */
            first_name?: string;

            /**
             * The Kana variation of the the individual’s first name (Japan only).
             * This can be unset by updating the value to null and then saving.
             */
            first_name_kana?: string;

            /**
             * The Kanji variation of the individual’s first name (Japan only).
             * This can be unset by updating the value to null and then saving.
             */
            first_name_kanji?: string;

            /**
             * The individual’s gender (International regulations require either “male” or “female”).
             * This can be unset by updating the value to null and then saving.
             */
            gender?: 'male' | 'female';

            /**
             * The individual’s last name.
             * This can be unset by updating the value to null and then saving.
             */
            last_name?: string;

            /**
             * The Kana variation of the individual’s last name (Japan only).
             * This can be unset by updating the value to null and then saving.
             */
            last_name_kana?: string;

            /**
             * The Kanji variation of the individual’s last name (Japan only).
             * This can be unset by updating the value to null and then saving.
             */
            last_name_kanji?: string;

            /**
             * The individual’s maiden name.
             * This can be unset by updating the value to null and then saving.
             */
            maiden_name?: string;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful
             * for storing additional information about the object in a structured format.
             * Individual keys can be unset by posting an empty value to them.
             * All keys can be unset by posting an empty value to metadata.
             */
            metadata?: {
                [key: string]: string;
            };

            /**
             * The individual’s phone number.
             */
            phone?: string;

            /**
             * The individual’s verification document information.
             */
            verification?: {
                /**
                 * An identifying document, either a passport or local ID card.
                 */
                document?: {
                    /**
                     * The back of an ID returned by a file with a purpose value of identity_document.
                     * This can be unset by updating the value to null and then saving.
                     */
                    back?: string;

                    /**
                     * The front of an ID returned by a file with a purpose value of identity_document.
                     * This can be unset by updating the value to null and then saving.
                     */
                    front?: string;
                };

                /**
                 * A user-displayable string describing the verification state for the person.
                 * For example, this may say “Provided identity information could not be verified”.
                 */
                details?: string;

                /**
                 * One of document_address_mismatch, document_dob_mismatch, document_duplicate_type, document_id_number_mismatch,
                 * document_name_mismatch, failed_keyed_identity, or failed_other.
                 * A machine-readable code specifying the verification state for the person.
                 */
                details_code?:
                    | 'document_address_mismatch'
                    | 'document_dob_mismatch'
                    | 'document_duplicate_type'
                    | 'document_id_number_mismatch'
                    | 'document_name_mismatch'
                    | 'failed_keyed_identity'
                    | 'failed_other';

                /**
                 * The state of verification for the person. Possible values are unverified, pending, or verified.
                 */
                status?: 'unverified' | 'pending' | 'verified';
            };
        }

        interface IIndividual extends IIndividualShared {
            /**
             * Whether the individual’s personal ID number was provided.
             */
            id_number_provided: boolean;

            /**
             * Whether the individual’s last 4 SSN digits was provided.
             */
            ssn_last_4_provided: boolean;
        }

        interface IIndividualCreateUpdateOptions extends IIndividualShared {
            /**
             * The government-issued ID number of the individual, as appropriate for the representative’s country.
             * (Examples are a Social Security Number in the U.S., or a Social Insurance Number in Canada).
             * Instead of the number itself, you can also provide a PII token created with Stripe.js.
             * This can be unset by updating the value to null and then saving.
             */
            id_number?: string;

            /**
             * The last four digits of the individual’s Social Security Number (U.S. only).
             * This can be unset by updating the value to null and then saving.
             */
            ssn_last_4?: string;
        }

        interface IPersonDocumentCreateUpdateOptions {
            /**
             * The back of an ID returned by a file upload with a purpose value of identity_document.
             * The uploaded file needs to be a color image (smaller than 8,000px by 8,000px),
             * in JPG or PNG format, and less than 10 MB in size.
             */
            back?: string;

            /**
             * The front of an ID returned by a file upload with a purpose value of identity_document.
             * The uploaded file needs to be a color image (smaller than 8,000px by 8,000px),
             * in JPG or PNG format, and less than 10 MB in size.
             */
            front?: string;
        }

        interface IPersonDocument extends IPersonDocumentCreateUpdateOptions {
            /**
             * A user-displayable string describing the verification state of this document.
             * For example, if a document is uploaded and the picture is too fuzzy, this may
             * say “Identity document is too unclear to read”.
             */
            details?: string;

            /**
             * One of document_corrupt, document_country_not_supported, document_expired, document_failed_copy,
             * document_failed_other, document_failed_test_mode, document_fraudulent, document_failed_greyscale,
             * document_incomplete, document_invalid, document_manipulated, document_missing_back, document_missing_front,
             * document_not_readable, document_not_uploaded, document_photo_mismatch, document_too_large, or document_type_not_supported.
             * A machine-readable code specifying the verification state for this document.
             */
            details_code?: string;
        }

        interface IPersonShared {
            /**
             * The account the person is associated with.
             */
            account?: string;

            /**
             * The person’s address.
             */
            address?: IAddress;

            /**
             * The Kana variation of the person’s address (Japan only).
             */
            address_kana?: IAddressKana;

            /**
             * The Kanji variation of the person’s address (Japan only).
             */
            address_kanji?: IAddressKanji;

            /**
             * The person’s date of birth.
             */
            dob?: {
                /**
                 * The day of birth, between 1 and 31.
                 */
                day: number;
                /**
                 * The month of birth, between 1 and 12.
                 */
                month: number;
                /**
                 * The four-digit year of birth.
                 */
                year: number;
            };

            /**
             * The person’s email address.
             */
            email?: string;

            /**
             * The person’s first name.
             */
            first_name?: string;

            /**
             * The Kana variation of the the person’s first name (Japan only).
             */
            first_name_kana?: string;

            /**
             * The Kanji variation of the person’s first name (Japan only).
             */
            first_name_kanji?: string;

            /**
             * The person’s gender (International regulations require either “male” or “female”).
             */
            gender?: 'male' | 'female';

            /**
             * The person’s last name.
             */
            last_name?: string;

            /**
             * The Kana variation of the person’s last name (Japan only).
             */
            last_name_kana?: string;

            /**
             * The Kanji variation of the person’s last name (Japan only).
             */
            last_name_kanji?: string;

            /**
             * The person’s maiden name.
             */
            maiden_name?: string;

            /**
             * The person’s phone number.
             */
            phone?: string;

            /**
             * Describes the person’s relationship to the account.
             */
            relationship?: {
                /**
                 * Whether the person is a director of the account’s legal entity. Currently only required for accounts in the EU.
                 * Directors are typically members of the governing board of the company, or responsible for ensuring the
                 * company meets its regulatory obligations.
                 */
                director?: boolean;

                /**
                 * Whether the person has significant responsibility to control, manage, or direct the organization.
                 */
                executive?: boolean;

                /**
                 * Whether the person is an owner of the account’s legal entity.
                 */
                owner?: boolean;

                /**
                 * The percent owned by the person of the account’s legal entity.
                 */
                percent_ownership?: number;

                /**
                 * Whether the person is authorized as the primary representative of the account.
                 * This is the person nominated by the business to provide information about themselves,
                 * and general information about the account. There can only be one representative at any given time.
                 * At the time the account is created, this person should be set to the person responsible for opening the account.
                 */
                representative?: boolean;

                /**
                 * The person’s title (e.g., CEO, Support Engineer).
                 */
                title?: string;
            };
        }

        interface IPerson extends IPersonShared {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object’s type. Objects of the same type share the same value.
             */
            object: 'person';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Set of key-value pairs that you can attach to an object.
             * This can be useful for storing additional information about
             * the object in a structured format.
             */
            metadata: IMetadata;

            /**
             * Whether the person’s personal ID number was provided.
             */
            id_number_provided: boolean;

            /**
             * Information about the requirements for this person, including what information needs to be collected, and by when.
             */
            requirements: {
                /**
                 * Fields that need to be collected to keep the person’s account enabled.
                 * If not collected by the account’s current_deadline, these fields appear in past_due as well, and the account is disabled.
                 */
                currently_due: string[];

                /**
                 * Fields that need to be collected assuming all volume thresholds are reached.
                 * As fields are needed, they are moved to currently_due and the account’s current_deadline is set.
                 */
                eventually_due: string[];

                /**
                 * Fields that weren’t collected by the account’s current_deadline.
                 * These fields need to be collected to enable payouts for the person’s account.
                 */
                past_due: string[];

                /**
                 * Fields that may become required depending on the results of verification or review.
                 * An empty array unless an asynchronous verification is pending.
                 * If verification fails, the fields in this array become required and move to currently_due or past_due.
                 */
                pending_verification: string[];
            };

            /**
             * Whether the person’s last 4 SSN digits was provided.
             */
            ssn_last_4_provided: boolean;

            /**
             * The person’s verification document information.
             */
            verification: {
                /**
                 * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
                 */
                additional_document: IPersonDocument;

                /**
                 * A user-displayable string describing the verification state for the person.
                 * For example, this may say “Provided identity information could not be verified”.
                 */
                details: string;

                /**
                 * One of document_address_mismatch, document_dob_mismatch, document_duplicate_type, document_id_number_mismatch,
                 * document_name_mismatch, failed_keyed_identity, or failed_other.
                 * A machine-readable code specifying the verification state for the person.
                 */
                details_code: string;

                /**
                 * An identifying document, either a passport or local ID card.
                 */
                document: IPersonDocument;

                /**
                 * The state of verification for the person. Possible values are unverified, pending, or verified.
                 */
                status: string;
            };
        }

        interface IPersonCreateUpdateOptions extends IPersonShared {
            /**
             * The person’s ID number, as appropriate for their country. For example, a social security number
             * in the U.S., social insurance number in Canada, etc. Instead of the number itself,
             * you can also provide a PII token provided by Stripe.js.
             */
            id_number?: string;

            /**
             * Set of key-value pairs that you can attach to an object.
             * This can be useful for storing additional information about the object in a structured format.
             * Individual keys can be unset by posting an empty value to them.
             * All keys can be unset by posting an empty value to metadata.
             */
            metadata?: IOptionsMetadata;

            /**
             * A person token, used to securely provide details to the person.
             */
            person_token?: string;

            /**
             * The last four digits of the person’s Social Security Number (U.S. only).
             */
            ssn_last_4?: string;

            /**
             * The person’s verification document information.
             */
            verification?: {
                /**
                 * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
                 */
                additional_document?: IPersonDocumentCreateUpdateOptions;

                /**
                 * An identifying document, either a passport or local ID card.
                 */
                document?: IPersonDocumentCreateUpdateOptions;
            };
        }

        interface IPersonListOptions extends IListOptions {
            relationship: {
                /**
                 * A filter on the list of people returned based on whether these people are
                 * directors of the account’s company.
                 */
                director?: boolean;

                /**
                 * A filter on the list of people returned based on whether these people are
                 * executives of the account’s company.
                 */
                executive?: boolean;

                /**
                 * A filter on the list of people returned based on whether these people are
                 * owners of the account’s company.
                 */
                owner?: boolean;

                /**
                 * A filter on the list of people returned based on whether these people are
                 * the representative of the account’s company.
                 */
                representative?: boolean;
            };
        }
    }

    namespace applicationFees {
        interface IApplicationFee extends IResourceObject {
            /**
             * Value is "application_fee"
             */
            object: string;

            /**
             * ID of the Stripe account this fee was taken from. [Expandable]
             */
            account: string | accounts.IAccount;

            /**
             * Amount earned, in cents/pence.
             */
            amount: number;

            /**
             * Positive integer or zero
             */
            amount_refunded: number;

            /**
             * ID of the Connect Application that earned the fee. [Expandable]
             */
            application: string | applications.IApplication;

            /**
             * Balance transaction that describes the impact of this collected application
             * fee on your account balance (not including refunds). [Expandable]
             */
            balance_transaction: string | balance.IBalanceTransaction;

            /**
             * ID of the charge that the application fee was taken from. [Expandable]
             */
            charge: string | charges.ICharge;

            created: number;

            /**
             * Three-letter ISO code representing the currency of the charge.
             */
            currency: string;

            livemode: boolean;

            /**
             * ID of the corresponding charge on the platform account, if this fee was the
             * result of a charge using the destination parameter. [Expandable]
             */
            originating_transaction: string;

            /**
             * Whether or not the fee has been fully refunded. If the fee is only partially
             * refunded, this attribute will still be false.
             */
            refunded: boolean;

            /**
             * A list of refunds that have been applied to the fee.
             */
            refunds: IApplicationFeeRefunds;
        }

        interface IApplicationFeeListOptions extends IListOptionsCreated {
            /**
             * Only return application fees for the charge specified by this charge ID.
             */
            charge: string;
        }

        interface IApplicationFeeRefund extends IResourceObject {
            /**
             * Value is "fee_refund"
             */
            object: string;

            /**
             * Amount, in cents/pence.
             */
            amount: number;

            /**
             * Balance transaction that describes the impact on your account balance.
             */
            balance_transaction: string | balance.IBalanceTransaction;

            created: number;

            /**
             * Three-letter ISO code representing the currency.
             */
            currency: string;

            /**
             * ID of the application fee that was refunded.
             */
            fee: string | IApplicationFee;

            /**
             * A set of key/value pairs that you can attach to the object. It can be useful
             * for storing additional information in a structured format.
             */
            metadata: IMetadata;
        }

        interface IApplicationFeeRefunds extends IList<IApplicationFeeRefund>, resources.ApplicationFeeRefunds {}

        interface IApplicationFeeRefundCreationOptions extends IDataOptionsWithMetadata {
            /**
             * A positive integer in pence representing how much of this fee to refund.
             * Can only refund up to the unrefunded amount remaining of the fee.
             *
             * default is entire application fee
             */
            amount?: number;
        }
    }

    namespace balance {
        interface IBalance extends IObject {
            /**
             * Value is 'balance'
             */
            object: string;

            /**
             * Funds that are available to be paid out automatically by Stripe or explicitly
             * via the transfers API. The available balance for each currency and payment
             * type can be found in the source_types property.
             */
            available: ISourceType[];

            livemode: boolean;

            /**
             * Funds that are not available in the balance yet, due to the 7-day rolling pay
             * cycle. The pending balance for each currency and payment type can be
             * found in the source_types property
             */
            pending: ISourceType[];
        }

        interface ISourceType {
            currency: string;
            amount: number;
            source_types: {
                card: number;
                bitcoin_receiver?: number;
                customer_bank_account?: number;
                alipay_account?: number;
            };
        }

        interface IBalanceTransaction extends IResourceObject {
            /**
             * Value is 'balance_transaction'
             */
            object: string;

            /**
             * Gross amount of the transaction, in cents/pence.
             */
            amount: number;

            /**
             * The date the transaction's net funds will become available in the Stripe balance.
             */
            available_on: number;

            created: number;

            /**
             * Three-letter ISO currency code representing the currency.
             */
            currency: string;

            description?: string;

            exchange_rate?: number | null;

            /**
             * Fee (in cents/pence) paid for this transaction
             */
            fee: number;

            /**
             * Detailed breakdown of fees (in cents/pence) paid for this transaction
             */
            fee_details: Array<{
                amount: number;
                application: string;

                /**
                 * Three-letter ISO currency code representing the currency of the amount that was disputed.
                 */
                currency: string;

                description: string;

                /**
                 * Type of the fee, one of: "application_fee", "stripe_fee"" or "tax".
                 */
                type: string;
            }>;

            /**
             * Net amount of the transaction, in cents.
             */
            net: number;

            /**
             * The Stripe object this transaction is related to. [Expandable]
             */
            source: string | IResourceObject;

            /**
             * The transfers (if any) for which source is a source_transaction.
             */
            source_transfers?: IList<transfers.ITransfer>;

            /**
             * If the transaction's net funds are available in the Stripe balance yet. Either "available" or "pending".
             */
            status: string;

            /**
             * Transaction type: "adjustment", "application_fee",
             * "application_fee_refund", "charge", "payment", "payment_refund",
             * "refund", "transfer", "transfer_cancel", "transfer_failure", or
             * "transfer_refund".
             */
            type: string;
        }

        interface IBalanceListOptions extends IListOptionsCreated {
            available_on?: string | IDateFilter;
            currency?: string;

            /**
             * Only returns transactions that are related to the specified Stripe object ID
             * (e.g. filtering by a charge ID will return all related charge transactions).
             */
            source?: string;

            /**
             * Only returns transactions of the given type.
             */
            type?:
                | 'charge'
                | 'refund'
                | 'adjustment'
                | 'application_fee'
                | 'application_fee_refund'
                | 'transfer'
                | 'payment'
                | 'payout'
                | 'payout_failure'
                | 'stripe_fee'
                | 'network_cost';

            /**
             * For automatic Stripe payouts only, only returns transactions that were payed out on the specified payout ID.
             */
            payout?: string;

            /**
             * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
             */
            limit?: number;
        }
    }

    namespace charges {
        /**
         * To charge a credit or a debit card, you create a charge object. You can retrieve and refund individual
         * charges as well as list all charges. Charges are identified by a unique random ID.
         */
        interface ICharge extends IResourceObject {
            /**
             * Value is 'charge'
             */
            object: 'charge';

            /**
             * Amount charged in cents/pence, positive integer or zero.
             */
            amount: number;

            /**
             * Amount in cents/pence refunded (can be less than the amount attribute on the
             * charge if a partial refund was issued), positive integer or zero.
             */
            amount_refunded: number;

            /**
             * ID of the Connect application that created the charge. [Expandable]
             */
            application?: string | applications.IApplication | null;

            /**
             * The application fee (if any) for the charge. See the Connect documentation
             * for details. [Expandable]
             */
            application_fee?: string | applicationFees.IApplicationFee | null;

            /**
             * The amount of the application fee (if any) for the charge. See the Connect
             * documentation for details.
             */
            application_fee_amount?: number | null;

            /**
             * ID of the balance transaction that describes the impact of this charge on
             * your account balance (not including refunds or disputes). [Expandable]
             */
            balance_transaction: string | balance.IBalanceTransaction;

            /**
             * Billing information associated with the payment method at the time of the transaction.
             */
            billing_details?: {
                address?: IAddress;
                email?: string;
                name?: string;
                phone?: string;
            } | null;

            /**
             * If the charge was created without capturing, this boolean represents whether or not it is
             * still uncaptured or has since been captured.
             */
            captured: boolean;

            created: number;

            /**
             * Three-letter ISO currency code representing the currency in which the
             * charge was made.
             */
            currency: string;

            /**
             * ID of the customer this charge is for if one exists. [Expandable]
             */
            customer: string | customers.ICustomer | null;

            description?: string;

            /**
             * The account (if any) the charge was made on behalf of, with an automatic
             * transfer. See the [Connect documentation]
             * <https://stripe.com/docs/connect/destination-charges> for details.
             * [Expandable]
             */
            destination?: string | accounts.IAccount | null;

            /**
             * Details about the dispute if the charge has been disputed. [Expandable]
             */
            dispute?: string | disputes.IDispute | null;

            /**
             * Error code explaining reason for charge failure if available (see the errors section for a list of
             * codes: https://stripe.com/docs/api#errors).
             */
            failure_code: string | null;

            /**
             * Message to user further explaining reason for charge failure if available.
             */
            failure_message: string | null;

            /**
             * Hash with information on fraud assessments for the charge.
             */
            fraud_details: {
                /**
                 * Assessments reported by you have the key user_report and, if set, possible values of "safe" and "fraudulent".
                 */
                user_report?: 'fraudulent' | 'safe';

                /**
                 * Assessments from Stripe have the key stripe_report and, if set, the value "fraudulent".
                 */
                stripe_report?: 'fraudulent';
            };

            /**
             * ID of the invoice this charge is for if one exists. [Expandable]
             */
            invoice: string | invoices.IInvoice | null;

            livemode: boolean;

            metadata: IMetadata;

            /**
             * The Stripe account ID for which these funds are intended. Automatically
             * set if you use the destination parameter. For details, see [Creating
             * Separate Charges and Transfers]
             * <https://stripe.com/docs/connect/charges-transfers#on-behalf-of>.
             */
            on_behalf_of?: string | null;

            /**
             * ID of the order this charge is for if one exists. [Expandable]
             */
            order: string | orders.IOrder | null;

            /**
             * Details about whether the payment was accepted, and why. See
             * understanding declines for details. [Expandable]
             */
            outcome?: IOutcome;

            /**
             * true if the charge succeeded, or was successfully authorized for later capture.
             */
            paid: boolean;

            /**
             * ID of the PaymentIntent associated with this charge, if one exists.
             */
            payment_intent?: string;

            /**
             * ID of the payment method used in this charge.
             */
            payment_method: string | null;

            /**
             * Details about the payment method at the time of the transaction.
             */
            payment_method_details: IPaymentMethodDetails | null;

            /**
             * This is the email address that the receipt for this charge was sent to.
             */
            receipt_email: string | null;

            /**
             * This is the transaction number that appears on email receipts sent for this charge.
             */
            receipt_number: string | null;

            /**
             * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the
             * latest state of the charge, including any refunds. If the charge is for an Invoice, the
             * receipt will be stylized as an Invoice receipt.
             */
            receipt_url: string;

            /**
             * Whether or not the charge has been fully refunded. If the charge is only partially refunded,
             * this attribute will still be false.
             */
            refunded: boolean;

            /**
             * A list of refunds that have been applied to the charge.
             */
            refunds: IChargeRefunds;

            /**
             * ID of the review associated with this charge if one exists. [Expandable]
             */
            review?: string | reviews.IReview | null;

            /**
             * Shipping information for the charge.
             */
            shipping?: IShippingInformation | null;

            /**
             * For most Stripe users, the source of every charge is a credit or debit card.
             * This hash is then the card object describing that card.
             * This value is null if this charge is associated with a Payment Intent instead of a Source.
             */
            source: IStripeSource | null;

            /**
             * The transfer ID which created this charge. Only present if the charge came
             * from another Stripe account. See the Connect documentation for details.
             * [Expandable]
             */
            source_transfer: string | transfers.ITransfer | null;

            /**
             * Extra information about a charge. This will appear on your customer’s
             * credit card statement.
             */
            statement_descriptor: string | null;

            /**
             * Provides information about the charge that customers see on their statements.
             * Concatenated with the prefix (shortened descriptor) or statement descriptor that’s
             * set on the account to form the complete statement descriptor. Maximum 22 characters
             * for the concatenated descriptor.
             */
            statement_descriptor_suffix?: string | null;

            /**
             * The status of the payment is either "succeeded", "pending", or "failed".
             */
            status: 'succeeded' | 'pending' | 'failed';

            /**
             * ID of the transfer to the destination account (only applicable if the
             * charge was created using the destination parameter). [Expandable]
             */
            transfer?: string | transfers.ITransfer;

            /**
             * An optional dictionary including the account to automatically transfer
             * to as part of a destination charge. See the Connect documentation for details.
             */
            transfer_data?: {
                /**
                 * The amount transferred to the destination account, if specified. By
                 * default, the entire charge amount is transferred to the destination account.
                 */
                amount?: number | null;

                /**
                 * ID of an existing, connected Stripe account to transfer funds to if
                 * transfer_data was specified in the charge request.
                 */
                destination: string;
            } | null;

            /**
             * A string that identifies this transaction as part of a group.
             * See the [Connect documentation]
             * <https://stripe.com/docs/connect/charges-transfers#grouping-transactions>
             * for details.
             */
            transfer_group?: string | null;
        }

        interface IChargeCreationOptions extends IDataOptionsWithMetadata {
            /**
             * A positive integer in the smallest currency unit (e.g 100 cents to charge
             * $1.00, or 1 to charge ¥1, a 0-decimal currency) representing how much to
             * charge the card. The minimum amount is £0.50 (or equivalent in charge
             * currency).
             */
            amount: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency: string;

            /**
             * A fee in cents that will be applied to the charge and transferred
             * to the application owner’s Stripe account. The request must be
             * made with an OAuth key or the Stripe-Account header in order to
             * take an application fee. For more information, see the
             * application fees documentation.
             */
            application_fee_amount?: number;

            /**
             * Whether or not to immediately capture the charge. When false, the charge
             * issues an authorization (or pre-authorization), and will need to be
             * captured later. Uncaptured charges expire in 7 days. For more information,
             * see authorizing charges and settling later.
             */
            capture?: boolean;

            /**
             * An arbitrary string which you can attach to a charge object. It is displayed
             * when in the web interface alongside the charge. Note that if you use Stripe
             * to send automatic email receipts to your customers, your receipt emails
             * will include the description of the charge(s) that they are describing.
             */
            description?: string;

            /**
             * A string that identifies this transaction as part of a group.
             * See the Connect documentation for details.
             *
             * Connect only.
             */
            transfer_group?: string;

            /**
             * The Stripe account ID that these funds are intended for.
             * Automatically set if you use the destination parameter.
             * See the Connect documentation for details.
             *
             * Connect only.
             */
            on_behalf_of?: string;

            /**
             * The email address to send this charge's receipt to. The receipt will not be
             * sent until the charge is paid. If this charge is for a customer, the email
             * address specified here will override the customer's email address.
             * Receipts will not be sent for test mode charges. If receipt_email is
             * specified for a charge in live mode, a receipt will be sent regardless of your
             * email settings.
             */
            receipt_email?: string;

            /**
             * Shipping information for the charge. Helps prevent fraud on charges for
             * physical goods. For more information, see the Charge object
             * documentation.
             */
            shipping?: IShippingInformation;

            /**
             * The ID of an existing customer that will be charged in this request.
             */
            customer?: string;

            /**
             * A payment source to be charged, such as a credit card. If you also pass a
             * customer ID, the source must be the ID of a source belonging to the
             * customer. Otherwise, if you do not pass a customer ID, the source you
             * provide must either be a token, like the ones returned by Stripe.js, or a
             * object containing a user's credit card details, with the options described
             * below. Although not all information is required, the extra info helps
             * prevent fraud.
             */
            source?: string | cards.ICardSourceCreationOptions;

            /**
             * For card charges, use statement_descriptor_suffix instead. Otherwise, you
             * can use this value as the complete description of a charge on your customers’
             * statements. Must contain at least one letter, maximum 22 characters.
             */
            statement_descriptor?: string;

            /**
             * Provides information about the charge that customers see on their statements.
             * Concatenated with the prefix (shortened descriptor) or statement descriptor
             * that’s set on the account to form the complete statement descriptor. Maximum
             * 22 characters for the concatenated descriptor.
             */
            statement_descriptor_suffix?: string;

            /**
             * An optional dictionary including the account to automatically transfer
             * to as part of a destination charge. See the Connect documentation for details.
             */
            transfer_data?: {
                /**
                 * ID of an existing, connected Stripe account.
                 */
                destination: string;

                /**
                 * The amount transferred to the destination account, if specified.
                 * By default, the entire charge amount is transferred to the destination account.
                 */
                amount?: number;
            };
        }

        interface IChargeCaptureOptions extends IDataOptions {
            /**
             * A positive integer in the smallest currency unit (e.g 100 cents to charge
             * $1.00, or 1 to charge ¥1, a 0-decimal currency) representing how much to
             * charge the card. The minimum amount is £0.50 (or equivalent in charge
             * currency).
             */
            amount?: number;
        }

        interface IChargeUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge.
             * Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description
             * of the charge(s) that they are describing. This can be unset by updating the value to null and then saving.
             */
            description?: string;

            /**
             * A set of key/value pairs you can attach to a charge giving information about its riskiness.
             */
            fraud_details?: {
                /**
                 * If you believe a charge is fraudulent, include a user_report key with a value of fraudulent. If you believe a
                 * charge is safe, include a user_report key with a value of safe. Note that you must refund a charge before setting
                 * the user_report to fraudulent. Stripe will use the information you send to improve our fraud detection algorithm
                 */
                user_report?: 'fraudulent' | 'safe';
            };

            /**
             * This is the email address that the receipt for this charge will be sent to.
             * If this field is updated, then a new email receipt will be sent to the updated address.
             */
            receipt_email?: string;

            /**
             * Shipping information for the charge. Helps prevent fraud on charges for
             * physical goods.
             */
            shipping?: IShippingInformation;

            /**
             * A string that identifies this transaction as part of a group.
             * See the Connect documentation for details.
             *
             * Connect only.
             */
            transfer_group?: string;
        }

        interface IChargeListOptions extends IListOptionsCreated {
            /**
             * Only return charges for the customer specified by this customer ID.
             */
            customer?: string;

            /**
             * A filter on the list based on the source of the charge. The value can be a
             * dictionary with the following options:
             */
            source?: {
                /**
                 * Return charges that match this source type string. Available options are
                 * "all", "alipay_account", "bitcoin_receiver", or "card".
                 */
                object: 'all' | 'alipay_account' | 'bitcoin_receiver' | 'card';
            };
        }

        interface IOutcome {
            /**
             * The value reversed_after_approval indicates the payment was blocked by Stripe after
             * bank authorization, and may temporarily appear as “pending” on a cardholder’s statement.
             */
            network_status:
                | 'approved_by_network'
                | 'declined_by_network'
                | 'not_sent_to_network'
                | 'reversed_after_approval';

            /**
             * An enumerated value providing a more detailed explanation of the outcome’s type. Charges
             * blocked by Radar’s default block rule have the value highest_risk_level. Charges placed
             * in review by Radar’s default review rule have the value elevated_risk_level. Charges
             * authorized, blocked, or placed in review by custom rules have the value rule. See
             * understanding declines for more details.
             */
            reason: string | null;

            /**
             * Stripe’s evaluation of the riskiness of the payment. Possible values for evaluated
             * payments are normal, elevated, highest. For non-card payments, and card-based payments
             * predating the public assignment of risk levels, this field will have the value not_assessed.
             * In the event of an error in the evaluation, this field will have the value unknown.
             */
            risk_level?: string | null;

            /**
             * Stripe’s evaluation of the riskiness of the payment. Possible values for evaluated
             * payments are between 0 and 100. For non-card payments, card-based payments predating
             * the public assignment of risk scores, or in the event of an error during evaluation,
             * this field will not be present. This field is only available with Radar for Fraud Teams.
             */
            risk_score?: number | null;

            /**
             * The ID of the Radar rule that matched the payment, if applicable. [Expandable]
             */
            rule?: string | string[] | null;

            /**
             * See [understanding declines]<https://stripe.com/docs/declines> and
             * [Radar reviews]<https://stripe.com/docs/radar/review> for details.
             */
            type: 'authorized' | 'manual_review' | 'issuer_declined' | 'blocked' | 'invalid';

            /**
             * A human-readable description of the outcome type and reason, designed for you (the
             * recipient of the payment), not your customer.
             */
            seller_message: string;
        }

        interface IChargeRefunds extends IList<refunds.IRefund>, resources.ChargeRefunds {}

        type IPaymentMethodDetails =
            | IAchCreditTransferPaymentMethodDetails
            | IAchDebitPaymentMethodDetails
            | IAlipayPaymentMethodDetails
            | IBancontactPaymentMethodDetails
            | ICardPaymentMethodDetails
            | ICardPresentPaymentMethodDetails
            | IEpsPaymentMethodDetails
            | IGiropayPaymentMethodDetails
            | IIdealPaymentMethodDetails
            | IKlarnaPaymentMethodDetails
            | IP24PaymentMethodDetails
            | ISofortPaymentMethodDetails
            | IStripeAccountPaymentMethodDetails
            | IWechatPaymentMethodDetails;

        type IPaymentMethodType = IPaymentMethodDetails['type'];

        interface IAchCreditTransferPaymentMethodDetails {
            type: 'ach_credit_transfer';
            ach_credit_transfer: {
                /**
                 * Account number to transfer funds to.
                 */
                account_number: string;

                /**
                 * Name of the bank associated with the routing number.
                 */
                bank_name: string;

                /**
                 * Routing transit number for the bank account to transfer funds to.
                 */
                routing_number: string;

                /**
                 * SWIFT code of the bank associated with the routing number.
                 */
                swift_code: string;
            };
        }

        interface IAchDebitPaymentMethodDetails {
            type: 'ach_debit';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            ach_debit: {};
        }

        interface IAlipayPaymentMethodDetails {
            type: 'alipay';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            alipay: {};
        }

        interface IBancontactPaymentMethodDetails {
            type: 'bancontact';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            bancontact: {};
        }

        interface ICardPaymentMethodDetails {
            type: 'card';
            card: {
                /**
                 * Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
                 */
                brand: paymentMethods.CardBrand;

                /**
                 * Check results by Card networks on Card address and CVC at time of payment.
                 */
                checks: paymentMethods.CardChecks;

                /**
                 * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of
                 * the international breakdown of cards you’ve collected.
                 */
                country: string;

                /**
                 * Two-digit number representing the card’s expiration month.
                 */
                exp_month: number;

                /**
                 * Four-digit number representing the card’s expiration year.
                 */
                exp_year: number;

                /**
                 * Uniquely identifies this particular card number. You can use this attribute to check whether two
                 * customers who’ve signed up with you are using the same card number, for example.
                 */
                fingerprint: string;

                /**
                 * Card funding type. Can be credit, debit, prepaid, or unknown.
                 */
                funding: 'credit' | 'debit' | 'prepaid' | 'unknown';

                /**
                 * The last four digits of the card.
                 */
                last4: string;

                /**
                 * Populated if this transaction used 3D Secure authentication.
                 */
                three_d_secure?: {
                    /**
                     * Whether or not authentication was performed. 3D Secure will succeed without authentication when the
                     * card is not enrolled.
                     */
                    authenticated: boolean;

                    /**
                     * Whether or not 3D Secure succeeded.
                     */
                    succeeded: boolean;

                    /**
                     * The version of 3D Secure that was used for this payment.
                     */
                    version: string;
                };

                /**
                 * If this Card is part of a card wallet, this contains the details of the card wallet.
                 */
                wallet?: paymentMethods.CardWallet;
            };
        }

        interface ICardPresentPaymentMethodDetails {
            type: 'card_present';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            card_present: {};
        }

        interface IEpsPaymentMethodDetails {
            type: 'eps';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            eps: {};
        }

        interface IGiropayPaymentMethodDetails {
            type: 'giropay';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            giropay: {};
        }

        interface IIdealPaymentMethodDetails {
            type: 'ideal';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            ideal: {};
        }

        interface IKlarnaPaymentMethodDetails {
            type: 'klarna';
            klarna: {};
        }

        interface IMultibancoPaymentMethodDetails {
            type: 'multibanco';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            multibanco: {};
        }

        interface IP24PaymentMethodDetails {
            type: 'p24';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            p24: {};
        }

        interface ISofortPaymentMethodDetails {
            type: 'sofort';
            // TODO: fill in from https://stripe.com/docs/api/charges/object#charge_object-payment_method_details.
            sofort: {};
        }

        interface IStripeAccountPaymentMethodDetails {
            type: 'stripe_account';
            stripe_account: {};
        }

        interface IWechatPaymentMethodDetails {
            type: 'wechat';
            wechat: {};
        }
    }

    namespace coupons {
        /**
         * A discount represents the actual application of a coupon to a particular customer. It contains information
         * about when the discount began and when it will end.
         */
        interface IDiscount extends IObject {
            /**
             * Value is 'discount'
             */
            object: 'discount';

            /**
             * Hash describing the coupon applied to create this discount
             */
            coupon: ICoupon;

            customer: string;

            /**
             * If the coupon has a duration of once or repeating, the date that this discount will end. If the coupon
             * used has a forever duration, this attribute will be null.
             */
            end: number;

            /**
             * Date that the coupon was applied
             */
            start: number;

            /**
             * The subscription that this coupon is applied to, if it is applied to a particular subscription
             */
            subscription: string;
        }

        /**
         * A coupon contains information about a percent-off or amount-off discount you might want to apply to a customer.
         * Coupons only apply to invoices; they do not apply to one-off charges.
         */
        interface ICoupon extends IResourceObject {
            /**
             * Value is 'coupon'
             */
            object: 'coupon';

            /**
             * Amount (in the currency specified) that will be taken off the subtotal of any invoices for this customer.
             */
            amount_off: number;

            created: number;

            /**
             * If amount_off has been set, the currency of the amount to take off.
             */
            currency: string;

            /**
             * One of "forever", "once", and "repeating". Describes how long a customer who applies this coupon will get the discount.
             */
            duration: 'forever' | 'once' | 'repeating';

            /**
             * If duration is repeating, the number of months the coupon applies. Null if coupon duration is forever or once.
             */
            duration_in_months: number;

            livemode: boolean;

            /**
             * Maximum number of times this coupon can be redeemed, in total, before it is no longer valid.
             */
            max_redemptions: number;

            metadata: IMetadata;

            /**
             * Name of the coupon displayed to customers on for instance invoices or receipts.
             */
            name: string;

            /**
             * Percent that will be taken off the subtotal of any invoices for this customer for the duration
             * of the coupon. For example, a coupon with percent_off of 50 will make a $100 invoice $50 instead.
             */
            percent_off: number;

            /**
             * Date after which the coupon can no longer be redeemed
             */
            redeem_by: number;

            /**
             * Number of times this coupon has been applied to a customer.
             */
            times_redeemed: number;

            /**
             * Taking account of the above properties, whether this coupon can still be applied to a customer
             */
            valid: boolean;
        }

        interface ICouponCreationOptions extends IDataOptionsWithMetadata {
            /**
             * Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific
             * code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you
             * can leave the ID blank and we’ll generate a random code for you.
             */
            id?: string;

            /**
             * Specifies how long the discount will be in effect. Can be forever, once, or repeating.
             */
            duration: 'forever' | 'once' | 'repeating';

            /**
             * A positive integer representing the amount to subtract from an invoice total (required if percent_off is not passed)
             */
            amount_off?: number;

            /**
             * Currency of the amount_off parameter (required if amount_off is passed)
             */
            currency?: string;

            /**
             * Required only if duration is repeating, in which case it must be a positive integer that specifies the number of months
             * the discount will be in effect.
             */
            duration_in_months?: number;

            /**
             * A positive integer specifying the number of times the coupon can be redeemed before it’s no longer valid.
             *
             * For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
             */
            max_redemptions?: number;

            /**
             * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the id is shown if name is not set.
             */
            name?: string;

            /**
             * A positive integer between 1 and 100 that represents the discount the coupon will apply (required if amount_off is not passed)
             */
            percent_off?: number;

            /**
             * Unix timestamp specifying the last time at which the coupon can be redeemed.
             * After the redeem_by date, the coupon can no longer be applied to new customers.
             */
            redeem_by?: number;
        }
    }

    namespace checkouts {
        namespace sessions {
            interface ICheckoutSession {
                /**
                 * Unique ID for checkout session to pass to `redirectToCheckout` in Stripe.js
                 */
                id: string;

                /**
                 * String of object type. Is always 'checkout.session'
                 */
                object: string;

                /**
                 * Whether or not billing address was collected
                 */
                billing_address_collection?: string;

                /**
                 * URL the customer will be redirected to upon cancellation
                 */
                cancel_url: string;

                /**
                 * Unique reference to session
                 */
                client_reference_id?: string;

                /**
                 * ID of customer [Expandable]
                 */
                customer?: string | customers.ICustomer;

                /**
                 * Email address of customer
                 */
                customer_email?: string;

                /**
                 * The line items purchased
                 */
                display_items: ICheckoutLineItems[];

                /**
                 * If the object is in live mode or not
                 */
                livemode: boolean;

                /**
                 * Language tag of the checkout session
                 */
                locale?: string;

                /**
                 * ID of payment intent created [Expandable]
                 */
                payment_intent?: string | paymentIntents.IPaymentIntent;

                /**
                 * Array of accepted payment methods
                 */
                payment_method_types?: string[];

                /**
                 * The ID of the SetupIntent for Checkout Sessions in setup mode.
                 */
                setup_intent?: string | null;

                /**
                 * ID of subscription if one was created [Expandable]
                 */
                subscription?: string | subscriptions.ISubscription;

                /**
                 * URL to redirect to upon success
                 */
                success_url: string;

                /**
                 * The mode of the Checkout Session, one of payment, setup, or subscription.
                 */
                mode?: 'payment' | 'setup' | 'subscription';
            }

            interface ICheckOutCreationSubscriptionDataItem {
                /**
                 * Plan ID for this item.
                 */
                plan: string;

                /**
                 * Quantity for this item.
                 */
                quantity?: number;
            }

            interface ICheckOutCreationSubscriptionData {
                /**
                 * A list of items, each with an attached plan, that the customer is subscribing to. Use this parameter for subscriptions. To create one-time payments, use line_items.
                 */
                items: ICheckOutCreationSubscriptionDataItem[];

                /**
                 * A non-negative decimal between 0 and 100, with at most two decimal places.
                 * This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account.
                 */
                application_fee_percent?: number;

                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata?: IMetadata;

                /**
                 * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. Has to be at least 48 hours in the future.
                 */
                trial_end?: number;

                /**
                 * Integer representing the number of trial period days before the customer is charged for the first time. Has to be at least 1.
                 */
                trial_period_days?: number;
            }

            interface ICheckoutCreationOptions {
                /**
                 * The URL to return the customer to if they cancel payment
                 */
                cancel_url: string;

                /**
                 * A list of accepted payment types.
                 * 'card' is currently the only supported options
                 */
                payment_method_types: string[];

                /**
                 * The url to return to upon successful payment
                 */
                success_url: string;

                /**
                 * Whether to collect shipping info.
                 * If 'required', info will always be collected.
                 * When 'auto' or not specified, info will be collected when required
                 */
                billing_address_collection?: 'required' | 'auto';

                /**
                 * An optional unique ID to associate with the checkout
                 */
                client_reference_id?: string;

                /**
                 * Must be used with @param line_items
                 * ID of existing customer to use
                 */
                customer?: string;

                /**
                 * Email of the customer
                 */
                customer_email?: string;

                /**
                 * A list of items the customer is purchasing. One-time.
                 */
                line_items?: ICheckoutLineItems[];

                /**
                 * Language to use. If 'auto' or not specified, browser default is used
                 */
                locale?:
                    | 'auto'
                    | 'da'
                    | 'de'
                    | 'en'
                    | 'es'
                    | 'fi'
                    | 'fr'
                    | 'it'
                    | 'ja'
                    | 'nb'
                    | 'nl'
                    | 'pl'
                    | 'pt'
                    | 'sv'
                    | 'zh';

                /**
                 * The mode of the Checkout Session, one of payment, setup, or subscription.
                 */
                mode?: 'payment' | 'setup' | 'subscription';

                /**
                 * Details for creation of payment intent
                 */
                payment_intent_data?: paymentIntents.IPaymentIntentSessionSubset | paymentIntents.IPaymentIntentData;

                /**
                 * A subset of parameters to be passed to SetupIntent creation.
                 */
                setup_intent_data?: setupIntents.ISetupIntentSessionSubset;

                /**
                 * Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the submit button.
                 * submit_type can only be specified on Checkout Sessions using line items or a SKU, but not Checkout Sessions for subscriptions.
                 * Supported values are auto, book, donate, or pay.
                 */
                submit_type?: 'auto' | 'book' | 'donate' | 'pay';

                /**
                 * Use instead of @param line_items when using a subscription
                 */
                subscription_data?: ICheckOutCreationSubscriptionData | subscriptions.ISubscriptionCustCreationOptions;
            }

            interface ICheckoutLineItems {
                /**
                 * Amount to be collected per unit of item
                 */
                amount: number;

                /**
                 * Currency to collect payment in
                 */
                currency: string;

                /**
                 * The name of the item
                 */
                name: string;

                /**
                 * The amount of item being purchased
                 */
                quantity: number;

                /**
                 * An optional description for the item
                 */
                description?: string;

                /**
                 * A list of images for the item
                 */
                images?: string[];
            }
        }
    }

    namespace creditNotes {
        /**
         * Credit notes are documents that decrease the amount owed on a specified invoice.
         * Credit notes are the only way to adjust the amount of an invoice once it's been finalized
         * (other than voiding and recreating the invoice from scratch).
         */
        interface ICreditNote extends IResourceObject {
            /**
             * Value is "credit_note"
             */
            object: 'credit_note';

            /**
             * The integer amount in cents representing the total amount of the credit note.
             */
            amount: number;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency: string;

            /**
             * ID of the customer. [Expandable]
             */
            customer: string | customers.ICustomer;

            /**
             * Customer balance transaction related to this credit note. [Expandable]
             */
            customer_balance_transaction: string | balance.IBalanceTransaction;

            /**
             * ID of the invoice. [Expandable]
             */
            invoice: string | invoices.IInvoice;

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Customer-facing text that appears on the credit note PDF.
             */
            memo: string | null;

            /**
             * Set of key-value pairs that you can attach to an object.
             * This can be useful for storing additional information about the object in a structured format.
             */
            metadata: IMetadata;

            /**
             * A unique number that identifies this particular credit note.
             * It appears on the PDF of the credit note and its associated invoice.
             */
            number: string;

            /**
             * The link to download the PDF of the credit note.
             */
            pdf: string;

            /**
             * Reason for issuing this credit note, one of duplicate, fraudulent, order_change, or product_unsatisfactory
             */
            reason: CreditNoteReason | null;

            /**
             * Refund related to this credit note. [Expandable]
             */
            refund: string | null | refunds.IRefund;

            /**
             * Status of this credit note, one of issued or void.
             */
            status: 'issued' | 'void';

            /**
             * Type of this credit note, one of post_payment or pre_payment.
             * A pre_payment credit note means it was issued when the invoice was open.
             * A post_payment credit note means it was issued when the invoice was paid.
             */
            type: 'post_payment' | 'pre_payment';
        }

        interface ICreditNoteCreationOptions extends IDataOptionsWithMetadata {
            amount: number;
            invoice: string;

            /**
             * The amount to credit the customer’s balance.
             * It will be automatically applied to their next invoice.
             */
            credit_amount?: number;

            /**
             * The credit note’s memo appears on the credit note PDF. This can be unset by updating the value to nil and then saving.
             */
            memo?: string;

            /**
             * Reason for issuing this credit note, one of duplicate, fraudulent, order_change, or product_unsatisfactory.
             */
            reason?: CreditNoteReason;

            /**
             * ID of an existing refund to link this credit note to.
             */
            refund?: string;

            /**
             * The amount to refund. If set, a refund will be created for the charge associated with the invoice.
             */
            refund_amount?: number;
        }

        interface ICreditNoteUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * Credit note memo. This can be unset by updating the value to nil and then saving.
             */
            memo?: string;
        }

        interface ICreditNoteListOptions extends IListOptions {
            /**
             * ID of the invoice.
             */
            invoice?: string;
        }

        /**
         * Reason for issuing a credit note, one of duplicate, fraudulent, order_change, or product_unsatisfactory
         */
        type CreditNoteReason = 'duplicate' | 'fraudulent' | 'order_change' | 'product_unsatisfactory';
    }

    namespace customers {
        /**
         * Customer objects allow you to perform recurring charges and track multiple charges that are associated
         * with the same customer. The API allows you to create, delete, and update your customers. You can
         * retrieve individual customers as well as a list of all your customers.
         */
        interface ICustomer extends IResourceObject {
            /**
             * Value is 'customer'
             */
            object: 'customer';

            /**
             * This field has been renamed to balance and will be removed in a future API version.
             * @deprecated
             */
            account_balance?: number;

            address: IAddress | null;

            /**
             * Current balance, if any, being stored on the customer. If negative, the customer has credit
             * to apply to their next invoice. If positive, the customer has an amount owed that will be
             * added to their next invoice. The balance does not refer to any unpaid invoices; it solely
             * takes into account amounts that have yet to be successfully applied to any invoice. This
             * balance is only taken into account as invoices are finalized.
             */
            balance?: number;

            created: number;

            /**
             * The currency the customer can be charged in for recurring billing purposes (subscriptions, invoices, invoice items).
             */
            currency: string | null;

            /**
             * ID of the default source attached to this customer. [Expandable]
             */
            default_source: string | IStripeSource | null;

            /**
             * Whether or not the latest charge for the customer's latest invoice has failed
             */
            delinquent: boolean;

            description?: string;

            /**
             * Describes the current discount active on the customer, if there is one.
             */
            discount?: coupons.IDiscount;

            email?: string;

            /**
             * The prefix for the customer used to generate unique invoice numbers.
             */
            invoice_prefix?: string;

            /**
             * Default invoice settings for this customer.
             */
            invoice_settings?: ICustomerInvoiceSettings | null;

            livemode: boolean;

            metadata: IMetadata;

            /**
             * The customer’s full name or business name.
             */
            name?: string | null;

            /**
             * The customer’s phone number.
             */
            phone?: string;

            /**
             * The customer’s preferred locales (languages), ordered by preference.
             */
            preferred_locales?: string[];

            /**
             * Shipping information associated with the customer.
             */
            shipping: IShippingInformation | null;

            /**
             * The customer’s payment sources, if any
             */
            sources?: IList<IStripeSource>;

            cards?: resources.CustomerCards;

            /**
             * The customer's current subscriptions, if any
             */
            subscriptions: ICustomerSubscriptions;

            /**
             * Describes the customer’s tax exemption status. One of none, exempt, or reverse.
             * When set to reverse, invoice and receipt PDFs include the text “Reverse charge”.
             */
            tax_exempt?: 'none' | 'exempt' | 'reverse';

            /**
             * The customer’s tax IDs.
             */
            tax_ids?: IList<customerTaxIds.ITaxId>;

            /**
             * @deprecated
             */
            tax_info?: any;

            /**
             * @deprecated
             */
            tax_info_verification?: any;
        }

        interface ICustomerSubscriptions extends IList<subscriptions.ISubscription>, resources.CustomerSubscriptions {}

        interface ICustomerCreationOptions extends IDataOptionsWithMetadata {
            /**
             * This field has been renamed to balance and will be removed in a future API version.
             * @deprecated
             */
            account_balance?: number;

            address?: IAddress;

            /***
             * An integer amount in cents that represents the customer’s current balance, which affect the
             * customer’s future invoices. A negative amount represents a credit that decreases the amount
             * due on an invoice; a positive amount increases the amount due on an invoice.
             */
            balance?: number;

            /**
             * If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the
             * API will not have the discount.
             */
            coupon?: string;

            /**
             * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This can
             * be unset by updating the value to null and then saving.
             */
            description?: string;

            /**
             * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking.
             * This can be unset by updating the value to null and then saving.
             */
            email?: string;

            /**
             * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
             */
            invoice_prefix?: string;

            /**
             * Default invoice settings for this customer.
             */
            invoice_settings?: ICustomerInvoiceSettings | null;

            /**
             * The customer’s full name or business name. This can be unset by updating the value to null and then saving.
             */
            name?: string;

            /**
             * The ID of the PaymentMethod to attach to the customer.
             */
            payment_method?: string;

            /**
             * The customer’s phone number. This can be unset by updating the value to null and then saving.
             */
            phone?: string;

            /**
             * The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions
             * that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a
             * valid card as well.
             */
            plan?: string;

            /**
             * Customer’s preferred languages, ordered by preference. This can be unset by updating the value to null and then saving.
             */
            preferred_locales?: string[];

            /**
             * The quantity you'd like to apply to the subscription you're creating (if you pass in a plan). For example, if your plan is
             * 10 cents/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged 50 cents
             * (5 x 10 cents) monthly. Defaults to 1 if not set. Only applies when the plan parameter is also provided.
             */
            quantity?: number;

            shipping?: IShippingInformation;

            /**
             * The source can either be a token, like the ones returned by our Stripe.js, or
             * a dictionary containing a user’s credit card details.
             */
            source?: string | cards.ICardSourceCreationOptionsExtended;

            /**
             * The customer’s tax exemption. One of none, exempt, or reverse.
             */
            tax_exempt?: 'none' | 'exempt' | 'reverse';

            /**
             * The customer’s tax IDs.
             */
            tax_id_data?: Array<{
                /**
                 * Type of the tax ID, one of au_abn, eu_vat, in_gst, no_vat, or nz_gst.
                 */
                type: customerTaxIds.TaxIdType;

                /**
                 * Value of the tax ID.
                 */
                value: string;
            }>;

            /**
             * @deprecated
             */
            tax_info?: any;

            /**
             * A positive decimal (with at most two decimal places) between 1 and 100.
             * This represents the percentage of the subscription invoice subtotal that
             * will be calculated and added as tax to the final amount each billing period.
             * For example, a plan which charges $10/month with a tax_percent of 20.0
             * will charge $12 per invoice. Can only be used if a plan is provided.
             */
            tax_percent?: number;

            /**
             * Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will
             * override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to
             * end the customer's trial immediately. Only applies when the plan parameter is also provided.
             */
            trial_end?: number | 'now';
        }

        interface ICustomerUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * This field has been renamed to balance and will be removed in a future API version.
             * @deprecated
             */
            account_balance?: number;

            address?: IAddress;

            /**
             * An integer amount in cents that represents the customer’s current balance, which affect the
             * customer’s future invoices. A negative amount represents a credit that decreases the amount
             * due on an invoice; a positive amount increases the amount due on an invoice.
             */
            balance?: number;

            /**
             * If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the
             * API will not have the discount.
             */
            coupon?: string;

            /**
             * ID of source to make the customer’s new default for invoice payments
             */
            default_source?: string;

            /**
             * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This can
             * be unset by updating the value to null and then saving.
             */
            description?: string;

            /**
             * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking.
             * This can be unset by updating the value to null and then saving.
             */
            email?: string;

            /**
             * The prefix for the customer used to generate unique invoice numbers.
             */
            invoice_prefix?: string;

            /**
             * Default invoice settings for this customer.
             */
            invoice_settings?: ICustomerInvoiceSettings | null;

            /**
             * The customer’s full name or business name. This can be unset by updating the value to null and then saving.
             */
            name?: string;

            /**
             * The customer’s phone number. This can be unset by updating the value to null and then saving.
             */
            phone?: string;

            /**
             * Customer’s preferred languages, ordered by preference. This can be unset by updating
             * the value to null and then saving.
             */
            preferred_locales?: string[] | null;

            shipping?: IShippingInformation;

            /**
             * The source can either be a token, like the ones returned by our Stripe.js, or
             * a dictionary containing a user’s credit card details (with the options shown
             * below). Passing source will create a new source object, make it the new
             * customer default source, and delete the old customer default if one exists.
             * If you want to add additional sources instead of replacing the existing
             * default, use the card creation API. Whenever you attach a card to a
             * customer, Stripe will automatically validate the card.
             */
            source?: string | cards.ICardSourceCreationOptionsExtended;

            /**
             * The customer’s tax exemption. One of none, exempt, or reverse.
             */
            tax_exempt?: 'none' | 'exempt' | 'reverse';

            /**
             * @deprecated
             */
            tax_info?: any;
        }

        interface ICustomerListOptions extends IListOptionsCreated {
            /**
             * A filter on the list based on the customer’s email field. The value must be a string.
             */
            email?: string;
        }

        interface ICustomerSourceCreationOptions extends IDataOptionsWithMetadata {
            /**
             * When adding a card to a customer, the parameter name is source. When
             * adding to an account, the parameter name is external_account. The
             * value can either be a token, like the ones returned by our Stripe.js, or a
             * dictionary containing a user’s credit card details (with the options shown
             * below). Stripe will automatically validate the card.
             */
            source: string | cards.ICardSourceCreationOptions | bankAccounts.ISourceCreationOptions;
        }

        interface ICustomerInvoiceSettings {
            /**
             * Default custom fields to be displayed on invoices for this customer.
             */
            custom_fields?: Array<{
                /**
                 * The name of the custom field. This may be up to 30 characters.
                 */
                name: string;

                /**
                 * The value of the custom field. This may be up to 30 characters.
                 */
                value: string;
            }>;

            /**
             * ID of the default payment method used for subscriptions and invoices for the customer.
             */
            default_payment_method?: string;

            /**
             * Default footer to be displayed on invoices for this customer.
             * This can be unset by updating the value to null and then saving.
             */
            footer?: string;
        }

        interface ICustomerBankAccountSourceCreationOptions extends ICustomerSourceCreationOptions {
            source: bankAccounts.ISourceCreationOptions;
        }

        interface ICustomerCardSourceCreationOptions extends ICustomerSourceCreationOptions {
            source: cards.ICardSourceCreationOptions;
        }

        interface IBankAccountSourceListOptions extends IListOptions {
            object: 'bank_account';
        }

        interface ICardSourceListOptions extends IListOptions {
            object: 'card';
        }

        interface ISourceListOptions extends IListOptions {
            object: 'source';
        }
    }

    namespace customerTaxIds {
        interface ITaxId {
            /**
             * Unique identifier for the object.
             */
            id: string;

            /**
             * String representing the object’s type. Objects of the same type share the same value.
             */
            object: 'tax_id';

            /**
             * Two-letter ISO code representing the country of the tax ID.
             */
            country: 'string';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * ID of the customer.
             */
            customer: string;

            /**
             * Has the value true if the object exists in live mode or the value false if the
             * object exists in test mode.
             */
            livemode: boolean;

            /**
             * Type of the tax ID, one of au_abn, eu_vat, in_gst, no_vat, nz_gst, or unknown.
             */
            type: TaxIdType;

            /**
             * Value of the tax ID.
             */
            value: string;

            /**
             * Tax ID verification information.
             */
            verification: ITaxIdVerification;
        }

        interface ITaxIdVerification {
            /**
             * Verification status, one of pending, unavailable, unverified, or verified.
             */
            status: 'pending' | 'unavailable' | 'unverified' | 'verified';

            /**
             * Verified address.
             */
            verified_address: string;

            /**
             * Verified name.
             */
            verified_name: string;
        }

        type TaxIdType = 'au_abn' | 'eu_vat' | 'in_gst' | 'no_vat' | 'nz_gst' | 'unknown';

        interface ITaxIdCreationOptions {
            /**
             * Type of the tax ID, one of au_abn, eu_vat, in_gst, no_vat, or nz_gst
             */
            type: TaxIdType;

            /**
             * Value of the tax ID.
             */
            value: string;
        }
    }

    namespace disputes {
        /**
         * A dispute occurs when a customer questions your charge with their bank or credit card company.
         * When a customer disputes your charge, you're given the opportunity to respond to the dispute with
         * evidence that shows the charge is legitimate. You can find more information about the dispute process
         * in our disputes FAQ: https://stripe.com/help/disputes
         */
        interface IDispute extends IResourceObject {
            /**
             * Value is 'dispute'
             */
            object: 'dispute';

            /**
             * Disputed amount. Usually the amount of the charge, but can differ (usually because of currency
             * fluctuation or because only part of the order is disputed).
             */
            amount: number;

            /**
             * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your
             * Stripe account as a result of this dispute.
             */
            balance_transactions: balance.IBalanceTransaction[];

            /**
             * ID of the charge that was disputed. [Expandable]
             */
            charge: string | charges.ICharge;

            /**
             * Date dispute was opened
             */
            created: number;

            /**
             * Three-letter ISO currency code representing the currency of the amount that was disputed.
             */
            currency: string;

            /**
             * Evidence provided to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.
             */
            evidence: IDisputeEvidence;

            /**
             * Information about the evidence submission.
             */
            evidence_details?: {
                /**
                 * Date by which evidence must be submitted in order to successfully challenge dispute. Will be null
                 * if the customer's bank or credit card company doesn't allow a response for this particular dispute.
                 */
                due_by: number;

                /**
                 * Whether or not evidence has been saved for this dispute.
                 */
                has_evidence: boolean;

                /**
                 * Whether or not the last evidence submission was submitted past the due date. Defaults to false
                 * if no evidence submissions have occurred. If true, then delivery of the latest evidence is not guaranteed.
                 */
                past_due: boolean;

                /**
                 * The number of times the evidence has been submitted. You may submit evidence a maximum of 5 times
                 */
                submission_count: number;
            };

            /**
             * If true, it is still possible to refund the disputed payment. Once the payment has been fully
             * refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute.
             */
            is_charge_refundable: boolean;

            livemode: boolean;
            metadata: IMetadata;

            /**
             * Reason given by cardholder for dispute.
             * Possible values are duplicate, fraudulent, subscription_canceled, product_unacceptable,
             * product_not_received, unrecognized, credit_not_processed, incorrect_account_details,
             * insufficient_funds, bank_cannot_process, debit_not_authorized, general.
             * Read more about dispute reasons: https://stripe.com/help/disputes#reasons
             */
            reason:
                | 'duplicate'
                | 'fraudulent'
                | 'subscription_canceled'
                | 'product_unacceptable'
                | 'product_not_received'
                | 'unrecognized'
                | 'credit_not_processed'
                | 'incorrect_account_details'
                | 'insufficient_funds'
                | 'bank_cannot_process'
                | 'debit_not_authorized'
                | 'general';

            /**
             * Current status of dispute. Possible values are warning_needs_response, warning_under_review, warning_closed,
             * needs_response, response_disabled, under_review, charge_refunded, won, lost.
             */
            status:
                | 'warning_needs_response'
                | 'warning_under_review'
                | 'warning_closed'
                | 'needs_response'
                | 'response_disabled'
                | 'under_review'
                | 'charge_refunded'
                | 'won'
                | 'lost';
        }

        interface IDisputeEvidence {
            /**
             * Any server or activity logs showing proof that the customer accessed or downloaded the purchased
             * digital product. This information should include IP addresses, corresponding timestamps, and any
             * detailed recorded activity.
             */
            access_activity_log?: string;

            /**
             * The billing address provided by the customer.
             */
            billing_address?: string;

            /**
             * (ID of a file) Your subscription cancellation policy, as shown to the customer. [Expandable]
             */
            cancellation_policy?: string;

            /**
             * An explanation of how and when the customer was shown your refund policy prior to purchase.
             */
            cancellation_policy_disclosure?: string;

            /**
             * A justification for why the customer's subscription was not canceled.
             */
            cancellation_rebuttal?: string;

            /**
             * (ID of a file) Any communication with the customer that you feel is relevant to your case (for
             * example emails proving that they received the product or service, or demonstrating their use of or
             * satisfaction with the product or service).
             */
            customer_communication?: string;

            /**
             * The email address of the customer.
             */
            customer_email_address?: string;

            /**
             * The name of the customer.
             */
            customer_name?: string;

            /**
             * The IP address that the customer used when making the purchase.
             */
            customer_purchase_ip?: string;

            /**
             * (ID of a file) A relevant document or contract showing the customer's signature. [Expandable]
             */
            customer_signature?: string;

            /**
             * (ID of a file) Documentation for the prior charge that can uniquely identify the charge,
             * such as a receipt, shipping label, work order, etc. This document should be paired with a similar
             * document from the disputed payment that proves the two payments are separate. [Expandable]
             */
            duplicate_charge_documentation?: string;

            /**
             * An explanation of the difference between the disputed charge and the prior charge that appears to be a duplicate.
             */
            duplicate_charge_explanation?: string;

            /**
             * The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
             */
            duplicate_charge_id?: string;

            /**
             * A description of the product or service which was sold.
             */
            product_description?: string;

            /**
             * (ID of a file) Any receipt or message sent to the customer notifying them of the charge. [Expandable]
             */
            receipt?: string;

            /**
             * (ID of a file) Your refund policy, as shown to the customer. [Expandable]
             */
            refund_policy?: string;

            /**
             * Documentation demonstrating that the customer was shown your refund policy prior to purchase.
             */
            refund_policy_disclosure?: string;

            /**
             * A justification for why the customer is not entitled to a refund.
             */
            refund_refusal_explanation?: string;

            /**
             * The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
             */
            service_date?: string;

            /**
             * (ID of a file) Documentation showing proof that a service was provided to the customer. This could
             * include a copy of a signed contract, work order, or other form of written agreement.
             */
            service_documentation?: string;

            /**
             * The address to which a physical product was shipped. You should try to include as much complete address information as possible.
             */
            shipping_address?: string;

            /**
             * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used
             * for this purchase, please separate them with commas.
             */
            shipping_carrier?: string;

            /**
             * The date on which a physical product began its route to the shipping address, in a clear human-readable format.
             */
            shipping_date?: string;

            /**
             * (ID of a file) Documentation showing proof that a product was shipped to the customer at the same address
             * the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc, and should
             * show the full shipping address of the customer, if possible. [Expandable]
             */
            shipping_documentation?: string;

            /**
             * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers
             * were generated for this purchase, please separate them with commas.
             */
            shipping_tracking_number?: string;

            /**
             * (ID of a file) Any additional evidence or statements. [Expandable]
             */
            uncategorized_file?: string;

            /**
             * Any additional evidence or statements.
             */
            uncategorized_text?: string;
        }

        interface IDisputeUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * Evidence to upload to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.
             */
            evidence?: IDisputeEvidence;
        }
    }

    namespace events {
        type EventType =
            | '*'
            | 'account.updated'
            | 'account.application.authorized'
            | 'account.application.deauthorized'
            | 'account.external_account.created'
            | 'account.external_account.deleted'
            | 'account.external_account.updated'
            | 'application_fee.created'
            | 'application_fee.refunded'
            | 'application_fee.refund.updated'
            | 'balance.available'
            | 'capability.updated'
            | 'charge.captured'
            | 'charge.expired'
            | 'charge.failed'
            | 'charge.pending'
            | 'charge.refunded'
            | 'charge.succeeded'
            | 'charge.updated'
            | 'charge.dispute.closed'
            | 'charge.dispute.created'
            | 'charge.dispute.funds_reinstated'
            | 'charge.dispute.funds_withdrawn'
            | 'charge.dispute.updated'
            | 'charge.refund.updated'
            | 'checkout.session.completed'
            | 'coupon.created'
            | 'coupon.deleted'
            | 'coupon.updated'
            | 'credit_note.created'
            | 'credit_note.updated'
            | 'credit_note.voided'
            | 'customer.created'
            | 'customer.deleted'
            | 'customer.updated'
            | 'customer.discount.created'
            | 'customer.discount.deleted'
            | 'customer.discount.updated'
            | 'customer.source.created'
            | 'customer.source.deleted'
            | 'customer.source.expiring'
            | 'customer.source.updated'
            | 'customer.subscription.created'
            | 'customer.subscription.deleted'
            | 'customer.subscription.trial_will_end'
            | 'customer.subscription.updated'
            | 'customer.tax_id.created'
            | 'customer.tax_id.deleted'
            | 'customer.tax_id.updated'
            | 'file.created'
            | 'invoice.created'
            | 'invoice.deleted'
            | 'invoice.finalized'
            | 'invoice.marked_uncollectible'
            | 'invoice.payment_action_required'
            | 'invoice.payment_failed'
            | 'invoice.payment_succeeded'
            | 'invoice.sent'
            | 'invoice.upcoming'
            | 'invoice.updated'
            | 'invoice.voided'
            | 'invoiceitem.created'
            | 'invoiceitem.deleted'
            | 'invoiceitem.updated'
            | 'issuing_authorization.created'
            | 'issuing_authorization.request'
            | 'issuing_authorization.updated'
            | 'issuing_card.created'
            | 'issuing_card.updated'
            | 'issuing_cardholder.created'
            | 'issuing_cardholder.updated'
            | 'issuing_dispute.created'
            | 'issuing_dispute.updated'
            | 'issuing_settlement.created'
            | 'issuing_settlement.updated'
            | 'issuing_transaction.created'
            | 'issuing_transaction.updated'
            | 'mandate.updated'
            | 'order.created'
            | 'order.payment_failed'
            | 'order.payment_succeeded'
            | 'order.updated'
            | 'order_return.created'
            | 'payment_intent.amount_capturable_updated'
            | 'payment_intent.canceled'
            | 'payment_intent.created'
            | 'payment_intent.payment_failed'
            | 'payment_intent.succeeded'
            | 'payment_method.attached'
            | 'payment_method.card_automatically_updated'
            | 'payment_method.detached'
            | 'payment_method.updated'
            | 'payout.canceled'
            | 'payout.created'
            | 'payout.failed'
            | 'payout.paid'
            | 'payout.updated'
            | 'person.created'
            | 'person.deleted'
            | 'person.updated'
            | 'plan.created'
            | 'plan.deleted'
            | 'plan.updated'
            | 'product.created'
            | 'product.deleted'
            | 'product.updated'
            | 'radar.early_fraud_warning.created'
            | 'radar.early_fraud_warning.updated'
            | 'recipient.created'
            | 'recipient.deleted'
            | 'recipient.updated'
            | 'reporting.report_run.failed'
            | 'reporting.report_run.succeeded'
            | 'reporting.report_type.updated'
            | 'review.closed'
            | 'review.opened'
            | 'setup_intent.canceled'
            | 'setup_intent.created'
            | 'setup_intent.setup_failed'
            | 'setup_intent.succeeded'
            | 'sigma.scheduled_query_run.created'
            | 'sku.created'
            | 'sku.deleted'
            | 'sku.updated'
            | 'source.canceled'
            | 'source.chargeable'
            | 'source.failed'
            | 'source.mandate_notification'
            | 'source.refund_attributes_required'
            | 'source.transaction.created'
            | 'source.transaction.updated'
            | 'subscription_schedule.aborted'
            | 'subscription_schedule.canceled'
            | 'subscription_schedule.completed'
            | 'subscription_schedule.created'
            | 'subscription_schedule.expiring'
            | 'subscription_schedule.released'
            | 'subscription_schedule.updated'
            | 'tax_rate.created'
            | 'tax_rate.updated'
            | 'topup.created'
            | 'topup.failed'
            | 'topup.reversed'
            | 'topup.succeeded'
            | 'transfer.created'
            | 'transfer.failed'
            | 'transfer.paid'
            | 'transfer.reversed'
            | 'transfer.updated';

        interface IEvent extends IResourceObject {
            /**
             * Value is "event"
             */
            object: 'event';

            /**
             * The connected account that originated the event.
             * CONNECT ONLY
             */
            account?: string;

            /**
             * The Stripe API version used to render data.
             * Note: this property is populated for events on or after October 31, 2014.
             */
            api_version: string;

            created: number;

            /**
             * Hash containing data associated with the event.
             */
            data: {
                /**
                 * describes the object the event is about. For example, an
                 * invoice.created event will have a full invoice object as the value of
                 * the object key.
                 */
                object: IObject;

                previous_attributes?: { [key: string]: any };
            };

            livemode: boolean;

            /**
             * Number of webhooks yet to be delivered successfully (return a 20x response) to the URLs you’ve specified.
             *
             * positive integer or zero
             */
            pending_webhooks: number;

            /**
             * Information on the API request that instigated the event.
             */
            request: {
                /**
                 * ID of the API request that caused the event. If null, the event was
                 * automatic (e.g., Stripe’s automatic subscription handling). Request logs
                 * are available in the dashboard, but currently not in the API.
                 */
                id: string | null;

                /**
                 * The idempotency key transmitted during the request, if any.
                 * Note: This property is populated only for events on or after May 23, 2017.
                 */
                idempotency_key?: string | null;
            };

            /**
             * Description of the event: e.g. invoice.created, charge.refunded, etc.
             */
            type: string;
        }

        interface IEventListOptions extends IListOptionsCreated {
            /**
             * A string containing a specific event name, or group of events using * as a
             * wildcard. The list will be filtered to include only events with a matching
             * event property
             */
            type: string;
        }
    }

    namespace files {
        interface IFileUpdate extends IResourceObject {
            /**
             * Value is "file"
             */
            object: 'file';

            created: number;

            /**
             * The purpose of the uploaded file. Possible values are "business_logo",
             * "dispute_evidence", "identity_document", "incorporation_article",
             * "incorporation_document".
             */
            purpose: IPurpose;

            /**
             * The size in bytes of the file object.
             */
            size: number;

            /**
             * The type of the file returned. Returns one of the following:
             * pdf, jpg, png.
             */
            type: 'pdf' | 'jpg' | 'png';

            /**
             * A read-only URL where the uploaded file can be accessed. Will be nil
             * unless the uploaded file has one of the following purposes:
             *  business_logo, dispute_evidence, incorporation_document.
             * Also nil if retrieved with the publishable API key.
             */
            url: string;
        }

        interface IFileCreationOptions extends IDataOptions {
            purpose: IPurpose;
            file: {
                data: string | Buffer;
                name: string;
                type: string | 'application/octet-stream';
            };
        }

        interface IFileListOptions extends IListOptionsCreated {
            /**
             * The file purpose to filter queries by. If none is provided, files will not be
             * filtered by purpose.
             */
            purpose: IPurpose;
        }

        type IPurpose =
            | 'business_logo'
            | 'dispute_evidence'
            | 'identity_document'
            | 'incorporation_article'
            | 'incorporation_document';
    }

    namespace fileLinks {
        interface IFileLink extends IResourceObject {
            /**
             * Value is 'file_link'
             */
            object: 'file_link';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Whether this link is already expired.
             */
            expired: boolean;

            /**
             * Time at which the link expires.
             */
            expires_at: number | null;

            /**
             * The file object this link points to
             */
            file: string;

            /**
             * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata: IMetadata;

            /**
             * The publicly accessible URL to download the file.
             */
            url: string;
        }

        interface IFileLinksCreationOptions extends IDataOptionsWithMetadata {
            /**
             * The ID of the file
             */
            file: string;

            /**
             * A future timestamp after which the link will no longer be usable.
             */
            expires_at?: number;
        }

        interface IFileLinksUpdateOptions extends IDataOptionsWithMetadata {
            expires_at?: number | 'now';
        }

        interface IFileLinksListOptions extends IListOptionsCreated {
            /**
             * Only return links for the given file.
             */
            file?: string;

            /**
             * Filter links by their expiration status. By default, all links are returned.
             */
            expired?: boolean;
        }
    }

    namespace invoices {
        /**
         * Invoices are statements of what a customer owes for a particular billing period, including subscriptions,
         * invoice items, and any automatic proration adjustments if necessary. Once an invoice is created, payment
         * is automatically attempted. Note that the payment, while automatic, does not happen exactly at the time of
         * invoice creation. If you have configured webhooks, the invoice will wait until one hour after the last
         * webhook is successfully sent (or the last webhook times out after failing). Any customer credit on the
         * account is applied before determining how much is due for that invoice (the amount that will be actually
         * charged). If the amount due for the invoice is less than 50 cents (the minimum for a charge), we add the
         * amount to the customer's running account balance to be added to the next invoice. If this amount is
         * negative, it will act as a credit to offset the next invoice. Note that the customer account balance does
         * not include unpaid invoices; it only includes balances that need to be taken into account when calculating
         * the amount due for the next invoice.
         */
        interface IInvoice extends IResourceObject {
            /**
             * Value is 'invoice'
             */
            object: 'invoice';

            /**
             * The country of the business associated with this invoice, most often the business creating the invoice.
             */
            account_country: string;

            /**
             * The public name of the business associated with this invoice, most often the business creating the invoice.
             */
            account_name: string;

            /**
             * Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge
             * amount, for example, or if there is account credit that can be applied to the invoice, the amount_due may
             * be 0. If there is a positive starting_balance for the invoice (the customer owes money), the amount_due
             * will also take that into account. The charge that gets generated for the invoice will be for the amount
             * specified in amount_due.
             */
            amount_due: number;

            /**
             * The amount, in cents, that was paid.
             */
            amount_paid: number;

            /**
             * The amount remaining, in cents, that is due.
             */
            amount_remaining: number;

            /**
             * The fee in cents that will be applied to the invoice and transferred to the application owner's
             * Stripe account when the invoice is paid.
             *
             * @deprecated Stripe API Version 2019-03-14 changed the name of this property
             * @see application_fee_amount
             */
            application_fee?: number;

            /**
             * The fee in pence that will be applied to the invoice and transferred to the application owner’s
             * Stripe account when the invoice is paid.
             *
             * @since Stripe API Version 2019-03-14
             */
            application_fee_amount: number;

            /**
             * Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any
             * payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt
             * count. In other words, manual payment attempts after the first attempt do not affect the retry schedule.
             */
            attempt_count: number;

            /**
             * Whether or not an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after
             * the invoice.created webhook, for example, so you might not want to display that invoice as unpaid to your
             * users.
             */
            attempted: boolean;

            /**
             * Controls whether Stripe will perform
             * [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance)
             * of the invoice. When `false`, the invoice’s state will not automatically advance
             * without an explicit action.
             */
            auto_advance: boolean;

            /**
             * Either `charge_automatically`, or `send_invoice`. When charging automatically,
             * Stripe will attempt to pay this invoice using the default source attached to the
             * customer. When sending an invoice, Stripe will email this invoice to the customer
             * with payment instructions.
             *
             * @deprecated This field has been renamed to collection_method and will be removed in a future API version.
             */
            billing: 'charge_automatically' | 'send_invoice';

            /**
             * Indicates the reason why the invoice was created. `subscription_cycle` indicates an
             * invoice created by a subscription advancing into a new period.
             * `subscription_create` indicates an invoice created due to creating a subscription.
             * `subscription_update` indicates an invoice created due to creating or updating a
             * subscription. `subscription` is set for all old invoices to indicate either a change
             * to a subscription or a period advancement. `manual` is set for all invoices
             * unrelated to a subscription (for example: created via the invoice editor). The
             * `upcoming` value is reserved for simulated invoices per the upcoming invoice
             * endpoint. `subscription_threshold` indicates an invoice created due to a billing
             * threshold being reached.
             */
            billing_reason:
                | 'subscription_cycle'
                | 'subscription_create'
                | 'subscription_update'
                | 'subscription'
                | 'manual'
                | 'upcoming'
                | 'subscription_threshold';

            /**
             * ID of the latest charge generated for this invoice, if any. [Expandable]
             */
            charge: string | charges.ICharge | null;

            /**
             * @deprecated Whether or not the invoice is still trying to collect payment. An invoice is closed if it's either paid or
             * it has been marked closed. A closed invoice will no longer attempt to collect payment.
             */
            closed?: boolean;

            /**
             * Either charge_automatically, or send_invoice. When charging automatically, Stripe will attempt to pay
             * this invoice using the default source attached to the customer. When sending an invoice, Stripe will
             * email this invoice to the customer with payment instructions.
             */
            collection_method?: 'charge_automatically' | 'send_invoice';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency: string;

            /**
             * Custom fields displayed on the invoice.
             */
            custom_fields: ICustomField[] | null;

            customer: string | customers.ICustomer;

            /**
             * The customer’s address. Until the invoice is finalized, this field will equal customer.address.
             * Once the invoice is finalized, this field will no longer be updated.
             */
            customer_address: IAddress | null;

            /**
             * The customer’s email. Until the invoice is finalized, this field will equal customer.email.
             * Once the invoice is finalized, this field will no longer be updated.
             */
            customer_email: string | null;

            /**
             * The customer’s name. Until the invoice is finalized, this field will equal customer.name.
             * Once the invoice is finalized, this field will no longer be updated.
             */
            customer_name: string | null;

            /**
             * The customer’s phone number. Until the invoice is finalized, this field will equal customer.phone.
             * Once the invoice is finalized, this field will no longer be updated.
             */
            customer_phone: string | null;

            /**
             * The customer’s shipping information. Until the invoice is finalized, this field will equal customer.shipping.
             * Once the invoice is finalized, this field will no longer be updated.
             */
            customer_shipping: IShippingInformation | null;

            /**
             * The customer’s tax exempt status. Until the invoice is finalized, this field will equal customer.tax_exempt.
             * Once the invoice is finalized, this field will no longer be updated.
             */
            customer_tax_exempt: string | null;

            /**
             * The customer’s tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as customer.tax_ids.
             * Once the invoice is finalized, this field will no longer be updated.
             */
            customer_tax_ids: customerTaxIds.ITaxIdCreationOptions[];

            /**
             * @deprecated Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            date?: number;

            /**
             * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice.
             * If not set, defaults to the subscription’s default payment method, if any, or to the default payment method in
             * the customer’s invoice settings.
             */
            default_payment_method: string | paymentMethods.IPaymentMethod | null;

            /**
             * ID of the default payment source for the invoice. It must belong to the customer
             * associated with the invoice and be in a chargeable state. If not set, defaults to
             * the subscription’s default source, if any, or to the customer’s default source.
             */
            default_source: string | null;

            /**
             * The tax rates applied to this invoice, if any.
             */
            default_tax_rates: taxRates.ITaxRate[];

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             * Referenced as ‘memo’ in the Dashboard.
             */
            description: string | null;

            discount: coupons.IDiscount | null;

            /**
             * The date on which payment for this invoice is due. This value will be `null` for
             * invoices where `billing=charge_automatically`.
             */
            due_date: number | null;

            /**
             * Ending customer balance after attempting to pay invoice. If the invoice has not been attempted yet,
             * this will be null.
             */
            ending_balance: number | null;

            /**
             * Footer displayed on the invoice.
             */
            footer: string | null;

            /**
             * @deprecated Whether or not the invoice has been forgiven. Forgiving an invoice instructs us to update the subscription
             * status as if the invoice were succcessfully paid. Once an invoice has been forgiven, it cannot be unforgiven
             * or reopened
             */
            forgiven?: boolean;

            /**
             * The URL for the hosted invoice page, which allows customers to view and pay an
             * invoice. If the invoice has not been finalized yet, this will be null.
             */
            hosted_invoice_url: string | null;

            /**
             * The link to download the PDF for the invoice. If the invoice has not been finalized
             * yet, this will be null.
             */
            invoice_pdf: string | null;

            /**
             * The individual line items that make up the invoice.
             *
             * `lines` is sorted as follows: invoice items in reverse chronological order, followed
             * by the subscription, if any.
             */
            lines: IList<IInvoiceLineItem>;

            /**
             * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata: IMetadata;

            /**
             * The time at which payment will next be attempted.
             */
            next_payment_attempt: number | null;

            /**
             * A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer’s unique invoice_prefix if it is specified.
             */
            number: string;

            /**
             * Whether or not payment was successfully collected for this invoice. An invoice can be paid (most commonly)
             * with a charge or with credit from the customer's account balance.
             */
            paid: boolean;

            /**
             * The PaymentIntent associated with this invoice. The PaymentIntent is generated when the invoice is finalized,
             * and can then be used to pay the invoice. Note that voiding an invoice will cancel the PaymentIntent. [Expandable]
             */
            payment_intent: paymentIntents.IPaymentIntent | string | null;

            /**
             * End of the usage period during which invoice items were added to this invoice
             */
            period_end: number;

            /**
             * Start of the usage period during which invoice items were added to this invoice
             */
            period_start: number;

            /**
             * Total amount of all post-payment credit notes issued for this invoice.
             */
            post_payment_credit_notes_amount: number;

            /**
             * Total amount of all pre-payment credit notes issued for this invoice.
             */
            pre_payment_credit_notes_amount: number;

            /**
             * This is the transaction number that appears on email receipts sent for this invoice.
             */
            receipt_number: string | null;

            /**
             * Starting customer balance before attempting to pay invoice. If the invoice has not been attempted yet,
             * this will be the current customer balance.
             */
            starting_balance: number;

            /**
             * Extra information about an invoice for the customer's credit card statement.
             */
            statement_descriptor: string | null;

            /**
             * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`.
             */
            status: 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';

            /**
             * Contains the timestamps when an invoice was finalized, paid, marked uncollectible, or voided
             */
            status_transitions: IStatusTransitions;

            /**
             * The subscription that this invoice was prepared for, if any.
             */
            subscription: string | subscriptions.ISubscription | null;

            /**
             * Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
             */
            subscription_proration_date?: number | null;

            /**
             * Total of all subscriptions, invoice items, and prorations on the invoice before any discount is applied
             */
            subtotal: number;

            /**
             * The amount of tax included in the total, calculated from tax_percent and the subtotal. If no tax_percent
             * is defined, this value will be null.
             */
            tax: number | null;

            /**
             * This percentage of the subtotal has been added to the total amount of the invoice, including invoice line
             * items and discounts. This field is inherited from the subscription's tax_percent field, but can be changed
             * before the invoice is paid. This field defaults to null.
             */
            tax_percent: number | null;

            /**
             * If `billing_reason` is set to `subscription_threshold` this returns more information
             * on which threshold rules triggered the invoice.
             */
            threshold_reason?: IThresholdReason;

            /**
             * Total after discount
             */
            total: number;

            /**
             * The aggregate amounts calculated per tax rate for all line items.
             */
            total_tax_amounts: taxRates.ITaxAmount[] | null;

            /**
             * The time at which webhooks for this invoice were successfully delivered (if the invoice had no webhooks to
             * deliver, this will match date). Invoice payment is delayed until webhooks are delivered, or until all webhook
             * delivery attempts have been exhausted.
             */
            webhooks_delivered_at: number | null;
        }

        interface IInvoiceLineItem extends IResourceObject {
            /**
             * The ID of the source of this line item, either an invoice item or a subscription
             */
            id: string;

            /**
             * Value is "line_item"
             */
            object: 'line_item';

            /**
             * The amount, in cents/pence
             */
            amount: number;

            currency: string;

            /**
             * A text description of the line item, if the line item is an invoice item
             */
            description: string;

            /**
             * If true, discounts will apply to this line item. Always false for prorations.
             */
            discountable: boolean;

            /**
             * Whether or not this is a test line item
             */
            livemode: boolean;

            metadata: IMetadata;

            /**
             * The period this line_item covers. For subscription line items, this is the subscription period. For prorations, this starts when
             * the proration was calculated, and ends at the period end of the subscription. For invoice items, this is the time at which the
             * invoice item was created, so the period start and end are the same time.
             */
            period: IPeriod;

            /**
             * The plan of the subscription, if the line item is a subscription or a proration
             */
            plan: plans.IPlan;

            /**
             * Whether or not this is a proration
             */
            proration: boolean;

            /**
             * The quantity of the subscription, if the line item is a subscription or a proration
             */
            quantity: number;

            /**
             * When type is invoiceitem, the subscription that the invoice item pertains to, if any. Left blank when
             * type is already subscription, as it'd be redundant with id.
             */
            subscription: string;

            /**
             * The subscription item that generated this invoice item. Left empty if the line item is not an explicit result of a subscription.
             */
            subscription_item: string;

            /**
             * The amount of tax calculated per tax rate for this line item
             */
            tax_amounts: taxRates.ITaxAmount[];

            /**
             * The tax rates which apply to the line item.
             */
            tax_rates: taxRates.ITaxRate[];

            /**
             * A string identifying the type of the source of this line item, either an invoiceitem or a subscription
             */
            type: 'invoiceitem' | 'subscription';
        }

        interface IInvoiceCreationOptions extends IDataOptionsWithMetadata {
            customer: string;

            /**
             * A fee in pence that will be applied to the invoice and transferred to the application owner’s Stripe account.
             * The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee.
             * For more information, see the application fees documentation.
             */
            application_fee?: number;

            /**
             * Controls whether Stripe will perform
             * [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance)
             * of the invoice. When `false`, the invoice’s state will not automatically advance
             * without an explicit action.
             */
            auto_advance?: boolean;

            /**
             * @deprecated Use collection_method instead
             */
            billing?: 'charge_automatically' | 'send_invoice';

            /**
             * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe
             * will attempt to pay this invoice using the default source attached to the customer.
             * When sending an invoice, Stripe will email this invoice to the customer with payment
             * instructions. Defaults to charge_automatically.
             */
            collection_method?: 'charge_automatically' | 'send_invoice';

            /**
             * A list of up to 4 custom fields to be displayed on the invoice.
             */
            custom_fields?: Array<{
                /**
                 * The name of the custom field. This may be up to 30 characters.
                 */
                name: string;

                /**
                 * The value of the custom field. This may be up to 30 characters.
                 */
                value: string;
            }>;

            /**
             * The number of days from when the invoice is created until it is due. Valid only for
             * invoices where `billing=send_invoice`.
             */
            days_until_due?: number;

            /**
             * ID of the default payment source for the invoice. It must belong to the customer
             * associated with the invoice and be in a chargeable state. If not set, defaults to the
             * subscription’s default source, if any, or to the customer’s default source.
             */
            default_source?: string;

            description?: string;

            /**
             * The date on which payment for this invoice is due. Valid only for invoices where
             * `billing=send_invoice`;
             */
            due_date?: Date | number;

            /**
             * Footer to be displayed on the invoice. This can be unset by updating the value to
             * `null` and then saving.
             */
            footer?: string | null;

            /**
             * Extra information about a charge for the customer’s credit card statement.
             */
            statement_descriptor?: string;

            /**
             * The ID of the subscription to invoice, if any. If not set, the created invoice will
             * include all pending invoice items for the customer. If set, the created invoice will
             * exclude pending invoice items that pertain to other subscriptions. The subscription’s
             * billing cycle and regular subscription events won’t be affected.
             */
            subscription?: string;

            /**
             * The percent tax rate applied to the invoice, represented as a decimal number.
             */
            tax_percent?: number;
        }

        interface IInvoiceUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * A fee in pence that will be applied to the invoice and transferred to the application owner’s Stripe account.
             * The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee.
             * For more information, see the application fees documentation.
             */
            application_fee?: number;

            /**
             * Controls whether Stripe will perform
             * [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance)
             * of the invoice.
             */
            auto_advance?: boolean;

            /**
             * Boolean representing whether an invoice is closed or not. To close an invoice, pass true.
             */
            closed?: boolean;

            /**
             * A list of up to 4 custom fields to be displayed on the invoice.
             */
            custom_fields?: Array<{
                /**
                 * The name of the custom field. This may be up to 30 characters.
                 */
                name: string;

                /**
                 * The value of the custom field. This may be up to 30 characters.
                 */
                value: string;
            }>;

            /**
             * The number of days from which the invoice is created until it is due. Only valid for
             * invoices where billing=send_invoice. This field can only be updated on draft
             * invoices.
             */
            days_until_due?: number;

            /**
             * ID of the default payment source for the invoice. It must belong to the customer
             * associated with the invoice and be in a chargeable state. If not set, defaults to the
             * subscription’s default source, if any, or to the customer’s default source.
             */
            default_source?: string;

            description?: string;

            /**
             * The date on which payment for this invoice is due. Only valid for invoices where
             * `billing=send_invoice`. This field can only be updated on draft invoices.
             */
            due_date?: Date | number;

            /**
             * Footer to be displayed on the invoice. This can be unset by updating the value to
             * `null` and then saving.
             */
            footer?: string | null;

            /**
             * Boolean representing whether an invoice is forgiven or not. To forgive an invoice, pass true. Forgiving an invoice
             * instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been
             * forgiven, it cannot be unforgiven or reopened.
             */
            forgiven?: boolean;

            /**
             * Extra information about a charge for the customer’s credit card statement.
             */
            statement_descriptor?: string;

            /**
             * The percent tax rate applied to the invoice, represented as a non-negative decimal
             * number (with at most four decimal places) between 0 and 100. To unset a
             * previously-set value, pass an empty string. This field can be updated only on draft
             * invoices.
             */
            tax_percent?: number;
        }

        interface IInvoiceFinalizeOptions extends IDataOptions {
            /**
             * Controls whether Stripe will perform
             * [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance)
             * of the invoice. When `false`, the invoice’s state will not automatically advance
             * without an explicit action.
             */
            auto_advance: boolean;
        }

        interface IInvoicePayOptions extends IDataOptionsWithMetadata {
            /**
             * A payment source to be charged. The source must be the ID of a source
             * belonging to the customer associated with the invoice being paid.
             */
            source?: string | cards.ICardSourceCreationOptions;

            /**
             * Boolean representing whether an invoice is paid outside of Stripe.
             * This will result in no charge being made.
             */
            paid_out_of_band?: boolean;

            /**
             * In cases where the source used to pay the invoice has insufficient
             * funds, passing forgive=true controls whether a charge should be
             * attempted for the full amount available on the source, up to the
             * amount to fully pay the invoice. This effectively forgives the
             * difference between the amount available on the source and the amount due.
             * Passing forgive=false will fail the charge if the source hasn’t
             * been pre-funded with the right amount. An example for this case is
             * with ACH Credit Transfers and wires: if the amount wired is less
             * than the amount due by a small amount, you might want to forgive
             * the difference.
             */
            forgive?: boolean;
        }

        interface IInvoiceListOptions extends IListOptions {
            /**
             * The billing mode of the invoice to retrieve. Either `charge_automatically` or `send_invoice`
             * This field has been renamed to collection_method and will be removed in a future API version.
             */
            billing?: 'charge_automatically' | 'send_invoice';

            /**
             * Either charge_automatically, or send_invoice. When charging automatically, Stripe will attempt to pay
             * this invoice using the default source attached to the customer. When sending an invoice, Stripe will
             * email this invoice to the customer with payment instructions.
             */
            collection_method?: 'charge_automatically' | 'send_invoice';

            /**
             * A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp,
             * or it can be a dictionary with the following options:
             */
            created?: IDateFilter;

            /**
             * @deprecated Use created property instead as of api version 2019-03-14.
             */
            date?: IDateFilter;

            /**
             * The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned.
             */
            customer?: string;

            /**
             * A filter on the list based on the object due_date field. The value can be a string with an integer Unix timestamp,
             * or it can be a dictionary with the following options:
             */
            due_date?: IDateFilter;

            /**
             * The status of the invoice, one of draft, open, paid, uncollectible, or void.
             */
            status?: 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';

            /**
             * Only return invoices for the subscription specified by this subscription ID
             */
            subscription?: string;
        }

        interface IInvoiceLineItemRetrievalOptions extends IListOptions {
            coupon?: string;

            /**
             * In the case of upcoming invoices, the customer of the upcoming invoice is required. In other cases it is ignored.
             */
            customer?: string;

            /**
             * In the case of upcoming invoices, the subscription of the upcoming invoice is optional. In other cases it is ignored.
             */
            subscription?: string;

            subscription_plan?: string;
            subscription_prorate?: boolean;
            subscription_proration_date?: number;
            subscription_quantity?: number;
            subscription_trial_end?: number;
        }

        type IInvoiceListLineItemsOptions = IListOptions;

        interface IInvoiceUpcomingOptions extends IDataOptions {
            /**
             * The code of the coupon to apply. If a subscription or subscription_plan is provided, the invoice returned will preview updating
             * or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming
             * invoice from among the customer’s subscriptions.
             */
            coupon?: string;

            /**
             * The identifier of the subscription for which you’d like to retrieve the upcoming invoice. If not provided, but a subscription_plan
             * is provided, you will preview creating a subscription to that plan. If neither subscription nor subscription_plan is provided, you
             * will retrieve the next upcoming invoice from among the customer’s subscriptions.
             */
            subscription?: string;

            /**
             * Boolean indicating whether this subscription should cancel at the end of the current period.
             */
            subscription_cancel_at_period_end?: boolean;

            /**
             * The identifier of the customer whose upcoming invoice you’d like to retrieve. REQUIRED IF SUBSCRIPTION UNSET
             */
            customer?: string;

            /**
             * List of subscription items, each with an attached plan.
             */
            subscription_items?: subscriptions.ISubscriptionUpdateItem[];

            /**
             * If set, the invoice returned will preview updating the subscription given to this plan, or creating a new subscription to this plan
             * if no subscription is given.
             */
            subscription_plan?: string;

            /**
             * If previewing an update to a subscription, this decides whether the preview will show the result of applying prorations or not. If
             * set, one of subscription_plan or subscription, and one of subscription_plan, subscription_quantity or subscription_trial_end are
             * required.
             */
            subscription_prorate?: boolean;

            /**
             * If previewing an update to a subscription, and doing proration, subscription_proration_date forces the proration to be calculated as
             * though the update was done at the specified time. The time given must be within the current subscription period, and cannot be
             * before the subscription was on its current plan.If set, subscription, and one of subscription_plan, subscription_quantity or
             * subscription_trial_end are required. Also, subscription_proration cannot be set to false.
             */
            subscription_proration_date?: number;

            /**
             * If provided, the invoice returned will preview updating or creating a subscription with that quantity. If set, one of subscription_plan
             * or subscription is required.
             */
            subscription_quantity?: number;

            /**
             * If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of subscription_plan
             * or subscription is required.
             */
            subscription_trial_end?: number;
        }

        interface IInvoiceListUpcomingLineItemsOptions extends IListOptions {
            /**
             * The code of the coupon to apply. If subscription or subscription_items is provided, the invoice returned will preview updating or
             * creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice
             * from among the customer’s subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
             */
            coupon?: string;

            /**
             * The identifier of the customer whose upcoming invoice you’d like to retrieve.
             * Required if subscription unset
             */
            customer?: string;

            /**
             * A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request
             * and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page
             * of the list.
             */
            ending_before?: string;

            /**
             * array of hashes
             * List of invoice items to add or update in the upcoming invoice preview.
             */

            invoice_items?: invoiceItems.InvoiceItem[];

            /**
             * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default
             * is 10.
             */
            limit?: number;

            /**
             * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For
             * instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call
             * can include starting_after=obj_foo in order to fetch the next page of the list.
             */
            starting_after?: string;

            /**
             * The identifier of the subscription for which you’d like to retrieve the upcoming invoice. If not
             * provided, but a subscription_items is provided, you will preview creating a subscription with
             * those items. If neither subscription nor subscription_items is provided, you will retrieve the
             * next upcoming invoice from among the customer’s subscriptions.
             */
            subscription?: string;

            /**
             * For new subscriptions, a future timestamp to anchor the subscription’s billing cycle. This is used to
             * determine the date of the first full invoice, and, for plans with month or year intervals, the day of
             * the month for subsequent invoices. For existing subscriptions, the value can only be set to now or
             * unchanged.
             */
            subscription_billing_cycle_anchor?: 'now' | 'unchanged';

            /**
             * Boolean indicating when the subscription should be scheduled to cancel. Will prorate if
             * within the current period if prorate=true
             */
            subscription_cancel_at?: boolean;

            /**
             * Boolean indicating whether this subscription should cancel at the end of the current period.
             */
            subscription_cancel_at_period_end?: boolean;

            subscription_cancel_now?: boolean;

            /**
             * array of hashes List of subscription items, each with an attached plan.
             */
            subscription_items?: subscriptions.ISubscriptionUpdateItem[];

            /**
             * If previewing an update to a subscription, this decides whether the preview will show the result of
             * applying prorations or not. If set, one of subscription_items or subscription, and one of
             * subscription_items or subscription_trial_end are required.
             */
            subscription_prorate?: boolean;

            /**
             * If previewing an update to a subscription, and doing proration, subscription_proration_date
             * forces the proration to be calculated as though the update was done at the specified time. The time
             * given must be within the current subscription period, and cannot be before the subscription was on
             * its current plan. If set, subscription, and one of subscription_items, or subscription_trial_end are
             * required. Also, subscription_proration cannot be set to false.
             */
            subscription_proration_date?: number;

            /**
             * Date a subscription is intended to start (can be future or past)
             */
            subscription_start_date?: number;

            /**
             * DEPRECATED
             * If provided, the invoice returned will preview updating or creating a subscription with that tax
             * percent. If set, one of subscription_items or subscription is required. This field has been deprecated
             * and will be removed in a future API version, for further information view the migration docs for
             * tax_rates.
             */
            subscription_tax_percent?: number;

            /**
             * If provided, the invoice returned will preview updating or creating a subscription with that trial end.
             * If set, one of subscription_items or subscription is required.
             */
            subscription_trial_end?: 'now' | number | string;

            /**
             * Indicates if a plan’s trial_period_days should be applied to the subscription. Setting
             * subscription_trial_end per subscription is preferred, and this defaults to false. Setting this flag to
             * true together with subscription_trial_end is not allowed.
             */
            subscription_trial_from_plan?: boolean;
        }

        interface IPeriod {
            /**
             * The period start date
             */
            start: number;
            /**
             * The period end date
             */
            end: number;
        }

        interface ICustomField {
            /**
             * The name of the custom field.
             */
            name: string;
            /**
             * The value of the custom field.
             */
            value: string;
        }

        interface IStatusTransitions {
            /**
             * The time that the invoice draft was finalized.
             */
            finalized_at: number | null;
            /**
             * The time that the invoice was marked uncollectible.
             */
            marked_uncollectible_at: number | null;
            /**
             * The time that the invoice was paid.
             */
            paid_at: number | null;
            /**
             * The time that the invoice was voided.
             */
            voided_at: number | null;
        }

        interface IThresholdReason {
            /**
             * The total invoice amount threshold boundary if it triggered the threshold invoice.
             */
            amount_gte: number;
            /**
             * Indicates which line items triggered a threshold invoice.
             */
            item_reasons: IItemReason[];
        }

        interface IItemReason {
            /**
             * The IDs of the line items that triggered the threshold invoice.
             */
            line_item_ids: string[];
            /**
             * The quantity threshold boundary that applied to the given line item.
             */
            usage_gte: number;
        }
    }

    namespace invoiceItems {
        interface InvoiceItem extends IResourceObject {
            /**
             * Value is "invoiceitem"
             */
            object: 'invoiceitem';

            amount: number;
            currency: string;
            customer: string | customers.ICustomer;
            date: number;
            description: string;

            /**
             * If true, discounts will apply to this invoice item. Always false for prorations.
             */
            discountable: boolean;

            /**
             * If null, the invoice item is pending and will be included in the upcoming invoice. [Expandable]
             */
            invoice: string | invoices.IInvoice | null;
            livemode: boolean;
            metadata: IMetadata;

            period: invoices.IPeriod;

            /**
             * If the invoice item is a proration, the plan of the subscription that the proration was computed for.
             */
            plan: plans.IPlan;

            /**
             * Whether or not the invoice item was created automatically as a proration adjustment when the customer switched plans
             */
            proration: boolean;

            /**
             * If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
             */
            quantity: number;

            /**
             * The subscription that this invoice item has been created for, if any.
             */
            subscription: string | subscriptions.ISubscription;
        }

        interface InvoiceItemCreationOptions extends IDataOptionsWithMetadata {
            /**
             * The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer’s
             * account, pass a negative amount.
             */
            amount?: number;

            /**
             * 3-letter ISO code for currency.
             */
            currency: string;

            /**
             * The ID of the customer who will be billed when this invoice item is billed.
             */
            customer: string;

            /**
             * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
             * This can be unset by updating the value to null and then saving.
             */
            description?: string;

            /**
             * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for
             * all other invoice items.
             */
            discountable?: boolean;

            /**
             * The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming
             * scheduled invoice. Use this when adding invoice items in response to an invoice.created webhook. You cannot add an invoice item
             * to an invoice that has already been paid, attempted or closed.
             */
            invoice?: string;

            /**
             * Non-negative integer. The quantity of units for the invoice item.
             */
            quantity?: number;

            /**
             * The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming
             * scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice
             * item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.
             */
            subscription?: string;

            /**
             * The integer unit amount in cents of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by
             * the quantity to get the full amount. If you want to apply a credit to the customer’s account, pass a negative unit_amount.
             */
            unit_amount?: number;
        }

        interface InvoiceItemUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * The integer amount in cents/pence of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's
             * account, pass a negative amount.
             */
            amount?: number;

            /**
             * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This can be
             * unset by updating the value to null and then saving.
             */
            description?: string;

            /**
             * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other
             * invoice items. Cannot be set to true for prorations.
             */
            discountable?: boolean;
        }

        interface InvoiceItemListOptions extends IListOptionsCreated {
            /**
             * The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.
             */
            customer?: string;

            /**
             * Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.
             */
            invoice?: string;

            /**
             * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
             */
            limit?: number;

            /**
             * Set to true to only show pending invoice items, which are not yet attached to any invoices. Set to false to only show
             * invoice items already attached to invoices. If unspecified, no filter is applied.
             */
            pending?: boolean;
        }
    }

    namespace issuing {
        interface ICreated {
            /**
             * Return results where the created field is greater than this value.
             */
            gt?: number;

            /**
             * Return results where the created field is greater than or equal to this value.
             */
            gte?: number;

            /**
             * Return results where the created field is less than this value.
             */
            lt?: number;

            /**
             * Return results where the created field is less than or equal to this value.
             */
            lte?: number;
        }

        namespace authorizations {
            /**
             * When an issued card is used to make a purchase, an Issuing Authorization object is created. Authorizations must be approved for the purchase to be completed successfully.
             */
            interface IAuthorization extends IResourceObject {
                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * String representing the object’s type. Objects of the same type share the same value.
                 */
                object: 'issuing.authorization';

                /**
                 * Whether the authorization has been approved.
                 */
                approved: boolean;

                /**
                 * How the card details were provided. One of chip, contactless, keyed_in, online, or swipe.
                 */
                authorization_method: AuthorizationMethod;

                /**
                 * The amount that has been authorized. This will be 0 when the object is created, and increase after it has been approved.
                 */
                authorized_amount: number;

                /**
                 * The currency that was presented to the cardholder for the authorization. Three-letter ISO currency code, in lowercase. Must be a supported currency.
                 */
                authorized_currency: string;

                balance_transactions: balance.IBalanceTransaction[];

                /**
                 * Show child attributes
                 */
                card: cards.IIssuingCard;

                /**
                 * The cardholder to whom this authorization belongs.
                 */
                cardholder: string | cardholders.ICardholder;

                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * The amount the authorization is expected to be in held_currency. When Stripe holds funds from you, this is the amount reserved for the authorization. This will be 0 when the object is created, and increase after it has been approved. For multi-currency transactions, held_amount can be used to determine the expected exchange rate.
                 */
                held_amount: number;

                /**
                 * The currency of the held amount. This will always be the card currency.
                 */
                held_currency: string;

                is_held_amount_controllable: boolean;

                /**
                 * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
                 */
                livemode: boolean;

                merchant_data: MerchantData;

                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: IMetadata;

                /**
                 * The amount the user is requesting to be authorized. This field will only be non-zero during an issuing.authorization.request webhook.
                 */
                pending_authorized_amount: number;

                /**
                 * The additional amount Stripe will hold if the authorization is approved. This field will only be non-zero during an issuing.authorization.request webhook.
                 */
                pending_held_amount: number;

                /**
                 * Show child attributes
                 */
                request_history: RequestHistory[];

                /**
                 * One of closed, pending, or reversed.
                 */
                status: AuthorizationStatus;

                /**
                 * Show child attributes
                 */
                transactions: transactions.ITransaction[];

                /**
                 * Show child attributes
                 */
                verification_data: VerificationData;

                /**
                 * What, if any, digital wallet was used for this authorization. One of apple_pay, google_pay, or samsung_pay.
                 */
                wallet_provider: WalletProvider;
            }

            interface MerchantData {
                /**
                 * A categorization of the seller’s type of business. See our merchant categories guide for a list of possible values.
                 */
                category: string;

                /**
                 * City where the seller is located
                 */
                city: string;

                /**
                 * Country where the seller is located
                 */
                country: string;

                /**
                 * Name of the seller
                 */
                name: string;

                /**
                 * Identifier assigned to the seller by the card brand
                 */
                network_id: string;

                /**
                 * Postal code where the seller is located
                 */
                postal_code: string;

                /**
                 * State where the seller is located
                 */
                state: string;

                /**
                 * The url an online purchase was made from
                 */
                url: string;
            }

            interface RequestHistory {
                /**
                 * Whether this request was approved.
                 */
                approved: boolean;

                /**
                 * The amount that was authorized at the time of this request
                 */
                authorized_amount: number;

                /**
                 * The currency that was presented to the cardholder for the authorization. Three-letter ISO currency code, in lowercase. Must be a supported currency.
                 */
                authorized_currency: string;

                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * The amount Stripe held from your account to fund the authorization, if the request was approved
                 */
                held_amount: number;

                /**
                 * The currency of the held amount
                 */
                held_currency: string;

                /**
                 * One of authentication_failed, authorization_controls, card_active, card_inactive, insufficient_funds, account_compliance_disabled, account_inactive, suspected_fraud, webhook_approved, webhook_declined, or webhook_timeout.
                 */
                reason: 'authentication_failed' | 'authorization_controls' | 'card_active' | 'card_inactive' | 'insufficient_funds' | 'account_compliance_disabled' | 'account_inactive' | 'suspected_fraud' | 'webhook_approved' | 'webhook_declined' | 'webhook_timeout';

                /**
                 * When an authorization is declined due to authorization_controls, this array contains details about the authorization controls that were violated. Otherwise, it is empty.
                 */
                violated_authorization_controls: {
                    /**
                     * Entity which the authorization control acts on. One of account, card, or cardholder.
                     */
                    entity: 'account' | 'cardholder' | 'card',

                    /**
                     * Name of the authorization control. One of allowed_categories, blocked_categories, max_amount, max_approvals, or spending_limits.
                     */
                    name: 'allowed_categories' | 'blocked_categories' | 'max_amount' | 'max_approvals' | 'spending_limits',
                };
            }

            interface VerificationData {
                /**
                 * One of match, mismatch, or not_provided.
                 */
                address_line1_check: 'match' | 'mismatch' | 'not_provided';

                /**
                 * One of match, mismatch, or not_provided.
                 */
                address_zip_check: 'match' | 'mismatch' | 'not_provided';

                /**
                 * One of exempt, failure, none, or success.
                 */
                authentication: 'exempt' | 'failure' | 'none' |'success';

                /**
                 * One of match, mismatch, or not_provided.
                 */
                cvc_check: 'match' | 'mismatch' | 'not_provided';
            }

            type AuthorizationStatus = 'closed' | 'pending' | 'reversed';
            type AuthorizationMethod = 'chip' | 'contactless' | 'keyed_in' | 'online' | 'swipe';
            type WalletProvider = 'apple_pay' | 'google_pay' | 'samsung_pay';

            interface IAuthorizationUpdateOptions {
                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata?: IOptionsMetadata;
            }

            interface IAuthorizationApproveOptions {
                /**
                 * If the authorization’s is_held_amount_controllable property is true, you may provide this value to control how much to hold for the authorization.
                 * Must be positive (use decline to decline an authorization request).
                 */
                held_amount?: number;

                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata?: IOptionsMetadata;
            }

            interface IAuthorizationDeclineOptions {
                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata?: IOptionsMetadata;
            }

            interface IAuthorizationListOptions {
                /**
                 * Only return issuing transactions that belong to the given card.
                 */
                card?: string;

                /**
                 * Only return authorizations belonging to the given cardholder.
                 */
                cardholder?: string;

                /**
                 * A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
                 */
                created?: string | ICreated;

                /**
                 * A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
                 */
                ending_before?: string;

                /**
                 * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
                 */
                limit?: number;

                /**
                 * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.
                 */
                starting_after?: string;

                /**
                 * Only return authorizations with the given status. One of pending, closed, or reversed.
                 */
                status?: AuthorizationStatus;
            }
        }

        namespace cardholders {
            /**
             * An Issuing Cardholder object represents an individual or business entity who is issued cards.
             */
            interface ICardholder extends IResourceObject {
                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * String representing the object’s type. Objects of the same type share the same value.
                 */
                object: 'issuing.cardholder';

                authorization_controls: ICardholderAuthorizationControls;

                /**
                 * The cardholder’s billing address.
                 */
                billing: {
                    address: ICardholderBillingAddress;
                    name: string;
                };

                /**
                 * Additional information about a business_entity cardholder.
                 */
                company: ICardholderBusinessEntity;

                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * The cardholder’s email address.
                 */
                email: string;

                /**
                 * Additional information about an individual cardholder.
                 */
                individual: ICardholderIndividual;

                /**
                 * Whether or not this cardholder is the default cardholder.
                 */
                is_default: boolean;

                /**
                 * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
                 */
                livemode: boolean;

                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: IMetadata;

                /**
                 * The cardholder’s name. This will be printed on cards issued to them.
                 */
                name: string;

                /**
                 * The cardholder’s phone number.
                 */
                phone_number: string;

                /**
                 * Information about verification requirements for the cardholder, including what information needs to be collected.
                 */
                requirements: {
                    /**
                     * If the cardholder is disabled, this string describes why. Can be one of listed, rejected.listed, or under_review.
                     */
                    disabled_reason: 'listed' | 'rejected.listed' | 'under_review';

                    /**
                     * If not empty, this field contains the list of fields that need to be collected in order to verify and re-enabled the cardholder.
                     */
                    past_due: string[];
                };

                /**
                 * One of active, inactive, or blocked.
                 */
                status: CardholderStatus;

                /**
                 * One of individual or business_entity.
                 */
                type: CardholderType;
            }

            interface ICardholderBusinessEntity {
                /**
                 * Whether the company’s business ID number was provided.
                 */
                tax_id_provided?: boolean;
            }

            interface ICardholderIndividual {
                /**
                 * The date of birth of this cardholder.
                 */
                dob: {
                    /**
                     * The day of birth, between 1 and 31.
                     */
                    day: number;

                    /**
                     * The month of birth, between 1 and 12.
                     */
                    month: number;

                    /**
                     * The four-digit year of birth.
                     */
                    year: number;
                };

                /**
                 * The first name of this cardholder.
                 */
                first_name: string;

                /**
                 * The last name of this cardholder.
                 */
                last_name: string;

                /**
                 * Government-issued ID document for this cardholder.
                 */
                verification?: {
                    /**
                     * An identifying document, either a passport or local ID card.
                     */
                    document: {
                        /**
                         * The back of a document returned by a file upload with a purpose value of identity_document.
                         */
                        back: string;

                        /**
                         * The front of a document returned by a file upload with a purpose value of identity_document.
                         */
                        front: string;
                    };
                };
            }

            interface ICardholderBillingAddress {
                /**
                 * City/District/Suburb/Town/Village.
                 */
                city: string;

                /**
                 * 2-letter country code.
                 */
                country: string;

                /**
                 * Address line 1 (Street address/PO Box/Company name).
                 */
                line1: string;

                /**
                 * Address line 2 (Apartment/Suite/Unit/Building).
                 */
                line2?: string;

                /**
                 * ZIP or postal code.
                 */
                postal_code: string;

                /**
                 * State/County/Province/Region.
                 */
                state?: string;
            }

            interface ICardholderUpdateOptions {
                /**
                 * Spending rules that give you some control over how your cards can be used. Refer to our authorizations documentation for more details.
                 */
                authorization_controls?: ICardholderAuthorizationControls;

                /**
                 * The cardholder’s billing address.
                 */
                billing?: {
                    address: ICardholderBillingAddress;
                };

                /**
                 * Additional information about a business_entity cardholder.
                 */
                company?: ICardholderBusinessEntity;

                /**
                 * The cardholder’s email address.
                 */
                email?: string;

                /**
                 * Additional information about an individual cardholder.
                 */
                individual?: ICardholderIndividual;

                /**
                 * Specifies whether to set this as the default cardholder.
                 */
                is_default?: boolean;

                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata.
                 */
                metadata?: IOptionsMetadata;

                /**
                 * The cardholder’s phone number.
                 */
                phone_number?: string;

                /**
                 * Specifies whether to permit authorizations on this cardholder’s cards. Possible values are active or inactive.
                 */
                status?: Exclude<CardholderStatus, 'blocked'>;
            }

            interface ICardholderCreateOptions extends ICardholderUpdateOptions {
                /**
                 * The cardholder’s billing address.
                 */
                billing: {
                    address: ICardholderBillingAddress;
                };

                /**
                 * The cardholder’s name. This will be printed on cards issued to them.
                 */
                name: string;

                /**
                 * The type of cardholder. Possible values are individual or business_entity.
                 */
                type: CardholderType;
            }

            interface ICardholderListOptions {
                /**
                 * A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a
                 * dictionary with the following options:
                 */
                created?: string | ICreated;

                /**
                 * Only return cardholders that have the given email address.
                 */
                email?: string;

                /**
                 * A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
                 */
                ending_before?: string;

                /**
                 * Only return the default cardholder.
                 */
                is_default?: boolean;

                /**
                 * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
                 */
                limit?: number;

                /**
                 * Only return cardholders that have the given phone number.
                 */
                phone_number?: string;

                /**
                 * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.
                 */
                starting_after?: string;

                /**
                 * Only return cardholders that have the given status. One of active, inactive, or blocked.
                 */
                status?: CardholderStatus;

                /**
                 * Only return cardholders that have the given type. One of individual or business_entity.
                 */
                type?: CardholderType;
            }

            interface ICardholderAuthorizationControls {
                /**
                 * Array of strings containing categories of authorizations permitted on this card.
                 */
                allowed_categories: string[];

                /**
                 * Array of strings containing categories of authorizations to always decline on this card.
                 */
                blocked_categories: string[];

                /**
                 * Limit the spending with rules based on time intervals and categories.
                 */
                spending_limits: ISpendingLimit[];

                /**
                 * Currency for the amounts within spending_limits. Locked to the currency of the card.
                 */
                spending_limits_currency: string;
            }

            /**
             * Limit the spending with rules based on time intervals and categories.
             */
            interface ISpendingLimit {
                /**
                 * Maximum amount allowed to spend per time interval.
                 */
                amount: number;

                /**
                 * Array of strings containing categories on which to apply the spending limit. Leave this blank to limit all charges.
                 */
                categories: string[];

                /**
                 * The time interval with which to apply this spending limit towards. Allowed values are per_authorization, daily, weekly, monthly, yearly, or all_time.
                 */
                interval: SpendingLimitInterval;
            }

            type CardholderStatus = 'active' | 'inactive' | 'blocked';
            type CardholderType = 'individual' | 'business_entity';
            type SpendingLimitInterval = 'per_authorization' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'all_time';
        }

        namespace cards {
            /**
             * You can create physical or virtual cards that are issued to cardholders.
             */
            interface IIssuingCard extends IResourceObject {
                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * Value is "issuing.card"
                 */
                object: 'issuing.card';

                /**
                 * Spending rules that give you some control over how your cards can be used. Refer to our authorizations documentation for more details.
                 */
                authorization_controls: ICardAuthorizationControls;

                /**
                 * The brand of the card.
                 */
                brand: string;

                /**
                 * The Cardholder object to which the card belongs.
                 */
                cardholder: cardholders.ICardholder;

                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * Three-letter ISO currency code, in lowercase. Must be a supported currency.
                 */
                currency: string;

                /**
                 * The expiration month of the card.
                 */
                exp_month: number;

                /**
                 * The expiration year of the card.
                 */
                exp_year: number;

                /**
                 * The last 4 digits of the card number.
                 */
                last4: string;

                /**
                 * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
                 */
                livemode: boolean;

                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: IMetadata;

                /**
                 * The name of the cardholder, printed on the card.
                 */
                name: string;

                /**
                 * Metadata about the PIN on the card.
                 */
                pin: IIssuingCardPin;

                /**
                 * The card this card replaces, if any.
                 */
                replacement_for: string | IIssuingCard;

                /**
                 * Why the card that this card replaces (if any) needed to be replaced. One of damage, expiration, loss, or theft.
                 */
                replacement_reason: IssuingCardReplacementReason;

                /**
                 * Where and how the card will be shipped.
                 */
                shipping: IIssuingCardShippingDetails;

                /**
                 * One of active, inactive, canceled, lost, or stolen.
                 */
                status: IssuingCardStatus;

                /**
                 * One of virtual or physical.
                 */
                type: IssuingCardType;
            }

            interface IIssuingCardDetails {
                /**
                 * Value is "object.card"
                 */
                object: 'issuing.card_details';

                /**
                 * The card object
                 */
                card: IIssuingCard;

                /**
                 * The CVC of the card.
                 */
                cvc: string;

                /**
                 * The expiration month of the card.
                 */
                exp_month: number;

                /**
                 * The expiration year of the card.
                 */
                exp_year: number;

                /**
                 * The card number.
                 */
                number: string;
            }

            /**
             * Spending rules that give you some control over how your cards can be used.
             * Refer to our authorizations documentation for more details.
             */
            interface ICardAuthorizationControls extends cardholders.ICardholderAuthorizationControls {
                /**
                 * The currency of the card. See max_amount
                 */
                currency: string;

                /**
                 * Maximum count of approved authorizations on this card. Counts all authorizations retroactively.
                 */
                max_approvals: number;
            }

            interface IIssuingCardShippingAddress {
                /**
                 * Shipping address.
                 */
                address: cardholders.ICardholderBillingAddress;

                /**
                 * Recipient name.
                 */
                name: string;

                /**
                 * One of bulk or individual. Bulk shipments will be grouped and mailed together, while individual ones will not.
                 */
                type?: 'bulk' | 'individual';
            }

            interface IIssuingCardShippingDetails extends IIssuingCardShippingAddress {
                /**
                 * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
                 */
                carrier: string;

                /**
                 * A unix timestamp representing a best estimate of when the card will be delivered.
                 */
                eta: number;

                /**
                 * The delivery status of the card. One of pending, shipped, delivered, returned, failure, or canceled.
                 */
                status: 'pending' | 'shipped' | 'delivered' | 'returned' | 'failure' | 'canceled';

                /**
                 * A tracking number for a card shipment.
                 */
                tracking_number: string;

                /**
                 * A link to the shipping carrier’s site where you can view detailed information about a card shipment.
                 */
                tracking_url: string;
            }

            /**
             * Metadata about the PIN on the card.
             */
            interface IIssuingCardPin {
                status: 'blocked' | 'active';
            }

            type IssuingCardReplacementReason = 'damage' | 'expiration' | 'loss' | 'theft';
            type IssuingCardStatus = 'active' | 'inactive' | 'canceled' | 'lost' | 'stolen';
            type IssuingCardType = 'virtual' | 'physical';

            /**
             * Updates the specified Issuing Card object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             */
            interface IIssuingCardUpdateOptions {
                /**
                 * Spending rules that give you some control over how your cards can be used. Refer to our authorizations documentation for more details.
                 */
                auhtorization_controls?: ICardAuthorizationControls;

                /**
                 * The Cardholder to associate the card with.
                 */
                cardholder?: string;

                metadata?: IOptionsMetadata;

                /**
                 * Specifies whether to permit authorizations on this card. Possible values are active, inactive, or the terminal states: canceled, lost, stolen.
                 */
                status?: IssuingCardStatus;
            }

            /**
             * Creates an Issuing Card object.
             */
            interface IIssuingCardCreateOptions extends IIssuingCardUpdateOptions {
                /**
                 * The currency for the card. This currently must be usd.
                 */
                currency: string;

                /**
                 * The type of card to issue. Possible values are physical or virtual.
                 */
                type: IssuingCardType;

                /**
                 * The card this is meant to be a replacement for (if any).
                 */
                replacement_for?: string;

                /**
                 * If replacement_for is specified, this should indicate why that card is being replaced. One of damage, expiration, loss, or theft.
                 */
                replacement_reason?: IssuingCardReplacementReason;

                /**
                 * The address where the card will be shipped.
                 */
                shipping?: IIssuingCardShippingAddress;
            }

            /**
             * Returns a list of Issuing Card objects. The objects are sorted in descending order by creation date,
             * with the most recently created object appearing first.
             */
            interface IIssuingCardListOptions {
                /**
                 * Only return cards belonging to the Cardholder with the provided ID.
                 */
                cardholder?: string;

                /**
                 * A filter on the list based on the object created field.
                 * The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
                 */
                created?: string | ICreated;

                /**
                 * A cursor for use in pagination. ending_before is an object ID that defines your place in the list.
                 * For instance, if you make a list request and receive 100 objects, starting with obj_bar,
                 * your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
                 */
                ending_before?: string;

                /**
                 * Only return cards that have the given expiration month.
                 */
                exp_month?: number;

                /**
                 * Only return cards that have the given expiration year.
                 */
                exp_year?: number;

                /**
                 * Only return cards that have the given last four digits.
                 */
                last4?: string;

                /**
                 * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
                 */
                limit?: number;

                /**
                 * Only return cards that have the given name.
                 */
                name?: string;

                /**
                 * Only return cards whose full card number matches that of this card source ID.
                 */
                source?: string;

                /**
                 * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.
                 */
                starting_after?: string;

                /**
                 * Only return cards that have the given status. One of active, inactive, canceled, lost, or stolen.
                 */
                status?: IssuingCardStatus;

                /**
                 * Only return cards that have the given type. One of virtual or physical.
                 */
                type?: IssuingCardType;
            }
        }

        namespace disputes {
            /**
             * As a card issuer, you can dispute transactions that you do not recognize, suspect to be fraudulent, or have some other issue.
             */
            interface IIssuingDispute extends IResourceObject {
                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * String representing the object’s type. Objects of the same type share the same value.
                 */
                object: 'issuing.dispute';

                /**
                 * Disputed amount. Usually the amount of the disputed_transaction, but can differ (usually because of currency fluctuation or because only part of the order is disputed).
                 */
                amount: number;

                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * The currency the disputed_transaction was made in.
                 */
                currency: string;

                /**
                 * The transaction being disputed.
                 */
                disputed_transaction: string | transactions.ITransaction;

                /**
                 * Evidence related to the dispute. This hash will contain exactly one non-null value, containing an evidence object that matches its reason
                 */
                evidence: IIssuingDisputeEvidence;

                /**
                 * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
                 */
                livemode: boolean;

                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata.
                 */
                metadata: IMetadata;

                /**
                 * Reason for this dispute. One of other or fraudulent.
                 */
                reason: IssuingDisputeReason;

                /**
                 * Current status of dispute. One of lost, under_review, unsubmitted, or won.
                 */
                status: IssuingDisputeStatus;
            }

            interface IIssuingDisputeEvidence {
                /**
                 * Evidence to support a fraudulent dispute. This will only be present if your dispute’s reason is fraudulent.
                 */
                fraudulent?: {
                    /**
                     * Brief freeform text explaining why you are disputing this transaction.
                     */
                    dispute_explanation: string;

                    /**
                     * (ID of a file upload) Additional file evidence supporting your dispute.
                     */
                    uncategorized_file: string;
                };

                other?: {
                    /**
                     * Brief freeform text explaining why you are disputing this transaction.
                     */
                    dispute_explanation: string;

                    /**
                     * (ID of a file upload) Additional file evidence supporting your dispute.
                     */
                    uncategorized_file: string;
                };
            }

            type IssuingDisputeReason = 'other' | 'fraudlent';
            type IssuingDisputeStatus = 'lost' | 'under_review' | 'unsubmitted' | 'won';

            interface IIssuingDisputeUpdateOptions {
                metadata?: IOptionsMetadata;
            }

            interface IIssuingDisputeCreateOptions extends IIssuingDisputeUpdateOptions {
                /**
                 * The ID of the issuing transaction to create a dispute for.
                 */
                disputed_transaction: string;

                /**
                 * The reason for the dispute. One of other or fraudulent.
                 */
                reason: IssuingDisputeReason;

                /**
                 * Amount to dispute, defaults to full value, given in the currency the transaction was made in.
                 */
                amount?: number;

                /**
                 * A hash containing all the evidence related to the dispute. This should have a single key, equal to the provided reason, mapping to an appropriate evidence object.
                 */
                evidence?: IIssuingDisputeEvidence;
            }

            interface IIssuingDisputeListOptions {
                /**
                 * A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
                 */
                created?: ICreated;

                /**
                 * Only return issuing disputes for the given transaction.
                 */
                disputed_transaction?: string;

                /**
                 * A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
                 */
                ending_before?: string;

                /**
                 * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
                 */
                limit?: number;

                /**
                 * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.
                 */
                starting_after?: string;
            }
        }

        namespace transactions {
            /**
             * Any use of an issued card that results in funds entering or leaving your Stripe account, such as a completed purchase or refund, is represented by an Issuing Transaction object.
             */
            interface ITransaction extends IResourceObject {
                /**
                 * Unique identifier for the object.
                 */
                id: string;

                /**
                 * String representing the object’s type. Objects of the same type share the same value.
                 */
                object: 'issuing.transaction';

                amount: number;

                /**
                 * The Authorization object that led to this transaction.
                 */
                authorization: string | authorizations.IAuthorization;

                balance_transaction: string | balance.IBalanceTransaction;

                /**
                 * The card used to make this transaction.
                 */
                card: string | cards.IIssuingCard;

                /**
                 * The cardholder to whom this transaction belongs.
                 */
                cardholder: string | cardholders.ICardholder;

                /**
                 * Time at which the object was created. Measured in seconds since the Unix epoch.
                 */
                created: number;

                /**
                 * Three-letter ISO currency code, in lowercase. Must be a supported currency.
                 */
                currency: string;

                dispute: string | disputes.IIssuingDispute;

                /**
                 * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
                 */
                livemode: boolean;

                merchant_amount: number;

                merchant_currency: string;

                /**
                 * More information about the user involved in the transaction.
                 */
                merchant_data: authorizations.MerchantData;

                /**
                 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
                 */
                metadata: IMetadata;

                /**
                 * One of capture, refund, cash_withdrawal, refund_reversal, dispute, or dispute_loss.
                 */
                type: TransactionType;
            }

            type TransactionType = 'capture' | 'refund' | 'cash_withdrawal' | 'refund_reversal' | 'dispute' | 'dispute_loss';

            interface ITransactionUpdateOptions {
                metadata?: IOptionsMetadata;
            }

            interface ITransactionListOptions {
                /**
                 * Only return issuing transactions that belong to the given card.
                 */
                card?: string;

                /**
                 * Only return authorizations belonging to the given cardholder.
                 */
                cardholder?: string;

                /**
                 * A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
                 */
                created?: ICreated;

                /**
                 * Only return transactions that originate from a given dispute.
                 */
                dispute?: string;

                /**
                 * A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list.
                 */
                ending_before?: string;

                /**
                 * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
                 */
                limit?: number;

                /**
                 * Only return transactions that are associated with the given settlement.
                 */
                settlement?: string;

                /**
                 * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.
                 */
                starting_after?: string;
            }
        }
    }

    namespace orders {
        interface IOrder extends IResourceObject {
            /**
             * Value is "order"
             */
            object: 'order';

            /**
             * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal
             * currency) representing the total amount for the order.
             */
            amount: number;

            /**
             * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal
             * currency) representing the total amount returned for the order thus far.
             */
            amount_returned: number;

            /**
             * ID of the Connect Application that created the order.
             */
            application: string;

            application_fee: number;

            /**
             * The ID of the payment used to pay for the order. Present if the order status is paid, fulfilled, or refunded. [Expandable]
             */
            charge: string | charges.ICharge;

            created: number;

            /**
             * 3-letter ISO code representing the currency in which the order was made.
             */
            currency: string;

            /**
             * The customer used for the order. [Expandable]
             */
            customer: string | customers.ICustomer;

            /**
             * The email address of the customer placing the order.
             */
            email: string;

            external_coupon_code: string;

            /**
             * List of items constituting the order.
             */
            items: IOrderItem[];

            livemode: boolean;
            metadata: IMetadata;

            /**
             * The shipping method that is currently selected for this order, if any. If present, it is equal to one of the ids of shipping methods
             * in the shipping_methods array. At order creation time, if there are multiple shipping methods, Stripe will automatically selected
             * the first method.
             */
            selected_shipping_method: string;

            /**
             * The shipping address for the order. Present if the order is for goods to be shipped.
             */
            shipping: IShippingInformation;

            /**
             * A list of supported shipping methods for this order. The desired shipping method can be specified either by updating the order, or
             * when paying it.
             */
            shipping_methods: IShippingMethod[];

            status: OrderStatus;

            /**
             * The timestamps at which the order status was updated
             */
            status_transitions: {
                canceled: number;
                fulfiled: number;
                paid: number;
                returned: number;
            };

            updated: number;
        }

        interface IOrderItem extends IObject {
            /**
             * value is "order_item"
             */
            object: 'order_item';

            /**
             * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal currency)
             * representing the total amount for the line item.
             */
            amount: number;

            /**
             * 3-letter ISO code representing the currency of the line item.
             */
            currency: string;

            /**
             * Description of the line item, meant to be displayable to the user (e.g., "Express shipping").
             */
            description: string;

            /**
             * The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU). [Expandable]
             */
            parent: string | skus.ISku;

            /**
             * A positive integer representing the number of instances of parent that are included in this order item.
             * Applicable/present only if type is sku.
             */
            quantity: number;

            /**
             * The type of line item. One of "sku", "tax", "shipping", or "discount".
             */
            type: 'sku' | 'tax' | 'shipping' | 'discount';
        }

        interface IOrderCreationOptions extends IDataOptionsWithMetadata {
            /**
             * 3-letter ISO code representing the currency in which the order should be made. Stripe will validate that all entries in items match
             * the currency specified here.
             */
            currency: string;

            /**
             * A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
             */
            coupon?: string;

            /**
             * The ID of an existing customer to use for this order. If provided, the customer email and shipping address will be used to create
             * the order. Subsequently, the customer will also be charged to pay the order. If email or shipping are also provided, they will
             * override the values retrieved from the customer object.
             */
            customer?: string;

            /**
             * The email address of the customer placing the order.
             */
            email?: string;

            /**
             * List of items constituting the order.
             */
            items?: IOrderItemCreationHash[];

            /**
             * Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.
             */
            shipping?: IShippingInformation;
        }

        interface IOrderUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
             */
            coupon?: string;

            /**
             * The shipping method to select for fulfilling this order. If specified, must be one of the ids of a shipping method in the
             * shipping_methods array. If specified, will overwrite the existing selected shipping method, updating items as necessary.
             */
            selected_shipping_method?: string;

            status?: OrderStatus;
        }

        interface IOrderPayOptions extends IDataOptionsWithMetadata {
            /**
             * The ID of an existing customer that will be charged in this request.
             *
             * Either customer or source is required
             */
            customer?: string;

            /**
             * A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging
             * to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned
             * by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is
             * required, the extra info helps prevent fraud.
             *
             * Either source or customer is required
             */
            source?: string | cards.ICardSourceCreationOptions;

            /**
             * A fee in cents/pence that will be applied to the order and transferred to the application owner's Stripe account. To use an application
             * fee, the request must be made on behalf of another account, using the Stripe-Account header or OAuth key. For more information, see
             * the application fees documentation.
             */
            application_fee?: number;

            /**
             * The email address of the customer placing the order. If a customer is specified, that customer's email address will be used.
             *
             * Optional, but required if not previously specified.
             */
            email?: string;
        }

        interface IOrderListOptions extends IListOptionsCreated {
            /**
             * Only return orders for the given customer
             */
            customer?: string;

            /**
             * Only return orders with the given IDs
             */
            ids?: string[];

            /**
             * Only return orders that have the given status. One of "created", "paid", "fulfilled", or "refunded".
             */
            status: OrderStatus;

            /**
             * Filter orders based on when they were "paid", "fulfilled", "canceled", or "returned"
             */
            status_transitions?: {
                /**
                 * A filter on the list based on the object canceled field. The value can be a string with an integer Unix timestamp,
                 * or it can be a dictionary with the following options:
                 */
                canceled?: IDateFilter;

                /**
                 * A filter on the list based on the object fulfilled field. The value can be a string with an integer Unix timestamp,
                 * or it can be a dictionary with the following options:
                 */
                fulfilled?: IDateFilter;

                /**
                 * A filter on the list based on the object paid field. The value can be a string with an integer Unix timestamp,
                 * or it can be a dictionary with the following options:
                 */
                paid?: IDateFilter;

                /**
                 * A filter on the list based on the object returned field. The value can be a string with an integer Unix timestamp,
                 * or it can be a dictionary with the following options:
                 */
                returned?: IDateFilter;
            };
        }

        interface IOrderItemCreationHash {
            /**
             * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal currency)
             * representing the total amount for the line item.
             */
            amount?: number;

            /**
             * 3-letter ISO code representing the currency of the line item.
             */
            currency?: string;

            /**
             * Description of the line item, meant to be displayable to the user (e.g., "Express shipping").
             */
            description?: string;

            /**
             * The ID of the SKU being ordered.
             */
            parent: string;

            /**
             * The quantity of this order item. When type is sku, this is the number of instances of the SKU to be ordered.
             */
            quantity?: number;

            /**
             * The type of line item. One of "sku", "tax", "shipping", or "discount".
             */
            type?: 'sku' | 'tax' | 'shipping' | 'discount';
        }

        interface IShippingMethod {
            id: string;

            /**
             * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal currency)
             * representing the total amount for the line item.
             */
            amount: number;

            /**
             * 3-letter ISO code representing the currency of the line item.
             */
            currency: string;

            /**
             * The estimated delivery date for the given shipping method. Can be either a specific date or a range.
             */
            delivery_estimate: {
                /**
                 * If type is "exact", date will be the expected delivery date in the format YYYY-MM-DD
                 */
                date: string;

                /**
                 * If type is "range", earliest will be be the earliest delivery date in the format YYYY-MM-DD
                 */
                earliest: string;

                /**
                 * If type is "range", latest will be the latest delivery date in the format YYYY-MM-DD
                 */
                latest: string;

                /**
                 * The type of estimate. Must be either "range" or "exact"
                 */
                type: 'range' | 'exact';
            };

            /**
             * Description of the line item, meant to be displayable to the user (e.g., "Express shipping").
             */
            description: string;
        }

        /**
         * Current order status. One of created, paid, canceled, fulfilled, or returned. More detail in the Relay API Overview.
         */
        type OrderStatus = 'created' | 'paid' | 'canceled' | 'fulfilled' | 'returned';
    }

    namespace payouts {
        interface IPayout extends IResourceObject {
            /**
             * Value is "payout"
             */
            object: 'payout';

            /**
             * Amount (in cents) to be transferred to your bank account or debit card
             */
            amount: number;

            /**
             * Date the payout is expected to arrive in the bank. This factors in delays like weekends or bank holidays
             */
            arrival_date: number;

            /**
             * Returns true if the payout was created by an automated payout schedule, and false if it was requested manually.
             */
            automatic: boolean;

            /**
             * Balance transaction that describes the impact of this transfer on your account balance. [Expandable]
             */
            balance_transaction: string | balance.IBalanceTransaction;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch
             */
            created: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             * https://stripe.com/docs/currencies
             */
            currency: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users
             */
            description: string;

            /**
             * ID of the bank account or card the payout was sent to. [Expandable]
             */
            destination: string | bankAccounts.IBankAccount | cards.ICardHash;

            /**
             * If the payout failed or was canceled, this will be the ID of the balance
             * transaction that reversed the initial balance transaction, and puts the
             * funds from the failed payout back in your balance. [Expandable]
             */
            failure_balance_transaction: string | balance.IBalanceTransaction;

            /**
             * Error code explaining reason for payout failure if available. See Types of payout failures for a
             * list of failure codes: https://stripe.com/docs/api#payout_failures
             */
            failure_code: string;

            /**
             * Message to user further explaining reason for the payout failure if available
             */
            failure_message: string;

            /**
             * Flag indicating whether the object exists in live mode or test mode
             */
            livemode: boolean;

            /**
             * Set of key/value pairs that you can attach to an object. It can be useful for storing additional
             * information about the object in a structured format.
             */
            metadata: IMetadata;

            /**
             * The method used to send this payout, which can be standard or instant. instant is only supported
             * for payouts to debit cards.
             */
            method: PayoutMethods;

            /**
             * The source balance this payout came from.
             * One of card, bank_account, bitcoin_receiver, or alipay_account
             */
            source_type: 'alipay_account' | 'bank_account' | 'bitcoin_receiver' | 'card';

            /**
             * Extra information about a payout to be displayed on the user's bank statement
             */
            statement_descriptor: string;

            /**
             * Current status of the payout (paid, pending, in_transit, canceled or failed).
             * A payout will be pending until it is submitted to the bank, at which point it
             * becomes in_transit. It will then change to paid if the transaction goes through.
             * If it does not go through successfully, its status will change to failed or canceled.
             */
            status: 'canceled' | 'failed' | 'in_transit' | 'paid' | 'pending';

            /**
             * Can be bank_account or card.
             */
            type: PayoutTypes;
        }

        interface IPayoutCreationOptions extends IDataOptionsWithMetadata {
            /**
             * A positive integer in cents representing how much to payout.
             */
            amount: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             * https://stripe.com/docs/currencies
             */
            currency: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             * This can be unset by updating the value to null and then saving.
             */
            description?: string;

            /**
             * The ID of a bank account or a card to send the payout to. If no destination is supplied,
             * the default external account for the specified currency will be used.
             */
            destination?: string;

            /**
             * The method used to send this payout, which can be standard or instant.
             * instant is only supported for payouts to debit cards.
             */
            method?: PayoutMethods;

            /**
             * The source balance to draw this payout from. Balances for different payment sources are
             * kept separately. You can find the amounts with the balances API.
             * Valid options are: alipay_account, bank_account, and card.
             */
            source_type?: 'alipay_account' | 'bank_account' | 'card';

            /**
             * A string to be displayed on the recipient’s bank or card statement. This may be at most 22 characters.
             * Attempting to use a statement_descriptor longer than 22 characters will return an error.
             * Note: Most banks will truncate this information and/or display it inconsistently. Some may not display it at all.
             */
            statement_descriptor?: string;
        }

        interface IPayoutListOptions extends IListOptionsCreated {
            arrival_date?: string | IDateFilter;
            destination?: string;
            status?: 'canceled' | 'failed' | 'paid' | 'pending';
        }

        type PayoutMethods = 'instant' | 'standard';
        type PayoutTypes = 'bank_account' | 'card';
    }

    namespace paymentIntents {
        /**
         * Used in checkout session creation
         */
        interface IPaymentIntentSessionSubset {
            /**
             * The amount of the application fee (if any) that will be applied to the payment and transferred to the application owner’s Stripe account. To use an application fee, the request must be made on behalf of another account, using the `Stripe-Account` header or an OAuth key.
             */
            application_fee_amount?: number;

            /**
             * Capture method of this PaymentIntent, one of automatic or manual.
             */
            capture_method?: PaymentIntentDataCaptureMethodOptions;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users. This can be unset by updating the value to null and then saving.
             */
            description?: string | null;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: IMetadata;

            /**
             * The account (if any) for which the funds of the PaymentIntent are intended. Used with connected accounts.
             */
            on_behalf_of?: string;

            /**
             * Email address that the receipt for the resulting payment will be sent to.
             */
            receipt_email?: string;

            /**
             * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
             * If present, the payment method used with this PaymentIntent can be attached to a Customer, even after the transaction completes.
             * Use on_session if you intend to only reuse the payment method when your customer is present in your checkout flow. Use off_session if your customer may or may not be in your checkout flow. See Saving card details after a payment to learn more.
             * Stripe uses setup_future_usage to dynamically optimize your payment flow and comply with regional legislation and network rules. For example, if your customer is impacted by SCA, using off_session will ensure that they are authenticated while processing this PaymentIntent. You will then be able to collect off-session payments for this customer.
             */
            setup_future_usage?: PaymentIntendDataFutureUsageOptions;

            /**
             * Shipping information for this payment.
             */
            shipping?: IPaymentIntentDataShipping;

            /**
             * The data with which to automatically create a Transfer when the payment is finalized. Used with connected accounts.
             */
            transfer_data?: IPaymentIntentDataTransferDataOptions;
        }

        type PaymentIntentUserProvidedCancellationReason =
            | 'duplicate'
            | 'fraudulent'
            | 'requested_by_customer'
            | 'abandoned';
        type PaymentIntentStripeProvidedCancellationReason = 'failed_invoice' | 'void_invoice' | 'automatic';

        type PaymentIntentFutureUsageType = 'on_session' | 'off_session';

        interface IPaymentIntent extends IResourceObject {
            /**
             * Value is "payment_intent".
             */
            object: 'payment_intent';

            /**
             * The amount in cents that is to be collected from this PaymentIntent.
             */
            amount: number;

            /**
             * The amount that can be captured with from this PaymentIntent (in cents).
             */
            amount_capturable: number;

            /**
             * The amount that was collected from this PaymentIntent (in cents).
             */
            amount_received: number;

            /**
             * ID of the Connect application that created the PaymentIntent. [Expandable]
             */
            application?: string | applications.IApplication | null;

            /**
             * A fee in cents that will be applied to the invoice and transferred to the application owner's Stripe account.
             */
            application_fee_amount?: number | null;

            /**
             * Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled.
             * Measured in seconds since the Unix epoch.
             */
            canceled_at: number | null;

            /**
             * User-given reason for cancellation of this PaymentIntent.
             */
            cancellation_reason:
                | PaymentIntentUserProvidedCancellationReason
                | PaymentIntentStripeProvidedCancellationReason
                | null;

            /**
             * Capture method of this PaymentIntent.
             */
            capture_method: 'automatic' | 'manual';

            /**
             * Charges that were created by this PaymentIntent, if any.
             */
            charges: IList<charges.ICharge>;

            /**
             * The client secret of this PaymentIntent. Used for client-side retrieval using a publishable key. Please refer to dynamic authentication guide on how client_secret should be handled.
             */
            client_secret: string;

            /**
             * Confirmation method of this PaymentIntent.
             */
            confirmation_method: 'secret' | 'publishable';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency: string;

            /**
             * ID of the Customer this PaymentIntent is for if one exists. [Expandable]
             */
            customer: string | customers.ICustomer | null;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description?: string;

            /**
             * The payment error encountered in the previous PaymentIntent confirmation.
             */
            last_payment_error: IStripeError | null;

            livemode: boolean;

            metadata: IMetadata;

            /**
             * If present, this property tells you what actions you need to take in order for your customer to fulfill a payment using the provided source.
             */
            next_action: IPaymentIntentNextActionUseStripeSdk | IPaymentIntentNextActionRedirectToUrl;

            /**
             * The account (if any) for which the funds of the PaymentIntent are intended. See the PaymentIntents Connect usage guide for details. [Expandable]
             */
            on_behalf_of?: string | null;

            /**
             * ID of the payment method used in this PaymentIntent. [Expandable]
             */
            payment_method?: string | null;

            /**
             * Payment-method-specific configuration for this PaymentIntent.
             */
            payment_method_options?: IPaymentMethodOptions;

            /**
             * The list of payment method types (e.g. card) that this PaymentIntent is allowed to use.
             */
            payment_method_types: PaymentIntentPaymentMethodType[];

            /**
             * Email address that the receipt for the resulting payment will be sent to.
             */
            receipt_email: string | null;

            /**
             * ID of the review associated with this PaymentIntent, if any. [Expandable]
             */
            review?: string | reviews.IReview | null;

            /*
             * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
             */
            setup_future_usage: PaymentIntentFutureUsageType | null;

            /**
             * Shipping information for this PaymentIntent.
             */
            shipping?: IShippingInformation | null;

            /**
             * ID of the source used in this PaymentIntent. [Expandable]
             */
            source: string | IStripeSource | null;

            /**
             * Extra information about a PaymentIntent. This will appear on your customer’s statement when this PaymentIntent succeeds in creating a charge.
             */
            statement_descriptor: string | null;

            /**
             * The several states the PaymentIntent goes through until it it either canceled or succeeds.
             */
            status:
                | 'requires_payment_method'
                | 'requires_confirmation'
                | 'requires_action'
                | 'processing'
                | 'requires_capture'
                | 'canceled'
                | 'succeeded';

            /**
             * The data with which to automatically create a Transfer when the payment is finalized.
             */
            transfer_data: IPaymentIntentTransferData | null;

            /**
             * A string that identifies the resulting payment as part of a group.
             */
            transfer_group: string | null;
        }

        interface IPaymentIntentTransferData {
            /**
             * The account (if any) the payment will be attributed to for tax reporting, and where funds from the payment will be transferred to upon payment success. [Expandable]
             */
            destination: string | bankAccounts.IBankAccount | cards.ICardHash | accounts.IAccountCreationOptions;

            /**
             * The amount that will be transferred automatically when a charge succeeds. The amount is capped at the total transaction amount and if no amount is set, the full amount is transferred.
             * If you intend to collect a fee and you need a more robust reporting experience, using application_fee_amount might be a better fit for your integration.
             */
            amount?: number;
        }

        interface IPaymentIntentNextActionRedirectToUrl {
            type: 'redirect_to_url';
            /**
             * Contains instructions for authenticating a payment by redirecting your customer to another page or application.
             */
            redirect_to_url: { return_url: string; url: string };
        }

        interface IPaymentIntentNextActionUseStripeSdk {
            type: 'use_stripe_sdk';
            /**
             * When confirming a PaymentIntent with js, js depends on the contents of this object to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by js.
             */
            use_stripe_sdk: any;
        }

        /** Payment methods supported by Payment Intents. This is a subsetset of all Payment Method types. See https://stripe.com/docs/api/payment_methods/create#create_payment_method-type */
        type PaymentIntentPaymentMethodType = 'card' | 'ideal' | 'sepa_debit';

        interface IPaymentMethodCardOptions {
            /**
             * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and other requirements. However, if you wish to request 3D Secure based on
             * logic from your own fraud engine, provide this option. Permitted values include: automatic, any, or challenge_only. If not provided, defaults to automatic.
             */
            request_three_d_secure?: 'automatic' | 'challenge_only' | 'any';
        }

        interface IPaymentMethodOptions {
            /**
             * Configuration for any card payments attempted on this PaymentIntent.
             */
            card?: IPaymentMethodCardOptions;
        }

        interface IPaymentIntentCreationOptions extends IPaymentIntentUpdateOptions {
            /**
             * Capture method of this PaymentIntent.
             */
            capture_method?: 'automatic' | 'manual';

            /**
             * Attempt to confirm this PaymentIntent immediately. If the payment method attached is a card, a return_url must be provided in case additional authentication is required.
             */
            confirm?: boolean;

            /**
             * Whether to use the publishable key automatic method, or the secret key manual method
             */
            confirmation_method?: 'automatic' | 'manual';

            /**
             * Set to true to indicate that the customer is not in your checkout flow during this payment attempt, and therefore is unable to authenticate. This parameter is intended for scenarios where you collect card details and charge them later.
             */
            off_session?: boolean;

            /**
             * The Stripe account ID for which these funds are intended.
             */
            on_behalf_of?: string;

            /**
             * Payment-method-specific configuration for this PaymentIntent.
             */
            payment_method_options?: IPaymentMethodOptions;

            /**
             * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method’s app or site. If you’d prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This param can only be used if `confirm=true`.
             */
            return_url?: string;

            /**
             * Shipping information for this PaymentIntent.
             */
            shipping?: IShippingInformation;

            /**
             * The parameters used to automatically create a Transfer when the payment succeeds.
             */
            transfer_data?: IPaymentIntentTransferData;
        }

        interface IPaymentIntentUpdateOptions {
            /**
             * Amount intended to be collected by this PaymentIntent (in cents).
             */
            amount?: number;

            /**
             * The amount of the application fee in cents (if any) that will be applied to the payment and transferred to the application owner’s Stripe account. To use an application fee, the request must be made on behalf of another account, using the `Stripe-Account` header or an OAuth key.
             */
            application_fee_amount?: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency?: string;

            /**
             * ID of the customer this PaymentIntent is for if one exists.
             */
            customer?: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users. This can be unset by updating the value to null and then saving.
             */
            description?: string | null;

            /**
             * A set of key/value pairs that you can attach to an object. It can be
             * useful for storing additional information about the object in a structured
             * format. You can unset an individual key by setting its value to null and
             * then saving. To clear all keys, set metadata to null, then save.
             */
            metadata?: IOptionsMetadata;

            /**
             * ID of the payment method (a PaymentMethod, Card, BankAccount, or saved Source object) to attach to this PaymentIntent.
             */
            payment_method?: string;

            /**
             * The list of payment method types that this PaymentIntent is allowed to use.
             */
            payment_method_types?: PaymentIntentPaymentMethodType[];

            /**
             * Email address that the receipt for the resulting payment will be sent to.
             */
            receipt_email?: string;

            /**
             * Set to `true` to save this PaymentIntent’s payment method to the associated Customer, if the payment method is not already attached. This parameter only applies to the payment method passed in the same request or the current payment method attached to the PaymentIntent and must be specified again if a new payment method is added.
             */
            save_payment_method?: boolean;

            /**
             * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
             */
            setup_future_usage?: PaymentIntentFutureUsageType;

            /**
             * Shipping information for this PaymentIntent.
             */
            shipping?: IShippingInformation;

            /**
             * Extra information about a PaymentIntent. This will appear on your customer’s statement when this PaymentIntent succeeds in creating a charge.
             */
            statement_descriptor?: string;

            /**
             * Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor.
             */
            statement_descriptor_suffix?: string;

            /**
             * The parameters used to automatically create a Transfer when the payment succeeds.
             */
            transfer_data?: {
                /**
                 * The amount that will be transferred automatically when a charge succeeds. The amount is capped at the total transaction amount and if no amount is set, the full amount is transferred.
                 * If you intend to collect a fee and you need a more robust reporting experience, using application_fee_amount might be a better fit for your integration.
                 */
                amount?: number;
            };

            /**
             * A string that identifies the resulting payment as part of a group.
             */
            transfer_group?: string;
        }

        interface IPaymentIntentConfirmOptions {
            /**
             * The client secret of this PaymentIntent. Used for client-side retrieval using a publishable key. Please refer to dynamic authentication guide on how client_secret should be handled. Required if using Publishable Key!
             */
            client_secret?: string;

            /**
             * Set to true to indicate that the customer is not in your checkout flow during this payment attempt, and therefore is unable to authenticate. This parameter is intended for scenarios where you collect card details and charge them later.
             */
            off_session?: boolean;

            /**
             * ID of the payment method (a PaymentMethod, Card, BankAccount, or saved Source object) to attach to this PaymentIntent.
             */
            payment_method?: string;

            /**
             * Payment-method-specific configuration for this PaymentIntent.
             */
            payment_method_options?: IPaymentMethodOptions;

            /**
             * The list of payment method types that this PaymentIntent is allowed to use.
             */
            payment_method_types?: PaymentIntentPaymentMethodType[];

            /**
             * Email address that the receipt for the resulting payment will be sent to.
             */
            receipt_email?: string | null;

            /**
             * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method’s app or site. If you’d prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter is only used for cards and other redirect-based payment methods.
             */
            return_url?: string;

            /**
             * Set to `true` to save this PaymentIntent’s payment method to the associated Customer, if the payment method is not already attached. This parameter only applies to the payment method passed in the same request or the current payment method attached to the PaymentIntent and must be specified again if a new payment method is added.
             */
            save_payment_method?: boolean;

            /*
             * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
             */
            setup_future_usage?: PaymentIntentFutureUsageType;

            /**
             * Shipping information for this PaymentIntent.
             */
            shipping?: IShippingInformation | null;
        }

        interface IPaymentIntentRetrieveOptions {
            /**
             * The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.
             *
             * REQUIRED IF USING PUBLISHABLE KEY!
             */
            client_secret: string;
        }

        interface IPaymentIntentDataTransferDataOptions {
            /**
             * A positive integer representing how much to charge in the smallest currency unit.
             */
            amount?: number;

            /**
             * The account (if any) the payment will be attributed to for tax reporting, and where funds from the payment will be transferred to upon payment success.
             */
            destination?: string;
        }

        interface IPaymentIntentDataShipping {
            /**
             * Shipping address.
             */
            address: IAddress;

            /**
             * Recipient name. This can be unset by updating the value to null and then saving.
             */
            name: string | null;

            /**
             * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. This can be unset by updating the value to null and then saving.
             */
            carrier?: string | null;

            /**
             * Recipient phone (including extension). This can be unset by updating the value to null and then saving.
             */
            phone?: string | null;

            /**
             * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas. This can be unset by updating the value to null and then saving.
             */
            tracking_number?: string | null;
        }

        type PaymentIntentDataCaptureMethodOptions = 'automatic' | 'manual';

        type PaymentIntendDataFutureUsageOptions = 'on_session' | 'off_session';

        interface IPaymentIntentData {
            /**
             * The amount of the application fee (if any) that will be applied to the payment and transferred to the application owner’s Stripe account. To use an application fee, the request must be made on behalf of another account, using the `Stripe-Account` header or an OAuth key.
             */
            application_fee_amount?: number;

            /**
             * Capture method of this PaymentIntent, one of automatic or manual.
             */
            capture_method?: PaymentIntentDataCaptureMethodOptions;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users. This can be unset by updating the value to null and then saving.
             */
            description?: string | null;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: IMetadata;

            /**
             * The account (if any) for which the funds of the PaymentIntent are intended. Used with connected accounts.
             */
            on_behalf_of?: string;

            /**
             * Email address that the receipt for the resulting payment will be sent to.
             */
            receipt_email?: string;

            /**
             * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
             * If present, the payment method used with this PaymentIntent can be attached to a Customer, even after the transaction completes.
             * Use on_session if you intend to only reuse the payment method when your customer is present in your checkout flow. Use off_session if your customer may or may not be in your checkout flow. See Saving card details after a payment to learn more.
             * Stripe uses setup_future_usage to dynamically optimize your payment flow and comply with regional legislation and network rules. For example, if your customer is impacted by SCA, using off_session will ensure that they are authenticated while processing this PaymentIntent. You will then be able to collect off-session payments for this customer.
             */
            setup_future_usage?: PaymentIntendDataFutureUsageOptions;

            /**
             * Shipping information for this payment.
             */
            shipping?: IPaymentIntentDataShipping;

            /**
             * The data with which to automatically create a Transfer when the payment is finalized. Used with connected accounts.
             */
            transfer_data?: IPaymentIntentDataTransferDataOptions;
        }

        interface IPaymentIntentCaptureOptions {
            /**
             * The amount to capture (in cents) from the PaymentIntent, which must be less than or equal to the original amount. Any additional amount will be automatically refunded. Defaults to the full `amount_capturable` if not provided.
             */
            amount_to_capture?: number;

            /**
             * The amount of the application fee (if any) that will be applied to the payment and transferred to the application owner’s Stripe account. To use an application fee, the request must be made on behalf of another account, using the `Stripe-Account` header or an OAuth key.
             */
            application_fee_amount?: number;

            /**
             * The account (if any) for which the funds of the PaymentIntent are intended. Used with connected accounts.
             */
            on_behalf_of?: string;

            /**
             * The data with which to automatically create a Transfer when the payment is finalized. Used with connected accounts.
             */
            transfer_data?: setupIntents.ISetupIntentTransferData;
        }

        interface IPaymentIntentListOptions extends IListOptionsCreated {
            /**
             * Only return PaymentIntents for the customer specified by this customer ID.
             */
            customer?: string;
        }
    }

    namespace setupIntents {
        type SetupIntentCancelationReason = 'abandoned' | 'requested_by_customer' | 'duplicate';

        type SetupIntentUsageType = 'on_session' | 'off_session';

        interface ISetupIntentPaymentMethodOptions {
            /**
             * Configuration for any card payments attempted on this SetupIntent.
             */
            card?: {
                /**
                 * We strongly recommend that you rely on our SCA Engine to automatically prompt your
                 * customers for authentication based on risk level and other requirements. However,
                 * if you wish to request 3D Secure based on logic from your own fraud engine, provide
                 * this option. Permitted values include: `automatic` or `any`. If not provided, defaults
                 * to `automatic`. Read our guide on manually requesting 3D Secure for more information
                 * on how this configuration interacts with Radar and our SCA Engine.
                 */
                request_three_d_secure?: 'automatic' | 'any';
            };
        }

        /** Payment methods supported by Payment Intents. This is a subsetset of all Payment Method types. See https://stripe.com/docs/api/payment_methods/create#create_payment_method-type */
        type SetupIntentPaymentMethodType = paymentIntents.PaymentIntentPaymentMethodType;

        interface ISetupIntent extends IResourceObject {
            /**
             * Value is "setup_intent".
             */
            object: 'setup_intent';

            /**
             * ID of the Connect application that created the SetupIntent. [Expandable]
             */
            application?: string | applications.IApplication | null;

            /**
             * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
             */
            cancelation_reason: SetupIntentCancelationReason | null;

            /**
             * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.
             *
             * The client secret can be used to complete payment setup from your frontend. It should not
             * be stored, logged, embedded in URLs, or exposed to anyone other than the customer. Make
             * sure that you have TLS enabled on any page that includes the client secret.
             */
            client_secret: string;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * ID of the Customer this SetupIntent is for if one exists. [Expandable]
             */
            customer: string | customers.ICustomer | null;

            /**
             * An arbitrary string attached to the object.
             *
             * If present, payment methods used with this SetupIntent can only be attached to
             * this Customer, and payment methods attached to other Customers cannot be used with
             * this SetupIntent.
             */
            description?: string;

            /**
             * The error encountered in the previous SetupIntent confirmation.
             */
            last_setup_error: IStripeError | null;

            livemode: boolean;

            metadata: IMetadata;

            /**
             * If present, this property tells you what actions you need to take in order for your customer to continue payment setup.
             */
            next_action: ISetupIntentNextActionUseStripeSdk | ISetupIntentNextActionRedirectToUrl;

            /**
             * The account (if any) for which the setup is intended. [Expandable]
             */
            on_behalf_of?: string | null;

            /**
             * ID of the payment method used in this SetupIntent. [Expandable]
             */
            payment_method?: string | null;

            /**
             * Payment-method-specific configuration for this SetupIntent.
             */
            payment_method_options?: ISetupIntentPaymentMethodOptions;

            /**
             * The list of payment method types (e.g. card) that this SetupIntent is allowed to use.
             */
            payment_method_types: SetupIntentPaymentMethodType[];

            /**
             * The several states the SetupIntent goes through until it it either canceled or succeeds.
             */
            status:
                | 'requires_payment_method'
                | 'requires_confirmation'
                | 'requires_action'
                | 'processing'
                | 'canceled'
                | 'succeeded';

            /**
             * Indicates how the payment method is intended to be used in the future.
             *
             * Use `on_session` if you intend to only reuse the payment method when the customer is in
             * your checkout flow. Use `off_session` if your customer may or may not be in your checkout
             * flow. If not provided, this value defaults to `off_session`.
             */
            usage: SetupIntentUsageType;
        }

        interface ISetupIntentTransferData {
            /**
             * The account (if any) the payment will be attributed to for tax reporting, and where funds from the payment will be transferred to upon payment success. [Expandable]
             */
            destination: string | bankAccounts.IBankAccount | cards.ICardHash | accounts.IAccountCreationOptions;
        }

        interface ISetupIntentNextActionRedirectToUrl {
            type: 'redirect_to_url';

            /**
             * Contains instructions for authenticating a payment by redirecting your customer to another page or application.
             */
            redirect_to_url: { return_url: string; url: string };
        }

        interface ISetupIntentNextActionUseStripeSdk {
            type: 'use_stripe_sdk';

            /**
             * When confirming a SetupIntent with js, js depends on the contents of this object to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by js.
             */
            use_stripe_sdk: any;
        }

        interface ISetupIntentCreationOptions {
            /**
             * Set to `true` to attempt to confirm this SetupIntent immediately. This parameter defaults
             * to `false`. If the payment method attached is a card, a return_url may be provided in case
             * additional authentication is required.
             */
            confirm?: boolean;

            /**
             * ID of the Customer this SetupIntent belongs to, if one exists.
             *
             * If present, payment methods used with this SetupIntent can only be attached to this
             * Customer, and payment methods attached to other Customers cannot be used with this
             * SetupIntent.
             */
            customer?: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             * This can be unset by updating the value to `null` and then saving.
             */
            description?: string | null;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing
             * additional information about the object in a structured format.
             */
            metadata?: IOptionsMetadata;

            /**
             * The Stripe account ID for which this SetupIntent is created.
             */
            on_behalf_of?: string;

            /**
             * ID of the payment method (a PaymentMethod, Card, BankAccount, or saved Source object)
             * to attach to this SetupIntent.
             */
            payment_method?: string;

            /**
             * Payment-method-specific configuration for this SetupIntent.
             */
            payment_method_options?: ISetupIntentPaymentMethodOptions;

            /**
             * The list of payment method types (e.g. card) that this SetupIntent is allowed to use.
             */
            payment_method_types?: SetupIntentPaymentMethodType[];

            /**
             * The URL to redirect your customer back to after they authenticate or cancel their payment on
             * the payment method’s app or site. If you’d prefer to redirect to a mobile application, you
             * can alternatively supply an application URI scheme. This parameter can only be used with
             * `confirm=true`.
             */
            return_url?: string;

            /**
             * Indicates how the payment method is intended to be used in the future.
             *
             * Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
             */
            usage?: SetupIntentUsageType;
        }

        interface ISetupIntentUpdateOptions {
            /**
             * ID of the customer this SetupIntent is for if one exists.
             */
            customer?: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             * This can be unset by updating the value to `null` and then saving.
             */
            description?: string | null;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing
             * additional information about the object in a structured format.
             */
            metadata?: IOptionsMetadata;

            /**
             * ID of the payment method (a PaymentMethod, Card, BankAccount, or saved Source object)
             * to attach to this SetupIntent.
             */
            payment_method?: string;

            /**
             * The list of payment method types (e.g. card) that this SetupIntent is allowed to use.
             */
            payment_method_types?: SetupIntentPaymentMethodType[];
        }

        interface ISetupIntentConfirmOptions {
            /**
             * The client secret of this SetupIntent. Used for client-side confirmation using a publishable key. Please refer to dynamic authentication guide on how client_secret should be handled.
             */
            client_secret?: string;

            /**
             * ID of the payment method (a PaymentMethod, Card, BankAccount, or saved Source object)
             * to attach to this SetupIntent.
             */
            payment_method?: string;

            /**
             * Payment-method-specific configuration for this SetupIntent.
             */
            payment_method_options?: ISetupIntentPaymentMethodOptions;

            /**
             * The URL to redirect your customer back to after they authenticate on the payment method’s
             * app or site. If you’d prefer to redirect to a mobile application, you can alternatively
             * supply an application URI scheme. This parameter is only used for cards and other
             * redirect-based payment methods.
             */
            return_url?: string;
        }

        interface ISetupIntentRetrieveOptions {
            /**
             * The client secret of the SetupIntent. Required if a publishable key is used to retrieve
             * the SetupIntent. REQUIRED IF USING PUBLISHABLE KEY
             */
            client_secret?: string;
        }

        interface ISetupIntentListOptions extends IListOptionsCreated {
            /**
             * Only return SetupIntents for the customer specified by this customer ID.
             */
            customer?: string;

            /**
             * Only return SetupIntents associated with the specified payment method.
             */
            payment_method?: string;
        }

        interface ISetupIntentSessionSubset {
            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description?: string;
            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: IMetadata;
            /**
             * The Stripe account for which the setup is intended.
             */
            on_behalf_of?: string;
        }
    }

    namespace taxRates {
        interface ITaxAmount {
            /**
             * The amount, in cents, of the tax.
             */
            amount: number;
            /**
             * Whether this tax amount is inclusive or exclusive.
             */
            inclusive: boolean;
            /**
             * The tax rate that was applied to get this tax amount.
             */
            tax_rate: string | ITaxRate;
        }
        /**
         * Tax rates can be applied to invoices and subscriptions to collect tax.
         */
        interface ITaxRate extends IResourceObject {
            /**
             * String representing the object’s type. Objects of the same type share the same value.
             */
            object: 'tax_rate';

            /**
             * Defaults to true. When set to false, this tax rate cannot be applied to objects in the API, but will still be applied to subscriptions and invoices that already have it set.
             */
            active: boolean;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number | null;

            /**
             * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
             */
            description: string | null;

            /**
             * The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
             */
            display_name: string | null;

            /**
             * This specifies if the tax rate is inclusive or exclusive.
             */
            inclusive: boolean;

            /**
             * The jurisdiction for the tax rate.
             */
            jurisdiction: string | null;

            /**
             * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata: IMetadata;

            /**
             * This represents the tax rate percent out of 100.
             */
            percentage: number | null;
        }

        interface ITaxRateCreationOptions {
            /**
             * The display name of the tax rate, which will be shown to users.
             */
            display_name: string;

            /**
             * This specifies if the tax rate is inclusive or exclusive.
             */
            inclusive: boolean;

            /**
             * This represents the tax rate percent out of 100.
             */
            percentage: number;

            /**
             * Flag determining whether the tax rate is active or inactive. Inactive tax rates continue to work where they are currently applied however they cannot be used for new applications.
             */
            active?: boolean;

            /**
             * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
             */
            description?: string;

            /**
             * The jurisdiction for the tax rate.
             */
            jurisdiction?: string;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             * Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata.
             */
            metadata?: IOptionsMetadata;
        }

        interface ITaxRateUpdateOptions {
            /**
             * Flag determining whether the tax rate is active or inactive. Inactive tax rates continue to work where they are currently applied however they cannot be used for new applications.
             */
            active?: boolean;

            /**
             * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
             */
            description?: string;

            /**
             * The display name of the tax rate, which will be shown to users.
             */
            display_name?: string;

            /**
             * The jurisdiction for the tax rate.
             */
            jurisdiction?: string;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             * Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata.
             */
            metadata?: IOptionsMetadata;
        }

        interface ItaxRateSearchOptions extends IListOptions {
            /**
             * Optional flag to filter by tax rates that are either active or not active (archived)
             */
            active?: boolean;

            /**
             * A filter on the list based on the object created field.
             */
            created?: string | IDateFilter;

            /**
             * A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make
             * a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in
             * order to fetch the previous page of the list.
             */
            inclusive?: boolean;

            /**
             * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
             */
            limit: number;

            /**
             * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.
             */
            starting_after?: string;
        }
    }
    namespace paymentMethods {
        interface WalletAddress {
            /** City/District/Suburb/Town/Village. */
            city: string;
            /** 2-letter country code. */
            country: string;
            /** Address line 1 (Street address/PO Box/Company name). */
            line1: string;
            /** Address line 2 (Apartment/Suite/Unit/Building). */
            line2: string;
            /** ZIP or postal code. */
            postal_code: string;
            /** State/County/Province/Region. */
            state: string;
        }

        interface WalletData {
            /**
             * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            billing_address: WalletAddress;

            /**
             * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            email: string;

            /**
             * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            name: string;

            /**
             * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
             */
            shipping_address: WalletAddress;
        }

        interface TokenizedWallet {
            /** (For tokenized numbers only.) The last four digits of the device account number. */
            dynamic_last4?: string;
        }

        interface MasterpassWallet {
            type: 'masterpass';
            masterpass: WalletData;
        }

        interface VisaCheckoutWallet {
            type: 'visa_checkout';
            visa_checkout: WalletData;
        }

        // There are currently no child attributes for these wallet types in the documentation. See https://stripe.com/docs/api/payment_methods/object#payment_method_object-card-wallet.
        interface AmericanExpressWallet {
            type: 'amex_express_checkout';
            amex_express_checkout: {};
        }

        interface ApplePayWallet extends TokenizedWallet {
            type: 'apple_pay';
            apple_pay: {};
        }

        interface GooglePayWallet extends TokenizedWallet {
            type: 'google_pay';
            google_pay: {};
        }

        interface SamsungPayWallet extends TokenizedWallet {
            type: 'samsung_pay';
            samsung_pay: {};
        }

        type CardWallet =
            | MasterpassWallet
            | VisaCheckoutWallet
            | AmericanExpressWallet
            | ApplePayWallet
            | GooglePayWallet
            | SamsungPayWallet;

        type CardWalletType = CardWallet['type'];

        type CardBrand = 'amex' | 'diners' | 'discover' | 'jcb' | 'mastercard' | 'unionpay' | 'visa' | 'unknown';

        interface CardChecks {
            /**
             * If a address line1 was provided, results of the check, one of `pass`, `failed`, `unavailable` or `unchecked`.
             */
            address_line1_check: 'pass' | 'failed' | 'unavailable' | 'unchecked' | null;

            /**
             * If a address postal code was provided, results of the check, one of `pass`, `failed`, `unavailable` or `unchecked`.
             */
            address_postal_code_check: 'pass' | 'failed' | 'unavailable' | 'unchecked' | null;

            /**
             * If a CVC was provided, results of the check, one of `pass`, `failed`, `unavailable` or `unchecked`.
             */
            cvc_check: 'pass' | 'failed' | 'unavailable' | 'unchecked' | null;
        }

        interface IBasePaymentMethod extends IResourceObject {
            object: 'payment_method';

            /** Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods. */
            billing_details: null | {
                address: IAddress | null;
                email: string | null;
                name: string | null;
                /** Billing phone number (including extension). */
                phone: string | null;
            };

            /** Time at which the object was created. Measured in seconds since the Unix epoch. */
            created: number;

            /** The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer. [Expandable] */
            customer: string | customers.ICustomer | null;

            /** Has the value true if the object exists in live mode or the value false if the object exists in test mode. */
            livemode: boolean;

            /** Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
            metadata: IMetadata;
        }

        interface ICardPaymentMethod extends IBasePaymentMethod {
            type: 'card';
            card: {
                /** Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
                brand: CardBrand;

                /** Check results by Card networks on Card address and CVC at time of payment. */
                checks: CardChecks;

                /**
                 * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of
                 * the international breakdown of cards you’ve collected.
                 */
                country: string;

                /** Two-digit number representing the card’s expiration month. */
                exp_month: number;

                /** Four-digit number representing the card’s expiration year. */
                exp_year: number;

                /**
                 * Uniquely identifies this particular card number. You can use this attribute to check whether two
                 * customers who’ve signed up with you are using the same card number, for example.
                 */
                fingerprint: string;

                /** Card funding type. Can be credit, debit, prepaid, or unknown. */
                funding: 'credit' | 'debit' | 'prepaid' | 'unknown';

                /** Details of the original PaymentMethod that created this object. */
                generated_from: null | {
                    /** The charge that created this object. */
                    charge: string;

                    /** Transaction-specific details of the payment method used in the payment. */
                    payment_method_details: charges.IPaymentMethodDetails;
                };

                /** The last four digits of the card. */
                last4: string;

                /** Contains details on how this Card may be be used for 3D Secure authentication. */
                three_d_secure_usage: {
                    /** Whether 3D Secure is supported on this card. */
                    supported: boolean;
                };

                /** If this Card is part of a card wallet, this contains the details of the card wallet. */
                wallet: null | CardWallet;
            };
        }

        interface ICardPresentPaymentMethod extends IBasePaymentMethod {
            type: 'card_present';
            card_present: {};
        }

        type IPaymentMethod = ICardPaymentMethod | ICardPresentPaymentMethod;

        type IPaymentMethodType = IPaymentMethod['type'];

        interface IPaymentMethodCreationOptions {
            /**
             * The type of the PaymentMethod, one of: card and card_present. An additional hash is included on the PaymentMethod with a name matching this value.
             * It contains additional information specific to the PaymentMethod type.
             */
            type: IPaymentMethodType;

            /** Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods. */
            billing_details?: {
                address?: IAddress;
                email?: string;
                name?: string;
                phone?: string;
            };

            /**
             * If this is a card PaymentMethod, this hash contains the user’s card details. For backwards compatibility, you can alternatively provide a Stripe token (e.g., for Apple Pay,
             * Amex Express Checkout, or legacy Checkout) into the card hash with format card: {token: "tok_visa"}. When creating with a card number, you must meet the requirements for
             * PCI compliance. We strongly recommend using Stripe.js instead of interacting with this API directly.
             */
            card?:
                | {
                      exp_month: number;
                      exp_year: number;
                      number: string;
                      cvc?: string;
                  }
                | {
                      token: string;
                  };

            /** Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
            metadata?: IMetadata;
        }

        interface IPaymentMethodUpdateOptions {
            /** Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods. */
            billing_details?: {
                address?: IAddress;
                email?: string;
                name?: string;
                phone?: string;
            };
            card?: {
                exp_month?: number;
                exp_year?: number;
            };
            /** Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
            metadata?: IMetadata;
        }

        interface IPaymentMethodListOptions<T extends IPaymentMethodType = IPaymentMethodType> extends IListOptions {
            /** The ID of the customer whose PaymentMethods will be retrieved. */
            customer: string;

            /** A required filter on the list, based on the object type field. */
            type: T;
        }

        interface IPaymentMethodAttachOptions {
            /** The ID of the customer to which to attach the PaymentMethod. */
            customer: string;
        }
    }

    namespace plans {
        interface ITier {
            /**
             * Up to and including to this quantity will be contained in the tier.
             */
            up_to: number | null | 'inf';

            /**
             * Price for the entire tier.
             */
            flat_amount?: number | null;

            /**
             * Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
             */
            flat_amount_decimal?: number | null;

            /**
             * Per unit price for units relevant to the tier.
             */
            unit_amount?: number | null;

            /**
             * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
             */
            unit_amount_decimal?: number | null;
        }

        interface ITransformUsage {
            /**
             * Divide usage by this number.
             */
            divide_by: number;

            /**
             * After division, either round the result `up` or `down`.
             */
            round: 'up' | 'down';
        }

        /**
         * A subscription plan contains the pricing information for different products and feature levels on your site.
         * For example, you might have a $10/month plan for basic features and a different $20/month plan for premium features.
         */
        interface IPlan extends IResourceObject {
            /**
             * Value is "plan"
             */
            object: 'plan';

            /**
             * Whether the plan is currently available for new subscriptions.
             */
            active: boolean;

            /**
             * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for picking the last usage record reported within a period, `last_ever` for picking the last usage record ever (across period bounds) or `max` which picks the usage record with the maximum reported usage during a period. Defaults to `sum`.
             */
            aggregate_usage: 'sum' | 'last_during_period' | 'last_ever' | 'max' | null;

            /**
             * The amount in cents to be charged on the interval specified
             */
            amount: number | null;

            /**
             * Same as `amount`, but contains a decimal value with at most 12 decimal places.
             */
            amount_decimal: string | null;

            /**
             * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
             */
            billing_scheme: 'per_unit' | 'tiered';

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency: string;

            /**
             * One of `day`, `week`, `month` or `year`. The frequency with which a subscription should be billed.
             */
            interval: IntervalUnit;

            /**
             * The number of intervals (specified in the `interval` property) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
             */
            interval_count: number;

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata: IMetadata;

            /**
             * A brief description of the plan, hidden from customers.
             */
            nickname: string | null;

            /**
             * The product whose pricing this plan determines. [Expandable]
             */
            product?: string | products.IProduct;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers: ITier[] | null;

            /**
             * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
             */
            tiers_mode: 'graduated' | 'volume' | null;

            /**
             * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
             */
            transform_usage: ITransformUsage | null;

            /**
             * Default number of trial days when subscribing a customer to this plan using `trial_from_plan=true`.
             */
            trial_period_days: number | null;

            /**
             * Configures how the quantity per period should be determined, can be either `metered` or `licensed`. `licensed` will automatically bill the `quantity` set for a plan when adding it to a subscription, `metered` will aggregate the total usage based on usage records. Defaults to `licensed`.
             */
            usage_type: 'metered' | 'licensed';
        }

        interface IPlanCreationOptions extends IDataOptionsWithMetadata {
            /**
             * An identifier randomly generated by Stripe. Used to identify this plan when subscribing a customer. You can optionally override this
             * ID, but the ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test
             * modes.
             */
            id?: string;

            /**
             * 3-letter ISO code for currency.
             */
            currency: string;

            /**
             * Specifies billing frequency. Either "day", "week", "month" or "year".
             */
            interval: IntervalUnit;

            /**
             * The product whose pricing the created plan will represent. This can either be the ID of an existing product, or a dictionary containing
             * fields used to create a service product.
             */
            product: string | IPlanCreationOptionsProductHash;

            /**
             * Whether the plan is currently available for new subscriptions. Defaults to `true`.
             */
            active?: boolean;

            /**
             * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for picking the last usage record reported within a period, `last_ever` for picking the last usage record ever (across period bounds) or `max` which picks the usage record with the maximum reported usage during a period. Defaults to `sum`.
             */
            aggregate_usage?: 'sum' | 'last_during_period' | 'last_ever' | 'max';

            /**
             * A positive integer in cents (or 0 for a free plan) representing how much to charge on a recurring basis.
             */
            amount?: number;

            /**
             * Same as `amount`, but accepts a decimal value with at most 12 decimal places. Only one of `amount` and `amount_decimal` can be set.
             */
            amount_decimal?: number;

            /**
             * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
             */
            billing_scheme?: 'per_unit' | 'tiered';

            /**
             * The number of intervals between each subscription billing. For example, interval=month and interval_count=3 bills every 3 months.
             * Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
             */
            interval_count?: number;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: IMetadata;

            /**
             * A brief description of the plan, hidden from customers.
             */
            nickname?: string;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: ITier[];

            /**
             * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
             */
            tiers_mode?: 'graduated' | 'volume';

            /**
             * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
             */
            transform_usage?: ITransformUsage;

            /**
             * Default number of trial days when subscribing a customer to this plan using `trial_from_plan=true`.
             */
            trial_period_days?: number;

            /**
             * Configures how the quantity per period should be determined, can be either `metered` or `licensed`. `licensed` will automatically bill the `quantity` set for a plan when adding it to a subscription, `metered` will aggregate the total usage based on usage records. Defaults to `licensed`.
             */
            usage_type?: 'metered' | 'licensed';
        }

        interface IPlanUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * A brief description of the plan, hidden from customers. This can be unset by updating the value to null and then saving.
             */
            nickname?: string;

            /**
             * The product the plan belongs to. Note that after updating, statement descriptors and line items of the plan in active subscriptions will
             * be affected.
             */
            product?: string;

            /**
             * Whether the plan is currently available for new subscriptions.
             */
            active?: boolean;

            /**
             * Default number of trial days when subscribing a customer to this plan using `trial_from_plan=true`.
             */
            trial_period_days?: number;
        }

        interface IPlanCreationOptionsProductHash {
            /**
             * The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.
             */
            id?: string;

            /**
             * The product’s name, meant to be displayable to the customer.
             */
            name: string;

            /**
             * Set of key/value pairs that you can attach to an object. It can be useful for storing additional information about the object in a structured
             * format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata.
             */
            metadata?: IOptionsMetadata;

            /**
             * An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. The statement description may not
             * include <>”’ characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While
             * most banks display this information consistently, some may display it incorrectly or not at all.
             */
            statement_descriptor?: string;
        }

        type IntervalUnit = 'day' | 'week' | 'month' | 'year';
    }

    namespace products {
        interface IProduct extends IResourceObject {
            /**
             * Value is "product"
             */
            object: 'product';

            /**
             * Whether or not the product is currently available for purchase.
             */
            active: boolean;

            /**
             * A list of up to 5 attributes that each SKU can provide values for (e.g. ["color", "size"]).
             */
            attributes: string[];

            /**
             * A short one-line description of the product, meant to be displayable to the customer.
             */
            caption: string;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * An array of connect application identifiers that cannot purchase this product.
             */
            deactivated_on: string[];

            /**
             * The product’s description, meant to be displayable to the customer.
             */
            description: string;

            /**
             * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
             */
            images: string[];

            livemode: boolean;
            metadata: IMetadata;

            /**
             * The product’s name, meant to be displayable to the customer.
             */
            name: string;

            package_dimensions: IPackageDimensions;

            /**
             * Whether this product is a shipped good.
             */
            shippable: boolean;

            /**
             * A sublist of active SKUs associated with this product.
             */
            skus: IList<skus.ISku>;

            updated: number;

            /**
             * Extra information about a product which will appear on your customer’s credit card statement. In the case that multiple products are billed
             * at once, the first statement descriptor will be used. Only available on products of type=service.
             */
            statement_descriptor: string;

            /**
             * The type of the product. Defaults to `service` if not explicitly specified, enabling use of this product
             * withSubscriptions and Plans. Set this parameter to `good` to use this product with Orders and SKUs. On API
             * versions before `2018-02-05`, this field defaults to `good` for compatibility reasons.
             */
            type?: ProductType;

            /**
             * A label that represents units of this product, such as seat(s), in Stripe and on customers’ receipts and invoices.
             * Only available on products of type=service.
             */
            unit_label?: string;

            /**
             * A URL of a publicly-accessible webpage for this product.
             */
            url: string;
        }

        interface IProductCreationOptions extends IDataOptionsWithMetadata {
            /**
             * The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.
             * Applicable to both service and good types.
             */
            id?: string;

            /**
             * The product’s name, meant to be displayable to the customer.
             * Applicable to both service and good types.
             */
            name: string;

            /**
             * The type of the product. Defaults to `service` if not explicitly specified, enabling use of this product
             * withSubscriptions and Plans. Set this parameter to `good` to use this product with Orders and SKUs. On API
             * versions before `2018-02-05`, this field defaults to `good` for compatibility reasons.
             */
            type?: ProductType;

            /**
             * Whether or not the product is currently available for purchase. Defaults to true. May only be set if type=good.
             */
            active?: boolean;

            /**
             * A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. ["color", "size"]).
             * Applicable to both service and good types.
             */
            attributes?: string[];

            /**
             * A short one-line description of the product, meant to be displayable to the customer. May only be set if type=good.
             */
            caption?: string;

            /**
             * An array of Connect application names or identifiers that should not be able to order the SKUs for this product.
             * May only be set if type=good.
             */
            deactivate_on?: string[];

            /**
             * The product’s description, meant to be displayable to the customer. May only be set if type=good.
             */
            description?: string;

            /**
             * A list of up to 8 URLs of images for this product, meant to be displayable to the customer. May only be set if type=good.
             */
            images?: string[];

            /**
             * The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own
             * package_dimensions. May only be set if type=good.
             */
            package_dimensions?: IPackageDimensions;

            /**
             * Whether this product is shipped (i.e. physical goods). Defaults to true. May only be set if type=good.
             */
            shippable?: boolean;

            /**
             * A URL of a publicly-accessible webpage for this product. May only be set if type=good.
             */
            url?: string;

            /**
             * An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. The statement description
             * may not include <>”’ characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically
             * stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
             * May only be set if type=service.
             */
            statement_descriptor?: string;

            /**
             * A label that represents units of this product, such as seat(s), in Stripe and on customers’ receipts and invoices.
             * Only available on products of type=service.
             */
            unit_label?: string;
        }

        interface IProductUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * Whether or not the product is available for purchase. Setting this to false also deactivates any active, related SKUs. Setting this to
             * true does not automatically activate any deactivated, related SKUs.
             */
            active?: boolean;

            /**
             * A short one-line description of the product, meant to be displayable to the customer.
             */
            caption?: string;

            /**
             * An array of Connect application names or identifiers that should not be able to order the SKUs for this product. This can be unset
             * by updating the value to null and then saving.
             */
            deactivate_on?: string[];

            /**
             * The product’s description, meant to be displayable to the customer.
             */
            description?: string;

            /**
             * A list of up to 8 URLs of images for this product, meant to be displayable to the customer. This can be unset by updating the value to
             * null and then saving.
             */
            images?: string[];

            /**
             * The product’s name, meant to be displayable to the customer.
             */
            name?: string;

            /**
             * The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own
             * package_dimensions.
             */
            package_dimensions?: IPackageDimensions;

            /**
             * Whether this product is shipped (i.e. physical goods). Defaults to true.
             */
            shippable?: boolean;

            /**
             * A URL of a publicly-accessible webpage for this product.
             */
            url?: string;

            /**
             * An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. The statement description
             * may not include <>”’ characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically
             * stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
             * May only be set if type=service.
             */
            statement_descriptor?: string;
        }

        interface IProductListOptions extends IListOptions {
            /**
             * Only return products that are active or inactive (e.g. pass false to list all inactive products).
             */
            active?: boolean;

            /**
             * Only return products with the given IDs.
             */
            ids?: string[];

            /**
             * Only return products that can be shipped (i.e., physical, not digital products).
             */
            shippable?: boolean;

            /**
             * Only return products with the given url
             */
            url?: string;

            /**
             * Only return products of this type
             */
            type?: string;

            /**
             * A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp,
             * or it can be a dictionary with the following options:
             */
            created?: IDateFilter;
        }

        /**
         * The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its
         * own package_dimensions
         */
        interface IPackageDimensions {
            /**
             * Height, in inches. Maximum precision is 2 decimal places.
             */
            height: number;
            /**
             * Length, in inches. Maximum precision is 2 decimal places.
             */
            length: number;
            /**
             * Weight, in ounces. Maximum precision is 2 decimal places.
             */
            weight: number;
            /**
             * Width, in inches. Maximum precision is 2 decimal places.
             */
            width: number;
        }

        type ProductType = 'service' | 'good';
    }

    namespace recipientCards {}

    namespace recipients {
        // tslint:disable-next-line:no-empty-interface
        interface IRecipient extends IResourceObject {}
    }

    namespace skus {
        interface ISku extends IResourceObject {
            /**
             * Value is "sku"
             */
            object: 'sku';

            /**
             * Whether or not the SKU is available for purchase.
             */
            active: boolean;

            attributes: ISkuAttributes;
            created: number;

            /**
             * 3-letter ISO code for currency.
             */
            currency: string;

            /**
             * The URL of an image for this SKU, meant to be displayable to the customer.
             */
            image: string;

            inventory: IInventory;
            livemode: boolean;
            metadata: IMetadata;

            /**
             * The dimensions of this SKU for shipping purposes.
             */
            package_dimensions: products.IPackageDimensions;

            /**
             * The cost of the item as a positive integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 1 to charge ¥1,
             * Japanese Yen being a 0-decimal currency).
             */
            price: number;

            /**
             * The ID of the product this SKU is associated with. The product must be currently active. [Expandable]
             */
            product: string | products.IProduct;

            updated: number;
        }

        interface ISkuCreationOptions extends IDataOptionsWithMetadata {
            /**
             * The identifier for the SKU. Must be unique. If not provided, an identifier will be randomly generated.
             */
            id?: string;

            /**
             * 3-letter ISO code for currency.
             */
            currency: string;

            inventory: IInventory;

            /**
             * The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 1 to charge ¥1,
             * Japanese Yen being a 0-decimal currency).
             */
            price: number;

            /**
             * The ID of the product this SKU is associated with.
             */
            product: string;

            /**
             * Whether or not the SKU is available for purchase. Default to true.
             */
            active?: boolean;

            attributes?: ISkuAttributes;

            /**
             * The URL of an image for this SKU, meant to be displayable to the customer.
             */
            image?: string;

            /**
             * The dimensions of this SKU for shipping purposes.
             */
            package_dimensions?: products.IPackageDimensions;
        }

        interface ISkuUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * Whether or not the SKU is available for purchase.
             */
            active?: boolean;

            /**
             * 3-letter ISO code for currency.
             */
            currency?: string;

            /**
             * The URL of an image for this SKU, meant to be displayable to the customer.
             * This can be unset by updating the value to null and then saving.
             */
            image?: string;

            inventory?: IInventory;

            /**
             * The dimensions of this SKU for shipping purposes.
             */
            package_dimensions?: products.IPackageDimensions;

            /**
             * The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 1 to charge ¥1,
             * Japanese Yen being a 0-decimal currency).
             */
            price?: number;

            /**
             * The ID of the product this SKU is associated with.
             */
            product?: string;
        }

        interface ISkuListOptions extends IListOptions {
            /**
             * Only return SKUs that are active or inactive (e.g. pass false to list all inactive products).
             */
            active?: boolean;

            /**
             * Only return SKUs that have the specified key/value pairs in this partially constructed dictionary.
             * Can be specified only if product is also supplied. For instance, if the associated product has
             * attributes ["color", "size"], passing in attributes[color]=red returns all the SKUs for this product
             * that have color set to red.
             */
            attributes?: ISkuAttributes;

            /**
             * Only return SKUs with the given IDs.
             */
            ids?: string[];

            /**
             * Only return SKUs that are either in stock or out of stock (e.g. pass false to list all SKUs that are out of stock).
             * If no value is provided, all SKUs are returned.
             */
            in_stock?: boolean;

            /**
             * The ID of the product whose SKUs will be retrieved.
             */
            product?: string;
        }

        /**
         * Description of the SKU’s inventory.
         */
        interface IInventory {
            /**
             * The count of inventory available. Will be present if and only if type is "finite".
             *
             * Positive integer or zero
             */
            quantity?: number;

            /**
             * Inventory type. Possible values are "finite", "bucket"" (not quantified), and "infinite".
             */
            type: 'finite' | 'bucket' | 'infinite';

            /**
             * An indicator of the inventory available. Possible values are "in_stock", "limited", and "out_of_stock".
             * Will be present if and only if type is "bucket".
             */
            value?: 'in_stock' | 'limited' | 'out_of_stock';
        }

        /**
         * A dictionary of attributes and values for the attributes defined by the product.
         * If, for example, a product’s attributes are ["size", "gender"],
         * a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.
         */
        interface ISkuAttributes {
            [key: string]: string;
        }
    }

    namespace ephemeralKeys {
        interface IStripeVersion {
            /**
             * https://stripe.com/docs/upgrades#api-changelog
             */
            stripe_version: string;
        }

        interface ICustomer {
            /**
             * customer id
             */
            customer: string;
        }

        interface IEphemeralKey extends IResourceObject {
            object: 'ephemeral_key';
            associated_objects: IAssociatedObject[];
            created: number;
            expires: number;
            livemode: boolean;
            secret: string;
        }

        interface IAssociatedObject {
            id: string;
            type: string;
        }
    }

    namespace oauth {
        interface IOAuthAuthorizationCodeTokenRequest {
            /**
             * authorization_code when turning an authorization code into an access token
             */
            grant_type: 'authorization_code';

            /**
             * The value of the code
             */
            code: string;

            /**
             * Has no effect when requesting an access token from an authorization code.
             */
            scope?: string;

            /**
             * Check whether the suggested_capabilities were applied to the connected account.
             */
            assert_capabilities?: string;
        }

        interface IOAuthRefreshTokenRequest {
            /**
             * use a refresh token to get a new access token.
             */
            grant_type: 'refresh_token';

            /**
             * The value of the refresh_token
             */
            refresh_token: string;

            /**
             * When requesting a new access token from a refresh token, any scope that has an equal or lesser scope as the refresh token.
             *
             * Defaults to the scope of the refresh token.
             */
            scope?: string;

            /**
             * Check whether the suggested_capabilities were applied to the connected account.
             */
            assert_capabilities?: string;
        }

        interface IOAuthToken {
            /**
             * The unique id of the account you have been granted access to, as a string.
             */
            stripe_user_id: string;

            /**
             * The access token you can use to make requests on behalf of this Stripe account. Use it as you would any Stripe secret API key.
             *
             * This key does not expire, but may be revoked by the user at any time (you'll get a account.application.deauthorized webhook event when this happens).
             */
            access_token: string;

            /**
             * The scope granted to the access token, depending on the scope of the authorization code and scope parameter.
             */
            scope: string;

            /**
             * The live mode indicator for the token. If true, the access_token can be used as a live secret key. If false, the access_token can be used as a test secret key.
             *
             * Depends on the mode of the secret API key used to make the request.
             */
            livemode: boolean;

            /**
             * Will always have a value of bearer.
             */
            token_type: 'bearer';

            /**
             * Can be used to get a new access token of an equal or lesser scope, or of a different live mode (where applicable).
             */
            refresh_token: string;

            /**
             * A publishable key that can be used with this account. Matches the mode—live or test—of the token.
             */
            stripe_publishable_key: string;
        }

        interface IOAuthDeauthorizationResponse {
            /**
             * The unique id of the account you have revoked access to, as a string. This is the same as the stripe_user_id you passed in. If this is returned, the revocation was successful.
             */
            stripe_user_id: string;
        }
    }

    namespace tokens {
        interface IToken extends ICardToken, IBankAccountToken {}

        interface ICardToken extends ITokenBase {
            /**
             * Hash describing the card used to make the charge
             */
            card?: cards.ICardHash;
        }

        interface IBankAccountToken extends ITokenBase {
            /**
             * Hash describing the bank account
             */
            bank_account?: bankAccounts.IBankAccountHash;
        }

        interface ITokenBase extends IResourceObject {
            /**
             * Value is "token""
             */
            object: 'token';

            /**
             * IP address of the client that generated the token
             */
            client_ip: string;

            created: number;
            livemode: boolean;

            /**
             * Type of the token: card or bank_account
             */
            type: 'card' | 'bank_account';

            /**
             * Whether or not this token has already been used (tokens can be used only once)
             */
            used: boolean;
        }

        interface ITokenCreationOptionsBase extends IDataOptions {
            /**
             * The customer (owned by the application's account) to create a
             * token for. For use with Stripe Connect only; this can only be used
             * with an OAuth access token or Stripe-Account header. For more
             * details, see the shared customers documentation.
             *
             * Stripe connect only
             */
            customer?: string;
        }

        interface ICardTokenCreationOptions extends ITokenCreationOptionsBase {
            /**
             * The card this token will represent. If you also pass in a customer,
             * the card must be the ID of a card belonging to the customer.
             * Otherwise, if you do not pass a customer, a object containing a
             * user's credit card details, with the options described below.
             */
            card?: string | cards.ICardSourceCreationOptions;
        }

        interface IBankAccountTokenCreationOptions extends ITokenCreationOptionsBase {
            /**
             * The bank account this token will represent. If you also pass in
             * a customer, the bank account must be the ID of a bank account
             * belonging to the customer.  Otherwise, if you do not pass a
             * customer, a object containing a user's bank account details,
             * with the options described below.
             */
            bank_account: string | bankAccounts.ISourceCreationOptions;
        }

        interface IPiiTokenCreationOptions extends IDataOptions {
            pii: {
                /**
                 * The personal_id_number for PII in string form.
                 */
                personal_id_number: string;
            };
        }
    }

    namespace topups {
        interface ITopup extends IResourceObject {
            /**
             * Value is "topup"
             */
            object: 'topup';

            /**
             * Amount transferred
             */
            amount: number;

            /**
             * ID of the balance transaction that describes the impact of this top-up on your account balance.
             * May not be specified depending on status of top-up.
             */
            balance_transaction: string | null;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description: string;

            /**
             * Date the funds are expected to arrive in your Stripe account for payouts. This factors in delays
             * like weekends or bank holidays. May not be specified depending on status of top-up.
             */
            expected_availability_date: number;

            /**
             * Error code explaining reason for top-up failure if available
             */
            failure_code: string | null;

            /**
             * Message to user further explaining reason for top-up failure if available.
             */
            failure_message: string | null;

            /**
             * Has the value true if the object exists in live mode or the value false if the object exists
             * in test mode.
             */
            livemode: boolean;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing
             * additional information about the object in a structured format.
             */
            metaData: IMetadata;

            /**
             * For most Stripe users, the source of every top-up is a bank account. This hash is then the
             * source object describing that bank account.
             */
            source: ISource;

            /**
             * Extra information about a top-up. This will appear on your source’s bank statement.
             * It must contain at least one letter.
             */
            statement_descriptor: string | null;

            /**
             * Status of topup
             */
            status: 'canceled' | 'failed' | 'pending' | 'reversed' | 'succeeded';

            /**
             * A string that identifies this top-up as part of a group.
             */
            transfer_group: string | null;
        }

        interface ITopupCreationOptions extends IDataOptionsWithMetadata {
            /**
             * A positive integer representing how much to transfer.
             */
            amount: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description?: string;

            /**
             * The ID of a source to transfer funds from. For most users, this should be left unspecified
             * which will use the bank account that was set up in the dashboard for the specified currency.
             * In test mode, this can be a test bank token (see https://stripe.com/docs/connect/testing#testing-top-ups).
             */
            source?: string;

            /**
             * Extra information about a top-up for the source’s bank statement. Limited to 15 ASCII characters.
             */
            statement_descriptor?: string;

            /**
             * A string that identifies this top-up as part of a group.
             */
            transfer_group?: string;
        }

        interface ITopupUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description?: string;
        }

        interface ITopupsListOptions extends IListOptionsCreated {
            /**
             * A filter on the list based on the object amount field. The value can be a string with
             * an integer amount, or it can be a dictionary.
             */
            amount?: IAmountFilter;

            /**
             * Only return top-ups that have the given status.
             */
            status?: 'canceled' | 'failed' | 'pending' | 'succeeded';
        }

        type IAmountFilter = string | {
            gt?: string;
            gte?: string;
            lt?: string;
            lte?: string;
        };
    }

    namespace transfers {
        interface ITransfer extends IResourceObject {
            /**
             * Value is "transfer"
             */
            object: 'transfer';

            /**
             * Amount (in cents) to be transferred to your bank account
             */
            amount: number;

            /**
             * Amount in cents reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
             */
            amount_reversed: number;

            application_fee: string;

            /**
             * Balance transaction that describes the impact of this transfer on your account balance. [Expandable]
             */
            balance_transaction: string | balance.IBalanceTransaction;

            /**
             * Time that this record of the transfer was first created.
             */
            created: number;

            /**
             * Three-letter ISO currency code representing the currency.
             */
            currency: string;

            /**
             * Date the transfer is scheduled to arrive in the bank. This factors in delays like weekends or bank holidays.
             */
            date: number;

            /**
             * Internal-only description of the transfer
             */
            description: string;

            /**
             * ID of the bank account, card, or Stripe account the transfer was sent to. [Expandable]
             */
            destination: string | bankAccounts.IBankAccount | cards.ICardHash | accounts.IAccount;

            /**
             * If the destination is a Stripe account, this will be the ID of the
             * payment that the destination account received for the transfer. [Expandable]
             */
            destination_payment: string;

            /**
             * Error code explaining reason for transfer failure if available. See Types of transfer failures for a
             * list of failure codes: https://stripe.com/docs/api#transfer_failures
             */
            failure_code: string;

            /**
             * Message to user further explaining reason for transfer failure if available.
             */
            failure_message: string;

            livemode: boolean;
            metadata: IMetadata;

            /**
             * A list of reversals that have been applied to the transfer.
             */
            reversals: ITransferReversals;

            /**
             * Whether or not the transfer has been fully reversed. If the transfer is only partially reversed, this attribute
             * will still be false.
             */
            reversed: boolean;

            /**
             * ID of the charge (or other transaction) that was used to fund the
             * transfer. If null, the transfer was funded from the available
             * balance. [Expandable]
             */
            source_transaction: string | charges.ICharge;

            /**
             * The source balance this transfer came from.
             * One of card, bank_account, bitcoin_receiver, or alipay_account
             */
            source_type: SourceTypes;

            /**
             * Extra information about a transfer to be displayed on the user's bank statement.
             */
            statement_descriptor: string;

            /**
             * Current status of the transfer (paid, pending, in_transit, canceled or failed).
             * A transfer will be pending until it is submitted to the bank, at which point
             * it becomes in_transit. It will then change to paid if the transaction goes
             * through. If it does not go through successfully, its status will change to
             * failed or canceled.
             */
            status: Statuses;

            /**
             * A string that identifies this transaction as part of a group.
             */
            transfer_group: string | null;

            /**
             *  Can be card, bank_account, or stripe_account.
             */
            type: 'card' | 'bank_account' | 'stripe_account';
        }

        interface ITransferReversals extends IList<transferReversals.IReversal>, resources.TransferReversals {}

        interface ITransferCreationOptions extends IDataOptionsWithMetadata {
            /**
             * A positive integer in cents/pence representing how much to transfer.
             */
            amount: number;

            /**
             * 3-letter ISO code for currency.
             */
            currency: string;

            /**
             * The id of a bank account or a card to send the transfer to, or the
             * string "default_for_currency" to use the default external
             * account for the specified currency.
             *
             * If you use Stripe Connect, this can be the the id of a connected
             * Stripe account; see the details about when such transfers are
             * permitted.
             */
            destination: string;

            /**
             * You can use this parameter to transfer funds from a charge (or
             * other transaction) before they are added to your available
             * balance. A pending balance will transfer immediately but the
             * funds will not become available until the original charge
             * becomes available. See the Connect documentation for details.
             */
            source_transaction?: string;

            /**
             * The source balance to use for this transfer. One of bank_account
             * or card. For most users, this will default to card.
             */
            source_type?: SourceTypes;

            /**
             * A string that identifies this transaction as part of a group.
             * See the Connect documentation for details.
             */
            transfer_group?: string;

            /**
             * An arbitrary string attached to the object. Often useful for
             * displaying to users. This can be unset by updating the value
             * to null and then saving.
             */
            description?: string;
        }

        interface ITransferUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * An arbitrary string which you can attach to a transfer object. It is
             * displayed when in the web interface alongside the transfer. This
             * can be unset by updating the value to null and then saving.
             */
            description?: string;
        }

        interface ITransferListOptions extends IListOptionsCreated {
            date?: IDateFilter;

            /**
             * Only return transfers for the destination specified by this
             * account ID.
             */
            destination?: string;

            /**
             * Only return transfers with the specified transfer group.
             */
            transfer_group?: string | null;
        }

        type SourceTypes = 'alipay_account' | 'bank_account' | 'bitcoin_receiver' | 'card';

        type Statuses = 'pending' | 'paid' | 'failed' | 'in_transit' | 'canceled';
    }

    namespace transferReversals {
        interface IReversal extends IResourceObject {
            /**
             * Value is 'transfer_reversal'
             */
            object: 'transfer_reversal';

            /**
             * Amount reversed, in cents/pence.
             */
            amount: number;

            /**
             * Balance transaction that describes the impact of this reversal on your account balance. [Expandable]
             */
            balance_transaction: string | balance.IBalanceTransaction;

            created: number;

            /**
             * Three-letter ISO currency code representing the currency.
             */
            currency: string;

            metadata: IMetadata;

            /**
             * ID of the transfer that was reversed. [Expandable]
             */
            transfer: string | transfers.ITransfer;
        }

        interface IReversalCreationOptions extends IDataOptionsWithMetadata {
            /**
             * A positive integer in cents/pence representing how much of this transfer to reverse. Can only reverse up to the unreversed amount
             * remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts.
             */
            amount?: number;

            /**
             * An arbitrary string which you can attach to a reversal object. It is displayed alongside the reversal in the dashboard. This will
             * be unset if you POST an empty value.
             */
            description?: string;

            /**
             * Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is
             * given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to
             * the amount of the transfer reversed.
             */
            refund_application_fee?: boolean;
        }

        interface IReversalUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * An arbitrary string which you can attach to a reversal object. It is displayed when in the web interface alongside the
             * reversal. This can be unset by updating the value to null and then saving.
             */
            description?: string;
        }
    }

    namespace bankAccounts {
        interface IBankAccount extends IBankAccountHash {
            account?: string;

            /**
             * This indicates whether or not this bank account is the default external account for its currency.
             */
            default_for_currency?: boolean;

            /**
             * A set of key/value pairs that you can attach to a bank account object. It
             * can be useful for storing additional information about the bank account in
             * a structured format.
             */
            metadata: IMetadata;
        }

        interface IBankAccountHash extends IResourceObject {
            /**
             * value is "bank_account"
             */
            object: 'bank_account';

            /**
             * The name of the person or business that owns the bank account.
             */
            account_holder_name: string | null;

            /**
             * The type of entity that holds the account. This can be either
             * "individual"" or "company".
             */
            account_holder_type: 'individual' | 'company' | null;

            /**
             * Name of the bank associated with the routing number, e.g. WELLS FARGO.
             */
            bank_name: string;

            /**
             * Two-letter ISO code representing the country the bank account is located in.
             */
            country: string;

            /**
             * Three-letter ISO currency code representing the currency paid out to the bank account.
             */
            currency: string;

            customer?: string;

            /**
             * Uniquely identifies this particular bank account. You can use this attribute
             * to check whether two bank accounts are the same.
             */
            fingerprint: string;

            last4: string;

            /**
             * The routing transit number for the bank account.
             */
            routing_number: string;

            /**
             * Possible values are "new", "validated", "verified", "verification_failed",
             * or "errored". A bank account that hasn’t had any activity or validation
             * performed is "new". If Stripe can determine that the bank account exists, its
             * status will be "validated". Note that there often isn’t enough information
             * to know (e.g. for smaller credit unions), and the validation is not always
             * run. If customer bank account verification has succeeded, the bank
             * account status will be "verified". If the verification failed for any reason,
             * such as microdeposit failure, the status will be "verification_failed". If a
             * transfer sent to this bank account fails, we’ll set the status to "errored""
             * and will not continue to send transfers until the bank details are updated.
             */
            status: 'new' | 'validated' | 'verified' | 'verification_failed' | 'errored';
        }

        interface ISourceCreationOptions {
            /**
             * The type of payment source. Should be "bank_account".
             */
            object: 'bank_account';

            /**
             * The account number for the bank account in string form.
             * Must be a checking account.
             */
            account_number: string;

            /**
             * The country the bank account is in.
             */
            country: string;

            /**
             * The currency the bank account is in. This must be a
             * country/currency pairing that Stripe supports.
             */
            currency: string;

            /**
             * The routing number, sort code, or other country-appropriate
             * institution number for the bank account. For US bank
             * accounts, this is required and should be the ACH routing
             * number, not the wire routing number. If you are providing an
             * IBAN for account_number, this field is not required.
             */
            routing_number?: string;

            /**
             * The name of the person or business that owns the bank
             * account. This field is required when attaching the bank
             * account to a customer object.
             */
            account_holder_name?: string;

            /**
             * The type of entity that holds the account. This can be either
             * "individual" or "company". This field is required when
             * attaching the bank account to a customer object.
             */
            account_holder_type?: 'individual' | 'company';
        }

        interface IBankAccountUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * The name of the person or business that owns the bank account.
             */
            account_holder_name?: string | null;

            /**
             * The type of entity that holds the account. This can be either "individual" or "company".
             */
            account_holder_type?: 'individual' | 'company' | null;
        }

        interface IBankAccountVerifyOptions {
            /**
             * Two positive integers, in cents, equal to the values of the microdeposits sent to the bank account.
             */
            amounts: [number, number];
        }
    }

    namespace bitcoinReceivers {
        /**
         * A Bitcoin receiver wraps a Bitcoin address so that a customer can push a payment to you. This guide describes how to use
         * receivers to create Bitcoin payments.
         */
        interface IBitcoinReceiver extends IResourceObject {
            /**
             * Value is "bitcoin_receiver"
             */
            object: 'bitcoin_receiver';

            /**
             * True when this bitcoin receiver has received a non-zero amount of bitcoin.
             */
            active: boolean;

            /**
             * The amount of currency that you are collecting as payment.
             */
            amount: number;

            /**
             * The amount of currency to which bitcoin_amount_received has been converted.
             */
            amount_received: number;

            /**
             * The amount of bitcoin that the customer should send to fill the receiver. The bitcoin_amount is denominated in Satoshi:
             * there are 10^8 Satoshi in one bitcoin.
             */
            bitcoin_amount: number;

            /**
             * The amount of bitcoin that has been sent by the customer to this receiver.
             */
            bitcoin_amount_received: number;

            /**
             * This URI can be displayed to the customer as a clickable link (to activate their bitcoin client) or as a QR code (for mobile wallets).
             */
            bitcoin_uri: number;

            created: number;

            /**
             * Three-letter ISO currency code representing the currency to which the bitcoin will be converted.
             */
            currency: string;

            customer: string;
            description: string;

            /**
             * The customer's email address, set by the API call that creates the receiver.
             */
            email: string;

            /**
             * This flag is initially false and updates to true when the customer sends the bitcoin_amount to this receiver.
             */
            filled: boolean;

            /**
             * A bitcoin address that is specific to this receiver. The customer can send bitcoin to this address to fill the receiver.
             */
            inbound_address: string;

            livemode: boolean;
            metadata: IMetadata;

            /**
             * The ID of the payment created from the receiver, if any. Hidden when viewing the receiver with a publishable key.
             */
            payment: string;

            /**
             * The refund address for these bitcoin, if communicated by the customer.
             */
            refund_address: string;

            /**
             * A list with one entry for each time that the customer sent bitcoin to the receiver. Hidden when viewing the
             * receiver with a publishable key.
             */
            transactions: IList<IBitcoinTransaction>;

            /**
             * This receiver contains uncaptured funds that can be used for a payment or refunded.
             */
            uncaptured_funds: boolean;

            used_for_payment: boolean;
        }

        interface IBitcoinTransaction extends IResourceObject {
            /**
             * Value is 'list'
             */
            object: string;

            /**
             * The amount of currency that the transaction was converted to in real-time.
             */
            amount: number;

            /**
             * The amount of bitcoin contained in the transaction.
             */
            bitcoin_amount: number;

            created: number;

            /**
             * The currency to which this transaction was converted.
             */
            currency: string;

            /**
             * The receiver to which this transaction was sent.
             */
            receiver: string;
        }

        interface IBitcoinReceiverCreationOptions extends IDataOptionsWithMetadata {
            /**
             * The amount of currency that you will be paid.
             */
            amount: number;

            /**
             * The currency to which the bitcoin will be converted. You will be paid out in this currency. Only USD is currently supported.
             */
            currency: string;

            /**
             * The email address of the customer.
             */
            email: string;

            description?: string;

            /**
             * A flag that indicates whether you would like Stripe to automatically handle refunds for any mispayments to the receiver.
             */
            refund_mispayments?: boolean;
        }

        interface IBitcoinReceiverListOptions extends IListOptions {
            /**
             * Filter for active receivers.
             */
            active?: boolean;

            /**
             * Filter for filled receivers.
             */
            filled?: boolean;

            /**
             * Filter for receivers with uncaptured funds.
             */
            uncaptured_funds?: boolean;
        }
    }

    namespace cards {
        /**
         * You can store multiple cards on a customer in order to charge the customer later. You
         * can also store multiple debit cards on a recipient in order to transfer to those cards later.
         */
        interface ICard extends ICardHash {
            /**
             * The account this card belongs to. This attribute will not be in the
             * card object if the card belongs to a customer or recipient instead.
             * [Expandable]
             */
            account?: string | accounts.IAccount;

            /**
             * Only applicable on accounts (not customers or recipients). The
             * card can be used as a transfer destination for funds in this
             * currency.
             */
            currency?: string;

            /**
             * The customer that this card belongs to. This attribute will not be
             * in the card object if the card belongs to an account or recipient
             * instead.
             */
            customer?: string | customers.ICustomer | null;

            /**
             * Only applicable on accounts (not customers or recipients). This
             * indicates whether or not this card is the default external account
             * for its currency.
             */
            default_for_currency?: boolean;

            /**
             * The recipient that this card belongs to. This attribute will not be
             * in the card object if the card belongs to a customer or account
             * instead. [Expandable]
             */
            recipient?: string | recipients.IRecipient;
        }

        /**
         * Hash describing the card used to make the charge
         */
        interface ICardHash extends IResourceObject, ICardHashInfo {
            /**
             * ID of card (used in conjunction with a customer or recipient ID)
             */
            id: string;

            /**
             * Value is 'card'
             */
            object: 'card';
        }

        interface ICardUpdateOptions extends IDataOptionsWithMetadata {
            address_city?: string;
            address_country?: string;
            address_line1?: string;
            address_line2?: string;
            address_state?: string;
            address_zip?: string;

            /**
             * Only applicable on accounts (not customers or recipients).
             * If set to true, this card will become the default external
             * account for its currency.
             *
             * Managed accounts only
             */
            default_for_currency?: boolean;

            exp_month?: number;
            exp_year?: number;

            /**
             * Cardholder name
             */
            name?: string;
        }

        interface ICardSourceCreationOptions {
            /**
             * The type of payment source. Should be "card".
             */
            object: 'card';

            /**
             * Two digit number representing the card's expiration month.
             */
            exp_month: number;

            /**
             * Two or four digit number representing the card's expiration year.
             */
            exp_year: number;

            /**
             * The card number, as a string without any separators.
             */
            number: string;

            /**
             * Card security code. Required unless your account is registered in
             * Australia, Canada, or the United States. Highly recommended to always
             * include this value.
             */
            cvc?: string;

            /**
             * Cardholder's full name.
             */
            name?: string;

            address_city?: string;
            address_country?: string;
            address_line1?: string;
            address_line2?: string;
            address_state?: string;
            address_zip?: string;

            metadata?: IOptionsMetadata;
        }

        interface ICardSourceCreationOptionsExtended extends ICardSourceCreationOptions {
            /**
             * Required when adding a card to an account (not applicable to a
             * customers or recipients). The card (which must be a debit card) can be
             * used as a transfer destination for funds in this currency. Currently, the
             * only supported currency for debit card transfers is usd.
             *
             * Managed accounts only.
             */
            currency?: string;

            /**
             * Only applicable on accounts (not customers or recipients). If you set
             * this to true (or if this is the first external account being added in this
             * currency) this card will become the default external account for its
             * currency.
             *
             * Managed accounts only.
             */
            default_for_currency?: boolean;
        }
    }

    namespace customerBalanceTransactions {
        type CustomerBalanceTransactionType =
            | 'adjustment'
            | 'applied_to_invoice'
            | 'credit_note'
            | 'initial'
            | 'invoice_too_large'
            | 'invoice_too_small'
            | 'unspent_receiver_credit';

        interface ICustomerBalanceTransaction extends IResourceObject {
            /**
             * Value is "customer_balance_transaction"
             */
            object: 'customer_balance_transaction';

            /**
             * The amount of the transaction. A negative value is a credit for the customer’s balance, and a positive
             * value is a debit to the customer’s balance.
             */
            amount: number;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * The ID of the credit note (if any) related to the transaction. [Expandable]
             */
            credit_note: string | null;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
             */
            currency: string;

            /**
             * The ID of the customer the transaction belongs to. [Expandable]
             */
            customer: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description: string | null;

            /**
             * The customer’s balance after the transaction was applied. A negative value decreases the amount due
             * on the customer’s next invoice. A positive value increases the amount due on the customer’s next invoice.
             */
            ending_balance: number;

            /**
             * The ID of the invoice (if any) related to the transaction. [Expandable]
             */
            invoice: string | null;

            /**
             * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional
             * information about the object in a structured format.
             */
            metadata: IMetadata | null;

            /**
             * Transaction type. See the Customer Balance page to learn more about transaction types.
             */
            type: CustomerBalanceTransactionType;
        }

        interface ICustomerBalanceTransactionCreationOptions {
            /**
             * The integer amount in cents to apply to the customer’s balance. Pass a negative amount to credit the
             * customer’s balance, and pass in a positive amount to debit the customer’s balance.
             */
            amount: number;

            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency. If the customer’s currency
             * is set, this value must match it. If the customer’s currency is not set, it will be updated to this value.
             */
            currency: string;

            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description?: string;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional
             * information about the object in a structured format.
             */
            metadata?: IMetadata;
        }

        interface ICustomerBalanceTransactionUpdateOptions {
            /**
             * An arbitrary string attached to the object. Often useful for displaying to users.
             */
            description?: string;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional
             * information about the object in a structured format.
             */
            metadata?: IMetadata;
        }
    }

    namespace subscriptions {
        type SubscriptionStatus =
            | 'incomplete'
            | 'incomplete_expired'
            | 'trialing'
            | 'active'
            | 'past_due'
            | 'canceled'
            | 'unpaid';
        type SubscriptionBilling = 'charge_automatically' | 'send_invoice';

        /**
         * Subscriptions allow you to charge a customer's card on a recurring basis. A subscription ties a customer to
         * a particular plan you've created: https://stripe.com/docs/api#create_plan
         */
        interface ISubscription extends IResourceObject {
            /**
             * Value is "subscription"
             */
            object: 'subscription';

            /**
             * A positive decimal that represents the fee percentage of the subscription invoice amount that will be transferred to
             * the application owner's Stripe account each billing period.
             */
            application_fee_percent: number | null;

            /**
             * Either `charge_automatically`, or `send_invoice`.
             * This field has been renamed to collection_method and will be removed in a future API version.
             */
            billing: SubscriptionBilling;

            /**
             * Either "charge_automatically", or "send_invoice". When charging automatically, Stripe will attempt to pay this subscription at the
             * end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an
             * invoice with payment instructions.
             */
            collection_method: SubscriptionBilling;

            /**
             * Determines the date of the first full invoice, and, for plans with month or year intervals, the day of the month
             * for subsequent invoices.
             */
            billing_cycle_anchor: number;

            /**
             * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period.
             */
            billing_thresholds: null | {
                /**
                 * Monetary threshold that triggers the subscription to create an invoice.
                 */
                amount_gte: number;

                /**
                 * Indicates if the billing_cycle_anchor should be reset when a threshold is reached. If true, billing_cycle_anchor
                 * will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
                 * This value may not be true if the subscription contains items with plans that have aggregate_usage=last_ever.
                 */
                reset_billing_cycle_anchor: boolean;
            };

            /**
             * A date in the future at which the subscription will automatically get canceled.
             */
            cancel_at: number | null;

            /**
             * If the subscription has been canceled with the at_period_end flag set to true, cancel_at_period_end on the
             * subscription will be true. You can use this attribute to determine whether a subscription that has a status
             * of active is scheduled to be canceled at the end of the current period.
             */
            cancel_at_period_end: boolean;

            /**
             * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with
             * cancel_at_period_end, canceled_at will still reflect the date of the initial cancellation request, not the end of the
             * subscription period when the subscription is automatically moved to a canceled state.
             */
            canceled_at: number | null;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
             */
            current_period_end: number;

            /**
             * Start of the current period that the subscription has been invoiced for
             */
            current_period_start: number;

            /**
             * ID of the customer who owns the subscription. [Expandable]
             */
            customer: string | customers.ICustomer;

            /**
             * Number of days a customer has to pay invoices generated by this subscription. This value will be null for
             * subscriptions where billing=charge_automatically.
             */
            days_until_due: number | null;

            /**
             * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription.
             * If not set, invoices will use the default payment method in the customer’s invoice settings. [Expandable]
             */
            default_payment_method: string | paymentMethods.IPaymentMethod | null;

            /**
             * ID of the default payment source for the subscription.
             * It must belong to the customer associated with the subscription and be in a chargeable state.
             * If not set, defaults to the customer’s default source. [Expandable]
             */
            default_source: string | null;
            /**
             * The tax rates that will apply to any subscription item that does not have tax_rates set.
             * Invoices created will have their default_tax_rates populated from the subscription.
             */
            default_tax_rates: taxRates.ITaxRate[];
            /**
             * Describes the current discount applied to this subscription, if there is one. When billing, a discount applied to a
             * subscription overrides a discount applied on a customer-wide basis.
             */
            discount: coupons.IDiscount | null;

            /**
             * If the subscription has ended (either because it was canceled or because the customer was switched to a subscription
             * to a new plan), the date the subscription ended
             */
            ended_at: number | null;

            /**
             * List of subscription items, each with an attached plan.
             */
            items: IList<subscriptionItems.ISubscriptionItem>;

            /**
             * The most recent invoice this subscription has generated. [Expandable]
             */
            latest_invoice: invoices.IInvoice | string | null;

            /**
             * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information
             * about the object in a structured format.
             */
            metadata: IMetadata;

            /**
             * Hash describing the plan the customer is subscribed to.  Only set if the subscription
             * contains a single plan.
             */
            plan?: plans.IPlan | null;

            /**
             * The quantity of the plan to which the customer is subscribed. For example, if your plan is $10/user/month,
             * and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly.
             * Only set if the subscription contains a single plan.
             */
            quantity?: number;

            /**
             * Date of the last substantial change to this subscription. For example, a change to the items array,
             * or a change of status, will reset this timestamp.
             */
            start: number;

            /**
             * Date when the subscription was first created. The date might differ from the created date due to backdating.
             */
            start_date: number;

            /**
             * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`,
             * `past_due`, `canceled`, or `unpaid`.
             *
             * For `billing=charge_automatically` a subscription moves into `incomplete` if the
             * initial payment attempt fails. A subscription in this state can only have metadata
             * and default_source updated. Once the first invoice is paid, the subscription moves
             * into an `active` state. If the first invoice is not paid within 23 hours, the
             * subscription transitions to `incomplete_expired`. This is a terminal state, the open
             * invoice will be voided and no further invoices will be generated.
             *
             * A subscription that is currently in a trial period is `trialing` and moves to
             * `active` when the trial period is over.
             *
             * If subscription `billing=charge_automatically` it becomes `past_due` when payment to
             * renew it fails and `canceled` or `unpaid` (depending on your subscriptions settings)
             * when Stripe has exhausted all payment retry attempts.
             *
             * If subscription `billing=send_invoice` it becomes `past_due` when its invoice is not
             * paid by the due date, and `canceled` or `unpaid` if it is still not paid by an
             * additional deadline after that. Note that when a subscription has a status of
             * `unpaid`, no subsequent invoices will be attempted (invoices will be created, but
             * then immediately automatically closed). After receiving updated payment information
             * from a customer, you may choose to reopen and pay their closed invoices.
             */
            status: SubscriptionStatus;

            /**
             * If provided, each invoice created by this subscription will apply the tax rate, increasing the amount billed to the customer.
             */
            tax_percent: number | null;

            /**
             * If the subscription has a trial, the end of that trial.
             */
            trial_end: number | null;

            /**
             * If the subscription has a trial, the beginning of that trial.
             */
            trial_start: number | null;
        }

        interface ISubscriptionCustCreationOptions extends IDataOptionsWithMetadata {
            /**
             * @deprecated Use items property instead.
             */
            plan?: string;

            /**
             * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage of the subscription invoice
             * subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order
             * to set an application fee percentage. For more information, see the application fees documentation.
             */
            application_fee_percent?: number;

            /**
             * The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that
             * particular subscription.
             */
            coupon?: string;

            default_source?: string | cards.ICardSourceCreationOptions;

            /**
             * The quantity you'd like to apply to the subscription you're creating. For example, if your plan is £10/user/month, and your customer
             * has 5 users, you could pass 5 as the quantity to have the customer charged £50 (5 x £10) monthly. If you update a subscription but
             * don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute
             * unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit
             * the quantity attribute and will default to 1 unless you pass a quantity parameter.
             */
            quantity?: number;

            /**
             * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage of the subscription invoice
             * subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month
             * with a tax_percent of 20.0 will charge $12 per invoice.
             */
            tax_percent?: number;

            /**
             * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end
             * will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the
             * customer's trial immediately.
             */
            trial_end?: number | 'now';

            /**
             * Integer representing the number of trial period days before the customer is charged for the first time.
             */
            trial_period_days?: number;

            /**
             * Indicates if a plan’s trial_period_days should be applied to the subscription. Setting trial_end per subscription is preferred,
             * and this defaults to false. Setting this flag to true together with trial_end is not allowed.
             */
            trial_from_plan?: boolean;

            /**
             * List of subscription items, each with an attached plan.
             */
            items?: ISubscriptionCreationItem[];

            /**
             * Either "charge_automatically", or "send_invoice". When charging automatically, Stripe will attempt to pay this subscription at the end of the
             * cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment
             * instructions. Defaults to "charge_automatically".
             */
            billing?: SubscriptionBilling;

            /**
             * Number of days a customer has to pay invoices generated by this subscription.
             * Only valid for subscriptions where billing=send_invoice.
             */
            days_until_due?: number;

            /**
             * A future timestamp to anchor the subscription’s billing cycle. This is used to determine the date of the first full invoice, and, for plans
             * with month or year intervals, the day of the month for subsequent invoices.
             */
            billing_cycle_anchor?: number;

            /**
             * Boolean (default true). Use with a billing_cycle_anchor timestamp to determine whether the customer will be invoiced a prorated amount until
             * the anchor date. If false, the anchor period will be free (similar to a trial).
             */
            prorate?: boolean;

            /**
             * Boolean (default true). Used to prevent Stripe Invoicing from automatically paying the subscription on creation. This can be set
             * to false when used with services like Avalara that need to augment an invoice before the subscription is paid.
             *
             * Using this flag requires contacting Stripe support in order to have the account whitelisted.
             */
            pay_immediately?: boolean;

            /**
             * The tax rates that will apply to the subscription.
             */
            default_tax_rates?: string[];

            /**
             * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. If not set, invoices will use the default payment method in the customer’s invoice settings.
             */
            default_payment_method?: string;

            /**
             * Indicates if a customer is on or off-session while an invoice payment is attempted.
             */
            off_session?: boolean;
        }

        interface ISubscriptionCreationOptions extends ISubscriptionCustCreationOptions {
            /***
             * The identifier of the customer to subscribe.
             */
            customer: string;

            /**
             * A timestamp at which the subscription should cancel. If set to a date before the current period ends
             * this will cause a proration if prorate=true.
             */
            cancel_at?: number | null;

            /**
             * Boolean indicating whether this subscription should cancel at the end of the current period.
             */
            cancel_at_period_end?: boolean;

            /**
             * Boolean (defaults to true) telling us whether to credit for unused time when the billing cycle changes
             * (e.g. when switching plans, resetting billing_cycle_anchor=now, or starting a trial), or if an item’s
             * quantity changes. If false, the anchor period will be free (similar to a trial) and
             * proration adjustments will be created.
             */
            prorate?: boolean;
        }

        interface ISubscriptionUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage of the subscription invoice
             * subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order
             * to set an application fee percentage. For more information, see the application fees documentation.
             */
            application_fee_percent?: number;

            /**
             * The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that
             * particular subscription.  Passing null will remove any coupon previously applied to a subscription.
             */
            coupon?: string | null;

            /**
             * @deprecated Use items property instead.
             */
            plan?: string;

            /**
             * Flag telling us whether to prorate switching plans during a billing cycle.
             */
            prorate?: boolean;

            /**
             * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply exactly the
             * same proration that was previewed with upcoming invoice endpoint. It can also be used to implement custom proration logic, such as
             * prorating by day instead of by second, by providing the time that you wish to use for proration calculations.
             */
            proration_date?: number;

            /**
             * The quantity you'd like to apply to the subscription you're creating. For example, if your plan is £10/user/month, and your customer
             * has 5 users, you could pass 5 as the quantity to have the customer charged £50 (5 x £10) monthly. If you update a subscription but
             * don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute
             * unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit
             * the quantity attribute and will default to 1 unless you pass a quantity parameter.
             */
            quantity?: number;

            default_source?: string | cards.ICardSourceCreationOptions;

            /**
             * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage of the subscription invoice
             * subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month
             * with a tax_percent of 20.0 will charge $12 per invoice.
             */
            tax_percent?: number;

            /**
             * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end
             * will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the
             * customer's trial immediately.
             */
            trial_end?: number | 'now';

            /**
             * Either "charge_automatically", or "send_invoice". When charging automatically, Stripe will attempt to pay this subscription at the end of the
             * cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment
             * instructions.
             */
            billing?: SubscriptionBilling;

            /**
             * Number of days a customer has to pay invoices generated by this subscription. Only valid for subscriptions where billing=send_invoice.
             */
            days_until_due?: number;

            /**
             * List of subscription items, each with an attached plan.
             */
            items?: ISubscriptionUpdateItem[];

            /**
             * String, unchanged (default) or now. This allows you to reset the billing cycle of a subscription.
             */
            billing_cycle_anchor?: 'unchanged' | 'now';

            /**
             * Boolean indicating whether this subscription should cancel at the end of the current period.
             */
            cancel_at_period_end?: boolean;

            /**
             * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. If not set, invoices will use the default payment method in the customer’s invoice settings.
             */
            default_payment_method?: string;

            /**
             * Indicates if a customer is on or off-session while an invoice payment is attempted.
             */
            off_session?: boolean;

            /**
             * Boolean (default true). Used to prevent Stripe Invoicing from automatically paying the subscription when the term changes.
             * This can be set to false when used with services like Avalara that need to augment an invoice before the subscription is paid.
             *
             * Using this flag requires contacting Stripe support in order to have the account whitelisted.
             */
            pay_immediately?: boolean;
        }

        interface ISubscriptionCancellationOptions extends IDataOptions {
            /**
             * Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items.
             */
            invoice_now?: boolean;

            /**
             * Will generate a proration invoice item that credits remaining unused time until the subscription period end.
             */
            prorate?: boolean;

            /**
             * @deprecated Use subscription update with cancel_at_period_end option as of 2018-08-23.
             *
             * A flag that if set to true will delay the cancellation of the subscription until the end of the current period.
             */
            at_period_end?: boolean;
        }

        interface ISubscriptionListOptions extends IListOptionsCreated {
            /**
             * The billing mode of the subscriptions to retrieve. Either "charge_automatically" or "send_invoice".
             */
            billing?: SubscriptionBilling;

            /**
             * The ID of the customer whose subscriptions will be retrieved
             */
            customer?: string;

            /**
             * The ID of the plan whose subscriptions will be retrieved
             */
            plan?: string;

            /**
             * The status of the subscriptions to retrieve.
             */
            status?: SubscriptionStatus | 'all';
        }

        interface ISubscriptionCreationItem {
            /**
             * Plan ID for this item.
             */
            plan: string;

            /**
             * Quantity for this item.
             */
            quantity?: number;

            /**
             * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period.
             */
            billing_thresholds?: {
                /**
                 * Usage threshold that triggers the subscription to create an invoice
                 */
                usage_gte: number;
            };

            /**
             * A set of key/value pairs that you can attach to an object. It can be useful for storing
             * additional information about the object in a structured format.
             */
            metadata?: IOptionsMetadata;
        }

        interface ISubscriptionUpdateItem {
            /**
             * SubscriptionItem to update.
             */
            id?: string;

            /**
             * Delete all usage for a given subscription item. Only allowed when deleted is set to true and the current plan’s
             * usage_type is metered.
             */
            clear_usage?: boolean;

            /**
             * Delete the specified item if set to true.
             */
            deleted?: boolean;

            /**
             * Set of key/value pairs that you can attach to an object. It can be useful for storing additional information about
             * the object in a structured format.
             */
            metadata?: IOptionsMetadata;

            /**
             * Plan ID for this item.
             */
            plan?: string;

            /**
             * Quantity for this item.
             */
            quantity?: number;
        }
    }

    namespace subscriptionItems {
        /**
         * Subscription items allow you to create customer subscriptions with more than one plan, making it easy to represent
         * complex billing relationships.
         */
        interface ISubscriptionItem extends IResourceObject {
            /**
             * Value is "subscription_item"
             */
            object: 'subscription_item';

            /**
             * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period.
             */
            billing_thresholds: null | {
                /**
                 * Usage threshold that triggers the subscription to create an invoice
                 */
                usage_gte: number;
            };

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Set of key/value pairs that you can attach to an object. It can be useful for storing additional information
             * about the object in a structured format.
             */
            metadata: IMetadata;

            /**
             * Hash describing the plan the customer is subscribed to
             */
            plan: plans.IPlan;

            /**
             * The quantity of the plan to which the customer should be subscribed.
             */
            quantity?: number;

            /**
             * The subscription this subscription_item belongs to.
             */
            subscription: string;
        }

        interface ISubscriptionItemCreationOptions extends IDataOptionsWithMetadata {
            /**
             * The identifier of the plan to add to the subscription.
             */
            plan: string;

            /**
             * The identifier of the subscription to modify.
             */
            subscription: string;

            /**
             * The quantity you’d like to apply to the subscription item you’re creating.
             */
            quantity?: number;

            /**
             * Flag indicating whether to prorate switching plans during a billing cycle.
             */
            prorate?: boolean;

            /**
             * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same
             * proration that was previewed with the upcoming invoice endpoint.
             */
            proration_date?: number;
        }

        interface ISubscriptionItemUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * The identifier of the new plan for this subscription item.
             */
            plan?: string;

            /**
             * Flag indicating whether to prorate switching plans during a billing cycle.
             */
            prorate?: boolean;

            /**
             * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same
             * proration that was previewed with the upcoming invoice endpoint.
             */
            proration_date?: number;

            /**
             * The quantity you’d like to apply to the subscription item you’re creating.
             */
            quantity?: number;
        }

        interface ISubscriptionItemDeleteOptions extends IDataOptions {
            /**
             * Flag indicating whether to prorate switching plans during a billing cycle.
             */
            prorate?: boolean;

            /**
             * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same
             * proration that was previewed with the upcoming invoice endpoint.
             */
            proration_date?: number;
        }

        interface ISubscriptionItemListOptions extends IListOptionsCreated {
            /**
             * The ID of the subscription whose items will be retrieved.
             */
            subscription: string;
        }
    }

    namespace refunds {
        interface IRefund {
            id: string;

            /**
             * Value is 'refund'
             */
            object: string;

            /**
             * Amount in cents/pence.
             */
            amount: number;

            /**
             * Balance transaction that describes the impact of this reversal on your account balance.
             */
            balance_transaction: string | balance.IBalanceTransaction;

            /**
             * ID of the charge that was refunded. [Expandable]
             */
            charge: string | charges.ICharge;

            created: number;

            /**
             * Three-letter ISO currency code representing the currency in which the charge was made.
             */
            currency: string;

            description?: string;

            /**
             * A set of key/value pairs that you can attach to the object. It can be useful
             * for storing additional information in a structured format.
             */
            metadata: IMetadata;

            /**
             * Reason for the refund. If set, possible values are "duplicate", "fraudulent", and "requested_by_customer".
             */
            reason: string;

            /**
             * This is the transaction number that appears on email receipts sent for this refund.
             */
            receipt_number: string;

            /**
             * The transfer reversal that is associated with the refund. Only present if the charge
             * came from another Stripe account. See the Connect documentation for details.
             */
            source_transfer_reversal?: string | null;

            /**
             * Status of the refund. For credit card refunds, this can be succeeded or failed.
             * For other types of refunds, it can be pending, succeeded, failed, or canceled.
             */
            status: 'pending' | 'succeeded' | 'failed' | 'canceled';

            /**
             * If the accompanying transfer was reversed, the transfer reversal object. Only
             * applicable if the charge was created using the destination parameter.
             */
            transfer_reversal?: string | null;

            /**
             * If the refund failed, the reason for refund failure if known.
             */
            failure_reason?: 'lost_or_stolen_card' | 'expired_or_canceled_card' | 'unknown';
        }

        interface IRefundCreationOptions extends IDataOptionsWithMetadata {
            /**
             * A positive integer in cents/pence representing how much of this charge to
             * refund. Can only refund up to the unrefunded amount remaining of the
             * charge.
             *
             * default is entire charge
             */
            amount?: number;

            /**
             * String indicating the reason for the refund. If set, possible values are
             * "duplicate", "fraudulent", and "requested_by_customer". Specifying
             * "fraudulent" as the reason when you believe the charge to be fraudulent
             * will help us improve our fraud detection algorithms.
             */
            reason?: string;

            /**
             * Boolean indicating whether the application fee should be refunded when
             * refunding this charge. If a full charge refund is given, the full application
             * fee will be refunded. Else, the application fee will be refunded with an
             * amount proportional to the amount of the charge refunded.
             * An application fee can only be refunded by the application that created the
             * charge.
             *
             * Connect only, default is false.
             */
            refund_application_fee?: boolean;

            /**
             * Boolean indicating whether the transfer should be reversed when
             * refunding this charge. The transfer will be reversed for the same amount
             * being refunded (either the entire or partial amount).
             * A transfer can only be reversed by the application that created the charge.
             *
             * Connect only, default is false.
             */
            reverse_transfer?: boolean;
        }

        interface IRefundCreationOptionsWithCharge extends IRefundCreationOptions {
            /**
             * The identifier of the charge to refund.
             */
            charge: string;
        }

        interface IRefundListOptions extends IListOptions {
            /**
             * Only return refunds for the charge specified by this charge ID.
             */
            charge?: string;
        }
    }

    /**
     * Stripe Sources documentation: https://stripe.com/docs/sources
     * Stripe Sources API documentation: https://stripe.com/docs/api/sources
     */
    namespace sources {
        /** Source object: https://stripe.com/docs/api/sources/object */
        interface ISource extends IResourceObject {
            id: string;
            object: 'source';
            ach_credit_transfer?: {
                account_number: string;
                routing_number: string;
                fingerprint: string;
                bank_name: string;
                swift_code: string;
                refund_routing_number?: string | null;
                refund_account_holder_type?: string | null;
                refund_account_holder_name?: string | null;
            };
            amount?: number | null;
            card?: ICardHashInfo;
            client_secret: string;
            code_verification?: {
                attempts_remaining: number;
                status: 'pending' | 'succeeded' | 'failed';
            };
            created: number;
            currency?: string;
            customer?: string;
            flow: 'redirect' | 'receiver' | 'code_verification' | 'none';
            livemode: boolean;
            metadata: IMetadata;
            owner: {
                address?: IAddress | null;
                email?: string | null;
                name?: string | null;
                phone?: string | null;
                verified_address?: IAddress | null;
                verified_email?: string | null;
                verified_name?: string | null;
                verified_phone?: string | null;
            };
            receiver?: {
                address: string;
                amount_charged: number;
                amount_received: number;
                amount_returned: number;
                refund_attributes_method: 'email' | 'manual' | 'none';
                refund_attributes_status: 'missing' | 'requested' | 'available';
            };
            redirect?: {
                failure_reason?: 'user_abort' | 'declined' | 'processing_error';
                return_url: string;
                status: 'pending' | 'succeeded' | 'not_required' | 'failed';
                url: string;
            };
            statement_descriptor?: string | null;
            status: 'canceled' | 'chargeable' | 'consumed' | 'failed' | 'pending';
            type:
                | 'ach_credit_transfer'
                | 'ach_debit'
                | 'alipay'
                | 'bancontact'
                | 'card'
                | 'card_present'
                | 'eps'
                | 'giropay'
                | 'ideal'
                | 'multibanco'
                | 'p24'
                | 'sepa_debit'
                | 'sofort'
                | 'three_d_secure'
                | 'wechat';
            usage: 'reusable' | 'single_use';
        }

        interface ISourceCreationOptions extends IDataOptionsWithMetadata {
            type: ISource['type'];
            amount?: number;
            currency?: string;
            flow?: ISource['flow'];
            mandate?: {
                acceptance?: {
                    status: 'accepted' | 'refused';
                    date?: number;
                    ip?: string;
                    offline?: {
                        contact_email: string;
                    };
                    online?: {
                        date: number;
                        ip: string;
                        user_agent: string;
                    };
                    type: 'online' | 'offline';
                    user_agent?: string;
                };
                amount?: number | null;
                currency?: string;
                interval?: 'one_time' | 'scheduled' | 'variable';
                notification_method?: 'email' | 'manual' | 'none';
            };
            metadata?: IMetadata;
            owner?: {
                address?: IAddress | null;
                email?: string;
                name?: string;
                phone?: string;
            };
            receiver?: {
                refund_attributes_method?: 'email' | 'manual';
            };
            redirect?: {
                return_url: string;
            };
            statement_descriptor?: string;
            token?: string;
            usage?: ISource['usage'];
            ideal?: {
                bank?: string;
            };
            sepa_debit?: {
                ideal?: string;
                iban?: string;
            };
        }

        interface ISourceUpdateOptions extends IDataOptionsWithMetadata {
            mandate?: {
                acceptance?: {
                    status: 'accepted' | 'refused';
                    date?: number;
                    ip?: string;
                    offline?: {
                        contact_email: string;
                    };
                    online?: {
                        date?: number;
                        ip?: string;
                        user_agent?: string;
                    };
                    type: 'online' | 'offline';
                    user_agent?: string;
                };
                amount?: number | null;
                currency?: string;
                interval?: 'one_time' | 'scheduled' | 'variable';
                notification_method?: 'email' | 'manual' | 'none';
            };
            owner?: {
                address?: Partial<IAddress> | null;
                email?: string | null;
                name?: string | null;
                phone?: string | null;
            };
        }

        interface ISourceRetrieveOptions {
            client_secret?: string;
        }
    }

    namespace countrySpecs {
        interface ICountrySpec extends IResourceObject {
            /**
             * Value is "country_spec"
             */
            object: 'country_spec';

            /**
             * The default currency for this country. This applies to both payment methods and bank accounts.
             */
            default_currency: string;

            /**
             * Currencies that can be accepted in the specific country (for transfers).
             */
            supported_bank_account_currencies: {};

            /**
             * Currencies that can be accepted in the specified country (for payments).
             */
            supported_payment_currencies: string[];

            /**
             * Payment methods available in the specified country. You will need to enable bitcoin and ACH payments on your account for those methods to
             * appear in this list. The stripe payment method refers to charging through your platform.
             */
            supported_payment_methods: string[];

            /**
             * Lists the types of verification data needed to keep an account open. Includes 'minimum' fields, which every account must eventually
             * provide, as well as a 'additional' fields, which are only required for some merchants.
             */
            verification_fields: {
                individual: {
                    minimum: string[];
                    additional: string[];
                };
                company: {
                    minimum: string[];
                    additional: string[];
                };
            };
        }
    }

    namespace reviews {
        interface IReview extends IResourceObject {
            /**
             * String representing the object’s type. Objects of the same type share the same value.
             */
            object: 'review';

            /**
             * The charge associated with this review. [Expandable]
             */
            charge: string | charges.ICharge;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * If true, the review needs action.
             */
            open: boolean;

            /**
             * The reason the review is currently open or closed.
             */
            reason: 'rule' | 'manual' | 'approved' | 'refunded' | 'refunded_as_fraud' | 'disputed';
        }
    }

    namespace applications {
        interface IApplication extends IResourceObject {
            /**
             * String representing the object’s type. Objects of the same type share the same value.
             */
            object: 'application';

            /**
             * String representing the application’s name.
             */
            name: string;
        }
    }

    namespace usageRecords {
        type IUsageRecordAction = 'increment' | 'set';

        interface IUsageRecordCreationOptions {
            /**
             * The usage quantity for the specified timestamp
             */
            quantity: number;
            /**
             * The timestamp for the usage event. This timestamp must be within the current billing period of the subscription of the provided subscription_item
             */
            timestamp: number;
            /**
             * Valid values are increment (default) or set. When using increment the specified quantity will be added to the usage at the specified
             * timestamp. The set action will overwrite the usage quantity at that timestamp.
             */
            action?: IUsageRecordAction;
        }

        interface IUsageRecord extends IObject {
            object: 'usage_record';
            id: string;
            livemode: boolean;
            quantity: number;
            subscription_item: string;
            timestamp: number;
        }
    }

    namespace usageRecordSummaries {
        /**
         * A object with a data property that contains an array of up to limit summaries,
         * starting after summary starting_after. Each entry in the array is a separate summary object.
         * If no more summaries are available, the resulting array is empty.
         */
        interface IUsageRecordSummaries extends IList<IUsageRecordSummariesItem> {
            object: 'list';
        }

        interface IUsageRecordSummariesItem {
            id: string;
            object: string;
            invoice: string;
            livemode: boolean;
            period: invoices.IPeriod;
            subscription_item: string;
            total_usage: number;
        }
    }

    namespace webhookEndpoints {
        interface IWebhookCreateOptions {
            /**
             * The URL of the webhook endpoint
             */
            url: string;

            /**
             * The list of enabled events for this webhook endpoint.
             * Use '*' to enable all events, except those that require explicit selection.
             */
            enabled_events: events.EventType[];

            /**
             * Events sent to this endpoint will be generated with this Stripe Version instead of your
             * account’s default Stripe Version.
             */
            api_version?: string;

            /**
             * If true, this endpoint will receive events from connected accounts instead of just your account.
             */
            connect?: boolean;
        }

        interface IWebhookEndpoint extends IObject {
            /**
             * Value is 'webhook_endpoint'
             */
            object: 'webhook_endpoint';

            id: string;

            /**
             * The Stripe API version used to render data.
             */
            api_version: string;

            /**
             * ID of the Application.
             */
            application: string | null;

            /**
             * Time at which the object was created. Measured in seconds since the Unix epoch.
             */
            created: number;

            /**
             * The list of enabled events for this webhook endpoint.
             * Use '*' to enable all events, except those that require explicit selection.
             */
            enabled_events: events.EventType[];

            /**
             * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
             */
            livemode: boolean;

            /**
             * The status of the webhook.
             */
            status: 'enabled' | 'disabled';

            /**
             * The URL of the webhook endpoint.
             */
            url: string;

            /**
             * The endpoint’s secret, used to generate webhook signatures. Only returned at creation.
             */
            secret?: string;

            /**
             * Set of key-value pairs that you can attach to an object.
             * This can be useful for storing additional information about
             * the object in a structured format.
             */
            metadata?: IMetadata;
        }

        interface IWebhookUpdateOptions {
            /**
             * If true, it disables the webhookendpoint.
             */
            disabled?: boolean;

            /**
             * The list of enabled events for this webhook endpoint.
             * Use '*' to enable all events, except those that require explicit selection.
             */
            enabled_events?: events.EventType[];

            /**
             * The URL of the webhook endpoint.
             */
            url?: string;

            /**
             * Set of key-value pairs that you can attach to an object.
             * This can be useful for storing additional information about
             * the object in a structured format.
             */
            metadata?: IMetadata;
        }
    }

    // tslint:disable-next-line:no-unnecessary-class
    class StripeResource {
        constructor(stripe: Stripe, urlData: any);
    }

    interface IListPromise<T> extends Promise<IList<T>>, AsyncIterableIterator<T> {
        autoPagingEach(handler: (item: T) => Promise<void>): void;

        autoPagingToArray(opts: { limit: number }): Promise<T[]>;
    }

    namespace resources {
        class Issuing extends StripeResource {
            authorizations: Authorizations;
            cardholders: Cardholders;
            cards: IssuingCards;
            disputes: IssuingDisputes;
            transactions: Transactions;
        }
        class Authorizations extends StripeResource {
            /**
             * Retrieves an Issuing Authorization object.
             */
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;
            retrieve(
                id: string,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;

            /**
             * Updates the specified Issuing Authorization object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             */
            update(
                id: string,
                data: issuing.authorizations.IAuthorizationUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;
            update(
                id: string,
                data: issuing.authorizations.IAuthorizationUpdateOptions,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;

            /**
             * Approves a pending Issuing Authorization object.
             */
            approve(
                id: string,
                data: issuing.authorizations.IAuthorizationApproveOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;
            approve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;
            approve(
                id: string,
                data: issuing.authorizations.IAuthorizationApproveOptions,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;
            approve(
                id: string,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;

            /**
             * Declines a pending Issuing Authorization object.
             */
            decline(
                id: string,
                data: issuing.authorizations.IAuthorizationDeclineOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;
            decline(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;
            decline(
                id: string,
                data: issuing.authorizations.IAuthorizationDeclineOptions,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;
            decline(
                id: string,
                response?: IResponseFn<issuing.authorizations.IAuthorization>
            ): Promise<issuing.authorizations.IAuthorization>;

            /**
             * Returns a list of Issuing Authorization objects. The objects are sorted in descending order by creation date,
             * with the most recently created object appearing first.
             */
            list(
                data: issuing.authorizations.IAuthorizationListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.authorizations.IAuthorization>>,
            ): Promise<IList<issuing.authorizations.IAuthorization>>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.authorizations.IAuthorization>>,
            ): Promise<IList<issuing.authorizations.IAuthorization>>;
            list(
                data: issuing.authorizations.IAuthorizationListOptions,
                response?: IResponseFn<IList<issuing.authorizations.IAuthorization>>,
            ): Promise<IList<issuing.authorizations.IAuthorization>>;
            list(
                response?: IResponseFn<IList<issuing.authorizations.IAuthorization>>,
            ): Promise<IList<issuing.authorizations.IAuthorization>>;
        }
        class Cardholders extends StripeResource {
            /**
             * Creates a new Issuing Cardholder object that can be issued cards.
             */
            create(
                data: issuing.cardholders.ICardholderCreateOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.cardholders.ICardholder>,
            ): Promise<issuing.cardholders.ICardholder>;
            create(
                data: issuing.cardholders.ICardholderCreateOptions,
                response?: IResponseFn<issuing.cardholders.ICardholder>,
            ): Promise<issuing.cardholders.ICardholder>;

            /**
             * Retrieves an Issuing Cardholder object.
             */
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<issuing.cardholders.ICardholder>,
            ): Promise<issuing.cardholders.ICardholder>;
            retrieve(
                id: string,
                response?: IResponseFn<issuing.cardholders.ICardholder>,
            ): Promise<issuing.cardholders.ICardholder>;

            /**
             * Updates the specified Issuing Cardholder object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             */
            update(
                id: string,
                data: issuing.cardholders.ICardholderUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.cardholders.ICardholder>,
            ): Promise<issuing.cardholders.ICardholder>;
            update(
                id: string,
                data: issuing.cardholders.ICardholderUpdateOptions,
                response?: IResponseFn<issuing.cardholders.ICardholder>,
            ): Promise<issuing.cardholders.ICardholder>;

            /**
             * Returns a list of Issuing Cardholder objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
             */
            list(
                data: issuing.cardholders.ICardholderListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.cardholders.ICardholder>>,
            ): Promise<IList<issuing.cardholders.ICardholder>>;
            list(
                data: issuing.cardholders.ICardholderListOptions,
                response?: IResponseFn<IList<issuing.cardholders.ICardholder>>,
            ): Promise<IList<issuing.cardholders.ICardholder>>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.cardholders.ICardholder>>,
            ): Promise<IList<issuing.cardholders.ICardholder>>;
            list(
                response?: IResponseFn<IList<issuing.cardholders.ICardholder>>,
            ): Promise<IList<issuing.cardholders.ICardholder>>;
        }
        class IssuingCards extends StripeResource {
            /**
             * Creates an Issuing Card object.
             */
            create(
                data: issuing.cards.IIssuingCardCreateOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.cards.IIssuingCard>,
            ): Promise<issuing.cards.IIssuingCard>;
            create(
                data: issuing.cards.IIssuingCardCreateOptions,
                response?: IResponseFn<issuing.cards.IIssuingCard>,
            ): Promise<issuing.cards.IIssuingCard>;

            /**
             * Retrieves an Issuing Card object.
             */
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<issuing.cards.IIssuingCard>,
            ): Promise<issuing.cards.IIssuingCard>;
            retrieve(
                id: string,
                response?: IResponseFn<issuing.cards.IIssuingCard>,
            ): Promise<issuing.cards.IIssuingCard>;

            /**
             * For virtual cards only. Retrieves an Issuing card_details object that contains the sensitive details of a virtual card.
             */
            retrieveDetails(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<issuing.cards.IIssuingCardDetails>,
            ): Promise<issuing.cards.IIssuingCardDetails>;
            retrieveDetails(
                id: string,
                response?: IResponseFn<issuing.cards.IIssuingCardDetails>,
            ): Promise<issuing.cards.IIssuingCardDetails>;

            /**
             * Updates the specified Issuing Card object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             */
            update(
                id: string,
                data: issuing.cards.IIssuingCardUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.cards.IIssuingCard>,
            ): Promise<issuing.cards.IIssuingCard>;
            update(
                id: string,
                data: issuing.cards.IIssuingCardUpdateOptions,
                response?: IResponseFn<issuing.cards.IIssuingCard>,
            ): Promise<issuing.cards.IIssuingCard>;

            /**
             * Returns a list of Issuing Card objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
             */
            list(
                data: issuing.cards.IIssuingCardListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.cards.IIssuingCard>>,
            ): Promise<IList<issuing.cards.IIssuingCard>>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.cards.IIssuingCard>>,
            ): Promise<IList<issuing.cards.IIssuingCard>>;
            list(
                data: issuing.cards.IIssuingCardListOptions,
                response?: IResponseFn<IList<issuing.cards.IIssuingCard>>,
            ): Promise<IList<issuing.cards.IIssuingCard>>;
            list(
                response?: IResponseFn<IList<issuing.cards.IIssuingCard>>,
            ): Promise<IList<issuing.cards.IIssuingCard>>;
        }

        class IssuingDisputes extends StripeResource {
            /**
             * Creates an Issuing Dispute object.
             */
            create(
                data: issuing.disputes.IIssuingDisputeCreateOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.disputes.IIssuingDispute>,
            ): Promise<issuing.disputes.IIssuingDispute>;
            create(
                data: issuing.disputes.IIssuingDisputeCreateOptions,
                response?: IResponseFn<issuing.disputes.IIssuingDispute>,
            ): Promise<issuing.disputes.IIssuingDispute>;

            /**
             * Retrieves an Issuing Dispute object.
             */
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<issuing.disputes.IIssuingDispute>,
            ): Promise<issuing.disputes.IIssuingDispute>;
            retrieve(
                id: string,
                response?: IResponseFn<issuing.disputes.IIssuingDispute>,
            ): Promise<issuing.disputes.IIssuingDispute>;

            /**
             * Updates the specified Issuing Dispute object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             */
            update(
                id: string,
                data: issuing.disputes.IIssuingDisputeUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.disputes.IIssuingDispute>,
            ): Promise<issuing.disputes.IIssuingDispute>;
            update(
                id: string,
                data: issuing.disputes.IIssuingDisputeUpdateOptions,
                response?: IResponseFn<issuing.disputes.IIssuingDispute>,
            ): Promise<issuing.disputes.IIssuingDispute>;

            /**
             * Returns a list of Issuing Dispute objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
             */
            list(
                data: issuing.disputes.IIssuingDisputeListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.disputes.IIssuingDispute>>,
            ): Promise<IList<issuing.disputes.IIssuingDispute>>;
            list(
                data: issuing.disputes.IIssuingDisputeListOptions,
                response?: IResponseFn<IList<issuing.disputes.IIssuingDispute>>,
            ): Promise<IList<issuing.disputes.IIssuingDispute>>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.disputes.IIssuingDispute>>,
            ): Promise<IList<issuing.disputes.IIssuingDispute>>;
            list(
                response?: IResponseFn<IList<issuing.disputes.IIssuingDispute>>,
            ): Promise<IList<issuing.disputes.IIssuingDispute>>;
        }

        class Transactions extends StripeResource {
            /**
             * Retrieves an Issuing Transaction object.
             */
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<issuing.transactions.ITransaction>,
            ): Promise<issuing.transactions.ITransaction>;
            retrieve(
                id: string,
                response?: IResponseFn<issuing.transactions.ITransaction>,
            ): Promise<issuing.transactions.ITransaction>;

            /**
             * Updates the specified Issuing Transaction object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             */
            update(
                id: string,
                data: issuing.transactions.ITransactionUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<issuing.transactions.ITransaction>,
            ): Promise<issuing.transactions.ITransaction>;
            update(
                id: string,
                data: issuing.transactions.ITransactionUpdateOptions,
                response?: IResponseFn<issuing.transactions.ITransaction>,
            ): Promise<issuing.transactions.ITransaction>;

            /**
             * Returns a list of Issuing Transaction objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
             */
            list(
                data: issuing.transactions.ITransactionListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.transactions.ITransaction>>,
            ): Promise<IList<issuing.transactions.ITransaction>>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<issuing.transactions.ITransaction>>,
            ): Promise<IList<issuing.transactions.ITransaction>>;
            list(
                data: issuing.transactions.ITransactionListOptions,
                response?: IResponseFn<IList<issuing.transactions.ITransaction>>,
            ): Promise<IList<issuing.transactions.ITransaction>>;
            list(
                response?: IResponseFn<IList<issuing.transactions.ITransaction>>,
            ): Promise<IList<issuing.transactions.ITransaction>>;
        }
        class UsageRecords extends StripeResource {
            /**
             * Creates a usage record for a specified subscription item and date, and fills it with a quantity.
             */
            create(
                subscription: string,
                data: usageRecords.IUsageRecordCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<usageRecords.IUsageRecord>,
            ): Promise<usageRecords.IUsageRecord>;
            create(
                subscription: string,
                data: usageRecords.IUsageRecordCreationOptions,
                response?: IResponseFn<usageRecords.IUsageRecord>,
            ): Promise<usageRecords.IUsageRecord>;
        }

        class UsageRecordSummaries extends StripeResource {
            /**
             * Creates a usage record for a specified subscription item and date, and fills it with a quantity.
             */
            list(
                subscriptionItem: string,
                options: IListOptions,
                response?: IResponseFn<usageRecordSummaries.IUsageRecordSummaries>,
            ): Promise<usageRecordSummaries.IUsageRecordSummaries>;
            list(
                subscriptionItem: string,
                response?: IResponseFn<usageRecordSummaries.IUsageRecordSummaries>,
            ): Promise<usageRecordSummaries.IUsageRecordSummaries>;
        }

        class Accounts extends StripeResource {
            /**
             * With Connect, you can create Stripe accounts for your users. To do this, you'll first need to register your platform.
             */
            create(
                data: accounts.IAccountCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IAccount>,
            ): Promise<accounts.IAccount>;
            create(
                data: accounts.IAccountCreationOptions,
                response?: IResponseFn<accounts.IAccount>,
            ): Promise<accounts.IAccount>;

            /**
             * Retrieves the details of the account.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IAccount>,
            ): Promise<accounts.IAccount>;
            retrieve(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<accounts.IAccount>,
            ): Promise<accounts.IAccount>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IAccount>,
            ): Promise<accounts.IAccount>;
            retrieve(id: string, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            retrieve(options: HeaderOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            retrieve(response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;

            /**
             * Updates an account by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * You may only update accounts that you manage. To update your own account, you can currently only do so via the dashboard.
             * For more information on updating managed accounts, see our guide.
             */
            update(
                id: string,
                data: accounts.IAccountUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IAccount>,
            ): Promise<accounts.IAccount>;
            update(
                id: string,
                data: accounts.IAccountUpdateOptions,
                response?: IResponseFn<accounts.IAccount>,
            ): Promise<accounts.IAccount>;

            /**
             * With Connect, you may delete Stripe accounts you manage.
             *
             * Managed accounts created using test-mode keys can be deleted at any time. Managed accounts created using live-mode keys may only be
             * deleted once all balances are zero.
             *
             * If you are looking to close your own account, use the data tab in your account settings instead.
             */
            del(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            del(id: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            del(options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            del(response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;

            /**
             * With Connect, you may flag managed accounts as suspicious.
             *
             * Managed accounts created using test-mode keys can be rejected at any time. Managed accounts created using live-mode keys may only be
             * rejected once all balances are zero.
             */
            reject(
                id: string,
                data: accounts.IRejectReason,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IAccount>,
            ): Promise<accounts.IAccount>;
            reject(
                id: string,
                data: accounts.IRejectReason,
                response?: IResponseFn<accounts.IAccount>,
            ): Promise<accounts.IAccount>;

            /**
             * Returns a list of accounts connected to your platform via Connect. If you’re not a platform, the list will be empty.
             */
            list(
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<accounts.IAccount>>,
            ): IListPromise<accounts.IAccount>;
            list(data: IListOptions, response?: IResponseFn<IList<accounts.IAccount>>): IListPromise<accounts.IAccount>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<accounts.IAccount>>,
            ): IListPromise<accounts.IAccount>;
            list(response?: IResponseFn<IList<accounts.IAccount>>): IListPromise<accounts.IAccount>;

            /**
             * When you create a new bank account or credit card, you must specify a managed account to create it on.
             *
             * If the bank account's owner has no other external account in the bank account's currency, the new bank account will become the
             * default for that currency. However, if the owner already has a bank account for that currency, the new account will only become
             * the default if the default_for_currency parameter is set to true.
             *
             * If the account has no default destination card, then the new card will become the default. However, if the owner already has a
             * default then it will not change. To change the default, you should set default_for_currency to true when creating a card for a
             * managed account.
             */
            createExternalAccount(
                accId: string,
                data: accounts.IExternalAccountCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>,
            ): Promise<cards.ICard | bankAccounts.IBankAccount>;
            createExternalAccount(
                accId: string,
                data: accounts.IExternalAccountCreationOptions,
                response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>,
            ): Promise<cards.ICard | bankAccounts.IBankAccount>;

            /**
             * By default, you can see the 10 most recent bank accounts stored on a managed account directly on the object, but you can also
             * retrieve details about a specific bank account stored on the Stripe account.
             */
            retrieveExternalAccount(
                accId: string,
                bankAccId: string,
                options: HeaderOptions,
                response?: IResponseFn<bankAccounts.IBankAccount>,
            ): Promise<bankAccounts.IBankAccount>;
            retrieveExternalAccount(
                accId: string,
                bankAccId: string,
                response?: IResponseFn<bankAccounts.IBankAccount>,
            ): Promise<bankAccounts.IBankAccount>;

            /**
             * You can always see the 10 most recent cards directly on a managed account; this method lets you retrieve details about a specific
             * card stored on the account.
             */
            retrieveCard(
                accId: string,
                cardId: string,
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            retrieveCard(accId: string, cardId: string, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

            /**
             * Updates the metadata of a bank account belonging to a managed account, and optionally sets it as the default for its currency.
             * Other bank account details are not editable by design.
             */
            updateExternalAccount(
                accId: string,
                bankAccId: string,
                data: accounts.IExternalAccountUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<bankAccounts.IBankAccount>,
            ): Promise<bankAccounts.IBankAccount>;
            updateExternalAccount(
                accId: string,
                bankAccId: string,
                data: accounts.IExternalAccountUpdateOptions,
                response?: IResponseFn<bankAccounts.IBankAccount>,
            ): Promise<bankAccounts.IBankAccount>;
            /**
             * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
             * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
             * interruption.
             *
             * When you update a card, Stripe will automatically validate the card.
             */
            updateExternalAccount(
                accId: string,
                cardId: string,
                data: cards.ICardUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            updateExternalAccount(
                accId: string,
                cardId: string,
                data: cards.ICardUpdateOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;

            /**
             * You can delete destination bank accounts and cards from a managed account. If a bank account is the default external account for its currency
             * or card's default_for_currency property is true, it can only be deleted if it is the only external account for that currency, and the
             * currency is not the Stripe account's default currency. Otherwise, you must set another external account to be the default for the currency
             * before deleting it.
             */
            deleteExternalAccount(
                accId: string,
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            deleteExternalAccount(
                accId: string,
                id: string,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;

            /**
             * You can see a list of the bank accounts belonging to a managed account. Note that the 10 most recent external accounts are always
             * available by default on the corresponding Stripe object. If you need more than those 10, you can use this API method and the limit
             * and starting_after parameters to page through additional bank accounts.
             */
            listExternalAccounts(
                accId: string,
                data: accounts.IBankAccountListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<bankAccounts.IBankAccount>>,
            ): IListPromise<bankAccounts.IBankAccount>;
            listExternalAccounts(
                accId: string,
                data: accounts.IBankAccountListOptions,
                response?: IResponseFn<IList<bankAccounts.IBankAccount>>,
            ): IListPromise<bankAccounts.IBankAccount>;

            /**
             * You can see a list of the cards belonging to a managed account. Note that the 10 most recent external accounts are available on the
             * account object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page
             * through additional cards.
             */
            listExternalAccounts(
                accId: string,
                data: accounts.ICardListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<cards.ICard>>,
            ): IListPromise<cards.ICard>;
            listExternalAccounts(
                accId: string,
                data: accounts.ICardListOptions,
                response?: IResponseFn<IList<cards.ICard>>,
            ): IListPromise<cards.ICard>;

            /**
             * Creates a single-use login link for an Express account to access their Stripe dashboard.
             * You may only create login links for Express accounts connected to your platform.
             * Returns a login link object if the call succeeded.
             */
            createLoginLink(accId: string, response?: IResponseFn<accounts.ILoginLink>): Promise<accounts.ILoginLink>;
            createLoginLink(
                accId: string,
                options?: accounts.ILoginLinkOptions,
                response?: IResponseFn<accounts.ILoginLink>,
            ): Promise<accounts.ILoginLink>;

            /**
             * Creates a new person.
             */
            createPerson(
                accId: string,
                data: accounts.IPersonCreateUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;
            createPerson(
                accId: string,
                data: accounts.IPersonCreateUpdateOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;

            /**
             * Updates an existing person.
             */
            updatePerson(
                accId: string,
                personId: string,
                data: accounts.IPersonCreateUpdateOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;
            updatePerson(
                accId: string,
                personId: string,
                data: accounts.IPersonCreateUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;

            /**
             * Retrieves an existing person.
             */
            retrievePerson(
                accId: string,
                personId: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;
            retrievePerson(
                accId: string,
                personId: string,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;
            retrievePerson(
                accId: string,
                personId: string,
                data: IDataOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;
            retrievePerson(
                accId: string,
                personId: string,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;

            /**
             * Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account
             * can be deleted through the API, except if the person is the account_opener.
             * If your integration is using the executive parameter, you cannot delete the only verified executive on file.
             */
            deletePerson(
                accId: string,
                personId: string,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;
            deletePerson(
                accId: string,
                personId: string,
                response?: IResponseFn<accounts.IPerson>,
            ): Promise<accounts.IPerson>;

            /**
             * Returns a list of people associated with the account’s legal entity.
             * The people are returned sorted by creation date, with the most recent people appearing first.
             */
            listPersons(
                accId: string,
                data: accounts.IPersonListOptions,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): IListPromise<accounts.IPerson>;
            listPersons(
                accId: string,
                data: accounts.IPersonListOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): IListPromise<accounts.IPerson>;
            listPersons(
                accId: string,
                options: HeaderOptions,
                response?: IResponseFn<accounts.IPerson>,
            ): IListPromise<accounts.IPerson>;
            listPersons(accId: string, response?: IResponseFn<accounts.IPerson>): IListPromise<accounts.IPerson>;
        }

        class ApplicationFees extends StripeResource {
            /**
             * Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the
             * application fee.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFee>,
            ): Promise<applicationFees.IApplicationFee>;
            retrieve(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<applicationFees.IApplicationFee>,
            ): Promise<applicationFees.IApplicationFee>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFee>,
            ): Promise<applicationFees.IApplicationFee>;
            retrieve(
                id: string,
                response?: IResponseFn<applicationFees.IApplicationFee>,
            ): Promise<applicationFees.IApplicationFee>;

            /**
             * Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most
             * recent fees appearing first.
             */
            list(
                data: applicationFees.IApplicationFeeListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<applicationFees.IApplicationFee>>,
            ): IListPromise<applicationFees.IApplicationFee>;
            list(
                data: applicationFees.IApplicationFeeListOptions,
                response?: IResponseFn<IList<applicationFees.IApplicationFee>>,
            ): IListPromise<applicationFees.IApplicationFee>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<applicationFees.IApplicationFee>>,
            ): IListPromise<applicationFees.IApplicationFee>;
            list(
                response?: IResponseFn<IList<applicationFees.IApplicationFee>>,
            ): IListPromise<applicationFees.IApplicationFee>;

            /**
             * Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that
             * the fee was originally collected from.
             *
             * You can optionally refund only part of an application fee. You can do so as many times as you wish until the entire fee has been refunded.
             *
             * Once entirely refunded, an application fee can't be refunded again. This method will throw an error when called on an already-refunded
             * application fee, or when trying to refund more money than is left on an application fee.
             */
            refund(
                feeId: string,
                data: applicationFees.IApplicationFeeRefundCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            refund(
                feeId: string,
                data: applicationFees.IApplicationFeeRefundCreationOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            refund(
                feeId: string,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            refund(
                feeId: string,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that
             * the fee was originally collected from.
             *
             * You can optionally refund only part of an application fee. You can do so as many times as you wish until the entire fee has been refunded.
             *
             * Once entirely refunded, an application fee can't be refunded again. This method will throw an error when called on an already-refunded
             * application fee, or when trying to refund more money than is left on an application fee.
             */
            createRefund(
                feeId: string,
                data: applicationFees.IApplicationFeeRefundCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            createRefund(
                feeId: string,
                data: applicationFees.IApplicationFeeRefundCreationOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            createRefund(
                feeId: string,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            createRefund(
                feeId: string,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details
             * about a specific refund stored on the application fee.
             */
            retrieveRefund(
                feeId: string,
                refundId: string,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            retrieveRefund(
                feeId: string,
                refundId: string,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left
             * unchanged.
             *
             * This request only accepts metadata as an argument.
             */
            updateRefund(
                feeId: string,
                refundId: string,
                data: { metadata?: IOptionsMetadata },
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            updateRefund(
                feeId: string,
                refundId: string,
                data: { metadata?: IOptionsMetadata },
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available
             * by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after
             * parameters to page through additional refunds.
             */
            listRefunds(
                feeId: string,
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>,
            ): IListPromise<applicationFees.IApplicationFeeRefund>;
            listRefunds(
                feeId: string,
                data: IListOptions,
                response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>,
            ): IListPromise<applicationFees.IApplicationFeeRefund>;
            listRefunds(
                feeId: string,
                options: HeaderOptions,
                response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>,
            ): IListPromise<applicationFees.IApplicationFeeRefund>;
            listRefunds(
                feeId: string,
                response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>,
            ): IListPromise<applicationFees.IApplicationFeeRefund>;
        }

        class ApplicationFeeRefunds extends StripeResource {
            /**
             * Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that
             * the fee was originally collected from.
             *
             * You can optionally refund only part of an application fee. You can do so as many times as you wish until the entire fee has been refunded.
             *
             * Once entirely refunded, an application fee can't be refunded again. This method will throw an error when called on an already-refunded
             * application fee, or when trying to refund more money than is left on an application fee.
             */
            create(
                data: applicationFees.IApplicationFeeRefundCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            create(
                data: applicationFees.IApplicationFeeRefundCreationOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            create(
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            create(
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details
             * about a specific refund stored on the application fee.
             */
            retrieve(
                refundId: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            retrieve(
                refundId: string,
                options: IDataOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            retrieve(
                refundId: string,
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            retrieve(
                refundId: string,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left
             * unchanged.
             *
             * This request only accepts metadata as an argument.
             */
            update(
                refundId: string,
                data: { metadata?: IOptionsMetadata },
                options: HeaderOptions,
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;
            update(
                refundId: string,
                data: { metadata?: IOptionsMetadata },
                response?: IResponseFn<applicationFees.IApplicationFeeRefund>,
            ): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available
             * by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after
             * parameters to page through additional refunds.
             */
            list(
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>,
            ): IListPromise<applicationFees.IApplicationFeeRefund>;
            list(
                data: IListOptions,
                response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>,
            ): IListPromise<applicationFees.IApplicationFeeRefund>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>,
            ): IListPromise<applicationFees.IApplicationFeeRefund>;
            list(
                response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>,
            ): IListPromise<applicationFees.IApplicationFeeRefund>;
        }

        class Balance extends StripeResource {
            retrieve(options: HeaderOptions, response?: IResponseFn<balance.IBalance>): Promise<balance.IBalance>;
            retrieve(response?: IResponseFn<balance.IBalance>): Promise<balance.IBalance>;

            /*
             * @deprecated
             */
            retrieveTransaction(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): Promise<balance.IBalanceTransaction>;
            retrieveTransaction(
                id: string,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): Promise<balance.IBalanceTransaction>;

            /*
             * @deprecated
             */
            listTransactions(
                data: balance.IBalanceListOptions,
                options: HeaderOptions,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): IListPromise<balance.IBalanceTransaction>;
            listTransactions(
                data: balance.IBalanceListOptions,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): IListPromise<balance.IBalanceTransaction>;
            listTransactions(
                options: HeaderOptions,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): IListPromise<balance.IBalanceTransaction>;
            listTransactions(
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): IListPromise<balance.IBalanceTransaction>;
        }

        class BalanceTransaction extends StripeResource {
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): Promise<balance.IBalanceTransaction>;
            retrieve(
                id: string,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): Promise<balance.IBalanceTransaction>;

            list(
                data: balance.IBalanceListOptions,
                options: HeaderOptions,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): IListPromise<balance.IBalanceTransaction>;
            list(
                data: balance.IBalanceListOptions,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): IListPromise<balance.IBalanceTransaction>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<balance.IBalanceTransaction>,
            ): IListPromise<balance.IBalanceTransaction>;
            list(response?: IResponseFn<balance.IBalanceTransaction>): IListPromise<balance.IBalanceTransaction>;
        }

        class BitcoinReceivers extends StripeResource {
            /**
             * Creates a Bitcoin receiver object that can be used to accept bitcoin payments from your customer. The receiver exposes a Bitcoin address
             * and is created with a bitcoin to USD exchange rate that is valid for 10 minutes.
             */
            create(
                data: bitcoinReceivers.IBitcoinReceiverCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>,
            ): Promise<bitcoinReceivers.IBitcoinReceiver>;
            create(
                data: bitcoinReceivers.IBitcoinReceiverCreationOptions,
                response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>,
            ): Promise<bitcoinReceivers.IBitcoinReceiver>;

            /**
             * Retrieves the Bitcoin receiver with the given ID.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>,
            ): Promise<bitcoinReceivers.IBitcoinReceiver>;
            retrieve(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>,
            ): Promise<bitcoinReceivers.IBitcoinReceiver>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>,
            ): Promise<bitcoinReceivers.IBitcoinReceiver>;
            retrieve(
                id: string,
                response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>,
            ): Promise<bitcoinReceivers.IBitcoinReceiver>;

            /**
             * Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.
             */
            list(
                data: bitcoinReceivers.IBitcoinReceiverListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<bitcoinReceivers.IBitcoinReceiver>>,
            ): IListPromise<bitcoinReceivers.IBitcoinReceiver>;
            list(
                data: bitcoinReceivers.IBitcoinReceiverListOptions,
                response?: IResponseFn<IList<bitcoinReceivers.IBitcoinReceiver>>,
            ): IListPromise<bitcoinReceivers.IBitcoinReceiver>;

            // update(id: string): void; // This does seem to be a method in the library (https://github.com/stripe/stripe-node/blob/master/lib/resources/BitcoinReceivers.js#L12), but isn't in the API documentation.

            setMetadata(): void; // TODO: Implement placeholder method
            getMetadata(): void; // TODO: Implement placeholder method
        }

        class Checkout extends StripeResource {
            sessions: Sessions;
        }

        class Sessions extends StripeResource {
            create(
                data: checkouts.sessions.ICheckoutCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<checkouts.sessions.ICheckoutSession>,
            ): Promise<checkouts.sessions.ICheckoutSession>;
            create(
                data: checkouts.sessions.ICheckoutCreationOptions,
                response?: IResponseFn<checkouts.sessions.ICheckoutSession>,
            ): Promise<checkouts.sessions.ICheckoutSession>;

            retrieve(
                data: string,
                options: HeaderOptions,
                response?: IResponseFn<checkouts.sessions.ICheckoutSession>,
            ): Promise<checkouts.sessions.ICheckoutSession>;
            retrieve(
                data: string,
                response?: IResponseFn<checkouts.sessions.ICheckoutSession>,
            ): Promise<checkouts.sessions.ICheckoutSession>;
        }

        class TaxRates extends StripeResource {
            /**
             * Creates a new tax rate.
             */
            create(
                data: taxRates.ITaxRateCreationOptions,
                response?: IResponseFn<taxRates.ITaxRate>,
            ): Promise<taxRates.ITaxRate>;
            create(
                data: taxRates.ITaxRateCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<taxRates.ITaxRate>,
            ): Promise<taxRates.ITaxRate>;

            /**
             * Updates an existing tax rate.
             */
            update(
                id: string,
                data: taxRates.ITaxRateUpdateOptions,
                response?: IResponseFn<taxRates.ITaxRate>,
            ): Promise<taxRates.ITaxRate>;
            update(
                id: string,
                data: taxRates.ITaxRateUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<taxRates.ITaxRate>,
            ): Promise<taxRates.ITaxRate>;

            /**
             * Retrieves a tax rate with the given ID
             */
            retrieve(id: string, response?: IResponseFn<taxRates.ITaxRate>): Promise<taxRates.ITaxRate>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<taxRates.ITaxRate>,
            ): Promise<taxRates.ITaxRate>;

            /**
             * Returns a list of your tax rates.
             * Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.
             */
            list(
                data: taxRates.ItaxRateSearchOptions,
                response?: IResponseFn<IList<taxRates.ITaxRate>>,
            ): IListPromise<taxRates.ITaxRate>;
            list(
                data: taxRates.ItaxRateSearchOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<taxRates.ITaxRate>>,
            ): IListPromise<taxRates.ITaxRate>;
        }

        class Charges extends StripeResource {
            /**
             * To charge a credit card, you create a charge object. If your API key is in test mode, the supplied card won't actually be charged, though
             * everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).
             *
             * @returns Returns a charge object if the charge succeeded. Throws an error if something goes wrong. A common source of error is an invalid or
             * expired card, or a valid card with insufficient available balance. If the cvc parameter is provided, Stripe will attempt to check the CVC's
             * correctness, and the check's result will be returned. Similarly, If address_line1 or address_zip are provided, Stripe will similarly try to
             * check the validity of those parameters. Some banks do not support checking one or more of these parameters, in which case Stripe will return
             * an 'unavailable' result. Also note that, depending on the bank, charges can succeed even when passed incorrect CVC and address information.
             *
             * @param options Options for creating a charge.
             * @param response A callback to receive the response and newly created charge, or errors if they exist.
             */
            create(
                data: charges.IChargeCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<charges.ICharge>,
            ): Promise<charges.ICharge>;
            create(
                data: charges.IChargeCreationOptions,
                response?: IResponseFn<charges.ICharge>,
            ): Promise<charges.ICharge>;

            /**
             * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned
             * from your previous request, and Stripe will return the corresponding charge information. The same information is
             * returned when creating or refunding the charge.
             *
             * @param id The identifier of the charge to be retrieved
             * @param response A callback that takes in a potential error and a charge object.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<charges.ICharge>,
            ): Promise<charges.ICharge>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<charges.ICharge>,
            ): Promise<charges.ICharge>;
            retrieve(id: string, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;

            /**
             * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             * This request accepts only the description, metadata, receipt_email and fraud_details as arguments.
             *
             * @param id The identifier of the charge to be updated
             * @param data An object containing the updated properties.
             */
            update(
                id: string,
                data: charges.IChargeUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<charges.ICharge>,
            ): Promise<charges.ICharge>;
            update(
                id: string,
                data: charges.IChargeUpdateOptions,
                response?: IResponseFn<charges.ICharge>,
            ): Promise<charges.ICharge>;

            /**
             * Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first
             * you created a charge with the capture option set to false. Uncaptured payments expire exactly seven days after they are
             * created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.
             */
            capture(
                id: string,
                data?: charges.IChargeCaptureOptions,
                options?: HeaderOptions,
                response?: IResponseFn<charges.ICharge>,
            ): Promise<charges.ICharge>;

            /**
             * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges
             * appearing first.
             *
             * @returns An object with a data property that contains an array of up to limit charges, starting after charge starting_after.
             * Each entry in the array is a separate charge object. If no more charges are available, the resulting array will be empty.
             * If you provide a non-existent customer ID, this call throws an error. You can optionally request that the response include
             * the total count of all charges that match your filters. To do so, specify include[]=total_count in your request.
             *
             * @param data Filtering options for the returned items.
             */
            list(
                data: charges.IChargeListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<charges.ICharge>>,
            ): IListPromise<charges.ICharge>;
            list(
                data: charges.IChargeListOptions,
                response?: IResponseFn<IList<charges.ICharge>>,
            ): IListPromise<charges.ICharge>;
            list(options: HeaderOptions, response?: IResponseFn<IList<charges.ICharge>>): IListPromise<charges.ICharge>;
            list(response?: IResponseFn<IList<charges.ICharge>>): IListPromise<charges.ICharge>;

            /**
             * When you create a new refund, you must specify a charge to create it on.
             * Creating a new refund will refund a charge that has previously been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged. The fees you were originally charged are also refunded.
             * You can optionally refund only part of a charge. You can do so as many times as you wish until the entire charge has been refunded.
             * Once entirely refunded, a charge can't be refunded again. This method will throw an error when called on an already-refunded charge, or when trying to refund more money than is left on a charge.
             */
            refund(
                chargeId: string,
                data: refunds.IRefundCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            refund(
                chargeId: string,
                data: refunds.IRefundCreationOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            refund(
                chargeId: string,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            refund(chargeId: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * When you create a new refund, you must specify a charge to create it on. Creating a new refund will refund a charge that has previously
             * been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged. The fees you were
             * originally charged are also refunded. You can optionally refund only part of a charge. You can do so as many times as you wish until
             * the entire charge has been refunded. Once entirely refunded, a charge can't be refunded again. This method will throw an error when
             * called on an already-refunded charge, or when trying to refund more money than is left on a charge.
             *
             * @returns Returns the refund object if the refund succeeded. Throws an error if the charge has already been refunded or an invalid
             * charge identifier was provided.
             *
             * @param id The identifier of the charge to be refunded.
             * @param data Options for specifying reasons and refund amount
             * @param response The refund.
             *
             * @deprecated According to source code (https://github.com/stripe/stripe-node/blob/master/lib/resources/Charges.js#L43)
             */
            createRefund(
                id: string,
                data: refunds.IRefundCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            createRefund(
                id: string,
                data: refunds.IRefundCreationOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            createRefund(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            createRefund(id: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * By default, you can see the 10 most recent refunds stored directly on the charge object, but you can also retrieve details about a specific
             * refund stored on the charge.
             *
             * @param chargeId The ID of the charge refunded
             * @param refundId The ID of the refund to retrieve
             */
            retrieveRefund(
                chargeId: string,
                refundId: string,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            retrieveRefund(
                chargeId: string,
                refundId: string,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;

            /**
             * Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             * This request only accepts metadata as an argument.
             *
             * @param chargeId The ID of the charge refunded
             * @param refundId The ID of the refund to update
             */
            updateRefund(
                chargeId: string,
                refundId: string,
                data: IDataOptionsWithMetadata,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            updateRefund(
                chargeId: string,
                refundId: string,
                data: IDataOptionsWithMetadata,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;

            /**
             * You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on
             * the charge object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through
             * additional refunds.
             *
             * @returns A object with a data property that contains an array of up to limit refunds, starting after refund starting_after.
             * Each entry in the array is a separate refund object. If no more refunds are available, the resulting array will be empty. If you provide
             * a non-existent customer ID or charge ID, this call throws an error. You can optionally request that the response include the total count
             * of all refunds that match your filters. To do so, specify include[]=total_count in your request.
             *
             * @param chargeId The ID of the charge refunded
             * @param data Used to filter the refunds returned
             */
            listRefunds(
                chargeId: string,
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<refunds.IRefund>>,
            ): IListPromise<refunds.IRefund>;
            listRefunds(
                chargeId: string,
                data: IListOptions,
                response?: IResponseFn<IList<refunds.IRefund>>,
            ): IListPromise<refunds.IRefund>;
            listRefunds(
                chargeId: string,
                options: HeaderOptions,
                response?: IResponseFn<IList<refunds.IRefund>>,
            ): IListPromise<refunds.IRefund>;
            listRefunds(
                chargeId: string,
                response?: IResponseFn<IList<refunds.IRefund>>,
            ): IListPromise<refunds.IRefund>;

            markAsSafe(chargeId: string, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;

            markAsFraudulent(chargeId: string, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;
        }

        class ChargeRefunds extends StripeResource {
            /**
             * When you create a new refund, you must specify a charge to create it on.
             *
             * Creating a new refund will refund a charge that has previously been created but not yet refunded.
             * Funds will be refunded to the credit or debit card that was originally charged.
             * The fees you were originally charged are also refunded.
             *
             * You can optionally refund only part of a charge.
             * You can do so as many times as you wish until the entire charge has been refunded.
             *
             * Once entirely refunded, a charge can't be refunded again.
             * This method will throw an error when called on an already-refunded charge, or when trying to refund more money than is left on a charge.
             */
            create?(
                data: refunds.IRefundCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            create?(
                data: refunds.IRefundCreationOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            create?(options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            create?(response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * Retrieves the details of an existing refund.
             */
            retrieve?(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            retrieve?(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            retrieve?(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            retrieve?(id: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * Updates the specified refund by setting the values of the parameters passed.
             * Any parameters not provided will be left unchanged.
             *
             * This request only accepts metadata as an argument.
             */
            update?(
                id: string,
                data: IDataOptionsWithMetadata,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            update?(
                id: string,
                data: IDataOptionsWithMetadata,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;

            /**
             * Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order,
             * with the most recent refunds appearing first.
             * For convenience, the 10 most recent refunds are always available by default on the charge object.
             */
            list?(
                data: refunds.IRefundListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<refunds.IRefund>>,
            ): IListPromise<refunds.IRefund>;
            list?(
                data: refunds.IRefundListOptions,
                response?: IResponseFn<IList<refunds.IRefund>>,
            ): IListPromise<refunds.IRefund>;
            list?(
                options: HeaderOptions,
                response?: IResponseFn<IList<refunds.IRefund>>,
            ): IListPromise<refunds.IRefund>;
            list?(response?: IResponseFn<IList<refunds.IRefund>>): IListPromise<refunds.IRefund>;
        }

        class Coupons extends StripeResource {
            /**
             * You can create coupons easily via the coupon management page of the Stripe dashboard. Coupon creation is also accessible via the API if
             * you need to create coupons on the fly. A coupon has either a percent_off or an amount_off and currency. If you set an amount_off, that
             * amount will be subtracted from any invoice's subtotal. For example, an invoice with a subtotal of $10 will have a final total of $0 if
             * a coupon with an amount_off of 2000 is applied to it and an invoice with a subtotal of $30 will have a final total of $10 if a coupon
             * with an amount_off of 2000 is applied to it.
             *
             * @returns Returns the coupon object.
             *
             * @param data Options for creating the coupon.
             */
            create(
                data: coupons.ICouponCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<coupons.ICoupon>,
            ): Promise<coupons.ICoupon>;
            create(
                data: coupons.ICouponCreationOptions,
                response?: IResponseFn<coupons.ICoupon>,
            ): Promise<coupons.ICoupon>;

            /**
             * Retrieves the coupon with the given ID.
             *
             * @returns Returns a coupon if a valid coupon ID was provided. Throws an error otherwise.
             *
             * @param id The ID of the desired coupon
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<coupons.ICoupon>,
            ): Promise<coupons.ICoupon>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<coupons.ICoupon>,
            ): Promise<coupons.ICoupon>;
            retrieve(id: string, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;

            /**
             * Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.
             *
             * @returns The newly updated coupon object if the call succeeded. Otherwise, this call throws an error, such as if the coupon has
             * been deleted.
             *
             * @param id The ID of the coupon to be updated
             * @param data Metadata to update
             */
            update(
                id: string,
                data: IDataOptionsWithMetadata,
                options: HeaderOptions,
                response?: IResponseFn<coupons.ICoupon>,
            ): Promise<coupons.ICoupon>;
            update(
                id: string,
                data: IDataOptionsWithMetadata,
                response?: IResponseFn<coupons.ICoupon>,
            ): Promise<coupons.ICoupon>;

            /**
             * You can delete coupons via the coupon management page of the Stripe dashboard. However, deleting a coupon does not affect any
             * customers who have already applied the coupon; it means that new customers can't redeem the coupon. You can also delete coupons
             * via the API.
             *
             * @returns An object with the deleted coupon's ID and a deleted flag upon success. Otherwise, this call throws an error, such as
             * if the coupon has already been deleted.
             *
             * @param id The ID of the coupon to be deleted.
             */
            del(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            del(id: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;

            /**
             * Returns a list of your coupons.
             *
             * @returns A object with a data property that contains an array of up to limit coupons, starting after coupon starting_after. Each
             * entry in the array is a separate coupon object. If no more coupons are available, the resulting array will be empty. This request
             * should never throw an error. You can optionally request that the response include the total count of all coupons. To do so, specify
             * include[]=total_count in your request.
             *
             * @param data Filtering options for the list.
             */
            list(
                data: IListOptionsCreated,
                options: HeaderOptions,
                response?: IResponseFn<IList<coupons.ICoupon>>,
            ): IListPromise<coupons.ICoupon>;
            list(
                data: IListOptionsCreated,
                response?: IResponseFn<IList<coupons.ICoupon>>,
            ): IListPromise<coupons.ICoupon>;
            list(options: HeaderOptions, response?: IResponseFn<IList<coupons.ICoupon>>): IListPromise<coupons.ICoupon>;
            list(response?: IResponseFn<IList<coupons.ICoupon>>): IListPromise<coupons.ICoupon>;
        }

        class CreditNotes extends StripeResource {
            /**
             * A credit note can be issued for open and paid invoices.
             * When issued for an open invoice, a credit note decreases the invoice’s amount due.
             * When issued for a paid invoice, it is commonly used to refund or credit a specified amount to the customer.
             */
            create(
                data: creditNotes.ICreditNoteCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<creditNotes.ICreditNote>,
            ): Promise<creditNotes.ICreditNote>;
            create(
                data: creditNotes.ICreditNoteCreationOptions,
                response?: IResponseFn<creditNotes.ICreditNote>,
            ): Promise<creditNotes.ICreditNote>;

            /**
             * Retrieves the credit note with the given ID.
             */
            retrieve(
                creditNoteId: string,
                options: HeaderOptions,
                response?: IResponseFn<creditNotes.ICreditNote>,
            ): Promise<creditNotes.ICreditNote>;
            retrieve(
                creditNoteId: string,
                response?: IResponseFn<creditNotes.ICreditNote>,
            ): Promise<creditNotes.ICreditNote>;

            /**
             * Updates the memo or metadata on the credit note.
             */
            update(
                creditNoteId: string,
                data: creditNotes.ICreditNoteUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<creditNotes.ICreditNote>,
            ): Promise<creditNotes.ICreditNote>;
            update(
                creditNoteId: string,
                data: creditNotes.ICreditNoteUpdateOptions,
                response?: IResponseFn<creditNotes.ICreditNote>,
            ): Promise<creditNotes.ICreditNote>;

            /**
             * Returns a list of your credit notes. Credit notes are returned sorted by creation date, with the most recently created credit note
             * items appearing first.
             */
            list(
                data: creditNotes.ICreditNoteListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<creditNotes.ICreditNote>>,
            ): Promise<IList<creditNotes.ICreditNote>>;
            list(
                data: creditNotes.ICreditNoteListOptions,
                response?: IResponseFn<IList<creditNotes.ICreditNote>>,
            ): Promise<IList<creditNotes.ICreditNote>>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<creditNotes.ICreditNote>>,
            ): Promise<IList<creditNotes.ICreditNote>>;
            list(response?: IResponseFn<IList<creditNotes.ICreditNote>>): Promise<IList<creditNotes.ICreditNote>>;

            /**
             * Marks a credit note as void. Voiding a credit note reverses its adjustment. Voiding is only possible on open invoices.
             */
            voidCreditNote(
                creditNoteId: string,
                options: HeaderOptions,
                response?: IResponseFn<creditNotes.ICreditNote>,
            ): Promise<creditNotes.ICreditNote>;
            voidCreditNote(
                creditNoteId: string,
                response?: IResponseFn<creditNotes.ICreditNote>,
            ): Promise<creditNotes.ICreditNote>;
        }

        class CustomerCards extends StripeResource {
            /**
             * When you create a new credit card, you must specify a customer or recipient to create it on. If the card's owner has no default card,
             * then the new card will become the default. However, if the owner already has a default then it will not change. To change the default,
             * you should either update the customer to have a new default_source or update the recipient to have a new default_card.
             *
             * @returns Returns the card object.
             */
            create(
                data: {
                    card?: string | cards.ICardSourceCreationOptionsExtended;
                },
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            create(
                data: {
                    card?: string | cards.ICardSourceCreationOptionsExtended;
                },
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;

            /**
             * You can see a list of the cards belonging to a customer or recipient. Note that the 10 most recent
             * cards are always available by default on the customer or recipient object. If you need more than
             * those 10, you can use this API method and the limit and starting_after parameters to page through
             * additional cards.
             *
             * @returns Returns a list of the cards stored on the customer or recipient. You can optionally request
             * that the response include the total count of all cards for the customer or recipient. To do so,
             * specify include[]=total_count in your request.
             * @param data Filtering options
             */
            list(
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<cards.ICard>>,
            ): IListPromise<cards.ICard>;
            list(data: IListOptions, response?: IResponseFn<IList<cards.ICard>>): IListPromise<cards.ICard>;
            list(options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>): IListPromise<cards.ICard>;
            list(response?: IResponseFn<IList<cards.ICard>>): IListPromise<cards.ICard>;

            /**
             * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
             * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
             * interruption. When you update a card, Stripe will automatically validate the card.
             *
             * @returns Returns the card object.
             *
             * @param cardId The ID of the card to be retrieved.
             */
            update(
                cardId: string,
                data: cards.ICardUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            update(
                cardId: string,
                data: cards.ICardUpdateOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;

            /**
             * By default, you can see the 10 most recent cards stored on a customer or recipient directly on the customer or recipient object, but
             * you can also retrieve details about a specific card stored on the customer or recipient.
             *
             * @returns Returns the card object.
             *
             * @param cardId The ID of the card to be retrieved.
             */
            retrieve(cardId: string, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            retrieve(cardId: string, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

            /**
             * You can delete cards from a customer or recipient. If you delete a card that is currently the
             * default source on a customer, then the most recently added source will become the new default.
             * If you delete a card that is the last remaining source on the customer then the default_source
             * attribute will become null. Similarly, if you delete the default card on a recipient, then the
             * most recently added card will become the new default. If you delete the last remaining card on
             * a recipient, then the default_card attribute will become null. Note that for cards belonging to
             * customers, you may want to prevent customers on paid subscriptions from deleting all cards on
             * file so that there is at least one default card for the next invoice payment attempt.
             *
             * @returns Returns the deleted card object.
             *
             * @param cardId The ID of the card to be retrieved.
             */
            del(
                cardId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            del(cardId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
        }

        class Customers extends StripeResource {
            /**
             * Creates a new customer object.
             *
             * @returns Returns a customer object if the call succeeded. The returned object will have information about subscriptions, discount,
             * and payment sources, if that information has been provided. If a non-free plan is specified and a source is not provided (unless
             * the plan has a trial period), the call will throw an error. If a non-existent plan or a non-existent or expired coupon is provided,
             * the call will throw an error. If a source has been attached to the customer, the returned customer object will have a default_source
             * attribute, which is an ID that can be expanded into the full source details when retrieving the customer.
             *
             * @param data The options for the new customer
             */
            create(
                data: customers.ICustomerCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<customers.ICustomer>,
            ): Promise<customers.ICustomer>;
            create(
                data: customers.ICustomerCreationOptions,
                response?: IResponseFn<customers.ICustomer>,
            ): Promise<customers.ICustomer>;

            /**
             * Returns a list of your customers. The customers are returned sorted by creation date, with the most recently created customers
             * appearing first.
             *
             * @returns A object with a data property that contains an array of up to limit customers, starting after customer starting_after.
             * Each entry in the array is a separate customer object. If no more customers are available, the resulting array will be empty.
             * This request should never throw an error. You can optionally request that the response include the total count of all customers
             * that match your filters. To do so, specify include[]=total_count in your request.
             *
             * @param data Allows you to filter the customers you want.
             */
            list(
                data: customers.ICustomerListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<customers.ICustomer>>,
            ): IListPromise<customers.ICustomer>;
            list(
                data: customers.ICustomerListOptions,
                response?: IResponseFn<IList<customers.ICustomer>>,
            ): IListPromise<customers.ICustomer>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<customers.ICustomer>>,
            ): IListPromise<customers.ICustomer>;
            list(response?: IResponseFn<IList<customers.ICustomer>>): IListPromise<customers.ICustomer>;

            /**
             * Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             * For example, if you pass the card parameter, that becomes the customer's active card to be used for all charges in the future.
             * When you update a customer to a new valid card: for each of the customer's current subscriptions, if the subscription is in the
             * past_due state, then the latest unpaid, unclosed invoice for the subscription will be retried (note that this retry will not count
             * as an automatic retry, and will not affect the next regularly scheduled payment for the invoice). (Note also that no invoices
             * pertaining to subscriptions in the unpaid state, or invoices pertaining to canceled subscriptions, will be retried as a result
             * of updating the customer's card.) This request accepts mostly the same arguments as the customer creation call.
             *
             * @returns Returns the customer object if the update succeeded. Throws an error if update parameters are invalid (e.g. specifying
             * an invalid coupon or an invalid card).
             *
             * @param id The identifier of the customer to be retrieved.
             */
            update(
                id: string,
                data: customers.ICustomerUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<customers.ICustomer>,
            ): Promise<customers.ICustomer>;
            update(
                id: string,
                data: customers.ICustomerUpdateOptions,
                response?: IResponseFn<customers.ICustomer>,
            ): Promise<customers.ICustomer>;

            /**
             * Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer
             * creation.
             *
             * @returns Returns a customer object if a valid identifier was provided. When requesting the ID of a customer that has been deleted,
             * a subset of the customer's information will be returned, including a "deleted" property, which will be true.
             *
             * @param id The identifier of the customer to be retrieved.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<customers.ICustomer>,
            ): Promise<customers.ICustomer>;
            retrieve(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<customers.ICustomer>,
            ): Promise<customers.ICustomer>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<customers.ICustomer>,
            ): Promise<customers.ICustomer>;
            retrieve(id: string, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;

            /**
             * Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.
             *
             * @returns Returns an object with a deleted parameter on success. If the customer ID does not exist, this call throws an error. Unlike
             * other objects, deleted customers can still be retrieved through the API, in order to be able to track the history of customers while
             * still removing their credit card details and preventing any further operations to be performed (such as adding a new subscription).
             *
             * @param id The identifier of the customer to be deleted.
             */
            del(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            del(id: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;

            /**
             * When you create a new credit card, you must specify a customer or recipient to create it on. If the card's owner has no default card,
             * then the new card will become the default. However, if the owner already has a default then it will not change. To change the default,
             * you should either update the customer to have a new default_source or update the recipient to have a new default_card.
             *
             * @returns Returns the card object.
             *
             * @param customerId The customer ID to which to add the card.
             *
             * @deprecated
             */
            createCard(
                customerId: string,
                data: {
                    card?: string | cards.ICardSourceCreationOptionsExtended;
                },
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            createCard(
                customerId: string,
                data: {
                    card?: string | cards.ICardSourceCreationOptionsExtended;
                },
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;

            /**
             * By default, you can see the 10 most recent cards stored on a customer or recipient directly on the customer or recipient object, but
             * you can also retrieve details about a specific card stored on the customer or recipient.
             *
             * @returns Returns the card object.
             *
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param cardId The ID of the card to be retrieved.
             */
            retrieveCard(
                customerId: string,
                cardId: string,
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            retrieveCard(customerId: string, cardId: string, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

            /**
             * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
             * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
             * interruption. When you update a card, Stripe will automatically validate the card.
             *
             * @returns Returns the card object.
             *
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param cardId The ID of the card to be retrieved.
             */
            updateCard(
                customerId: string,
                cardId: string,
                data: cards.ICardUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            updateCard(
                customerId: string,
                cardId: string,
                data: cards.ICardUpdateOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;

            /**
             * You can delete cards from a customer or recipient. If you delete a card that is currently the
             * default source on a customer, then the most recently added source will become the new default.
             * If you delete a card that is the last remaining source on the customer then the default_source
             * attribute will become null. Similarly, if you delete the default card on a recipient, then the
             * most recently added card will become the new default. If you delete the last remaining card on
             * a recipient, then the default_card attribute will become null. Note that for cards belonging to
             * customers, you may want to prevent customers on paid subscriptions from deleting all cards on
             * file so that there is at least one default card for the next invoice payment attempt.
             *
             * @returns Returns the deleted card object.
             *
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param cardId The ID of the card to be retrieved.
             */
            deleteCard(
                customerId: string,
                cardId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            deleteCard(
                customerId: string,
                cardId: string,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;

            /**
             * You can see a list of the cards belonging to a customer or recipient. Note that the 10 most recent
             * cards are always available by default on the customer or recipient object. If you need more than
             * those 10, you can use this API method and the limit and starting_after parameters to page through
             * additional cards.
             *
             * @returns Returns a list of the cards stored on the customer or recipient. You can optionally request
             * that the response include the total count of all cards for the customer or recipient. To do so,
             * specify include[]=total_count in your request.
             *
             * @param customerId The ID of the customer whose cards will be retrieved
             * @param data Filtering options
             */
            listCards(
                customerId: string,
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<cards.ICard>>,
            ): IListPromise<cards.ICard>;
            listCards(
                customerId: string,
                data: IListOptions,
                response?: IResponseFn<IList<cards.ICard>>,
            ): IListPromise<cards.ICard>;
            listCards(
                customerId: string,
                options: HeaderOptions,
                response?: IResponseFn<IList<cards.ICard>>,
            ): IListPromise<cards.ICard>;
            listCards(customerId: string, response?: IResponseFn<IList<cards.ICard>>): IListPromise<cards.ICard>;

            /**
             * When adding a bank account to a customer, the parameter name is source. When
             * adding to an account, the parameter name is external_account. The
             * value can either be a token, like the ones returned by our Stripe.js, or a
             * dictionary containing a user’s bank account details.
             *
             * @returns Returns the bank account object.
             *
             * @param customerId The customer ID to which to add the bank account.
             */
            createSource(
                customerId: string,
                data: customers.ICustomerBankAccountSourceCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<bankAccounts.IBankAccount>,
            ): Promise<bankAccounts.IBankAccount>;
            createSource(
                customerId: string,
                data: customers.ICustomerBankAccountSourceCreationOptions,
                response?: IResponseFn<bankAccounts.IBankAccount>,
            ): Promise<bankAccounts.IBankAccount>;
            /**
             * When adding a card to a customer, the parameter name is source. When
             * adding to an account, the parameter name is external_account. The
             * value can either be a token, like the ones returned by our Stripe.js, or a
             * dictionary containing a user's credit card details.
             * Stripe will automatically validate the card.
             *
             * @returns Returns the card object.
             *
             * @param customerId The customer ID to which to add the card.
             */
            createSource(
                customerId: string,
                data: customers.ICustomerCardSourceCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            createSource(
                customerId: string,
                data: customers.ICustomerCardSourceCreationOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            /**
             * When adding a card or bank account to a customer, the parameter name is source. When
             * adding to an account, the parameter name is external_account. The
             * value can either be a token, like the ones returned by our Stripe.js, or a
             * dictionary containing a user’s credit card or bank account details.
             * Stripe will automatically validate the card.
             *
             * @returns Returns the card or bank account object.
             *
             * @param customerId The customer ID to which to add the card or bank account.
             */
            createSource(
                customerId: string,
                data: customers.ICustomerSourceCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<IStripeSource>,
            ): Promise<IStripeSource>;
            createSource(
                customerId: string,
                data: customers.ICustomerSourceCreationOptions,
                response?: IResponseFn<IStripeSource>,
            ): Promise<IStripeSource>;

            /**
             * You can see a list of the cards belonging to a customer or recipient. Note that the 10 most recent
             * cards are always available by default on the customer or recipient object. If you need more than
             * those 10, you can use this API method and the limit and starting_after parameters to page through
             * additional cards.
             *
             * @returns Returns a list of the cards stored on the customer or recipient. You can optionally request
             * that the response include the total count of all cards for the customer or recipient. To do so,
             * specify include[]=total_count in your request.
             *
             * @param customerId The ID of the customer whose cards will be retrieved
             * @param data Filtering options
             */
            listSources(
                customerId: string,
                data: customers.ICardSourceListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<cards.ICard>>,
            ): IListPromise<cards.ICard>;
            listSources(
                customerId: string,
                data: customers.ICardSourceListOptions,
                response?: IResponseFn<IList<cards.ICard>>,
            ): IListPromise<cards.ICard>;
            /**
             * You can see a list of the bank accounts belonging to a customer or recipient. Note that the 10 most recent
             * bank accounts are always available by default on the customer or recipient object. If you need more than
             * those 10, you can use this API method and the limit and starting_after parameters to page through
             * additional cards.
             *
             * @returns Returns a list of the bank accounts stored on the customer or recipient. You can optionally request
             * that the response include the total count of all bank accounts for the customer or recipient. To do so,
             * specify include[]=total_count in your request.
             *
             * @param customerId The ID of the customer whose cards will be retrieved
             * @param data Filtering options
             */
            listSources(
                customerId: string,
                data: customers.IBankAccountSourceListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<bankAccounts.IBankAccount>>,
            ): IListPromise<bankAccounts.IBankAccount>;
            listSources(
                customerId: string,
                data: customers.IBankAccountSourceListOptions,
                response?: IResponseFn<IList<bankAccounts.IBankAccount>>,
            ): IListPromise<bankAccounts.IBankAccount>;

            listSources(
                customerId: string,
                data: customers.ISourceListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<sources.ISource>>,
            ): IListPromise<sources.ISource>;
            listSources(
                customerId: string,
                data: customers.ISourceListOptions,
                response?: IResponseFn<IList<sources.ISource>>,
            ): IListPromise<sources.ISource>;

            /**
             * By default, you can see the 10 most recent cards/bank accounts stored on a customer or recipient directly on the customer or recipient object, but
             * you can also retrieve details about a specific card/bank account stored on the customer or recipient.
             *
             * @returns Returns the card/bank account object.
             *
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param sourceId The ID of the source to be retrieved.
             */
            retrieveSource(
                customerId: string,
                sourceId: string,
                options: HeaderOptions,
                response?: IResponseFn<IStripeSource>,
            ): Promise<IStripeSource>;
            retrieveSource(
                customerId: string,
                sourceId: string,
                response?: IResponseFn<IStripeSource>,
            ): Promise<IStripeSource>;

            /**
             * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
             * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
             * interruption. When you update a card, Stripe will automatically validate the card.
             *
             * @returns Returns the card object.
             *
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param sourceId The ID of the card to be retrieved.
             */
            updateSource(
                customerId: string,
                sourceId: string,
                data: cards.ICardUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;
            updateSource(
                customerId: string,
                sourceId: string,
                data: cards.ICardUpdateOptions,
                response?: IResponseFn<cards.ICard>,
            ): Promise<cards.ICard>;

            /**
             * Updates the metadata, account_holder_name, and account_holder_type of a bank account belonging to a Customer. Other bank account details
             * are not editable by design.
             *
             * @returns Returns the bank account object.
             *
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param sourceId The ID of the bank account to be updated.
             */
            updateSource(
                customerId: string,
                sourceId: string,
                data: bankAccounts.IBankAccountUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<bankAccounts.IBankAccount>,
            ): Promise<bankAccounts.IBankAccount>;
            updateSource(
                customerId: string,
                sourceId: string,
                data: bankAccounts.IBankAccountUpdateOptions,
                response?: IResponseFn<bankAccounts.IBankAccount>,
            ): Promise<bankAccounts.IBankAccount>;

            /**
             * You can delete cards or bank accounts from a customer or recipient. If you delete a card or bank account that is currently the
             * default source on a customer, then the most recently added source will become the new default.
             * If you delete a card or bank account that is the last remaining source on the customer then the default_source
             * attribute will become null. Similarly, if you delete the default card or bank account on a recipient, then the
             * most recently added source will become the new default. If you delete the last remaining source on
             * a recipient, then the default_card attribute will become null. Note that for sources belonging to
             * customers, you may want to prevent customers on paid subscriptions from deleting all sources on
             * file so that there is at least one default source for the next invoice payment attempt.
             *
             * @returns Returns a confirmation object.
             *
             * @param customerId The ID of the customer whose source needs to be deleted.
             * @param sourceId The ID of the source to be deleted.
             */
            deleteSource(
                customerId: string,
                sourceId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            deleteSource(
                customerId: string,
                sourceId: string,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;

            /**
             * A customer's bank account must first be verified before it can be charged. Stripe supports instant verification using Plaid for many of
             * the most popular banks. If your customer's bank is not supported or you do not wish to integrate with Plaid, you must manually verify
             * the customer's bank account using the API.
             *
             * @returns Returns the bank account object.
             *
             * @param customerId The ID of the customer whose source needs to be verified.
             * @param sourceId The ID of the source to be verified.
             */
            verifySource(
                customerId: string,
                sourceId: string,
                data: bankAccounts.IBankAccountVerifyOptions,
                options: HeaderOptions,
            ): Promise<bankAccounts.IBankAccount>;
            verifySource(
                customerId: string,
                sourceId: string,
                data: bankAccounts.IBankAccountVerifyOptions,
            ): Promise<bankAccounts.IBankAccount>;

            /**
             * Creates a new subscription on an existing customer.
             *
             * @returns The newly created subscription object if the call succeeded. If the customer has no card or the
             * attempted charge fails, this call throws an error (unless the specified plan is free or has a trial
             * period).
             *
             * @param customerId The customer to which the add the subscription.
             * @param options The options for the new subscription
             */
            createSubscription(
                customerId: string,
                data: subscriptions.ISubscriptionCustCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            createSubscription(
                customerId: string,
                data: subscriptions.ISubscriptionCustCreationOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;

            /**
             * By default, you can see the 10 most recent active subscriptions stored on a customer directly on the customer
             * object, but you can also retrieve details about a specific active subscription for a customer.
             *
             * @returns Returns the subscription object.
             *
             * @param customerId The customer ID for the subscription
             * @param subscriptionId The ID of the subscription to retrieve
             */
            retrieveSubscription(
                customerId: string,
                subscriptionId: string,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            retrieveSubscription(
                customerId: string,
                subscriptionId: string,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;

            /**
             * Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities,
             * we will optionally prorate the price we charge next month to make up for any price changes.
             *
             * By default, we prorate subscription changes. For example, if a customer signs up on May 1 for a $10 plan, she'll be billed
             * $10 immediately. If she then switches to a $20 plan on May 15, on June 1 she'll be billed $25 ($20 for a renewal of her
             * subscription and a $5 prorating adjustment for the previous month). Similarly, a downgrade will generate a credit to be
             * applied to the next invoice. We also prorate when you make quantity changes. Switching plans does not change the billing
             * date or generate an immediate charge unless you're switching between different intervals (e.g. monthly to yearly), in which
             * case we apply a credit for the time unused on the old plan and charge for the new plan starting right away, resetting the
             * billing date. (Note that if we charge for the new plan, and that payment fails, the plan change will not go into effect). If
             * you'd like to charge for an upgrade immediately, just pass prorate as true as usual, and then invoice the customer as soon
             * as you make the subscription change. That'll collect the proration adjustments into a new invoice, and Stripe will automatically
             * attempt to pay the invoice. If you don't want to prorate at all, set the prorate option to false and the customer would be billed
             * $10 on May 1 and $20 on June 1. Similarly, if you set prorate to false when switching between different billing intervals
             * (monthly to yearly, for example), we won't generate any credits for the old subscription's unused time, although we will still
             * reset the billing date and bill immediately for the new subscription.
             *
             * @returns The newly updated subscription object if the call succeeded. If a charge is required for the update, and
             * the charge fails, this call raises throws an error, and the subscription update does not go into effect.
             *
             * @param customerId The ID of the customer whose subscription needs to be updated.
             * @param subscriptionId The ID of the subscription to update.
             * @param data The fields to update
             */
            updateSubscription(
                customerId: string,
                subscriptionId: string,
                data: subscriptions.ISubscriptionUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            updateSubscription(
                customerId: string,
                subscriptionId: string,
                data: subscriptions.ISubscriptionUpdateOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;

            /**
             * Cancels a customer's subscription. If you set the at_period_end parameter to true, the subscription will remain active until
             * the end of the period, at which point it will be canceled and not renewed. By default, the subscription is terminated
             * immediately. In either case, the customer will not be charged again for the subscription. Note, however, that any pending
             * invoice items that you've created will still be charged for at the end of the period unless manually deleted. If you've set
             * the subscription to cancel at period end, any pending prorations will also be left in place and collected at the end of the
             * period, but if the subscription is set to cancel immediately, pending prorations will be removed. By default, all unpaid
             * invoices for the customer will be closed upon subscription cancellation. We do this in order to prevent unexpected payment
             * retries once the customer has canceled a subscription. However, you can reopen the invoices manually after subscription
             * cancellation to have us proceed with automatic retries, or you could even re-attempt payment yourself on all unpaid invoices
             * before allowing the customer to cancel the subscription at all.
             *
             * @returns The canceled subscription object. Its subscription status will be set to "canceled" unless you've set at_period_end
             * to true when canceling, in which case the status will remain "active" but the cancel_at_period_end attribute will change to true.
             *
             * @param customerId The ID of the customer whose subscription needs to be cancelled.
             * @param subscriptionId The ID of the subscription to cancel.
             * @param data Specify when to cancel the subscription
             */
            cancelSubscription(
                customerId: string,
                subscriptionId: string,
                data: subscriptions.ISubscriptionCancellationOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            cancelSubscription(
                customerId: string,
                subscriptionId: string,
                data: subscriptions.ISubscriptionCancellationOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            cancelSubscription(
                customerId: string,
                subscriptionId: string,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;

            /**
             * You can see a list of the customer's active subscriptions. Note that the 10 most recent active subscriptions are always available
             * by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page
             * through additional subscriptions.
             *
             * @returns Returns a list of the customer's active subscriptions. You can optionally request that the response include the total
             * count of all subscriptions for the customer. To do so, specify include[]=total_count in your request.
             *
             * @param customerId The ID of the customer whose subscriptions will be retrieved
             * @param data Filtering options
             */
            listSubscriptions(
                customerId: string,
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<subscriptions.ISubscription>>,
            ): IListPromise<subscriptions.ISubscription>;
            listSubscriptions(
                customerId: string,
                data: IListOptions,
                response?: IResponseFn<IList<subscriptions.ISubscription>>,
            ): IListPromise<subscriptions.ISubscription>;
            listSubscriptions(
                customerId: string,
                options: HeaderOptions,
                response?: IResponseFn<IList<subscriptions.ISubscription>>,
            ): IListPromise<subscriptions.ISubscription>;
            listSubscriptions(
                customerId: string,
                response?: IResponseFn<IList<subscriptions.ISubscription>>,
            ): IListPromise<subscriptions.ISubscription>;

            /**
             * Removes the currently applied discount on a customer.
             *
             * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no
             * discount exists on this customer.
             *
             * @param customerId The ID of the customer.
             */
            deleteDiscount(
                customerId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            deleteDiscount(
                customerId: string,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;

            /**
             * Removes the currently applied discount on a subscription.
             *
             * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no
             * discount exists on this subscription.
             *
             * @param customerId The ID of the customer.
             * @param subscriptionId The ID of the subscription.
             */
            deleteSubscriptionDiscount(
                customerId: string,
                subscriptionId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            deleteSubscriptionDiscount(
                customerId: string,
                subscriptionId: string,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;

            createTaxId(
                customerId: string,
                data: customerTaxIds.ITaxIdCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<customerTaxIds.ITaxId>;
            createTaxId(
                customerId: string,
                data: customerTaxIds.ITaxIdCreationOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<customerTaxIds.ITaxId>;

            listTaxIds(
                customerId: string,
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<sources.ISource>>,
            ): IListPromise<sources.ISource>;
            listTaxIds(
                customerId: string,
                data: IListOptions,
                response?: IResponseFn<IList<sources.ISource>>,
            ): IListPromise<sources.ISource>;
            listTaxIds(
                customerId: string,
                options: HeaderOptions,
                response?: IResponseFn<IList<subscriptions.ISubscription>>,
            ): IListPromise<subscriptions.ISubscription>;
            listTaxIds(
                customerId: string,
                response?: IResponseFn<IList<subscriptions.ISubscription>>,
            ): IListPromise<subscriptions.ISubscription>;

            retrieveTaxId(
                customerId: string,
                taxId: string,
                options: HeaderOptions,
                response?: IResponseFn<IStripeSource>,
            ): Promise<IStripeSource>;
            retrieveTaxId(
                customerId: string,
                taxId: string,
                response?: IResponseFn<IStripeSource>,
            ): Promise<IStripeSource>;

            deleteTaxId(
                customerId: string,
                taxId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            deleteTaxId(
                customerId: string,
                taxId: string,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;

            /**
             * Creates an immutable transaction that updates the customer’s balance.
             */
            createBalanceTransaction(
                customerId: string,
                data: customerBalanceTransactions.ICustomerBalanceTransactionCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<customerBalanceTransactions.ICustomerBalanceTransaction>,
            ): Promise<customerBalanceTransactions.ICustomerBalanceTransaction>;
            createBalanceTransaction(
                customerId: string,
                data: customerBalanceTransactions.ICustomerBalanceTransactionCreationOptions,
                response?: IResponseFn<customerBalanceTransactions.ICustomerBalanceTransaction>,
            ): Promise<customerBalanceTransactions.ICustomerBalanceTransaction>;

            /**
             * Retrieves a specific transaction that updated the customer’s balance.
             */
            retrieveBalanceTransaction(
                customerId: string,
                transactionId: string,
                options: HeaderOptions,
                response?: IResponseFn<customerBalanceTransactions.ICustomerBalanceTransaction>,
            ): Promise<customerBalanceTransactions.ICustomerBalanceTransaction>;
            retrieveBalanceTransaction(
                customerId: string,
                transactionId: string,
                response?: IResponseFn<customerBalanceTransactions.ICustomerBalanceTransaction>,
            ): Promise<customerBalanceTransactions.ICustomerBalanceTransaction>;

            /**
             * Most customer balance transaction fields are immutable, but you may update its description and metadata.
             */
            updateBalanceTransaction(
                customerId: string,
                transactionId: string,
                data: customerBalanceTransactions.ICustomerBalanceTransactionUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<customerBalanceTransactions.ICustomerBalanceTransaction>,
            ): Promise<customerBalanceTransactions.ICustomerBalanceTransaction>;
            updateBalanceTransaction(
                customerId: string,
                transactionId: string,
                data: customerBalanceTransactions.ICustomerBalanceTransactionUpdateOptions,
                response?: IResponseFn<customerBalanceTransactions.ICustomerBalanceTransaction>,
            ): Promise<customerBalanceTransactions.ICustomerBalanceTransaction>;

            /**
             * Returns a list of transactions that updated the customer’s balance.
             */
            listBalanceTransactions(
                customerId: string,
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<customerBalanceTransactions.ICustomerBalanceTransaction>>,
            ): IListPromise<customerBalanceTransactions.ICustomerBalanceTransaction>;
            listBalanceTransactions(
                customerId: string,
                data: IListOptions,
                response?: IResponseFn<IList<customerBalanceTransactions.ICustomerBalanceTransaction>>,
            ): IListPromise<customerBalanceTransactions.ICustomerBalanceTransaction>;
            listBalanceTransactions(
                customerId: string,
                options: HeaderOptions,
                response?: IResponseFn<IList<customerBalanceTransactions.ICustomerBalanceTransaction>>,
            ): IListPromise<customerBalanceTransactions.ICustomerBalanceTransaction>;
            listBalanceTransactions(
                customerId: string,
                response?: IResponseFn<IList<customerBalanceTransactions.ICustomerBalanceTransaction>>,
            ): IListPromise<customerBalanceTransactions.ICustomerBalanceTransaction>;
        }

        class SubscriptionsBase extends StripeResource {
            /**
             * By default, you can see the 10 most recent active subscriptions stored on a customer directly on the customer
             * object, but you can also retrieve details about a specific active subscription for a customer.
             *
             * @returns Returns the subscription object.
             *
             * @param subscriptionId The ID of the subscription to retrieve
             */
            retrieve(
                subscriptionId: string,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            retrieve(
                subscriptionId: string,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;

            /**
             * Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities,
             * we will optionally prorate the price we charge next month to make up for any price changes.
             *
             * By default, we prorate subscription changes. For example, if a customer signs up on May 1 for a $10 plan, she'll be billed
             * $10 immediately. If she then switches to a $20 plan on May 15, on June 1 she'll be billed $25 ($20 for a renewal of her
             * subscription and a $5 prorating adjustment for the previous month). Similarly, a downgrade will generate a credit to be
             * applied to the next invoice. We also prorate when you make quantity changes. Switching plans does not change the billing
             * date or generate an immediate charge unless you're switching between different intervals (e.g. monthly to yearly), in which
             * case we apply a credit for the time unused on the old plan and charge for the new plan starting right away, resetting the
             * billing date. (Note that if we charge for the new plan, and that payment fails, the plan change will not go into effect). If
             * you'd like to charge for an upgrade immediately, just pass prorate as true as usual, and then invoice the customer as soon
             * as you make the subscription change. That'll collect the proration adjustments into a new invoice, and Stripe will automatically
             * attempt to pay the invoice. If you don't want to prorate at all, set the prorate option to false and the customer would be billed
             * $10 on May 1 and $20 on June 1. Similarly, if you set prorate to false when switching between different billing intervals
             * (monthly to yearly, for example), we won't generate any credits for the old subscription's unused time, although we will still
             * reset the billing date and bill immediately for the new subscription.
             *
             * @returns The newly updated subscription object if the call succeeded. If a charge is required for the update, and
             * the charge fails, this call raises throws an error, and the subscription update does not go into effect.
             *
             * @param subscriptionId The ID of the subscription to update.
             * @param data The fields to update
             */
            update(
                subscriptionId: string,
                data: subscriptions.ISubscriptionUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            update(
                subscriptionId: string,
                data: subscriptions.ISubscriptionUpdateOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;

            /**
             * Cancels a customer's subscription. If you set the at_period_end parameter to true, the subscription will remain active until
             * the end of the period, at which point it will be canceled and not renewed. By default, the subscription is terminated
             * immediately. In either case, the customer will not be charged again for the subscription. Note, however, that any pending
             * invoice items that you've created will still be charged for at the end of the period unless manually deleted. If you've set
             * the subscription to cancel at period end, any pending prorations will also be left in place and collected at the end of the
             * period, but if the subscription is set to cancel immediately, pending prorations will be removed. By default, all unpaid
             * invoices for the customer will be closed upon subscription cancellation. We do this in order to prevent unexpected payment
             * retries once the customer has canceled a subscription. However, you can reopen the invoices manually after subscription
             * cancellation to have us proceed with automatic retries, or you could even re-attempt payment yourself on all unpaid invoices
             * before allowing the customer to cancel the subscription at all.
             *
             * @returns The canceled subscription object. Its subscription status will be set to "canceled" unless you've set at_period_end
             * to true when canceling, in which case the status will remain "active" but the cancel_at_period_end attribute will change to true.
             *
             * @param subscriptionId The ID of the subscription to cancel.
             * @param data Specify when to cancel the subscription
             */
            del(
                subscriptionId: string,
                data: subscriptions.ISubscriptionCancellationOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            del(
                subscriptionId: string,
                data: subscriptions.ISubscriptionCancellationOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            del(
                subscriptionId: string,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            del(
                subscriptionId: string,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;

            /**
             * You can see a list of the customer's active subscriptions. Note that the 10 most recent active subscriptions are always available
             * by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page
             * through additional subscriptions.
             *
             * @returns Returns a list of the customer's active subscriptions. You can optionally request that the response include the total
             * count of all subscriptions for the customer. To do so, specify include[]=total_count in your request.
             *
             * @param data Filtering options
             */
            list(
                data: subscriptions.ISubscriptionListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<subscriptions.ISubscription>>,
            ): IListPromise<subscriptions.ISubscription>;
            list(
                data: subscriptions.ISubscriptionListOptions,
                response?: IResponseFn<IList<subscriptions.ISubscription>>,
            ): IListPromise<subscriptions.ISubscription>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<subscriptions.ISubscription>>,
            ): IListPromise<subscriptions.ISubscription>;
            list(response?: IResponseFn<IList<subscriptions.ISubscription>>): IListPromise<subscriptions.ISubscription>;

            /**
             * Removes the currently applied discount on a subscription.
             *
             * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no
             * discount exists on this subscription.
             *
             * @param subscriptionId The ID of the subscription.
             */
            deleteDiscount(
                subscriptionId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            deleteDiscount(
                subscriptionId: string,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
        }

        class Subscriptions extends SubscriptionsBase {
            /**
             * Creates a new subscription on an existing customer.
             *
             * @returns The newly created subscription object if the call succeeded. If the customer has no card or the
             * attempted charge fails, this call throws an error (unless the specified plan is free or has a trial
             * period).
             *
             * @param options The options for the new subscription
             */
            create(
                data: subscriptions.ISubscriptionCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            create(
                data: subscriptions.ISubscriptionCreationOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
        }

        class CustomerSubscriptions extends SubscriptionsBase {
            /**
             * Creates a new subscription on an existing customer.
             *
             * @returns The newly created subscription object if the call succeeded. If the customer has no card or the
             * attempted charge fails, this call throws an error (unless the specified plan is free or has a trial
             * period).
             *
             * @param options The options for the new subscription
             */
            create(
                data: subscriptions.ISubscriptionCustCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
            create(
                data: subscriptions.ISubscriptionCustCreationOptions,
                response?: IResponseFn<subscriptions.ISubscription>,
            ): Promise<subscriptions.ISubscription>;
        }

        class SubscriptionItems extends StripeResource {
            /**
             * Adds a new item to an existing subscription. No existing items will be changed or replaced.
             *
             * @returns The created subscription item object is returned if successful. Otherwise, this call throws an error.
             *
             * @param options The options for the new subscription item.
             */
            create(
                data: subscriptionItems.ISubscriptionItemCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;
            create(
                data: subscriptionItems.ISubscriptionItemCreationOptions,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;

            /**
             * Retrieves the subscription item with the given ID.
             *
             * @returns Returns a subscription item if a valid subscription item ID was provided. Throws an error otherwise.
             *
             * @param subscriptionItemId The identifier of the subscription item to retrieve.
             */
            retrieve(
                subscriptionItemId: string,
                options: HeaderOptions,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;
            retrieve(
                subscriptionItemId: string,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;

            /**
             * Updates the plan or quantity of an item on a current subscription.
             *
             * @param subscriptionItemId The identifier of the subscription item to modify.
             * @param data The fields to update
             */
            update(
                subscriptionItemId: string,
                data: subscriptionItems.ISubscriptionItemUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;
            update(
                subscriptionItemId: string,
                data: subscriptionItems.ISubscriptionItemUpdateOptions,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;

            /**
             * Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.
             *
             * @returns An subscription item object with a deleted flag upon success. Otherwise, this call throws an error, such as if the
             * subscription item has already been deleted.
             *
             * @param subscriptionItemId The identifier of the subscription item to delete.
             * @param data Specify whether to prorate and from when.
             */
            del(
                subscriptionItemId: string,
                data: subscriptionItems.ISubscriptionItemDeleteOptions,
                options: HeaderOptions,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;
            del(
                subscriptionItemId: string,
                data: subscriptionItems.ISubscriptionItemDeleteOptions,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;
            del(
                subscriptionItemId: string,
                options: HeaderOptions,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;
            del(
                subscriptionItemId: string,
                response?: IResponseFn<subscriptionItems.ISubscriptionItem>,
            ): Promise<subscriptionItems.ISubscriptionItem>;

            /**
             * Returns a list of your subscription items for a given subscription.
             *
             * @returns Returns a list of your subscription items for a given subscription.
             *
             * @param data Filtering options
             */
            list(
                data: subscriptionItems.ISubscriptionItemListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<subscriptionItems.ISubscriptionItem>>,
            ): IListPromise<subscriptionItems.ISubscriptionItem>;
            list(
                data: subscriptionItems.ISubscriptionItemListOptions,
                response?: IResponseFn<IList<subscriptionItems.ISubscriptionItem>>,
            ): IListPromise<subscriptionItems.ISubscriptionItem>;
        }

        class Disputes extends StripeResource {
            /**
             * Retrieves the dispute with the given ID.
             */
            retrieve(
                disputeId: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<disputes.IDispute>,
            ): Promise<disputes.IDispute>;
            retrieve(
                disputeId: string,
                data: IDataOptions,
                response?: IResponseFn<disputes.IDispute>,
            ): Promise<disputes.IDispute>;
            retrieve(
                disputeId: string,
                options: HeaderOptions,
                response?: IResponseFn<disputes.IDispute>,
            ): Promise<disputes.IDispute>;
            retrieve(disputeId: string, response?: IResponseFn<disputes.IDispute>): Promise<disputes.IDispute>;

            /**
             * When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence in
             * order to help us resolve the dispute in your favor. You can do this in your dashboard, but if you prefer, you can use the API to
             * submit evidence programmatically. Depending on your dispute type, different evidence fields will give you a better chance of winning
             * your dispute. You may want to consult our guide to dispute types to help you figure out which evidence fields to provide:
             * https://stripe.com/help/dispute-types
             *
             * @param data The fields to update
             */
            update(
                disputeId: string,
                data: disputes.IDisputeUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<disputes.IDispute>,
            ): Promise<disputes.IDispute>;
            update(
                disputeId: string,
                data: disputes.IDisputeUpdateOptions,
                response?: IResponseFn<disputes.IDispute>,
            ): Promise<disputes.IDispute>;

            /**
             * Closing the dispute for a charge indicates that you do not have any evidence to submit and are
             * essentially ‘dismissing’ the dispute, acknowledging it as lost
             *
             * The status of the dispute will change from needs_response to lost.
             *
             * *Closing a dispute is irreversible!*
             */
            close(
                disputeId: string,
                options: HeaderOptions,
                response?: IResponseFn<disputes.IDispute>,
            ): Promise<disputes.IDispute>;
            close(disputeId: string, response?: IResponseFn<disputes.IDispute>): Promise<disputes.IDispute>;

            /**
             * Returns a list of your disputes.
             */
            list(
                data: IListOptionsCreated,
                options: HeaderOptions,
                response?: IResponseFn<IList<disputes.IDispute>>,
            ): IListPromise<disputes.IDispute>;
            list(
                data: IListOptionsCreated,
                response?: IResponseFn<IList<disputes.IDispute>>,
            ): IListPromise<disputes.IDispute>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<disputes.IDispute>>,
            ): IListPromise<disputes.IDispute>;
            list(response?: IResponseFn<IList<disputes.IDispute>>): IListPromise<disputes.IDispute>;

            setMetadata(): void; // TODO: Implement placeholder method
            getMetadata(): void; // TODO: Implement placeholder method
        }

        class Events extends StripeResource {
            /**
             * Retrieves the details of an event. Supply the unique identifier of the event, which you might have
             * received in a webhook.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<events.IEvent>,
            ): Promise<events.IEvent>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<events.IEvent>): Promise<events.IEvent>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<events.IEvent>): Promise<events.IEvent>;
            retrieve(id: string, response?: IResponseFn<events.IEvent>): Promise<events.IEvent>;

            /**
             * List events, going back up to 30 days.
             */
            list(
                data: events.IEventListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<events.IEvent>>,
            ): IListPromise<events.IEvent>;
            list(
                data: events.IEventListOptions,
                response?: IResponseFn<IList<events.IEvent>>,
            ): IListPromise<events.IEvent>;
            list(options: HeaderOptions, response?: IResponseFn<IList<events.IEvent>>): IListPromise<events.IEvent>;
            list(response?: IResponseFn<IList<events.IEvent>>): IListPromise<events.IEvent>;
        }

        class Files extends StripeResource {
            /**
             * To upload a file to Stripe, you’ll need to send a request of type multipart/form-data.
             * The request should contain the file you would like to upload, as well as the parameters for creating a file.
             *
             * All of Stripe’s officially supported API libraries should have support for sending multipart/form-data.
             */
            create(
                data: files.IFileCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<files.IFileUpdate>,
            ): Promise<files.IFileUpdate>;
            create(
                data: files.IFileCreationOptions,
                response?: IResponseFn<files.IFileUpdate>,
            ): Promise<files.IFileUpdate>;

            /**
             * Retrieves the details of an existing file object.
             * Supply the unique file ID from a file creation request, and Stripe will return the corresponding transfer information.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<files.IFileUpdate>,
            ): Promise<files.IFileUpdate>;
            retrieve(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<files.IFileUpdate>,
            ): Promise<files.IFileUpdate>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<files.IFileUpdate>,
            ): Promise<files.IFileUpdate>;
            retrieve(id: string, response?: IResponseFn<files.IFileUpdate>): Promise<files.IFileUpdate>;

            /**
             * Returns a list of the files that you have uploaded to Stripe.
             * The files are returned sorted by creation date, with the most recently created files appearing first.
             */
            list(
                data: files.IFileListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<files.IFileUpdate>>,
            ): IListPromise<files.IFileUpdate>;
            list(
                data: files.IFileListOptions,
                response?: IResponseFn<IList<files.IFileUpdate>>,
            ): IListPromise<files.IFileUpdate>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<files.IFileUpdate>>,
            ): IListPromise<files.IFileUpdate>;
            list(response?: IResponseFn<IList<files.IFileUpdate>>): IListPromise<files.IFileUpdate>;
        }

        class FileLinks extends StripeResource {
            /**
             * Creates a new file link object.
             */
            create(
                data: fileLinks.IFileLinksCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<fileLinks.IFileLink>,
            ): Promise<fileLinks.IFileLink>;
            create(
                data: fileLinks.IFileLinksCreationOptions,
                response?: IResponseFn<fileLinks.IFileLink>,
            ): Promise<fileLinks.IFileLink>;

            /**
             * Returns a file link object if a valid identifier was provided, and throws an error otherwise.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<fileLinks.IFileLink>,
            ): Promise<fileLinks.IFileLink>;
            retrieve(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<fileLinks.IFileLink>,
            ): Promise<fileLinks.IFileLink>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<fileLinks.IFileLink>,
            ): Promise<fileLinks.IFileLink>;
            retrieve(id: string, response?: IResponseFn<fileLinks.IFileLink>): Promise<fileLinks.IFileLink>;

            /**
             * Updates an existing file link object. Expired links can no longer be updated. Returns the file link object if successful,
             * and throws an error otherwise.
             */
            update(
                id: string,
                data: fileLinks.IFileLinksUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<fileLinks.IFileLink>,
            ): Promise<fileLinks.IFileLink>;
            update(
                id: string,
                data: fileLinks.IFileLinksUpdateOptions,
                response?: IResponseFn<fileLinks.IFileLink>,
            ): Promise<fileLinks.IFileLink>;

            /**
             * Returns a list of file links
             */
            list(
                data: fileLinks.IFileLinksListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<fileLinks.IFileLink>>,
            ): IListPromise<fileLinks.IFileLink>;
            list(
                data: fileLinks.IFileLinksListOptions,
                response?: IResponseFn<IList<fileLinks.IFileLink>>,
            ): IListPromise<fileLinks.IFileLink>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<fileLinks.IFileLink>>,
            ): IListPromise<fileLinks.IFileLink>;
            list(response?: IResponseFn<IList<fileLinks.IFileLink>>): IListPromise<fileLinks.IFileLink>;
        }

        class Invoices extends StripeResource {
            /**
             * If you need to invoice your customer outside the regular billing cycle, you can create an invoice that
             * pulls in all pending invoice items, including prorations. The customer's billing cycle and regular subscription
             * won't be affected. Once you create the invoice, it'll be picked up and paid automatically, though you can
             * choose to pay it right away: https://stripe.com/docs/api#pay_invoice
             *
             * @returns Returns the invoice object if there are pending invoice items to invoice. Throws an error if there
             * are no pending invoice items or if the customer ID provided is invalid.
             *
             * @param data Options used to create the invoice.
             */
            create(
                data: invoices.IInvoiceCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            create(
                data: invoices.IInvoiceCreationOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;

            /**
             * Retrieves the invoice with the given ID. The invoice object contains a
             * lines hash that contains information about the subscriptions and invoice items that have been applied to the
             * invoice, as well as any prorations that Stripe has automatically calculated. Each line on the invoice has an
             * amount attribute that represents the amount actually contributed to the invoice's total. For invoice items and
             * prorations, the amount attribute is the same as for the invoice item or proration respectively. For
             * subscriptions, the amount may be different from the plan's regular price depending on whether the invoice
             * covers a trial period or the invoice period differs from the plan's usual interval. The invoice object has
             * both a subtotal and a total. The subtotal represents the total before any discounts, while the total is the final
             * amount to be charged to the customer after all coupons have been applied. The invoice also has a
             * next_payment_attempt attribute that tells you the next time (as a Unix timestamp) payment for the invoice will be
             * automatically attempted. For invoices that have been closed or that have reached the maximum number of retries
             * (specified in your retry settings), the next_payment_attempt will be null.
             *
             * @returns Returns an invoice object if a valid invoice ID was provided. Throws an error otherwise.
             *
             * @param id The ID of the desired invoice.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            retrieve(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            retrieve(id: string, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;

            /**
             * When retrieving an invoice, you'll get a lines property containing the total count of line items and the first
             * handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
             *
             * @returns Returns a list of line_item objects.
             *
             * @param id The id of the invoice containing the lines to be retrieved
             * @param data Filtering options
             */
            retrieveLines(
                id: string,
                data: invoices.IInvoiceLineItemRetrievalOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;
            retrieveLines(
                id: string,
                data: invoices.IInvoiceLineItemRetrievalOptions,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;
            retrieveLines(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;
            retrieveLines(
                id: string,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;

            /**
             * When retrieving an invoice, you'll get a lines property containing the total count of line items and the first
             * handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
             *
             * @returns Returns a list of line_item objects.
             *
             * @param id The id of the invoice containing the lines to be retrieved
             * @param data Filtering options
             */
            listLineItems(
                id: string,
                data: invoices.IInvoiceListLineItemsOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;
            listLineItems(
                id: string,
                data: invoices.IInvoiceListLineItemsOptions,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;
            listLineItems(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;
            listLineItems(
                id: string,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;

            /**
             * At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending,
             * including subscription renewal charges, invoice item charges, etc. It will also show you any discount that is applicable
             * to the customer. Note that when you are viewing an upcoming invoice, you are simply viewing a preview -- the invoice has
             * not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API
             * to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or
             * update pending invoice items, or update the customer's discount.
             *
             * @returns Returns an invoice if a valid customer ID was provided. Throws an error otherwise.
             *
             * @param id The identifier of the customer whose upcoming invoice you'd like to retrieve.
             * @param data Filtering options
             */
            retrieveUpcoming(
                data: invoices.IInvoiceUpcomingOptions,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            retrieveUpcoming(
                data: invoices.IInvoiceUpcomingOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            retrieveUpcoming(
                id: string,
                data: invoices.IInvoiceUpcomingOptions,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            retrieveUpcoming(
                id: string,
                data: invoices.IInvoiceUpcomingOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            retrieveUpcoming(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            retrieveUpcoming(id: string, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;

            /**
             * When retrieving an upcoming invoice, you’ll get a lines property containing the total count of line
             * items and the first handful of those items. There is also a URL where you can retrieve the full
             * (paginated) list of line items.
             *
             * @returns Returns a list of line_item objects.
             *
             * @param id The id of the invoice containing the lines to be retrieved
             * @param data Filtering options
             */
            listUpcomingLineItems(
                data: invoices.IInvoiceListUpcomingLineItemsOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;
            listUpcomingLineItems(
                data: invoices.IInvoiceListUpcomingLineItemsOptions,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;
            listUpcomingLineItems(
                options: HeaderOptions,
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;
            listUpcomingLineItems(
                response?: IResponseFn<IList<invoices.IInvoiceLineItem>>,
            ): IListPromise<invoices.IInvoiceLineItem>;

            /**
             * Until an invoice is paid, it is marked as open (closed=false). If you'd like to stop Stripe from automatically attempting
             * payment on an invoice or would simply like to close the invoice out as no longer owed by the customer, you can update the
             * closed parameter.
             *
             * @returns Returns the invoice object.
             *
             * @param id The ID of the invoice to update
             * @param data Fields to update
             */
            update(
                id: string,
                data: invoices.IInvoiceUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            update(
                id: string,
                data: invoices.IInvoiceUpdateOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;

            /**
             * Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if
             * you’d like to finalize a draft invoice manually, you can do so using this method.
             *
             * @returns Returns the invoice object.
             *
             * @param id The ID of the invoice to pay.
             * @param data Additional arguments.
             */
            finalizeInvoice(
                id: string,
                data: invoices.IInvoiceFinalizeOptions,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            finalizeInvoice(
                id: string,
                data: invoices.IInvoiceFinalizeOptions,
                response: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            finalizeInvoice(id: string, data: invoices.IInvoiceFinalizeOptions): Promise<invoices.IInvoice>;
            finalizeInvoice(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            finalizeInvoice(id: string, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;

            /**
             * Stripe automatically creates and then attempts to pay invoices for customers on subscriptions. We'll also retry unpaid
             * invoices according to your retry settings. However, if you'd like to attempt to collect payment on an invoice out of the
             * normal retry schedule or for some other reason, you can do so.
             *
             * @returns Returns the invoice object.
             *
             * @param id The ID of the invoice to pay.
             */
            pay(
                id: string,
                data: invoices.IInvoicePayOptions,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            pay(
                id: string,
                data: invoices.IInvoicePayOptions,
                response: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            pay(id: string, data: invoices.IInvoicePayOptions): Promise<invoices.IInvoice>;
            pay(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            pay(id: string, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;

            /**
             * You can list all invoices, or list the invoices for a specific customer. The invoices are returned
             * sorted by creation date, with the most recently created invoices appearing first.
             *
             * @returns A object with a data property that contains an array of invoice objects. Throws an error if the
             * customer ID is invalid.
             *
             * @param data Filtering options
             */
            list(
                data: invoices.IInvoiceListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<invoices.IInvoice>>,
            ): IListPromise<invoices.IInvoice>;
            list(
                data: invoices.IInvoiceListOptions,
                response?: IResponseFn<IList<invoices.IInvoice>>,
            ): IListPromise<invoices.IInvoice>;
            list(response?: IResponseFn<IList<invoices.IInvoice>>): IListPromise<invoices.IInvoice>;

            /**
             * Stripe will automatically send invoices to customers according to your subscriptions settings.
             * However, if you’d like to manually send an invoice to your customer out of the normal schedule, you can do so.
             * When sending invoices that have already been paid, there will be no reference to the payment in the email.
             *
             * Requests made in test-mode result in no emails being sent, despite sending an invoice.sent event.
             *
             * @returns Returns the invoice object
             *
             * @param invoice The ID of the invoice to send
             */
            sendInvoice(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<invoices.IInvoice>,
            ): Promise<invoices.IInvoice>;
            sendInvoice(id: string, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
        }

        class InvoiceItems extends StripeResource {
            /**
             * Adds an arbitrary charge or credit to the customer’s upcoming invoice.
             */
            create(
                data: invoiceItems.InvoiceItemCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<invoiceItems.InvoiceItem>,
            ): Promise<invoiceItems.InvoiceItem>;
            create(
                data: invoiceItems.InvoiceItemCreationOptions,
                response?: IResponseFn<invoiceItems.InvoiceItem>,
            ): Promise<invoiceItems.InvoiceItem>;

            /**
             * Retrieves the invoice item with the given ID.
             */
            retrieve(
                invoiceItemId: string,
                options: HeaderOptions,
                response?: IResponseFn<invoiceItems.InvoiceItem>,
            ): Promise<invoiceItems.InvoiceItem>;
            retrieve(
                invoiceItemId: string,
                response?: IResponseFn<invoiceItems.InvoiceItem>,
            ): Promise<invoiceItems.InvoiceItem>;

            /**
             * Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the
             * invoice it's attached to is closed.
             */
            update(
                invoiceItemId: string,
                data: invoiceItems.InvoiceItemUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<invoiceItems.InvoiceItem>,
            ): Promise<invoiceItems.InvoiceItem>;
            update(
                invoiceItemId: string,
                data: invoiceItems.InvoiceItemUpdateOptions,
                response?: IResponseFn<invoiceItems.InvoiceItem>,
            ): Promise<invoiceItems.InvoiceItem>;

            /**
             * Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice
             * items appearing first.
             */
            list(
                data: invoiceItems.InvoiceItemListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<invoiceItems.InvoiceItem>>,
            ): IListPromise<invoiceItems.InvoiceItem>;
            list(
                data: invoiceItems.InvoiceItemListOptions,
                response?: IResponseFn<IList<invoiceItems.InvoiceItem>>,
            ): IListPromise<invoiceItems.InvoiceItem>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<invoiceItems.InvoiceItem>>,
            ): IListPromise<invoiceItems.InvoiceItem>;
            list(response?: IResponseFn<IList<invoiceItems.InvoiceItem>>): IListPromise<invoiceItems.InvoiceItem>;

            /**
             * Removes an invoice item from the upcoming invoice. Removing an invoice item is only possible before the invoice it's attached
             * to is closed.
             */
            del(
                invoiceItemId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            del(invoiceItemId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
        }

        class PaymentIntents extends StripeResource {
            /**
             * Creates a PaymentIntent object.
             */
            create(
                data: paymentIntents.IPaymentIntentCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            create(
                data: paymentIntents.IPaymentIntentCreationOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;

            /**
             * Returns a list of PaymentIntents.
             *
             * @returns A object with a data property that contains an array of up to limit PaymentIntents, starting after PaymentIntent starting_after. Each entry in the array is a separate PaymentIntent object. If no more PaymentIntents are available, the resulting array will be empty. This request should never throw an error.
             */
            list(
                data: paymentIntents.IPaymentIntentListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<paymentIntents.IPaymentIntent>>,
            ): IListPromise<paymentIntents.IPaymentIntent>;
            list(
                data: paymentIntents.IPaymentIntentListOptions,
                response?: IResponseFn<IList<paymentIntents.IPaymentIntent>>,
            ): IListPromise<paymentIntents.IPaymentIntent>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<paymentIntents.IPaymentIntent>>,
            ): IListPromise<paymentIntents.IPaymentIntent>;
            list(
                response?: IResponseFn<IList<paymentIntents.IPaymentIntent>>,
            ): IListPromise<paymentIntents.IPaymentIntent>;

            /**
             * Updates a PaymentIntent object.
             */
            update(
                id: string,
                data: paymentIntents.IPaymentIntentUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            update(
                id: string,
                data: paymentIntents.IPaymentIntentUpdateOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;

            /**
             * Retrieves the details of a PaymentIntent that has previously been created.
             * Client-side retrieval using a publishable key is allowed when the client_secret is provided in the query string.
             * When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the payment intent object reference for more details.
             */
            retrieve(
                id: string,
                data: paymentIntents.IPaymentIntentRetrieveOptions,
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            retrieve(
                id: string,
                data: paymentIntents.IPaymentIntentRetrieveOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            retrieve(
                id: string,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;

            /**
             * Confirm that your customer intends to pay with current or provided `source`. Upon confirmation, the PaymentIntent will attempt to initiate a payment.
             *
             * If the selected source requires additional authentication steps, the PaymentIntent will transition to the `requires_action` status and suggest additional actions via `next_source_action`. If payment fails, the PaymentIntent will transition to the `requires_payment_method` status. If payment succeeds, the PaymentIntent will transition to the `succeeded` status (or `requires_capture`, if `capture_method` is set to `manual`).
             *
             * When using a publishable key, the client_secret must be provided to confirm the PaymentIntent.
             */
            confirm(
                paymentIntentId: string,
                data: paymentIntents.IPaymentIntentConfirmOptions,
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            confirm(
                paymentIntentId: string,
                data: paymentIntents.IPaymentIntentConfirmOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            confirm(
                paymentIntentId: string,
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            confirm(
                paymentIntentId: string,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;

            /**
             * Capture the funds of an existing uncaptured PaymentIntent where `required_action="requires_capture"`.
             * Uncaptured PaymentIntents will be canceled exactly seven days after they are created.
             *
             * @returns Returns a PaymentIntent object with `status="succeeded"` if the PaymentIntent was capturable. Returns an error if the PaymentIntent was not capturable or an invalid amount to capture was provided.
             */
            capture(
                paymentIntentId: string,
                data: paymentIntents.IPaymentIntentCaptureOptions,
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            capture(
                paymentIntentId: string,
                data: paymentIntents.IPaymentIntentCaptureOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            capture(
                paymentIntentId: string,
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            capture(
                paymentIntentId: string,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;

            /**
             * A PaymentIntent object can be canceled when it is in one of these statuses: `requires_payment_method`, `requires_capture`, `requires_confirmation`, `requires_action`.
             * Once canceled, no additional charges will be made by the PaymentIntent and any operations on the PaymentIntent will fail with an error. For PaymentIntents with `status='requires_capture'`, the remaining `amount_capturable` will automatically be refunded.
             *
             * @returns Returns a PaymentIntent object if the cancellation succeeded. Returns an error if the PaymentIntent has already been canceled or is not in a cancelable state.
             */
            cancel(
                paymentIntentId: string,
                data: {
                    cancellation_reason?: paymentIntents.PaymentIntentUserProvidedCancellationReason;
                },
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            cancel(
                paymentIntentId: string,
                options: HeaderOptions,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            cancel(
                paymentIntentId: string,
                data: {
                    cancellation_reason?: paymentIntents.PaymentIntentUserProvidedCancellationReason;
                },
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
            cancel(
                paymentIntentId: string,
                response?: IResponseFn<paymentIntents.IPaymentIntent>,
            ): Promise<paymentIntents.IPaymentIntent>;
        }

        class SetupIntents extends StripeResource {
            /**
             * Creates a SetupIntent object.
             *
             * After the SetupIntent is created, attach a payment method and confirm to collect
             * any required permissions to charge the payment method later.
             */
            create(
                data: setupIntents.ISetupIntentCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            create(
                data: setupIntents.ISetupIntentCreationOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;

            /**
             * Returns a list of SetupIntents.
             *
             * @returns An object with a data property that contains an array of up to limit SetupIntents, starting after SetupIntent starting_after. Each entry in the array is a separate SetupIntent object. If no more SetupIntents are available, the resulting array will be empty. This request should never throw an error.
             */
            list(
                data: setupIntents.ISetupIntentListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<setupIntents.ISetupIntent>>,
            ): IListPromise<setupIntents.ISetupIntent>;
            list(
                data: setupIntents.ISetupIntentListOptions,
                response?: IResponseFn<IList<setupIntents.ISetupIntent>>,
            ): IListPromise<setupIntents.ISetupIntent>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<setupIntents.ISetupIntent>>,
            ): IListPromise<setupIntents.ISetupIntent>;
            list(response?: IResponseFn<IList<setupIntents.ISetupIntent>>): IListPromise<setupIntents.ISetupIntent>;

            /**
             * Updates a SetupIntent object.
             */
            update(
                intent: string,
                data: setupIntents.ISetupIntentUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            update(
                intent: string,
                data: setupIntents.ISetupIntentUpdateOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;

            /**
             * Retrieves the details of a SetupIntent that has previously been created.
             *
             * Client-side retrieval using a publishable key is allowed when the `client_secret`
             * is provided in the query string.
             *
             * When retrieved with a publishable key, only a subset of properties will be returned.
             * Please refer to the SetupIntent object reference for more details.
             */
            retrieve(
                intent: string,
                data: setupIntents.ISetupIntentRetrieveOptions,
                options: HeaderOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            retrieve(
                intent: string,
                data: setupIntents.ISetupIntentRetrieveOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            retrieve(
                intent: string,
                options: HeaderOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            retrieve(
                intent: string,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;

            /**
             * Confirm that your customer intends to set up the current or provided payment method.
             * For example, you would confirm a SetupIntent when a customer hits the “Save” button
             * on a payment method management page on your website.
             *
             * If the selected payment method does not require any additional steps from the customer,
             * the SetupIntent will transition to the `succeeded` status.
             *
             * Otherwise, it will transition to the `requires_action` status and suggest additional
             * actions via `next_action`. If setup fails, the SetupIntent will transition to the
             * `requires_payment_method` status.
             */
            confirm(
                intent: string,
                data: setupIntents.ISetupIntentConfirmOptions,
                options: HeaderOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            confirm(
                intent: string,
                data: setupIntents.ISetupIntentConfirmOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            confirm(
                intent: string,
                options: HeaderOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            confirm(
                intent: string,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;

            /**
             * A SetupIntent object can be canceled when it is in one of these statuses:
             * `requires_payment_method`, `requires_capture`, `requires_confirmation`, `requires_action`.
             *
             * Once canceled, setup is abandoned and any operations on the SetupIntent will fail
             * with an error.
             *
             * @returns Returns a SetupIntent object if the cancellation succeeded. Returns an error if the SetupIntent has already been canceled or is not in a cancelable state.
             */
            cancel(
                intent: string,
                data: {
                    cancellation_reason?: setupIntents.SetupIntentCancelationReason;
                },
                options: HeaderOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            cancel(
                intent: string,
                options: HeaderOptions,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            cancel(
                intent: string,
                data: {
                    cancellation_reason?: setupIntents.SetupIntentCancelationReason;
                },
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
            cancel(
                intent: string,
                response?: IResponseFn<setupIntents.ISetupIntent>,
            ): Promise<setupIntents.ISetupIntent>;
        }

        /** https://stripe.com/docs/api/payment_methods */
        class PaymentMethods {
            create(
                data: paymentMethods.IPaymentMethodCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;
            create(
                data: paymentMethods.IPaymentMethodCreationOptions,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;

            retrieve(
                paymentMethodId: string,
                options: HeaderOptions,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;
            retrieve(
                paymentMethodId: string,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;

            update(
                paymentMethodId: string,
                data: paymentMethods.IPaymentMethodUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;
            update(
                paymentMethodId: string,
                data: paymentMethods.IPaymentMethodUpdateOptions,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;

            list<T extends paymentMethods.IPaymentMethodType>(
                data: paymentMethods.IPaymentMethodListOptions<T>,
                options: HeaderOptions,
                response?: IResponseFn<IList<paymentMethods.IPaymentMethod>>,
            ): IListPromise<Extract<paymentMethods.IPaymentMethod, { type: T }>>;
            list<T extends paymentMethods.IPaymentMethodType>(
                data: paymentMethods.IPaymentMethodListOptions<T>,
                response?: IResponseFn<IList<paymentMethods.IPaymentMethod>>,
            ): IListPromise<Extract<paymentMethods.IPaymentMethod, { type: T }>>;

            attach(
                paymentMethodId: string,
                data: paymentMethods.IPaymentMethodAttachOptions,
                options: HeaderOptions,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;
            attach(
                paymentMethodId: string,
                data: paymentMethods.IPaymentMethodAttachOptions,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;

            detach(
                paymentMethodId: string,
                options: HeaderOptions,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;
            detach(
                paymentMethodId: string,
                response?: IResponseFn<paymentMethods.IPaymentMethod>,
            ): Promise<paymentMethods.IPaymentMethod>;
        }

        class Payouts extends StripeResource {
            /**
             * To send funds to your own bank account, you create a new payout object. Your Stripe balance must be able to cover the payout amount, or you’ll receive an “Insufficient Funds” error.
             *
             * If your API key is in test mode, money won’t actually be sent, though everything else will occur as if in live mode.
             *
             * If you are creating a manual payout on a Stripe account that uses multiple payment source types, you’ll need to specify the source type balance that the payout should draw from.
             * The balance object details available and pending amounts by source type.
             *
             */
            create(
                data: payouts.IPayoutCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<payouts.IPayout>,
            ): Promise<payouts.IPayout>;
            create(
                data: payouts.IPayoutCreationOptions,
                response?: IResponseFn<payouts.IPayout>,
            ): Promise<payouts.IPayout>;

            /**
             * Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.
             */
            retrieve(
                payoutId: string,
                options: HeaderOptions,
                response?: IResponseFn<payouts.IPayout>,
            ): Promise<payouts.IPayout>;
            retrieve(payoutId: string, response?: IResponseFn<payouts.IPayout>): Promise<payouts.IPayout>;

            /**
             * Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.
             */
            update(
                payoutId: string,
                data: IDataOptionsWithMetadata,
                options: HeaderOptions,
                response?: IResponseFn<payouts.IPayout>,
            ): Promise<payouts.IPayout>;
            update(
                payoutId: string,
                data: IDataOptionsWithMetadata,
                response?: IResponseFn<payouts.IPayout>,
            ): Promise<payouts.IPayout>;

            /**
             * Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.
             */
            list(
                data: payouts.IPayoutListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<payouts.IPayout>>,
            ): IListPromise<payouts.IPayout>;
            list(
                data: payouts.IPayoutListOptions,
                response?: IResponseFn<IList<payouts.IPayout>>,
            ): IListPromise<payouts.IPayout>;
            list(options: HeaderOptions, response?: IResponseFn<IList<payouts.IPayout>>): IListPromise<payouts.IPayout>;
            list(response?: IResponseFn<IList<payouts.IPayout>>): IListPromise<payouts.IPayout>;

            /**
             * A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance, and the fees you were originally charged on the payout will be refunded.
             * You may not cancel automatic Stripe payouts.
             */
            cancel(
                payoutId: string,
                options: HeaderOptions,
                response?: IResponseFn<payouts.IPayout>,
            ): Promise<payouts.IPayout>;
            cancel(payoutId: string, response?: IResponseFn<payouts.IPayout>): Promise<payouts.IPayout>;
        }

        class Plans extends StripeResource {
            /**
             * You can create plans easily via the plan management page of the Stripe dashboard. Plan creation is also
             * accessible via the API if you need to create plans on the fly.
             *
             * @returns The newly created plan
             *
             * @param data Creation options for the new plan.
             */
            create(
                data: plans.IPlanCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<plans.IPlan>,
            ): Promise<plans.IPlan>;
            create(data: plans.IPlanCreationOptions, response?: IResponseFn<plans.IPlan>): Promise<plans.IPlan>;

            /**
             * Retrieves the plan with the given ID.
             *
             * @returns Returns a plan if a valid plan ID was provided. Throws an error otherwise.
             *
             * @param planName The identifier of the desired plan.
             */
            retrieve(
                planName: string,
                options: HeaderOptions,
                response?: IResponseFn<plans.IPlan>,
            ): Promise<plans.IPlan>;
            retrieve(planName: string, response?: IResponseFn<plans.IPlan>): Promise<plans.IPlan>;

            /**
             * Updates the name of a plan. Other plan details (price, interval, etc.) are, by design, not editable.
             *
             * @returns The updated plan object is returned upon success. Otherwise, this call throws an error.
             *
             * @param planName The identifier of the plan to update
             * @param data The fields to update
             */
            update(
                planName: string,
                data: plans.IPlanUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<plans.IPlan>,
            ): Promise<plans.IPlan>;
            update(
                planName: string,
                data: plans.IPlanUpdateOptions,
                response?: IResponseFn<plans.IPlan>,
            ): Promise<plans.IPlan>;

            /**
             * You can delete plans via the plan management page of the Stripe dashboard. However, deleting a plan does not affect
             * any current subscribers to the plan; it merely means that new subscribers can't be added to that plan. You can also
             * delete plans via the API.
             *
             * @returns An object with the deleted plan's ID and a deleted flag upon success. Otherwise, this call throws an error, such as if the plan has already been deleted.
             *
             * @param planName The identifier of the plan to be deleted.
             */
            del(
                planName: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            del(planName: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;

            /**
             * Returns a list of your plans.
             *
             * @returns An object with a data property that contains an array of up to limit plans, starting after plan starting_after.
             * Each entry in the array is a separate plan object. If no more plans are available, the resulting array will be empty. This
             * request should never throw an error. You can optionally request that the response include the total count of all plans. To
             * do so, specify include[]=total_count in your request.
             */
            list(
                data: IPlanListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<plans.IPlan>>,
            ): IListPromise<plans.IPlan>;
            list(data: IPlanListOptions, response?: IResponseFn<IList<plans.IPlan>>): IListPromise<plans.IPlan>;
            list(options: HeaderOptions, response?: IResponseFn<IList<plans.IPlan>>): IListPromise<plans.IPlan>;
            list(response?: IResponseFn<IList<plans.IPlan>>): IListPromise<plans.IPlan>;
        }

        interface IPlanListOptions extends IListOptionsCreated {
            /**
             * Only return plans that are active or inactive (e.g., pass false to list all inactive products).
             */
            active?: boolean;

            /**
             * Only return plans for the given product.
             */
            product?: string;
        }

        /**
         * @deprecated
         */
        class RecipientCards extends StripeResource {
            /**
             * @deprecated
             */
            create(): void;

            /**
             * @deprecated
             */
            list(): void;

            /**
             * @deprecated
             */
            update(id: string): void;

            /**
             * @deprecated
             */
            retrieve(id: string): void;

            // options: IDataOptions
            /**
             * @deprecated
             */
            del(id: string): void;
        }

        /**
         * @deprecated
         */
        class Recipients extends StripeResource {
            /**
             * @deprecated
             */
            create(): void;

            /**
             * @deprecated
             */
            list(): void;

            /**
             * @deprecated
             */
            update(id: string): void;

            /**
             * @deprecated
             */
            retrieve(id: string): void;

            // options: IDataOptions
            /**
             * @deprecated
             */
            del(id: string): void;
        }

        class Refunds extends StripeResource {
            /**
             * When you create a new refund, you must specify a charge to create it on.
             *
             * Creating a new refund will refund a charge that has previously been created but not yet refunded.
             * Funds will be refunded to the credit or debit card that was originally charged.
             * The fees you were originally charged are also refunded.
             *
             * You can optionally refund only part of a charge.
             * You can do so as many times as you wish until the entire charge has been refunded.
             *
             * Once entirely refunded, a charge can't be refunded again.
             * This method will throw an error when called on an already-refunded charge, or when trying to refund more money than is left on a charge.
             */
            create(
                data: refunds.IRefundCreationOptionsWithCharge,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            create(
                data: refunds.IRefundCreationOptionsWithCharge,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;

            /**
             * Retrieves the details of an existing refund.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            retrieve(id: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * Updates the specified refund by setting the values of the parameters passed.
             * Any parameters not provided will be left unchanged.
             *
             * This request only accepts metadata as an argument.
             */
            update(
                id: string,
                data: IDataOptionsWithMetadata,
                options: HeaderOptions,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;
            update(
                id: string,
                data: IDataOptionsWithMetadata,
                response?: IResponseFn<refunds.IRefund>,
            ): Promise<refunds.IRefund>;

            /**
             * Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order,
             * with the most recent refunds appearing first.
             * For convenience, the 10 most recent refunds are always available by default on the charge object.
             */
            list(
                data: refunds.IRefundListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<refunds.IRefund>>,
            ): IListPromise<refunds.IRefund>;
            list(
                data: refunds.IRefundListOptions,
                response?: IResponseFn<IList<refunds.IRefund>>,
            ): IListPromise<refunds.IRefund>;
            list(options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>): IListPromise<refunds.IRefund>;
            list(response?: IResponseFn<IList<refunds.IRefund>>): IListPromise<refunds.IRefund>;
        }

        class Reviews extends StripeResource {
            /**
             * Approves a Review object, closing it and removing it from the list of reviews. Returns the approved
             * review object.
             * @param id - The identifier of the review to be approved.
             */
            approve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<reviews.IReview>,
            ): Promise<reviews.IReview>;
            approve(id: string, response?: IResponseFn<reviews.IReview>): Promise<reviews.IReview>;

            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<reviews.IReview>,
            ): Promise<reviews.IReview>;
            retrieve(
                id: string,
                response?: IResponseFn<reviews.IReview>,
            ): Promise<reviews.IReview>;

            /**
             * Returns a list of Review objects that have open set to true. The objects are sorted in descending
             * order by creation date, with the most recently created object appearing first.
             */
            list(
                data: IListOptionsCreated,
                options: HeaderOptions,
                response?: IResponseFn<IList<reviews.IReview>>,
            ): IListPromise<reviews.IReview>;
            list(
                data: IListOptionsCreated,
                response?: IResponseFn<IList<reviews.IReview>>,
            ): IListPromise<reviews.IReview>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<reviews.IReview>>,
            ): IListPromise<reviews.IReview>;
            list(response?: IResponseFn<IList<reviews.IReview>>): IListPromise<reviews.IReview>;
        }

        class Sources extends StripeResource {
            /** Create Source: https://stripe.com/docs/api/sources/create */
            create(
                data: sources.ISourceCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<sources.ISource>,
            ): Promise<sources.ISource>;
            create(
                data: sources.ISourceCreationOptions,
                response?: IResponseFn<sources.ISource>,
            ): Promise<sources.ISource>;

            /** Update Source: https://stripe.com/docs/api/sources/update */
            update(
                id: string,
                data: sources.ISourceUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<sources.ISource>,
            ): Promise<sources.ISource>;
            update(
                id: string,
                data: sources.ISourceUpdateOptions,
                response?: IResponseFn<sources.ISource>,
            ): Promise<sources.ISource>;

            /** Retrieve Source: https://stripe.com/docs/api/sources/retrieve */
            retrieve(
                id: string,
                data: sources.ISourceRetrieveOptions | undefined,
                options: HeaderOptions,
                response?: IResponseFn<sources.ISource>,
            ): Promise<sources.ISource>;
            retrieve(
                id: string,
                data?: sources.ISourceRetrieveOptions,
                response?: IResponseFn<sources.ISource>,
            ): Promise<sources.ISource>;
        }

        class Tokens extends StripeResource {
            /**
             * Creates a single use token that wraps the details of a credit card. This token can be used
             * in place of a credit card object with any API method. These tokens can only be used once:
             * by creating a new charge object, or attaching them to a customer.
             */
            create(
                data: tokens.ICardTokenCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<tokens.ICardToken>,
            ): Promise<tokens.ICardToken>;
            create(
                data: tokens.ICardTokenCreationOptions,
                response?: IResponseFn<tokens.ICardToken>,
            ): Promise<tokens.ICardToken>;

            /**
             * Creates a single use token that wraps the details of a bank account. This token can be used
             * in place of a bank account object with any API method. These tokens can only be used once:
             * by attaching them to a recipient or managed account.
             */
            create(
                data: tokens.IBankAccountTokenCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<tokens.IBankAccountToken>,
            ): Promise<tokens.IBankAccountToken>;
            create(
                data: tokens.IBankAccountTokenCreationOptions,
                response?: IResponseFn<tokens.IBankAccountToken>,
            ): Promise<tokens.IBankAccountToken>;

            /**
             * Creates a single use token that wraps the details of personally identifiable information (PII).
             * This token can be used in place of a personal_id_number in the Account Update API method.
             * These tokens can only be used once.
             */
            create(
                data: tokens.IPiiTokenCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<tokens.IToken>,
            ): Promise<tokens.IToken>;
            create(
                data: tokens.IPiiTokenCreationOptions,
                response?: IResponseFn<tokens.IToken>,
            ): Promise<tokens.IToken>;

            /**
             * Retrieves the token with the given ID.
             */
            retrieve(
                tokenId: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<tokens.IToken>,
            ): Promise<tokens.IToken>;
            retrieve(
                tokenId: string,
                data: IDataOptions,
                response?: IResponseFn<tokens.IToken>,
            ): Promise<tokens.IToken>;
            retrieve(
                tokenId: string,
                options: HeaderOptions,
                response?: IResponseFn<tokens.IToken>,
            ): Promise<tokens.IToken>;
            retrieve(tokenId: string, response?: IResponseFn<tokens.IToken>): Promise<tokens.IToken>;
        }

        class Topups extends StripeResource {
            /**
             * Top up the balance of an account
             */
            create(
                data: topups.ITopupCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<topups.ITopup>,
            ): Promise<topups.ITopup>;
            create(
                data: topups.ITopupCreationOptions,
                response?: IResponseFn<topups.ITopup>,
            ): Promise<topups.ITopup>;

            /**
             * Retrieves the details of a top-up that has previously been created.
             */
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<topups.ITopup>,
            ): Promise<topups.ITopup>;
            retrieve(
                id: string,
                response?: IResponseFn<topups.ITopup>,
            ): Promise<topups.ITopup>;

            /**
             * Updates the metadata of a top-up. Other top-up details are not editable by design.
             * Returns the newly updated top-up object if the call succeeded. Otherwise, this call throws an error.
             */
            update(
                id: string,
                data: topups.ITopupUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<topups.ITopup>,
            ): Promise<topups.ITopup>;
            update(
                id: string,
                data: topups.ITopupUpdateOptions,
                response?: IResponseFn<topups.ITopup>,
            ): Promise<topups.ITopup>;

            /**
             * A object containing the data property, which is an array of separate top-up objects. The number
             * of top-ups in the array is limited to the number designated in limit. If no more top-ups are available,
             * the resulting array will be empty. This request should never throw an error.
             */
            list(
                data: topups.ITopupsListOptions,
                response?: IResponseFn<IList<topups.ITopup>>,
            ): IListPromise<topups.ITopup>;
            list(
                data: topups.ITopupsListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<topups.ITopup>>,
            ): IListPromise<topups.ITopup>;

            /**
             * Cancels a top-up. Only pending top-ups can be canceled. Returns the canceled top-up. If the top-up
             * is already canceled or can’t be canceled, an error is returned.
             */
            cancel(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<topups.ITopup>,
            ): Promise<topups.ITopup>;
            cancel(id: string, response?: IResponseFn<topups.ITopup>): Promise<topups.ITopup>;
        }

        class OAuth extends StripeResource {
            /**
             * Used both for turning an authorization_code into an access_token, and for getting a new access token using a refresh_token.
             *
             */
            token(
                data: oauth.IOAuthAuthorizationCodeTokenRequest | oauth.IOAuthRefreshTokenRequest,
                options: HeaderOptions,
                response?: IResponseFn<oauth.IOAuthToken>,
            ): Promise<oauth.IOAuthToken>;
            token(
                data: oauth.IOAuthAuthorizationCodeTokenRequest | oauth.IOAuthRefreshTokenRequest,
                response?: IResponseFn<oauth.IOAuthToken>,
            ): Promise<oauth.IOAuthToken>;

            /**
             * When revoking access to an account, you must use an API key that matches the mode—live or test—of the authorization code (which depends on whether the client_id used was production or development).
             *
             * @param client_id The client_id of the application that you'd like to disconnect the account from. The account must be connected to this application.
             * @param stripe_user_id The account you'd like to disconnect from.
             */
            deauthorize(
                client_id: string,
                stripe_user_id: string,
                options: HeaderOptions,
                response?: IResponseFn<oauth.IOAuthDeauthorizationResponse>,
            ): Promise<oauth.IOAuthDeauthorizationResponse>;
            deauthorize(
                client_id: string,
                stripe_user_id: string,
                response?: IResponseFn<oauth.IOAuthDeauthorizationResponse>,
            ): Promise<oauth.IOAuthDeauthorizationResponse>;
        }

        class Transfers extends StripeResource {
            /**
             * To send funds from your Stripe account to a third-party recipient or to your own bank account, you create a new transfer
             * object. Your Stripe balance must be able to cover the transfer amount, or you'll receive an "Insufficient Funds" error.
             *
             * If your API key is in test mode, money won't actually be sent, though everything else will occur as if in live mode.
             *
             * If you are creating a manual transfer or a special case transfer on a Stripe account that uses multiple payment source
             * types, you'll need to specify the source type balance that the transfer should draw from. The balance object details
             * available and pending amounts by source type.
             */
            create(
                data: transfers.ITransferCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<transfers.ITransfer>,
            ): Promise<transfers.ITransfer>;
            create(
                data: transfers.ITransferCreationOptions,
                response?: IResponseFn<transfers.ITransfer>,
            ): Promise<transfers.ITransfer>;

            /**
             * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or
             * the transfer list, and Stripe will return the corresponding transfer information.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<transfers.ITransfer>,
            ): Promise<transfers.ITransfer>;
            retrieve(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<transfers.ITransfer>,
            ): Promise<transfers.ITransfer>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<transfers.ITransfer>,
            ): Promise<transfers.ITransfer>;
            retrieve(id: string, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;

            /**
             * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left
             * unchanged.
             *
             * This request accepts only the description and metadata as arguments.
             */
            update(
                id: string,
                data: transfers.ITransferUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<transfers.ITransfer>,
            ): Promise<transfers.ITransfer>;
            update(
                id: string,
                data: transfers.ITransferUpdateOptions,
                response?: IResponseFn<transfers.ITransfer>,
            ): Promise<transfers.ITransfer>;

            /**
             * Returns a list of existing transfers sent to third-party bank accounts or that Stripe has sent you. The transfers are
             * returned in sorted order, with the most recently created transfers appearing first.
             */
            list(
                data: transfers.ITransferListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<transfers.ITransfer>>,
            ): IListPromise<transfers.ITransfer>;
            list(
                data: transfers.ITransferListOptions,
                response?: IResponseFn<IList<transfers.ITransfer>>,
            ): IListPromise<transfers.ITransfer>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<transfers.ITransfer>>,
            ): IListPromise<transfers.ITransfer>;
            list(response?: IResponseFn<IList<transfers.ITransfer>>): IListPromise<transfers.ITransfer>;

            cancel(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<transfers.ITransfer>,
            ): Promise<transfers.ITransfer>;
            cancel(id: string, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;

            listTransactions(
                options: HeaderOptions,
                response?: IResponseFn<IList<charges.ICharge>>,
            ): IListPromise<charges.ICharge>; // TODO: Not sure if this should be a list of balance transactions or charges.
            listTransactions(response?: IResponseFn<IList<charges.ICharge>>): IListPromise<charges.ICharge>; // TODO: Not sure if this should be a list of balance transactions or charges.

            /**
             * When you create a new reversal, you must specify a transfer to create it on.
             *
             * Creating a new reversal on a transfer that has previously been created but not paid out will return the funds to your available balance
             * and refund the fees you were originally charged on the transfer. You may not reverse automatic Stripe transfers.
             *
             * When reversing transfers to Stripe accounts, you can optionally reverse part of the transfer. You can do so as many times as you wish
             * until the entire transfer has been reversed.
             *
             * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer,
             * or when trying to reverse more money than is left on a transfer.
             */
            reverse(
                id: string,
                data: transferReversals.IReversalCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            reverse(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            reverse(
                id: string,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;

            /**
             * When you create a new reversal, you must specify a transfer to create it on.
             *
             * Creating a new reversal on a transfer that has previously been created but not paid out will return the funds to your available balance
             * and refund the fees you were originally charged on the transfer. You may not reverse automatic Stripe transfers.
             *
             * When reversing transfers to Stripe accounts, you can optionally reverse part of the transfer. You can do so as many times as you wish
             * until the entire transfer has been reversed.
             *
             * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer,
             * or when trying to reverse more money than is left on a transfer.
             */
            createReversal(
                transferId: string,
                data: transferReversals.IReversalCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            createReversal(
                transferId: string,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            createReversal(
                transferId: string,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;

            /**
             * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a
             * specific reversal stored on the transfer.
             */
            retrieveReversal(
                transferId: string,
                reversalId: string,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            retrieveReversal(
                transferId: string,
                reversalId: string,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;

            /**
             * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * This request only accepts metadata and description as arguments.
             */
            updateReversal(
                transferId: string,
                reversalId: string,
                data: transferReversals.IReversalUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            updateReversal(
                transferId: string,
                reversalId: string,
                data: transferReversals.IReversalUpdateOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;

            /**
             * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by
             * default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after
             * parameters to page through additional reversals.
             */
            listReversals(
                transferId: string,
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<transferReversals.IReversal>>,
            ): IListPromise<transferReversals.IReversal>;
            listReversals(
                transferId: string,
                data: IListOptions,
                response?: IResponseFn<IList<transferReversals.IReversal>>,
            ): IListPromise<transferReversals.IReversal>;
            listReversals(
                transferId: string,
                options: HeaderOptions,
                response?: IResponseFn<IList<transferReversals.IReversal>>,
            ): IListPromise<transferReversals.IReversal>;
            listReversals(
                transferId: string,
                response?: IResponseFn<IList<transferReversals.IReversal>>,
            ): IListPromise<transferReversals.IReversal>;

            setMetadata(): void; // TODO: Implement placeholder method
            getMetadata(): void; // TODO: Implement placeholder method
        }

        class TransferReversals extends StripeResource {
            /**
             * When you create a new reversal, you must specify a transfer to create it on.
             *
             * Creating a new reversal on a transfer that has previously been created but not paid out will return the funds to your available balance
             * and refund the fees you were originally charged on the transfer. You may not reverse automatic Stripe transfers.
             *
             * When reversing transfers to Stripe accounts, you can optionally reverse part of the transfer. You can do so as many times as you wish
             * until the entire transfer has been reversed.
             *
             * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer,
             * or when trying to reverse more money than is left on a transfer.
             */
            create(
                data: transferReversals.IReversalCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            create(
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            create(response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;

            /**
             * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a
             * specific reversal stored on the transfer.
             */
            retrieve(
                reversalId: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            retrieve(
                reversalId: string,
                data: IDataOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            retrieve(
                reversalId: string,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            retrieve(
                reversalId: string,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;

            /**
             * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * This request only accepts metadata and description as arguments.
             */
            update(
                reversalId: string,
                data: transferReversals.IReversalUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;
            update(
                reversalId: string,
                data: transferReversals.IReversalUpdateOptions,
                response?: IResponseFn<transferReversals.IReversal>,
            ): Promise<transferReversals.IReversal>;

            /**
             * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by
             * default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after
             * parameters to page through additional reversals.
             */
            list(
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<transferReversals.IReversal>>,
            ): IListPromise<transferReversals.IReversal>;
            list(
                data: IListOptions,
                response?: IResponseFn<IList<transferReversals.IReversal>>,
            ): IListPromise<transferReversals.IReversal>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<transferReversals.IReversal>>,
            ): IListPromise<transferReversals.IReversal>;
            list(response?: IResponseFn<IList<transferReversals.IReversal>>): IListPromise<transferReversals.IReversal>;
        }

        class CountrySpecs extends StripeResource {
            /**
             * Lists all Country Spec objects available in the API.
             */
            list(
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<countrySpecs.ICountrySpec>>,
            ): IListPromise<countrySpecs.ICountrySpec>;
            list(
                data: IListOptions,
                response?: IResponseFn<IList<countrySpecs.ICountrySpec>>,
            ): IListPromise<countrySpecs.ICountrySpec>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<countrySpecs.ICountrySpec>>,
            ): IListPromise<countrySpecs.ICountrySpec>;
            list(response?: IResponseFn<IList<countrySpecs.ICountrySpec>>): IListPromise<countrySpecs.ICountrySpec>;

            /**
             * Returns a Country Spec for a given Country code.
             *
             * @param retrieve  An ISO country code. Available country codes can be listed with the List Country Specs endpoint.
             */
            retrieve(
                id: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<countrySpecs.ICountrySpec>,
            ): Promise<countrySpecs.ICountrySpec>;
            retrieve(
                id: string,
                data: IDataOptions,
                response?: IResponseFn<countrySpecs.ICountrySpec>,
            ): Promise<countrySpecs.ICountrySpec>;
            retrieve(
                id: string,
                options: HeaderOptions,
                response?: IResponseFn<countrySpecs.ICountrySpec>,
            ): Promise<countrySpecs.ICountrySpec>;
            retrieve(id: string, response?: IResponseFn<countrySpecs.ICountrySpec>): Promise<countrySpecs.ICountrySpec>;
        }

        class Orders {
            /**
             * Creates a new order object.
             */
            create(
                data: orders.IOrderCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<orders.IOrder>,
            ): Promise<orders.IOrder>;
            create(data: orders.IOrderCreationOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;

            /**
             * Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list,
             * and Stripe will return the corresponding order information.
             */
            retrieve(
                orderId: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<orders.IOrder>,
            ): Promise<orders.IOrder>;
            retrieve(
                orderId: string,
                data: IDataOptions,
                response?: IResponseFn<orders.IOrder>,
            ): Promise<orders.IOrder>;
            retrieve(
                orderId: string,
                options: HeaderOptions,
                response?: IResponseFn<orders.IOrder>,
            ): Promise<orders.IOrder>;
            retrieve(orderId: string, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;

            /**
             * Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             * This request accepts only the metadata, and status as arguments.
             */
            update(
                orderId: string,
                data: orders.IOrderUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<orders.IOrder>,
            ): Promise<orders.IOrder>;
            update(
                orderId: string,
                data: orders.IOrderUpdateOptions,
                response?: IResponseFn<orders.IOrder>,
            ): Promise<orders.IOrder>;

            /**
             * Pay an order by providing a source to create a payment.
             */
            pay(
                orderId: string,
                data: orders.IOrderPayOptions,
                options: HeaderOptions,
                response?: IResponseFn<orders.IOrder>,
            ): Promise<orders.IOrder>;
            pay(
                orderId: string,
                data: orders.IOrderPayOptions,
                response?: IResponseFn<orders.IOrder>,
            ): Promise<orders.IOrder>;

            /**
             * Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.
             */
            list(
                data: orders.IOrderListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<orders.IOrder>>,
            ): IListPromise<orders.IOrder>;
            list(
                data: orders.IOrderListOptions,
                response?: IResponseFn<IList<orders.IOrder>>,
            ): IListPromise<orders.IOrder>;
            list(options: HeaderOptions, response?: IResponseFn<IList<orders.IOrder>>): IListPromise<orders.IOrder>;
            list(response?: IResponseFn<IList<orders.IOrder>>): IListPromise<orders.IOrder>;
        }

        class Products {
            /**
             * Creates a new product object.
             */
            create(
                data: products.IProductCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<products.IProduct>,
            ): Promise<products.IProduct>;
            create(
                data: products.IProductCreationOptions,
                response?: IResponseFn<products.IProduct>,
            ): Promise<products.IProduct>;

            /**
             * Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product
             * list, and Stripe will return the corresponding product information.
             */
            retrieve(
                productId: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<products.IProduct>,
            ): Promise<products.IProduct>;
            retrieve(
                productId: string,
                data: IDataOptions,
                response?: IResponseFn<products.IProduct>,
            ): Promise<products.IProduct>;
            retrieve(
                productId: string,
                options: HeaderOptions,
                response?: IResponseFn<products.IProduct>,
            ): Promise<products.IProduct>;
            retrieve(productId: string, response?: IResponseFn<products.IProduct>): Promise<products.IProduct>;

            /**
             * Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * Note that a product's attributes are not editable. Instead, you would need to deactivate the existing product and create a new one
             * with the new attribute values.
             */
            update(
                productId: string,
                data: products.IProductUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<products.IProduct>,
            ): Promise<products.IProduct>;
            update(
                productId: string,
                data: products.IProductUpdateOptions,
                response?: IResponseFn<products.IProduct>,
            ): Promise<products.IProduct>;

            /**
             * Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.
             */
            list(
                data: products.IProductListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<products.IProduct>>,
            ): IListPromise<products.IProduct>;
            list(
                data: products.IProductListOptions,
                response?: IResponseFn<IList<products.IProduct>>,
            ): IListPromise<products.IProduct>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<products.IProduct>>,
            ): IListPromise<products.IProduct>;
            list(response?: IResponseFn<IList<products.IProduct>>): IListPromise<products.IProduct>;

            /**
             * Delete a product. Deleting a product is only possible if it has no SKUs associated with it.
             */
            del(
                productId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            del(productId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
        }

        class SKUs {
            /**
             * Creates a new SKU associated with a product.
             */
            create(
                data: skus.ISkuCreationOptions,
                options: HeaderOptions,
                response?: IResponseFn<skus.ISku>,
            ): Promise<skus.ISku>;
            create(data: skus.ISkuCreationOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;

            /**
             * Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the
             * product, and Stripe will return the corresponding SKU information.
             */
            retrieve(
                skuId: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<skus.ISku>,
            ): Promise<skus.ISku>;
            retrieve(skuId: string, data: IDataOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;
            retrieve(skuId: string, options: HeaderOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;
            retrieve(skuId: string, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;

            /**
             * Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * Note that a SKU's attributes are not editable. Instead, you would need to deactivate the existing SKU and create a new one with
             * the new attribute values.
             */
            update(
                skuId: string,
                data: skus.ISkuUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<skus.ISku>,
            ): Promise<skus.ISku>;
            update(skuId: string, data: skus.ISkuUpdateOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;

            /**
             * Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.
             */
            list(
                data: skus.ISkuListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<skus.ISku>>,
            ): IListPromise<skus.ISku>;
            list(data: skus.ISkuListOptions, response?: IResponseFn<IList<skus.ISku>>): IListPromise<skus.ISku>;
            list(options: HeaderOptions, response?: IResponseFn<IList<skus.ISku>>): IListPromise<skus.ISku>;
            list(response?: IResponseFn<IList<skus.ISku>>): IListPromise<skus.ISku>;

            /**
             * Delete a SKU. Deleting a SKU is only possible until it has been used in an order.
             */
            del(
                skuId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            del(skuId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
        }

        class WebHooks {
            constructEvent(
                requestBody: any,
                signature: string | string[],
                endpointSecret: string,
                tolerance?: number,
            ): events.IEvent;

            /**
             * Generates a header to be used for webhook mocking
             */
            generateTestHeaderString(options: IWebHookGenerateTestHeaderStringOptions): string;
        }

        class WebhookEndpoints {
            /**
             * Creates a new Webhook Endpoint
             */
            create(
                data: webhookEndpoints.IWebhookCreateOptions,
                options: HeaderOptions,
                response?: IResponseFn<webhookEndpoints.IWebhookEndpoint>,
            ): Promise<webhookEndpoints.IWebhookEndpoint>;
            create(
                data: webhookEndpoints.IWebhookCreateOptions,
                response?: IResponseFn<webhookEndpoints.IWebhookEndpoint>,
            ): Promise<webhookEndpoints.IWebhookEndpoint>;

            /**
             * Retrieves the details of an existing webhook
             */
            retrieve(
                webhookId: string,
                data: IDataOptions,
                options: HeaderOptions,
                response?: IResponseFn<webhookEndpoints.IWebhookEndpoint>,
            ): Promise<webhookEndpoints.IWebhookEndpoint>;
            retrieve(
                webhookId: string,
                data: IDataOptions,
                response?: IResponseFn<webhookEndpoints.IWebhookEndpoint>,
            ): Promise<webhookEndpoints.IWebhookEndpoint>;
            retrieve(
                webhookId: string,
                options: HeaderOptions,
                response?: IResponseFn<webhookEndpoints.IWebhookEndpoint>,
            ): Promise<webhookEndpoints.IWebhookEndpoint>;
            retrieve(
                webhookId: string,
                response?: IResponseFn<webhookEndpoints.IWebhookEndpoint>,
            ): Promise<webhookEndpoints.IWebhookEndpoint>;

            /**
             * Updates the specific webhook endpoint by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * The parameters that can be edited are the url, the list of enabled_events, and the status of your endpoint
             */
            update(
                webhookId: string,
                data: webhookEndpoints.IWebhookUpdateOptions,
                options: HeaderOptions,
                response?: IResponseFn<webhookEndpoints.IWebhookEndpoint>,
            ): Promise<webhookEndpoints.IWebhookEndpoint>;
            update(
                webhookId: string,
                data: webhookEndpoints.IWebhookUpdateOptions,
                response?: IResponseFn<webhookEndpoints.IWebhookEndpoint>,
            ): Promise<webhookEndpoints.IWebhookEndpoint>;

            /**
             * Returns a list of your webhook endpoints
             */
            list(
                data: IListOptions,
                options: HeaderOptions,
                response?: IResponseFn<IList<webhookEndpoints.IWebhookEndpoint>>,
            ): IListPromise<webhookEndpoints.IWebhookEndpoint>;
            list(
                data: IListOptions,
                response?: IResponseFn<IList<webhookEndpoints.IWebhookEndpoint>>,
            ): IListPromise<webhookEndpoints.IWebhookEndpoint>;
            list(
                options: HeaderOptions,
                response?: IResponseFn<IList<webhookEndpoints.IWebhookEndpoint>>,
            ): IListPromise<webhookEndpoints.IWebhookEndpoint>;
            list(
                response?: IResponseFn<IList<webhookEndpoints.IWebhookEndpoint>>,
            ): IListPromise<webhookEndpoints.IWebhookEndpoint>;

            /**
             * Deletes a webhook endpoint.
             *
             * Webhook endpoints can also be deleted from the Stripe dashboard
             */
            del(
                webhookId: string,
                options: HeaderOptions,
                response?: IResponseFn<IDeleteConfirmation>,
            ): Promise<IDeleteConfirmation>;
            del(webhookId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
        }

        interface IWebHookGenerateTestHeaderStringOptions {
            /**
             * Timestamp of the header. Defaults to Date.now()
             */
            timestamp?: number;

            /**
             * JSON stringified payload object, containing the 'id' and 'object' parameters
             */
            payload?: string;

            /**
             * Stripe webhook secret 'whsec_...'
             */
            secret?: string;

            /**
             * Version of API to hit. Defaults to 'v1'.
             */
            scheme?: string;

            /**
             * Computed webhook signature
             */
            signature?: string;
        }

        class EphemeralKeys {
            create(
                customer: ephemeralKeys.ICustomer,
                stripe_version: ephemeralKeys.IStripeVersion,
                response?: IResponseFn<ephemeralKeys.IEphemeralKey>,
            ): Promise<ephemeralKeys.IEphemeralKey>;
        }
    }

    interface IObject {
        object: string;
    }

    interface IResourceObject extends IObject {
        id: string;
    }

    interface ICardHashInfo {
        /**
         * The card number
         */
        number?: string;

        /**
         * Card brand. Can be Visa, American Express, MasterCard, Discover, JCB, Diners Club, or Unknown.
         */
        brand: 'Visa' | 'American Express' | 'MasterCard' | 'Discover' | 'JCB' | 'Diners Club' | 'Unknown';
        exp_month: number;
        exp_year: number;

        /**
         * Card funding type. Can be credit, debit, prepaid, or unknown
         */
        funding: 'credit' | 'debit' | 'prepaid' | 'unknown';
        last4: string;
        address_city: string | null;

        /**
         * Billing address country, if provided when creating card
         */
        address_country: string | null;
        address_line1: string | null;

        /**
         * If address_line1 was provided, results of the check: pass, fail, unavailable, or unchecked.
         */
        address_line1_check: 'pass' | 'fail' | 'unavailable' | 'unchecked' | null;
        address_line2: string | null;
        address_state: string | null;
        address_zip: string | null;

        /**
         * If address_zip was provided, results of the check: pass, fail, unavailable, or unchecked.
         */
        address_zip_check: 'pass' | 'fail' | 'unavailable' | 'unchecked' | null;

        /**
         * Two-letter ISO code representing the country of the card. You could use this
         * attribute to get a sense of the international breakdown of cards you've collected.
         */
        country: string;

        /**
         * If a CVC was provided, results of the check: pass, fail, unavailable, or unchecked
         */
        cvc_check: 'pass' | 'fail' | 'unavailable' | 'unchecked';

        /**
         * (For Apple Pay integrations only.) The last four digits of the device account number.
         */
        dynamic_last4: string | null;

        /**
         * Cardholder name
         */
        name: string | null;

        /**
         * Uniquely identifies this particular card number. You can use this attribute to check
         * whether two customers who've signed up with you are using the same card number, for example.
         */
        fingerprint: string;
        metadata?: IMetadata;

        /**
         * If the card number is tokenized, this is the method that was
         * used. Can be "apple_pay" or "android_pay".
         */
        tokenization_method: 'apple_pay' | 'android_pay' | null;
    }

    type IResponseFn<R> = (err: IStripeError, value: R) => void;

    interface IDeleteConfirmation {
        id: string;
        object: string;
        deleted: boolean;
    }

    /**
     * A filter on the list based on this object field. The value can
     * be a string with an integer Unix timestamp, or it can be a
     * dictionary with the following options:
     */
    type IDateFilter =
        | string
        | {
              /**
               * Return values where the created field is after this timestamp.
               */
              gt?: string;

              /**
               * Return values where the created field is after or equal to this timestamp.
               */
              gte?: string;

              /**
               * Return values where the created field is before this timestamp.
               */
              lt?: string;

              /**
               * Return values where the created field is before or equal to this timestamp.
               */
              lte?: string;
          };

    /**
     * A set of key/value pairs that you can attach to an object. It can be useful for storing
     * additional information about the object in a structured format.
     */
    interface IOptionsMetadata {
        [x: string]: string | number;
    }

    /**
     * A set of key/value pairs that you can attach to an object. It can be useful for storing
     * additional information about the object in a structured format.
     */
    interface IMetadata {
        [x: string]: string;
    }

    interface IAddress {
        /**
         * Address line 1 (Street address/PO Box/Company name)
         */
        line1: string;

        /**
         * Address line 2 (Apartment/Suite/Unit/Building)
         */
        line2?: string | null;

        /**
         * City/Suburb/Town/Village
         */
        city?: string | null;

        /**
         * State/Province/County
         */
        state?: string | null;

        /**
         * Zip/Postal Code
         */
        postal_code?: string | null;

        /**
         * 2-letter country code
         */
        country?: string | null;
    }

    interface IAddressKana {
        /**
         * City or ward.
         * This can be unset by updating the value to null and then saving.
         */
        city?: string;

        /**
         * Two-letter country code (ISO 3166-1 alpha-2).
         * This can be unset by updating the value to null and then saving.
         */
        country?: string;

        /**
         * Block or building number.
         * This can be unset by updating the value to null and then saving.
         */
        line1?: string;

        /**
         * Building details.
         * This can be unset by updating the value to null and then saving.
         */
        line2?: string;

        /**
         * Postal code.
         * This can be unset by updating the value to null and then saving.
         */
        postal_code?: string;

        /**
         * Prefecture.
         * This can be unset by updating the value to null and then saving.
         */
        state?: string;

        /**
         * Town or cho-me.
         * This can be unset by updating the value to null and then saving.
         */
        town?: string;
    }

    interface IAddressKanji {
        /**
         * City or ward.
         * This can be unset by updating the value to null and then saving.
         */
        city?: string;

        /**
         * Two-letter country code (ISO 3166-1 alpha-2).
         * This can be unset by updating the value to null and then saving.
         */
        country?: string;

        /**
         * Block or building number.
         * This can be unset by updating the value to null and then saving.
         */
        line1?: string;

        /**
         * Building details.
         * This can be unset by updating the value to null and then saving.
         */
        line2?: string;

        /**
         * Postal code.
         * This can be unset by updating the value to null and then saving.
         */
        postal_code?: string;

        /**
         * Prefecture.
         * This can be unset by updating the value to null and then saving.
         */
        state?: string;

        /**
         * Town or cho-me.
         * This can be unset by updating the value to null and then saving.
         */
        town?: string;
    }

    interface IShippingInformation {
        /**
         * Shipping address.
         */
        address: IAddress;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string | null;

        /**
         * Recipient phone (including extension).
         */
        phone?: string | null;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple
         * tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string | null;
    }

    interface IList<T> {
        /**
         * Value is 'list'
         */
        object: string;

        /**
         * An array containing the actual response elements, paginated by any request parameters.
         */
        data: T[];

        /**
         * Whether or not there are more elements available after this set. If false, this set comprises the end of the list.
         */
        has_more: boolean;

        /**
         * The URL for accessing this list.
         */
        url: string;

        /**
         * The total number of items available. This value is not included by default,
         * but you can request it by specifying ?include[]=total_count
         */
        total_count?: number;
    }

    interface IListOptions extends IDataOptions {
        /**
         * A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make
         * a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in
         * order to fetch the previous page of the list.
         */
        ending_before?: string;

        /**
         * A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
         */
        limit?: number;

        /**
         * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make
         * a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order
         * to fetch the next page of the list.
         */
        starting_after?: string;
    }

    interface IListOptionsCreated extends IListOptions {
        /**
         * A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can
         * be a dictionary.
         */
        created?: string | IDateFilter;
    }

    interface IDataOptions {
        expand?: string[];
        include?: string[];
    }

    interface IDataOptionsWithMetadata extends IDataOptions {
        /**
         * A set of key/value pairs that you can attach to an object. It can be
         * useful for storing additional information about the object in a structured
         * format. You can unset an individual key by setting its value to null and
         * then saving. To clear all keys, set metadata to null, then save.
         */
        metadata?: IOptionsMetadata;
    }

    interface IHeaderOptions {
        /**
         * To safely retry an API request without accidentally performing the same operation twice,
         * you can attach a unique key to any POST request made to the Stripe API via the Idempotency-Key: <key> header.
         * For example, if a request to create a charge fails due to a network connection error, you can make
         * a second request with the same key to guarantee that only a single charge is created.
         * The creation of the key is completely up to you. We suggest using random strings or UUIDs.
         * We'll always send back the same response for requests made with the same key, even if you make the request
         * with different request parameters. The keys expire after 24 hours.
         */
        idempotency_key?: string;

        stripe_account?: string;

        api_key?: string;

        /**
         * Many objects contain the ID of a related object in their response properties. For example, a Charge may have an associated Customer ID.
         * Those objects can be expanded inline with the expand request parameter. Objects that can be expanded are noted in this documentation.
         * This parameter is available on all API requests, and applies to the response of that request only.
         *
         * You can nest expand requests with the dot property. For example, requesting invoice.customer on a charge will expand the invoice property
         * into a full Invoice object, and will then expand the customer property on that invoice into a full Customer object.
         *
         * You can expand multiple objects at once by identifying multiple items in the expand array.
         */
        expand?: string[];
    }

    /**
     * Header options can either be a Connect Account Secret Key,
     * or a hash with one or more of these keys: idempotency_key, stripe_account, api_key
     */
    type HeaderOptions = IHeaderOptions | string;

    /**
     * Contains all stripe error classes
     */
    namespace errors {
        class _Error extends Error {
            readonly message: string;
        }

        namespace _Error {}

        type RawType = 'card_error' | 'invalid_request_error' | 'api_error' | 'idempotency_error';

        abstract class StripeError extends _Error implements IStripeError {
            static populate(type: RawType): StripeError;

            readonly rawType: RawType;
            readonly code?: string;
            readonly raw: any;
            readonly headers: {
                [key: string]: string;
            };
            readonly requestId: string;
            readonly detail?: any;
            readonly params?: string;
            readonly type: string;
            readonly statusCode?: number;

            readonly charge?: string;
            readonly decline_code?: string;
            readonly payment_intent?: paymentIntents.IPaymentIntent;
            readonly payment_method?: paymentMethods.IPaymentMethod;
            readonly setup_intent?: setupIntents.ISetupIntent;
            readonly source?: sources.ISource;
        }

        class StripeCardError extends StripeError {
            readonly type: 'StripeCardError';
        }

        class StripeInvalidRequestError extends StripeError {
            readonly type: 'StripeInvalidRequestError';
        }

        class StripeAPIError extends StripeError {
            readonly type: 'StripeAPIError';
        }

        class StripeAuthenticationError extends StripeError {
            readonly type: 'StripeAuthenticationError';
        }

        class StripePermissionError extends StripeError {
            readonly type: 'StripePermissionError';
        }

        class StripeRateLimitError extends StripeError {
            readonly type: 'StripeRateLimitError';
        }

        class StripeConnectionError extends StripeError {
            readonly type: 'StripeConnectionError';
        }

        class StripeSignatureVerificationError extends StripeError {
            readonly type: 'StripeSignatureVerificationError';
        }

        class StripeIdempotencyError extends StripeError {
            readonly type: 'StripeIdempotencyError';
        }
    }

    /**
     * Stripe uses conventional HTTP response codes to indicate success or failure of an API request.
     * In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that
     * resulted from the provided information (e.g. a required parameter was missing, a charge failed, etc.),
     * and codes in the 5xx range indicate an error with Stripe's servers. Not all errors map cleanly onto HTTP
     * response codes, however. When a request is valid but does not complete successfully (e.g. a card is
     * declined), we return a 402 error code.
     *
     * 200 - OK                           Everything worked as expected.
     * 400 - Bad Request                  Often missing a required parameter.
     * 401 - Unauthorized                 No valid API key provided.
     * 402 - Request Failed               Parameters were valid but request failed.
     * 404 - Not Found                    The requested item doesn't exist.
     * 500, 502, 503, 504 - Server Errors Something went wrong on Stripe's end.
     */
    interface IStripeError {
        /**
         * The type of error returned. Can be invalid_request_error, api_error, or card_error.
         *
         *
         * invalid_request_error Invalid request errors arise when your request has invalid parameters.
         *
         * api_error             API errors cover any other type of problem (e.g. a temporary problem with Stripe's
         *                       servers) and should turn up only very infrequently.
         *
         * card_error            Card errors are the most common type of error you should expect to handle. They result
         *                       when the user enters a card that can't be charged for some reason.
         */
        type: string;

        /**
         * A human-readable message giving more details about the error. For card errors, these messages can
         * be shown to your users.
         */
        message?: string;

        /**
         * For card errors, a short string from amongst those listed on the right describing the kind of card
         * error that occurred.
         *
         * incorrect_number          The card number is incorrect.
         * invalid_number            The card number is not a valid credit card number.
         * invalid_expiry_month      The card's expiration month is invalid.
         * invalid_expiry_year       The card's expiration year is invalid.
         * invalid_cvc               The card's security code is invalid.
         * expired_card              The card has expired.
         * incorrect_cvc             The card's security code is incorrect.
         * incorrect_zip             The card's zip code failed validation.
         * card_declined             The card was declined.
         * missing                   There is no card on a customer that is being charged.
         * processing_error          An error occurred while processing the card.
         * rate_limit                An error occurred due to requests hitting the API too
         *                             quickly. Please let us know if you're consistently running
         *                             into this error.
         */
        code?: string;

        /**
         * The parameter the error relates to if the error is parameter-specific. You can use this to display a
         * message near the correct form field, for example.
         */
        param?: string;
    }
}
