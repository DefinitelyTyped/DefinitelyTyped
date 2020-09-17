// Type definitions for zarinpal-checkout 0.2.7
// Project: https://github.com/siamak/zarinpal-checkout
// Definitions by: Omid Seyfan <https://github.com/iamomiid>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module 'zarinpal-checkout' {
    export interface Authroity {
        Authority: string;
        Amount: string;
        Channel: string;
        Date: string;
    }

    export interface PaymentRequestInput {
        Amount: number;
        CallbackURL: string;
        Description: string;
        Email?: string;
        Mobile?: string;
    }

    export interface PaymentRequestOutput {
        status: number;
        authority: string;
        url: string;
    }

    export interface PaymentVerificationInput {
        Amount: number;
        Authority: string;
    }

    export interface PaymentVerificationOutput {
        status: number;
        RefID: number;
    }

    export interface UnverifiedTransactionsOutput {
        status: number;
        authorities: Authroity[];
    }

    export interface RefreshAuthorityInput {
        Expire: number;
        Authority: string;
    }

    export interface RefreshAuthorityOutput {
        status: number;
    }

    interface ZarinPalInstance {
        PaymentRequest(input: PaymentRequestInput): Promise<PaymentRequestOutput>;
        PaymentVerification(input: PaymentVerificationInput): Promise<PaymentVerificationOutput>;
        UnverifiedTransactions(): Promise<UnverifiedTransactionsOutput>;
        RefreshAuthority(input: RefreshAuthorityInput): Promise<RefreshAuthorityOutput>;
    }

    interface ZarinPal {
        create(merchantID: string, sandbox: boolean): ZarinPalInstance;
    }

    const zarinpal: ZarinPal;

    export default zarinpal;
}
