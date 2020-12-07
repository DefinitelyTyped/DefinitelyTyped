import { AxiosResponse } from "./axios";

export default class Rave {
    constructor(publicKey: string, privateKey: string, productionFlag: boolean)
    Card: Card
    Status: Status
    Account: Account
    TokenCharge: TokenCharge
    MobileOptions: MobileOptions
    Misc: Misc
    Preauth: Preauth
    security: security
    CustomRequest: CustomRequest
    Transfer: Transfer

}

interface BaseResponse {
    status: string,
    message: string,
}

interface Card {
    charge(data: CardChargeRequest): Promise<Promise<AxiosResponse<CardChargeResponse>>>,
    validate(data: CardValidateRequest): Promise<AxiosResponse<CardValidateResponse>>
}

interface CardChargeRequest {
    token: string,
    currency: string,
    country?: string,
    amount: string,
    email: string,
    firstname?: string,
    lastname?: string,
    IP?: string,
    narration?: string,
    txRef: string,
    string?: string,
    device_fingerprint?: string,
    payment_plan?: string,
    subaccounts?: []
}

interface CardChargeResponse extends BaseResponse {
    data: {
        txid: number,
        txref: string,
        flwref: string,
        devicefingerprint: string,
        cycle: string,
        amount: number,
        currency: string,
        chargedamount: number,
        appfee: number,
        merchantfee: number,
        merchantbearsfee: number,
        chargecode: string,
        chargemessage: string,
        authmodel: string,
        ip: string,
        narration: string,
        status: string,
        vbvcode: string,
        vbvmessage: string,
        authurl: string,
        acctcode: string | any,
        acctmessage: string | any,
        paymenttype: string,
        paymentid: string,
        fraudstatus: string,
        chargetype: string,
        createdday: number,
        createddayname: string,
        createdweek: number,
        createdmonth: number,
        createdmonthname: string,
        createdquarter: number,
        createdyear: string,
        createdyearisleap: boolean,
        createddayispublicholiday: number,
        createdhour: number,
        createdminute: number,
        createdpmam: string,
        created: string,
        customerid: number,
        custphone: string,
        custnetworkprovider: string,
        custname: string,
        custemail: string,
        custemailprovider: string,
        custcreated: string,
        accountid: number,
        acctbusinessname: string,
        acctcontactperson: string,
        acctcountry: string,
        acctbearsfeeattransactiontime: number,
        acctparent: number,
        acctvpcmerchant: string | any,
        acctalias: string,
        acctisliveapproved: number,
        orderref: string,
        paymentplan: any,
        paymentpage: any,
        raveref: string,
        amountsettledforthistransaction: number,
        card: {
            expirymonth: string,
            expiryyear: string,
            cardBIN: string,
            last4digits: string,
            brand: string,
            card_tokens: { embedtoken: string, shortcode: string, expiry: string }[]
            life_time_token: string
        }
    }
}

interface CardValidateRequest {
    transaction_reference: string,
    otp?: string,
}

interface CardValidateResponse extends BaseResponse {
    data: {
        data: {
            responsecode: string,
            responsemessage: string
        },
        tx: {
            id: number,
            txRef: string,
            orderRef: string,
            flwRef: string,
            redirectUrl: string,
            device_fingerprint: string | any,
            settlement_token: any,
            cycle: string,
            amount: number,
            charged_amount: number,
            appfee: number,
            merchantfee: number,
            merchantbearsfee: number,
            chargeResponseCode: string,
            chargeResponseMessage: string,
            authModelUsed: string,
            currency: string,
            IP: string,
            narration: string,
            status: string,
            vbvrespmessage: string,
            authurl: string,
            vbvrespcode: string,
            acctvalrespmsg: any,
            acctvalrespcode: any,
            paymentType: string,
            paymentId: string,
            fraud_status: string,
            charge_type: string,
            is_live: number,
            createdAt: string,
            updatedAt: string,
            deletedAt: any,
            customerId: number,
            AccountId: number,
            customer: {
                id: number,
                phone: any,
                fullName: string,
                customertoken: any,
                email: string,
                createdAt: string,
                updatedAt: string,
                deletedAt: any,
                AccountId: number
            },
            chargeToken: {
                user_token: string,
                embed_token: string
            }
        }
    }
}

interface Status {
    requery(data: StatusRequeryRequest): Promise<AxiosResponse<StatusRequeryResponse>>
    xrequery(data: StatusXqequeryRequest): Promise<AxiosResponse<any>>
}

interface StatusRequeryRequest {
    flwref?: string,
    txref?: string,
}

