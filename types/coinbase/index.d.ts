// Type definitions for coinbase 2.0
// Project: https://github.com/coinbase/coinbase-node
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ClientConstructOpts {
    /**
     * API key (obtain this from the coinbase website)
     */
    apiKey?: string;
    /**
     * API key secret (obtain this from the coinbase website)
     */
    apiSecret?: string;
    /**
     * OAuth2 access token
     */
    accessToken?: string;
    /**
     * API version in 'yyyy-mm-dd' format, see https://developers.coinbase.com/api/v2#changelog
     */
    version?: string;
    /**
     * Override security certificates
     */
    caFile?: string[];
}

export interface CreateAccountOpts {
    /**
     * Account name
     */
    name?: string;
}

export interface GetExchangeRateOpts {
    /**
     * Base currency, default USD
     */
    currency?: string;
}

export interface GetBuyPriceOpts {
    /**
     * Currency pair, e.g. 'BTC-USD'
     */
    currencyPair: string;
}

export interface GetSellPriceOpts {
    /**
     * Currency pair, e.g. 'BTC-USD'
     */
    currencyPair: string;
}

export interface GetSpotPriceOpts {
    /**
     * Currency pair, e.g. 'BTC-USD'
     */
    currencyPair: string;
    /**
     * Specify date for historic spot price in format YYYY-MM-DD (UTC)
     */
    date?: string;
}

export interface UpdateAccountOpts {
    /**
     * Account name
     */
    name?: string;
}

export interface CreateAddressOpts {
    /**
     * Address label
     */
    name?: string;
}

export interface SendMoneyOpts {
    /**
     * Type send is required when sending money
     */
    type: "send";
    /**
     * A bitcoin address, litecoin address, ethereum address, or an email of the recipient
     */
    to: string;
    /**
     * Amount to be sent
     */
    amount: string;
    /**
     * Currency for the amount (see Client#getCurrencies() for available strings)
     */
    currency: string;
    /**
     * Notes to be included in the email that the recipient receives
     */
    description?: string;
    /**
     * Don’t send notification emails for small amounts (e.g. tips)
     */
    skip_notifications?: boolean;
    /**
     * Transaction fee in BTC/ETH/LTC if you would like to pay it. Fees can be added as a string, such as 0.0005
     */
    fee?: string;
    /**
     * *Recommended* A token to ensure idempotence. If a previous transaction with the same idem parameter already exists for this sender,
     * that previous transaction will be returned and a new one will not be created. Max length 100 characters
     */
    idem?: string;
    /**
     * Whether this send is to another financial institution or exchange. Required if this send is to an address and is valued at over USD$3000.
     */
    to_financial_institution?: boolean;
    /**
     * The website of the financial institution or exchange. Required if to_financial_institution is true.
     */
    financial_institution_website?: string;
}

export interface TransferMoneyOpts {
    /**
     * Type transfer is required when transferring bitcoin or ethereum between accounts
     */
    type: "transfer";
    /**
     * ID of the receiving account
     */
    to: string;
    /**
     * Amount to be transferred
     */
    amount: string;
    /**
     * Currency for the amount (see Client#getCurrencies() for available strings)
     */
    currency: string;
    /**
     * Notes to be included in the transfer
     */
    description?: string;
}

export interface RequestMoneyOpts {
    /**
     * Type request is required when sending money
     */
    type: "request";
    /**
     * An email of the recipient
     */
    to: string;
    /**
     * Amount to be transferred
     */
    amount: string;
    /**
     * Currency for the amount (see Client#getCurrencies() for available strings)
     */
    currency: string;
    /**
     * Notes to be included in the email that the recipient receives
     */
    description?: string;
}

export interface UpdateUserOpts {
    /**
     * User’s name
     */
    name?: string;
    /**
     * Time zone
     */
    time_zone?: string;
    /**
     * Local currency used to display amounts converted from BTC
     */
    native_currency?: string;
}

export interface BuyOpts {
    /**
     * Buy amount without fees (alternative to total)
     */
    amount?: string;
    /**
     * Buy amount with fees (alternative to amount)
     */
    total?: string;
    /**
     * Currency for the amount (see Client#getCurrencies() for available strings)
     */
    currency: string;
    /**
     * The ID of the payment method that should be used for the buy. (todo get payment methods)
     */
    payment_method?: string;
    /**
     * Whether or not you would still like to buy if you have to wait for your money to arrive to lock in a price
     */
    agree_btc_amount_varies?: boolean;
    /**
     * If set to false, this buy will not be immediately completed. Use the commit call to complete it. Default value: true
     */
    commit?: boolean;
    /**
     * If set to true, response will return an unsave buy for detailed price quote. Default value: false
     */
    quote?: boolean;
}

