import * as fs from 'fs';
import { EventResponse, Signature } from 'hellosign-sdk';
import HelloSign = require('hellosign-sdk');

// $ExpectType HelloSign
new HelloSign({ key: 'test', client_id: 'client_id', client_secret: 'client_secret' });
// $ExpectType HelloSign
new HelloSign({ username: 'username', password: 'password' });

const hsClient = new HelloSign({ key: 'test' });
// $ExpectType void
hsClient.setApiKey('key');

// $ExpectType void
hsClient.setClientId('client id');

// $ExpectType void
hsClient.setClientSecret('client secret');

// $ExpectType void
hsClient.setHost('host', 'port', 'protocol');

// $ExpectType void
hsClient.setOauthToken('oauth token');

// $ExpectType void
hsClient.setPort('port');

// $ExpectType void
hsClient.setProtocol('protocol');

// $ExpectType void
hsClient.setTimeout(999);

// $ExpectType void
hsClient.setUserPassAuth('username', 'password');

// $ExpectType void
hsClient._setApiField('dev', true);

// $ExpectType any
hsClient.getApiField('dev');

// $ExpectType boolean
hsClient.isDev();

const baseResponse: HelloSign.BaseResponse = {
    resHeaders: { accept: '*' },
    statusCode: 200,
    statusMessage: 'OK',
};

const listInfo: HelloSign.ListInfo = {
    list_info: {
        num_pages: 2,
        num_results: 20,
        page: 1,
        page_size: 10,
    },
};

// Account module
const accountResponse: HelloSign.AccountResponse = {
    account: {
        callback_url: 'callback_url',
        role_code: 'code',
        account_id: 'account_id',
        email_address: 'email_address',
        is_locked: true,
        is_paid_hs: true,
        is_paid_hf: false,
        quotas: {
            templates_left: 1,
            api_signature_requests_left: 2,
            documents_left: 3,
        },
    },
    ...baseResponse,
};

// $ExpectType Promise<AccountResponse>
hsClient.account.get();

// $ExpectType Promise<AccountResponse>
hsClient.account.update({ callback_url: 'callback_url' });

// $ExpectType Promise<AccountResponse>
hsClient.account.create({ email_address: 'email_address' });

// $ExpectType Promise<AccountResponse>
hsClient.account.verify({ email_address: 'email_address' });

// SignatureRequestModule
const signatureRequestResponse: HelloSign.SignatureRequestResponse = {
    signature_request: {
        test_mode: 0,
        signature_request_id: 'signature_request_id',
        requester_email_address: 'requester_email_address',
        title: 'title',
        original_title: 'original_title',
        subject: 'subject',
        message: 'message',
        metadata: {
            key: 'value',
        },
        created_at: 1,
        is_complete: true,
        is_declined: false,
        has_error: false,
        final_copy_uri: 'final_copy_uri',
        files_url: 'files_url',
        signing_url: 'signing_url',
        details_url: 'details_url',
        cc_email_addresses: ['cc_email_addresses'],
        signing_redirect_url: 'signing_redirect_url',
        custom_fields: [
            {
                name: 'name',
                type: 'text',
                value: 'value',
                required: true,
                api_id: 'api_id',
                editor: 'editor',
            },
            {
                name: 'name',
                type: 'checkbox',
                value: true,
                required: true,
                api_id: 'api_id',
                editor: 'editor',
            },
        ],
        response_data: [
            {
                name: 'name',
                type: 'type',
                value: 'value',
                required: true,
                api_id: 'api_id',
                signature_id: 'signature_id',
            },
        ],
        signatures: [
            {
                signature_id: 'signature_id',
                signer_email_address: 'signer_email_address',
                signer_name: 'signer_name',
                signer_role: 'signer_role',
                order: 1,
                status_code: 'awaiting_signature',
                decline_reason: 'decline_reason',
                signed_at: 1,
                last_viewed_at: 2,
                last_reminded_at: 3,
                has_pin: false,
                reassigned_by: 'reassigned_by',
                reassignment_reason: 'reassignment_reason',
                error: null,
            },
        ],
    },
    ...baseResponse,
};