interface StatusRequeryResponse extends BaseResponse {
    data: {
        txid: number,
        txref: string,
        flwref: string,
        devicefingerprint: string,
        cycle: string,
        amount: number,
        currency: string,
        chargedamount: number,
        appfee: number,
        merchantfee: number,
        merchantbearsfee: number,
        chargecode: string,
        chargemessage: string,
        authmodel: string,
        ip: string,
        narration: string,
        status: string,
        vbvcode: string,
        vbvmessage: string,
        authurl: string,
        acctcode: any,
        acctmessage: any,
        paymenttype: string,
        paymentid: string,
        fraudstatus: string,
        chargetype: string,
        createdday: number,
        createddayname: string,
        createdweek: number,
        createdmonth: number,
        createdmonthname: string,
        createdquarter: number,
        createdyear: number,
        createdyearisleap: boolean,
        createddayispublicholiday: number,
        createdhour: number,
        createdminute: number,
        createdpmam: string,
        created: string,
        customerid: number,
        custphone: any,
        custnetworkprovider: string,
        custname: string,
        custemail: string,
        custemailprovider: string,
        custcreated: string,
        accountid: number,
        acctbusinessname: string,
        acctcontactperson: string,
        acctcountry: string,
        acctbearsfeeattransactiontime: number,
        acctparent: number,
        acctvpcmerchant: number,
        acctalias: string,
        acctisliveapproved: number,
        orderref: string,
        paymentplan: any,
        paymentpage: any,
        raveref: string,
        meta: {
            id: number,
            metaname: string,
            metavalue: string,
            createdAt: string,
            updatedAt: string,
            deletedAt: any,
            getpaidTransactionId: number
        }[]
    }
}

interface StatusXqequeryRequest {
    flwref?: string,
    txref?: string,
    last_attempt?: string,
    only_successful?: string,
}

interface Account {
    charge(data: AccountChargeRequest): Promise<AxiosResponse<any>>
    validate(data: AccountValidateRequest): Promise<AxiosResponse<any>>
}

interface AccountChargeRequest {
    currency?: string,
    country?: string,
    amount: string,
    phonenumber?: string,
    billingzip?: string,
    email: string,
    firstname?: string,
    lastname?: string,
    IP?: string,
    narration?: string,
    txRef: string,
    meta?: any,
    pin?: string,
    bvn?: string,
    charge_type?: string,
    device_fingerprint: string,
    accountbank: string,
    accountnumber: string,
    payment_type?: string,
    is_internet_banking?: any,
    include_integrity_hash?: any
}

interface AccountValidateRequest {
    otp: string | number,
    transactionreference: string
}

interface TokenCharge {
    card(data: TokenChargeCardRequest): Promise<AxiosResponse<TokenChargeCardResponse>>
    account(data: TokenChargeCardRequest): Promise<AxiosResponse<TokenChargeCardResponse>>
}

interface TokenChargeCardRequest {
    token: string,
    currency: string,
    country?: string,
    amount: string,
    email: string,
    firstname?: string,
    lastname?: string,
    IP?: string,
    narration?: string,
    txRef: string,
    meta?: string,
    device_fingerprint?: string,
    payment_plan?: string,
    subaccounts?: []
}

interface TokenChargeCardResponse extends BaseResponse {
    data: {
        txid: number,
        txref: string,
        flwref: string,
        devicefingerprint: string,
        cycle: string,
        amount: number,
        currency: string,
        chargedamount: number,
        appfee: number,
        merchantfee: number,
        merchantbearsfee: number,
        chargecode: string,
        chargemessage: string,
        authmodel: string,
        ip: string,
        narration: string,
        status: string,
        vbvcode: string,
        vbvmessage: string,
        authurl: string,
        acctcode: any,
        acctmessage: any,
        paymenttype: string,
        paymentid: string,
        fraudstatus: string,
        chargetype: string,
        createdday: number,
        createddayname: string,
        createdweek: number,
        createdmonth: number,
        createdmonthname: string,
        createdquarter: number,
        createdyear: number,
        createdyearisleap: boolean,
        createddayispublicholiday: number,
        createdhour: number,
        createdminute: number,
        createdpmam: string,
        created: string,
        customerid: number,
        custphone: string,
        custnetworkprovider: string,
        custname: string,
        custemail: string,
        custemailprovider: string,
        custcreated: string,
        accountid: number,
        acctbusinessname: string,
        acctcontactperson: string,
        acctcountry: string,
        acctbearsfeeattransactiontime: number,
        acctparent: number,
        acctvpcmerchant: string,
        acctalias: string,
        acctisliveapproved: number,
        orderref: string,
        paymentplan: any,
        paymentpage: any,
        raveref: string,
        amountsettledforthistransaction: number,
        card: {
            expirymonth: string,
            expiryyear: string,
            cardBIN: string,
            last4digits: string,
            brand: string,
            card_tokens: {
                embedtoken: string,
                shortcode: string,
                expiry: string
            }[],
            life_time_token: string
        }
    }
}