export interface SellOpts {
    /**
     * Sell amount without fees (alternative to total)
     */
    amount?: string;
    /**
     * Sell amount with fees (alternative to amount)
     */
    total?: string;
    /**
     * Currency for the amount (see Client#getCurrencies() for available strings)
     */
    currency: string;
    /**
     * The ID of the payment method that should be used for the sell.
     */
    payment_method?: string;
    /**
     * Whether or not you would still like to sell if you have to wait for your money to arrive to lock in a price
     */
    agree_btc_amount_varies?: boolean;
    /**
     * If set to false, this sell will not be immediately completed. Use the commit call to complete it. Default value: true
     */
    commit?: boolean;
    /**
     * If set to true, response will return an unsave sell for detailed price quote. Default value: false
     */
    quote?: boolean;
}

export interface DepositOpts {
    /**
     * Deposit amount
     */
    amount: string;
    /**
     * Currency for the amount (see Client#getCurrencies() for available strings)
     */
    currency: string;
    /**
     * The ID of the payment method that should be used for the buy. (todo get payment methods)
     */
    payment_method?: string;
    /**
     * If set to false, this deposit will not be immediately completed. Use the commit call to complete it. Default value: true
     */
    commit?: boolean;
}

export interface WithdrawOpts {
    /**
     * Withdrawal amount
     */
    amount: string;
    /**
     * Currency for the amount (see Client#getCurrencies() for available strings)
     */
    currency: string;
    /**
     * The ID of the payment method that should be used for the buy. (todo get payment methods)
     */
    payment_method?: string;
    /**
     * If set to false, this withdrawal will not be immediately completed. Use the commit call to complete it. Default value: true
     */
    commit?: boolean;
}

/**
 * Combination of an amount and a currency
 */
export interface MoneyHash {
    /**
     * Amount as floating-point in a string
     */
    amount: string;
    /**
     * Currency e.g. "BTC" (see Client#getCurrencies() for available strings)
     */
    currency: string;
}

/**
 * Price response
 */
export interface Price {
    data: {
        /**
         * Currency e.g. "BTC" (see Client#getCurrencies() for available strings)
         */
        base: string;
        /**
         * Amount as floating-point in a string
         */
        amount: string;
        /**
         * Currency e.g. "EUR" (see Client#getCurrencies() for available strings)
         */
        currency: string;
    };
    warnings?: [
        {
            id: string
            message: string
            url: string
        }
    ];
}

/**
 * Pagination
 * Buys, sells, and transactions are paginated, returning 25 items per call
 * The callback receives a pagination object which can be used to fetch the page of data
 */
export interface Pagination {
    ending_before?: string;
    starting_after?: string;
    previous_ending_before?: string;
    next_starting_after?: string;
    limit?: number;
    order?: 'asc' | 'desc';
    previous_uri?: string;
    next_uri?: string;
}

export type ResourceType = "account" | "transaction" | "address" | "user" | "buy" | "sell" | "deposit" | "withdrawal" | "payment_method";

/**
 * Base interface for all resources
 */
export interface Resource {
    /**
     * Resource type
     */
    resource: ResourceType;

    /**
     * ISO timestamp (sometimes needs additional permissions)
     */
    created_at?: string;

     /**
      * ISO timestamp (sometimes needs additional permissions)
      */
    updated_at?: string;
}

export class User implements Resource {
    /**
     * Resource type, constant "user"
     */
    resource: "user";

    /**
     * Resource ID
     */
    id: string;

    /**
     * REST endpoint
     */
    resource_path: string;

    /**
     * User’s name
     */
    name?: string;

    /**
     * <undocumented>
     */
    username?: string;

    /**
     * Location for user’s profile
     */
    profile_location?: string;

    /**
     * Bio for user’s profile
     */
    profile_bio?: string;

    /**
     * profile location if user has one
     */
    profile_url?: string;

    /**
     * User’s avatar url
     */
    avatar_url: string;

    /**
     * Time zone (needs wallet:user:read permission)
     */
    time_zone?: string;

    /**
     * Native currency (needs wallet:user:read permission)
     */
    native_currency?: string;

    /**
     * (needs wallet:user:read permission)
     */
    bitcoin_unit?: string;

    /**
     * (needs wallet:user:read permission)
     */
    country?: Country;

    /**
     * Email address (needs wallet:user:email permission)
     */
    email?: string;

    /**
     * Get current user’s authorization information including granted scopes and send limits when using OAuth2 authentication
     * No permission required
     */
    showAuth(cb: (error: Error | null, result: Auth) => void): void;

    /**
     * Change user properties
     * Scope: wallet:user:update
     */
    update(opts: UpdateUserOpts, cb: (error: Error | null, result: User) => void): void;
}

export interface Auth {
    /**
     * Authentication method e.g. "oauth"
     */
    method: string;
    /**
     * Permissions for this user e.g. "wallet:user:read"
     */
    scopes: string[];

    oauth_meta?: any;
}

