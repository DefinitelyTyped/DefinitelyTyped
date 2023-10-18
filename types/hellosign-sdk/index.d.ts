/// <reference types="node" />
import { IncomingMessage } from "http";

declare class HelloSign {
    constructor(options: HelloSign.HelloSignOptions);

    account: HelloSign.AccountModule;

    signatureRequest: HelloSign.SignatureRequestModule;

    embedded: HelloSign.EmbeddedModule;

    oauth: HelloSign.OAuthModule;

    team: HelloSign.TeamModule;

    template: HelloSign.TemplateModule;

    reports: HelloSign.ReportsModule;

    unclaimedDraft: HelloSign.UnclaimedDraftModule;

    apiApp: HelloSign.ApiAppModule;

    setHost: (host: string, port: string, protocol: string) => void;
    setProtocol: (protocol: string) => void;
    setPort: (port: string) => void;
    setClientId: (clientId: string) => void;
    setClientSecret: (clientSecret: string) => void;
    setOauthToken: (oauthToken: string) => void;
    setApiKey: (key: string) => void;
    setUserPassAuth: (username: string, password: string) => void;
    setTimeout: (timeout: number) => void;
    _setApiField: (key: string, value: any) => void;
    getApiField: (key: string) => any;
    isDev: () => boolean;
}

declare namespace HelloSign {
    type GenericObject<T = {}> = T & {
        [key: string]: any;
    };

    type HelloSignOptions =
        | {
            key: string;
        }
        | {
            username: string;
            password: string;
        }
        | {
            key: string;
            client_id: string;
            client_secret: string;
        };

    interface BaseResponse {
        resHeaders: IncomingMessage["headers"];
        statusCode?: IncomingMessage["statusCode"];
        statusMessage?: IncomingMessage["statusMessage"];
    }

    interface ListInfo {
        list_info: {
            num_pages: number;
            num_results: number;
            page: number;
            page_size: number;
        };
    }

    interface BaseAccount {
        account_id: string;
        email_address: string;
        is_locked: boolean;
        is_paid_hs: boolean;
        is_paid_hf: boolean;
        quotas: {
            templates_left: number;
            api_signature_requests_left: number;
            documents_left: number;
        };
    }

    interface Account extends BaseAccount {
        callback_url: string;
        role_code: string;
    }
    interface AccountResponse extends BaseResponse {
        account: Account;
    }
    interface AccountModule {
        get(): Promise<AccountResponse>;
        update(options: { callback_url?: string | undefined }): Promise<AccountResponse>;
        create(options: { email_address: string }): Promise<AccountResponse>;
        verify(options: { email_address: string }): Promise<AccountResponse>;
    }