interface MobileOptions {
    chargeUssd(data: MobileOptionsChargeUssdRequest): Promise<AxiosResponse<MobileOptionsChargeUssdResponse>>
}

interface MobileOptionsChargeUssdRequest {
    currency: string,
    country: string,
    payment_type?: string,
    amount: string,
    email: string,
    phonenumber?: string,
    firstname?: string,
    lastname?: string,
    IP?: string,
    txRef: string,
    orderRef: string,
    is_ussd: string,
    device_fingerprint?: string
}

interface MobileOptionsChargeUssdResponse extends BaseResponse {
    data: {
        data: {
            amount: string,
            type: string,
            redirect: boolean,
            note: string,
            transaction_date: string,
            transaction_reference: string,
            flw_reference: string,
            redirect_url: any,
            payment_code: string,
            type_data: string,
            meta_data: any
        },
        response_code: string,
        response_message: string
    }
}

interface Misc {
    getFee(data: MiscGetFeeRequest): Promise<AxiosResponse<any>>
    getBalHist(data: MiscGetBalHistRequest): Promise<AxiosResponse<any>>
    getBanks(data: MiscGetBanksRequest): Promise<AxiosResponse<any>>
    disburse(data: MiscDisburseRequest): Promise<AxiosResponse<any>>
    getBalance(data: MistGetBalanceRequest): Promise<AxiosResponse<any>>
    exchange_rates(data: MiscExchangeRatesRequest): Promise<AxiosResponse<any>>
    list_transactions(data: MiscListTransactionsRequest): Promise<AxiosResponse<any>>
}

interface MiscGetFeeRequest {
    amount: string | number,
    card6?: any,
    ptype?: any,
    currency?: string
}

interface MiscGetBalHistRequest {
    currency: string,
    from: string,
    to: string,
    page: string,
}

interface MiscGetBanksRequest {
    __n?: string,
}

interface MiscDisburseRequest {
    bank_code: string,
    account_number: string,
    currency: string,
    amount: string,
}

interface MistGetBalanceRequest {
    service: string,
    service_method: string,
    service_version: string,
    service_channel: string,
}

interface MiscExchangeRatesRequest {
    service: string,
    service_method: string,
    service_version: string,
    service_channel: string,
    service_channel_group: string,
    service_payload: string
}

interface MiscListTransactionsRequest {
    seckey?: string,
    from?: string,
    to?: string,
    page?: string,
}

interface Preauth {
    preauth(data: PreauthPreauthRequest): Promise<AxiosResponse<any>>
    void(data: PreauthVoidRequest): Promise<AxiosResponse<PreauthVoidRespone>>
    refund(data: PreauthVoidRequest): Promise<AxiosResponse<PreauthVoidRespone>>
    captureCard(data: PreauthCaptureCardRequest): Promise<AxiosResponse<any>>
}

interface PreauthPreauthRequest {
    cardno: string | number,
    currency?: string,
    suggested_auth?: string,
    country?: string,
    settlement_token?: string,
    cvv: string | number,
    amount: string | number,
    phonenumber?: string | number,
    billingzip?: string | number,
    expiryyear: string | number,
    expirymonth: string | number,
    email: string,
    firstname?: string,
    lastname?: string,
    IP: string,
    narration?: string,
    txRef: string,
    meta?: any
    pin?: string | number,
    bvn?: string | number,
    charge_type: string,
    device_fingerprint?: string,
    recurring_stop?: string,
    include_integrity_hash?: string,
}

interface PreauthVoidRequest {
    id?: string,
    ref?: string,
    amount?: string,
    action?: string,
}

interface PreauthVoidRespone extends BaseResponse {
    data: {
        data: {
            responsecode: string,
            redirecturl: any,
            avsresponsemessage: any,
            avsresponsecode: any,
            authorizeId: string,
            responsemessage: string,
            otptransactionidentifier: any,
            transactionreference: string,
            responsehtml: any,
            responsetoken: any
        },
        status: string
    }
}

interface PreauthCaptureCardRequest {
    flwRef: string,
    amount?: string,
}

interface security {
    getEncryptionKey(seckey: string): string
    encrypt(key: string, text: string): string
    getIntegrityHash(data: any, pubKey: string, seckey: string): string
}

interface CustomRequest {
    custom(path: string, data: any): Promise<AxiosResponse<any>>
}

