// Type definitions for midtrans-client 1.0

declare module 'midtrans-client' {
    interface MidtransClientOptions {
        isProduction: boolean;
        serverKey: string;
        clientKey: string;
    }

    interface TransactionDetails {
        order_id: string;
        gross_amount: number;
    }

    interface SnapTransactionParameters {
        transaction_details: TransactionDetails;
    }

    interface SnapTransactionResponse {
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
}
