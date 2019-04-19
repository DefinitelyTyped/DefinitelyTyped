// Type definitions for non-npm package plaid-link-browser 2.0
// Project: https://github.com/plaid/link (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Aaron Holderman <https://github.com/afholderman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/
// TypeScript Version: 2.4

declare global {
    interface Window {
        Plaid: {
            create(params: Plaid.CreateConfig): Plaid.LinkHandler;
            open(): void;
            exit(force?: boolean): void;
        };
        linkHandler: Plaid.LinkHandler;
    }
}

export namespace Plaid {
    interface CreateConfig {
        clientName: string;
        product: Product[];
        key: string;
        env: Environment;
        onSuccess: OnSuccess;
        onExit?: OnExit;
        onEvent?: OnEvent;
        onLoad?: OnLoad;
        language?: Language;
        user?: User;
        token?: string;
        isWebView?: boolean;
    }

    type OnSuccess = (
        public_token: string,
        metadata: OnSuccessMetaData
    ) => void;
    type OnExit = (error: Error | null, metadata: OnExitMetaData) => void;
    type OnEvent = (eventName: EventName, metadata: OnEventMetaData) => void;
    type OnLoad = () => void;

    interface LinkHandler {
        open: () => void;
        institutions: Institution[];
    }
    type Product = "transactions" | "auth" | "identity" | "income" | "assets";
    type Environment = "development" | "sandbox" | "production";
    type Language = "en" | "fr";
    type VerificationStatus =
        | "pending_automatic_verification"
        | "pending_manual_verification"
        | "manually_verified";
    type EventName =
        | "ERROR"
        | "EXIT"
        | "HANDOFF"
        | "OPEN"
        | "OPEN_MY_PLAID"
        | "SEARCH_INSTITUTION"
        | "SELECT_INSTITUTION"
        | "TRANSITION_VIEW";
    interface User {
        legalName: string;
        emailAddress: string;
    }
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
        status: string;
    }
    interface OnEventMetaData {
        error_code: string;
        error_message: string;
        error_type: string;
        exit_status: string;
        institution_id: string;
        institution_name: string;
        institution_search_query: string;
        link_session_id: string;
        mfa_type: string;
        request_id: string;
        timestamp: string;
        view_name: string;
    }
}
