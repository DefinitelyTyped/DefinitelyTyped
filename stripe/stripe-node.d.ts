// Type definitions for stripe-node
// Project: https://github.com/stripe/stripe-node/
// Definitions by: William Johnston <https://github.com/wjohnsto>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'stripe' {    
    var out: typeof StripeNode.Stripe;
    export = out;
}

declare module StripeNode {
    class Stripe {
        static DEFAULT_HOST: string;
        static DEFAULT_PORT: string;
        static DEFAULT_BASE_PATH: string;
        static DEFAULT_API_VERSION: string;
        static DEFAULT_TIMEOUT: number;
        static PACKAGE_VERSION: string;
        static USER_AGENT: {
            bindings_version: string;
            lang: string;
            lang_version: string;
            platform: string;
            publisher: string;
            uname: string;
        };
        static USER_AGENT_SERIALIZED: string;

        static resources: typeof resources;
        static StripeResource: typeof StripeResource;

        account: resources.Account;
        balance: resources.Balance;
        charges: resources.Charges;
        coupons: resources.Coupons;
        customers: resources.Customers;
        events: resources.Events;
        invoices: resources.Invoices;
        invoiceItems: resources.InvoiceItems;
        plans: resources.Plans;
        recipientCards: resources.RecipientCards;
        recipients: resources.Recipients;
        tokens: resources.Tokens;
        yransfers: resources.Transfers;
        applicationFees: resources.ApplicationFees;
        fileUploads: resources.FileUploads;
        bitcoinReceivers: resources.BitcoinReceivers;
        customerCards: resources.CustomerCards;
        customerSubscriptions: resources.CustomerSubscriptions;
        chargeRefunds: resources.ChargeRefunds;
        applicationFeeRefunds: resources.ApplicationFeeRefunds;
        transferReversals: resources.TransferReversals;

        constructor(apiKey: string, version?: string);

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

    module account { }

    module balance {
        interface IBalanceTransaction {
            id: string;

            /**
             * Value is 'balance_transaction'
             */
            object: string;

            /**
             * Gross amount of the transaction, in cents.
             */
            amount: number;

            /**
             * The date the transaction’s net funds will become available in the Stripe balance.
             */
            available_on: number;
            created: number;

            /**
             * Three-letter ISO currency code representing the currency.
             */
            currency: string;

            /**
             * Fee (in cents) paid for this transaction
             */
            fee: number;

            /**
             * Detailed breakdown of fees (in cents) paid for this transaction
             */
            fee_details: Array<{
                amount: number;

                /**
                 * Three-letter ISO currency code representing the currency of the amount that was disputed.
                 */
                currency: string;

                /**
                 * Type of the fee, one of: application_fee, stripe_fee or tax.
                 */
                type: string;
                application: string;
                description: string;
            }>;

            /**
             * Net amount of the transaction, in cents.
             */
            net: number;

            /**
             * If the transaction’s net funds are available in the Stripe balance yet. Either available or pending.
             */
            status: string;

            /**
             * Type of the transaction, one of: charge, refund, adjustment, application_fee, 
             * application_fee_refund, transfer, transfer_cancel or transfer_failure.
             */
            type: string;
            description?: string;

            /**
             * The Stripe object this transaction is related to.
             */
            source?: IPaymentToken | ICard;
            source_transfers: IList<transfers.ITransfer>;
        }
    }

    module charges {

        /**
         * To charge a credit or a debit card, you create a charge object. You can retrieve and refund individual 
         * charges as well as list all charges. Charges are identified by a unique random ID.
         */
        interface ICharge {
            id: string;
        
            /**
             * Value is 'charge'
             */
            object: string;

            livemode: boolean;

            /**
             * Amount charged in cents, positive integer or zero.
             */
            amount: number;

            /**
             * If the charge was created without capturing, this boolean represents whether or not it is 
             * still uncaptured or has since been captured.
             */
            captured: boolean;

            created: number;

            /**
             * Three-letter ISO currency code representing the currency in which the charge was made.
             */
            currency: string;

            paid: boolean;

            /**
             * Whether or not the charge has been fully refunded. If the charge is only partially refunded, 
             * this attribute will still be false.
             */
            refunded: boolean;

            /**
             * A list of refunds that have been applied to the charge.
             */
            refunds: IList<chargeRefunds.IRefund>;

            /**
             * For most Stripe users, the source of every charge is a credit or debit card. 
             * This hash is then the card object describing that card.
             */
            source: ICard;

            /**
             * The status of the payment is either succeeded or failed.
             */
            status: string;

            /**
             * Amount in cents refunded (can be less than the amount attribute on the charge if a partial refund was issued).
             */
            amount_refunded: number;

            /**
             * ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
             */
            balance_transaction: string;

            /**
             * ID of the customer this charge is for if one exists.
             */
            customer: string;
            description?: string;

            /**
             * Details about the dispute if the charge has been disputed.
             */
            dispute?: IDispute;

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
             * ID of the invoice this charge is for if one exists.
             */
            invoice: string;
            metadata: IMetadata;

            /**
             * This is the email address that the receipt for this charge was sent to.
             */
            receipt_email: string;

            /**
             * This is the transaction number that appears on email receipts sent for this charge.
             */
            receipt_number: string;
            application_fee?: string;

            /**
             * Hash with information on fraud assessments for the charge.
             */
            fraud_details: {
                /**
                 * Assessments reported by you have the key user_report and, if set, possible values of safe and fraudulent.
                 */
                user_report?: string;

                /**
                 * Assessments from Stripe have the key stripe_report and, if set, the value fraudulent.
                 */
                stripe_report?: string;
            };

            /**
             * Shipping information for the charge.
             */
            shipping?: IShippingInformation;
        }
    }

    module coupons {
        /**
         * A discount represents the actual application of a coupon to a particular customer. It contains information 
         * about when the discount began and when it will end.
         */
        interface IDiscount {
            /**
             * Value is 'discount'
             */
            object: string;

            /**
             * Hash describing the coupon applied to create this discount
             */
            coupon: ICoupon;
            customer: string;

            /**
             * Date that the coupon was applied
             */
            start: number;

            /**
             * If the coupon has a duration of once or repeating, the date that this discount will end. If the coupon 
             * used has a forever duration, this attribute will be null.
             */
            end: number;

            /**
             * The subscription that this coupon is applied to, if it is applied to a particular subscription
             */
            subscription: string;
        }

        /**
         * A coupon contains information about a percent-off or amount-off discount you might want to apply to a customer. 
         * Coupons only apply to invoices; they do not apply to one-off charges.
         */
        interface ICoupon {
            id: string;

            /**
             * Value is 'coupon'
             */
            object: string;
            livemode: boolean;
            created: number;

            /**
             * One of forever, once, and repeating. Describes how long a customer who applies this coupon will get the discount.
             */
            duration: string;

            /**
             * Amount (in the currency specified) that will be taken off the subtotal of any invoices for this customer.
             */
            amount_off: number;

            /**
             * If amount_off has been set, the currency of the amount to take off.
             */
            currency: string;

            /**
             * If duration is repeating, the number of months the coupon applies. Null if coupon duration is forever or once.
             */
            duration_in_months: number;

            /**
             * Maximum number of times this coupon can be redeemed, in total, before it is no longer valid.
             */
            max_redemptions: number;

            /**
             * A set of key/value pairs that you can attach to a coupon object. It can be useful for storing 
             * additional information about the coupon in a structured format.
             */
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
    }
    module customers {
        /**
         * Customer objects allow you to perform recurring charges and track multiple charges that are associated 
         * with the same customer. The API allows you to create, delete, and update your customers. You can 
         * retrieve individual customers as well as a list of all your customers.
         */
        interface ICustomer {
            id: string;

            /**
             * Value is 'customer'
             */
            object: string;
            livemode: boolean;
            created: number;

            /**
             * Current balance, if any, being stored on the customer’s account. If negative, the customer has credit to apply to 
             * the next invoice. If positive, the customer has an amount owed that will be added to the next invoice. The balance 
             * does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied 
             * to any invoice. This balance is only taken into account for recurring charges.
             */
            account_balance?: number;

