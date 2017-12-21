import * as paypal from "paypal-rest-sdk";

// Minimum Config
const minConfig: paypal.ConfigureOptions = {
    client_id: 'asdf',
    client_secret: 'asdf',
    mode: 'sandbox',
};

// Max Config
const maxConfig: paypal.ConfigureOptions = {
    client_id: 'asdf',
    client_secret: 'asdf',
    mode: 'sandbox',
    schema: 'asdf',
    host: 'asdf',
    port: 'asdf',
    openid_connect_schema: 'asdf',
    openid_connect_host: 'asdf',
    openid_connect_port: 'asdf',
    authorize_url: 'asdf',
    logout_url: 'asdf',
    headers: {
        asdf: 'asdf',
    }
};

// Execute Configure
paypal.configure(maxConfig);

// Min Payment
const minPayment: paypal.Payment = {
    intent: "sale",
    payer: {
        payment_method: "paypal",
    },
    transactions: [
        {
            amount: {
                total: "30.01",
                currency: "USD",
                details: {
                    subtotal: "30.00",
                    handling_fee: "0.01",
                },
            },
        },
    ],
};

// Max Payment
const maxPayment: paypal.Payment = {
    intent: "sale",
    payer: {
        payment_method: "paypal",
    },
    transactions: [
        {
            amount: {
                total: "30.01",
                currency: "USD",
                details: {
                    subtotal: "30.00",
                    handling_fee: "0.01",
                    shipping: 'test',
                    tax: 'test',
                    shipping_discout: 'a',
                    insurance: 'a',
                    gift_wrap: 'a',
                },
            },
            payee: {
                email: 'a',
                merchant_id: 'a',
                payee_display_metadata: {
                    email: 'a',
                    display_phone: {
                        country_code: 'a',
                        national_number: 'a',
                    }
                }
            },
            description: 'asdf',
            note_to_payee: 'asdf',
            custom: 'asdf',
            invoice_number: 'asdf',
            purchase_order: 'asdf',
            soft_descriptor: 'asdf',
            payment_options: {
                allowed_payment_method: 'asdf'
            },
            item_list: {
                items: [{
                    sku: 'asdf',
                    name: 'asdf',
                    description: 'asdf',
                    quantity: 2,
                    price: 'adsf',
                    currency: 'adsf',
                    tax: 'asdf',
                    url: 'asdf'
                }],
                shipping_address: {
                    line1: 'asdf',
                    line2: 'asdf',
                    city: 'asdf',
                    country_code: 'asdf',
                    postal_code: 'asdf',
                    state: 'asdf',
                    phone: 'asdf',
                    type: 'adsf',
                    recipient_name: 'asdf',
                },
                shipping_method: 'adsf',
                shipping_phone_number: 'adsf',
            },
            notify_url: 'asdf',
            order_url: 'asdf',
        },
    ],
    experience_profile_id: 'test',
    note_to_payer: 's',
    redirect_urls: {
        cancel_url: 'test',
        return_url: 'test',
    },
    failure_reason: 'test',
};

// Create Payment
paypal.payment.create(maxPayment, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.state;
});

const request: paypal.payment.ExecuteRequest = {
    payer_id: 'test'
};

// Execute Payment
paypal.payment.execute('test', request, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.state;
});

// Get Payment
paypal.payment.get('test', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.state;
});

const paymentList: paypal.QueryParameters = {
    page: 2
};

// List Payments
paypal.payment.list(paymentList, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.payments[0].id;
    test = response.total_count;
});

const updatePayment: paypal.UpdateRequest = {
    op: 'asdf',
    path: 'asdf',
    value: 'asdf',
};

// Update Payment
paypal.payment.update('asdf', [updatePayment], (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
});

// List Webhooks
const whList: paypal.QueryParameters = {
    transaction_id: 'asdf'
};
paypal.notification.webhook.list(whList, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.webhooks[0].id;
});

// Create Webhooks
const webhook =  { name: 'test', url: 'asdf', event_types: [ { name: 'test' } ] };
paypal.notification.webhook.create(webhook, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.event_types[0].name;
});

// Replace Webhook
paypal.notification.webhook.replace('asdf', [{ op: 'string', path: 'asdf', value: 'asdf' }], (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.event_types[0].name;
});

// Delete Webhook
paypal.notification.webhook.del('asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.event_types[0].name;
});

// Get Webhook
paypal.notification.webhook.get('asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.event_types[0].name;
});

// Webhook Event Types
paypal.notification.webhook.eventTypes('asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.event_types[0].name;
});

// WebhookEvent Get
paypal.notification.webhookEvent.get('asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.resource;
});

const webhookEvent: paypal.notification.webhookEvent.WebhookEvent = {
    id: 'etst',
    create_time: 'asdf',
    resource_type: 'adsf',
    event_version: 'asdf',
    event_type: 'asdf',
    summary: 'asdf',
    resource: {
        id: 'asdf'
    }
};

// WebhookEvent Get and Verify
paypal.notification.webhookEvent.getAndVerify(webhookEvent, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.resource;
});

// WebhookEvent List
paypal.notification.webhookEvent.list({ transaction_id: 'asdf' }, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.events[0].resource;
});

// WebhookEvent Resend
paypal.notification.webhookEvent.resend('id', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.resource;
});

// WebhookEvent Resend
paypal.notification.webhookEvent.resend('id', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.resource;
});

// WebhookEvent Verify
paypal.notification.webhookEvent.verify({ header: 'asdf' }, webhookEvent, 'id', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.verification_status;
});