export interface Country {
    /**
     * 2-letter country code
     */
    code: string;
    /**
     * Country name
     */
    name: string;
}

/**
 * Bitcoin, Litecoin or Ethereum address
 */
export class Address implements Resource {
    /**
     * Type of resource, constant string "address"
     */
    resource: "address";

    /**
     * Bitcoin, Litecoin or Ethereum address
     */
    address: string;

    /**
     * User defined label for the address
     */
    name?: string;

    /**
     * List transactions that have been sent to a specific address.
     * Scope: wallet:transactions:read
     */
    getTransactions(
        pagination: Pagination | null,
        cb: (error: Error | null, result: Transaction[], pagination: Pagination) => void
    ): void;
}

export type AccountType = "wallet" | "fiat" | "multisig" | "vault" | "multisig_vault";

/**
 * Account resource represents all of a user’s accounts, including bitcoin, litecoin and ethereum wallets, fiat currency accounts,
 * and vaults. This is represented in the type field. It’s important to note that new types can be added over time so you want to
 * make sure this won’t break your implementation.
 * User can only have one primary account and it’s type can only be wallet.
 */
export class Account implements Resource {
    /**
     * Type of resource, constant string "account"
     */
    resource: "account";

    /**
     * Resource ID
     */
    id: string;

    /**
     * ISO timestamp (sometimes needs additional permissions)
     */
    created_at?: string;

    /**
     * ISO timestamp (sometimes needs additional permissions)
     */
    updated_at?: string;

    /**
     * REST endpoint
     */
    resource_path: string;

    /**
     * User or system defined name
     */
    name: string;

    /**
     * Primary account
     */
    primary: boolean;

    /**
     * Account’s type
     */
    type: AccountType;

    /**
     * Account’s currency (see Client#getCurrencies() for available strings)
     */
    currency: string;

    /**
     * Balance
     */
    balance: MoneyHash;

    /**
     * Allow deposits
     */
    allow_deposits: boolean;

    /**
     * Allow withdrawls
     */
    allow_withdrawals: boolean;

    /**
     * Account worth in fiat.
     */
    native_balance: MoneyHash;

    /**
     * Promote an account as primary account.
     * Scope: wallet:accounts:update
     */
    setPrimary(cb: (error: Error | null, result: Account) => void): void;

    /**
     * Modifies user’s account.
     * Scope: wallet:accounts:update
     */
    update(opts: UpdateAccountOpts, cb: (error: Error | null, result: Account) => void): void;

    /**
     * Removes user’s account. In order to remove an account it can’t be:
     * - Primary account
     * - Account with non-zero balance
     * - Fiat account
     * - Vault with a pending withdrawal
     * Scope: wallet:accounts:delete
     */
    delete(cb: (error: Error | null) => void): void;

    /**
     * Lists addresses for an account. Important: Addresses should be considered one time use only. Create new addresses.
     * Scope: wallet:addresses:read
     */
    getAddresses(cb: (error: Error | null, result: Address[]) => void): void;

    /**
     * Show an individual address for an account. A regular bitcoin, litecoin or ethereum address can be used in place of `id` but the
     * address has to be associated to the correct account. Important: Addresses should be considered one time use only. Create new addresses.
     * Scope: wallet:addresses:read
     * @param id resource id or a regular bitcoin, litecoin or ethereum address
     */
    getAddress(id: string, cb: (error: Error | null, result: Address) => void): void;

    /**
     * Creates a new address for an account. As all the arguments are optinal, it’s possible just to do a empty POST which will create a new
     * address. This is handy if you need to create new receive addresses for an account on-demand.
     * Addresses can be created for all account types. With fiat accounts, funds will be received with Instant Exchange
     * Scope: wallet:addresses:create
     * @param opts can be null, optional address name
     */
    createAddress(opts: CreateAddressOpts | null, cb: (error: Error | null, result: Address) => void): void;

    /**
     * Lists account’s transactions.
     * Scope: wallet:transactions:read
     */
    getTransactions(
        pagination: Pagination | null,
        cb: (error: Error | null, result: Transaction[], pagination: Pagination) => void
    ): void;

    /**
     * Show an individual transaction for an account
     * Scope: wallet:transactions:read
     * @param id resource id
     */
    getTransaction(id: string, cb: (error: Error | null, result: Transaction) => void): void;

    /**
     * Send funds to a bitcoin address, litecoin address, ethereum address, or email address. No transaction fees are required for off
     * blockchain bitcoin transactions.
     *
     * It’s recommended to always supply a unique `idem` field for each transaction. This prevents you from sending the same transaction
     * twice if there has been an unexpected network outage or other issue.
     *
     * When used with OAuth2 authentication, this endpoint requires two factor authentication unless used with
     * wallet:transactions:send:bypass-2fa scope.
     *
     * If the user is able to buy bitcoin, they can send funds from their fiat account using instant exchange feature.
     * Buy fees will be included in the created transaction and the recipient will receive the user defined amount.
     * To create a multisig transaction, visit Multisig documentation.
     *
     * Scope: wallet:transactions:send, wallet:transactions:send:bypass-2fa
     */
    sendMoney(opts: SendMoneyOpts, cb: (error: Error | null, result: Transaction) => void): void;