            /**
             * The currency the customer can be charged in for recurring billing purposes (subscriptions, invoices, invoice items).
             */
            currency: string;

            /**
             * ID of the default source attached to this customer.
             */
            default_source: string;

            /**
             * Whether or not the latest charge for the customer’s latest invoice has failed
             */
            delinquent: boolean;

            /**
             * Describes the current discount active on the customer, if there is one.
             */
            discount: coupons.IDiscount;
            description?: string;
            email?: string;

            /**
             * A set of key/value pairs that you can attach to a customer object. It can be useful for storing 
             * additional information about the customer in a structured format.
             */
            metadata?: IMetadata;

            sources?: IList<ICard | bitcoinReceivers.IBitcoinReceiver>;

            /**
             * The customer’s current subscriptions, if any
             */
            subscriptions: IList<customerSubscriptions.ISubscription>;
        }
    }
    module events { }
    module invoices {
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
        interface IInvoice {
            id: string;

            /**
             * Value is 'invoice'
             */
            object: string;
            livemode: boolean;

            /**
             * Final amount due at this time for this invoice. If the invoice’s total is smaller than the minimum charge 
             * amount, for example, or if there is account credit that can be applied to the invoice, the amount_due may 
             * be 0. If there is a positive starting_balance for the invoice (the customer owes money), the amount_due 
             * will also take that into account. The charge that gets generated for the invoice will be for the amount 
             * specified in amount_due.
             */
            amount_due: number;

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
             * Whether or not the invoice is still trying to collect payment. An invoice is closed if it’s either paid or 
             * it has been marked closed. A closed invoice will no longer attempt to collect payment.
             */
            closed: boolean;
            currency: string;
            customer: string;
            date: number;

            /**
             * Whether or not the invoice has been forgiven. Forgiving an invoice instructs us to update the subscription 
             * status as if the invoice were succcessfully paid. Once an invoice has been forgiven, it cannot be unforgiven 
             * or reopened
             */
            forgiven: boolean;

            /**
             * The individual line items that make up the invoice
             */
            lines: IList<invoiceItems.InvoiceLineItem>;

            /**
             * Whether or not payment was successfully collected for this invoice. An invoice can be paid (most commonly) 
             * with a charge or with credit from the customer’s account balance.
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
             * Starting customer balance before attempting to pay invoice. If the invoice has not been attempted yet, 
             * this will be the current customer balance.
             */
            starting_balance: number;

            /**
             * Total of all subscriptions, invoice items, and prorations on the invoice before any discount is applied
             */
            subtotal: number;

            /**
             * Total after discount
             */
            total: number;

            /**
             * The fee in cents that will be applied to the invoice and transferred to the application owner’s 
             * Stripe account when the invoice is paid.
             */
            application_fee: number;

            /**
             * ID of the latest charge generated for this invoice, if any.
             */
            charge: string;
            description: string;
            discount: coupons.IDiscount;

            /**
             * Ending customer balance after attempting to pay invoice. If the invoice has not been attempted yet, 
             * this will be null.
             */
            ending_balance: number;

            /**
             * The time at which payment will next be attempted.
             */
            next_payment_attempt: number;

            /**
             * This is the transaction number that appears on email receipts sent for this invoice.
             */
            receipt_number: string;

            /**
             * Extra information about an invoice for the customer’s credit card statement.
             */
            statement_descriptor: string;

            /**
             * The subscription that this invoice was prepared for, if any.
             */
            subscription: string;

            /**
             * The time at which webhooks for this invoice were successfully delivered (if the invoice had no webhooks to 
             * deliver, this will match date). Invoice payment is delayed until webhooks are delivered, or until all webhook 
             * delivery attempts have been exhausted.
             */
            webhooks_delivered_at: number;

            /**
             * A set of key/value pairs that you can attach to an invoice object. It can be useful for storing additional 
             * information about the invoice in a structured format.
             */
            metadata: IMetadata;

            /**
             * The amount of tax included in the total, calculated from tax_percent and the subtotal. If no tax_percent 
             * is defined, this value will be null.
             */
            tax: number;

            /**
             * This percentage of the subtotal has been added to the total amount of the invoice, including invoice line 
             * items and discounts. This field is inherited from the subscription’s tax_percent field, but can be changed 
             * before the invoice is paid. This field defaults to null.
             */
            tax_percent: number;
        }
    }
    module invoiceItems {
        interface InvoiceLineItem {
            /**
             * The ID of the source of this line item, either an invoice item or a subscription
             */
            id: string;

            /**
             * Value is 'line_item'
             */
            object: string;

            /**
             * Whether or not this is a test line item
             */
            livemode: boolean;

            /**
             * The amount, in cents
             */
            amount: number;
            currency: string;
            
            /**
             * If true, discounts will apply to this line item. Always false for prorations.
             */
            discountable: boolean;

            /**
             * The period this line_item covers
             */
            period: {
                /**
                 * The period start date
                 */
                start: number;
                /**
                 * The period end date
                 */
                end: number;
            };

            /**
             * Whether or not this is a proration
             */
            proration: boolean;

            /**
             * A string identifying the type of the source of this line item, either an invoiceitem or a subscription
             */
            type: string;

            /**
             * A text description of the line item, if the line item is an invoice item
             */
            description: string;

            /**
             * Key-value pairs attached to the line item, if the line item is an invoice item
             */
            metadata: IMetadata;

            /**
             * The plan of the subscription, if the line item is a subscription or a proration
             */
            plan: plans.IPlan;

            /**
             * The quantity of the subscription, if the line item is a subscription or a proration
             */
            quantity: number;

            /**
             * When type is invoiceitem, the subscription that the invoice item pertains to, if any. Left blank when 
             * type is already subscription, as it’d be redundant with id.
             */
            subscription: string;
        }
    }
    module plans {
        /**
         * A subscription plan contains the pricing information for different products and feature levels on your site. 
         * For example, you might have a $10/month plan for basic features and a different $20/month plan for premium features.
         */
        interface IPlan {
            id: string;

            /**
             * Value is 'plan'
             */
            object: string;
            livemode: boolean;

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
             * One of day, week, month or year. The frequency with which a subscription should be billed.
             */
            interval: string;

            /**
             * The number of intervals (specified in the interval property) between each subscription billing. For example, 
             * interval=month and interval_count=3 bills every 3 months.
             */
            interval_count: number;

            /**
             * Display name of the plan
             */
            name: string;

            /**
             * A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information 
             * about the plan in a structured format.
             */
            metadata: IMetadata;

            /**
             * Number of trial period days granted when subscribing a customer to this plan. Null if the plan has no trial period.
             */
            trial_period_days: number;

            /**
             * Extra information about a charge for the customer’s credit card statement.
             */
            statement_descriptor: string;
        }
    }
    module recipientCards { }
    module recipients { }
    module tokens { }
    module transfers {
        interface ITransfer {
            id: string;
            object: string;
            livemode: boolean;

            /**
             * Amount (in cents) to be transferred to your bank account
             */
            amount: number;

            /**
             * Time that this record of the transfer was first created.
             */
            created: number;

            /**
             * Three-letter ISO currency code representing the currency.
             */
            currency: string;

            /**
             * Date the transfer is scheduled to arrive in the bank. This doesn’t factor in delays like weekends or bank holidays.
             */
            date: number;

            /**
             * A list of reversals that have been applied to the transfer.
             */
            reversals: IList<IReversal>;

            /**
             * Whether or not the transfer has been fully reversed. If the transfer is only partially reversed, this attribute 
             * will still be false.
             */
            reversed: boolean;

            /**
             * Current status of the transfer (paid, pending, canceled or failed). A transfer will be pending until it is submitted, at which 
             * point it becomes paid. If it does not go through successfully, its status will change to failed or canceled.
             */
            status: string;

            /**
             * The type of this type of this transfer. Can be card or bank_account.
             */
            type: string;

            /**
             * Amount in cents reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
             */
            amount_reversed: number;

            /**
             * Balance transaction that describes the impact of this transfer on your account balance.
             */
            balance_transaction: string;

