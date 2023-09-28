import { Plaid } from "plaid-link";

const plaidConfig: Plaid.CreateConfig = {
    // $ExpectType (eventName: EventName, metadata: OnEventMetaData) => void
    onEvent: (eventName, metadata) => {
        // $ExpectType EventName
        eventName;

        // $ExpectType OnEventMetaData
        metadata;

        // $ExpectType string | null
        metadata.account_number_mask;
        // $ExpectType string | null
        metadata.error_code;
        // $ExpectType string | null
        metadata.error_message;
        // $ExpectType string | null
        metadata.error_type;
        // $ExpectType ExitStatus | null
        metadata.exit_status;
        // $ExpectType string | null
        metadata.institution_id;
        // $ExpectType string | null
        metadata.institution_name;
        // $ExpectType string | null
        metadata.institution_search_query;
        // $ExpectType string
        metadata.link_session_id;
        // $ExpectType string | null
        metadata.match_reason;
        // $ExpectType string | null
        metadata.mfa_type;
        // $ExpectType string
        metadata.request_id;
        // $ExpectType string | null
        metadata.routing_number;
        // $ExpectType AuthTypeSelectFlow | VerificationMethod | null
        metadata.selection;
        // $ExpectType string
        metadata.timestamp;
        // $ExpectType ViewName
        metadata.view_name;
    },
    // $ExpectType (err: Error | null, metadata: OnExitMetaData) => void
    onExit: (err, metadata) => {
        // $ExpectType Error | null
        err;

        if (err) {
            // $ExpectType string | null
            err.display_message;
            // $ExpectType string
            err.error_code;
            // $ExpectType string
            err.error_message;
            // $ExpectType string
            err.error_type;
        }

        // $ExpectType OnExitMetaData
        metadata;

        // $ExpectType Institution | null
        metadata.institution;
        // $ExpectType string
        metadata.link_session_id;
        // $ExpectType string
        metadata.request_id;
        // $ExpectType ExitStatus
        metadata.status;
    },
    // $ExpectType () => void
    onLoad: () => {},
    // $ExpectType (public_token: string, metadata: OnSuccessMetaData) => void
    onSuccess: (public_token, metadata) => {
        // $ExpectType string
        public_token;

        // $ExpectType Account[]
        metadata.accounts;

        if (metadata.accounts[0]) {
            // $ExpectType string | null
            metadata.accounts[0].class_type;
            // $ExpectType string
            metadata.accounts[0].id;
            // $ExpectType string | null
            metadata.accounts[0].mask;
            // $ExpectType string
            metadata.accounts[0].name;
            // $ExpectType string
            metadata.accounts[0].subtype;
            // $ExpectType string
            metadata.accounts[0].type;
            // $ExpectType VerificationStatus | null
            metadata.accounts[0].verification_status;
        }

        // $ExpectType Institution | null
        metadata.institution;

        if (metadata.institution) {
            // $ExpectType string
            metadata.institution.institution_id;
            // $ExpectType string
            metadata.institution.name;
        }

        // $ExpectType string
        metadata.link_session_id;

        // $ExpectType TransferStatus | null
        metadata.transfer_status;

        // $ExpectType { name: string; } | null
        metadata.wallet;
    },
};

// $ExpectType string | undefined
plaidConfig.clientName;
// $ExpectType Country[] | undefined
plaidConfig.countryCodes;
// $ExpectType Environment | undefined
plaidConfig.env;
// $ExpectType boolean | undefined
plaidConfig.isWebView;
// $ExpectType string | undefined
plaidConfig.key;
// $ExpectType Language | undefined
plaidConfig.language;
// $ExpectType string | undefined
plaidConfig.linkCustomizationName;
// $ExpectType string | undefined
plaidConfig.oauthNonce;
// $ExpectType string | undefined
plaidConfig.oauthRedirectUri;
// $ExpectType string | undefined
plaidConfig.oauthStateId;
// $ExpectType OnEvent | undefined
plaidConfig.onEvent;
// $ExpectType OnExit | undefined
plaidConfig.onExit;
// $ExpectType OnLoad | undefined
plaidConfig.onLoad;
// $ExpectType OnSuccess
plaidConfig.onSuccess;
// $ExpectType Product[] | undefined
plaidConfig.product;
// $ExpectType string | null | undefined
plaidConfig.receivedRedirectUri;
// $ExpectType string | undefined
plaidConfig.token;
// $ExpectType string | undefined
plaidConfig.userEmailAddress;
// $ExpectType string | undefined
plaidConfig.userLegalName;
// $ExpectType string | undefined
plaidConfig.webhook;

const mockLinkHandler: Plaid.LinkHandler = {
    // $ExpectType (institution_id: string | undefined) => void
    open: (institution_id) => {
        // $ExpectType string | undefined
        institution_id;
    },
    // $ExpectType (options: ExitOptions | undefined) => void
    exit: (options) => {
        // $ExpectType ExitOptions | undefined
        options;
    },
    // $ExpectType () => void
    destroy: () => {},
};