    interface Signature {
        signature_id: string;
        signer_email_address: string;
        signer_name: string;
        signer_role: string;
        order: number;
        status_code: string | "awaiting_signature" | "signed" | "declined";
        decline_reason: string;
        signed_at: number | null;
        last_viewed_at: number | null;
        last_reminded_at: number | null;
        has_pin: boolean;
        reassigned_by: string;
        reassignment_reason: string;
        error: string | null;
    }
    type Field =
        | string
        | "text"
        | "checkbox"
        | "date_signed"
        | "dropdown"
        | "initials"
        | "radio"
        | "signature"
        | "text-merge"
        | "checkbox-merge";
    interface SignatureRequest<Metadata = GenericObject> {
        test_mode: number;
        signature_request_id: string;
        requester_email_address: string;
        title: string;
        original_title: string;
        subject: string;
        message: string;
        metadata: GenericObject<Metadata>;
        created_at: number;
        is_complete: boolean;
        is_declined: boolean;
        has_error: boolean;
        /**
         * @deprecated
         */
        final_copy_uri: string;
        files_url: string;
        signing_url: string;
        details_url: string;
        cc_email_addresses: string | string[];
        signing_redirect_url: string;
        template_ids: null | string[];
        custom_fields?:
            | Array<
                {
                    name: string;
                    type: "text";
                    value: string;
                    required: boolean;
                    api_id: string;
                    editor: string;
                } | {
                    name: string;
                    type: "checkbox";
                    value: boolean;
                    required: boolean;
                    api_id: string;
                    editor: string;
                }
            >
            | undefined;
        response_data: Array<{
            api_id: string;
            signature_id: string;
            name: string;
            value: string;
            required: boolean;
            type: Field;
        }>;
        signatures: Signature[];
    }
    interface FormField {
        api_id: string;
        type: Field;
        x: number;
        y: number;
        page: number;
        width: number;
        height: number;
        required: boolean;
        signer: number;
        name?: string | undefined;
        validation_type?:
            | "numbers_only"
            | "letters_only"
            | "phone_number"
            | "bank_routing_number"
            | "bank_account_number"
            | "email_address"
            | "zip_code"
            | "social_security_number"
            | "employer_identification_number"
            | "custom_regex"
            | undefined;
    }
    interface SignatureRequestRequestOptions<Metadata = GenericObject> {
        test_mode?: number | undefined;
        clientId?: string;
        file?: string[] | undefined;
        file_url?: string[] | undefined;
        title?: string | undefined;
        subject?: string | undefined;
        message?: string | undefined;
        template_id?: string | undefined;
        template_ids?: string[] | undefined;
        signers: Array<{
            email_address: string;
            name: string;
            role?: string | undefined;
            order?: number | undefined;
            pin?: string | undefined;
            sms_phone_number?: string | undefined;
        }>;
        attachments?:
            | Array<{
                name?: string | undefined;
                instructions?: string | undefined;
                signer_index?: string | undefined;
                required?: boolean | undefined;
            }>
            | undefined;
        custom_fields?:
            | Array<{
                name: string;
                value: string | boolean;
                editor?: string | undefined;
                required?: boolean | undefined;
            }>
            | undefined;
        cc_email_addresses?: string[] | undefined;
        ccs?: Record<string, { email_address: string }> | undefined;
        use_text_tags?: number | undefined;
        hide_text_tags?: number | undefined;
        metadata?: GenericObject<Metadata> | undefined;
        allow_decline?: number | undefined;
        allow_reassign?: number | undefined;
        form_fields_per_document?: FormField[][] | undefined;
        signing_options?:
            | {
                draw?: boolean | undefined;
                type?: boolean | undefined;
                upload?: boolean | undefined;
                phone?: boolean | undefined;
                default: string;
            }
            | undefined;
        field_options?:
            | {
                date_format:
                    | "MM / DD / YYYY"
                    | "MM - DD - YYYY"
                    | "DD / MM / YYYY"
                    | "DD - MM - YYYY"
                    | "YYYY / MM / DD"
                    | "YYYY - MM - DD";
            }
            | undefined;
        signing_redirect_url?: string | undefined;
    }
    interface SignatureRequestResponse extends BaseResponse {
        signature_request: SignatureRequest;
    }
    interface SignatureListRequestResponse extends BaseResponse, ListInfo {
        signature_requests: SignatureRequest[];
    }
    interface DownloadResponse extends BaseResponse {
        file_url?: string | undefined;
        expires_at?: number | undefined;
    }
    type FilesOptions = { file_type: "pdf"; get_url?: boolean; get_data_uri?: boolean } | { file_type: "zip" };
    interface SignatureRequestModule {
        get(signatureRequestId: string): Promise<SignatureRequestResponse>;
        list(params?: {
            page?: number | undefined;
            page_size?: number | undefined;
            query?: string | undefined;
        }): Promise<SignatureListRequestResponse>;
        send(options: SignatureRequestRequestOptions): Promise<SignatureRequestResponse>;
        sendWithTemplate(options: SignatureRequestRequestOptions): Promise<SignatureRequestResponse>;
        remind(requestId: string, options: any): Promise<SignatureRequestResponse>;
        download<Options extends FilesOptions | undefined>(
            requestId: string,
            options?: Options,
        ): Promise<
            Options extends { file_type: "pdf"; get_url: true } ? { file_url: string; expires_at: Date } & BaseResponse
                : Options extends { file_type: "pdf"; get_data_uri: true }
                    ? { data_uri: string; expires_at: Date } & BaseResponse
                : IncomingMessage
        >;
        cancel(requestId: string): Promise<BaseResponse>;
        removeAccess(requestId: string): Promise<BaseResponse>;
        createEmbedded(
            options: Omit<SignatureRequestRequestOptions, "signing_redirect_url">,
        ): Promise<SignatureRequestResponse>;
        createEmbeddedWithTemplate(
            options: Omit<SignatureRequestRequestOptions, "signing_redirect_url">,
        ): Promise<SignatureRequestResponse>;
        releaseHold(requestId: string): Promise<BaseResponse>;
    }