const signatureListRequestResponse: HelloSign.SignatureListRequestResponse = {
    signature_requests: [signatureRequestResponse.signature_request],
    ...baseResponse,
    ...listInfo,
};

// $ExpectType Promise<SignatureRequestResponse>
hsClient.signatureRequest.get('signature_request_id');

// $ExpectType Promise<SignatureListRequestResponse>
hsClient.signatureRequest.list({ page: 0, page_size: 10, query: 'query' });

// $ExpectType Promise<SignatureRequestResponse>
hsClient.signatureRequest.send({ signers: [{ email_address: 'email_address', name: 'name' }] });

// $ExpectType Promise<SignatureRequestResponse>
hsClient.signatureRequest.sendWithTemplate({
    signers: [{ email_address: 'email_address', name: 'name' }],
    template_id: 'template_id',
});

// $ExpectType Promise<SignatureRequestResponse>
hsClient.signatureRequest.createEmbedded({ signers: [{ email_address: 'email_address', name: 'name' }] });

// $ExpectType Promise<SignatureRequestResponse>
hsClient.signatureRequest.createEmbeddedWithTemplate({
    signers: [{ email_address: 'email_address', name: 'name' }],
    template_id: 'template_id',
});

// $ExpectType Promise<SignatureRequestResponse>
hsClient.signatureRequest.remind('signature_request_id', {});

// $ExpectType Promise<IncomingMessage>
hsClient.signatureRequest.download('signature_request_id');

// $ExpectType Promise<{ file_url: string; expires_at: Date; } & BaseResponse>
hsClient.signatureRequest.download('signature_request_id', { file_type: 'pdf', get_url: true });

// $ExpectType Promise<{ data_uri: string; expires_at: Date; } & BaseResponse>
hsClient.signatureRequest.download('signature_request_id', { file_type: 'pdf', get_data_uri: true });

// $ExpectType Promise<BaseResponse>
hsClient.signatureRequest.cancel('signature_request_id');

// $ExpectType Promise<BaseResponse>
hsClient.signatureRequest.removeAccess('signature_request_id');

// $ExpectType Promise<BaseResponse>
hsClient.signatureRequest.releaseHold('signature_request_id');

export const eventHandler = async (data: EventResponse): Promise<void> => {
    const eventType = data.event.event_type;
    const eventTime: string = data.event.event_time;

    switch (eventType) {
        case 'signature_request_signed':
            return signatureRequestSigned(data);
        case 'signature_request_downloadable':
            return signatureRequestDownloadable(data);
        default:
            return;
    }
};

// EmbeddedModule
const embeddedResponse: HelloSign.EmbeddedResponse = {
    embedded: {
        sign_url: 'sign_url',
        expires_at: 1,
        edit_url: 'edit_url',
    },
    ...baseResponse,
};

// $ExpectType Promise<EmbeddedResponse>
hsClient.embedded.getSignUrl('signature_id');

// $ExpectType Promise<EmbeddedResponse>
hsClient.embedded.getEditUrl('template_id');

// $ExpectType Promise<EmbeddedResponse>
hsClient.embedded.postEditUrl('template_id', { template_id: 'template_id' });

// OAuthModule
const oauthResponse: HelloSign.OAuthResponse = {
    oauth: {
        refresh_token: 'refresh_token',
    },
    ...baseResponse,
};

// $ExpectType Promise<OAuthResponse>
hsClient.oauth.getToken({ state: 'state', code: 'code' });

// $ExpectType Promise<OAuthResponse>
hsClient.oauth.refreshToken('refresh_token');

// TeamModule
const teamResponse: HelloSign.TeamResponse = {
    team: {
        name: 'name',
        accounts: [
            {
                account_id: 'account_id',
                email_address: 'email_address',
                is_locked: false,
                role_code: 'role_code',
            },
        ],
        invited_accounts: [
            {
                account_id: 'account_id',
                email_address: 'email_address',
            },
        ],
    },
    ...baseResponse,
};

