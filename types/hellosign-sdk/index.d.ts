// Type definitions for hellosign-sdk 1.6
// Project: https://github.com/HelloFax/hellosign-nodejs-sdk
// Definitions by: David <https://github.com/dvprrsh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="node" />
import { IncomingMessage } from 'http';

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
    interface AccountResponse {
        account: Account;
    }
    interface AccountModule {
        get(): Promise<AccountResponse>;
        update(options: { callback_url?: string }): Promise<AccountResponse>;
        create(options: { email_address: string }): Promise<AccountResponse>;
        verify(options: { email_address: string }): Promise<AccountResponse>;
    }

    interface Signature {
        signature_id: string;
        signer_email_address: string;
        signer_name: string;
        signer_role: string;
        order: number;
        status_code: string | 'awaiting_signature' | 'signed' | 'declined';
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
        | 'text'
        | 'checkbox'
        | 'date_signed'
        | 'dropdown'
        | 'initials'
        | 'radio'
        | 'signature'
        | 'text-merge'
        | 'checkbox-merge';
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
        custom_fields?: Array<{
            name: string;
            type: 'text' | 'checkbox';
            value: string;
            required: boolean;
            api_id: string;
            editor: string;
        }>;
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
        name?: string;
        validation_type?:
        | 'numbers_only'
        | 'letters_only'
        | 'phone_number'
        | 'bank_routing_number'
        | 'bank_account_number'
        | 'email_address'
        | 'zip_code'
        | 'social_security_number'
        | 'employer_identification_number'
        | 'custom_regex';
    }
    interface SignatureRequestRequestOptions<Metadata = GenericObject> {
        test_mode?: number;
        clientId: string;
        files?: string[];
        title?: string;
        subject?: string;
        message?: string;
        template_id?: string;
        template_ids?: string[];
        signers: Array<{
            email_address: string;
            name: string;
            role?: string;
            order?: number;
            pin?: string;
            sms_phone_number?: string;
        }>;
        attachments?: Array<{
            name?: string;
            instructions?: string;
            signer_index?: string;
            required?: boolean;
        }>;
        custom_fields?: Array<{
            name: string;
            value: string;
            editor?: string;
            required?: boolean;
        }>;
        cc_email_addresses?: string[];
        use_text_tags?: number;
        hide_text_tags?: number;
        metadata?: GenericObject<Metadata>;
        allow_decline?: number;
        allow_reassign?: number;
        form_fields_per_document?: FormField[][];
        signing_options?: {
            draw?: boolean;
            type?: boolean;
            upload?: boolean;
            phone?: boolean;
            default: string;
        };
        field_options?: {
            date_format:
            | 'MM / DD / YYYY'
            | 'MM - DD - YYYY'
            | 'DD / MM / YYYY'
            | 'DD - MM - YYYY'
            | 'YYYY / MM / DD'
            | 'YYYY - MM - DD';
        };
    }
    interface SignatureRequestResponse {
        signature_request: SignatureRequest;
    }
    interface SignatureRequestModule {
        get(signatureRequestId: string): Promise<SignatureRequestResponse>;
        list(params?: {
            page?: number;
            page_size?: number;
            query?: string;
        }): Promise<{ signature_requests: SignatureRequest[] }>;
        send(options: SignatureRequestRequestOptions): Promise<SignatureRequestResponse>;
        sendWithTemplate(options: SignatureRequestRequestOptions): Promise<SignatureRequestResponse>;
        remind(requestId: string, options: any): Promise<SignatureRequestResponse>;
        download(
            requestId: string,
            options: { file_type: string },
            callback: (err: Error, response: IncomingMessage) => void,
        ): void;
        cancel(requestId: string): Promise<any>;
        removeAccess(requestId: string): Promise<any>;
        createEmbedded(options: SignatureRequestRequestOptions): Promise<SignatureRequestResponse>;
        createEmbeddedWithTemplate(options: SignatureRequestRequestOptions): Promise<SignatureRequestResponse>;
        releaseHold(requestId: string): Promise<any>;
    }

    interface EmbeddedResponse {
        embedded: {
            sign_url: string;
            expires_at: number;
            edit_url?: string;
        };
    }
    interface EmbeddedRequestOptions {
        test_mode?: number;
        template_id: string;
        cc_roles?: any[];
        merge_fields?: any[];
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
        editor_options?: {
            allow_edit_signers?: boolean;
            allow_edit_documents?: boolean;
        };
    }
    interface EmbeddedModule {
        getSignUrl(signatureId: string): Promise<EmbeddedResponse>;
        getEditUrl(templateId: string): Promise<EmbeddedResponse>;
        postEditUrl(templateId: string, options: EmbeddedRequestOptions): Promise<EmbeddedResponse>;
    }

    interface ReportsRequestOptions {
        test_mode?: number;
        start_date: string;
        end_date: string;
        report_type: string[];
    }
    interface Report extends Omit<ReportsRequestOptions, 'test_mode'> {
        success?: string;
    }
    interface ReportResponse {
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
        refresh_token?: string;
    }
    interface OAuthResponse {
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
    interface TeamResponse {
        team: Team;
    }
    interface TeamModule {
        get(): Promise<TeamResponse>;
        create(options: Pick<Team, 'name'>): Promise<TeamResponse>;
        update(options: Pick<Team, 'name'>): Promise<TeamResponse>;
        destroy(): Promise<void>;
        addMember(options: AccountIdOrEmailRequestOptions): Promise<TeamResponse>;
        removeMember(
            options: { new_owner_email_address?: string } & AccountIdOrEmailRequestOptions,
        ): Promise<TeamResponse>;
    }

    interface Template<Metadata = GenericObject>
        extends Partial<{
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
                    group?: string;
                }>;
                custom_fields: {
                    name: string;
                    type: string;
                    x: number;
                    y: number;
                    width: number;
                    height: number;
                    required: string;
                    group: string;
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
                };
            }>;
            accounts: BaseAccount[];
            is_creator: boolean;
            is_embedded: boolean;
            can_edit: boolean;
            is_locked: boolean;
        }> { }
    interface TemplateResponse {
        template: Template;
    }
    interface TemplateModule {
        list(): Promise<{ templates: Template[] }>;
        get(templateId: string): Promise<TemplateResponse>;
        addUser(templateId: string, user: AccountIdOrEmailRequestOptions): Promise<TemplateResponse>;
        removeUser(templateId: string, user: AccountIdOrEmailRequestOptions): Promise<TemplateResponse>;
        createEmbeddedDraft(options: Template): Promise<TemplateResponse>;
        delete(templateId: string): Promise<any>;
    }

    interface UnclaimedDraft {
        signature_request_id: string;
        claim_url: string;
        signing_redirect_url: string;
        requesting_redirect_url?: string;
        expires_at: number;
        test_mode?: number;
    }
    interface UnclaimedDraftResponse {
        unclaimed_draft: UnclaimedDraft;
    }
    interface UnclaimedDraftRequestOptions<Metadata = GenericObject> {
        test_mode?: number;
        file?: string[];
        file_url?: string[];
        type: string;
        subject?: string;
        message?: string;
        signers?: Array<{
            email_address?: string;
            name?: string;
            order?: number;
        }>;
        attachments?: Array<{
            name?: string;
            instructions?: string;
            signer_index?: string;
            required?: boolean;
        }>;
        custom_fields?: Array<{
            name: string;
            value: string;
            editor?: string;
            required?: boolean;
        }>;
        cc_email_addresses?: string[];
        signing_redirect_url?: string;
        requesting_redirect_url?: string;
        use_text_tags?: number;
        use_preexisting_fields?: boolean;
        hide_text_tags?: number;
        metadata?: GenericObject<Metadata>;
        allow_decline?: number;
        form_fields_per_document?: FormField[][];
        signing_options?: {
            draw?: boolean;
            type?: boolean;
            upload?: boolean;
            phone?: boolean;
            default: string;
        };
        field_options?: {
            date_format:
            | 'MM / DD / YYYY'
            | 'MM - DD - YYYY'
            | 'DD / MM / YYYY'
            | 'DD - MM - YYYY'
            | 'YYYY / MM / DD'
            | 'YYYY - MM - DD';
        };
        is_for_embedded_signing?: number;
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
        | 'signature_request_viewed'
        | 'signature_request_signed'
        | 'signature_request_downloadable'
        | 'signature_request_sent'
        | 'signature_request_declined'
        | 'signature_request_reassigned'
        | 'signature_request_remind'
        | 'signature_request_all_signed'
        | 'signature_request_email_bounce'
        | 'signature_request_invalid'
        | 'signature_request_canceled'
        | 'signature_request_prepared'
        | 'file_error'
        | 'unknown_error'
        | 'sign_url_invalid'
        | 'account_confirmed'
        | 'template_created'
        | 'template_error'
        | 'callback_test';

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
                    related_signature_id?: string;
                    reported_for_account_id: string;
                    reported_for_app_id: string;
                } & Metadata
            >;
        };
    }
    type EventResponse<Response = SignatureRequestResponse> = Partial<AccountResponse> &
        Partial<SignatureRequestResponse> &
        Partial<TemplateResponse> &
        Event &
        Response;

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
    interface ApiAppResponse {
        api_app: ApiApp;
    }
    interface ApiAppRequestOptions {
        name?: string;
        domain?: string;
        callback_url?: string;
        custom_logo_file?: any;
        oauth?: {
            callback_url: string;
            scopes: string;
        };
        white_labeling_options?: any[];
        options?: {
            can_insert_everywhere?: boolean;
        };
    }
    interface ApiAppModule {
        get(clientId: string): Promise<ApiAppResponse>;
        list(): Promise<{ api_apps: ApiApp[] }>;
        create(clientId: string, options: ApiAppRequestOptions): Promise<ApiAppResponse>;
        update(clientId: string, options: ApiAppRequestOptions): Promise<ApiAppResponse>;
        delete(clientId: string): Promise<any>;
    }
}

export = HelloSign;
