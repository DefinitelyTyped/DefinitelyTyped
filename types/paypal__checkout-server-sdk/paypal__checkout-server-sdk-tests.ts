import paypal = require('@paypal/checkout-server-sdk');

// Creating an environment
const clientId = '<<PAYPAL-CLIENT-ID>>';
const clientSecret = '<<PAYPAL-CLIENT-SECRET>>';

const sandboxEnvironment = new paypal.core.SandboxEnvironment(clientId, clientSecret); // $ExpectType SandboxEnvironment
const liveEnvironment = new paypal.core.LiveEnvironment(clientId, clientSecret); // $ExpectType LiveEnvironment
const paypalEnvironment = new paypal.core.PayPalEnvironment('clientId', 'clientSecret', 'baseUrl', 'webUrl'); // $ExpectType PayPalEnvironment

{
    new paypal.core.PayPalHttpClient(sandboxEnvironment);
    new paypal.core.PayPalHttpClient(liveEnvironment);
    new paypal.core.PayPalHttpClient(paypalEnvironment);
}

const client = new paypal.core.PayPalHttpClient(paypalEnvironment); // $ExpectType PayPalHttpClient

const ordersAuthorizeRequest = new paypal.orders.OrdersAuthorizeRequest('orderId'); // $ExpectType OrdersAuthorizeRequest
const ordersCaptureRequest = new paypal.orders.OrdersCaptureRequest('orderId'); // $ExpectType OrdersCaptureRequest
const ordersCreateRequest = new paypal.orders.OrdersCreateRequest(); // $ExpectType OrdersCreateRequest
const ordersGetRequest = new paypal.orders.OrdersGetRequest('orderId'); // $ExpectType OrdersGetRequest
const ordersPatchRequest = new paypal.orders.OrdersPatchRequest('orderId'); // $ExpectType OrdersPatchRequest
const ordersValidateRequest = new paypal.orders.OrdersValidateRequest('orderId'); // $ExpectType OrdersValidateRequest

ordersCreateRequest.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
        {
            amount: {
                currency_code: 'USD',
                value: '100.00',
            },
            payee: { email_address: 'sendMoreMoney@me.com' },
        },
    ],
    application_context: {
        shipping_preference: 'NO_SHIPPING',
        user_action: 'CONTINUE',
    },
});

ordersPatchRequest.requestBody([
    {
        from: '',
        op: paypal.orders.Operation.REPLACE,
        path: `/purchase_units/@reference_id=='default'/shipping/type`,
        value: 'SHIPPING',
    },
]);

async () => {
    const ordersAuthorizeResponse = await client.execute(ordersAuthorizeRequest);
    const ordersCaptureResponse = await client.execute(ordersCaptureRequest);
    const ordersCreateResponse = await client.execute(ordersCreateRequest);
    const ordersGetResponse = await client.execute(ordersGetRequest);
    const ordersPatchResponse = await client.execute(ordersPatchRequest);
    const ordersValidateResponse = await client.execute(ordersValidateRequest);

    if (ordersAuthorizeResponse.result) {
        const result = ordersAuthorizeResponse.result as paypal.orders.Order;
        result.create_time; // $ExpectType string
        result.id; // $ExpectType string
        result.links; // $ExpectType LinkDescription[]
        result.payer; // $ExpectType Payer
        result.purchase_units; // $ExpectType PurchaseUnit[]
        result.status; // $ExpectType Status
        result.update_time; // $ExpectType string
    }

    if (ordersCreateResponse.result) {
        const result = ordersCreateResponse.result as paypal.orders.Order;
        result.create_time; // $ExpectType string
        result.id; // $ExpectType string
        result.links; // $ExpectType LinkDescription[]
        result.payer; // $ExpectType Payer
        result.purchase_units; // $ExpectType PurchaseUnit[]
        result.status; // $ExpectType Status
        result.update_time; // $ExpectType string
    }

    if (ordersCaptureResponse.result) {
        const result = ordersCaptureResponse.result as paypal.orders.Order;
        result.create_time; // $ExpectType string
        result.id; // $ExpectType string
        result.links; // $ExpectType LinkDescription[]
        result.payer; // $ExpectType Payer
        result.purchase_units; // $ExpectType PurchaseUnit[]
        result.status; // $ExpectType Status
        result.update_time; // $ExpectType string
    }

    if (ordersGetResponse.result) {
        const result = ordersGetResponse.result as paypal.orders.Order;
        result.create_time; // $ExpectType string
        result.id; // $ExpectType string
        result.links; // $ExpectType LinkDescription[]
        result.payer; // $ExpectType Payer
        result.purchase_units; // $ExpectType PurchaseUnit[]
        result.status; // $ExpectType Status
        result.update_time; // $ExpectType string
    }
};