    /**
     * Transfer bitcoin, litecoin or ethereum between two of a user’s accounts. Following transfers are allowed:
     * - wallet to wallet
     * - wallet to vault
     * Scope: wallet:transactions:transfer
     */
    transferMoney(opts: TransferMoneyOpts, cb: (error: Error | null, result: Transaction) => void): void;

    /**
     * Requests money from an email address.
     * Scope: wallet:transactions:request
     */
    requestMoney(opts: RequestMoneyOpts, cb: (error: Error | null, result: Transaction) => void): void;

    /**
     * Lists buys for an account.
     * Scope: wallet:buys:read
     */
    getBuys(
        pagination: Pagination | null,
        cb: (error: Error | null, result: Buy[], pagination: Pagination) => void
    ): void;

    /**
     * Show an individual buy.
     * Scope: wallet:buys:read
     * @param id resource id
     */
    getBuy(id: string, cb: (error: Error | null, result: Buy) => void): void;

    /**
     * Buys a user-defined amount of bitcoin, litecoin or ethereum.
     * There are two ways to define buy amounts–you can use either the amount or the total parameter:
     * - When supplying amount, you’ll get the amount of bitcoin, litecoin or ethereum defined. With amount it’s recommended to use BTC or
     *   ETH as the currency value, but you can always specify a fiat currency and and the amount will be converted to BTC or ETH respectively.
     * - When supplying total, your payment method will be debited the total amount and you’ll get the amount in BTC or ETH after fees have
     *   been reduced from the total. With total it’s recommended to use the currency of the payment method as the currency parameter,
     *   but you can always specify a different currency and it will be converted.
     * Given the price of digital currency depends on the time of the call and on the amount of purchase, it’s recommended to use the
     * commit: false parameter to create an uncommitted buy to show the confirmation for the user or get the final quote, and commit that
     * with a separate request.
     * If you need to query the buy price without locking in the buy, you can use quote: true option. This returns an unsaved buy and
     * unlike commit: false, this buy can’t be completed. This option is useful when you need to show the detailed buy price quote
     * for the user when they are filling a form or similar situation.
     * Scope: wallet:buys:create
     * @param opts indicates what to buy
     * @param cb receives transaction that you can use to commit the buy
     */
    buy(opts: BuyOpts, cb: (error: Error | null, result: Buy) => void): void;

    /**
     * Lists sells for an account.
     * Scope: wallet:sells:read
     */
    getSells(
        pagination: Pagination | null,
        cb: (error: Error | null, result: Sell[], pagination: Pagination) => void
    ): void;

    /**
     * Show an individual sell.
     * Scope: wallet:sells:read
     * @param id resource id
     */
    getSell(id: string, cb: (error: Error | null, result: Sell) => void): void;

    /**
     * Sells a user-defined amount of bitcoin, litecoin or ethereum.
     *
     * There are two ways to define sell amounts–you can use either the amount or the total parameter:
     * - When supplying amount, you’ll get the amount of bitcoin, litecoin or ethereum defined. With amount it’s recommended to use BTC or
     *   ETH as the currency value, but you can always specify a fiat currency and the amount will be converted to BTC or ETH respectively.
     * - When supplying total, your payment method will be credited the total amount and you’ll get the amount in BTC or ETH after fees
     *   have been reduced from the subtotal. With total it’s recommended to use the currency of the payment method as the currency parameter,
     *   but you can always specify a different currency and it will be converted.
     *
     * Given the price of digital currency depends on the time of the call and amount of the sell, it’s recommended to use the commit: false
     * parameter to create an uncommitted sell to get a quote and then to commit that with a separate request.
     *
     * If you need to query the sell price without locking in the sell, you can use quote: true option. This returns an unsaved sell and
     * unlike commit: false, this sell can’t be completed. This option is useful when you need to show the detailed sell price quote for
     * the user when they are filling a form or similar situation.
     * Scope: wallet:sells:create
     */
    sell(opts: SellOpts, cb: (error: Error | null, result: Sell) => void): void;

    /**
     * Lists deposits for an account.
     * Scope: wallet:deposits:read
     */
    getDeposits(cb: (error: Error | null, result: Deposit[]) => void): void;

    /**
     * Show an individual deposit.
     * Scope: wallet:deposits:read
     * @param id resource id
     */
    getDeposit(id: string, cb: (error: Error | null, result: Deposit) => void): void;

