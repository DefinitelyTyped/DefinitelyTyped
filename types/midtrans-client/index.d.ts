export interface MidtransClientOptions {
    isProduction: boolean;
    serverKey: string;
    clientKey: string;
}

export interface TransactionDetails {
    order_id: string;
    gross_amount: number;
}

export interface SnapTransactionParameters {
    transaction_details: TransactionDetails;
}

export interface SnapTransactionResponse {
    token: string;
    redirect_url: string;
}

export class Snap {
    constructor(options: MidtransClientOptions);
    createTransaction(parameter: SnapTransactionParameters): Promise<SnapTransactionResponse>;
}

export class CoreApi {
    constructor(options: MidtransClientOptions);
    charge(parameter: any): Promise<any>;
}
