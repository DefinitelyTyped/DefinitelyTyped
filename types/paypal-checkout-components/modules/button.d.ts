import { Environment, ButtonStyle } from './configuration';

import { AuthorizationData, AuthorizationTokenizePayload, CancellationData } from './callback-data';

export interface Button {
    render(
        options: {
            env?: Environment;
            style?: ButtonStyle;
            locale?: string;

            payment?: () => Promise<string>;
            onAuthorize: (data: AuthorizationData, actions: object) => Promise<AuthorizationTokenizePayload>;
            onCancel?: (data: CancellationData, actions: object) => void;
            onError?: (error: string) => void;
            onShippingChange?: () => void;
            onAuth?: (data: string | object) => object;
            accessToken?: () => void;
            onClose?: () => void;

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
