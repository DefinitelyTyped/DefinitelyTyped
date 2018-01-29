// Type definitions for stripe 5.0
// Project: https://github.com/stripe/stripe-node/
// Definitions by: William Johnston <https://github.com/wjohnsto>
//                 Peter Harris <https://github.com/codeanimal>
//                 Sampson Oliver <https://github.com/sampsonjoliver>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 Brannon Jones <https://github.com/brannon>
//                 Kyle Kamperschroer <https://github.com/kkamperschroer>
//                 Kensuke Hoshikawa <https://github.com/starhoshi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

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

    accounts: Stripe.resources.Accounts;
    balance: Stripe.resources.Balance;
    charges: Stripe.resources.Charges;
    coupons: Stripe.resources.Coupons;
    customers: Stripe.resources.Customers;
    disputes: Stripe.resources.Disputes;
    events: Stripe.resources.Events;
    invoices: Stripe.resources.Invoices;
    invoiceItems: Stripe.resources.InvoiceItems;
    payouts: Stripe.resources.Payouts;
    plans: Stripe.resources.Plans;
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
    tokens: Stripe.resources.Tokens;
    transfers: Stripe.resources.Transfers;
    applicationFees: Stripe.resources.ApplicationFees;
    fileUploads: Stripe.resources.FileUploads;
    bitcoinReceivers: Stripe.resources.BitcoinReceivers;
    refunds: Stripe.resources.Refunds;
    countrySpecs: Stripe.resources.CountrySpecs;
    orders: Stripe.resources.Orders;
    products: Stripe.resources.Products;
    skus: Stripe.resources.SKUs;
    webhooks: Stripe.resources.WebHooks;
    ephemeralKeys: Stripe.resources.EphemeralKeys;

    setHost(host: string): void;
    setHost(host: string, port: string|number): void;
    setHost(host: string, port: string|number, protocol: string): void;

    setProtocol(protocol: string): void;
    setPort(port: string|number): void;
    setApiVersion(version?: string): void;
    setApiKey(key?: string): void;
    setTimeout(timeout?: number): void;
    setHttpAgent(agent: string): void;
    getConstant(c: string): any;
    getClientUserAgent(response: (userAgent: string) => void): void;
}
export = Stripe;

declare namespace Stripe {
    // Helper
    type IBankAccount = bankAccounts.IBankAccount;
    type ICard = cards.ICard;

    namespace accounts {
        interface IAccount extends IResourceObject, IAccountShared {
            /**
             * Value is "account"
             */
            object: string;

            /**
             * Whether or not the account can create live charges
             */
            charges_enabled: boolean;

            /**
             * The country of the account
             */
            country: string;

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
             * Whether or not Stripe will send automatic transfers for this account. This
             * is only false when Stripe is waiting for additional information from the
             * account holder.
             */
            transfers_enabled: boolean;

            /**
             * The state of the account’s information requests, including what
             * information is needed and by when it must be provided.
             */
            verification: {
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
                fields_needed: Array<string>;
            }
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
             * Whether you'd like to create a Custom or Standard account. Custom
             * accounts have extra parameters available to them, and require that you,
             * the platform, handle all communication with the account holder.
             * Standard accounts are normal Stripe accounts: Stripe will email the
             * account holder to setup a username and password, and handle all account
             * management directly with them. Possible values are custom and standard.
             */
            type: 'custom' | 'standard';
        }

        interface IAccountShared {
            business_logo?: string;

            /**
             * The publicly sharable name for this account
             */
            business_name?: string;

            /**
             * A CSS hex color value representing the primary branding color for this
             * account
             */
            business_primary_color?: string;

            /**
             * The URL that best shows the service or product provided for this account
             */
            business_url?: string;

            /**
             * A boolean for whether or not Stripe should try to reclaim negative
             * balances from the account holder’s bank account. See our managed
             * account bank transfer guide for more information
             */
            debit_negative_balances?: boolean;

            /**
             * Account-level settings to automatically decline certain types of charges
             * regardless of the bank’s decision.
             */
            decline_charge_on?: {
                /**
                 * Whether or not Stripe should automatically decline charges with an
                 * incorrect zip/postal code. This setting only applies if a card includes a
                 * zip code and the bank specifically marks it as failed.
                 */
                avs_failure?: boolean;

                /**
                 * Whether or not Stripe should automatically decline charges with an
                 * incorrect CVC. This setting only applies if a card includes a CVC and the
                 * bank specifically marks it as failed.
                 */
                cvc_failure?: boolean;
            };

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
             * Information about the holder of this account, i.e. the user receiving funds
             * from this account
             */
            legal_entity?: {}; //TODO: Implement this type definition.

            /**
             * A set of key/value pairs that you can attach to an account object. It can be
             * useful for storing additional information about the account in a structured
             * format. This can be unset by updating the value to null and then saving.
             */
            metadata?: IMetadata;

            /**
             * Internal-only description of the product being sold or service being
             * provided by this account. It’s used by Stripe for risk and underwriting
             * purposes.
             */
            product_description?: string;

            /**
             * The text that will appear on credit card statements by default if a charge is
             * being made directly on the account.
             */
            statement_descriptor?: string;

            /**
             * A publicly shareable email address that can be reached for support for this
             * account
             */
            support_email?: string;

            /**
             * A publicly shareable phone number that can be reached for support for
             * this account
             */
            support_phone?: string;

            /**
             * A publicly shareable URL that can be reached for support for this account
             */
            support_url?: string;

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

            /**
             * Details on when this account will make funds from charges available, and
             * when they will be paid out to the account holder’s bank account. See our
             * managed account bank transfer guide for more information
             */
            transfer_schedule?: {
                /**
                 * The number of days charges for the account will be held before being
                 * paid out. May also be the string “minimum” for the lowest available
                 * value (based on country). Default is “minimum”. Does not apply when
                 * interval is “manual”.
                 */
                delay_days?: number | string;

                /**
                 * How frequently funds will be paid out. One of "manual" (for only
                 * triggered via API call), "daily", "weekly", or "monthly". Default is "daily".
                 */
                interval?: string;

                /**
                 * The day of the month funds will be paid out. Required and available
                 * only if interval is "monthly".
                 */
                monthly_anchor?: number;

                /**
                 * The day of the week funds will be paid out, of the style ‘monday’,
                 * ‘tuesday’, etc. Required and available only if interval is weekly.
                 */
                weekly_anchor?: string;
            }
        }

        interface IAccountUpdateOptions extends IDataOptions, IAccountShared {
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
                account_holder_type?: string;

                /**
                 * The routing number, sort code, or other country-appropriate institution
                 * number for the bank account. For US bank accounts, this is required
                 * and should be the ACH routing number, not the wire routing number. If
                 * you are providing an IBAN for account_number, this field is not
                 * required.
                 */
                routing_number?: string;
            }
        }

        interface IExternalAccountCreationOptions extends IDataOptionsWithMetadata {
            /**
             * When adding a card to a customer, the parameter name is source. When
             * adding to an account, the parameter name is external_account. The
             * value can either be a token, like the ones returned by our Stripe.js, or a
             * dictionary containing a user’s credit card details (with the options shown
             * below). Stripe will automatically validate the card.
             */
            external_account: string ;

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
            object: "bank_account"
        }

        interface ICardListOptions extends IListOptions {
            object: "card"
        }

        interface IRejectReason {
            /**
             * The reason for rejecting the account. May be one of "fraud",
             * "terms_of_service", or "other".
             */
            reason: "fraud" | "terms_of_service" | "other" ;
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
            application: string; //TODO: Implement IApplication interface and reference type here for expansion:- "string | IApplication"

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
            object:string;

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

        interface IApplicationFeeRefunds extends IList<IApplicationFeeRefund>, resources.ApplicationFeeRefunds { }

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
            available: Array<ISourceType>;

            livemode: boolean;

            /**
             * Funds that are not available in the balance yet, due to the 7-day rolling pay
             * cycle. The pending balance for each currency and payment type can be
             * found in the source_types property
             */
            pending: Array<ISourceType>;
        }

        interface ISourceType {
            currency: string;
            amount: number;
            source_types: {
                card: number;
                bitcoin_receiver?: number;
                customer_bank_account?: number;
                alipay_account?: number;
            }
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
            source_transfers: IList<transfers.ITransfer>;

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

        interface IBalanceListOptions extends IListOptions {
            available_on?: string | IDateFilter;
            currency?: string;

            /**
             * Only returns transactions that are related to the specified Stripe object ID
             * (e.g. filtering by a charge ID will return all related charge transactions).
             */
            source?: string;

            /**
             * For automatic Stripe transfers only, only returns transactions that were
             * transferred out on the specified transfer ID.
             */
            transfer?: string;

            /**
             * Only returns transactions of the given type. One of: "charge", "refund",
             * "adjustment", "application_fee", "application_fee_refund", "transfer",
             * or "transfer_failure"
             */
            type?: string;
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
            object: "charge";

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
             * The application fee (if any) for the charge. See the Connect documentation
             * for details. [Expandable]
             */
            application_fee?: string | applicationFees.IApplicationFee;

            /**
             * ID of the balance transaction that describes the impact of this charge on
             * your account balance (not including refunds or disputes). [Expandable]
             */
            balance_transaction: string | balance.IBalanceTransaction;

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
            customer: string | customers.ICustomer;

            description?: string;

            /**
             * Details about the dispute if the charge has been disputed.
             */
            dispute?: disputes.IDispute;

            /**
             * Error code explaining reason for charge failure if available (see the errors section for a list of
             * codes: https://stripe.com/docs/api#errors).
             */
            failure_code: string;

            /**
             * Message to user further explaining reason for charge failure if available.
             */
            failure_message: string;

            /**
             * Hash with information on fraud assessments for the charge.
             */
            fraud_details: {
                /**
                 * Assessments reported by you have the key user_report and, if set, possible values of "safe" and "fraudulent".
                 */
                user_report?: "fraudulent" | "safe";

                /**
                 * Assessments from Stripe have the key stripe_report and, if set, the value "fraudulent".
                 */
                stripe_report?: "fraudulent";
            };

            /**
             * ID of the invoice this charge is for if one exists. [Expandable]
             */
            invoice: string | invoices.IInvoice;

            livemode: boolean;

            metadata: IMetadata;

            /**
             * ID of the order this charge is for if one exists. [Expandable]
             */
            order: string | orders.IOrder;

            /**
             * true if the charge succeeded, or was successfully authorized for later capture.
             */
            paid: boolean;

            /**
             * This is the email address that the receipt for this charge was sent to.
             */
            receipt_email: string;

            /**
             * This is the transaction number that appears on email receipts sent for this charge.
             */
            receipt_number: string;

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
             * Shipping information for the charge.
             */
            shipping?: IShippingInformation;

            /**
             * For most Stripe users, the source of every charge is a credit or debit card.
             * This hash is then the card object describing that card.
             */
            source: cards.ICard | bitcoinReceivers.IBitcoinReceiver;

            /**
             * The transfer ID which created this charge. Only present if the charge came
             * from another Stripe account. See the Connect documentation for details.
             * [Expandable]
             */
            source_transfer: string | transfers.ITransfer;

            /**
             * Extra information about a charge. This will appear on your customer’s
             * credit card statement.
             */
            statement_descriptor: string;

            /**
             * The status of the payment is either "succeeded", "pending", or "failed".
             */
            status: "succeeded" | "pending" | "failed";

            /**
             * ID of the transfer to the destination account (only applicable if the
             * charge was created using the destination parameter). [Expandable]
             */
            transfer: string | transfers.ITransfer;
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
             * 3-letter ISO code for currency.
             */
            currency: string;

            /**
             * A fee in pence that will be applied to the charge and transferred to the
             * application owner's Stripe account. To use an application fee, the request
             * must be made on behalf of another account, using the Stripe-Account
             * header, an OAuth key, or the destination parameter. For more
             * information, see the application fees documentation.
             *
             * Connect only.
             */
            application_fee?: number;

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
             * An account to make the charge on behalf of. If specified, the charge will be
             * attributed to the destination account for tax reporting, and the funds from
             * the charge will be transferred to the destination account. The ID of the
             * resulting transfer will be returned in the transfer field of the response. See
             * the documentation for details.
             *
             * Connect only.
             */
            destination?: string;

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
            source?: sources.ISourceCreationOptions;