            /**
             * Internal-only description of the transfer
             */
            description: string;

            /**
             * Error code explaining reason for transfer failure if available. See Types of transfer failures for a 
             * list of failure codes: https://stripe.com/docs/api#transfer_failures
             */
            failure_code: string;

            /**
             * Message to user further explaining reason for transfer failure if available.
             */
            failure_message: string;
            metadata: IMetadata;
            application_fee: string;

            /**
             * Hash describing the bank account this transfer was sent to
             */
            bank_account: IBankAccount;

            /**
             * Hash describing the debit card this transfer was sent to
             */
            card: ICard;

            /**
             * ID of the recipient this transfer is for if one exists. Transfers to your bank account do not have a recipient.
             */
            recipient: string;
            source_transaction: string;

            /**
             * Extra information about a transfer to be displayed on the user’s bank statement.
             */
            statement_descriptor: string;
        }
    }
    module applicationFees { }
    module fileUploads { }
    module bitcoinReceivers {
        /**
         * A Bitcoin receiver wraps a Bitcoin address so that a customer can push a payment to you. This guide describes how to use 
         * receivers to create Bitcoin payments.
         */
        interface IBitcoinReceiver {
            id: string;

            /**
             * Value is 'bitcoin_receiver'
             */
            object: string;
            livemode: boolean;

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

            /**
             * This flag is initially false and updates to true when the customer sends the bitcoin_amount to this receiver.
             */
            filled: boolean;

            /**
             * A bitcoin address that is specific to this receiver. The customer can send bitcoin to this address to fill the receiver.
             */
            inbound_address: string;

            /**
             * A list with one entry for each time that the customer sent bitcoin to the receiver. Hidden when viewing the 
             * receiver with a publishable key.
             */
            transactions: IList<IBitcoinTransaction>;

            /**
             * This receiver contains uncaptured funds that can be used for a payment or refunded.
             */
            uncaptured_funds: boolean;
            description: string;

            /**
             * The customer’s email address, set by the API call that creates the receiver.
             */
            email: string;

            /**
             * A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information 
             * about the customer in a structured format.
             */
            metadata: IMetadata;

            /**
             * The ID of the payment created from the receiver, if any. Hidden when viewing the receiver with a publishable key.
             */
            payment: string;

            /**
             * The refund address for these bitcoin, if communicated by the customer.
             */
            refund_address: string;
            customer: string;
        }

        interface IBitcoinTransaction {
            id: string;

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
    }
    module customerCards { }

    module customerSubscriptions {
        /**
         * Subscriptions allow you to charge a customer's card on a recurring basis. A subscription ties a customer to 
         * a particular plan you've created: https://stripe.com/docs/api#create_plan
         */
        interface ISubscription {
            id: string;

            /**
             * Value is 'subscription'
             */
            object: string;

            /**
             * If the subscription has been canceled with the at_period_end flag set to true, cancel_at_period_end on the 
             * subscription will be true. You can use this attribute to determine whether a subscription that has a status 
             * of active is scheduled to be canceled at the end of the current period.
             */
            cancel_at_period_end: boolean;
            customer: string;

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
             * Possible values are trialing, active, past_due, canceled, or unpaid. A subscription still in its trial period is trialing 
             * and moves to active when the trial period is over. When payment to renew the subscription fails, the subscription becomes 
             * past_due. After Stripe has exhausted all payment retry attempts, the subscription ends up with a status of either canceled 
             * or unpaid depending on your retry settings. Note that when a subscription has a status of unpaid, no subsequent invoices 
             * will be attempted (invoices will be created, but then immediately automatically closed. Additionally, updating customer 
             * card details will not lead to Stripe retrying the latest invoice.). After receiving updated card details from a customer, 
             * you may choose to reopen and pay their closed invoices.
             */
            status: string;

            /**
             * A positive decimal that represents the fee percentage of the subscription invoice amount that will be transferred to 
             * the application owner’s Stripe account each billing period.
             */
            application_fee_percent: number;

            /**
             * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with 
             * cancel_at_period_end, canceled_at will still reflect the date of the initial cancellation request, not the end of the 
             * subscription period when the subscription is automatically moved to a canceled state.
             */
            canceled_at: number;

            /**
             * End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
             */
            current_period_end: number;

            /**
             * Start of the current period that the subscription has been invoiced for
             */
            current_period_start: number;

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

            /**
             * A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional 
             * information about the subscription in a structured format.
             */
            metadata: IMetadata;

            /**
             * If the subscription has a trial, the end of that trial.
             */
            trial_end: number;

            /**
             * If the subscription has a trial, the beginning of that trial.
             */
            trial_start: number;

            /**
             * If provided, each invoice created by this subscription will apply the tax rate, increasing the amount billed to the customer.
             */
            tax_percent: number;
        }
    }

    module chargeRefunds {
        interface IRefund {
            id: string;

            /**
             * Value is 'list'
             */
            object: string;

            /**
             * Amount reversed in cents.
             */
            amount: number;

            created: number;

            /**
             * Three-letter ISO currency code representing the currency in which the charge was made.
             */
            currency: string;

            /**
             * Balance transaction that describes the impact of this reversal on your account balance.
             */
            balance_transaction: string;

            /**
             * ID of the charge that was refunded.
             */
            charge: string;

            metadata: IMetadata;

            /**
             * Reason for the refund. If set, possible values are duplicate, fraudulent, and requested_by_customer.
             */
            reason: string;

            /**
             * This is the transaction number that appears on email receipts sent for this refund.
             */
            receipt_number: string;

            description: string;
        }
    }

    module applicationFeeRefunds { }
    module transferReversals { }

    class StripeResource {
        constructor(stripe: Stripe, urlData: any);
    }

    module resources {
        class Account extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
        }

        class ApplicationFeeRefunds extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
        }

        class ApplicationFees extends StripeResource {
            list(): void;
            retrieve(id: string): void;
        }

        class Balance extends StripeResource {
            retrieve(id: string): void;
        }

        class BitcoinReceivers extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
        }

        class ChargeRefunds extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
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
            create(options: {
                /**
                 * A positive integer in the smallest currency unit (e.g 100 cents to charge $1.00, or 1 to charge ¥1, a 0-decimal currency) 
                 * representing how much to charge the card. The minimum amount is $0.50 (or equivalent in charge currency).
                 */
                amount: number;
            
                /**
                 * 3-letter ISO code for currency.
                 */
                currency: string;

                /**
                 * The ID of an existing customer that will be charged in this request.
                 */
                customer?: string;

                /**
                 * A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of 
                 * a source belonging to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either 
                 * be a token, like the ones returned by Stripe.js, or a object containing a user's credit card details, with the options 
                 * described below. Although not all information is required, the extra info helps prevent fraud.
                 */
                source?: string | IPaymentToken | ICard;

                /**
                 * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the 
                 * charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include 
                 * the description of the charge(s) that they are describing.
                 */
                description?: string;
                metadata?: IMetadata;

                /**
                 * Whether or not to immediately capture the charge. When false, the charge issues an authorization (or pre-authorization), 
                 * and will need to be captured later. Uncaptured charges expire in 7 days. For more information, see authorizing charges 
                 * and settling later: https://support.stripe.com/questions/can-i-authorize-a-charge-and-then-wait-to-settle-it-later
                 */
                capture?: boolean;

                /**
                 * An arbitrary string to be displayed on your customer's credit card statement. This may be up to 22 characters. 
                 * As an example, if your website is RunClub and the item you're charging for is a race ticket, you may want to 
                 * specify a statement_descriptor of RunClub 5K race ticket. The statement description may not include <>"' characters, 
                 * and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped. 
                 * While most banks display this information consistently, some may display it incorrectly or not at all.
                 */
                statement_descriptor?: string;

                /**
                 * The email address to send this charge's receipt to. The receipt will not be sent until the charge is paid. 
                 * If this charge is for a customer, the email address specified here will override the customer's email address. 
                 * Receipts will not be sent for test mode charges. If receipt_email is specified for a charge in live mode, a receipt 
                 * will be sent regardless of your email settings.
                 */
                receipt_email?: string;

                /**
                 * A fee in cents that will be applied to the charge and transferred to the application owner's Stripe account. 
                 * The request must be made with an OAuth key in order to take an application fee. For more information, 
                 * see the application fees documentation: https://stripe.com/docs/connect/collecting-fees
                 */
                application_fee?: string;

                /**
                 * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
                 */
                shipping?: IShippingInformation;
            }, response: IResponseFn<charges.ICharge>): void;