    /**
     * Deposits user-defined amount of funds to a fiat account.
     * Scope: wallet:deposits:create
     */
    deposit(opts: DepositOpts, cb: (error: Error | null, result: Deposit) => void): void;

    /**
     * Lists withdrawals for an account.
     * Scope: wallet:withdrawals:read
     */
    getWithdrawals(cb: (error: Error | null, result: Withdrawal[]) => void): void;

    /**
     * Show an individual withdrawal.
     * Scope: wallet:withdrawals:read
     * @param id resource id
     */
    getWithdrawal(id: string, cb: (error: Error | null, result: Withdrawal) => void): void;

    /**
     * Withdraws user-defined amount of funds from a fiat account.
     * Scope: wallet:withdrawals:create
     */
    withdraw(opts: WithdrawOpts, cb: (error: Error | null, result: Withdrawal) => void): void;
}

/**
 * Reference to any resource
 */
export interface ResourceRef {
    id: string;
    resource: ResourceType;
    resource_path: string;
}

export type TransactionType = "send" | "request" | "transfer" | "buy" | "sell" | "fiat_deposit" | "fiat_withdrawal" | "exchange_deposit"
    | "exchange_withdrawal" | "vault_withdrawal" | "trade";

export type TransactionStatus = "pending" | "completed" | "failed" | "expired" | "canceled" | "waiting_for_signature" | "waiting_for_clearing";

export class Transaction implements Resource {
    /**
     * Constant "transaction"
     */
    resource: "transaction";

    /**
     * Transaction type
     */
    type: TransactionType;

    /**
     * Transaction status
     */
    status: TransactionStatus;

    /**
     * Amount in bitcoin, litecoin or ethereum
     */
    amount: MoneyHash;

    /**
     * Amount in user's native currency
     */
    native_amount: MoneyHash;

    /**
     * Account associated with the transaction
     */
    account: Account;

    /**
     * User defined description
     */
    description: string;

    /**
     * Indicator if the transaction was instant exchanged (received into a bitcoin address for a fiat account)
     */
    instant_exchange: boolean;

    /**
     * Detailed information about the transaction
     */
    details: any;

    /**
     * Information about bitcoin, litecoin or ethereum network including network transaction hash if transaction was on-blockchain.
     * Only available for certain types of transactions
     */
    network?: any;

    /**
     * The receiving party of a debit transaction. Usually another resource but can also be another type like email.
     * Only available for certain types of transactions
     */
    to?: ResourceRef | string;

    /**
     * The originating party of a credit transaction. Usually another resource but can also be another type like bitcoin network.
     * Only available for certain types of transactions
     */
    from?: ResourceRef | string;

    /**
     * Associated bitcoin, litecoin or ethereum address for received payment
     */
    address?: Address;

    /**
     * Associated OAuth2 application
     */
    application?: any;

    /**
     * ISO timestamp
     */
    created_at: string;

    /**
     * ISO timestamp
     */
    updated_at: string;

    /**
     * Reference to Coinbase client
     */
    client: Client;

    /**
     * If record is a buy, includes reference to Buy resource
     */
    buy?: {
        id: string;
        resource: "buy";
        resource_path: string;
    };

    /**
     * If record is a sell, includes reference to Sell resource
     */
    sell?: {
        id: string;
        resource: "sell";
        resource_path: string;
    };

    /**
     * If record is a trade, includes reference to Trade resource
     */
    trade?: {
        id: string;
        resource: "trade";
        resource_path: string;
    };

    /**
     * Lets the recipient of a money request complete the request by sending money to the user who requested the money.
     * This can only be completed by the user to whom the request was made, not the user who sent the request.
     * Scope: wallet:transactions:request
     */
    complete(cb: (error: Error | null, result: Transaction) => void): void;

    /**
     * Lets the user resend a money request. This will notify recipient with a new email.
     * Scope: wallet:transactions:request
     */
    resend(cb: (error: Error | null, result: Transaction) => void): void;

    /**
     * Lets a user cancel a money request. Money requests can be canceled by the sender or the recipient.
     * Scope: wallet:transactions:request
     */
    cancel(cb: (error: Error | null, result: Transaction) => void): void;
}

export type BuyStatus = "created" | "completed" | "canceled";

/**
 * Buy resource
 */
export class Buy implements Resource {
    /**
     * Constant "buy"
     */
    resource: "buy";

    /**
     * Status
     */
    status: BuyStatus;

    /**
     * Associated payment method (e.g. a bank, fiat account)
     */
    payment_method: ResourceRef;

    /**
     * Associated transaction (e.g. a bank, fiat account)
     */
    transaction: ResourceRef | null;

    /**
     * Amount in bitcoin, litecoin or ethereum
     */
    amount: MoneyHash;

    /**
     * Fiat amount with fees
     */
    total: MoneyHash;

    /**
     * Fiat amount without fees
     */
    subtotal: MoneyHash;

