import {
    WebPushError,
    ContentEncoding,
    supportedContentEncodings,
    encrypt,
    EncryptionResult,
    getVapidHeaders,
    Headers,
    generateVAPIDKeys,
    VapidKeys,
    setGCMAPIKey,
    setVapidDetails,
    PushSubscription,
    RequestOptions,
    RequestDetails,
    generateRequestDetails,
    SendResult,
    sendNotification
} from 'web-push';

declare const anything: any;

// ==============
//  WebPushError
// ==============

// $ExpectType WebPushError
const error = new WebPushError('message', 400, {}, 'body', 'endpoint');

// WebPushError extends Error
// $ExpectType string | undefined
error.stack;
// $ExpectType string
error.message;
// $ExpectType string
error.name;

// =================
//  ContentEncoding
// =================

// ContentEncoding should only allow named types

// $ExpectError
const notAValidEncoding: ContentEncoding = 'hello world';

// The exported values should match the "enum" type

const aesGcm: ContentEncoding = supportedContentEncodings.AES_GCM;
const aes128Gcm: ContentEncoding = supportedContentEncodings.AES_128_GCM;

// ===========
//  encrypt()
// ===========

// $ExpectType EncryptionResult
const encryptionResult = encrypt('publicKey', 'userAuth', 'myPayload', supportedContentEncodings.AES_GCM);

const buffer: Buffer = anything;
// $ExpectType EncryptionResult
encrypt('publicKey', 'userAuth', buffer, supportedContentEncodings.AES_128_GCM);

// Only valid encoding should be allowed
// $ExpectError
encrypt('publicKey', 'userAuth', 'myPayload', 'unknownEncoding');

// $ExpectType string
encryptionResult.localPublicKey;
// $ExpectType string
encryptionResult.salt;
// $ExpectType Buffer
encryptionResult.cipherText;

// ===================
//  getVapidHeaders()
// ===================

// $ExpectType { Authorization: string; 'Crypto-Key': string; }
getVapidHeaders('audience', 'subject', 'publicKey', 'privateKey', supportedContentEncodings.AES_GCM, 150);
// $ExpectType { Authorization: string; }
getVapidHeaders('audience', 'subject', 'publicKey', 'privateKey', supportedContentEncodings.AES_128_GCM, 150);

// expiration is optional
// $ExpectType { Authorization: string; 'Crypto-Key': string; }
getVapidHeaders('audience', 'subject', 'publicKey', 'privateKey', supportedContentEncodings.AES_GCM);
// $ExpectType { Authorization: string; }
getVapidHeaders('audience', 'subject', 'publicKey', 'privateKey', supportedContentEncodings.AES_128_GCM);

// Buffers are not supported here
// $ExpectError
getVapidHeaders('audience', buffer, 'publicKey', 'privateKey', supportedContentEncodings.AES_128_GCM);
// $ExpectError
getVapidHeaders('audience', 'subject', buffer, 'privateKey', supportedContentEncodings.AES_128_GCM);
// $ExpectError
getVapidHeaders('audience', 'subject', 'publicKey', buffer, supportedContentEncodings.AES_128_GCM);

// =====================
//  generateVAPIDKeys()
// =====================

// $ExpectType VapidKeys
const vapidKeys = generateVAPIDKeys();

// $ExpectType string
vapidKeys.publicKey;
// $ExpectType string
vapidKeys.privateKey;

// ================
//  setGCMAPIKey()
// ================

// $ExpectType void
setGCMAPIKey('apiKey');
// $ExpectType void
setGCMAPIKey(null);

// ===================
//  setVapidDetails()
// ===================

// $ExpectType void
setVapidDetails('subject', 'privateKey', 'publicKey');

// Buffers are not supported here
// $ExpectError
setVapidDetails(buffer, 'publicKey', 'privateKey');
// $ExpectError
setVapidDetails('subject', buffer, 'privateKey');
// $ExpectError
setVapidDetails('subject', 'publicKey', buffer);

// ==================
//  PushSubscription
// ==================

const pushSubscription: PushSubscription = {
    endpoint: 'endpointString',
    keys: {
        p256dh: 'p256dhString',
        auth: 'authString',
    }
};

// ================
//  RequestOptions
// ================
let requestOptions: RequestOptions;

// Can be entirely empty
requestOptions = {};

requestOptions = {
    headers: {
        someHeader: 'value'
    }
};