// $ExpectType Promise<TeamResponse>
hsClient.team.get();

// $ExpectType Promise<TeamResponse>
hsClient.team.create({ name: 'name' });

// $ExpectType Promise<TeamResponse>
hsClient.team.update({ name: 'name' });

// $ExpectType Promise<BaseResponse>
hsClient.team.destroy();

// $ExpectType Promise<TeamResponse>
hsClient.team.addMember({ email_address: 'email_address', account_id: 'account_id' });

// $ExpectType Promise<TeamResponse>
hsClient.team.removeMember({
    email_address: 'email_address',
    account_id: 'account_id',
    new_owner_email_address: 'new_owner_email_address',
});

// TemplateModule
const customField: HelloSign.CustomFieldTemplate = {
    name: '',
    type: '',
    signer: '',
    x: 1,
    y: 1,
    width: 100,
    height: 100,
    required: true,
    api_id: '',
    group: '',
    avg_text_length: {
        num_lines: 1,
        num_chars_per_line: 20,
    },
    named_form_fields: '',
    reusable_form_id: '',
};

const templateResponse: HelloSign.TemplateResponse = {
    template: {
        template_id: '',
        title: '',
        message: '',
        metadata: {
            key: 'value',
        },
        signer_roles: [
            {
                name: '',
                order: 1,
            },
        ],
        cc_roles: [
            {
                name: 'name',
            },
        ],
        documents: [
            {
                name: '',
                index: 0,
                field_groups: [
                    {
                        name: 'name',
                        rule: 'rule',
                    },
                ],
                form_fields: [
                    {
                        api_id: '',
                        name: '',
                        type: '',
                        x: 1,
                        y: 2,
                        width: 100,
                        height: 100,
                        required: true,
                        group: 'group',
                    },
                ],
                custom_fields: [customField],
            },
        ],
        custom_fields: [customField],
        accounts: [accountResponse.account],
        is_creator: true,
        is_embedded: false,
        can_edit: true,
        is_locked: false,
    },
    ...baseResponse,
};

const templatesReponse: HelloSign.TemplatesResponse = {
    templates: [templateResponse.template],
    ...baseResponse,
    ...listInfo,
};

// $ExpectType Promise<TemplateResponse>
hsClient.template.get('template_id');

// $ExpectType Promise<TemplatesResponse>
hsClient.template.list({ page: 0, page_size: 10, query: 'query' });

// $ExpectType Promise<TemplateResponse>
hsClient.template.addUser('template_id', { email_address: 'email_address', account_id: 'account_id' });

// $ExpectType Promise<TemplateResponse>
hsClient.template.removeUser('template_id', { email_address: 'email_address', account_id: 'account_id' });

// $ExpectType Promise<TemplateResponse>
hsClient.template.createEmbeddedDraft(templateResponse.template);

// $ExpectType Promise<BaseResponse>
hsClient.template.delete('template_id');

// $ExpectType Promise<IncomingMessage>
hsClient.template.files('template_id');

// $ExpectType Promise<{ file_url: string; expires_at: Date; } & BaseResponse>
hsClient.template.files('template_id', { file_type: 'pdf', get_url: true });

// $ExpectType Promise<{ data_uri: string; expires_at: Date; } & BaseResponse>
hsClient.template.files('template_id', { file_type: 'pdf', get_data_uri: true });

// UnclaimedDraftModule
const unclamaimedDraftResponse: HelloSign.UnclaimedDraftResponse = {
    unclaimed_draft: {
        signature_request_id: 'signature_request_id',
        claim_url: 'claim_url',
        signing_redirect_url: 'signing_redirect_url',
        requesting_redirect_url: 'requesting_redirect_url',
        expires_at: 1,
        test_mode: 1,
    },
    ...baseResponse,
};

// $ExpectType Promise<UnclaimedDraftResponse>
hsClient.unclaimedDraft.create({ type: 'type' });

