// Type definitions for react-plaid-link 1.3
// Project: https://github.com/pbernasconi/react-plaid-link
// Definitions by: KeevanDance <https://github.com/DanceParty>
//                 Mike Cousins <https://github.com/mikecousins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import * as React from 'react';

export interface PlaidLinkProps {
    // ApiVersion flag to use new version of Plaid API
    apiVersion?: string;

    // Displayed once a user has successfully linked their account
    clientName: string;

    // The Plaid API environment on which to create user accounts.
    // For development and testing, use tartan. For production, use production
    env: 'tartan' | 'sandbox' | 'development' | 'production';

    // Open link to a specific institution, for a more custom solution
    institution?: string;

    // The public_key associated with your account; available from
    // the Plaid dashboard (https://dashboard.plaid.com)
    publicKey: string;

    // The Plaid products you wish to use, an array containing some of connect,
    // auth, identity, income, transactions, assets, liabilities
    product: Array<
        | 'connect' // legacy product name
        | 'info' // legacy product name
        | 'auth'
        | 'identity'
        | 'income'
        | 'transactions'
        | 'assets'
        | 'liabilities'
        | 'investments'
        | 'payment_initiation'
    >;

    // Specify an existing user's public token to launch Link in update mode.
    // This will cause Link to open directly to the authentication step for
    // that user's institution.
    token?: string;

    // Specify a user object to enable all Auth features. Reach out to your
    // account manager or integrations@plaid.com to get enabled. See the Auth
    // [https://plaid.com/docs#auth] docs for integration details.
    user?: {
        legalName?: string;
        emailAddress?: string;
    };

    // Set to true to launch Link with the 'Select Account' pane enabled.
    // Allows users to select an individual account once they've authenticated
    selectAccount?: boolean;

    // Specify a webhook to associate with a user.
    webhook?: string;

    // A function that is called when a user has successfully onboarded their
    // account. The function should expect two arguments, the public_key and a
    // metadata object
    onSuccess: (
        publicToken: string,
        metadata: {
            link_session_id: string;
            institution: { name: string; institution_id: string };
            accounts: Array<{
                id: string;
                name: string;
                mask: string;
                type: string;
                subtype: string;
                verification_status:
                    | 'pending_automatic_verification'
                    | 'pending_manual_verification'
                    | 'manually_verified'
                    | null;
            }>;
        }
    ) => void;

    // A function that is called when a user has specifically exited Link flow
    onExit?: (
        error: {
            error_type:
                | 'INVALID_REQUEST'
                | 'INVALID_INPUT'
                | 'INSTITUTION_ERROR'
                | 'RATE_LIMIT_EXCEEDED'
                | 'API_ERROR'
                | 'ITEM_ERROR'
                | 'ASSET_REPORT_ERROR';
            error_code: string;
            error_message: string;
            display_message: string | null;
        } | null,
        metadata: {
            link_session_id: string | null;
            request_id: string | null;
            institution: {
                name: string | null;
                institution_id: string | null;
            };
            status:
                | 'requires_questions'
                | 'requires_selections'
                | 'requires_code'
                | 'choose_device'
                | 'requires_credentials'
                | 'institution_not_found';
        }
    ) => void;

    // A function that is called when the Link module has finished loading.
    // Calls to plaidLinkHandler.open() prior to the onLoad callback will be
    // delayed until the module is fully loaded.
    onLoad?: () => void;

    // A function that is called during a user's flow in Link.
    // See
    onEvent?: (
        eventName:
            | 'ERROR'
            | 'EXIT'
            | 'HANDOFF'
            | 'OPEN'
            | 'OPEN_MY_PLAID'
            | 'SEARCH_INSTITUTION'
            | 'SELECT_INSTITUTION'
            | 'SUBMIT_CREDENTIALS'
            | 'SUBMIT_MFA'
            | 'TRANSITION_VIEW',
        metadata: {
            error_code?: string | null;
            error_message?: string | null;
            error_type?:
                | 'INVALID_REQUEST'
                | 'INVALID_INPUT'
                | 'INSTITUTION_ERROR'
                | 'RATE_LIMIT_EXCEEDED'
                | 'API_ERROR'
                | 'ITEM_ERROR'
                | 'ASSET_REPORT_ERROR'
                | null;
            exit_status?: string | number | null;
            institution_id: string;
            institution_name: string;
            institution_search_query?: string | null;
            link_session_id: string;
            mfa_type?: string | null;
            request_id: string;
            timestamp: string;
            view_name?:
                | 'CONNECTED'
                | 'CREDENTIAL'
                | 'ERROR'
                | 'EXIT'
                | 'LOADING'
                | 'MFA'
                | 'RECAPTCHA'
                | 'SELECT_ACCOUNT'
                | 'SELECT_INSTITUTION'
                | null;
        }
    ) => void;

    // Button Styles as an Object
    style?: React.CSSProperties;

    // Button Class names as a String
    className?: string;
}

declare class PlaidLink extends React.Component<PlaidLinkProps> {}

export default PlaidLink;
