import * as fs from 'fs';
import { EventResponse, Signature } from 'hellosign-sdk';
import HelloSign = require('hellosign-sdk');

const hsClient = new HelloSign({ key: 'test' });
hsClient.setApiKey('key');
hsClient.setClientId('client id');
hsClient.setClientSecret('client secret');
hsClient.setHost('host', 'port', 'protocol');
hsClient.setOauthToken('oauth token');
hsClient.setPort('port');
hsClient.setProtocol('protocol');
hsClient.setTimeout(999);
hsClient.setUserPassAuth('username', 'password');
hsClient._setApiField('dev', true);
const dev = hsClient.getApiField('dev');
const isDev = hsClient.isDev();

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

    const filePath = await new Promise<string>((resolve, reject) => {
        hsClient.signatureRequest.download(
            data.signature_request.signature_request_id,
            { file_type: 'pdf' },
            (err, response) => {
                if (err) reject(err);
                const file = fs.createWriteStream('TEST');
                response.pipe(file);
                resolve('TEST');
            },
        );
    });

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
        files: [pdfFilePath],
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