            /**
             * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned 
             * from your previous request, and Stripe will return the corresponding charge information. The same information is 
             * returned when creating or refunding the charge.
             * 
             * @param id The identifier of the charge to be retrieved
             * @param response A callback that takes in a potential error and a charge object.
             */
            retrieve(id: string, response: IResponseFn<charges.ICharge>): void;

            /**
             * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             * This request accepts only the description, metadata, receipt_emailand fraud_details as arguments.
             * 
             * @param id The identifier of the charge to be updated
             * @param update An object containing the updated properties.
             */
            update(id: string, update: {
                /**
                 * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. 
                 * Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description 
                 * of the charge(s) that they are describing. This can be unset by updating the value to null and then saving.
                 */
                description?: string;

                /**
                 * You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata to null, then save.
                 */
                metadata?: IMetadata;

                /**
                 * This is the email address that the receipt for this charge will be sent to. 
                 * If this field is updated, then a new email receipt will be sent to the updated address.
                 */
                receipt_email?: string;

                /**
                 * A set of key/value pairs you can attach to a charge giving information about its riskiness.
                 */
                fraud_details?: {
                    /**
                     * If you believe a charge is fraudulent, include a user_report key with a value of fraudulent. If you believe a 
                     * charge is safe, include a user_report key with a value of safe. Note that you must refund a charge before setting 
                     * the user_report to fraudulent. Stripe will use the information you send to improve our fraud detection algorithm
                     */
                    user_report?: string;
                }
            }, response: IResponseFn<charges.ICharge>): void;

            /**
             * Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first 
             * you created a charge with the capture option set to false. Uncaptured payments expire exactly seven days after they are 
             * created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.
             */
            capture(id: string, response: IResponseFn<charges.ICharge>): void;

            /**
             * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges 
             * appearing first.
             * 
             * @returns An object with a data property that contains an array of up to limit charges, starting after charge starting_after. 
             * Each entry in the array is a separate charge object. If no more charges are available, the resulting array will be empty. 
             * If you provide a non-existent customer ID, this call throws an error. You can optionally request that the response include 
             * the total count of all charges that match your filters. To do so, specify include[]=total_count in your request.
             * 
             * @param options Filtering options for the returned items.
             */
            list(options: IListOptions, response: IResponseFn<IList<charges.ICharge>>): void;

            /**
             * When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence in 
             * order to help us resolve the dispute in your favor. You can do this in your dashboard, but if you prefer, you can use the API to 
             * submit evidence programmatically. Depending on your dispute type, different evidence fields will give you a better chance of winning 
             * your dispute. You may want to consult our guide to dispute types to help you figure out which evidence fields to provide: 
             * https://stripe.com/help/dispute-types
             * 
             * @param chargeId The ID for the disputed charge
             * @param options The fields to update
             */
            updateDispute(chargeId: string, options: {
                /**
                 * Evidence to upload to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.
                 */
                evidence?: IDisputeEvidence;
                /**
                 * A set of key/value pairs that you can attach to a dispute object. It can be useful for storing additional information about the 
                 * dispute in a structured format. This can be unset by updating the value to null and then saving.
                 */
                metadata?: IMetadata;
            }, response: IResponseFn<IDispute>): void;


            /**
             * Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially 'dismissing' the dispute, 
             * acknowledging it as lost. The status of the dispute will change from under_review to lost.
             * 
             * IMPORTANT: Closing a dispute is irreversible.
             * 
             * @param chargeId The ID of the disputed charge
             */
            closeDispute(chargeId: string): void;

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
             * @param options Options for specifying reasons and refund amount
             * @param response The refund.
             */
            createRefund(id: string, options: {
                /**
                 * A positive integer in cents representing how much of this charge to refund. Can only refund up to the unrefunded amount remaining 
                 * of the charge.
                 */
                amount?: number;

                /**
                 * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the 
                 * full application fee will be refunded. Else, the application fee will be refunded with an amount proportional to the amount of the 
                 * charge refunded. An application fee can only be refunded by the application that created the charge.
                 */
                refund_applcation_fee?: boolean;

                /**
                 * String indicating the reason for the refund. If set, possible values are duplicate, fraudulent, and requested_by_customer. Specifying 
                 * fraudulent as the reason when you believe the charge to be fraudulent will help us improve our fraud detection algorithms.
                 */
                reason?: string;

                /**
                 * A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund 
                 * in a structured format. You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata 
                 * to null, then save.
                 */
                metadata?: IMetadata;
            }, response: IResponseFn<chargeRefunds.IRefund>): void;

            /**
             * By default, you can see the 10 most recent refunds stored directly on the charge object, but you can also retrieve details about a specific 
             * refund stored on the charge.
             * 
             * @param chargeId The ID of the charge refunded
             * @param refundId The ID of the refund to retrieve
             */
            retrieveRefund(chargeId: string, refundId: string, response: IResponseFn<chargeRefunds.IRefund>): void;

            /**
             * Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
             * This request only accepts metadata as an argument.
             * 
             * @param chargeId The ID of the charge refunded
             * @param refundId The ID of the refund to update
             */
            updateRefund(chargeId: string, refundId: string, options: {
                /**
                 * A set of key/value pairs that you can attach to a refund object. It can be useful for storing additional information about the refund 
                 * in a structured format. You can unset an individual key by setting its value to null and then saving. To clear all keys, set metadata 
                 * to null, then save.
                 */
                metadata: IMetadata;
            }, response: IResponseFn<chargeRefunds.IRefund>): void;

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
             * @param options Used to filter the refunds returned
             */
            listRefunds(chargeId: string, options: IListOptions, response: IResponseFn<IList<chargeRefunds.IRefund>>): void;
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
             * @param options Options for creating the coupon.
             */
            create(options: {
                /**
                 * Unique string of your choice that will be used to identify this coupon when applying it a customer. This is often a specific code 
                 * you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you can leave 
                 * the ID blank and we’ll generate a random code for you.
                 */
                id?: string;

                /**
                 * Specifies how long the discount will be in effect. Can be forever, once, or repeating.
                 */
                duration: string;

                /**
                 * A positive integer representing the amount to subtract from an invoice total (required if percent_off is not passed)
                 */
                amount_off?: number;

                /**
                 * Currency of the amount_off parameter (required if amount_off is passed)
                 */
                currency?: string;

                /**
                 * required only if duration is repeating If duration is repeating, a positive integer that specifies the number of months the 
                 * discount will be in effect
                 */
                duration_in_months?: number;

                /**
                 * A positive integer specifying the number of times the coupon can be redeemed before it’s no longer valid. For example, you might 
                 * have a 50% off coupon that the first 20 readers of your blog can use.
                 */
                max_redemptions?: number;

                /**
                 * A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the 
                 * coupon in a structured format. This can be unset by updating the value to null and then saving.
                 */
                metadata?: IMetadata;

                /**
                 * A positive integer between 1 and 100 that represents the discount the coupon will apply (required if amount_off is not passed)
                 */
                percent_off?: number;

                /**
                 * Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer 
                 * be applied to new customers.
                 */
                redeem_by?: number;
            }, response: IResponseFn<coupons.ICoupon>): void;

            /**
             * Retrieves the coupon with the given ID.
             * 
             * @returns Returns a coupon if a valid coupon ID was provided. Throws an error otherwise.
             * 
             * @param id The ID of the desired coupon
             */
            retrieve(id: string, response: IResponseFn<coupons.ICoupon>): void;

            /**
             * Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.
             * 
             * @returns The newly updated coupon object if the call succeeded. Otherwise, this call throws an error, such as if the coupon has 
             * been deleted.
             * 
             * @param id The ID of the coupon to be updated
             * @param options Metadata to update
             */
            update(id: string, options: {
                /**
                 * A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the 
                 * coupon in a structured format.
                 */
                metadata?: IMetadata;
            }, response: IResponseFn<coupons.ICoupon>): void;

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
            del(id: string, response: IResponseFn<IDeleteConfirmation>): void;