    interface EmbeddedResponse extends BaseResponse {
        embedded: {
            sign_url: string;
            expires_at: number;
            edit_url?: string | undefined;
        };
    }
    interface EmbeddedRequestOptions {
        test_mode?: number | undefined;
        template_id: string;
        cc_roles?: any[] | undefined;
        merge_fields?: any[] | undefined;
        /**
         * @deprecated May 2020 use `force_signer_roles` instead
         */
        skip_signer_roles?: any;
        /**
         * @deprecated May 2020 use `force_subject_message` instead
         */
        skip_subject_message?: any;
        force_signer_roles?: any;
        force_subject_message?: any;
        editor_options?:
            | {
                allow_edit_signers?: boolean | undefined;
                allow_edit_documents?: boolean | undefined;
            }
            | undefined;
    }
    interface EmbeddedModule {
        getSignUrl(signatureId: string): Promise<EmbeddedResponse>;
        getEditUrl(templateId: string): Promise<EmbeddedResponse>;
        postEditUrl(templateId: string, options: EmbeddedRequestOptions): Promise<EmbeddedResponse>;
    }

    interface ReportsRequestOptions {
        test_mode?: number | undefined;
        start_date: string;
        end_date: string;
        report_type: string[];
    }
    interface Report extends Omit<ReportsRequestOptions, "test_mode"> {
        success?: string | undefined;
    }
    interface ReportResponse extends BaseResponse {
        report: Report;
    }
    interface ReportsModule {
        get(options: ReportsRequestOptions): Promise<ReportResponse>;
    }

    interface OAuthRequestOptions {
        state: string;
        code: string;
    }
    interface OAuth extends GenericObject {
        refresh_token?: string | undefined;
    }
    interface OAuthResponse extends BaseResponse {
        oauth: OAuth;
    }
    interface OAuthModule {
        getToken(options: OAuthRequestOptions): Promise<OAuthResponse>;
        refreshToken(refreshToken: string): Promise<OAuthResponse>;
    }

    interface AccountIdOrEmailRequestOptions {
        account_id: string;
    }
    interface AccountIdOrEmailRequestOptions {
        email_address: string;
    }
    interface Team {
        name: string;
        accounts: Array<{
            account_id: string;
            email_address: string;
            is_locked: boolean;
            role_code: string;
        }>;
        invited_accounts: Array<{
            account_id: string;
            email_address: string;
        }>;
    }
    interface TeamResponse extends BaseResponse {
        team: Team;
    }
    interface TeamModule {
        get(): Promise<TeamResponse>;
        create(options: Pick<Team, "name">): Promise<TeamResponse>;
        update(options: Pick<Team, "name">): Promise<TeamResponse>;
        destroy(): Promise<BaseResponse>;
        addMember(options: AccountIdOrEmailRequestOptions): Promise<TeamResponse>;
        removeMember(
            options: { new_owner_email_address?: string | undefined } & AccountIdOrEmailRequestOptions,
        ): Promise<TeamResponse>;
    }