requestOptions = {
    gcmAPIKey: 'key'
};

requestOptions = {
    vapidDetails: {
        privateKey: 'private',
        publicKey: 'public',
        subject: 'subject'
    }
};

requestOptions = {
    TTL: 100
};

requestOptions = {
    contentEncoding: supportedContentEncodings.AES_128_GCM
};

requestOptions = {
    proxy: 'http://proxy'
};

requestOptions = {
    headers: {
        someHeader: 'value'
    },
    gcmAPIKey: 'key',
    vapidDetails: {
        privateKey: 'private',
        publicKey: 'public',
        subject: 'subject'
    },
    TTL: 100,
    contentEncoding: supportedContentEncodings.AES_GCM,
    proxy: 'http://proxy'
};

// ==========================
//  generateRequestDetails()
// ==========================

// $ExpectType RequestDetails & { body: Buffer; }
generateRequestDetails(pushSubscription, 'payload', requestOptions);
// $ExpectType Buffer
generateRequestDetails(pushSubscription, 'payload', requestOptions).body;

// Payload can be a Buffer
// $ExpectType Buffer
generateRequestDetails(pushSubscription, buffer).body;
// $ExpectType Buffer
generateRequestDetails(pushSubscription, buffer, requestOptions).body;

// Payload is optional, then body will be null
// $ExpectType RequestDetails & { body: null; }
generateRequestDetails(pushSubscription);
// $ExpectType null
generateRequestDetails(pushSubscription).body;
// $ExpectType null
generateRequestDetails(pushSubscription, null).body;
// $ExpectType null
generateRequestDetails(pushSubscription, null, requestOptions).body;

// PushSubscription must have all its values
// $ExpectError
generateRequestDetails({});
// $ExpectError
generateRequestDetails({ endpoint: 'endpoint' });
// $ExpectError
generateRequestDetails({ keys: { p256dh: 'p256dh', auth: 'auth' } });
// $ExpectError
generateRequestDetails({ endpoint: null, keys: { p256dh: 'p256dh', auth: 'auth' } });
// $ExpectError
generateRequestDetails({ endpoint: 'endpoint', keys: null });

generateRequestDetails({ endpoint: 'endpoint', keys: { p256dh: 'p256dh', auth: 'auth' } });

// RequestOptions is optional
generateRequestDetails(pushSubscription, 'payload');
generateRequestDetails(pushSubscription, 'payload', {});

// ================
//  RequestDetails
// ================
const requestDetails = generateRequestDetails(pushSubscription, 'payload');
// $ExpectType "POST"
requestDetails.method;
// $ExpectType Headers
requestDetails.headers;
// $ExpectType Buffer
requestDetails.body;
// $ExpectType string
requestDetails.endpoint;
// $ExpectType string | undefined
requestDetails.proxy;

// ====================
//  sendNotification()
// ====================
// $ExpectType Promise<SendResult>
sendNotification(pushSubscription, 'payload', requestOptions);

// Buffers are also supported
// $ExpectType Promise<SendResult>
sendNotification(pushSubscription, buffer);
// $ExpectType Promise<SendResult>
sendNotification(pushSubscription, buffer, requestOptions);

// Payload can be absent or null
// $ExpectType Promise<SendResult>
sendNotification(pushSubscription);
// $ExpectType Promise<SendResult>
sendNotification(pushSubscription, null, requestOptions);

// PushSubscription must have all its values
// $ExpectError
sendNotification({}, 'payload');
// $ExpectError
sendNotification({ endpoint: 'endpoint' }, 'payload');
// $ExpectError
sendNotification({ keys: { p256dh: 'p256dh', auth: 'auth' } }, 'payload');
// $ExpectError
sendNotification({ endpoint: null, keys: { p256dh: 'p256dh', auth: 'auth' } }, 'payload');
// $ExpectError
sendNotification({ endpoint: 'endpoint', keys: null }, 'payload');

sendNotification({ endpoint: 'endpoint', keys: { p256dh: 'p256dh', auth: 'auth' } }, 'payload');

// =============
//  SendResult
// =============

const sendResult = sendNotification(pushSubscription, 'payload');

sendResult.then((result) => {
    // ExpectType number
    result.statusCode;
    // $ExpectType string
    result.body;
    // $ExpectType Headers
    result.headers;
});
sendResult.catch((error: WebPushError) => {
});
