import {
    Pagination,
    ChargeResource,
    CheckoutResource,
    CreateCheckout,
    Client,
    EventResource,
    CreateCharge,
    Webhook,
    resources as Resource
} from 'coinbase-commerce-node';

const Checkout = Resource.Checkout;
const Charge = Resource.Charge;
const Event = Resource.Event;

/**
 * Initialize client.
 */
Client.init('some-api-key', 'http://example.com', 'v0.0.1', 2000);

/**
 * Prebuilt example request
 *
 * @link https://commerce.coinbase.com/docs/api/#create-a-charge
 */
const chargeCreateExample: CreateCharge = {
    name: 'The Sovereign Individual',
    description: 'Mastering the Transition to the Information Age',
    local_price: {
        amount: '100.00',
        currency: 'USD'
    },
    pricing_type: 'fixed_price',
    metadata: {
        customer_id: 'id_1005',
        customer_name: 'Satoshi Nakamoto'
    },
    redirect_url: 'https://charge/completed/page',
    cancel_url: 'https://charge/canceled/page',
};

/**
 * Prebuilt example response.
 *
 * @link https://commerce.coinbase.com/docs/api/#charge-resource
 */
const chargeResponseExample: ChargeResource = {
    id: 'f765421f2-1451-fafb-a513-aac6c819fba9',
    resource: 'charge',
    code: '66BEOV2A',
    name: 'The Sovereign Individual',
    description: 'Mastering the Transition to the Information Age',
    logo_url: 'https://commerce.coinbase.com/charges/ybjknds.png',
    hosted_url: 'https://commerce.coinbase.com/charges/66BEOV2A',
    created_at: '2017-01-31T20:49:02Z',
    expires_at: '2017-01-31T21:49:02Z',
    confirmed_at: '2017-01-31T20:50:02Z',
    checkout: {
        id: 'a76721f2-1611-48fb-a513-aac6c819a9d6'
    },
    timeline: [
        {
            time: '2017-01-31T20:49:02Z',
            status: 'NEW'
        },
        {
            time: '2017-01-31T20:50:02Z',
            status: 'PENDING'
        },
        {
            time: '2017-01-31T20:50:02Z',
            status: 'COMPLETED'
        },
        {
            time: '2017-01-31T20:50:02Z',
            status: 'UNRESOLVED',
            context: 'UNDERPAID'
        },
        {
            time: '2017-01-31T20:50:02Z',
            status: 'RESOLVED'
        }
    ],
    metadata: {},
    pricing_type: 'fixed_price',
    pricing: {
        local: { amount: '100.00', currency: 'USD' },
        bitcoin: { amount: '1.00', currency: 'BTC' },
        ethereum: { amount: '10.00', currency: 'ETH' }
    },
    payments: [
        {
            network: 'ethereum',
            transaction_id: '0xe02fead885c3e4019945428ed54d094247bada2d0ac41b08fce7ce137bf29587',
            status: 'COMPLETED',
            value: {
                local: { amount: '100.0', currency: 'USD' },
                crypto: { amount: '10.00', currency: 'ETH' }
            },
            block: {
                height: 100,
                hash: '0xe02fead885c3e4019945428ed54d094247bada2d0ac41b08fce7ce137bf29587',
                confirmations_accumulated: 8,
                confirmations_required: 2
            }
        }
    ],
    addresses: {
        bitcoin: 'mymZkiXhQNd6VWWG7VGSVdDX9bKmviti3U',
        ethereum: '0x419f91df39951fd4e8acc8f1874b01c0c78ceba6'
    }
};

/**
 * Create an example charge and fetch the same charge by its ID.
 */
Charge.create(chargeCreateExample).then((response: Resource.Charge) => {
    return Charge.retrieve(response.id);
}).then((response) => {
    const id: string = response.id;
    const resource: 'charge' = response.resource;
});

/**
 * List out all available charges.
 */
Charge.list({}).then(([list, paginationInfo]) => {
    const results: number = paginationInfo.total;

    list.forEach((entry) => {
        const id: string = entry.id;
        const resource: 'charge' = entry.resource;
    });
});

/**
 * Fetch all available charges.
 */
Charge.all({}).then((list) => {
    list.forEach((entry) => {
        const id: string = entry.id;
        const resource: 'charge' = entry.resource;
    });
});

/**
 * insert, save, update and delete a Charge resource.
 */
new Charge(chargeCreateExample).insert().then((charge) => {
    const resource: 'charge' = charge.resource;
    charge.name = 'some-new-name';

    return charge.save();
}).then((charge) => {
    const resource: 'charge' = charge.resource;
    charge.description = 'some-new-description';

    return charge.update();
}).then((charge) => {
    const resource: 'charge' = charge.resource;

    return charge.delete();
}).then((charge) => {
    const resource: 'charge' = charge.resource;
});

/**
 * Checkout create example.
 *
 * @link https://commerce.coinbase.com/docs/api/#create-a-checkout
 */