    interface CustomFieldTemplate {
        name: string;
        type: string;
        signer?: string | undefined;
        x: number;
        y: number;
        width: number;
        height: number;
        required: boolean;
        api_id: string;
        group?: string | undefined;
        avg_text_length: {
            num_lines: number;
            num_chars_per_line: number;
        };
        /**
         * @deprecated Use `form_fields` under the `documents` array instead.
         */
        named_form_fields: string;
        /**
         * @deprecated
         */
        reusable_form_id: string;
    }

    interface Template<Metadata = GenericObject> extends
        Partial<{
            template_id: string;
            title: string;
            message: string;
            metadata: GenericObject<Metadata>;
            signer_roles: Array<{
                name: string;
                order: number;
            }>;
            cc_roles: Array<{
                name: string;
            }>;
            documents: Array<{
                name: string;
                index: number;
                field_groups: Array<{
                    name: string;
                    rule: string;
                }>;
                form_fields: Array<{
                    api_id: string;
                    name: string;
                    type: string;
                    x: number;
                    y: number;
                    width: number;
                    height: number;
                    required: boolean;
                    group?: string | undefined;
                }>;
                custom_fields: CustomFieldTemplate[];
            }>;
            custom_fields: CustomFieldTemplate[];
            accounts: BaseAccount[];
            is_creator: boolean;
            is_embedded: boolean;
            can_edit: boolean;
            is_locked: boolean;
        }>
    {}
    interface TemplateResponse extends BaseResponse {
        template: Template;
    }
    interface TemplatesResponse extends BaseResponse, ListInfo {
        templates: Template[];
    }
    interface TemplateModule {
        list(params?: {
            page?: number | undefined;
            page_size?: number | undefined;
            query?: string | undefined;
        }): Promise<TemplatesResponse>;
        get(templateId: string): Promise<TemplateResponse>;
        addUser(templateId: string, user: AccountIdOrEmailRequestOptions): Promise<TemplateResponse>;
        removeUser(templateId: string, user: AccountIdOrEmailRequestOptions): Promise<TemplateResponse>;
        createEmbeddedDraft(options: Template): Promise<TemplateResponse>;
        delete(templateId: string): Promise<BaseResponse>;
        files: <Options extends FilesOptions | undefined>(
            templateId: string,
            options?: Options,
        ) => Promise<
            Options extends { file_type: "pdf"; get_url: true } ? { file_url: string; expires_at: Date } & BaseResponse
                : Options extends { file_type: "pdf"; get_data_uri: true }
                    ? { data_uri: string; expires_at: Date } & BaseResponse
                : IncomingMessage
        >;
    }

    interface UnclaimedDraft {
        signature_request_id: string;
        claim_url: string;
        signing_redirect_url: string;
        requesting_redirect_url?: string | undefined;
        expires_at: number;
        test_mode?: number | undefined;
    }
    interface UnclaimedDraftResponse extends BaseResponse {
        unclaimed_draft: UnclaimedDraft;
    }
    interface UnclaimedDraftRequestOptions<Metadata = GenericObject> {
        test_mode?: number | undefined;
        file?: string[] | undefined;
        file_url?: string[] | undefined;
        type: string;
        subject?: string | undefined;
        message?: string | undefined;
        signers?:
            | Array<{
                email_address?: string | undefined;
                name?: string | undefined;
                order?: number | undefined;
            }>
            | undefined;
        attachments?:
            | Array<{
                name?: string | undefined;
                instructions?: string | undefined;
                signer_index?: string | undefined;
                required?: boolean | undefined;
            }>
            | undefined;
        custom_fields?:
            | Array<{
                name: string;
                value: string | boolean;
                editor?: string | undefined;
                required?: boolean | undefined;
            }>
            | undefined;
        cc_email_addresses?: string[] | undefined;
        signing_redirect_url?: string | undefined;
        requesting_redirect_url?: string | undefined;
        use_text_tags?: number | undefined;
        use_preexisting_fields?: boolean | undefined;
        hide_text_tags?: number | undefined;
        metadata?: GenericObject<Metadata> | undefined;
        allow_decline?: number | undefined;
        form_fields_per_document?: FormField[][] | undefined;
        signing_options?:
            | {
                draw?: boolean | undefined;
                type?: boolean | undefined;
                upload?: boolean | undefined;
                phone?: boolean | undefined;
                default: string;
            }
            | undefined;
        field_options?:
            | {
                date_format:
                    | "MM / DD / YYYY"
                    | "MM - DD - YYYY"
                    | "DD / MM / YYYY"
                    | "DD - MM - YYYY"
                    | "YYYY / MM / DD"
                    | "YYYY - MM - DD";
            }
            | undefined;
        is_for_embedded_signing?: number | undefined;
    }
    interface UnclaimedDraftModule {
        create(options: UnclaimedDraftRequestOptions): Promise<UnclaimedDraftResponse>;
        createEmbedded(options: UnclaimedDraftRequestOptions): Promise<UnclaimedDraftResponse>;
        createEmbeddedWithTemplate(options: UnclaimedDraftRequestOptions): Promise<UnclaimedDraftResponse>;
        editAndResend(
            requestId: string,
            options: Partial<UnclaimedDraftRequestOptions>,
        ): Promise<UnclaimedDraftResponse>;
    }

