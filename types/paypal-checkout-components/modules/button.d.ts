import { Environment, ButtonStyle } from './configuration';

import { AuthorizationData, AuthorizationResponse, CancellationData } from './callback-data';

export enum FundingOption {
    CREDIT,
    CARD,
    VENMO,
    ELV,
    PAYPAL,
}

export interface ButtonRenderer {
    render(
        options: {
            env?: Environment | undefined;
            style?: ButtonStyle | undefined;
            locale?: string | undefined;

            payment?: (() => Promise<string>) | undefined;
            onAuthorize: (data: AuthorizationData, actions: object) => Promise<AuthorizationResponse>;
            onCancel?: ((data: CancellationData, actions: object) => void) | undefined;
            onError?: ((error: string) => void) | undefined;
            onShippingChange?: (() => void) | undefined;
            onAuth?: ((data: string | object) => object) | undefined;
            accessToken?: (() => void) | undefined;
            onClose?: (() => void) | undefined;

            funding?: {
                allowed?: FundingOption[] | undefined;
                disallowed?: FundingOption[] | undefined;
            } | undefined;

            sessionID?: string | undefined;
            buttonSessionID?: string | undefined;
            meta?: object | undefined;
            stage?: string | undefined;
            stageUrl?: string | undefined;
            authCode?: string | undefined;
            localhostUrl?: string | undefined;
            checkoutUri?: string | undefined;
            client?: object | undefined;
            commit?: boolean | undefined;
            experience?: object | undefined;
            fundingSource?: string | undefined;
            fundingOffered?: object | undefined;
            logLevel?: string | undefined;
            test?: object | undefined;
        },
        selector: string,
    ): void;
}

export interface ButtonsRenderer {
    (
        options: {
            fundingSource?: string | undefined;
            createOrder?: (() => Promise<string>) | undefined;
            createBillingAgreement?: (() => Promise<string>) | undefined;
            onApprove: (data: AuthorizationData, actions: object) => Promise<AuthorizationResponse>;
            onCancel?: ((data: CancellationData, actions: object) => void) | undefined;
            onError?: ((error: string) => void) | undefined;
        }
    ): ButtonsRenderer;
    render(selector: string): void;
}
