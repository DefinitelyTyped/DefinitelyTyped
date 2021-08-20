import { BankingAccount, BankingAccountDetail, BankingBalance, BankingDirectDebit, BankingPayee, BankingPayeeDetail, BankingProductV3, BankingScheduledPayment, BankingTransactionDetail } from ".";

declare namespace CdsBankingHttpResponse {
    interface RequestAccountIds {
        data: RequestAccountIdsData;
        meta?: Meta;
    }

    interface RequestAccountIdsData {
        accountIds: string[];
    }
    interface ResponseBankingAccountBalanceList {
        data: ResponseBankingAccountBalanceListData;
        links: LinksPaginated;
        meta: MetaPaginated;
    }

    interface ResponseBankingAccountBalanceListData {
        balances?: BankingBalance[] | null;
    }

    interface ResponseBankingAccountById {
        data: BankingAccountDetail;
        links: Links;
        meta?: Meta;
    }
    interface ResponseBankingAccountList {
        data: ResponseBankingAccountListData;
        links: LinksPaginated;
        meta: MetaPaginated;
    }
    interface ResponseBankingAccountListData {
        accounts?: BankingAccount[] | null;
    }
    interface ResponseBankingDirectDebitAuthorisationList {
        data: ResponseBankingDirectDebitAuthorisationListData;
        links: LinksPaginated;
        meta: MetaPaginated;
    }
    interface ResponseBankingDirectDebitAuthorisationListData {
        directDebitAuthorisations?: BankingDirectDebit[] | null;
    }
    interface ReponseBankingPayeeById {
        data: BankingPayeeDetail;
        links: Links;
        meta?: Meta;
    }
    interface ReponseBankingPayeeList {
        data: RespPayeeList;
        links: LinksPaginated;
        meta: MetaPaginated;
    }
    interface RespPayeeList {
        payees?: BankingPayee[] | null;
    }
    interface ResponseBankingProductById {
        data: BankingProductV3;
        links: Links;
        meta?: Meta;
    }
    interface BankingProductList {
        data: RespProdList;
        links: LinksPaginated;
        meta: MetaPaginated;
    }

    interface RespProdList {
        products?: BankingProductV3[];
    }

    interface ResponseBankingScheduledPaymentsList {
        data: RespPaymentList;
        links: LinksPaginated;
        meta: MetaPaginated;
    }
    interface RespPaymentList {
        scheduledPayments?: BankingScheduledPayment[] | null;
    }
    interface ResponseBankingTransactionById {
        data: BankingTransactionDetail;
        links: Links;
        meta?: Meta;
    }
    interface BankingTransactionList {
        data: RespTransList;
        links: LinksPaginated;
        meta: MetaPaginated;
    }
    interface RespTransList {
        transactions?: BankingTransactionDetail[] | null;
    }
    interface Meta {
    }

    interface MetaError {
        urn?: string;
    }

    interface MetaPaginated {
        totalRecords: number;
        totalPages: number;
    }

    interface Links {
        self: string;
    }
    interface LinksPaginated {
        self: string;
        first?: string;
        prev?: string;
        next?: string;
        last?: string;
    }
}

export = CdsBankingHttpResponse;