// $ExpectType Promise<UnclaimedDraftResponse>
hsClient.unclaimedDraft.createEmbedded({ type: 'type' });

// $ExpectType Promise<UnclaimedDraftResponse>
hsClient.unclaimedDraft.createEmbeddedWithTemplate({ type: 'type' });

// $ExpectType Promise<UnclaimedDraftResponse>
hsClient.unclaimedDraft.editAndResend('request_id', { type: 'type' });

// ApiAppModule
const apiAppResponse: HelloSign.ApiAppResponse = {
    api_app: {
        client_id: '',
        created_at: 1,
        name: '',
        domain: '',
        callback_url: '',
        is_approved: true,
        owner_account: {
            account_id: '',
            email_address: '',
        },
        options: {
            can_insert_everywhere: true,
        },
        oauth: null,
        white_labeling_options: {
            key: 'value',
        },
    },
    ...baseResponse,
};

const apiAppListResponse: HelloSign.ApiAppListResponse = {
    api_apps: [apiAppResponse.api_app],
    ...baseResponse,
    ...listInfo,
};

// $ExpectType Promise<ApiAppResponse>
hsClient.apiApp.get('client_id');

// $ExpectType Promise<ApiAppListResponse>
hsClient.apiApp.list({ page: 1, page_size: 20 });

// $ExpectType Promise<ApiAppResponse>
hsClient.apiApp.create('client_id', { name: 'name' });

// $ExpectType Promise<ApiAppResponse>
hsClient.apiApp.update('client_id', { name: 'name' });

// $ExpectType Promise<BaseResponse>
hsClient.apiApp.delete('client_id');

const signatureRequestSigned = async (data: EventResponse) => {
    const { ...metadata } = data.signature_request.metadata;
    const sigReqId = data.signature_request.signature_request_id;
    const signatures = data.signature_request.signatures;
    if (signatures.length === 2 && signatures[0].signature_id === data.event.event_metadata.related_signature_id) {
        // advisor signed
        const { signer_email_address: advisorEmail, signer_name: advisorName } = signatures[0];
        const { signer_email_address: investorEmail, signer_name: investorName } = signatures[1];
        if (signatures[1].status_code !== 'awaiting_signature') return;
    } else if (
        signatures.length === 2 &&
        signatures[1].signature_id === data.event.event_metadata.related_signature_id
    ) {
    } else if (
        signatures.length === 1 &&
        signatures[0].signature_id === data.event.event_metadata.related_signature_id
    ) {
    } else {
        throw new Error('SIGNATURE DOES NOT MATCH EXPECTED DETAILS');
    }
};

const signatureRequestDownloadable = async (data: EventResponse) => {
    const allSigned = data.signature_request.signatures.every(signature => signature.status_code === 'signed');
    if (!allSigned) return;

    const { ...metadata } = data.signature_request.metadata;

    const fileStream = await hsClient.signatureRequest.download(data.signature_request.signature_request_id, {
        file_type: 'pdf',
    });
    const file = fs.createWriteStream('TEST');
    fileStream.pipe(file);

    const signatures = data.signature_request.signatures;
    let sigA;
    let sigB;
    if (signatures.length === 2) {
        sigB = signatures[0];
        sigA = signatures[1];
    } else if (signatures.length === 1) {
        sigA = signatures[0];
    } else {
        throw new Error('SIGNATURE DOES NOT MATCH EXPECTED DETAILS');
    }

    const { signer_email_address, signer_name, ...sig } = sigA;
};

export const getSignatureData = async (sigReqId: string) => {
    const data = await hsClient.signatureRequest.get(sigReqId);
    const metadata = data.signature_request.metadata;
    const signatures = data.signature_request.signatures;
    let sigA: Signature;
    let sigB: Signature | undefined;
    if (signatures.length === 2) {
        sigB = signatures[0];
        sigA = signatures[1];
    } else if (signatures.length === 1) {
        sigA = signatures[0];
    } else {
        throw new Error('SIGNATURE DOES NOT MATCH EXPECTED DETAILS');
    }

    const { signer_email_address: sigAEmail, signer_name: sigAName } = sigA;
    const { signer_email_address: sigBEmail, signer_name: sigBName } = sigB || {};

    return {
        id: sigReqId,
        sigAEmail,
        sigAName,
        sigBEmail,
        sigBName,
    };
};

