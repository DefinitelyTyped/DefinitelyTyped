// Type definitions for hellosign-embedded 2.0
// Project: https://github.com/hellosign/hellosign-embedded
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
//                 Ali Zhdanov <https://github.com/alizhdanov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

export declare module HelloSign {
    interface ClassNames {
        BASE: 'x-hellosign-embedded';
        BASE_IN_MODAL: 'x-hellosign-embedded--in-modal';
        IFRAME: 'x-hellosign-embedded__iframe';
        MODAL_CLOSE: 'x-hellosign-embedded__modal-close';
        MODAL_CLOSE_BTN: 'x-hellosign-embedded__modal-close-button';
        MODAL_CONTENT: 'x-hellosign-embedded__modal-content';
        MODAL_SCREEN: 'x-hellosign-embedded__modal-screen';
    }

    interface Events {
        ERROR: 'error';
        SEND: 'send';
        CANCEL: 'cancel';
        CLOSE: 'close';
        CREATE_TEMPLATE: 'createTemplate';
        DECLINE: 'decline';
        FINISH: 'finish';
        MESSAGE: 'message';
        OPEN: 'open';
        READY: 'ready';
        REASSIGN: 'reassign';
        SIGN: 'sign';
    }

    interface Locales {
        CS_CZ: 'cs_CZ';
        DA_DK: 'da_DK';
        DE_DE: 'de_DE';
        EN_US: 'en_US';
        ES_ES: 'es_ES';
        ES_MX: 'es_MX';
        FR_FR: 'fr_FR';
        IT_IT: 'it_IT';
        JA_JP: 'ja_JP';
        NL_NL: 'nl_NL';
        PL_PL: 'pl_PL';
        PT_BR: 'pt_BR';
        SV_SE: 'sv_SE';
        ZH_CN: 'zh_CN';
    }

    interface Messages {
        APP_CONFIGURE: 'hellosign:configure';
        APP_ERROR: 'hellosign:error';
        APP_INITIALIZE: 'hellosign:initialize';
        APP_VERIFY_DOMAIN_REQUEST: 'hellosign:verifyDomainRequest';
        APP_VERIFY_DOMAIN_RESPONSE: 'hellosign:verifyDomainResponse';
        USER_CANCEL_REQUEST: 'hellosign:userCancelRequest';
        USER_CREATE_TEMPLATE: 'hellosign:userCreateTemplate';
        USER_DECLINE_REQUEST: 'hellosign:userDeclineRequest';
        USER_FINISH_REQUEST: 'hellosign:userFinishRequest';
        USER_REASSIGN_REQUEST: 'hellosign:userReassignRequest';
        USER_SEND_REQUEST: 'hellosign:userSendRequest';
        USER_SIGN_REQUEST: 'hellosign:userSignRequest';
    }

    export interface Options {
        allowCancel?: boolean | undefined;
        clientId?: string | undefined;
        container?: HTMLElement | undefined;
        debug?: boolean | undefined;
        hideHeader?: boolean | undefined;
        locale?: Locales[keyof Locales] | undefined;
        redirectTo?: string | undefined;
        requestingEmail?: string | undefined;
        skipDomainVerification?: boolean | undefined;
        testMode?: boolean | undefined;
        timeout?: number | undefined;
        whiteLabeling?: object | undefined;
    }

    interface Singature {
        signer_name: string;
        signer_email_address: string;
        order?: number | undefined;
    }

    interface SendEventPayload {
        signatureRequestId: string;
        signatureRequestInfo: {
            title: string;
            message: string;
            signatures: Singature[];
            ccEmailAddresses: string[];
        };
    }

    interface SignEventPayload {
        signatureId: string;
    }

    interface ErrorEventPyload {
        signatureId: string;
        code: string;
    }

    interface SignerRole {
        name: string;
        order?: number | undefined;
    }

    interface CreateTemplateEventPyload {
        templateId: string;
        templateInfo: {
            title: string;
            message: string;
            signerRoles: SignerRole;
            ccRoles: string;
        };
    }

    interface DeclineEventPyload {
        signatureId: string;
        reason: string;
    }

    interface MessageEventPayload {
        type: Messages;
        payload?: object | undefined;
    }

    interface OpenEventPayload {
        url: string;
        iFrameUrl: string;
    }

    interface ReadyEventPayload {
        signatureId: string;
    }

    interface ReassignEventPayload {
        signatureId: string;
        name: string;
        email: string;
        reason: string;
    }

    type CB = (d: any) => void;

    class HelloSign {
        constructor(opts?: Options);

        static classNames: ClassNames;

        static events: Events;

        static locales: Locales;

        static messages: Messages;

        static version: string;

        readonly element: HTMLElement;

        readonly isOpen: boolean;

        readonly isReady: boolean;

        open: (url: string, opts?: Options) => void;

        close: () => void;

        on(name: Events['CLOSE'] | Events['CANCEL'] | Events['FINISH'], cb: () => void): void;
        on(name: Events['CREATE_TEMPLATE'], cb: (data: CreateTemplateEventPyload) => void): void;
        on(name: Events['DECLINE'], cb: (data: DeclineEventPyload) => void): void;
        on(name: Events['ERROR'], cb: (data: ErrorEventPyload) => void): void;
        on(name: Events['MESSAGE'], cb: (data: MessageEventPayload) => void): void;
        on(name: Events['OPEN'], cb: (data: OpenEventPayload) => void): void;
        on(name: Events['READY'], cb: (data: ReadyEventPayload) => void): void;
        on(name: Events['REASSIGN'], cb: (data: ReassignEventPayload) => void): void;
        on(name: Events['SEND'], cb: (data: SendEventPayload) => void): void;
        on(name: Events['SIGN'], cb: (data: SignEventPayload) => void): void;

        once(name: Events['CLOSE'] | Events['CANCEL'] | Events['FINISH'], cb: () => void): void;
        once(name: Events['CREATE_TEMPLATE'], cb: (data: CreateTemplateEventPyload) => void): void;
        once(name: Events['DECLINE'], cb: (data: DeclineEventPyload) => void): void;
        once(name: Events['ERROR'], cb: (data: ErrorEventPyload) => void): void;
        once(name: Events['MESSAGE'], cb: (data: MessageEventPayload) => void): void;
        once(name: Events['OPEN'], cb: (data: OpenEventPayload) => void): void;
        once(name: Events['READY'], cb: (data: ReadyEventPayload) => void): void;
        once(name: Events['REASSIGN'], cb: (data: ReassignEventPayload) => void): void;
        once(name: Events['SEND'], cb: (data: SendEventPayload) => void): void;
        once(name: Events['SIGN'], cb: (data: SignEventPayload) => void): void;

        off(name: Events['CLOSE'] | Events['CANCEL'] | Events['CREATE_TEMPLATE'] | Events['DECLINE'] |
              Events['ERROR'] | Events['FINISH'] | Events['MESSAGE'] | Events['OPEN'] | Events['READY'] |
              Events['REASSIGN'] | Events['SEND'] | Events['SIGN'],
            cb?: CB): void;
    }
}

export as namespace HelloSign;

export default HelloSign.HelloSign;