const checkoutCreateExample: CreateCheckout = {
    name: 'The Sovereign Individual',
    description: 'Mastering the Transition to the Information Age',
    local_price: {
        amount: '100.00',
        currency: 'USD'
    },
    pricing_type: 'fixed_price',
    requested_info: ['email']
};

/**
 * Checkout resource example
 *
 * @link https://commerce.coinbase.com/docs/api/#checkout-resource
 */
const checkoutResponseExample: CheckoutResource = {
    id: '30934862-d980-46cb-9402-43c81b0cabd5',
    resource: 'checkout',
    name: 'The Sovereign Individual',
    description: 'Mastering the Transition to the Information Age',
    logo_url: 'https://commerce.coinbase.com/charges/ybjknds.png',
    requested_info: ['name', 'email'],
    pricing_type: 'fixed_price',
    local_price: {
        amount: '100.0',
        currency: 'USD'
    }
};

/**
 * Create, get and update and delete a Checkout resource.
 */
Checkout.create(checkoutCreateExample).then((response: Resource.Checkout) => {
    return Checkout.retrieve(response.id);
}).then((response) => {
    return Checkout.updateById(response.id, { name: 'some-name', description: 'some-description' });
}).then((response) => {
    return Checkout.deleteById(response.id);
});

/**
 * insert, save, update and delete a Checkout resource.
 */
new Checkout(checkoutCreateExample).insert().then((checkout) => {
    const resource: 'checkout' = checkout.resource;
    checkout.name = 'some-new-name';

    return checkout.save();
}).then((checkout) => {
    const resource: 'checkout' = checkout.resource;
    checkout.description = 'some-new-description';

    return checkout.update();
}).then((checkout) => {
    const resource: 'checkout' = checkout.resource;

    return checkout.delete();
}).then((checkout) => {
    const resource: 'checkout' = checkout.resource;
});

/**
 * List out all available checkouts.
 */
Checkout.list({}).then(([list, paginationInfo]) => {
    const results: number = paginationInfo.total;

    list.forEach((entry) => {
        const id: string = entry.id;
        const resource: 'checkout' = entry.resource;
    });
});

/**
 * Fetch all available checkouts.
 */
Checkout.all({}).then((list) => {
    list.forEach((entry) => {
        const id: string = entry.id;
        const resource: 'checkout' = entry.resource;
    });
});

/**
 * Event resource.
 *
 * @link https://commerce.coinbase.com/docs/api/#event-resource
 */
const eventResponseExample: EventResource = {
    id: '24934862-d980-46cb-9402-43c81b0cdba6',
    resource: 'event',
    type: 'charge:created',
    api_version: '2018-03-22',
    created_at: '2017-01-31T20:49:02Z',
    data: chargeResponseExample,
};

/**
 * Event resource with Checkout data.
 */
const eventCheckoutResponseExample: EventResource<CheckoutResource> = {
    id: '24934862-d980-46cb-9402-43c81b0cdba6',
    resource: 'event',
    type: 'charge:created',
    api_version: '2018-03-22',
    created_at: '2017-01-31T20:49:02Z',
    data: checkoutResponseExample,
};

/**
 * Event resource with Charge data.
 */
const eventChargeResponseExample: EventResource<ChargeResource> = {
    id: '24934862-d980-46cb-9402-43c81b0cdba6',
    resource: 'event',
    type: 'charge:created',
    api_version: '2018-03-22',
    created_at: '2017-01-31T20:49:02Z',
    data: chargeResponseExample,
};

/**
 * Retrieve an event by ID.
 */
Event.retrieve(eventResponseExample.id).then((event) => {
    const type: 'event' = event.resource;
});

/**
 * Get a paginated list of events.
 */
Event.list({}).then(([events, paginationInfo]) => {
    const type: 'event' = events[0].resource;
    const results: number = paginationInfo.total;
});

/**
 * Fetch all available events.
 */
Event.all({}).then((events) => {
    const type: 'event' = events[0].resource;
});

/**
 * Pagination example.
 *
 * @link https://commerce.coinbase.com/docs/api/#pagination
 */
const paginationExample: Pagination = {
    order: 'desc',
    starting_after: null,
    ending_before: null,
    total: 25,
    yielded: 20,
    limit: 20,
    previous_uri: null,
    next_uri: 'https://api.commerce.coinbase.com/checkouts?limit=20&starting_after=fb6721f2-1622-48f0-b713-aac6c819b67a',
    cursor_range: ['a76721f2-1611-48fb-a513-aac6c819a9d6', 'fb6721f2-1622-48f0-b713-aac6c819b67a']
};

/**
 * Verify a signature header.
 *
 * @link https://github.com/coinbase/coinbase-commerce-node#verify-signature-header
 */
// tslint:disable-next-line:void-return no-void-expression
const shouldBeVoid: void = Webhook.verifySigHeader(JSON.stringify(eventResponseExample), 'some-signature', 'my-secret');

/**
 * Verify event body.
 *
 * @link https://github.com/coinbase/coinbase-commerce-node/blob/v1.0.4/lib/Webhook.js#L10
 */
Webhook.verifyEventBody(JSON.stringify(eventResponseExample), 'some-signature', 'my-secret');