// AuthTypeSelectFlow
const authTypeSelectFlows: Plaid.AuthTypeSelectFlow[] = [
    "flow_type_instant",
    "flow_type_manual",
];

// Country
const countries: Plaid.Country[] = [
    "CA",
    "DE",
    "DK",
    "EE",
    "ES",
    "FR",
    "GB",
    "IE",
    "IT",
    "LT",
    "LV",
    "NL",
    "NO",
    "PL",
    "SE",
    "US",
];

// Environment
const environments: Plaid.Environment[] = [
    "development",
    "sandbox",
    "production",
];

// EventName
const eventName: Plaid.EventName[] = [
    "BANK_INCOME_INSIGHTS_COMPLETED",
    "CLOSE_OAUTH",
    "ERROR",
    "EXIT",
    "FAIL_OAUTH",
    "HANDOFF",
    "IDENTITY_VERIFICATION_CLOSE_UI",
    "IDENTITY_VERIFICATION_CREATE_SESSION",
    "IDENTITY_VERIFICATION_FAIL_SESSION",
    "IDENTITY_VERIFICATION_FAIL_STEP",
    "IDENTITY_VERIFICATION_OPEN_UI",
    "IDENTITY_VERIFICATION_PASS_SESSION",
    "IDENTITY_VERIFICATION_PASS_STEP",
    "IDENTITY_VERIFICATION_PENDING_REVIEW_STEP",
    "IDENTITY_VERIFICATION_RESUME_SESSION",
    "IDENTITY_VERIFICATION_RESUME_UI",
    "IDENTITY_VERIFICATION_START_STEP",
    "MATCHED_SELECT_INSTITUTION",
    "MATCHED_SELECT_VERIFY_METHOD",
    "OPEN",
    "OPEN_MY_PLAID",
    "OPEN_OAUTH",
    "SEARCH_INSTITUTION",
    "SELECT_AUTH_TYPE",
    "SELECT_BRAND",
    "SELECT_DEGRADED_INSTITUTION",
    "SELECT_DOWN_INSTITUTION",
    "SELECT_INSTITUTION",
    "SUBMIT_ACCOUNT_NUMBER",
    "SUBMIT_CREDENTIALS",
    "SUBMIT_DOCUMENTS",
    "SUBMIT_DOCUMENTS_ERROR",
    "SUBMIT_DOCUMENTS_SUCCESS",
    "SUBMIT_MFA",
    "SUBMIT_ROUTING_NUMBER",
    "TRANSITION_VIEW",
    "VIEW_DATA_TYPES",
];

// ExitStatus
const exitStatuses: Plaid.ExitStatus[] = [
    "choose_device",
    "institution_not_found",
    "requires_account_selection",
    "requires_code",
    "requires_credentials",
    "requires_oauth",
    "requires_questions",
    "requires_selections",
];

// Language
const languages: Plaid.Language[] = [
    "da",
    "de",
    "en",
    "es",
    "et",
    "fr",
    "it",
    "lt",
    "lv",
    "nl",
    "no",
    "po",
    "ro",
    "se",
];

// Products
const productNames: Plaid.Product[] = [
    "assets",
    "auth",
    "employment",
    "identity",
    "identity_verification",
    "income",
    "income_verification",
    "investments",
    "payment_initiation",
    "liabilities",
    "standing_orders",
    "transactions",
    "transfer",
];

// TransferStatus
const transferStatuses: Plaid.TransferStatus[] = [
    "COMPLETE",
    "INCOMPLETE",
];

// VerificationMethod
const verificationMethods: Plaid.VerificationMethod[] = [
    "password",
    "phoneotp",
];

// VerificationStatus
const verificationStatuses: Plaid.VerificationStatus[] = [
    "automatically_verified",
    "manually_verified",
    "pending_automatic_verification",
    "pending_manual_verification",
    "verification_expired",
    "verification_failed",
];

// ViewName
const viewNames: Plaid.ViewName[] = [
    "ACCEPT_TOS",
    "CONNECTED",
    "CONSENT",
    "CREDENTIAL",
    "DATA_TRANSPARENCY",
    "DATA_TRANSPARENCY_CONSENT",
    "DOCUMENTARY_VERIFICATION",
    "ERROR",
    "EXIT",
    "KYC_CHECK",
    "LOADING",
    "MATCHED_CONSENT",
    "MATCHED_CREDENTIAL",
    "MATCHED_MFA",
    "MFA",
    "NUMBERS",
    "OAUTH",
    "RECAPTCHA",
    "RISK_CHECK",
    "SCREENING",
    "SELECT_ACCOUNT",
    "SELECT_AUTH_TYPE",
    "SELECT_BRAND",
    "SELECT_INSTITUTION",
    "SELFIE_CHECK",
    "UPLOAD_DOCUMENTS",
    "VERIFY_SMS",
];