            /**
             * Returns a list of your coupons.
             * 
             * @returns A object with a data property that contains an array of up to limit coupons, starting after coupon starting_after. Each 
             * entry in the array is a separate coupon object. If no more coupons are available, the resulting array will be empty. This request 
             * should never throw an error. You can optionally request that the response include the total count of all coupons. To do so, specify 
             * include[]=total_count in your request.
             * 
             * @param options Filtering options for the list.
             */
            list(options: IListOptions, response: IResponseFn<coupons.ICoupon>): void;
        }

        class CustomerCards extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
            del(id: string): void;
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
             * @param options The options for the new customer
             */
            create(options: {
                /**
                 * An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that 
                 * will be used before attempting any charges to the customer’s card; a positive amount will be added to the next invoice.
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
                 * Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. 
                 * This can be unset by updating the value to null and then saving.
                 */
                email?: string;

                /**
                 * A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the 
                 * customer in a structured format. This can be unset by updating the value to null and then saving.
                 */
                metadata?: IMetadata;

                /**
                 * The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions 
                 * that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a 
                 * valid card as well.
                 */
                plan?: string;

                /**
                 * The quantity you’d like to apply to the subscription you’re creating (if you pass in a plan). For example, if your plan is 
                 * 10 cents/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged 50 cents 
                 * (5 x 10 cents) monthly. Defaults to 1 if not set. Only applies when the plan parameter is also provided.
                 */
                quantity?: number;
                source?: string | ICard;

                /**
                 * Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will 
                 * override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to 
                 * end the customer’s trial immediately. Only applies when the plan parameter is also provided.
                 */
                trial_end?: number;
            }, response: IResponseFn<customers.ICustomer>): void;

            /**
             * Returns a list of your customers. The customers are returned sorted by creation date, with the most recently created customers 
             * appearing first.
             * 
             * @returns A object with a data property that contains an array of up to limit customers, starting after customer starting_after. 
             * Each entry in the array is a separate customer object. If no more customers are available, the resulting array will be empty. 
             * This request should never throw an error. You can optionally request that the response include the total count of all customers 
             * that match your filters. To do so, specify include[]=total_count in your request.
             * 
             * @param options Allows you to filter the customers you want.
             */
            list(options: IListOptions, response: IResponseFn<IList<customers.ICustomer>>): void;

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
             */
            update(id: string, options: {
                /**
                 * An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that 
                 * will be used before attempting any charges to the customer’s card; a positive amount will be added to the next invoice.
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
                 * Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. 
                 * This can be unset by updating the value to null and then saving.
                 */
                email?: string;

                /**
                 * A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the 
                 * customer in a structured format. This can be unset by updating the value to null and then saving.
                 */
                metadata?: IMetadata;

                /**
                 * The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions 
                 * that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a 
                 * valid card as well.
                 */
                plan?: string;

                /**
                 * The quantity you’d like to apply to the subscription you’re creating (if you pass in a plan). For example, if your plan is 
                 * 10 cents/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged 50 cents 
                 * (5 x 10 cents) monthly. Defaults to 1 if not set. Only applies when the plan parameter is also provided.
                 */
                quantity?: number;
                source?: ICard;

                /**
                 * Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will 
                 * override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to 
                 * end the customer’s trial immediately. Only applies when the plan parameter is also provided.
                 */
                trial_end?: number;
            }, response: IResponseFn<customers.ICustomer>): void;

            /**
             * Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer 
             * creation.
             * 
             * @returns Returns a customer object if a valid identifier was provided. When requesting the ID of a customer that has been deleted, 
             * a subset of the customer's information will be returned, including a "deleted" property, which will be true.
             * 
             * @param id The identifier of the customer to be retrieved.
             */
            retrieve(id: string, response: IResponseFn<customers.ICustomer>): void;

            /**
             * Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.
             * 
             * @returns Returns an object with a deleted parameter on success. If the customer ID does not exist, this call throws an error. Unlike 
             * other objects, deleted customers can still be retrieved through the API, in order to be able to track the history of customers while 
             * still removing their credit card details and preventing any further operations to be performed (such as adding a new subscription).
             * 
             * @param id The identifier of the customer to be deleted.
             */
            del(id: string, response: IResponseFn<IDeleteConfirmation>): void;

            /**
             * When you create a new credit card, you must specify a customer or recipient to create it on. If the card's owner has no default card, 
             * then the new card will become the default. However, if the owner already has a default then it will not change. To change the default, 
             * you should either update the customer to have a new default_source or update the recipient to have a new default_card.
             * 
             * @returns Returns the card object.
             * 
             * @param customerId The customer ID to which to add the card.
             */
            createCard(customerId: string, options: {
                /**
                 * The source can either be a token, like the ones returned by our Stripe.js, or a dictionary containing a user’s credit card details 
                 * (with the options shown below). Whenever you create a new card for a customer, Stripe will automatically validate the card.
                 */
                source?: string | ICard;
                card?: string | IPaymentToken;
            }, response: IResponseFn<ICard>): void;

            /**
             * By default, you can see the 10 most recent cards stored on a customer or recipient directly on the customer or recipient object, but 
             * you can also retrieve details about a specific card stored on the customer or recipient.
             * 
             * @returns Returns the card object.
             * 
             * @param customerId The ID of the customer whose card needs to be retrieved.
             * @param cardId The ID of the card to be retrieved.
             */
            retrieveCard(customerId: string, cardId: string, response: IResponseFn<ICard>): void;

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
            updateCard(customerId: string, cardId: string, options: {
                /**
                 * The card number
                 */
                'number'?: number;
                exp_month?: number;
                exp_year?: number;
                address_city?: string;

                /**
                 * Billing address country, if provided when creating card
                 */
                address_country?: string;
                address_line1?: string;
                address_line2?: string;
                address_state?: string;
                address_zip?: string;

                /**
                 * Two-letter ISO code representing the country of the card. You could use this 
                 * attribute to get a sense of the international breakdown of cards you’ve collected.
                 */
                country?: string;

                /**
                 * Cardholder name
                 */
                name?: string;
            }, response: IResponseFn<ICard>): void;

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
            deleteCard(customerId: string, cardId: string, response: IResponseFn<IDeleteConfirmation>): void;

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
             * @param options Filtering options 
             */
            listCards(customerId: string, options: IListOptions, response: IResponseFn<IList<ICard>>): void;

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
            createSubscription(customerId: string, options: {
                /**
                 * The identifier of the plan to subscribe the customer to.
                 */
                plan: string;

                /**
                 * The code of the coupon to apply to this subscription. A coupon applied to a subscription will only 
                 * affect invoices created for that particular subscription.
                 */
                coupon?: string;

                /**
                 * Unix timestamp representing the end of the trial period the customer will get before being charged 
                 * for the first time. If set, trial_end will override the default trial period of the plan the customer 
                 * is being subscribed to. The special value now can be provided to end the customer's trial immediately.
                 */
                trial_end?: number;

                /**
                 * The source can either be a token, like the ones returned by our Stripe.js, or a object containing a 
                 * user's credit card details (with the options shown below). You must provide a source if the customer 
                 * does not already have a valid source attached, and you are subscribing the customer for a plan that 
                 * is not free. Passing source will create a new source object, make it the customer default source, and 
                 * delete the old customer default if one exists. If you want to add an additional source to use with 
                 * subscriptions, instead use the card creation API to add the card and then the customer update API to 
                 * set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate 
                 * the card.
                 */
                source?: IPaymentToken | ICard;

                /**
                 * The quantity you'd like to apply to the subscription you're creating. For example, if your plan is 
                 * $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer 
                 * charged $50 (5 x $10) monthly. If you update a subscription but don't change the plan ID (e.g. 
                 * changing only the trial_end), the subscription will inherit the old subscription's quantity attribute 
                 * unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new 
                 * subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity 
                 * parameter.
                 */
                quantity?: number;

                /**
                 * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage 
                 * of the subscription invoice subtotal that will be transferred to the application owner’s Stripe account. 
                 * The request must be made with an OAuth key in order to set an application fee percentage. For more 
                 * information, see the application fees documentation: https://stripe.com/docs/connect/collecting-fees#subscriptions
                 */
                application_fee_percent?: number;

                /**
                 * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage 
                 * of the subscription invoice subtotal that will be calculated and added as tax to the final amount each 
                 * billing period. For example, a plan which charges $10/month with a tax_percent of 20.0 will charge 
                 * $12 per invoice.
                 */
                tax_percent?: number;

                /**
                 * A set of key/value pairs that you can attach to a subscription object. It can be useful for 
                 * storing additional information about the subscription in a structured format.
                 */
                metadata?: IMetadata;
            }, response: IResponseFn<customerSubscriptions.ISubscription>): void;