interface Transfer {
    initiate(data: TransferInitiateRequest): Promise<AxiosResponse<TransferInitiateResponse>>
    bulk(data: TransferBulkRequest): Promise<AxiosResponse<TransferBulkResponse>>
    fetch(data: TransferFetchRequest): Promise<AxiosResponse<TransferFetchResponse>>
    list(data: TransferListRequest): Promise<AxiosResponse<TransferListResponse>>
    getApplicableFee(data: TransferGetApplicableFeeRequest): Promise<AxiosResponse<TransferGetApplicableFeeResponse>>
    getBalance(data: TransferGetBalanceRequest): Promise<AxiosResponse<TransferGetBalanceResponse>>
    retrieveStatusOfBulk(data: TransferRetrieveStatusOfBulkRequest): Promise<AxiosResponse<TransferRetrieveStatusOfBulkResponse>>
    accountVerification(data: TranferAccountVerificationRequest): Promise<AxiosResponse<TranferAccountVerificationResponse>>
}

interface TransferInitiateRequest {
    account_bank?: string,
    account_number?: string,
    recipient?: string,
    amount: string,
    narration?: string,
    currency: string,
    reference?: string,
    callback_url?: string,
    beneficiary_name: string,
    destination_branch_code: string,
    debit_currency?: string,
}

interface TransferInitiateResponse extends BaseResponse {
    data: {
        id: number,
        account_number: string,
        bank_code: string,
        fullname: string,
        date_created: string,
        currency: string,
        amount: number,
        fee: number,
        status: string,
        reference: string,
        narration: string,
        complete_message: string,
        requires_approval: number,
        is_approved: number,
        bank_name: string
    }
}

interface TransferBulkRequest {
    title: string,
    bulk_data?: []
}

interface TransferBulkResponse extends BaseResponse {
    data: {
        id: number,
        uuid: number,
        date_created: string,
        approver: string
    }
}

interface TransferFetchRequest {
    id: string,
    reference: string,
}

interface TransferFetchResponse extends BaseResponse {
    data: {
        page_info: {
            total: number,
            current_page: number,
            total_pages: number
        },
        transfers: [
            {
                id: number,
                account_number: string,
                bank_code: string,
                fullname: string,
                date_created: string,
                currency: string,
                amount: number,
                fee: number,
                status: string,
                narration: string,
                approver: any,
                complete_message: string,
                requires_approval: number,
                is_approved: number,
                bank_name: string
            }
        ]
    }
}

interface TransferListRequest {
    page?: string,
    status?: string
}

interface TransferListResponse extends BaseResponse {
    data: {
        page_info: {
            total: number,
            current_page: string,
            total_pages: number
        },
        transfers: [
            {
                id: number,
                account_number: string,
                bank_code: string,
                fullname: string,
                date_created: string,
                currency: string,
                amount: number,
                fee: number,
                status: string,
                narration: string,
                approver: any,
                complete_message: string,
                requires_approval: number,
                is_approved: number,
                bank_name: string
            },

        ]
    }
}

interface TransferGetApplicableFeeRequest {
    currency: string,
    amount: string,
}

interface TransferGetApplicableFeeResponse extends BaseResponse {
    data: [
        {
            id: number,
            fee_type: string,
            currency: string,
            fee: number,
            createdAt: string,
            updatedAt: string,
            deletedAt: string,
            AccountId: number
        }
    ]
}

interface TransferGetBalanceRequest {
    currency?: string,
}

interface TransferGetBalanceResponse extends BaseResponse {
    data: {
        Id: number,
        ShortName: string,
        WalletNumber: string,
        AvailableBalance: number,
        LedgerBalance: number
    }
}

interface TransferRetrieveStatusOfBulkRequest {
    batch_id: string,
}

interface TransferRetrieveStatusOfBulkResponse extends BaseResponse {
    data: {
        page_info: {
            total: number,
            current_page: number,
            total_pages: number
        },
        transfers: {
            id: number,
            account_number: string,
            bank_code: string,
            fullname: string,
            date_created: string,
            currency: string,
            amount: number,
            fee: number,
            status: string,
            narration: string,
            approver: any,
            complete_message: string,
            requires_approval: number,
            is_approved: number,
            bank_name: string
        }[]
    }
}

interface TranferAccountVerificationRequest {
    recipientaccount: string,
    destbankcode: string,
    currency?: string,
    country?: string,
}

interface TranferAccountVerificationResponse {
    data: {
        data: {
            responsecode: string,
            accountnumber: string,
            accountname: string,
            responsemessage: string,
            phonenumber: any,
            uniquereference: string,
            internalreference: any
        },
        status: string
    }
}