export const getSignatureURL = async (sigReqId: string) => {
    const data = await hsClient.signatureRequest.get(sigReqId);
    const signatures = data.signature_request.signatures;
    const signature = signatures.find(sig => sig.status_code === 'awaiting_signature');
    if (!signature) throw new Error('Signature awaiting not found');
    const urlRequest = await hsClient.embedded.getSignUrl(signature.signature_id);
    return urlRequest.embedded.sign_url;
};

export const sendSigningRequest = async (pdfFilePath: string) => {
    const metadata = {
        documentType: 'TEST',
    };

    const data = await hsClient.signatureRequest.createEmbedded({
        test_mode: 0 || 1,
        clientId: 'TEST',
        subject: 'TEST',
        signers: [
            {
                email_address: 'test@example.com',
                name: 'Testy McTest',
                role: 'Signer',
            },
        ],
        file: [pdfFilePath],
        form_fields_per_document: [
            [
                {
                    api_id: 'test1',
                    type: 'signature',
                    x: 370,
                    y: 689,
                    width: 223,
                    height: 35,
                    required: true,
                    signer: 0,
                    page: 10,
                },
                {
                    api_id: 'test2',
                    type: 'date_signed',
                    x: 360,
                    y: 742,
                    width: 120,
                    height: 14,
                    required: true,
                    signer: 0,
                    page: 10,
                },
                {
                    api_id: 'test3',
                    type: 'signature',
                    x: 318,
                    y: 722,
                    width: 281,
                    height: 48,
                    required: true,
                    signer: 0,
                    page: 0,
                },
                {
                    api_id: 'test4',
                    type: 'date_signed',
                    x: 54,
                    y: 730,
                    width: 104,
                    height: 14,
                    required: true,
                    signer: 0,
                    page: 1,
                },
                {
                    api_id: 'signature_declaration',
                    type: 'signature',
                    x: 306,
                    y: 656,
                    width: 307,
                    height: 49,
                    required: true,
                    signer: 0,
                    page: 22,
                },
                {
                    api_id: 'date_declaration',
                    type: 'date_signed',
                    x: 350,
                    y: 714,
                    width: 120,
                    height: 14,
                    required: true,
                    signer: 0,
                    page: 22,
                },
            ],
        ],
        metadata,
    });
    const signatures = data.signature_request.signatures;
    const signature = signatures.find((sig: any) => sig.status_code === 'awaiting_signature')!;
    const signed_at: number | null = signature.signed_at;
    const urlRequest = await hsClient.embedded.getSignUrl(signature.signature_id);
    return {
        url: urlRequest.embedded.sign_url,
        signatureRequestId: data.signature_request.signature_request_id,
    };
};

export const sendSigningRequestWithTemplates = async (pdfFilePath: string) => {
    const metadata = {
        documentType: 'TEST',
    };

    const data = await hsClient.signatureRequest.createEmbedded({
        test_mode: 0 || 1,
        clientId: 'TEST',
        subject: 'TEST',
        signers: [
            {
                email_address: 'test@example.com',
                name: 'Testy McTest',
                role: 'Signer',
            },
        ],
        template_id: 'test template id',
        metadata,
    });
    const signatures = data.signature_request.signatures;
    const signature = signatures.find((sig: any) => sig.status_code === 'awaiting_signature')!;
    const signed_at: number | null = signature.signed_at;
    const urlRequest = await hsClient.embedded.getSignUrl(signature.signature_id);
    return {
        url: urlRequest.embedded.sign_url,
        signatureRequestId: data.signature_request.signature_request_id,
    };
};