{
    client.execute(ordersCreateRequest); // $ExpectType Promise<HttpResponse<any>>
    client.getUserAgent(); // $ExpectType string
    client.fetchAccessToken(); // $ExpectType string
    client.getTimeout(); // $ExpectType number
}

const accessTokenRequest = new paypal.core.AccessTokenRequest(paypalEnvironment); // $ExpectType AccessTokenRequest
new paypal.core.AccessTokenRequest(paypalEnvironment, 'refreshToken'); // $ExpectType AccessTokenRequest

// $ExpectType AccessToken
const token = new paypal.core.AccessToken({
    access_token: 'access_token',
    expires_in: 1000,
    token_type: 'token_type',
    refresh_token: 'refresh_token',
});

{
    token.isExpired(); // $ExpectType boolean
    token.authorizationString(); // $ExpectType string
}

// $ExpectType TokenCache
const tokecnCache = new paypal.core.TokenCache();

{
    paypal.core.TokenCache.cacheForEnvironment(paypalEnvironment);
    paypal.core.TokenCache.cacheForEnvironment(paypalEnvironment, 'refresh_token');

    paypal.core.TokenCache.cacheForEnvironment(sandboxEnvironment);
    paypal.core.TokenCache.cacheForEnvironment(liveEnvironment);

    tokecnCache.getToken(); // $ExpectType AccessToken | null
    tokecnCache.setToken(token); // $ExpectType void
    tokecnCache.lock(); // $ExpectType void
    tokecnCache.unlock(); // $ExpectType void
    tokecnCache.isLocked(); // $ExpectType boolean
    tokecnCache.isValid(); // $ExpectType boolean
    tokecnCache.isPresent(); // $ExpectType boolean
    tokecnCache.wait(ordersCreateRequest); // $ExpectType Promise<OrdersCreateRequest>
    tokecnCache.notify(); // $ExpectType void
}

const refreshToken = new paypal.core.RefreshTokenRequest(paypalEnvironment, 'code'); // $ExpectType RefreshTokenRequest
new paypal.core.RefreshTokenRequest(liveEnvironment, 'code'); // $ExpectType RefreshTokenRequest
new paypal.core.RefreshTokenRequest(sandboxEnvironment, 'code'); // $ExpectType RefreshTokenRequest

{
    refreshToken.headers; // $ExpectType AccessTokenRequestHeaders
    refreshToken.body; // $ExpectType RefreshTokenRequestBody
    refreshToken.path; // $ExpectType string
    refreshToken.verb; // $ExpectType "POST"
}

const authorizationsCaptureRequest = new paypal.payments.AuthorizationsCaptureRequest('authorizationId'); // $ExpectType AuthorizationsCaptureRequest
const authorizationsGetRequest = new paypal.payments.AuthorizationsGetRequest('authorizationId'); // $ExpectType AuthorizationsGetRequest
const authorizationsReauthorizeRequest = new paypal.payments.AuthorizationsReauthorizeRequest('authorizationId'); // $ExpectType AuthorizationsReauthorizeRequest
const authorizationsVoidRequest = new paypal.payments.AuthorizationsVoidRequest('authorizationId'); // $ExpectType AuthorizationsVoidRequest
const capturesGetRequest = new paypal.payments.CapturesGetRequest('authorizationId'); // $ExpectType CapturesGetRequest
const capturesRefundRequest = new paypal.payments.CapturesRefundRequest('captureId'); // $ExpectType CapturesRefundRequest
const refundsGetRequest = new paypal.payments.RefundsGetRequest('refundId'); // $ExpectType RefundsGetRequest

