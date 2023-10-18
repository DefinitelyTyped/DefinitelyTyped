declare namespace ZarinPal {
    interface Authority {
        Authority: string;
        Amount: string;
        Channel: string;
        Date: string;
    }

    interface PaymentRequestInput {
        Amount: number;
        CallbackURL: string;
        Description: string;
        Email?: string | undefined;
        Mobile?: string | undefined;
    }

    interface PaymentRequestOutput {
        status: number;
        authority: string;
        url: string;
    }

    interface PaymentVerificationInput {
        Amount: number;
        Authority: string;
    }

    interface PaymentVerificationOutput {
        status: number;
        RefID: number;
    }

    interface UnverifiedTransactionsOutput {
        status: number;
        authorities: Authority[];
    }

    interface RefreshAuthorityInput {
        Expire: number;
        Authority: string;
    }

    interface RefreshAuthorityOutput {
        status: number;
    }

    interface ZarinPalInstance {
        PaymentRequest(input: PaymentRequestInput): Promise<PaymentRequestOutput>;
        PaymentVerification(input: PaymentVerificationInput): Promise<PaymentVerificationOutput>;
        UnverifiedTransactions(): Promise<UnverifiedTransactionsOutput>;
        RefreshAuthority(input: RefreshAuthorityInput): Promise<RefreshAuthorityOutput>;
    }
}

declare const ZarinPal: { create(merchantID: string, sandbox: boolean): ZarinPal.ZarinPalInstance };

export = ZarinPal;
