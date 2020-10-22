import { Environment, ButtonStyle } from './configuration';

import { AuthorizationData, AuthorizationResponse, CancellationData } from './callback-data';

export enum FundingOption {
    CREDIT,
    CARD,
    VENMO,
    ELV
}

export interface ButtonRenderer {
    render(
        options: {
            env?: Environment;
            style?: ButtonStyle;
            locale?: string;

            payment?: () => Promise<string>;
            onAuthorize: (data: AuthorizationData, actions: object) => Promise<AuthorizationResponse>;
            onCancel?: (data: CancellationData, actions: object) => void;
            onError?: (error: string) => void;
            onShippingChange?: () => void;
            onAuth?: (data: string | object) => object;
            accessToken?: () => void;
            onClose?: () => void;

            funding?: {
                allowed?: FundingOption[];
                disallowed?: FundingOption[];
            };

            sessionID?: string;
            buttonSessionID?: string;
            meta?: object;
            stage?: string;
            stageUrl?: string;
            authCode?: string;
            localhostUrl?: string;
            checkoutUri?: string;
            client?: object;
            commit?: boolean;
            experience?: object;
            fundingSource?: string;
            fundingOffered?: object;
            logLevel?: string;
            test?: object;
        },
        selector: string,
    ): void;
}
