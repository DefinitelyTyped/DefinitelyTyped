// Type definitions for non-npm package plaid-link-browser 2.0
// Project: https://github.com/plaid/react-plaid-link
// Definitions by: Aaron Holderman <https://github.com/afholderman>
//                 Brian Howald <https://github.com/bdhowald>
//                 Hannes Kindströmmer <https://github.com/brolaugh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.3

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

    type AuthTypeSelectFlow = 'flow_type_instant' | 'flow_type_manual';

    type TransferStatus = 'COMPLETE' | 'INCOMPLETE';

    type VerificationStatus =
        | 'automatically_verified'
        | 'manually_verified'
        | 'pending_automatic_verification'
        | 'pending_manual_verification'
        | 'verification_expired'
        | 'verification_failed';

    type VerificationMethod = 'password' | 'phoneotp';

    type ViewName =
        | 'ACCEPT_TOS'
        | 'CONNECTED'
        | 'CONSENT'
        | 'CREDENTIAL'
        | 'DATA_TRANSPARENCY'
        | 'DATA_TRANSPARENCY_CONSENT'
        | 'DOCUMENTARY_VERIFICATION'
        | 'ERROR'
        | 'EXIT'
        | 'KYC_CHECK'
        | 'LOADING'
        | 'MATCHED_CONSENT'
        | 'MATCHED_CREDENTIAL'
        | 'MATCHED_MFA'
        | 'MFA'
        | 'NUMBERS'
        | 'OAUTH'
        | 'RECAPTCHA'
        | 'RISK_CHECK'
        | 'SCREENING'
        | 'SELECT_ACCOUNT'
        | 'SELECT_AUTH_TYPE'
        | 'SELECT_BRAND'
        | 'SELECT_INSTITUTION'
        | 'SELFIE_CHECK'
        | 'UPLOAD_DOCUMENTS'
        | 'VERIFY_SMS';
    type EventName =
        | 'BANK_INCOME_INSIGHTS_COMPLETED'
        | 'CLOSE_OAUTH'
        | 'ERROR'
        | 'EXIT'
        | 'FAIL_OAUTH'
        | 'HANDOFF'
        | 'IDENTITY_VERIFICATION_CLOSE_UI'
        | 'IDENTITY_VERIFICATION_CREATE_SESSION'
        | 'IDENTITY_VERIFICATION_FAIL_SESSION'
        | 'IDENTITY_VERIFICATION_FAIL_STEP'
        | 'IDENTITY_VERIFICATION_OPEN_UI'
        | 'IDENTITY_VERIFICATION_PASS_SESSION'
        | 'IDENTITY_VERIFICATION_PASS_STEP'
        | 'IDENTITY_VERIFICATION_PENDING_REVIEW_STEP'
        | 'IDENTITY_VERIFICATION_RESUME_SESSION'
        | 'IDENTITY_VERIFICATION_RESUME_UI'
        | 'IDENTITY_VERIFICATION_START_STEP'
        | 'MATCHED_SELECT_INSTITUTION'
        | 'MATCHED_SELECT_VERIFY_METHOD'
        | 'OPEN'
        | 'OPEN_MY_PLAID'
        | 'OPEN_OAUTH'
        | 'SEARCH_INSTITUTION'
        | 'SELECT_AUTH_TYPE'
        | 'SELECT_BRAND'
        | 'SELECT_DEGRADED_INSTITUTION'
        | 'SELECT_DOWN_INSTITUTION'
        | 'SELECT_INSTITUTION'
        | 'SUBMIT_ACCOUNT_NUMBER'
        | 'SUBMIT_CREDENTIALS'
        | 'SUBMIT_DOCUMENTS'
        | 'SUBMIT_DOCUMENTS_ERROR'
        | 'SUBMIT_DOCUMENTS_SUCCESS'
        | 'SUBMIT_MFA'
        | 'SUBMIT_ROUTING_NUMBER'
        | 'TRANSITION_VIEW'
        | 'VIEW_DATA_TYPES';
    type ExitStatus =
        | 'choose_device'
        | 'institution_not_found'
        | 'requires_account_selection'
        | 'requires_code'
        | 'requires_credentials'
        | 'requires_oauth'
        | 'requires_questions'
        | 'requires_selections';

    interface Institution {
        institution_id: string;
        name: string;
    }
    interface Account {
        class_type: string | null;
        id: string;
        name: string;
        mask: string | null;
        type: string;
        subtype: string;
        verification_status: VerificationStatus | null;
    }
    interface Error {
        display_message: string | null;
        error_code: string;
        error_message: string;
        error_type: string;
    }
    interface OnSuccessMetaData {
        accounts: Account[];
        institution: Institution | null;
        link_session_id: string;
        transfer_status: TransferStatus | null;
        wallet: {
            name: string;
        } | null;
    }
    interface OnExitMetaData {
        link_session_id: string;
        request_id: string;
        institution: Institution | null;
        status: ExitStatus;
    }
    interface OnEventMetaData {
        account_number_mask: string | null;
        error_code: string | null;
        error_message: string | null;
        error_type: string | null;
        exit_status: ExitStatus | null;
        institution_id: string | null;
        institution_name: string | null;
        institution_search_query: string | null;
        link_session_id: string;
        match_reason: string | null;
        mfa_type: string | null;
        request_id: string;
        routing_number: string | null;
        selection: AuthTypeSelectFlow | VerificationMethod | null;
        timestamp: string;
        view_name: ViewName;
    }
    interface ExitOptions {
        force: boolean;
    }
}