    /**
     * Fees associated to this buy
     */
    fees: Fee[];

    /**
     * Has this buy been committed?
     */
    committed: boolean;

    /**
     * Was this buy executed instantly?
     */
    instant: boolean;

    /**
     * When a buy isn’t executed instantly, it will receive a payout date for the time it will be executed. ISO timestamp
     */
    payout_at?: string;

    /**
     * Unit price of the base currency.
     */
    unit_price: UnitPrice;

    /**
     * Hold period for transfer.
     */
    hold_business_days: number;

    /**
     * Is it the first buy for this symbol?
     */
    is_first_buy: boolean;

    /**
     * Is there another action required to make the transfer pass?
     */
    requires_completion_step: boolean;

    /**
     * Transfer identifier
     */
    id: string;

    /**
     * Reference code shown in user's dashboard.
     */
    user_reference: string;

    /**
     * ISO timestamp
     */
    created_at: string;

    /**
     * ISO timestamp
     */
    updated_at: string;

    /**
     * Reference to Coinbase client
     */
    client: Client;

    /**
     * Completes a buy that is created in commit: false state.
     * If the exchange rate has changed since the buy was created, this call will fail with the error “The exchange rate updated while you
     * were waiting. The new total is shown below”. The buy’s total will also be updated. You can repeat the `commit` call to accept the new
     * values and start the buy at the new rates.
     * Scope: wallet:buys:create
     */
    commit(cb: (error: Error | null, result: Buy) => void): void;
}

export interface Fee {
    /**
     * Amount associated to this fee
     */
    amount: MoneyHash;
    /**
     * Fee beneficiary ("bank", "coinbase", ...)
     */
    type: string;
}

export interface UnitPrice {
    /**
     * Amount as floating-point in a string
     */
    amount: string;
    /**
     * Currency e.g. "BTC" (see Client#getCurrencies() for available strings)
     */
    currency: string;
    /**
     * Type of price
     */
    scale: number;
}

export type SellStatus = "created" | "completed" | "canceled";

/**
 * Sell resource
 */
export class Sell implements Resource {
    /**
     * Constant "sell"
     */
    resource: "sell";

    /**
     * Status of the sell. Currently available values: created, completed, canceled
     */
    status: BuyStatus;

    /**
     * Associated payment method (e.g. a bank, fiat account)
     */
    payment_method: ResourceRef;

    /**
     * Associated transaction (e.g. a bank, fiat account)
     */
    transaction: ResourceRef | null;

    /**
     * Amount in bitcoin, litecoin or ethereum
     */
    amount: MoneyHash;

    /**
     * Fiat amount with fees
     */
    total: MoneyHash;

    /**
     * Fiat amount without fees
     */
    subtotal: MoneyHash;

    /**
     * Fees associated to this sell
     */
    fees: MoneyHash[];

    /**
     * Has this sell been committed?
     */
    committed: boolean;

    /**
     * Was this sell executed instantly?
     */
    instant: boolean;

    /**
     * When a sell isn’t executed instantly, it will receive a payout date for the time it will be executed. ISO timestamp
     */
    payout_at?: string;

    /**
     * Transfer identifier
     */
    id: string;

    /**
     * Reference code shown in user's dashboard.
     */
    user_reference: string;

    /**
     * ISO timestamp
     */
    created_at: string;

    /**
     * ISO timestamp
     */
    updated_at: string;

    /**
     * Reference to Coinbase client
     */
    client: Client;

    /**
     * Completes a sell that is created in commit: false state.
     * If the exchange rate has changed since the sell was created, this call will fail with the error “The exchange rate updated while you
     * were waiting. The new total is shown below”. The buy’s total will also be updated. You can repeat the `commit` call to accept the new
     * values and start the buy at the new rates.
     * Scope: wallet:sells:create
     */
    commit(cb: (error: Error | null, result: Sell) => void): void;
}

export type DepositStatus = "created" | "completed" | "canceled";

/**
 * Deposit resource represents a deposit of funds using a payment method (e.g. a bank). Each committed deposit also has an associated transaction.
 * Deposits can be started with commit: false which is useful when displaying the confirmation for a deposit.
 * These deposits will never complete and receive an associated transaction unless they are committed separately.
 */
export class Deposit implements Resource {
    resource: "deposit";

    /**
     * Resource ID
     */
    id: string;

    /**
     * ISO timestamp (sometimes needs additional permissions)
     */
    created_at?: string;

    /**
     * ISO timestamp (sometimes needs additional permissions)
     */
    updated_at?: string;

    /**
     * REST endpoint
     */
    resource_path: string;

    /**
     * Status of the deposit. Currently available values: created, completed, canceled
     */
    status: DepositStatus;

    /**
     * Associated payment method (e.g. a bank)
     */
    payment_method: ResourceRef;