            /**
             * An arbitrary string to be displayed on your customer's credit card
             * statement. This may be up to 22 characters. As an example, if your
             * website is RunClub and the item you're charging for is a race ticket, you
             * may want to specify a statement_descriptor of
             * RunClub 5K race ticket. The statement description may not include
             * <>"' characters, and will appear on your customer's statement in capital
             * letters. Non-ASCII characters are automatically stripped. While most
             * banks display this information consistently, some may display it
             * incorrectly or not at all.
             */
            statement_descriptor?: string;
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
                user_report?: "fraudulent" | "safe";
            }

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
                object: "all" | "alipay_account" | "bitcoin_receiver" | "card";
            }
        }

        interface IChargeRefunds extends IList<refunds.IRefund>, resources.ChargeRefunds { }
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
            object: "discount";

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
            object: "coupon";

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
            duration: "forever" | "once" | "repeating" ;

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
            duration: "forever" | "once" | "repeating" ;

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
            object: "customer";

            /**
             * Current balance, if any, being stored on the customer's account. If negative, the customer has credit to apply to
             * the next invoice. If positive, the customer has an amount owed that will be added to the next invoice. The balance
             * does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied
             * to any invoice. This balance is only taken into account for recurring charges.
             */
            account_balance?: number;

            created: number;

            /**
             * The currency the customer can be charged in for recurring billing purposes (subscriptions, invoices, invoice items).
             */
            currency: string;

            /**
             * ID of the default source attached to this customer. [Expandable]
             */
            default_source: string | cards.ICard | bitcoinReceivers.IBitcoinReceiver;

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

            livemode: boolean;

            metadata?: IMetadata;

            /**
             * Shipping information associated with the customer.
             */
            shipping: IShippingInformation;

            /**
             * The customer’s payment sources, if any
             */
            sources?: IList<cards.ICard | bitcoinReceivers.IBitcoinReceiver>;

            cards?: resources.CustomerCards;

            /**
             * The customer's current subscriptions, if any
             */
            subscriptions: ICustomerSubscriptions;
        }

        interface ICustomerSubscriptions extends IList<subscriptions.ISubscription>, resources.CustomerSubscriptions {}

        interface ICustomerCreationOptions extends IDataOptionsWithMetadata {
            /**
             * An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that
             * will be used before attempting any charges to the customer's card; a positive amount will be added to the next invoice.
             */
            account_balance?: number;

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
             * The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions
             * that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a
             * valid card as well.
             */
            plan?: string;

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
            source?: sources.ISourceCreationOptionsExtended;

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
            trial_end?: number | "now";
        }

        interface ICustomerUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that
             * will be used before attempting any charges to the customer's card; a positive amount will be added to the next invoice.
             */
            account_balance?: number;

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
            source?: sources.ISourceCreationOptionsExtended;
        }

        interface ICustomerSourceCreationOptions extends IDataOptionsWithMetadata {
            /**
             * When adding a card to a customer, the parameter name is source. When
             * adding to an account, the parameter name is external_account. The
             * value can either be a token, like the ones returned by our Stripe.js, or a
             * dictionary containing a user’s credit card details (with the options shown
             * below). Stripe will automatically validate the card.
             */
            source: sources.ISourceCreationOptions;
        }

        interface ICustomerCardSourceCreationOptions extends ICustomerSourceCreationOptions {
            source: cards.ISourceCreationOptions;
        }

        interface IBankAccountSourceListOptions extends IListOptions {
            object: "bank_account"
        }

        interface ICardSourceListOptions extends IListOptions {
            object: "card"
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
            object: "dispute";

            /**
             * Disputed amount. Usually the amount of the charge, but can differ (usually because of currency
             * fluctuation or because only part of the order is disputed).
             */
            amount: number;

            /**
             * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your
             * Stripe account as a result of this dispute.
             */
            balance_transactions: Array<balance.IBalanceTransaction>;

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
            reason: "duplicate" | "fraudulent" | "subscription_canceled" | "product_unacceptable" | "product_not_received" | "unrecognized" | "credit_not_processed" | "incorrect_account_details" | "insufficient_funds" | "bank_cannot_process" | "debit_not_authorized" | "general";

            /**
             * Current status of dispute. Possible values are warning_needs_response, warning_under_review, warning_closed,
             * needs_response, response_disabled, under_review, charge_refunded, won, lost.
             */
            status: "warning_needs_response" | "warning_under_review" | "warning_closed" | "needs_response" | "response_disabled" | "under_review" | "charge_refunded" | "won" | "lost";
        }

        interface IDisputeEvidence {
            /**
             * Any server or activity logs showing proof that the customer accessed or downloaded the purchased
             * digital product. This information should include IP addresses, corresponding timestamps, and any
             * detailed recorded activity.
             */
            access_activity_log?: string;

            /**
             * The billing addess provided by the customer.
             */
            billing_address?: string;

            /**
             * (ID of a file upload) Your subscription cancellation policy, as shown to the customer. [Expandable]
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
             * (ID of a file upload) Any communication with the customer that you feel is relevant to your case (for
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
             * (ID of a file upload) A relevant document or contract showing the customer's signature. [Expandable]
             */
            customer_signature?: string;

            /**
             * (ID of a file upload) Documentation for the prior charge that can uniquely identify the charge,
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
             * (ID of a file upload) Any receipt or message sent to the customer notifying them of the charge. [Expandable]
             */
            receipt?: string;

            /**
             * (ID of a file upload) Your refund policy, as shown to the customer. [Expandable]
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
             * (ID of a file upload) Documentation showing proof that a service was provided to the customer. This could
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
             * (ID of a file upload) Documentation showing proof that a product was shipped to the customer at the same address
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
             * (ID of a file upload) Any additional evidence or statements. [Expandable]
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
            evidence?: disputes.IDisputeEvidence;
        }
    }

    namespace events {
        interface IEvent extends IResourceObject {
            /**
             * Value is "event"
             */
            object: "event";

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

                /**
                 *
                 */
                previous_attributes?: {};
            };

            livemode: boolean;

            /**
             * Number of webhooks yet to be delivered successfully (return a 20x response) to the URLs you’ve specified.
             *
             * positive integer or zero
             */
            pending_webhooks: number;

            /**
             * ID of the API request that caused the event. If null, the event was
             * automatic (e.g. Stripe’s automatic subscription handling). Request logs are
             * available in the dashboard but currently not in the API. Note: this property
             * is populated for events on or after April 23, 2013.
             */
            request?: string;

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

    namespace fileUploads {
        interface IFileUpdate extends IResourceObject {
            /**
             * Value is "file_upload"
             */
            object: "file_upload";

            created: number;

            /**
             * The purpose of the uploaded file. Possible values are "business_logo",
             * "dispute_evidence", "identity_document", "incorporation_article",
             * "incorporation_document".
             */
            purpose: IPurpose;

            /**
             * The size in bytes of the file upload object.
             */
            size: number;

            /**
             * The type of the file returned. Returns one of the following:
             * pdf, jpg, png.
             */
            type: "pdf" | "jpg" | "png";

            /**
             * A read-only URL where the uploaded file can be accessed. Will be nil
             * unless the uploaded file has one of the following purposes:
             *  business_logo, dispute_evidence, incorporation_document.
             * Also nil if retrieved with the publishable API key.
             */
            url: string;
        }

        interface IFileUploadCreationOptions extends IDataOptions {
            purpose: IPurpose;
            file: {
                data: string | Buffer;
                name: string;
                type: string | "application/octet-stream";
            }
        }

        interface IFileUploadListOptions extends IListOptionsCreated {
            /**
             * The file purpose to filter queries by. If none is provided, files will not be
             * filtered by purpose.
             */
            purpose: IPurpose;
        }

        type IPurpose = "business_logo" | "dispute_evidence" | "identity_document" | "incorporation_article" | "incorporation_document";
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
            object: "invoice";

            /**
             * Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge
             * amount, for example, or if there is account credit that can be applied to the invoice, the amount_due may
             * be 0. If there is a positive starting_balance for the invoice (the customer owes money), the amount_due
             * will also take that into account. The charge that gets generated for the invoice will be for the amount
             * specified in amount_due.
             */
            amount_due: number;

            /**
             * The fee in cents that will be applied to the invoice and transferred to the application owner's
             * Stripe account when the invoice is paid.
             */
            application_fee: number;

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
             * ID of the latest charge generated for this invoice, if any. [Expandable]
             */
            charge: string | charges.ICharge;

            /**
             * Whether or not the invoice is still trying to collect payment. An invoice is closed if it's either paid or
             * it has been marked closed. A closed invoice will no longer attempt to collect payment.
             */
            closed: boolean;

            currency: string;
            customer: string;
            date: number;
            description: string;
            discount: coupons.IDiscount;

            /**
             * Ending customer balance after attempting to pay invoice. If the invoice has not been attempted yet,
             * this will be null.
             */
            ending_balance: number;

            /**
             * Whether or not the invoice has been forgiven. Forgiving an invoice instructs us to update the subscription
             * status as if the invoice were succcessfully paid. Once an invoice has been forgiven, it cannot be unforgiven
             * or reopened
             */
            forgiven: boolean;

            /**
             * The individual line items that make up the invoice.
             *
             * lines is sorted as follows: invoice items in reverse chronological order, followed by the subscription, if any.
             */
            lines: IList<IInvoiceLineItem>;

            livemode: boolean;
            metadata: IMetadata;

            /**
             * The time at which payment will next be attempted.
             */
            next_payment_attempt: number;

            /**
             * Whether or not payment was successfully collected for this invoice. An invoice can be paid (most commonly)
             * with a charge or with credit from the customer's account balance.
             */
            paid: boolean;

            /**
             * End of the usage period during which invoice items were added to this invoice
             */
            period_end: number;

            /**
             * Start of the usage period during which invoice items were added to this invoice
             */
            period_start: number;

            /**
             * This is the transaction number that appears on email receipts sent for this invoice.
             */
            receipt_number: string;

            /**
             * Starting customer balance before attempting to pay invoice. If the invoice has not been attempted yet,
             * this will be the current customer balance.
             */
            starting_balance: number;

            /**
             * Extra information about an invoice for the customer�s credit card statement.
             */
            statement_descriptor: string;

            /**
             * The subscription that this invoice was prepared for, if any.
             */
            subscription: string;

            /**
             * Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
             */
            subscription_proration_date: number;

            /**
             * Total of all subscriptions, invoice items, and prorations on the invoice before any discount is applied
             */
            subtotal: number;

            /**
             * The amount of tax included in the total, calculated from tax_percent and the subtotal. If no tax_percent
             * is defined, this value will be null.
             */
            tax: number;

            /**
             * This percentage of the subtotal has been added to the total amount of the invoice, including invoice line
             * items and discounts. This field is inherited from the subscription's tax_percent field, but can be changed
             * before the invoice is paid. This field defaults to null.
             */
            tax_percent: number;

            /**
             * Total after discount
             */
            total: number;

            /**
             * The time at which webhooks for this invoice were successfully delivered (if the invoice had no webhooks to
             * deliver, this will match date). Invoice payment is delayed until webhooks are delivered, or until all webhook
             * delivery attempts have been exhausted.
             */
            webhooks_delivered_at: number;
        }

        interface IInvoiceLineItem extends IResourceObject {
            /**
             * The ID of the source of this line item, either an invoice item or a subscription
             */
            id: string;

            /**
             * Value is "line_item"
             */
            object: "line_item";

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
             * A string identifying the type of the source of this line item, either an invoiceitem or a subscription
             */
            type: "invoiceitem" | "subscription";
        }

        interface IInvoiceCreationOptions extends IDataOptionsWithMetadata {
            customer: string;

            /**
             * A fee in pence that will be applied to the invoice and transferred to the application owner’s Stripe account.
             * The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee.
             * For more information, see the application fees documentation.
             */
            application_fee?: number;

            description?: string;

            /**
             * Extra information about a charge for the customer’s credit card statement.
             */
            statement_descriptor?: string

            /**
             * The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for
             * the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions.
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
             * Boolean representing whether an invoice is closed or not. To close an invoice, pass true.
             */
            closed?: boolean;

            description?: string;

            /**
             * Boolean representing whether an invoice is forgiven or not. To forgive an invoice, pass true. Forgiving an invoice
             * instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been
             * forgiven, it cannot be unforgiven or reopened.
             */
            forgiven?: boolean;

            /**
             * Extra information about a charge for the customer’s credit card statement.
             */
            statement_descriptor?: string

            /**
             * The percent tax rate applied to the invoice, represented as a decimal number.
             */
            tax_percent?: number;
        }

        interface IInvoicePayOptions extends IDataOptionsWithMetadata {
          /**
             * A payment source to be charged. The source must be the ID of a source
             * belonging to the customer associated with the invoice being paid.
             */
          source?: sources.ISourceCreationOptions;
        }

        interface IInvoiceListOptions extends IListOptions {
            /**
             * The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned.
             */
            customer?: string;

            date?: IDateFilter;
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
    }
    namespace invoiceItems {
        interface InvoiceItem extends IResourceObject {
            /**
             * Value is "invoiceitem"
             */
            object: "invoiceitem";

            amount: number;
            currency: string;
            customer: string;
            date: number;
            description: string;

            /**
             * If true, discounts will apply to this invoice item. Always false for prorations.
             */
            discountable: boolean;

            invoice: string;
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
            subscription: string;
        }

        interface InvoiceItemCreationOptions extends IDataOptionsWithMetadata {
            /**
             * The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer’s
             * account, pass a negative amount.
             */
            amount: number;

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
             * The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming
             * scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice
             * item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.
             */
            subscription?: string;
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
        }
    }

    namespace orders {
        interface IOrder extends IResourceObject {
            /**
             * Value is "order"
             */
            object: "order";

            /**
             * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal
             * currency) representing the total amount for the order.
             */
            amount: number;

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
            items: Array<IOrderItem>;

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
            shipping_methods: Array<IShippingMethod>;

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
            object: "order_item";

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
            type: "sku" | "tax" | "shipping" | "discount" ;
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
            items?: Array<IOrderItemCreationHash>;

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

            status: OrderStatus;
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
            source?: sources.ISourceCreationOptions;

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
            ids?: Array<string>;

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
            }
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
            type?: "sku" | "tax" | "shipping" | "discount" ;
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
                type: "range" | "exact";
            };

            /**
             * Description of the line item, meant to be displayable to the user (e.g., "Express shipping").
             */
            description: string;
        }

        /**
         * Current order status. One of created, paid, canceled, fulfilled, or returned. More detail in the Relay API Overview.
         */
        type OrderStatus = "created" | "paid" | "canceled" | "fulfilled" | "returned";
    }

    namespace payouts {
        interface IPayout extends IResourceObject {
            /**
             * Value is "payout"
             */
            object: "payout";

            /**
             * Amount (in cents) to be transferred to your bank account or debit card
             */
            amount: number;

            /**
             * Date the payout is expected to arrive in the bank. This factors in delays like weekends or bank holidays
             */
            arrival_date: number;

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
            source_type: "alipay_account" | "bank_account" | "bitcoin_receiver" | "card";

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
            status: "canceled" | "failed" | "in_transit" | "paid" | "pending";

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
            source_type?: "alipay_account" | "bank_account" | "card";

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
            status?: "canceled" | "failed" | "paid" | "pending";
        }

        type PayoutMethods = "instant" | "standard";
        type PayoutTypes = "bank_account" | "card";
    }

    namespace plans {
        /**
         * A subscription plan contains the pricing information for different products and feature levels on your site.
         * For example, you might have a $10/month plan for basic features and a different $20/month plan for premium features.
         */
        interface IPlan extends IResourceObject {
            /**
             * Value is "plan"
             */
            object: "plan";

            /**
             * The amount in cents to be charged on the interval specified
             */
            amount: number;

            created: number;

            /**
             * Currency in which subscription will be charged
             */
            currency: string;

            /**
             * One of "day", "week", "month" or "year". The frequency with which a subscription should be billed.
             */
            interval: IntervalUnit;

            /**
             * The number of intervals (specified in the interval property) between each subscription billing. For example,
             * interval=month and interval_count=3 bills every 3 months.
             */
            interval_count: number;

            livemode: boolean;
            metadata: IMetadata;

            /**
             * Display name of the plan
             */
            name: string;

            /**
             * Extra information about a charge for the customer's credit card statement.
             */
            statement_descriptor: string;

            /**
             * Number of trial period days granted when subscribing a customer to this plan. Null if the plan has no trial period.
             */
            trial_period_days: number;
        }

        interface IPlanCreationOptions extends IDataOptionsWithMetadata {
            /**
             * Unique string of your choice that will be used to identify this plan when subscribing a customer. This could be an identifier
             * like "gold" or a primary key from your own database.
             */
            id: string;

            /**
             * A positive integer in cents/pence (or 0 for a free plan) representing how much to charge (on a recurring basis).
             */
            amount: number;

            /**
             * 3-letter ISO code for currency.
             */
            currency: string;

            /**
             * Specifies billing frequency. Either "day", "week", "month" or "year".
             */
            interval: IntervalUnit;

            /**
             * Name of the plan, to be displayed on invoices and in the web interface.
             */
            name: string;

            /**
             * The number of intervals between each subscription billing. For example, interval=month and interval_count=3 bills every 3 months.
             * Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
             */
            interval_count?: number;

            /**
             * An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website
             * is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan.
             * The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII
             * characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
             */
            statement_descriptor?: string;

            /**
             * Specifies a trial period in (an integer number of) days. If you include a trial period, the customer won't be billed for the first time
             * until the trial period ends. If the customer cancels before the trial period is over, she'll never be billed at all.
             */
            trial_period_days?: number;
        }

        interface IPlanUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * Name of the plan, to be displayed on invoices and in the web interface.
             */
            name?: string;

            /**
             * An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. As an example, if your website
             * is RunClub and the item you’re charging for is your Silver Plan, you may want to specify a statement_descriptor of RunClub Silver Plan.
             * The statement description may not include <>"' characters, and will appear on your customer’s statement in capital letters. Non-ASCII
             * characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
             */
            statement_descriptor?: string;
        }

        type IntervalUnit = "day" | "week" | "month" | "year";
    }

    namespace products {
        interface IProduct extends IResourceObject {
            /**
             * Value is "product"
             */
            object: "product";

            /**
             * Whether or not the product is currently available for purchase.
             */
            active: boolean;

            /**
             * A list of up to 5 attributes that each SKU can provide values for (e.g. ["color", "size"]).
             */
            attributes: Array<string>;

            /**
             * A short one-line description of the product, meant to be displayable to the customer.
             */
            caption: string;

            created: number;

            /**
             * An array of connect application identifiers that cannot purchase this product.
             */
            deactivated_on: Array<string>;

            /**
             * The product’s description, meant to be displayable to the customer.
             */
            description: string;

            /**
             * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
             */
            images: Array<string>;

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
             * A URL of a publicly-accessible webpage for this product.
             */
            url: string;
        }

        interface IProductCreationOptions extends IDataOptionsWithMetadata {
            /**
             * The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.
             */
            id?: string;

            /**
             * The product’s name, meant to be displayable to the customer.
             */
            name: string;

            /**
             * Whether or not the product is currently available for purchase. Defaults to true.
             */
            active?: boolean;

            /**
             * A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. ["color", "size"]).
             */
            attribute?: Array<string>;

            /**
             * A short one-line description of the product, meant to be displayable to the customer.
             */
            caption?: string;

            /**
             * An array of Connect application names or identifiers that should not be able to order the SKUs for this product.
             */
            deactivate_on?: Array<string>;

            /**
             * The product’s description, meant to be displayable to the customer.
             */
            description?: string;

            /**
             * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
             */
            images?: Array<string>;

            package_dimensions?: IPackageDimensions;

            /**
             * Whether this product is shipped (i.e. physical goods). Defaults to true.
             */
            shippable?: boolean;

            /**
             * A URL of a publicly-accessible webpage for this product.
             */
            url?: string;
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
            deactivate_on?: Array<string>;

            /**
             * The product’s description, meant to be displayable to the customer.
             */
            description?: string;

            /**
             * A list of up to 8 URLs of images for this product, meant to be displayable to the customer. This can be unset by updating the value to
             * null and then saving.
             */
            images?: Array<string>;

            /**
             * The product’s name, meant to be displayable to the customer.
             */
            name?: string;

            package_dimensions?: IPackageDimensions;

            /**
             * Whether this product is shipped (i.e. physical goods). Defaults to true.
             */
            shippable?: boolean;

            /**
             * A URL of a publicly-accessible webpage for this product.
             */
            url?: string;
        }

        interface IProductListOptions extends IListOptions {
            /**
             * Only return products that are active or inactive (e.g. pass false to list all inactive products).
             */
            active?: boolean;

            /**
             * Only return products with the given IDs.
             */
            ids?: Array<string>;

            /**
             * Only return products that can be shipped (i.e., physical, not digital products).
             */
            shippable?: boolean;

            /**
             * Only return products with the given url
             */
            url?: string;
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
    }

    namespace recipientCards { }

    namespace recipients {
        interface IRecipient extends IResourceObject {

        }
     }

    namespace skus {
        interface ISku extends IResourceObject {
            /**
             * Value is "sku"
             */
            object: "sku";

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
            ids?: Array<string>;

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
            type: "finite" | "bucket" | "infinite" ;

            /**
             * An indicator of the inventory available. Possible values are "in_stock", "limited", and "out_of_stock".
             * Will be present if and only if type is "bucket".
             */
            value?: "in_stock" | "limited" | "out_of_stock";
        }

        /**
         * A dictionary of attributes and values for the attributes defined by the product.
         * If, for example, a product’s attributes are ["size", "gender"],
         * a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.
         */
        interface ISkuAttributes {}
    }

    namespace webhooks {
        interface StripeWebhookEvent<T> {
            id: string;
            object: string;
            api_version: string;
            created: Date;
            data: {
              object: T;
            };
            livemode: boolean;
            pending_webhooks: number;
            /**
             * One of https://stripe.com/docs/api#event_types
             * E.g. account.updated
             */
            type: string;
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
            object: "ephemeral_key";
            associated_objects: Array<IAssociatedObject>
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

    namespace tokens {
        interface IToken extends ICardToken, IBankAccountToken { }

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
            object: "token" ;

            /**
             * IP address of the client that generated the token
             */
            client_ip: string;

            created: number;
            livemode: boolean;

            /**
             * Type of the token: card or bank_account
             */
            type: "card" | "bank_account" ;

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
            card: sources.ISourceCreationOptions;
        }

        interface IBankAccountTokenCreationOptions extends ITokenCreationOptionsBase {
            /**
             * The card this token will represent. If you also pass in a customer,
             * the card must be the ID of a card belonging to the customer.
             * Otherwise, if you do not pass a customer, a object containing a
             * user's credit card details, with the options described below.
             */
            bank_account: bankAccounts.ISourceCreationOptions;
        }

        interface IPiiTokenCreationOptions extends IDataOptions {
            pii: {
                /**
                 * The personal_id_number for PII in string form.
                 */
                personal_id_number: string;
            }
        }
    }

    namespace transfers {
        interface ITransfer extends IResourceObject {
            /**
             * Value is "transfer"
             */
            object: "transfer";

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
             * Can be card, bank_account, or stripe_account.
             */
            type: "card" | "bank_account" | "stripe_account" ;
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
             * A string that identifies this transaction as part of a group.
             * See the Connect documentation for details.
             */
            transfer_group?: string;
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
             * Only return transfers for the recipient specified by this
             * recipient ID.
             */
            recipient?: string;

            /**
             * Only return transfers that have the given status:
             * pending, paid, failed, in_transit, or canceled.
             */
            status: Statuses;
        }

        type SourceTypes = "alipay_account" | "bank_account" | "bitcoin_receiver" | "card";

        type Statuses = "pending" | "paid" | "failed" | "in_transit" | "canceled";
    }

    namespace transferReversals {
        interface IReversal extends IResourceObject {
            /**
             * Value is 'transfer_reversal'
             */
            object: "transfer_reversal";

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
            account: string;

            /**
             * This indicates whether or not this bank account is the default external account for its currency.
             */
            default_for_currency: boolean;

            /**
             * A set of key/value pairs that you can attach to a bank account object. It
             * can be useful for storing additional information about the bank account in
             * a structured format.
             */
            metadata: IMetadata;
        }

        interface IBankAccountHash extends IResourceObject {
            /**
             * value is "customer_bank_account"
             */
            object: "customer_bank_account";

            /**
             * The name of the person or business that owns the bank account.
             */
            account_holder_name: string;

            /**
             * The type of entity that holds the account. This can be either
             * "individual"" or "company".
             */
            account_holder_type: string;

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
            status: "new" | "validated" | "verified" | "verification_failed" | "error" ;
        }

        interface ISourceCreationOptions {
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
            account_holder_type?: "individual" | "company" ;
        }

        interface IBankAccountUpdateOptions extends IDataOptionsWithMetadata {
            /**
             * The name of the person or business that owns the bank account.
             */
            account_holder_name?: string;

            /**
             * The type of entity that holds the account. This can be either "individual" or "company".
             */
            account_holder_type?: "individual" | "company";
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
            object: "bitcoin_receiver";

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
            customer?: string | customers.ICustomer;

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
        interface ICardHash extends IResourceObject {
            /**
             * ID of card (used in conjunction with a customer or recipient ID)
             */
            id: string;

            /**
             * Value is 'card'
             */
            object: string;

            /**
             * The card number
             */
            number: number;

            /**
             * Card brand. Can be Visa, American Express, MasterCard, Discover, JCB, Diners Club, or Unknown.
             */
            brand: "Visa" | "American Express" | "MasterCard" | "Discover" | "JCB" | "Diners Club" | "Unknown" ;
            exp_month: number;
            exp_year: number;

            /**
             * Card funding type. Can be credit, debit, prepaid, or unknown
             */
            funding: "credit" | "debit" | "prepaid" | "unknown";
            last4: string;
            address_city: string;

            /**
             * Billing address country, if provided when creating card
             */
            address_country: string;
            address_line1: string;

            /**
             * If address_line1 was provided, results of the check: pass, fail, unavailable, or unchecked.
             */
            address_line1_check: string;
            address_line2: string;
            address_state: string;
            address_zip: string;

            /**
             * If address_zip was provided, results of the check: pass, fail, unavailable, or unchecked.
             */
            address_zip_check: "pass" | "fail" | "unavailable" | "unchecked" ;

            /**
             * Two-letter ISO code representing the country of the card. You could use this
             * attribute to get a sense of the international breakdown of cards you've collected.
             */
            country: string;

            /**
             * If a CVC was provided, results of the check: pass, fail, unavailable, or unchecked
             */
            cvc_check: "pass" | "fail" | "unavailable" | "unchecked";

            /**
             * (For Apple Pay integrations only.) The last four digits of the device account number.
             */
            dynamic_last4: string;

            /**
             * Cardholder name
             */
            name: string;

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
            tokenization_method: "apple_pay" | "android_pay";
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

        interface ISourceCreationOptions {
            /**
             * The type of payment source. Should be "card".
             */
            object: "card";

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
            number: number;

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

        interface ISourceCreationOptionsExtended extends ISourceCreationOptions {
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

    namespace subscriptions {
        type SubscriptionStatus = "trialing" | "active" | "past_due" | "canceled" | "unpaid";
        type SubscriptionBilling = "charge_automatically" | "send_invoice";
        /**
         * Subscriptions allow you to charge a customer's card on a recurring basis. A subscription ties a customer to
         * a particular plan you've created: https://stripe.com/docs/api#create_plan
         */
        interface ISubscription extends IResourceObject {
            /**
             * Value is "subscription"
             */
            object: "subscription";

            /**
             * A positive decimal that represents the fee percentage of the subscription invoice amount that will be transferred to
             * the application owner's Stripe account each billing period.
             */
            application_fee_percent: number;

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
            canceled_at: number;

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
             * Describes the current discount applied to this subscription, if there is one. When billing, a discount applied to a
             * subscription overrides a discount applied on a customer-wide basis.
             */
            discount: coupons.IDiscount;

            /**
             * If the subscription has ended (either because it was canceled or because the customer was switched to a subscription
             * to a new plan), the date the subscription ended
             */
            ended_at: number;

            metadata: IMetadata;
            
            items: IList<subscriptionItems.ISubscriptionItem>;
            
            /**
             * Hash describing the plan the customer is subscribed to
             */
            plan: plans.IPlan;

            /**
             * The number of subscriptions for the associated plan
             */
            quantity: number;

            /**
             * Date the subscription started
             */
            start: number;

            /**
             * Possible values are "trialing", "active", "past_due", "canceled", or "unpaid". A subscription still in its trial period is trialing
             * and moves to active when the trial period is over. When payment to renew the subscription fails, the subscription becomes
             * past_due. After Stripe has exhausted all payment retry attempts, the subscription ends up with a status of either canceled
             * or unpaid depending on your retry settings. Note that when a subscription has a status of unpaid, no subsequent invoices
             * will be attempted (invoices will be created, but then immediately automatically closed. Additionally, updating customer
             * card details will not lead to Stripe retrying the latest invoice.). After receiving updated card details from a customer,
             * you may choose to reopen and pay their closed invoices.
             */
            status: SubscriptionStatus;

            /**
             * If provided, each invoice created by this subscription will apply the tax rate, increasing the amount billed to the customer.
             */
            tax_percent: number;

            /**
             * If the subscription has a trial, the end of that trial.
             */
            trial_end: number;

            /**
             * If the subscription has a trial, the beginning of that trial.
             */
            trial_start: number;

            /**
             * Either "charge_automatically", or "send_invoice". When charging automatically, Stripe will attempt to pay this subscription at the 
             * end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an 
             * invoice with payment instructions.
             */
            billing: SubscriptionBilling;
        }

        interface ISubscriptionCustCreationOptions extends IDataOptionsWithMetadata {
            /**
             * The identifier of the plan to subscribe the customer to.
             */
            plan: string;

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

            source?: sources.ISourceCreationOptions;

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
            trial_end?: number | "now";

            /**
             * List of subscription items, each with an attached plan.
             */
            items: ISubscriptionCreationItem[];

            /**
             * Either "charge_automatically", or "send_invoice". When charging automatically, Stripe will attempt to pay this subscription at the end of the 
             * cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment 
             * instructions. Defaults to "charge_automatically".
             */
            billing?: SubscriptionBilling;
        }

        interface ISubscriptionCreationOptions extends ISubscriptionCustCreationOptions {
            /***
             * The identifier of the customer to subscribe.
             */
            customer: string;
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
             * particular subscription.
             */
            coupon?: string;

            /**
             * The identifier of the plan to update the subscription to. If omitted, the subscription will not change plans.
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

            source?: sources.ISourceCreationOptions;

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
            trial_end?: number | "now";

            /**
             * Either "charge_automatically", or "send_invoice". When charging automatically, Stripe will attempt to pay this subscription at the end of the 
             * cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment 
             * instructions.
             */
            billing?: SubscriptionBilling;
        }

        interface ISubscriptionCancellationOptions extends IDataOptions {
            /**
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
            status?: SubscriptionStatus | "all";
        }

        interface ISubscriptionCreationItem {
            /**
             * Plan ID for this item.
             */
            plan: string;
            
            /**
             * Quantity for this item.
             */
            quantity?: number
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
            object: "subscription_item";

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
            quantity: number;
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
            balance_transaction: string;

            /**
             * ID of the charge that was refunded. [Expandable]
             */
            charge: string | charges.ICharge;

            created: number;

            /**
             * Three-letter ISO currency code representing the currency in which the charge was made.
             */
            currency: string;

            description: string;

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

    namespace sources {
        /**
         * The source can either be a token, like the ones returned by our
         * Stripe.js, or a object containing a user's credit card details (with
         * the options shown below). You must provide a source if the
         * customer does not already have a valid source attached, and you
         * are subscribing the customer for a plan that is not free. Passing
         * source will create a new source object, make it the customer
         * default source, and delete the old customer default if one exists.
         * If you want to add an additional source to use with subscriptions,
         * instead use the card creation API to add the card and then the
         * customer update API to set it as the default. Whenever you
         * attach a card to a customer, Stripe will automatically validate the
         * card.
         */
        type ISourceCreationOptions = string | cards.ISourceCreationOptions;

        /**
         * The source can either be a token, like the ones returned by our
         * Stripe.js, or a object containing a user's credit card details (with
         * the options shown below). You must provide a source if the
         * customer does not already have a valid source attached, and you
         * are subscribing the customer for a plan that is not free. Passing
         * source will create a new source object, make it the customer
         * default source, and delete the old customer default if one exists.
         * If you want to add an additional source to use with subscriptions,
         * instead use the card creation API to add the card and then the
         * customer update API to set it as the default. Whenever you
         * attach a card to a customer, Stripe will automatically validate the
         * card.
         */
        type ISourceCreationOptionsExtended = string | cards.ISourceCreationOptionsExtended;
    }

    namespace countrySpecs {
        interface ICountrySpec extends IResourceObject {
            /**
             * Value is "country_spec"
             */
            object: "country_spec";

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
            supported_payment_currencies: Array<string>;

            /**
             * Payment methods available in the specified country. You will need to enable bitcoin and ACH payments on your account for those methods to
             * appear in this list. The stripe payment method refers to charging through your platform.
             */
            supported_payment_methods: Array<string>;

            /**
             * Lists the types of verification data needed to keep an account open. Includes 'minimum' fields, which every account must eventually
             * provide, as well as a 'additional' fields, which are only required for some merchants.
             */
            verification_fields: {
                individual: {
                    minimum: Array<string>;
                    additional: Array<string>;
                },
                company: {
                    minimum: Array<string>;
                    additional: Array<string>;
                }
            }
        }
    }

    class StripeResource {
        constructor(stripe: Stripe, urlData: any);
    }

    namespace resources {
        class Accounts extends StripeResource {
            /**
             * With Connect, you can create Stripe accounts for your users. To do this, you'll first need to register your platform.
             */
            create(data: accounts.IAccountCreationOptions, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            create(data: accounts.IAccountCreationOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;

            /**
             * Retrieves the details of the account.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            retrieve(id: string, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            retrieve(options: HeaderOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            retrieve(response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;

            /**
             * Updates an account by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * You may only update accounts that you manage. To update your own account, you can currently only do so via the dashboard.
             * For more information on updating managed accounts, see our guide.
             */
            update(id: string, data: accounts.IAccountUpdateOptions, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            update(id: string, data: accounts.IAccountUpdateOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;

            /**
             * With Connect, you may delete Stripe accounts you manage.
             *
             * Managed accounts created using test-mode keys can be deleted at any time. Managed accounts created using live-mode keys may only be
             * deleted once all balances are zero.
             *
             * If you are looking to close your own account, use the data tab in your account settings instead.
             */
            del(id: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            del(id: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            del(options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            del(response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;

            /**
             * With Connect, you may flag managed accounts as suspicious.
             *
             * Managed accounts created using test-mode keys can be rejected at any time. Managed accounts created using live-mode keys may only be
             * rejected once all balances are zero.
             */
            reject(id: string, data: accounts.IRejectReason, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
            reject(id: string, data: accounts.IRejectReason, response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;

            /**
             * Returns a list of accounts connected to your platform via Connect. If you’re not a platform, the list will be empty.
             */
            list(data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<accounts.IAccount>>): Promise<IList<accounts.IAccount>>;
            list(data: IListOptions, response?: IResponseFn<IList<accounts.IAccount>>): Promise<IList<accounts.IAccount>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<accounts.IAccount>>): Promise<IList<accounts.IAccount>>;
            list(response?: IResponseFn<IList<accounts.IAccount>>): Promise<IList<accounts.IAccount>>;

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
            createExternalAccount(accId: string, data: accounts.IExternalAccountCreationOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>): Promise<cards.ICard | bankAccounts.IBankAccount>;
            createExternalAccount(accId: string, data: accounts.IExternalAccountCreationOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>): Promise<cards.ICard | bankAccounts.IBankAccount>;

            /**
             * By default, you can see the 10 most recent bank accounts stored on a managed account directly on the object, but you can also
             * retrieve details about a specific bank account stored on the Stripe account.
             */
            retrieveExternalAccount(accId: string, bankAccId: string, options: HeaderOptions, response?: IResponseFn<bankAccounts.IBankAccount>): Promise<bankAccounts.IBankAccount>;
            retrieveExternalAccount(accId: string, bankAccId: string, response?: IResponseFn<bankAccounts.IBankAccount>): Promise<bankAccounts.IBankAccount>;

            /**
             * You can always see the 10 most recent cards directly on a managed account; this method lets you retrieve details about a specific
             * card stored on the account.
             */
            retrieveCard(accId: string, cardId: string, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            retrieveCard(accId: string, cardId: string, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

            /**
             * Updates the metadata of a bank account belonging to a managed account, and optionally sets it as the default for its currency.
             * Other bank account details are not editable by design.
             */
            updateExternalAccount(accId: string, bankAccId: string, data: accounts.IExternalAccountUpdateOptions, options: HeaderOptions, response?: IResponseFn<bankAccounts.IBankAccount>): Promise<bankAccounts.IBankAccount>;
            updateExternalAccount(accId: string, bankAccId: string, data: accounts.IExternalAccountUpdateOptions, response?: IResponseFn<bankAccounts.IBankAccount>): Promise<bankAccounts.IBankAccount>;
            /**
             * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
             * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
             * interruption.
             *
             * When you update a card, Stripe will automatically validate the card.
             */
            updateExternalAccount(accId: string, cardId: string, data: cards.ICardUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            updateExternalAccount(accId: string, cardId: string, data: cards.ICardUpdateOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

            /**
             * You can delete destination bank accounts and cards from a managed account. If a bank account is the default external account for its currency
             * or card's default_for_currency property is true, it can only be deleted if it is the only external account for that currency, and the
             * currency is not the Stripe account's default currency. Otherwise, you must set another external account to be the default for the currency
             * before deleting it.
             */
            deleteExternalAccount(accId: string, id: string, options: HeaderOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>): Promise<cards.ICard | bankAccounts.IBankAccount>;
            deleteExternalAccount(accId: string, id: string, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>): Promise<cards.ICard | bankAccounts.IBankAccount>;

            /**
             * You can see a list of the bank accounts belonging to a managed account. Note that the 10 most recent external accounts are always
             * available by default on the corresponding Stripe object. If you need more than those 10, you can use this API method and the limit
             * and starting_after parameters to page through additional bank accounts.
             */
            listExternalAccounts(accId: string, data: accounts.IBankAccountListOptions, options: HeaderOptions, response?: IResponseFn<IList<bankAccounts.IBankAccount>>): Promise<IList<bankAccounts.IBankAccount>>;
            listExternalAccounts(accId: string, data: accounts.IBankAccountListOptions, response?: IResponseFn<IList<bankAccounts.IBankAccount>>): Promise<IList<bankAccounts.IBankAccount>>;

            /**
             * You can see a list of the cards belonging to a managed account. Note that the 10 most recent external accounts are available on the
             * account object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page
             * through additional cards.
             */
            listExternalAccounts(accId: string, data: accounts.ICardListOptions, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
            listExternalAccounts(accId: string, data: accounts.ICardListOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
        }

        class ApplicationFees extends StripeResource {
            /**
             * Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the
             * application fee.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFee>): Promise<applicationFees.IApplicationFee>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<applicationFees.IApplicationFee>): Promise<applicationFees.IApplicationFee>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFee>): Promise<applicationFees.IApplicationFee>;
            retrieve(id: string, response?: IResponseFn<applicationFees.IApplicationFee>): Promise<applicationFees.IApplicationFee>;

            /**
             * Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most
             * recent fees appearing first.
             */
            list(data: applicationFees.IApplicationFeeListOptions, options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFee>>): Promise<IList<applicationFees.IApplicationFee>>;
            list(data: applicationFees.IApplicationFeeListOptions, response?: IResponseFn<IList<applicationFees.IApplicationFee>>): Promise<IList<applicationFees.IApplicationFee>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFee>>): Promise<IList<applicationFees.IApplicationFee>>;
            list(response?: IResponseFn<IList<applicationFees.IApplicationFee>>): Promise<IList<applicationFees.IApplicationFee>>;

            /**
             * Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that
             * the fee was originally collected from.
             *
             * You can optionally refund only part of an application fee. You can do so as many times as you wish until the entire fee has been refunded.
             *
             * Once entirely refunded, an application fee can't be refunded again. This method will throw an error when called on an already-refunded
             * application fee, or when trying to refund more money than is left on an application fee.
             */
            refund(feeId: string, data: applicationFees.IApplicationFeeRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            refund(feeId: string, data: applicationFees.IApplicationFeeRefundCreationOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            refund(feeId: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            refund(feeId: string, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that
             * the fee was originally collected from.
             *
             * You can optionally refund only part of an application fee. You can do so as many times as you wish until the entire fee has been refunded.
             *
             * Once entirely refunded, an application fee can't be refunded again. This method will throw an error when called on an already-refunded
             * application fee, or when trying to refund more money than is left on an application fee.
             */
            createRefund(feeId: string, data: applicationFees.IApplicationFeeRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            createRefund(feeId: string, data: applicationFees.IApplicationFeeRefundCreationOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            createRefund(feeId: string, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            createRefund(feeId: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details
             * about a specific refund stored on the application fee.
             */
            retreiveRefund(feeId: string, refundId: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            retreiveRefund(feeId: string, refundId: string, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left
             * unchanged.
             *
             * This request only accepts metadata as an argument.
             */
            updateRefund(feeId: string, refundId: string, data: { metadata?: IOptionsMetadata }, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            updateRefund(feeId: string, refundId: string, data: { metadata?: IOptionsMetadata }, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available
             * by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after
             * parameters to page through additional refunds.
             */
            listRefunds(feeId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>): Promise<IList<applicationFees.IApplicationFeeRefund>>;
            listRefunds(feeId: string, data: IListOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>): Promise<IList<applicationFees.IApplicationFeeRefund>>;
            listRefunds(feeId: string, options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>): Promise<IList<applicationFees.IApplicationFeeRefund>>;
            listRefunds(feeId: string, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>): Promise<IList<applicationFees.IApplicationFeeRefund>>;
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
            create(data: applicationFees.IApplicationFeeRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            create(data: applicationFees.IApplicationFeeRefundCreationOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            create(options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            create(response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details
             * about a specific refund stored on the application fee.
             */
            retrieve(refundId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            retrieve(refundId: string, options: IDataOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            retrieve(refundId: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            retrieve(refundId: string, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;


            /**
             * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left
             * unchanged.
             *
             * This request only accepts metadata as an argument.
             */
            update(refundId: string, data: { metadata?: IOptionsMetadata }, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;
            update(refundId: string, data: { metadata?: IOptionsMetadata }, response?: IResponseFn<applicationFees.IApplicationFeeRefund>): Promise<applicationFees.IApplicationFeeRefund>;

            /**
             * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available
             * by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after
             * parameters to page through additional refunds.
             */
            list(data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>): Promise<IList<applicationFees.IApplicationFeeRefund>>;
            list(data: IListOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>): Promise<IList<applicationFees.IApplicationFeeRefund>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>): Promise<IList<applicationFees.IApplicationFeeRefund>>;
            list(response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>): Promise<IList<applicationFees.IApplicationFeeRefund>>;
        }

        class Balance extends StripeResource {
            retrieve(options: HeaderOptions, response?: IResponseFn<balance.IBalance>): Promise<balance.IBalance>;
            retrieve(response?: IResponseFn<balance.IBalance>): Promise<balance.IBalance>;

            retrieveTransaction(id: string, options: HeaderOptions, response?: IResponseFn<balance.IBalanceTransaction>): Promise<balance.IBalanceTransaction>;
            retrieveTransaction(id: string, response?: IResponseFn<balance.IBalanceTransaction>): Promise<balance.IBalanceTransaction>;

            listTransactions(data: balance.IBalanceListOptions, options: HeaderOptions, response?: IResponseFn<balance.IBalanceTransaction>): Promise<IList<balance.IBalanceTransaction>>;
            listTransactions(data: balance.IBalanceListOptions, response?: IResponseFn<balance.IBalanceTransaction>): Promise<IList<balance.IBalanceTransaction>>;
            listTransactions(options: HeaderOptions, response?: IResponseFn<balance.IBalanceTransaction>): Promise<IList<balance.IBalanceTransaction>>;
            listTransactions(response?: IResponseFn<balance.IBalanceTransaction>): Promise<IList<balance.IBalanceTransaction>>;
        }

        class BitcoinReceivers extends StripeResource {
            /**
             * Creates a Bitcoin receiver object that can be used to accept bitcoin payments from your customer. The receiver exposes a Bitcoin address
             * and is created with a bitcoin to USD exchange rate that is valid for 10 minutes.
             */
            create(data: bitcoinReceivers.IBitcoinReceiverCreationOptions, options: HeaderOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>): Promise<bitcoinReceivers.IBitcoinReceiver>;
            create(data: bitcoinReceivers.IBitcoinReceiverCreationOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>): Promise<bitcoinReceivers.IBitcoinReceiver>;

            /**
             * Retrieves the Bitcoin receiver with the given ID.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>): Promise<bitcoinReceivers.IBitcoinReceiver>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>): Promise<bitcoinReceivers.IBitcoinReceiver>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>): Promise<bitcoinReceivers.IBitcoinReceiver>;
            retrieve(id: string, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>): Promise<bitcoinReceivers.IBitcoinReceiver>;


            /**
             * Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.
             */
            list(data: bitcoinReceivers.IBitcoinReceiverListOptions, options: HeaderOptions, response?: IResponseFn<IList<bitcoinReceivers.IBitcoinReceiver>>): Promise<IList<bitcoinReceivers.IBitcoinReceiver>>;
            list(data: bitcoinReceivers.IBitcoinReceiverListOptions, response?: IResponseFn<IList<bitcoinReceivers.IBitcoinReceiver>>): Promise<IList<bitcoinReceivers.IBitcoinReceiver>>;

            //update(id: string): void; // This does seem to be a method in the library (https://github.com/stripe/stripe-node/blob/master/lib/resources/BitcoinReceivers.js#L12), but isn't in the API documentation.

            setMetadata(): void; //TODO: Implement placeholder method
            getMetadata(): void; //TODO: Implement placeholder method
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
            create(data: charges.IChargeCreationOptions, options: HeaderOptions, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;
            create(data: charges.IChargeCreationOptions, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;

            /**
             * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned
             * from your previous request, and Stripe will return the corresponding charge information. The same information is
             * returned when creating or refunding the charge.
             *
             * @param id The identifier of the charge to be retrieved
             * @param response A callback that takes in a potential error and a charge object.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;
            retrieve(id: string, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;


            /**
             * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             * This request accepts only the description, metadata, receipt_emailand fraud_details as arguments.
             *
             * @param id The identifier of the charge to be updated
             * @param data An object containing the updated properties.
             */
            update(id: string, data: charges.IChargeUpdateOptions, options: HeaderOptions, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;
            update(id: string, data: charges.IChargeUpdateOptions, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;

            /**
             * Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first
             * you created a charge with the capture option set to false. Uncaptured payments expire exactly seven days after they are
             * created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.
             */
            capture(id: string, data?: charges.IChargeCaptureOptions, options?: HeaderOptions, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;

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
            list(data: charges.IChargeListOptions, options: HeaderOptions, response?: IResponseFn<IList<charges.ICharge>>): Promise<IList<charges.ICharge>>;
            list(data: charges.IChargeListOptions, response?: IResponseFn<IList<charges.ICharge>>): Promise<IList<charges.ICharge>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<charges.ICharge>>): Promise<IList<charges.ICharge>>;
            list(response?: IResponseFn<IList<charges.ICharge>>): Promise<IList<charges.ICharge>>;

            /**
             * When you create a new refund, you must specify a charge to create it on.
             * Creating a new refund will refund a charge that has previously been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged. The fees you were originally charged are also refunded.
             * You can optionally refund only part of a charge. You can do so as many times as you wish until the entire charge has been refunded.
             * Once entirely refunded, a charge can't be refunded again. This method will throw an error when called on an already-refunded charge, or when trying to refund more money than is left on a charge.
             */
            refund(chargeId: string, data: refunds.IRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            refund(chargeId: string, data: refunds.IRefundCreationOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            refund(chargeId: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
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
            createRefund(id: string, data: refunds.IRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            createRefund(id: string, data: refunds.IRefundCreationOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            createRefund(id: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            createRefund(id: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * By default, you can see the 10 most recent refunds stored directly on the charge object, but you can also retrieve details about a specific
             * refund stored on the charge.
             *
             * @param chargeId The ID of the charge refunded
             * @param refundId The ID of the refund to retrieve
             */
            retrieveRefund(chargeId: string, refundId: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            retrieveRefund(chargeId: string, refundId: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             * This request only accepts metadata as an argument.
             *
             * @param chargeId The ID of the charge refunded
             * @param refundId The ID of the refund to update
             */
            updateRefund(chargeId: string, refundId: string, data: IDataOptionsWithMetadata, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            updateRefund(chargeId: string, refundId: string, data: IDataOptionsWithMetadata, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

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
            listRefunds(chargeId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
            listRefunds(chargeId: string, data: IListOptions, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
            listRefunds(chargeId: string, options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
            listRefunds(chargeId: string, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;

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
            create(data: refunds.IRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            create(data: refunds.IRefundCreationOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            create(options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            create(response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * Retrieves the details of an existing refund.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            retrieve(id: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;


            /**
             * Updates the specified refund by setting the values of the parameters passed.
             * Any parameters not provided will be left unchanged.
             *
             * This request only accepts metadata as an argument.
             */
            update(id: string, data: IDataOptionsWithMetadata, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            update(id: string, data: IDataOptionsWithMetadata, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order,
             * with the most recent refunds appearing first.
             * For convenience, the 10 most recent refunds are always available by default on the charge object.
             */
            list(data: refunds.IRefundListOptions, options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
            list(data: refunds.IRefundListOptions, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
            list(response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
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
            create(data: coupons.ICouponCreationOptions, options: HeaderOptions, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;
            create(data: coupons.ICouponCreationOptions, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;

            /**
             * Retrieves the coupon with the given ID.
             *
             * @returns Returns a coupon if a valid coupon ID was provided. Throws an error otherwise.
             *
             * @param id The ID of the desired coupon
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;
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
            update(id: string, data: IDataOptionsWithMetadata, options: HeaderOptions, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;
            update(id: string, data: IDataOptionsWithMetadata, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;

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
            del(id: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
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
            list(data: IListOptionsCreated, options: HeaderOptions, response?: IResponseFn<IList<coupons.ICoupon>>): Promise<IList<coupons.ICoupon>>;
            list(data: IListOptionsCreated, response?: IResponseFn<IList<coupons.ICoupon>>): Promise<IList<coupons.ICoupon>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<coupons.ICoupon>>): Promise<IList<coupons.ICoupon>>;
            list(response?: IResponseFn<IList<coupons.ICoupon>>): Promise<IList<coupons.ICoupon>>;
        }

        class CustomerCards extends StripeResource {
            /**
             * When you create a new credit card, you must specify a customer or recipient to create it on. If the card's owner has no default card,
             * then the new card will become the default. However, if the owner already has a default then it will not change. To change the default,
             * you should either update the customer to have a new default_source or update the recipient to have a new default_card.
             *
             * @returns Returns the card object.
             */
            create(data: {
                card?: sources.ISourceCreationOptionsExtended;
            }, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            create(data: {
                card?: sources.ISourceCreationOptionsExtended;
            }, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

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
            list(data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
            list(data: IListOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
            list(response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;

            /**
             * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
             * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
             * interruption. When you update a card, Stripe will automatically validate the card.
             *
             * @returns Returns the card object.
             *
             * @param cardId The ID of the card to be retrieved.
             */
            update(cardId: string, data: cards.ICardUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            update(cardId: string, data: cards.ICardUpdateOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

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
            del(cardId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
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
            create(data: customers.ICustomerCreationOptions, options: HeaderOptions, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;
            create(data: customers.ICustomerCreationOptions, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;

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
            list(data: IListOptionsCreated, options: HeaderOptions, response?: IResponseFn<IList<customers.ICustomer>>): Promise<IList<customers.ICustomer>>;
            list(data: IListOptionsCreated, response?: IResponseFn<IList<customers.ICustomer>>): Promise<IList<customers.ICustomer>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<customers.ICustomer>>): Promise<IList<customers.ICustomer>>;
            list(response?: IResponseFn<IList<customers.ICustomer>>): Promise<IList<customers.ICustomer>>;

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
            update(id: string, data: customers.ICustomerUpdateOptions, options: HeaderOptions, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;
            update(id: string, data: customers.ICustomerUpdateOptions, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;

            /**
             * Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer
             * creation.
             *
             * @returns Returns a customer object if a valid identifier was provided. When requesting the ID of a customer that has been deleted,
             * a subset of the customer's information will be returned, including a "deleted" property, which will be true.
             *
             * @param id The identifier of the customer to be retrieved.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<customers.ICustomer>): Promise<customers.ICustomer>;
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
            del(id: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
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
            createCard(customerId: string, data: {
                card?: sources.ISourceCreationOptionsExtended;
            }, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            createCard(customerId: string, data: {
                card?: sources.ISourceCreationOptionsExtended;
            }, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

            /**
             * By default, you can see the 10 most recent cards stored on a customer or recipient directly on the customer or recipient object, but
             * you can also retrieve details about a specific card stored on the customer or recipient.
             *
             * @returns Returns the card object.
             *
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param cardId The ID of the card to be retrieved.
             */
            retrieveCard(customerId: string, cardId: string, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
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
            updateCard(customerId: string, cardId: string, data: cards.ICardUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            updateCard(customerId: string, cardId: string, data: cards.ICardUpdateOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

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
            deleteCard(customerId: string, cardId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            deleteCard(customerId: string, cardId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;

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
            listCards(customerId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
            listCards(customerId: string, data: IListOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
            listCards(customerId: string, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
            listCards(customerId: string, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;


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
            createSource(customerId: string, data: customers.ICustomerCardSourceCreationOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            createSource(customerId: string, data: customers.ICustomerCardSourceCreationOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            /**
             * When adding a card to a customer, the parameter name is source. When
             * adding to an account, the parameter name is external_account. The
             * value can either be a token, like the ones returned by our Stripe.js, or a
             * dictionary containing a user’s credit card details.
             * Stripe will automatically validate the card.
             *
             * @returns Returns the card or bank account object.
             *
             * @param customerId The customer ID to which to add the card.
             */
            createSource(customerId: string, data: customers.ICustomerSourceCreationOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>): Promise<cards.ICard | bankAccounts.IBankAccount>;
            createSource(customerId: string, data: customers.ICustomerSourceCreationOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>): Promise<cards.ICard | bankAccounts.IBankAccount>;

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
            listSource(customerId: string, data: customers.ICardSourceListOptions, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
            listSource(customerId: string, data: customers.ICardSourceListOptions, response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
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
            listSource(customerId: string, data: customers.IBankAccountSourceListOptions, options: HeaderOptions, response?: IResponseFn<IList<bankAccounts.IBankAccount>>): Promise<IList<bankAccounts.IBankAccount>>;
            listSource(customerId: string, data: customers.IBankAccountSourceListOptions, response?: IResponseFn<IList<bankAccounts.IBankAccount>>): Promise<IList<bankAccounts.IBankAccount>>;

            /**
             * By default, you can see the 10 most recent cards/bank accounts stored on a customer or recipient directly on the customer or recipient object, but
             * you can also retrieve details about a specific card/bank account stored on the customer or recipient.
             *
             * @returns Returns the card/bank account object.
             *
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param sourceId The ID of the source to be retrieved.
             */
            retrieveSource(customerId: string, sourceId: string, options: HeaderOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>): Promise<cards.ICard | bankAccounts.IBankAccount>;
            retrieveSource(customerId: string, sourceId: string, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>): Promise<cards.ICard | bankAccounts.IBankAccount>;

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
            updateSource(customerId: string, sourceId: string, data: cards.ICardUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            updateSource(customerId: string, sourceId: string, data: cards.ICardUpdateOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;

            /**
             * Updates the metadata, account_holder_name, and account_holder_type of a bank account belonging to a Customer. Other bank account details
             * are not editable by design.
             *
             * @returns Returns the bank account object.
             *
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param sourceId The ID of the bank account to be updated.
             */
            updateSource(customerId: string, sourceId: string, data: bankAccounts.IBankAccountUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
            updateSource(customerId: string, sourceId: string, data: bankAccounts.IBankAccountUpdateOptions, response?: IResponseFn<bankAccounts.IBankAccount>): Promise<bankAccounts.IBankAccount>;

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
            deleteSource(customerId: string, sourceId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            deleteSource(customerId: string, sourceId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;


            verifySource(customerId: string, sourceId: string, options: HeaderOptions): Promise<{}>; //TODO: This still needs properly implementing.
            verifySource(customerId: string, sourceId: string): Promise<{}>; //TODO: This still needs properly implementing.


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
            createSubscription(customerId: string, data: subscriptions.ISubscriptionCustCreationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            createSubscription(customerId: string, data: subscriptions.ISubscriptionCustCreationOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;

            /**
             * By default, you can see the 10 most recent active subscriptions stored on a customer directly on the customer
             * object, but you can also retrieve details about a specific active subscription for a customer.
             *
             * @returns Returns the subscription object.
             *
             * @param customerId The customer ID for the subscription
             * @param subscriptionId The ID of the subscription to retrieve
             */
            retrieveSubscription(customerId: string, subscriptionId: string, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            retrieveSubscription(customerId: string, subscriptionId: string, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;

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
            updateSubscription(customerId: string, subscriptionId: string, data: subscriptions.ISubscriptionUpdateOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            updateSubscription(customerId: string, subscriptionId: string, data: subscriptions.ISubscriptionUpdateOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;

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
            cancelSubscription(customerId: string, subscriptionId: string, data: subscriptions.ISubscriptionCancellationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            cancelSubscription(customerId: string, subscriptionId: string, data: subscriptions.ISubscriptionCancellationOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            cancelSubscription(customerId: string, subscriptionId: string, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;

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
            listSubscriptions(customerId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>): Promise<IList<subscriptions.ISubscription>>;
            listSubscriptions(customerId: string, data: IListOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>): Promise<IList<subscriptions.ISubscription>>;
            listSubscriptions(customerId: string, options: HeaderOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>): Promise<IList<subscriptions.ISubscription>>;
            listSubscriptions(customerId: string, response?: IResponseFn<IList<subscriptions.ISubscription>>): Promise<IList<subscriptions.ISubscription>>;


            /**
             * Removes the currently applied discount on a customer.
             *
             * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no
             * discount exists on this customer.
             *
             * @param customerId The ID of the customer.
             */
            deleteDiscount(customerId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;;
            deleteDiscount(customerId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;;

            /**
             * Removes the currently applied discount on a subscription.
             *
             * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no
             * discount exists on this subscription.
             *
             * @param customerId The ID of the customer.
             * @param subscriptionId The ID of the subscription.
             */
            deleteSubscriptionDiscount(customerId: string, subscriptionId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;;
            deleteSubscriptionDiscount(customerId: string, subscriptionId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;;
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
            retrieve(subscriptionId: string, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            retrieve(subscriptionId: string, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;

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
            update(subscriptionId: string, data: subscriptions.ISubscriptionUpdateOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            update(subscriptionId: string, data: subscriptions.ISubscriptionUpdateOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;

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
            del(subscriptionId: string, data: subscriptions.ISubscriptionCancellationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            del(subscriptionId: string, data: subscriptions.ISubscriptionCancellationOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            del(subscriptionId: string, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            del(subscriptionId: string, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;

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
            list(data: subscriptions.ISubscriptionListOptions, options: HeaderOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>): Promise<IList<subscriptions.ISubscription>>;
            list(data: subscriptions.ISubscriptionListOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>): Promise<IList<subscriptions.ISubscription>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>): Promise<IList<subscriptions.ISubscription>>;
            list(response?: IResponseFn<IList<subscriptions.ISubscription>>): Promise<IList<subscriptions.ISubscription>>;

            /**
             * Removes the currently applied discount on a subscription.
             *
             * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no
             * discount exists on this subscription.
             *
             * @param subscriptionId The ID of the subscription.
             */
            deleteDiscount(subscriptionId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;;
            deleteDiscount(subscriptionId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;;
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
            create(data: subscriptions.ISubscriptionCreationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            create(data: subscriptions.ISubscriptionCreationOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
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
            create(data: subscriptions.ISubscriptionCustCreationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
            create(data: subscriptions.ISubscriptionCustCreationOptions, response?: IResponseFn<subscriptions.ISubscription>): Promise<subscriptions.ISubscription>;
        }

        class SubscriptionItems extends StripeResource {
            /**
             * Adds a new item to an existing subscription. No existing items will be changed or replaced.
             *
             * @returns The created subscription item object is returned if successful. Otherwise, this call throws an error.
             *
             * @param options The options for the new subscription item.
             */
            create(data: subscriptionItems.ISubscriptionItemCreationOptions, options: HeaderOptions, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;
            create(data: subscriptionItems.ISubscriptionItemCreationOptions, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;
            
            /**
             * Retrieves the subscription item with the given ID.
             *
             * @returns Returns a subscription item if a valid subscription item ID was provided. Throws an error otherwise.
             *
             * @param subscriptionItemId The identifier of the subscription item to retrieve.
             */
            retrieve(subscriptionItemId: string, options: HeaderOptions, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;
            retrieve(subscriptionItemId: string, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;

            /**
             * Updates the plan or quantity of an item on a current subscription.
             *
             * @param subscriptionItemId The identifier of the subscription item to modify.
             * @param data The fields to update
             */
            update(subscriptionItemId: string, data: subscriptionItems.ISubscriptionItemUpdateOptions, options: HeaderOptions, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;
            update(subscriptionItemId: string, data: subscriptionItems.ISubscriptionItemUpdateOptions, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;

            /**
             * Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.
             *
             * @returns An subscription item object with a deleted flag upon success. Otherwise, this call throws an error, such as if the 
             * subscription item has already been deleted.
             *
             * @param subscriptionItemId The identifier of the subscription item to delete.
             * @param data Specify whether to prorate and from when.
             */
            del(subscriptionItemId: string, data: subscriptionItems.ISubscriptionItemDeleteOptions, options: HeaderOptions, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;
            del(subscriptionItemId: string, data: subscriptionItems.ISubscriptionItemDeleteOptions, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;
            del(subscriptionItemId: string, options: HeaderOptions, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;
            del(subscriptionItemId: string, response?: IResponseFn<subscriptionItems.ISubscriptionItem>): Promise<subscriptionItems.ISubscriptionItem>;

            /**
             * Returns a list of your subscription items for a given subscription.
             *
             * @returns Returns a list of your subscription items for a given subscription.
             *
             * @param data Filtering options
             */
            list(data: subscriptionItems.ISubscriptionItemListOptions, options: HeaderOptions, response?: IResponseFn<IList<subscriptionItems.ISubscriptionItem>>): Promise<IList<subscriptionItems.ISubscriptionItem>>;
            list(data: subscriptionItems.ISubscriptionItemListOptions, response?: IResponseFn<IList<subscriptionItems.ISubscriptionItem>>): Promise<IList<subscriptionItems.ISubscriptionItem>>;
        }

        class Disputes extends StripeResource {
            /**
             * Retrieves the dispute with the given ID.
             */
            retrieve(disputeId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<disputes.IDispute>): Promise<disputes.IDispute>;
            retrieve(disputeId: string, data: IDataOptions, response?: IResponseFn<disputes.IDispute>): Promise<disputes.IDispute>;
            retrieve(disputeId: string, options: HeaderOptions, response?: IResponseFn<disputes.IDispute>): Promise<disputes.IDispute>;
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
            update(disputeId: string, data: disputes.IDisputeUpdateOptions, options: HeaderOptions, response?: IResponseFn<disputes.IDispute>): Promise<disputes.IDispute>;
            update(disputeId: string, data: disputes.IDisputeUpdateOptions, response?: IResponseFn<disputes.IDispute>): Promise<disputes.IDispute>;

            /**
             * Closing the dispute for a charge indicates that you do not have any evidence to submit and are
             * essentially ‘dismissing’ the dispute, acknowledging it as lost
             *
             * The status of the dispute will change from needs_response to lost.
             *
             * *Closing a dispute is irreversible!*
             */
            close(disputeId: string, options: HeaderOptions, response?: IResponseFn<disputes.IDispute>): Promise<disputes.IDispute>;
            close(disputeId: string, response?: IResponseFn<disputes.IDispute>): Promise<disputes.IDispute>;

            /**
             * Returns a list of your disputes.
             */
            list(data: IListOptionsCreated, options: HeaderOptions, response?: IResponseFn<IList<disputes.IDispute>>): Promise<IList<disputes.IDispute>>;
            list(data: IListOptionsCreated, response?: IResponseFn<IList<disputes.IDispute>>): Promise<IList<disputes.IDispute>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<disputes.IDispute>>): Promise<IList<disputes.IDispute>>;
            list(response?: IResponseFn<IList<disputes.IDispute>>): Promise<IList<disputes.IDispute>>;

            setMetadata(): void; //TODO: Implement placeholder method
            getMetadata(): void; //TODO: Implement placeholder method
        }

        class Events extends StripeResource {
            /**
             * Retrieves the details of an event. Supply the unique identifier of the event, which you might have
             * received in a webhook.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<events.IEvent>): Promise<events.IEvent>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<events.IEvent>): Promise<events.IEvent>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<events.IEvent>): Promise<events.IEvent>;
            retrieve(id: string, response?: IResponseFn<events.IEvent>): Promise<events.IEvent>;


            /**
             * List events, going back up to 30 days.
             */
            list(data: events.IEventListOptions, options: HeaderOptions, response?: IResponseFn<IList<events.IEvent>>): Promise<IList<events.IEvent>>;
            list(data: events.IEventListOptions, response?: IResponseFn<IList<events.IEvent>>): Promise<IList<events.IEvent>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<events.IEvent>>): Promise<IList<events.IEvent>>;
            list(response?: IResponseFn<IList<events.IEvent>>): Promise<IList<events.IEvent>>;
        }

        class FileUploads extends StripeResource {
            /**
             * To upload a file to Stripe, you’ll need to send a request of type multipart/form-data.
             * The request should contain the file you would like to upload, as well as the parameters for creating a file.
             *
             * All of Stripe’s officially supported API libraries should have support for sending multipart/form-data.
             */
            create(data: fileUploads.IFileUploadCreationOptions, options: HeaderOptions, response?: IResponseFn<fileUploads.IFileUpdate>): Promise<fileUploads.IFileUpdate>;
            create(data: fileUploads.IFileUploadCreationOptions, response?: IResponseFn<fileUploads.IFileUpdate>): Promise<fileUploads.IFileUpdate>;

            /**
             * Retrieves the details of an existing file object.
             * Supply the unique file upload ID from a file creation request, and Stripe will return the corresponding transfer information.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<fileUploads.IFileUpdate>): Promise<fileUploads.IFileUpdate>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<fileUploads.IFileUpdate>): Promise<fileUploads.IFileUpdate>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<fileUploads.IFileUpdate>): Promise<fileUploads.IFileUpdate>;
            retrieve(id: string, response?: IResponseFn<fileUploads.IFileUpdate>): Promise<fileUploads.IFileUpdate>;

            /**
             * Returns a list of the files that you have uploaded to Stripe.
             * The file uploads are returned sorted by creation date, with the most recently created file uploads appearing first.
             */
            list(data: fileUploads.IFileUploadListOptions, options: HeaderOptions, response?: IResponseFn<IList<fileUploads.IFileUpdate>>): Promise<IList<fileUploads.IFileUpdate>>;
            list(data: fileUploads.IFileUploadListOptions, response?: IResponseFn<IList<fileUploads.IFileUpdate>>): Promise<IList<fileUploads.IFileUpdate>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<fileUploads.IFileUpdate>>): Promise<IList<fileUploads.IFileUpdate>>;
            list(response?: IResponseFn<IList<fileUploads.IFileUpdate>>): Promise<IList<fileUploads.IFileUpdate>>;
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
            create(data: invoices.IInvoiceCreationOptions, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
            create(data: invoices.IInvoiceCreationOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;

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
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
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
            retrieveLines(id: string, data: invoices.IInvoiceLineItemRetrievalOptions, options: HeaderOptions, response?: IResponseFn<IList<invoices.IInvoiceLineItem>>): Promise<invoices.IInvoiceLineItem>;
            retrieveLines(id: string, data: invoices.IInvoiceLineItemRetrievalOptions, response?: IResponseFn<IList<invoices.IInvoiceLineItem>>): Promise<invoices.IInvoiceLineItem>;
            retrieveLines(id: string, options: HeaderOptions, response?: IResponseFn<IList<invoices.IInvoiceLineItem>>): Promise<invoices.IInvoiceLineItem>;
            retrieveLines(id: string, response?: IResponseFn<IList<invoices.IInvoiceLineItem>>): Promise<invoices.IInvoiceLineItem>;

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
             */
            retrieveUpcoming(id: string, data: invoices.IInvoiceUpcomingOptions, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
            retrieveUpcoming(id: string, data: invoices.IInvoiceUpcomingOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
            retrieveUpcoming(id: string, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
            retrieveUpcoming(id: string, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;

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
            update(id: string, data: invoices.IInvoiceUpdateOptions, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
            update(id: string, data: invoices.IInvoiceUpdateOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;

            /**
             * Stripe automatically creates and then attempts to pay invoices for customers on subscriptions. We'll also retry unpaid
             * invoices according to your retry settings. However, if you'd like to attempt to collect payment on an invoice out of the
             * normal retry schedule or for some other reason, you can do so.
             *
             * @returns Returns the invoice object.
             *
             * @param id The ID of the invoice to pay.
             */
            pay(id: string, data: invoices.IInvoicePayOptions, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
            pay(id: string, data: invoices.IInvoicePayOptions, response: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
            pay(id: string, data: invoices.IInvoicePayOptions): Promise<invoices.IInvoice>;
            pay(id: string, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>): Promise<invoices.IInvoice>;
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
            list(data: invoices.IInvoiceListOptions, options: HeaderOptions, response?: IResponseFn<IList<invoices.IInvoice>>): Promise<IList<invoices.IInvoice>>;
            list(data: invoices.IInvoiceListOptions, response?: IResponseFn<IList<invoices.IInvoice>>): Promise<IList<invoices.IInvoice>>;
            list(response?: IResponseFn<IList<invoices.IInvoice>>): Promise<IList<invoices.IInvoice>>;
        }

        class InvoiceItems extends StripeResource {
            /**
             * Adds an arbitrary charge or credit to the customer’s upcoming invoice.
             */
            create(data: invoiceItems.InvoiceItemCreationOptions, options: HeaderOptions, response?: IResponseFn<invoiceItems.InvoiceItem>): Promise<invoiceItems.InvoiceItem>;
            create(data: invoiceItems.InvoiceItemCreationOptions, response?: IResponseFn<invoiceItems.InvoiceItem>): Promise<invoiceItems.InvoiceItem>;

            /**
             * Retrieves the invoice item with the given ID.
             */
            retrieve(invoiceItemId: string, options: HeaderOptions, response?: IResponseFn<invoiceItems.InvoiceItem>): Promise<invoiceItems.InvoiceItem>;
            retrieve(invoiceItemId: string, response?: IResponseFn<invoiceItems.InvoiceItem>): Promise<invoiceItems.InvoiceItem>;

            /**
             * Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the
             * invoice it's attached to is closed.
             */
            update(invoiceItemId: string, data: invoiceItems.InvoiceItemUpdateOptions, options: HeaderOptions, response?: IResponseFn<invoiceItems.InvoiceItem>): Promise<invoiceItems.InvoiceItem>;
            update(invoiceItemId: string, data: invoiceItems.InvoiceItemUpdateOptions, response?: IResponseFn<invoiceItems.InvoiceItem>): Promise<invoiceItems.InvoiceItem>;

            /**
             * Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice
             * items appearing first.
             */
            list(data: invoiceItems.InvoiceItemListOptions, options: HeaderOptions, response?: IResponseFn<IList<invoiceItems.InvoiceItem>>): Promise<IList<invoiceItems.InvoiceItem>>;
            list(data: invoiceItems.InvoiceItemListOptions, response?: IResponseFn<IList<invoiceItems.InvoiceItem>>): Promise<IList<invoiceItems.InvoiceItem>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<invoiceItems.InvoiceItem>>): Promise<IList<invoiceItems.InvoiceItem>>;
            list(response?: IResponseFn<IList<invoiceItems.InvoiceItem>>): Promise<IList<invoiceItems.InvoiceItem>>;

            /**
             * Removes an invoice item from the upcoming invoice. Removing an invoice item is only possible before the invoice it's attached
             * to is closed.
             */
            del(invoiceItemId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            del(invoiceItemId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
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
            create(data: payouts.IPayoutCreationOptions, options: HeaderOptions, response?: IResponseFn<payouts.IPayout>): Promise<payouts.IPayout>;
            create(data: payouts.IPayoutCreationOptions, response?: IResponseFn<payouts.IPayout>): Promise<payouts.IPayout>;

            /**
             * Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.
             */
            retrieve(payoutId: string, options: HeaderOptions, response?: IResponseFn<payouts.IPayout>): Promise<payouts.IPayout>;
            retrieve(payoutId: string, response?: IResponseFn<payouts.IPayout>): Promise<payouts.IPayout>;

            /**
             * Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.
             */
            update(payoutId: string, data: IDataOptionsWithMetadata, options: HeaderOptions, response?: IResponseFn<payouts.IPayout>): Promise<payouts.IPayout>;
            update(payoutId: string, data: IDataOptionsWithMetadata, response?: IResponseFn<payouts.IPayout>): Promise<payouts.IPayout>;

            /**
             * Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.
             */
            list(data: payouts.IPayoutListOptions, options: HeaderOptions, response?: IResponseFn<IList<payouts.IPayout>>): Promise<IList<payouts.IPayout>>;
            list(data: payouts.IPayoutListOptions, response?: IResponseFn<IList<payouts.IPayout>>): Promise<IList<payouts.IPayout>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<payouts.IPayout>>): Promise<IList<payouts.IPayout>>;
            list(response?: IResponseFn<IList<payouts.IPayout>>): Promise<IList<payouts.IPayout>>;

            /**
             * A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance, and the fees you were originally charged on the payout will be refunded.
             * You may not cancel automatic Stripe payouts.
             */
            cancel(payoutId: string, options: HeaderOptions, response?: IResponseFn<payouts.IPayout>): Promise<payouts.IPayout>;
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
            create(data: plans.IPlanCreationOptions, options: HeaderOptions, response?: IResponseFn<plans.IPlan>): Promise<plans.IPlan>;
            create(data: plans.IPlanCreationOptions, response?: IResponseFn<plans.IPlan>): Promise<plans.IPlan>;

            /**
             * Retrieves the plan with the given ID.
             *
             * @returns Returns a plan if a valid plan ID was provided. Throws an error otherwise.
             *
             * @param planName The identifier of the desired plan.
             */
            retrieve(planName: string, options: HeaderOptions, response?: IResponseFn<plans.IPlan>): Promise<plans.IPlan>;
            retrieve(planName: string, response?: IResponseFn<plans.IPlan>): Promise<plans.IPlan>;

            /**
             * Updates the name of a plan. Other plan details (price, interval, etc.) are, by design, not editable.
             *
             * @returns The updated plan object is returned upon success. Otherwise, this call throws an error.
             *
             * @param planName The identifier of the plan to update
             * @param data The fields to update
             */
            update(planName: string, data: plans.IPlanUpdateOptions, options: HeaderOptions, response?: IResponseFn<plans.IPlan>): Promise<plans.IPlan>;
            update(planName: string, data: plans.IPlanUpdateOptions, response?: IResponseFn<plans.IPlan>): Promise<plans.IPlan>;

            /**
             * You can delete plans via the plan management page of the Stripe dashboard. However, deleting a plan does not affect
             * any current subscribers to the plan; it merely means that new subscribers can't be added to that plan. You can also
             * delete plans via the API.
             *
             * @returns An object with the deleted plan's ID and a deleted flag upon success. Otherwise, this call throws an error, such as if the plan has already been deleted.
             *
             * @param planName The identifier of the plan to be deleted.
             */
            del(planName: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            del(planName: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;

            /**
             * Returns a list of your plans.
             *
             * @returns An object with a data property that contains an array of up to limit plans, starting after plan starting_after.
             * Each entry in the array is a separate plan object. If no more plans are available, the resulting array will be empty. This
             * request should never throw an error. You can optionally request that the response include the total count of all plans. To
             * do so, specify include[]=total_count in your request.
             */
            list(data: IListOptionsCreated, options: HeaderOptions, response?: IResponseFn<IList<plans.IPlan>>): Promise<IList<plans.IPlan>>;
            list(data: IListOptionsCreated, response?: IResponseFn<IList<plans.IPlan>>): Promise<IList<plans.IPlan>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<plans.IPlan>>): Promise<IList<plans.IPlan>>;
            list(response?: IResponseFn<IList<plans.IPlan>>): Promise<IList<plans.IPlan>>;
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
            //options: IDataOptions
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
            //options: IDataOptions
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
            create(data: refunds.IRefundCreationOptionsWithCharge, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            create(data: refunds.IRefundCreationOptionsWithCharge, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * Retrieves the details of an existing refund.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            retrieve(id: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;


            /**
             * Updates the specified refund by setting the values of the parameters passed.
             * Any parameters not provided will be left unchanged.
             *
             * This request only accepts metadata as an argument.
             */
            update(id: string, data: IDataOptionsWithMetadata, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
            update(id: string, data: IDataOptionsWithMetadata, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;

            /**
             * Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order,
             * with the most recent refunds appearing first.
             * For convenience, the 10 most recent refunds are always available by default on the charge object.
             */
            list(data: refunds.IRefundListOptions, options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
            list(data: refunds.IRefundListOptions, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
            list(response?: IResponseFn<IList<refunds.IRefund>>): Promise<IList<refunds.IRefund>>;
        }

        class Tokens extends StripeResource {
            /**
             * Creates a single use token that wraps the details of a credit card. This token can be used
             * in place of a credit card object with any API method. These tokens can only be used once:
             * by creating a new charge object, or attaching them to a customer.
             */
            create(data: tokens.ICardTokenCreationOptions, options: HeaderOptions, response?: IResponseFn<tokens.ICardToken>): Promise<tokens.ICardToken>;
            create(data: tokens.ICardTokenCreationOptions, response?: IResponseFn<tokens.ICardToken>): Promise<tokens.ICardToken>;

            /**
             * Creates a single use token that wraps the details of a bank account. This token can be used
             * in place of a bank account object with any API method. These tokens can only be used once:
             * by attaching them to a recipient or managed account.
             */
            create(data: tokens.IBankAccountTokenCreationOptions, options: HeaderOptions, response?: IResponseFn<tokens.IBankAccountToken>): Promise<tokens.IBankAccountToken>;
            create(data: tokens.IBankAccountTokenCreationOptions, response?: IResponseFn<tokens.IBankAccountToken>): Promise<tokens.IBankAccountToken>;

            /**
             * Creates a single use token that wraps the details of personally identifiable information (PII).
             * This token can be used in place of a personal_id_number in the Account Update API method.
             * These tokens can only be used once.
             */
            create(data: tokens.IPiiTokenCreationOptions, options: HeaderOptions, response?: IResponseFn<tokens.IToken>): Promise<tokens.IToken>;
            create(data: tokens.IPiiTokenCreationOptions, response?: IResponseFn<tokens.IToken>): Promise<tokens.IToken>;

            /**
             * Retrieves the token with the given ID.
             */
            retrieve(tokenId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<tokens.IToken>): Promise<tokens.IToken>;
            retrieve(tokenId: string, data: IDataOptions, response?: IResponseFn<tokens.IToken>): Promise<tokens.IToken>;
            retrieve(tokenId: string, options: HeaderOptions, response?: IResponseFn<tokens.IToken>): Promise<tokens.IToken>;
            retrieve(tokenId: string, response?: IResponseFn<tokens.IToken>): Promise<tokens.IToken>;

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
            create(data: transfers.ITransferCreationOptions, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;
            create(data: transfers.ITransferCreationOptions, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;

            /**
             * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or
             * the transfer list, and Stripe will return the corresponding transfer information.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;
            retrieve(id: string, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;


            /**
             * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left
             * unchanged.
             *
             * This request accepts only the description and metadata as arguments.
             */
            update(id: string, data: transfers.ITransferUpdateOptions, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;
            update(id: string, data: transfers.ITransferUpdateOptions, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;

            /**
             * Returns a list of existing transfers sent to third-party bank accounts or that Stripe has sent you. The transfers are
             * returned in sorted order, with the most recently created transfers appearing first.
             */
            list(data: transfers.ITransferListOptions, options: HeaderOptions, response?: IResponseFn<IList<transfers.ITransfer>>): Promise<IList<transfers.ITransfer>>;
            list(data: transfers.ITransferListOptions, response?: IResponseFn<IList<transfers.ITransfer>>): Promise<IList<transfers.ITransfer>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<transfers.ITransfer>>): Promise<IList<transfers.ITransfer>>;
            list(response?: IResponseFn<IList<transfers.ITransfer>>): Promise<IList<transfers.ITransfer>>;

            cancel(id: string, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;
            cancel(id: string, response?: IResponseFn<transfers.ITransfer>): Promise<transfers.ITransfer>;

            listTransactions(options: HeaderOptions, response?: IResponseFn<IList<charges.ICharge>>): Promise<IList<charges.ICharge>>; //TODO: Not sure if this should be a list of balance transactions or charges.
            listTransactions(response?: IResponseFn<IList<charges.ICharge>>): Promise<IList<charges.ICharge>>; //TODO: Not sure if this should be a list of balance transactions or charges.

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
            reverse(id: string, data: transferReversals.IReversalCreationOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            reverse(id: string, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            reverse(id: string, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;

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
            createReverse(transferId: string, data: transferReversals.IReversalCreationOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            createReverse(transferId: string, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            createReverse(transferId: string, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;

            /**
             * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a
             * specific reversal stored on the transfer.
             */
            retrieveReversal(transferId: string, reversalId: string, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            retrieveReversal(transferId: string, reversalId: string, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;

            /**
             * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * This request only accepts metadata and description as arguments.
             */
            updateReversal(transferId: string, reversalId: string, data: transferReversals.IReversalUpdateOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            updateReversal(transferId: string, reversalId: string, data: transferReversals.IReversalUpdateOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;

            /**
             * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by
             * default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after
             * parameters to page through additional reversals.
             */
            listReversals(transferId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<transferReversals.IReversal>>): Promise<IList<transferReversals.IReversal>>;
            listReversals(transferId: string, data: IListOptions, response?: IResponseFn<IList<transferReversals.IReversal>>): Promise<IList<transferReversals.IReversal>>;
            listReversals(transferId: string, options: HeaderOptions, response?: IResponseFn<IList<transferReversals.IReversal>>): Promise<IList<transferReversals.IReversal>>;
            listReversals(transferId: string, response?: IResponseFn<IList<transferReversals.IReversal>>): Promise<IList<transferReversals.IReversal>>;

            setMetadata(): void; //TODO: Implement placeholder method
            getMetadata(): void; //TODO: Implement placeholder method
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
            create(data: transferReversals.IReversalCreationOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            create(options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            create(response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;

            /**
             * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a
             * specific reversal stored on the transfer.
             */
            retrieve(reversalId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            retrieve(reversalId: string, data: IDataOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            retrieve(reversalId: string, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            retrieve(reversalId: string, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;

            /**
             * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * This request only accepts metadata and description as arguments.
             */
            update(reversalId: string, data: transferReversals.IReversalUpdateOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;
            update(reversalId: string, data: transferReversals.IReversalUpdateOptions, response?: IResponseFn<transferReversals.IReversal>): Promise<transferReversals.IReversal>;

            /**
             * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by
             * default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after
             * parameters to page through additional reversals.
             */
            list(data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<transferReversals.IReversal>>): Promise<IList<transferReversals.IReversal>>;
            list(data: IListOptions, response?: IResponseFn<IList<transferReversals.IReversal>>): Promise<IList<transferReversals.IReversal>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<transferReversals.IReversal>>): Promise<IList<transferReversals.IReversal>>;
            list(response?: IResponseFn<IList<transferReversals.IReversal>>): Promise<IList<transferReversals.IReversal>>;
        }

        class CountrySpecs extends StripeResource {
            /**
             * Lists all Country Spec objects available in the API.
             */
            list(data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<countrySpecs.ICountrySpec>>): Promise<IList<countrySpecs.ICountrySpec>>;
            list(data: IListOptions, response?: IResponseFn<IList<countrySpecs.ICountrySpec>>): Promise<IList<countrySpecs.ICountrySpec>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<countrySpecs.ICountrySpec>>): Promise<IList<countrySpecs.ICountrySpec>>;
            list(response?: IResponseFn<IList<countrySpecs.ICountrySpec>>): Promise<IList<countrySpecs.ICountrySpec>>;

            /**
             * Returns a Country Spec for a given Country code.
             *
             * @param retrieve  An ISO country code. Available country codes can be listed with the List Country Specs endpoint.
             */
            retrieve(id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<countrySpecs.ICountrySpec>): Promise<countrySpecs.ICountrySpec>;
            retrieve(id: string, data: IDataOptions, response?: IResponseFn<countrySpecs.ICountrySpec>): Promise<countrySpecs.ICountrySpec>;
            retrieve(id: string, options: HeaderOptions, response?: IResponseFn<countrySpecs.ICountrySpec>): Promise<countrySpecs.ICountrySpec>;
            retrieve(id: string, response?: IResponseFn<countrySpecs.ICountrySpec>): Promise<countrySpecs.ICountrySpec>;
        }

        class Orders {
            /**
             * Creates a new order object.
             */
            create(data: orders.IOrderCreationOptions, options: HeaderOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;
            create(data: orders.IOrderCreationOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;

            /**
             * Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list,
             * and Stripe will return the corresponding order information.
             */
            retrieve(orderId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;
            retrieve(orderId: string, data: IDataOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;
            retrieve(orderId: string, options: HeaderOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;
            retrieve(orderId: string, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;

            /**
             * Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             * This request accepts only the metadata, and status as arguments.
             */
            update(orderId: string, data: orders.IOrderUpdateOptions, options: HeaderOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;
            update(orderId: string, data: orders.IOrderUpdateOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;

            /**
             * Pay an order by providing a source to create a payment.
             */
            pay(orderId: string, data: orders.IOrderPayOptions, options: HeaderOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;
            pay(orderId: string, data: orders.IOrderPayOptions, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;

            /**
             * Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.
             */
            list(data: orders.IOrderListOptions, options: HeaderOptions, response?: IResponseFn<IList<orders.IOrder>>): Promise<IList<orders.IOrder>>;
            list(data: orders.IOrderListOptions, response?: IResponseFn<IList<orders.IOrder>>): Promise<IList<orders.IOrder>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<orders.IOrder>>): Promise<IList<orders.IOrder>>;
            list(response?: IResponseFn<IList<orders.IOrder>>): Promise<IList<orders.IOrder>>;
        }

        class Products {
            /**
             * Creates a new product object.
             */
            create(data: products.IProductCreationOptions, options: HeaderOptions, response?: IResponseFn<products.IProduct>): Promise<products.IProduct>;
            create(data: products.IProductCreationOptions, response?: IResponseFn<products.IProduct>): Promise<products.IProduct>;

            /**
             * Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product
             * list, and Stripe will return the corresponding product information.
             */
            retrieve(productId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<products.IProduct>): Promise<products.IProduct>;
            retrieve(productId: string, data: IDataOptions, response?: IResponseFn<products.IProduct>): Promise<products.IProduct>;
            retrieve(productId: string, options: HeaderOptions, response?: IResponseFn<products.IProduct>): Promise<products.IProduct>;
            retrieve(productId: string, response?: IResponseFn<products.IProduct>): Promise<products.IProduct>;

            /**
             * Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * Note that a product's attributes are not editable. Instead, you would need to deactivate the existing product and create a new one
             * with the new attribute values.
             */
            update(productId: string, data: products.IProductUpdateOptions, options: HeaderOptions, response?: IResponseFn<products.IProduct>): Promise<products.IProduct>;
            update(productId: string, data: products.IProductUpdateOptions, response?: IResponseFn<products.IProduct>): Promise<products.IProduct>;

            /**
             * Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.
             */
            list(data: products.IProductListOptions, options: HeaderOptions, response?: IResponseFn<IList<products.IProduct>>): Promise<IList<products.IProduct>>;
            list(data: products.IProductListOptions, response?: IResponseFn<IList<products.IProduct>>): Promise<IList<products.IProduct>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<products.IProduct>>): Promise<IList<products.IProduct>>;
            list(response?: IResponseFn<IList<products.IProduct>>): Promise<IList<products.IProduct>>;

            /**
             * Delete a product. Deleting a product is only possible if it has no SKUs associated with it.
             */
            del(productId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            del(productId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
        }

        class SKUs {
            /**
             * Creates a new SKU associated with a product.
             */
            create(data: skus.ISkuCreationOptions, options: HeaderOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;
            create(data: skus.ISkuCreationOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;

            /**
             * Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the
             * product, and Stripe will return the corresponding SKU information.
             */
            retrieve(skuId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;
            retrieve(skuId: string, data: IDataOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;
            retrieve(skuId: string, options: HeaderOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;
            retrieve(skuId: string, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;

            /**
             * Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             *
             * Note that a SKU's attributes are not editable. Instead, you would need to deactivate the existing SKU and create a new one with
             * the new attribute values.
             */
            update(skuId: string, data: skus.ISkuUpdateOptions, options: HeaderOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;
            update(skuId: string, data: skus.ISkuUpdateOptions, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;

            /**
             * Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.
             */
            list(data: skus.ISkuListOptions, options: HeaderOptions, response?: IResponseFn<IList<skus.ISku>>): Promise<IList<skus.ISku>>;
            list(data: skus.ISkuListOptions, response?: IResponseFn<IList<skus.ISku>>): Promise<IList<skus.ISku>>;
            list(options: HeaderOptions, response?: IResponseFn<IList<skus.ISku>>): Promise<IList<skus.ISku>>;
            list(response?: IResponseFn<IList<skus.ISku>>): Promise<IList<skus.ISku>>;

            /**
             * Delete a SKU. Deleting a SKU is only possible until it has been used in an order.
             */
            del(skuId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
            del(skuId: string, response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
        }

        class WebHooks {
            constructEvent<T>(requestBody: any, signature: string | string[], endpointSecret: string): webhooks.StripeWebhookEvent<T>;
        }

        class EphemeralKeys {
            create(customer: ephemeralKeys.ICustomer, stripe_version: ephemeralKeys.IStripeVersion, response?: IResponseFn<ephemeralKeys.IEphemeralKey>): Promise<ephemeralKeys.IEphemeralKey>;
        }
    }

    interface IObject {
        object: string;
    }

    interface IResourceObject extends IObject {
        id: string;
    }

    interface IResponseFn<R> {
        (err: IStripeError, value: R): void;
    }

    interface IDeleteConfirmation { id: string; deleted: boolean; }

    /**
     * A filter on the list based on this object field. The value can
     * be a string with an integer Unix timestamp, or it can be a
     * dictionary with the following options:
     */
    type IDateFilter = string | {
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
    }

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

    interface IShippingInformation {
        /**
         * Shipping address.
         */
        address: {
            /**
             * Address line 1 (Street address/PO Box/Company name)
             */
            line1: string;

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
         * Recipient name.
         */
        name: string;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple
         * tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
    }


    interface IList<T> {
        /**
         * Value is 'list'
         */
        object: string;

        /**
         * An array containing the actual response elements, paginated by any request parameters.
         */
        data: Array<T>;

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
        expand?: Array<string>;
        include?: Array<string>;
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
    }

    /**
     * Header options can either be a Connect Account Secret Key,
     * or a hash with one or more of these keys: idempotency_key, stripe_account, api_key
     */
    type HeaderOptions = IHeaderOptions | string;

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
