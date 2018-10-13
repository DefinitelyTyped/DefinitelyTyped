// Type definitions for ost-sdk-js 1.1
// Project: https://github.com/OpenSTFoundation/ost-sdk-js
// Definitions by: Lukas "Deathrage" Prochazka <https://gitlab.com/Deathrage>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.1

declare module "@ostdotcom/ost-sdk-js" {
    export = OSTSDK;
}
// core
export class OSTSDK {
    constructor(params :{
        apiKey: string;
        apiSecret: string;
        apiEndpoint: string;
    });
    services: {
        users: UserService;
        actions: ActionService;
        airdrops: AirdropService;
        token: TokenService;
        transactions: TransactionService;
        transferService: TransferService;
        balanceService: BalanceService;
        ledgerService: LedgerService;
    } 
}

// services
export interface ActionService {
    create(arg: {
        name: string,
        kind: "user_to_user"|"company_to_user"|"user_to_company",
        currency: string,
        arbitrary_amount: boolean,
        amount: number,
        commission_percent: number
    }):Promise<OstResponse<ActionResponse>>;
    edit(arg: {
        id: number,
        name: string
    }): Promise<OstResponse<ActionResponse>>;
    get(arg: {id: number}): Promise<OstResponse<ActionResponse>>;
    list(): Promise<OstResponse<ActionListResponse>>;
    urlPrefix: string;
}
export interface AirdropService {
    execute(arg: {
        amount: number,
        user_ids: string,
    }): Promise<OstResponse<AirdropResponse>>;
    get(arg: {id: string}): Promise<OstResponse<AirdropResponse>>;
    list(): Promise<OstResponse<AirdropListResponse>>;
    urlPrefix: string;
} 
export interface BalanceService {
    get(arg: {id: string}): Promise<OstResponse<BalanceResponse>>;
    urlPrefix: string;
}
export interface LedgerService {
    get(arg: {id: string}): Promise<OstResponse<TransactionListResponse>>;
    urlPrefix: string;
}
export interface TokenService{
    get(): Promise<OstResponse<TokenResponse>>;
    urlPrefix: string;
}
export interface TransactionService {
    execute(arg: {
        from_user_id: string,
        to_user_id: string,
        action_id: number
    }): Promise<OstResponse<TransactionResponse>>;
    get(arg: {id: string}): Promise<OstResponse<TransactionResponse>>;
    list(arg: {page_no: number, limit: number}): Promise<OstResponse<TransactionListResponse>>;
    urlPrefix: string;
}
export interface TransferService {
    execute(arg: {
        to_address: string,
        amount: number
    }): Promise<OstResponse<TransferResponse>>;
    get(arg: {id: string}): Promise<OstResponse<TransferResponse>>;
    list(): Promise<OstResponse<TransferListResponse>>;
    urlPrefix: string;
}
export interface UserService {
    create(arg: {name: string}): Promise<OstResponse<UserResponse>>;
    edit(arg: {id: string, name: string}): Promise<OstResponse<UserResponse>>;
    get(arg: {id: string}): Promise<OstResponse<UserResponse>>;
    list(): Promise<OstResponse<UserListResponse>>;
    urlPrefix: string;
}

// responses
export interface OstResponse<T> {
    success: boolean
    data?: T,
    err?: OstError
}

export interface OstError {
    code: string;
    msg: string;
    error_data: Object[];
    internal_id: string
}

// users
export interface UserResponse {
    result_type: "user";
    user: OstUser
}
export interface UserListResponse {
    result_type: "users";
    users: OstUser[]
}
export interface OstUser {
    id: string;
    addresses: [
       [
          number,
          string
       ]
    ],
    name: string,
    airdropped_tokens: number,
    token_balance: number
}
// aidrdrops
export interface AirdropResponse {
    result_type: "airdrop";
    airdrop: Airdrop
}
export interface AirdropListResponse {
    result_type: "airdrops";
    airdrops: Airdrop[]
}
export interface Airdrop {
    id: string;
    current_status: string;
    steps_complete: string|string[];
}
// actions
export interface ActionResponse {
    result_type: "action";
    action: Action
}
export interface ActionListResponse {
    result_type: "actions";
    actions: Action[]
}
export interface Action {
    id: string;
    name: string;
    kind: "user_to_user"|"company_to_user"|"user_to_company";
    currency: string;
    arbitrary_amount: boolean;
    amount?: number;
    arbitrary_commission?: number;
    commission_percent?: number;
}
// transactions
export interface TransactionResponse {
    result_type: "transaction";
    transaction: Transaction
}
export interface TransactionListResponse {
    result_type: "transactions";
    transactions: Transaction[]
}
export interface Transaction {
    id: string;
    from_user_id: string;
    to_user_id: string;
    transaction_hash: string;
    action_id: number;
    timestamp: number;
    status: string;
    gas_price: number;
    gas_used?: number;
    transaction_fee?: number;
    block_number?: number;
    amount?: number;
    commission_amount?: number;
    airdropped_amount: number;
}
// ballance
export interface BalanceResponse {
    result_type: "balance";
    balance: Balance
}
export interface Balance {
    available_balance: number;
    airdropped_balance: number;
    token_balance: number;
}
// ledeger = transctions
// transfer
export interface TransferResponse {
    result_type: "transfer";
    transfer: Transfer
}
export interface TransferListResponse {
    result_type: "transfers";
    transfers: Transfer[]
}
export interface Transfer {
    id: string;
    from_address: string;
    to_address: string;
    amount: number;
    transaction_hash: string;
    timestamp: number;
    status: string;
    gas_price: number;
    gas_used?: number;
    block_number?: number;
    chain_id: number;
}
// token
export interface TokenResponse {
    result_type: "token";
    token: Token,
    price_points: Object;
}
export interface Token {
    company_uuid: string,
    name: string,
    symbol: string,
    symbol_icon: string,
    conversion_factor: number,
    token_erc20_address: string,
    simple_stake_contract_address: string,
    total_supply: number,
    ost_utility_balance: [
        [
            number,
            number
        ]
    ]
}