    /**
     * Associated transaction (e.g. a bank, fiat account)
     */
    transaction: ResourceRef;

    /**
     * Amount
     */
    amount: MoneyHash;

    /**
     * Amount without fees
     */
    subtotal: MoneyHash;

    /**
     * Fee associated to this deposit
     */
    fee: MoneyHash;

    /**
     * Has this deposit been committed?
     */
    committed: boolean;

    /**
     * When a deposit isn’t executed instantly, it will receive a payout date for the time it will be executed. ISO timestamp
     */
    payout_at?: string;

    /**
     * Completes a deposit that is created in commit: false state.
     * Scope: wallet:deposits:create
     */
    commit(cb: (error: Error | null, result: Deposit) => void): void;
}

export type WithdrawalStatus = "created" | "completed" | "canceled";

/**
 * Withdrawal resource represents a withdrawal of funds using a payment method (e.g. a bank). Each committed withdrawal also has a associated
 * transaction.
 * Withdrawal can be started with commit: false which is useful when displaying the confirmation for a withdrawal. These withdrawals will
 * never complete and receive an associated transaction unless they are committed separately.
 */
export class Withdrawal implements Resource {
    resource: "deposit";

    /**
     * Resource ID
     */
    id: string;

    /**
     * ISO timestamp (sometimes needs additional permissions)
     */
    created_at?: string;

    /**
     * ISO timestamp (sometimes needs additional permissions)
     */
    updated_at?: string;

    /**
     * REST endpoint
     */
    resource_path: string;

    /**
     * Status of the deposit. Currently available values: created, completed, canceled
     */
    status: WithdrawalStatus;

    /**
     * Associated payment method (e.g. a bank)
     */
    payment_method: ResourceRef;

    /**
     * Associated transaction (e.g. a bank, fiat account)
     */
    transaction: ResourceRef;

    /**
     * Amount
     */
    amount: MoneyHash;

    /**
     * Amount without fees
     */
    subtotal: MoneyHash;

    /**
     * Fee associated to this withdrawal
     */
    fee: MoneyHash;

    /**
     * Has this withdrawal been committed?
     */
    committed: boolean;

    /**
     * When a withdrawal isn’t executed instantly, it will receive a payout date for the time it will be executed. ISO timestamp
     */
    payout_at?: string;

    /**
     * Completes a withdrawal that is created in commit: false state.
     * Scope: wallet:withdrawals:create
     */
    commit(cb: (error: Error | null, result: Withdrawal) => void): void;
}

export type PaymentMethodType = "ach_bank_account" | "sepa_bank_account" | "ideal_bank_account" | "fiat_account" | "bank_wire"
    | "credit_card" | "secure3d_card" | "eft_bank_account" | "interac";

/**
 * Payment method resource represents the different kinds of payment methods that can be used when buying and selling bitcoin, litecoin or
 * ethereum.
 * As fiat accounts can be used for buying and selling, they have an associated payment method. This type of a payment method will also have
 * a fiat_account reference to the actual account.
 *
 * Currently available type values:
 * - ach_bank_account - Regular US bank account
 * - sepa_bank_account - European SEPA bank account
 * - ideal_bank_account - iDeal bank account (Europe)
 * - fiat_account - Fiat nominated Coinbase account
 * - bank_wire - Bank wire (US only)
 * - credit_card - Credit card (can’t be used for buying/selling)
 * - secure3d_card - Secure3D verified payment card
 * - eft_bank_account - Canadian EFT bank account
 * - interac - Interac Online for Canadian bank accounts
 */
export interface PaymentMethod extends Resource {
    /**
     * Resource type, constant "payment_method"
     */
    resource: "payment_method";

    /**
     * Payment method type
     */
    type: PaymentMethodType;

    /**
     * Method name
     */
    name: string;

    /**
     * Payment method’s native currency (see Client#getCurrencies() for available strings)
     */
    currency: string;

    /**
     * Is primary buying method?
     */
    primary_buy: boolean;

    /**
     * Is primary selling method?
     */
    primary_sell: boolean;

    /**
     * Is buying allowed with this method?
     */
    allow_buy: boolean;

    /**
     * Is selling allowed with this method?
     */
    allow_sell: boolean;

    /**
     * Does this method allow for instant buys?
     */
    instant_buy: boolean;

    /**
     * Does this method allow for instant sells?
     */
    instant_sell: boolean;

    /**
     * If the user has obtained optional wallet:payment-methods:limits permission, an additional field, limits, will be embedded into payment
     * method data. It will contain information about buy, instant buy, sell and deposit limits (there’s no limits for withdrawals at this time).
     * As each one of these can have several limits you should always look for the lowest remaining value when performing the relevant action.
     */
    limits?: PaymentMethodLimits;
}

/**
 * This contains information about buy, instant buy, sell and deposit limits (there’s no limits for withdrawals at this time).
 * As each one of these can have several limits you should always look for the lowest remaining value when performing the relevant action.
 */
