// Type definitions for non-npm package plaid-link-browser 2.0
// Project: https://github.com/plaid/link
// Definitions by: Aaron Holderman <https://github.com/afholderman>
//                 Hannes Kindströmmer <https://github.com/brolaugh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare global {
    interface Window {
        Plaid: {
            create(params: Plaid.CreateConfig): Plaid.LinkHandler;
            version: string;
        };
    }
}

export namespace Plaid {
    interface CreateConfig {
        clientName?: string | undefined;
        product?: Product[] | undefined;
        key?: string | undefined;
        env?: Environment | undefined;
        onSuccess: OnSuccess;
        onExit?: OnExit | undefined;
        onEvent?: OnEvent | undefined;
        onLoad?: OnLoad | undefined;
        language?: Language | undefined;
        linkCustomizationName?: string | undefined;
        countryCodes?: Country[] | undefined;
        webhook?: string | undefined;
        userLegalName?: string | undefined;
        userEmailAddress?: string | undefined;
        token?: string | undefined;
        isWebView?: boolean | undefined;
        oauthNonce?: string | undefined;
        oauthRedirectUri?: string | undefined;
        oauthStateId?: string | undefined;
        receivedRedirectUri?: string | null | undefined;
    }

    type OnSuccess = (public_token: string, metadata: OnSuccessMetaData) => void;
    type OnExit = (error: Error | null, metadata: OnExitMetaData) => void;
    type OnEvent = (eventName: EventName, metadata: OnEventMetaData) => void;
    type OnLoad = () => void;

    interface LinkHandler {
        open: (institution_id?: string) => void; // the connect flow skips the 'Select your bank' step if `institution_id` is provided
        exit: (options?: ExitOptions) => void;
        destroy: () => void;
        institutions: Institution[];
    }

    type Product = 'transactions' | 'auth' | 'identity' | 'income' | 'assets' | 'investments' | 'liabilities';
    type Environment = 'development' | 'sandbox' | 'production';
    type Language = 'en' | 'fr' | 'es';
    type Country = 'US' | 'CA' | 'GB';

    type VerificationStatus = 'pending_automatic_verification' | 'pending_manual_verification' | 'manually_verified';
    type ViewName =
        | 'CONNECTED'
        | 'CREDENTIAL'
        | 'ERROR'
        | 'EXIT'
        | 'LOADING'
        | 'MFA'
        | 'NUMBERS'
        | 'RECAPTCHA'
        | 'SELECT_ACCOUNT'
        | 'SELECT_INSTITUTION';
    type EventName =
        | 'ERROR'
        | 'EXIT'
        | 'HANDOFF'
        | 'OPEN'
        | 'OPEN_MY_PLAID'
        | 'SEARCH_INSTITUTION'
        | 'SELECT_INSTITUTION'
        | 'SUBMIT_CREDENTIALS'
        | 'SUBMIT_MFA'
        | 'TRANSITION_VIEW';
    type ExitStatus =
        | 'requires_questions'
        | 'requires_selections'
        | 'requires_code'
        | 'choose_device'
        | 'requires_credentials'
        | 'institution_not_found';

    interface Institution {
        name: string;
        institution_id: string;
        auth: boolean;
        transactions: boolean;
    }
    interface Account {
        id: string;
        name: string;
        mask: string;
        type: string;
        subtype: string;
        verification_status: VerificationStatus;
    }
    interface Error {
        display_message: string;
        error_code: string;
        error_message: string;
        error_type: string;
    }
    interface OnSuccessMetaData {
        link_session_id: string;
        institution: {
            name: string;
            institution_id: string;
        };
        accounts: Account[];
    }
    interface OnExitMetaData {
        link_session_id: string;
        request_id: string;
        institution: Institution;
        status: ExitStatus;
    }
    interface OnEventMetaData {
        error_code: string;
        error_message: string;
        error_type: string;
        exit_status: ExitStatus;
        institution_id: string;
        institution_name: string;
        institution_search_query: string;
        link_session_id: string;
        mfa_type: string;
        request_id: string;
        timestamp: string;
        view_name: ViewName;
    }
    interface ExitOptions {
        force: boolean;
    }
}