async () => {
    const authorizationsCaptureResponse = await client.execute(authorizationsCaptureRequest);
    const authorizationsGetResponse = await client.execute(authorizationsGetRequest);
    const authorizationsReauthorizeResponse = await client.execute(authorizationsReauthorizeRequest);
    const authorizationsVoidResponse = await client.execute(authorizationsVoidRequest);
    const capturesGetResponse = await client.execute(capturesGetRequest);
    const capturesRefundResponse = await client.execute(capturesRefundRequest);
    const refundsGetResponse = await client.execute(refundsGetRequest);

    if (authorizationsCaptureResponse.result) {
        const result = authorizationsCaptureResponse.result as paypal.payments.Capture;
        result.amount; // $ExpectType Money
        result.create_time; // $ExpectType string
        result.custom_id; // $ExpectType string
        result.disbursement_mode; // $ExpectType DisbursementMode
        result.final_capture; // $ExpectType boolean
        result.id; // $ExpectType string
        result.invoice_id; // $ExpectType string
        result.links; // $ExpectType LinkDescription[]
        result.processor_response; // $ExpectType ProcessorResponse
        result.seller_protection; // $ExpectType SellerProtection
        result.seller_receivable_breakdown; // $ExpectType SellerReceivableBreakdown
        result.status; // $ExpectType Status
        result.update_time; // $ExpectType string
    }

    if (capturesGetResponse.result) {
        const result = capturesGetResponse.result as paypal.payments.Capture;
        result.amount; // $ExpectType Money
        result.create_time; // $ExpectType string
        result.custom_id; // $ExpectType string
        result.disbursement_mode; // $ExpectType DisbursementMode
        result.final_capture; // $ExpectType boolean
        result.id; // $ExpectType string
        result.invoice_id; // $ExpectType string
        result.links; // $ExpectType LinkDescription[]
        result.processor_response; // $ExpectType ProcessorResponse
        result.seller_protection; // $ExpectType SellerProtection
        result.seller_receivable_breakdown; // $ExpectType SellerReceivableBreakdown
        result.status; // $ExpectType Status
        result.update_time; // $ExpectType string
    }

    if (capturesRefundResponse.result) {
        const result = capturesRefundResponse.result as paypal.payments.Capture;
        result.amount; // $ExpectType Money
        result.create_time; // $ExpectType string
        result.custom_id; // $ExpectType string
        result.disbursement_mode; // $ExpectType DisbursementMode
        result.final_capture; // $ExpectType boolean
        result.id; // $ExpectType string
        result.invoice_id; // $ExpectType string
        result.links; // $ExpectType LinkDescription[]
        result.processor_response; // $ExpectType ProcessorResponse
        result.seller_protection; // $ExpectType SellerProtection
        result.seller_receivable_breakdown; // $ExpectType SellerReceivableBreakdown
        result.status; // $ExpectType Status
        result.update_time; // $ExpectType string
    }

    if (refundsGetResponse.result) {
        const result = refundsGetResponse.result as paypal.payments.Capture;
        result.amount; // $ExpectType Money
        result.create_time; // $ExpectType string
        result.custom_id; // $ExpectType string
        result.disbursement_mode; // $ExpectType DisbursementMode
        result.final_capture; // $ExpectType boolean
        result.id; // $ExpectType string
        result.invoice_id; // $ExpectType string
        result.links; // $ExpectType LinkDescription[]
        result.processor_response; // $ExpectType ProcessorResponse
        result.seller_protection; // $ExpectType SellerProtection
        result.seller_receivable_breakdown; // $ExpectType SellerReceivableBreakdown
        result.status; // $ExpectType Status
        result.update_time; // $ExpectType string
    }
};