export interface PaymentMethodLimits {
    buy: PaymentMethodLimit[];
    instant_buy: PaymentMethodLimit[];
    sell: PaymentMethodLimit[];
    deposit: PaymentMethodLimit[];
}

export interface PaymentMethodLimit {
    period_in_days: number;
    total: MoneyHash;
    remaining: MoneyHash;
}

/**
 * Information about one supported currency.  Currency codes will conform to the ISO 4217 standard where possible.
 * Currencies which have or had no representation in ISO 4217 may use a custom code (e.g. BTC).
 */
export interface Currencies {
    data: [{
        /**
         * Abbreviation e.g. "USD" or "BTC"
         */
        id: string;
        /**
         * Full name e.g. "United Arab Emirates Dirham"
         */
        name: string;
        /**
         * Floating-point number in a string
         */
        min_size: string;
    }];
}

export interface ExchangeRate {
    data: {
        /**
         * Base currency
         */
        currency: string;
        /**
         * Rates as floating points in strings; indexed by currency id
         */
        rates: { [index: string]: string };
    };
}

export interface Time {
    data: {
        iso: string;
        epoch: number;
    };
}

export class Client {
    constructor(opts: ClientConstructOpts);

    /**
     * Get any user’s information with their ID.
     * Scopes: none
     * @param id resource id
     */
    getUser(id: string, cb: (error: Error | null, result: User) => void): void;

    /**
     * Get the current user. To get user’s email or private information, use permissions wallet:user:email and wallet:user:read. If current
     * request has a wallet:transactions:send scope, then the response will contain a boolean sends_disabled field that indicates
     * if the user’s send functionality has been disabled.
     */
    getCurrentUser(cb: (error: Error | null, result: User) => void): void;

    /**
     * Returns all accounts for the current user
     * Scope: wallet:accounts:read
     */
    getAccounts(opts: {}, cb: (error: Error | null, result: Account[]) => void): void;

    /**
     * Get one account by its Resource ID
     * Scope: wallet:accounts:read
     * @param id resource ID or "primary"
     */
    getAccount(id: string, cb: (error: Error | null, result: Account) => void): void;

    /**
     * Creates a new account for user.
     * Scopes: wallet:accounts:create
     */
    createAccount(opts: CreateAccountOpts, cb: (error: Error | null, result: Account) => void): void;

    /**
     * Lists current user’s payment methods
     * Scope: wallet:payment-methods:read
     */
    getPaymentMethods(cb: (error: Error | null, result: PaymentMethod[]) => void): void;

    /**
     * Show current user’s payment method.
     * Scope: wallet:payment-methods:read
     */
    getPaymentMethod(id: string, cb: (error: Error | null, result: PaymentMethod) => void): void;

    /**
     * List known currencies. Currency codes will conform to the ISO 4217 standard where possible. Currencies which have or had no
     * representation in ISO 4217 may use a custom code (e.g. BTC).
     * Scope: none
     */
    getCurrencies(cb: (error: Error | null, result: Currencies) => void): void;

    /**
     * Get current exchange rates. Default base currency is USD but it can be defined as any supported currency.
     * Returned rates will define the exchange rate for one unit of the base currency.
     * Scope: none
     */
    getExchangeRates(opts: GetExchangeRateOpts, cb: (error: Error | null, result: ExchangeRate) => void): void;

    /**
     * Get the total price to buy one bitcoin or ether. Note that exchange rates fluctuates so the price is only correct for seconds at the time.
     * This buy price includes standard Coinbase fee (1%) but excludes any other fees including bank fees.
     * If you need more accurate price estimate for a specific payment method or amount, @see Account#buy() and `quote: true` option.
     * Scope: none
     */
    getBuyPrice(opts: GetBuyPriceOpts, cb: (error: Error | null, result: Price) => void): void;

    /**
     * Get the total price to sell one bitcoin or ether. Note that exchange rates fluctuates so the price is only correct for seconds at the time.
     * This sell price includes standard Coinbase fee (1%) but excludes any other fees including bank fees. If you need more accurate price
     * estimate for a specific payment method or amount, see sell bitcoin endpoint and quote: true option.
     * Scope: none
     */
    getSellPrice(opts: GetSellPriceOpts, cb: (error: Error | null, result: Price) => void): void;

    /**
     * Get the current market price for bitcoin. This is usually somewhere in between the buy and sell price.
     * Note that exchange rates fluctuates so the price is only correct for seconds at the time.
     * You can also get historic prices with date parameter.
     * Scope: none
     */
    getSpotPrice(opts: GetSpotPriceOpts, cb: (error: Error | null, result: Price) => void): void;

    /**
     * Get the API server time.
     */
    getTime(cb: (error: Error | null, result: Time) => void): void;
}