            /**
             * By default, you can see the 10 most recent active subscriptions stored on a customer directly on the customer 
             * object, but you can also retrieve details about a specific active subscription for a customer.
             * 
             * @returns Returns the subscription object.
             * 
             * @param customerId The customer ID for the subscription
             * @param subscriptionId The ID of the subscription to retrieve
             */
            retrieveSubscription(customerId: string, subscriptionId: string, response: IResponseFn<customerSubscriptions.ISubscription>): void;

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
             * @param options The fields to update
             */
            updateSubscription(customerId: string, subscriptionId: string, options: {
                /**
                 * The identifier of the plan to update the subscription to. If omitted, the subscription will not change plans.
                 */
                plan?: string;

                /**
                 * The code of the coupon to apply to the customer if you would like to apply it at the same time as updating the subscription.
                 */
                coupon?: string;

                /**
                 * Flag telling us whether to prorate switching plans during a billing cycle.
                 */
                prorate?: boolean;

                /**
                 * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, 
                 * trial_end will override the default trial period of the plan the customer is being subscribed to. The special value now can be 
                 * provided to end the customer's trial immediately.
                 */
                trial_end?: number;

                /**
                 * The source can either be a token, like the ones returned by our Stripe.js, or a object containing a user's credit card details 
                 * (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and 
                 * you are subscribing the customer for a plan that is not free. Passing source will create a new source object, make it the 
                 * customer default source, and delete the old customer default if one exists. If you want to add an additional source to use 
                 * with subscriptions, instead use the card creation API to add the card and then the customer update API to set it as the default. 
                 * Whenever you attach a card to a customer, Stripe will automatically validate the card.
                 */
                source?: IPaymentToken | ICard;

                /**
                 * The quantity you'd like to apply to the subscription you're updating. For example, if your plan is $10/user/month, and your 
                 * customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly. If you update a 
                 * subscription but don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's 
                 * quantity attribute unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new 
                 * subscription will not inherit the quantity attribute and will default to 1 unless you pass a quantity parameter.
                 */
                quantity?: number;

                /**
                 * A positive decimal (with at most two decimal places) between 1 and 100 that represents the percentage of the subscription 
                 * invoice amount due each billing period (including any bundled invoice items) that will be transferred to the application 
                 * owner’s Stripe account. The request must be made with an OAuth key in order to set an application fee percentage . For more 
                 * information, see the application fees documentation: https://stripe.com/docs/connect/collecting-fees#subscriptions
                 */
                application_fee_percent?: number;

                /**
                 * Update the amount of tax applied to this subscription. Changing the tax_percent of a subscription will only affect future 
                 * invoices.
                 */
                tax_percent?: number;

                /**
                 * A set of key/value pairs that you can attach to a subscription object. It can be useful for storing additional information 
                 * about the subscription in a structured format.
                 */
                metadata?: IMetadata;
            }, response: IResponseFn<customerSubscriptions.ISubscription>): void;

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
             * @param options Specify when to cancel the subscription
             */
            cancelSubscription(customerId: string, subscriptionId: string, options: {
                /**
                 * A flag that if set to true will delay the cancellation of the subscription until the end of the current period.
                 */
                at_period_end?: boolean;
            }, response: IResponseFn<customerSubscriptions.ISubscription>): void;

            /**
             * You can see a list of the customer's active subscriptions. Note that the 10 most recent active subscriptions are always available 
             * by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page 
             * through additional subscriptions.
             * 
             * @returns Returns a list of the customer's active subscriptions. You can optionally request that the response include the total 
             * count of all subscriptions for the customer. To do so, specify include[]=total_count in your request.
             * 
             * @param customerId The ID of the customer whose subscriptions will be retrieved
             * @param options Filtering options
             */
            listSubscriptions(customerId: string, options: IListOptions, response: IResponseFn<IList<customerSubscriptions.ISubscription>>): void;

            /**
             * Removes the currently applied discount on a customer.
             * 
             * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no 
             * discount exists on this customer.
             * 
             * @param customerId The ID of the customer.
             */
            deleteDiscount(customerId: string, response: IResponseFn<IDeleteConfirmation>): void;

