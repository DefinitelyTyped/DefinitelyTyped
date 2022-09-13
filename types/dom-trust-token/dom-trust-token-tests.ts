const responsePromises: Array<Promise<Response>> = [
    fetch('/issue', { trustToken: { type: 'token-request' } }),
    fetch('/redeem', { trustToken: { type: 'token-redemption' } }),
    fetch('/redeem', { trustToken: { type: 'token-redemption', refreshPolicy: 'refresh' } }),
    fetch('/sign', {
        trustToken: { type: 'send-redemption-record', signRequestData: 'omit', issuers: ['https://issuer.test'] },
    }),
    fetch('/sign', {
        trustToken: {
            type: 'send-redemption-record',
            signRequestData: 'include',
            includeTimestampHeader: true,
            additionalSignedHeaders: ['Sec-Redemption-Record', 'Sec-Time'],
            issuers: ['https://issuer.test'],
            additionalSigningData: 'example data',
        },
    }),
];

const xhr = new XMLHttpRequest();
xhr.setTrustToken({ type: 'token-redemption', refreshPolicy: 'none' });
xhr.setTrustToken({
    type: 'send-redemption-record',
    signRequestData: 'headers-only',
    issuers: ['https://issuer.test'],
});
const err: DOMException = xhr.trustTokenOperationError;

document.createElement('iframe').trustToken = '{"type": "token-request"}';

const hasTrustTokenPromise: Promise<boolean> = document.hasTrustToken('https://issuer.test');