    type HellosignEvents =
        | "signature_request_viewed"
        | "signature_request_signed"
        | "signature_request_downloadable"
        | "signature_request_sent"
        | "signature_request_declined"
        | "signature_request_reassigned"
        | "signature_request_remind"
        | "signature_request_all_signed"
        | "signature_request_email_bounce"
        | "signature_request_invalid"
        | "signature_request_canceled"
        | "signature_request_prepared"
        | "file_error"
        | "unknown_error"
        | "sign_url_invalid"
        | "account_confirmed"
        | "template_created"
        | "template_error"
        | "callback_test";

    interface Event<Metadata = GenericObject> {
        /**
         * @deprecated Use `reported_for_account_id` instead
         */
        account_guid: string;
        /**
         * @deprecated Use `reported_for_app_id` instead
         */
        client_id: string;
        event: {
            event_time: string;
            event_type: HellosignEvents;
            event_hash: string;
            event_metadata: GenericObject<
                {
                    related_signature_id?: string | undefined;
                    reported_for_account_id: string;
                    reported_for_app_id: string;
                } & Metadata
            >;
        };
    }
    type EventResponse<Response = SignatureRequestResponse> =
        & Partial<AccountResponse>
        & Partial<SignatureRequestResponse>
        & Partial<TemplateResponse>
        & Event
        & Response;

    interface ApiApp {
        client_id: string;
        created_at: number;
        name: string;
        domain: string;
        callback_url: string;
        is_approved: boolean;
        owner_account: {
            account_id: string;
            email_address: string;
        };
        options: {
            can_insert_everywhere: boolean;
        };
        oauth: null | {
            callback_url: string;
            secret: string;
            scopes: string[];
            charges_users: boolean;
        };
        white_labeling_options: GenericObject;
    }
    interface ApiAppResponse extends BaseResponse {
        api_app: ApiApp;
    }
    interface ApiAppListResponse extends BaseResponse, ListInfo {
        api_apps: ApiApp[];
    }
    interface ApiAppRequestOptions {
        name?: string | undefined;
        domain?: string | undefined;
        callback_url?: string | undefined;
        custom_logo_file?: any;
        oauth?:
            | {
                callback_url: string;
                scopes: string;
            }
            | undefined;
        white_labeling_options?: any[] | undefined;
        options?:
            | {
                can_insert_everywhere?: boolean | undefined;
            }
            | undefined;
    }
    interface ApiAppModule {
        get(clientId: string): Promise<ApiAppResponse>;
        list(params?: { page?: number | undefined; page_size?: number | undefined }): Promise<ApiAppListResponse>;
        create(clientId: string, options: ApiAppRequestOptions): Promise<ApiAppResponse>;
        update(clientId: string, options: ApiAppRequestOptions): Promise<ApiAppResponse>;
        delete(clientId: string): Promise<BaseResponse>;
    }
}

export = HelloSign;