            /**
             * Removes the currently applied discount on a subscription.
             * 
             * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no 
             * discount exists on this subscription.
             * 
             * @param customerId The ID of the customer.
             * @param subscriptionId The ID of the subscription.
             */
            deleteSubscriptionDiscount(customerId: string, subscriptionId: string, response: IResponseFn<IDeleteConfirmation>): void;
        }

        class CustomerSubscriptions extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
            del(id: string): void;
        }

        class Events extends StripeResource {
            list(): void;
            retrieve(id: string): void;
        }

        class FileUploads extends StripeResource {
            list(): void;
            retrieve(id: string): void;
        }

        class InvoiceItems extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
            del(id: string): void;
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
             * @param options Options used to create the invoice.
             */
            create(options: {
                customer: string;

                /**
                 * A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. 
                 * The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. 
                 * For more information, see the application fees documentation.
                 */
                application_fee?: number;
                description?: string;
                metadata?: IMetadata;

                /**
                 * Extra information about a charge for the customer’s credit card statement.
                 */
                statement_descriptor?: string;

                /**
                 * The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items 
                 * for the customer. If set, the created invoice will exclude pending invoice items that pertain to other 
                 * subscriptions.
                 */
                subscription?: string;

                /**
                 * The percent tax rate applied to the invoice, represented as a decimal number. 
                 */
                tax_percent?: number;
            }, response: IResponseFn<invoices.IInvoice>): void;

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
            retrieve(id: string, response: IResponseFn<invoices.IInvoice>): void;

            /**
             * When retrieving an invoice, you'll get a lines property containing the total count of line items and the first 
             * handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
             * 
             * @returns Returns a list of line_item objects.
             * 
             * @param id The id of the invoice containing the lines to be retrieved
             * @param options Filtering options
             */
            retrieveLines(id: string, options: {
                /**
                 * In the case of upcoming invoices, the customer of the upcoming invoice is required. In other cases it is ignored.
                 */
                customer?: string;
                
                /**
                 * A cursor for use in pagination. ending_before is an object ID that defines your place in the list. 
                 * For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent 
                 * call can include ending_before=obj_bar in order to fetch the previous page of the list.
                 */
                ending_before?: string;

                /**
                 * A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
                 */
                limit?: number;

                /**
                 * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, 
                 * if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include 
                 * starting_after=obj_foo in order to fetch the next page of the list.
                 */
                starting_after?: string;

                /**
                 * In the case of upcoming invoices, the subscription of the upcoming invoice is optional. In other cases it is ignored.
                 */
                subscription?: string;
            }, response: IResponseFn<IList<invoiceItems.InvoiceLineItem>>): void;

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
            retrieveUpcoming(id: string, options: {
                /**
                 * The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, you will 
                 * retrieve the next upcoming invoice from among the customer's subscriptions.
                 */
                subscription?: string;
            }, response: IResponseFn<invoices.IInvoice>): void;

            /**
             * Until an invoice is paid, it is marked as open (closed=false). If you'd like to stop Stripe from automatically attempting 
             * payment on an invoice or would simply like to close the invoice out as no longer owed by the customer, you can update the 
             * closed parameter.
             * 
             * @returns Returns the invoice object.
             * 
             * @param id The ID of the invoice to update
             * @param options Fields to update
             */
            update(id: string, options: {
                /**
                 * A fee in cents that will be applied to the invoice and transferred to the application owner’s Stripe account. The request 
                 * must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, 
                 * see the application fees documentation: https://stripe.com/docs/connect/collecting-fees#subscriptions
                 */
                application_fee?: number;

                /**
                 * Boolean representing whether an invoice is closed or not. To close an invoice, pass true.
                 */
                closed?: boolean;
                description?: string;

                /**
                 * Boolean representing whether an invoice is forgiven or not. To forgive an invoice, pass true. Forgiving an invoice instructs 
                 * us to update the subscription status as if the invoice were succcessfully paid. Once an invoice has been forgiven, it 
                 * cannot be unforgiven or reopened.
                 */
                forgiven?: string;
                metadata?: IMetadata;

                /**
                 * Extra information about a charge for the customer’s credit card statement.
                 */
                statement_descriptor?: string;

                /**
                 * The percent tax rate applied to the invoice, represented as a decimal number. The tax rate of a paid or forgiven invoice 
                 * cannot be changed.
                 */
                tax_percent?: number;
            }, response: IResponseFn<invoices.IInvoice>): void;

            /**
             * Stripe automatically creates and then attempts to pay invoices for customers on subscriptions. We'll also retry unpaid 
             * invoices according to your retry settings. However, if you'd like to attempt to collect payment on an invoice out of the 
             * normal retry schedule or for some other reason, you can do so.
             * 
             * @returns Returns the invoice object.
             * 
             * @param id The ID of the invoice to pay.
             */
            pay(id: string, response: IResponseFn<invoices.IInvoice>): void;
            
            /**
             * You can list all invoices, or list the invoices for a specific customer. The invoices are returned 
             * sorted by creation date, with the most recently created invoices appearing first.
             * 
             * @returns A object with a data property that contains an array of invoice objects. Throws an error if the 
             * customer ID is invalid.
             * 
             * @param options Filtering options
             */
            list(options: IListOptions, response: IResponseFn<IList<invoices.IInvoice>>): void;
        }

        class Plans extends StripeResource {
            /**
             * You can create plans easily via the plan management page of the Stripe dashboard. Plan creation is also 
             * accessible via the API if you need to create plans on the fly.
             * 
             * @returns The newly created plan
             * 
             * @param options Options for the new plan.
             */
            create(options: {
                /**
                 * Unique string of your choice that will be used to identify this plan when subscribing a customer. 
                 * This could be an identifier like "gold" or a primary key from your own database.
                 */
                id: string;

                /**
                 * A positive integer in cents (or 0 for a free plan) representing how much to charge (on a recurring basis).
                 */
                amount: number;

                /**
                 * 3-letter ISO code for currency.
                 */
                currency: string;

                /**
                 * Specifies billing frequency. Either day, week, month or year.
                 */
                interval: string;

                /**
                 * The number of intervals between each subscription billing. For example, interval=month and 
                 * interval_count=3 bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, 
                 * or 52 weeks).
                 */
                interval_count?: number;

                /**
                 * Name of the plan, to be displayed on invoices and in the web interface.
                 */
                name: string;

                /**
                 * Specifies a trial period in (an integer number of) days. If you include a trial period, the customer 
                 * won't be billed for the first time until the trial period ends. If the customer cancels before the 
                 * trial period is over, she'll never be billed at all.
                 */
                trial_period_days?: number;

                /**
                 * A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional 
                 * information about the plan in a structured format.
                 */
                metadata?: IMetadata;

                /**
                 * An arbitrary string to be displayed on your customer's credit card statement. This may be up to 22 characters. 
                 * As an example, if your website is RunClub and the item you're charging for is your Silver Plan, you may want 
                 * to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' 
                 * characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are 
                 * automatically stripped. While most banks display this information consistently, some may display it incorrectly 
                 * or not at all.
                 */
                statement_descriptor?: string;
            }, response: IResponseFn<plans.IPlan>): void;

            /**
             * Retrieves the plan with the given ID.
             * 
             * @returns Returns a plan if a valid plan ID was provided. Throws an error otherwise.
             * 
             * @param id The ID of the desired plan.
             */
            retrieve(id: string, response: IResponseFn<plans.IPlan>): void;

            /**
             * Updates the name of a plan. Other plan details (price, interval, etc.) are, by design, not editable.
             * 
             * @returns The updated plan object is returned upon success. Otherwise, this call throws an error.
             * 
             * @param id The plan ID to update
             * @param options The fields to update
             */
            update(id: string, options: {
                /**
                 * Name of the plan, to be displayed on invoices and in the web interface.
                 */
                name?: string;

                /**
                 * A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information 
                 * about the plan in a structured format. You can unset an individual key by setting its value to null and then saving. 
                 * To clear all keys, set metadata to null, then save.
                 */
                metadata?: IMetadata;

                /**
                 * An arbitrary string to be displayed on your customer's credit card statement. This may be up to 22 characters. 
                 * As an example, if your website is RunClub and the item you're charging for is your Silver Plan, you may want 
                 * to specify a statement_descriptor of RunClub Silver Plan. The statement description may not include <>"' 
                 * characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are 
                 * automatically stripped. While most banks display this information consistently, some may display it incorrectly 
                 * or not at all.
                 */
                statement_descriptor?: string;
            }, response: IResponseFn<plans.IPlan>): void;

            /**
             * You can delete plans via the plan management page of the Stripe dashboard. However, deleting a plan does not affect 
             * any current subscribers to the plan; it merely means that new subscribers can't be added to that plan. You can also 
             * delete plans via the API.
             * 
             * @returns An object with the deleted plan's ID and a deleted flag upon success. Otherwise, this call throws an error, such as if the plan has already been deleted.
             * 
             * @param id The identifier of the plan to be deleted.
             */
            del(id: string, response: IResponseFn<IDeleteConfirmation>): void;

            /**
             * Returns a list of your plans.
             * 
             * @returns An object with a data property that contains an array of up to limit plans, starting after plan starting_after. 
             * Each entry in the array is a separate plan object. If no more plans are available, the resulting array will be empty. This 
             * request should never throw an error. You can optionally request that the response include the total count of all plans. To 
             * do so, specify include[]=total_count in your request.
             */
            list(options: IListOptions, response: IResponseFn<IList<plans.IPlan>>): void;
        }

        class RecipientCards extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
            del(id: string): void;
        }

        class Recipients extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
            del(id: string): void;
        }

        class Tokens extends StripeResource {
            create(): void;
            retrieve(id: string): void;
        }

        class TransferReversals extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
        }

        class Transfers extends StripeResource {
            create(): void;
            list(): void;
            update(id: string): void;
            retrieve(id: string): void;
        }
    }

    interface IResponseFn<R> {
        (err: IStripeError, value: R): void;
    }

    interface IDeleteConfirmation { id: string; deleted: boolean; }

    /**
     * Options for filtering a list by created period.
     */
    interface IDateFilter {
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
     * A dispute occurs when a customer questions your charge with their bank or credit card company. 
     * When a customer disputes your charge, you're given the opportunity to respond to the dispute with 
     * evidence that shows the charge is legitimate. You can find more information about the dispute process 
     * in our disputes FAQ: https://stripe.com/help/disputes
     */
    interface IDispute {
        /**
         * Valud is 'dispute'
         */
        object: string;
        livemode: boolean;

        /**
         * Disputed amount. Usually the amount of the charge, but can differ (usually because of currency 
         * fluctuation or because only part of the order is disputed).
         */
        amount: number;

        /**
         * ID of the charge that was disputed
         */
        charge: string;

        /**
         * Date dispute was opened
         */
        created: number;

        /**
         * Three-letter ISO currency code representing the currency of the amount that was disputed.
         */
        currency: string;

        /**
         * Reason given by cardholder for dispute. Possible values are duplicate, fraudulent, subscription_canceled, 
         * product_unacceptable, product_not_received, unrecognized, credit_not_processed, general.
         * Read more about dispute reasons: https://stripe.com/help/disputes#reasons
         */
        reason: string;

        /**
         * Current status of dispute. Possible values are warning_needs_response, warning_under_review, warning_closed, 
         * needs_response, response_disabled, under_review, charge_refunded, won, lost.
         */
        status: string;

        /**
         * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your 
         * Stripe account as a result of this dispute.
         */
        balance_transactions: Array<balance.IBalanceTransaction>;

        /**
         * Evidence provided to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.
         */
        evidence: IDisputeEvidence;

        /**
         * Information about the evidence submission.
         */
        evidence_details?: {
            /**
             * Whether or not evidence has been saved for this dispute.
             */
            has_evidence: boolean;

            /**
             * The number of times the evidence has been submitted. You may submit evidence a maximum of 5 times
             */
            submission_count: number;

            /**
             * Date by which evidence must be submitted in order to successfully challenge dispute. Will be null 
             * if the customer’s bank or credit card company doesn’t allow a response for this particular dispute.
             */
            due_by: number;

            /**
             * Whether or not the last evidence submission was submitted past the due date. Defaults to false 
             * if no evidence submissions have occurred. If true, then delivery of the latest evidence is not guaranteed.
             */
            past_due: boolean;
        };

        /**
         * If true, it is still possible to refund the disputed payment. Once the payment has been fully 
         * refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute.
         */
        is_charge_refundable: boolean;
        metadata: IMetadata;
    }

    interface IBankAccount {
        id: string;
        object: string;

        /**
         * Two-letter ISO code representing the country the bank account is located in.
         */
        country: string;

        /**
         * Three-letter ISO currency code representing the currency paid out to the bank account.
         */
        currency: string;
        default_for_currency: boolean;
        last4: string;

        /**
         * Possible values are new, validated, verified, or errored. A bank account that hasn’t had any activity or validation performed 
         * is new. If Stripe can determine that the bank account exists, its status will be validated. Note that there often isn’t enough 
         * information to know (e.g. for smaller credit unions), and the validation is not always run. If the recipient or customer proves 
         * that they own the bank account (via microdeposit or login), the status will be verified. If a transfer sent to this bank account
         * fails, we’ll set the status to errored and will not continue to send transfers until the bank details are updated.
         */
        status: string;

        /**
         * Name of the bank associated with the routing number, e.g. WELLS FARGO.
         */
        bank_name: string;

        /**
         * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
         */
        fingerprint: string;

        /**
         * The routing transit number for the bank account.
         */
        routing_number: string;
    }

    interface IReversal {
        id: string;

        /**
         * Value is 'list'
         */
        object: string;

        /**
         * Amount reversed, in cents.
         */
        amount: number;
        created: number;

        /**
         * Three-letter ISO currency code representing the currency.
         */
        currency: string;

        /**
         * Balance transaction that describes the impact of this reversal on your account balance.
         */
        balance_transaction: string;
        metadata: IMetadata;

        /**
         * ID of the transfer that was reversed.
         */
        transfer: string;
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
         * (ID of a file upload) Your subscription cancellation policy, as shown to the customer.
         */
        cancellation_policy?: string;

        /**
         * An explanation of how and when the customer was shown your refund policy prior to purchase.
         */
        cancellation_policy_disclosure?: string;

        /**
         * A justification for why the customer’s subscription was not canceled.
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
         * (ID of a file upload) A relevant document or contract showing the customer’s signature.
         */
        customer_signature?: string;

        /**
         * (ID of a file upload) Documentation for the prior charge that can uniquely identify the charge, 
         * such as a receipt, shipping label, work order, etc. This document should be paired with a similar 
         * document from the disputed payment that proves the two payments are separate.
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
         * (ID of a file upload) Any receipt or message sent to the customer notifying them of the charge.
         */
        receipt?: string;

        /**
         * (ID of a file upload) Your refund policy, as shown to the customer.
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
         * show the full shipping address of the customer, if possible.
         */
        shipping_documentation?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers 
         * were generated for this purchase, please separate them with commas.
         */
        shipping_tracking_number?: string;

        /**
         * (ID of a file upload) Any additional evidence or statements.
         */
        uncategorized_file?: string;

        /**
         * Any additional evidence or statements.
         */
        uncategorized_text?: string;
    }

    /**
     * To safely retry an API request without accidentally performing the same operation twice, 
     * you can attach a unique key to any POST request made to the Stripe API via the Idempotency-Key: <key> header.
     * For example, if a request to create a charge fails due to a network connection error, you can make 
     * a second request with the same key to guarantee that only a single charge is created. 
     * The creation of the key is completely up to you — we suggest using random strings or UUIDs. 
     * We'll always send back the same response for requests made with the same key, even if you make the request 
     * with different request parameters. The keys expire after 24 hours.
     */
    interface IIdempotentOptions {
        idempotency_key: string;
    }

    /**
     * A set of key/value pairs that you can attach to a reversal. It can be useful for storing 
     * additional information about the reversal in a structured format.
     */
    interface IMetadata extends Object { }

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
            line2: string;

            /**
             * City/Suburb/Town/Village
             */
            city: string;

            /**
             * State/Province/County
             */
            state: string;

            /**
             * Zip/Postal Code
             */
            postal_code: string;

            /**
             * 2-letter country code
             */
            country: string;
        };
        
        /**
         * Recipient name.
         */
        name: string;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier: string;
        
        /**
         * Recipient phone (including extension).
         */
        phone: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple 
         * tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number: string;
    }


    interface IList<T> {
        /**
         * Value is 'list'
         */
        object: string;

        data: Array<T>;

        has_more: boolean;

        /**
         * The URL where this list can be accessed.
         */
        url: string;

        /**
         * The total number of items available. This value is not included by default, 
         * but you can request it by specifying ?include[]=total_count
         */
        total_count: number;
    }

    interface IPaymentToken {
        id: string;
        card: {
            name: string;
            address_line1: string;
            address_line2: string;
            address_city: string;
            address_state: string;
            address_zip: string;
            address_country: string;
            country: string;
            exp_month: number;
            exp_year: number;
            last4: string;
            object: string;
            brand: string;
            funding: string;
        };
        created: number;
        livemode: boolean;
        type: string;
        object: string;
        used: boolean;
    }

    /**
     * You can store multiple cards on a customer in order to charge the customer later. You 
     * can also store multiple debit cards on a recipient in order to transfer to those cards later.
     */
    interface ICard {
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
        'number': number;

        /**
         * Card brand. Can be Visa, American Express, MasterCard, Discover, JCB, Diners Club, or Unknown.
         */
        brand: string;
        exp_month: number;
        exp_year: number;

        /**
         * Card funding type. Can be credit, debit, prepaid, or unknown
         */
        funding: string;
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
        address_zip_check: string;

        /**
         * Two-letter ISO code representing the country of the card. You could use this 
         * attribute to get a sense of the international breakdown of cards you’ve collected.
         */
        country: string;

        /**
         * The customer that this card belongs to. This attribute will not be in the card object 
         * if the card belongs to a recipient instead.
         */
        customer: string;

        /**
         * If a CVC was provided, results of the check: pass, fail, unavailable, or unchecked
         */
        cvc_check: string;

        /**
         * (For Apple Pay integrations only.) The last four digits of the device account number.
         */
        dynamic_last4: string;

        /**
         * Cardholder name
         */
        name: string;

        /**
         * The recipient that this card belongs to. This attribute will not be in the card object if 
         * the card belongs to a customer instead.
         */
        recipient: string;

        /**
         * Uniquely identifies this particular card number. You can use this attribute to check 
         * whether two customers who’ve signed up with you are using the same card number, for example.
         */
        fingerprint: string;
    }

    interface IListOptions {
        /**
         * A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can 
         * be a dictionary.
         */
        created?: string | IDateFilter;

        /**
         * A filter on the list based on the object date field. The value can be a string with an integer Unix timestamp, 
         * or it can be a dictionary.
         */
        date?: string | IDateFilter;

        /**
         * Only return charges for the customer specified by this customer ID.
         */
        customer?: string;

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
