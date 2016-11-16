// Type definitions for hellosign-embedded v1.2.0
// Project: https://github.com/HelloFax/hellosign-embedded
// Definitions by: Brian Surowiec <https://github.com/xt0rted/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module HelloSign {
    interface MessageEvent {
        event: string;
    }

    interface ClientCultures {
        /**
         * English (United States)
         *
         * @default en_US
         */
        EN_US: string;

        /**
         * French (France)
         *
         * @default fr_FR
         */
        FR_FR: string;

        /**
         * German (Germany)
         *
         * @default de_DE
         */
        DE_DE: string;

        /**
         * Swedish (Sweden)
         *
         * @default sv_SE
         */
        SV_SE: string;

        /**
         * Chinese (China)
         *
         * @default zh_CN
         */
        ZH_CN: string;

        /**
         * Danish (Denmark)
         *
         * @default da_DK
         */
        DA_DK: string;

        /**
         * Dutch (The Netherlands)
         * @default nl_NL
         */
        NL_NL: string;

        /**
         * The available client UI cultures
         */
        supportedCultures: string[];
    }

    interface OpenParameters {
        /**
         * The url to open in the child frame
         */
        url?: string;

        /**
         * Where to go after the signature is completed
         */
        redirectUrl?: string;

        /**
         * Whether a cancel button should be displayed
         *
         * @default true
         */
        allowCancel?: boolean;

        /**
         * A listener for X-window messages coming from the child frame
         */
        messageListener?: (eventData: MessageEvent) => void;

        /**
         * One of the HelloSign.CULTURES.supportedCultures
         *
         * @default HelloSign.CULTURES.EN_US
         */
        userCulture?: string;

        /**
         * When true, debugging statements will be written to the console
         *
         * @default false
         */
        debug?: boolean;

        /**
         * When true, domain verification step will be skipped if and only if the Signature Request was created with test_mode=1
         *
         * @default false
         */
        skipDomainVerification?: boolean;

        /**
         * DOM element that will contain the iframe on the page (defaults to document.body)
         */
        container?: Element;

        /**
         * Height of the iFrame (only applicable when a container is specified)
         */
        height?: number;

        /**
         * When true, the header will be hidden.
         * This is only functional for customers with embedded branding enabled.
         *
         * @default false
         */
        hideHeader?: boolean;

        /**
         * The version of the embedded user experience to display to signers (1 = legacy, 2 = responsive).
         * This option is only honored if your account has accessed the API prior to Nov 14, 2015.
         */
        uxVersion?: number;

        /**
         * The email of the person issuing a signature request.
         * Required for allowing 'Me + Others' requests
         */
        requester?: string;

        /**
         * An associative array to be used to customize the app's signer page
         */
        whiteLabelingOptions?: Object;
    }

    interface HelloSignStatic {
        /**
         * The available client UI cultures
         */
        CULTURES: ClientCultures;

        /**
         * The signature request was signed
         *
         * @default signature_request_signed
         */
        EVENT_SIGNED: string;

        /**
         * The signature request was declined
         *
         * @default signature_request_declined
         */
        EVENT_DECLINED: string;

        /**
         * The user closed the iFrame before completing
         *
         * @default signature_request_canceled
         */
        EVENT_CANCELED: string;

        /**
         * An error occurred in the iFrame
         *
         * @default error
         */
        EVENT_ERROR: string;

        /**
         * Initialize using your HelloSign API client ID.
         *
         * @param appClientId The API client ID the request is for.
         */
        init(appClientId: string): void;

        /**
         * Open the signing window.
         *
         * @param params The options to use when opening the signing window.
         */
        open(params: OpenParameters): void;

        /**
         * Close the signing window.
         */
        close(): void;
    }
}

declare var HelloSign: HelloSign.HelloSignStatic;