// WebhookEventType List
paypal.notification.webhookEventType.list((err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.event_types[0].name;
});

// Authorization Get
paypal.authorization.get('id', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
});

const captureRequest: paypal.authorization.CaptureRequest = {
    is_final_capture: true,
};
// Authorization Capture
paypal.authorization.capture('id', captureRequest, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
});

// ReAuthorization
paypal.authorization.reauthorize('id', { total: "10", currency: "USD" }, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
});

// Capture Get
paypal.capture.get('id', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
});

const refundRequest: paypal.RefundRequest = {
    amount: {
        total: "30.00",
        currency: "USD"
    }
};

// Capture Get
paypal.capture.refund('id', refundRequest, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
});

// Min Invoice
const minInvoice: paypal.invoice.Invoice = {};

// Max Invoice
const maxInvoice: paypal.invoice.Invoice = {
    allow_tip: true,
    billing_info: [{
        email: 'asfd',
        language: 'string',
        notification_channel: 'string',
        additional_info: 'string',
    }],
    discount: {
        percent: 2,
        amount: {
            currency: "USD",
            value: "34"
        },
    },
    shipping_cost: {
        amount: {
            currency: "USD",
            value: "20",
        },
        tax: {
            id: 'tst',
            name: "asdf",
            percent: 20,
            amount: {
                currency: "USD",
                value: "20",
            }
        }
    },
    invoice_date: "asdf",
    items: [{
        name: "asdf",
        description: "asdf",
        quantity: 2,
        unit_price: {
            currency: "USD",
            value: "20",
        },
        tax: {
            percent: 20,
        },
        date: "asdf",
        discount: {
            percent: 20,
        },
        unit_of_measure: 'asdf'
    }],
    merchant_info: {
        email: "asdf",
        first_name: "asdf",
        last_name: "asdf",
        address: {
            line1: "asdf",
            city: "asdf",
            state: "asdf",
            postal_code: "adsf",
            country_code: "asdf"
        },
        business_name: "asdf",
        phone: {
            country_code: "1",
            national_number: "asdf",
        },
        website: "asdf",
        tax_id: "adsf",
        additional_info: "asdf",
        additional_info_label: "asdf",
    },
    note: 'string',
    number: 'string',
    payment_term: {
        term_type: "asdf",
        due_date: "asdf",
    },
    reference: 'string',
    shipping_info: {
        address: {
            line1: "asdf",
            city: "asdf",
            state: "asdf",
            postal_code: "adsf",
            country_code: "asdf"
        },
        business_name: 'asdf',
        first_name: "string",
        last_name: "string",
    },
    phone: {
        country_code: "1",
        national_number: "asdf",
    },
    tax_calculated_after_discount: true,
    tax_inclusive: true,
    template_id: "string",
    cc_info: [
        {
            first_name: "asdf",
            email: "adsf",
        }
    ],
    custom: {
        label: "adsf",
        amount: {
            currency: "asdf",
            value: "adsf"
        },
    },
    allow_partial_payment: true,
    minimum_amount_due: {
        currency: "asdf",
        value: "adsf"
    },
    terms: "asdf",
    merchant_memo: "asdf",
    logo_url: "adsf",
    attachments: [
        {
            name: "adsf",
            url: "adsf"
        }
    ]
};

// Invoice Cancel
paypal.invoice.cancel('id', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
});

// Invoice Create
paypal.invoice.create(maxInvoice, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.items ? response.items[0].name : 'asdf';
});

// Invoice Delete
paypal.invoice.del('adsf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.items ? response.items[0].name : 'asdf';
});

// Invoice Delete External Payment
paypal.invoice.deleteExternalPayment('adsf', 'asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
});

// Invoice Delete External Refund
paypal.invoice.deleteExternalRefund('adsf', 'asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
});

// Invoice Delete External Refund
paypal.invoice.generateNumber((err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.number;
});

// Invoice Get
paypal.invoice.get('adsf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.items ? response.items[0].name : 'asdf';
});

// Invoice List
paypal.invoice.list((err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.invoices.length > 0 ? response.invoices[0].id : 'asdf';
});

// Invoice Qrcode
paypal.invoice.qrCode('asdf', 1, 3, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.image;
});

const recordPayment: paypal.invoice.PayRequest = {
    date: "asdf",
    method: "asdf",
    note: "asdf",
    amount: {
        currency: "USD",
        value: "10.10",
    }
};

// Invoice Record Payment
paypal.invoice.recordPayment('asdf', recordPayment, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
});

// Invoice Record Refund
paypal.invoice.recordRefund('asdf', recordPayment, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
});

// Invoice Remind
paypal.invoice.remind('asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
});

const invoiceSearch: paypal.invoice.SearchRequest = {
    archived: true,
    start_creation_date: "asdf",
};

// Invoice Search
paypal.invoice.search(invoiceSearch, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.invoices.length > 0 ? response.invoices[0].id : 'asdf';
});

// Invoice Update
paypal.invoice.update('asdf', maxInvoice, (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.items ? response.items[0].name : 'asdf';
});

// Refund Get
paypal.refund.get('asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.capture_id;
});

// Sale Get
paypal.sale.get('asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.create_time;
});

// Sale Refund
paypal.sale.refund('asdf', (err, response) => {
    let test;
    if (err) {
        test = err.response.debug_id;
        test = err.stack;
        return;
    }
    test = response.id;
    test = response.refund_reason_code;
});
