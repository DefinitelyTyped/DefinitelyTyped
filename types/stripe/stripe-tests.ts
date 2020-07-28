import Stripe = require('stripe');
import { customers } from 'stripe';

let stripe = new Stripe('sk_test_BF573NobVn98OiIsPAv7A04K');
stripe = new Stripe('sk_test_BF573NobVn98OiIsPAv7A04K', 'latest');

import { Agent as HttpAgent } from 'http';
import { Agent as HttpsAgent } from 'https';

stripe = new Stripe('sk_test_BF573NobVn98OiIsPAv7A04K', {
    apiVersion: 'latest',
    maxNetworkRetries: 1,
    httpAgent: new HttpAgent(),
    timeout: 1000,
    host: 'api.example.com',
    port: 123,
    telemetry: true
});

stripe = new Stripe('sk_test_BF573NobVn98OiIsPAv7A04K', {});

stripe.setHttpAgent(new HttpAgent());
stripe.setHttpAgent(new HttpsAgent());

stripe.setApiVersion('2019-05-16');

stripe.setAppInfo(); // $ExpectType void
// $ExpectType void
stripe.setAppInfo({
    name: 'DefinitelyTyped',
});

stripe.setTelemetryEnabled(true); // $ExpectType void
stripe.getTelemetryEnabled(); // $ExpectType boolean

stripe.on('request', event => {});
stripe.on('response', event => {});
stripe.once('request', event => {});
stripe.once('response', event => {});
stripe.off('request', event => {});
stripe.off('response', event => {});

// generic list tests
// ##################################################################################
stripe.balance.listTransactions().then(items => {
    items; // $ExpectType IList<IBalanceTransaction>
});
stripe.balance.listTransactions().autoPagingEach(async item => {
    item; // $ExpectType IBalanceTransaction
});
stripe.balance
    .listTransactions()
    .autoPagingToArray({ limit: 1 })
    .then(items => {
        items; // $ExpectType IBalanceTransaction[]
    });
async function testAutoPaging() {
    for await (const item of stripe.balance.listTransactions()) {
        item; // $ExpectType IBalanceTransaction
    }
}

//#region Balance tests
// ##################################################################################

stripe.balance.retrieve((err, balance) => {
    // asynchronously called
});
stripe.balance.retrieve().then(balance => {
    // asynchronously called
});

stripe.balance.retrieveTransaction('txn_17xMvmBoqMA9o2xkYNH2ewNj', (err, balanceTransaction) => {
    // asynchronously called
});
stripe.balance.retrieveTransaction('txn_17xMvmBoqMA9o2xkYNH2ewNj').then(balanceTransaction => {
    // asynchronously called
});

stripe.balance.listTransactions({ limit: 3 }, (err, transactions) => {
    // asynchronously called
});
stripe.balance.listTransactions({ limit: 3 }).then(transactions => {
    // asynchronously called
});
stripe.balance.listTransactions().then(transactions => {
    // asynchronously called
});
//#endregion

//#region BalanceTransaction tests
// ##################################################################################

stripe.balanceTransactions.retrieve('txn_17xMvmBoqMA9o2xkYNH2ewNj', (err, balanceTransaction) => {
    // asynchronously called
});
stripe.balanceTransactions.retrieve('txn_17xMvmBoqMA9o2xkYNH2ewNj').then(balanceTransaction => {
    // asynchronously called
});

stripe.balanceTransactions.list({ limit: 3 }, (err, balanceTransactions) => {
    // asynchronously called
});
stripe.balanceTransactions.list({ limit: 3 }).then(balanceTransactions => {
    // asynchronously called
});
stripe.balanceTransactions.list().then(balanceTransactions => {
    // asynchronously called
});
//#endregion

//#region Charges tests
// ##################################################################################

stripe.charges.create(
    {
        amount: 400,
        currency: 'gbp',
        source: 'tok_17wV94BoqMA9o2xkhlAd3ALf', // obtained with Stripe.js
        description: 'Charge for test@example.com',
    },
    (err, charge) => {
        // asynchronously called
    },
);
stripe.charges
    .create({
        amount: 400,
        currency: 'gbp',
        source: 'tok_17wV94BoqMA9o2xkhlAd3ALf', // obtained with Stripe.js
        description: 'Charge for test@example.com',
    })
    .then(charge => {
        // asynchronously called

        charge.payment_intent; // $ExpectType string
        charge.payment_method; // $ExpectType string
        charge.payment_method_details; // $ExpectType IPaymentMethodDetails

        charge.refunds.create().then(refund => {
            const reason = refund.failure_reason;
            // asynchronously called
        });
        charge.refunds.create({ amount: 100 }).then(refund => {
            // asynchronously called
        });

        charge.refunds.retrieve('re_15jzA4Ee31JkLCeQcxbTbjaL').then(refund => {
            const status: 'pending' | 'succeeded' | 'failed' | 'canceled' = refund.status;
        });

        charge.refunds.update('re_15jzA4Ee31JkLCeQcxbTbjaL', { metadata: { test: 'data' } }).then(refund => {});

        charge.refunds.list({ limit: 3 }).then(refund => {});
        charge.refunds.list().then(refund => {});
    });
stripe.charges.create(
    {
        amount: 400,
        currency: 'gbp',
        source: 'tok_17wV94BoqMA9o2xkhlAd3ALf', // obtained with Stripe.js
        description: 'Charge for test@example.com',
        transfer_data: {
            destination: 'acct_17wV8KBoqMA9o2xk',
        },
    },
    (err, charge) => {
        // asynchronously called
    },
);

stripe.charges.retrieve('ch_15fvyXEe31JkLCeQOo0SwFk9', (err, charge) => {
    // asynchronously called
    if (typeof charge.application_fee === 'object') {
        charge.application_fee.amount;
    }
});
stripe.charges.retrieve('ch_15fvyXEe31JkLCeQOo0SwFk9').then(charge => {
    // asynchronously called
    if (typeof charge.application_fee === 'object') {
        charge.application_fee.amount;
    }
});

stripe.charges.update(
    'ch_15fvyXEe31JkLCeQOo0SwFk9',
    {
        description: 'Charge for test@example.com',
        transfer_group: 'Transfer group for this charge',
    },
    (err, charge) => {
        // asynchronously called
    },
);
stripe.charges
    .update('ch_15fvyXEe31JkLCeQOo0SwFk9', {
        description: 'Charge for test@example.com',
    })
    .then(charge => {
        // asynchronously called
    });

stripe.charges.capture('ch_15fvyXEe31JkLCeQOo0SwFk9', { amount: 1 }, {}, (err, charge) => {
    // asynchronously called
});
stripe.charges.capture('ch_15fvyXEe31JkLCeQOo0SwFk9', { amount: 1 }, {}).then(charge => {
    // asynchronously called
});
stripe.charges.capture('ch_15fvyXEe31JkLCeQOo0SwFk9', {}, {}, (err, charge) => {
    // asynchronously called
});
stripe.charges.capture('ch_15fvyXEe31JkLCeQOo0SwFk9', {}).then(charge => {
    // asynchronously called
});
stripe.charges.capture('ch_15fvyXEe31JkLCeQOo0SwFk9').then(charge => {
    // asynchronously called
});

stripe.charges.list({ limit: 3 }, (err, charges) => {
    // asynchronously called
});
stripe.charges.list({ limit: 3 }).then(charges => {
    // asynchronously called
});

stripe.charges.refund('ch_15fvyXEe31JkLCeQOo0SwFk9', {}, (err, refund) => {
    // asynchronously called
});
stripe.charges.refund('ch_15fvyXEe31JkLCeQOo0SwFk9', {}).then(refund => {
    // asynchronously called
});
stripe.charges.refund('ch_15fvyXEe31JkLCeQOo0SwFk9').then(refund => {
    // asynchronously called
});

stripe.charges.retrieveRefund('ch_15fvyXEe31JkLCeQOo0SwFk9', 're_15jzA4Ee31JkLCeQcxbTbjaL', (err, refund) => {
    // asynchronously called
});
stripe.charges.retrieveRefund('ch_15fvyXEe31JkLCeQOo0SwFk9', 're_15jzA4Ee31JkLCeQcxbTbjaL').then(refund => {
    // asynchronously called
});

stripe.charges.createRefund('ch_15fvyXEe31JkLCeQOo0SwFk9', {}, (err, refund) => {
    // asynchronously called
});
stripe.charges.createRefund('ch_15fvyXEe31JkLCeQOo0SwFk9', (err, refund) => {
    // asynchronously called
});
stripe.charges.createRefund('ch_15fvyXEe31JkLCeQOo0SwFk9').then(refund => {
    // asynchronously called
});

stripe.charges.updateRefund(
    'ch_15fvyXEe31JkLCeQOo0SwFk9',
    're_15jzA4Ee31JkLCeQcxbTbjaL',
    { metadata: { key: 'value' } },
    (err: Stripe.IStripeError, refund: Stripe.refunds.IRefund) => {
        // asynchronously called
    },
);
stripe.charges
    .updateRefund('ch_15fvyXEe31JkLCeQOo0SwFk9', 're_15jzA4Ee31JkLCeQcxbTbjaL', { metadata: { key: 'value' } })
    .then(refund => {
        // asynchronously called
    });

stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', (err, refunds) => {
    // asynchronously called
});
stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9').then(refunds => {
    // asynchronously called
});
stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', { limit: 3 }, (err, refunds) => {
    // asynchronously called
});
stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', { limit: 3 }).then(refunds => {
    // asynchronously called
});

stripe.charges.markAsSafe('ch_15fvyXEe31JkLCeQOo0SwFk9', (err, refunds) => {
    // asynchronously called
});
stripe.charges.markAsSafe('ch_15fvyXEe31JkLCeQOo0SwFk9').then(refunds => {
    // asynchronously called
});

stripe.charges.markAsFraudulent('ch_15fvyXEe31JkLCeQOo0SwFk9', (err, refunds) => {
    // asynchronously called
});
stripe.charges.markAsFraudulent('ch_15fvyXEe31JkLCeQOo0SwFk9').then(refunds => {
    // asynchronously called
});

//#endregion

//#region Checkout tests
// ##################################################################################

stripe.checkout.sessions.create(
    {
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
        payment_method_types: ['card'],
        line_items: [
            {
                name: 'Test',
                description: 'Test',
                amount: 100,
                currency: 'gpb',
                quantity: 1,
            },
        ],
    },
    (err, session) => {
        // asynchronously called
    },
);

stripe.checkout.sessions.retrieve('ch_test_123').then(session => {
    session; // $ExpectType ICheckoutSession
});
stripe.checkout.sessions.retrieve('ch_test_123', { expand: ['payment_intent'] }).then(session => {
    session.payment_intent; // $ExpectType string | IPaymentIntent
});

//#endregion

//#region Checkout with connect tests
// ##################################################################################
// Direct charges
stripe.checkout.sessions.create(
    {
        payment_method_types: ['card'],
        line_items: [
            {
                name: "Cucumber from Roger's Farm",
                amount: 200,
                currency: 'usd',
                quantity: 10,
            },
        ],
        payment_intent_data: {
            application_fee_amount: 200,
        },
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    },
    {
        stripe_account: '{{CONNECTED_STRIPE_ACCOUNT_ID}}',
    },
    (err, session) => {
        // asynchronously called
    },
);

// Destination charges with destination
stripe.checkout.sessions.create(
    {
        payment_method_types: ['card'],
        line_items: [
            {
                name: "Cucumber from Roger's Farm",
                amount: 200,
                currency: 'sek',
                quantity: 10,
            },
        ],
        payment_intent_data: {
            application_fee_amount: 200,
            transfer_data: {
                destination: 'acct_17wV8KBoqMA9o2xk',
            },
        },
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    },
    (err, session) => {
        // asynchronously called
    },
);

// Destination charges with on_behalf_of
stripe.checkout.sessions.create(
    {
        payment_method_types: ['card'],
        line_items: [
            {
                name: "Cucumber from Roger's Farm",
                amount: 200,
                currency: 'sek',
                quantity: 10,
            },
        ],
        payment_intent_data: {
            application_fee_amount: 200,
            on_behalf_of: 'acct_17wV8KBoqMA9o2xk',
            transfer_data: {
                destination: 'acct_17wV8KBoqMA9o2xk',
            },
        },
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    },
    (err, session) => {
        // asynchronously called
    },
);

// Subscriptions
stripe.checkout.sessions.create(
    {
        payment_method_types: ['card'],
        subscription_data: {
            items: [
                {
                    plan: 'plan_123',
                },
            ],
            application_fee_percent: 10,
        },
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    },
    {
        stripe_account: '{{CONNECTED_STRIPE_ACCOUNT_ID}}',
    },
    (err, session) => {
        // asynchronously called
    },
);
//#endregion

//#region CreditNotes tests
// ##################################################################################
stripe.creditNotes.create(
    {
        amount: 100,
        invoice: 'in_15fvyXEe31JkLCeQH7QbgZZb',
    },
    (err, creditNote) => {
        creditNote; // $ExpectType ICreditNote
    },
);
stripe.creditNotes
    .create({
        amount: 100,
        invoice: 'in_15fvyXEe31JkLCeQH7QbgZZb',
    })
    .then(creditNote => {
        creditNote; // $ExpectType ICreditNote
    });

stripe.creditNotes.retrieve('cn_1FsAjKFpRTWZADwSy2clIZum', (err, creditNote) => {
    creditNote; // $ExpectType ICreditNote
});
stripe.creditNotes.retrieve('cn_1FsAjKFpRTWZADwSy2clIZum').then(creditNote => {
    creditNote; // $ExpectType ICreditNote
});

stripe.creditNotes.retrieve('cn_1FsAjKFpRTWZADwSy2clIZum', { expand: ['refund'] }).then(creditNote => {
    creditNote.refund;
});

stripe.creditNotes.update(
    'cn_1FsAjKFpRTWZADwSy2clIZum',
    {
        memo: 'foobar',
    },
    (err, creditNote) => {
        creditNote; // $ExpectType ICreditNote
    },
);
stripe.creditNotes
    .update('cn_1FsAjKFpRTWZADwSy2clIZum', {
        memo: 'foobar',
    })
    .then(creditNote => {
        creditNote; // $ExpectType ICreditNote
    });

stripe.creditNotes.list({ invoice: 'in_15fvyXEe31JkLCeQH7QbgZZb', limit: 3 }, (err, creditNotes) => {
    creditNotes; // $ExpectType IList<ICreditNote>
});
stripe.creditNotes.list({ invoice: 'in_15fvyXEe31JkLCeQH7QbgZZb', limit: 3 }).then(creditNotes => {
    creditNotes; // $ExpectType IList<ICreditNote>
});

stripe.creditNotes.voidCreditNote('cn_1FsAjKFpRTWZADwSy2clIZum', (err, creditNote) => {
    creditNote; // $ExpectType ICreditNote
});

stripe.creditNotes.voidCreditNote('cn_1FsAjKFpRTWZADwSy2clIZum').then(creditNote => {
    creditNote; // $ExpectType ICreditNote
});

//#endregion

//#region Customer tests
// ##################################################################################

stripe.customers.create(
    {
        name: 'John Doe',
        phone: '15551234567',
        description: 'Customer for test@example.com',
        source: 'tok_15V2YhEe31JkLCeQy9iUgsJX', // obtained with Stripe.js
        metadata: { test: '123', test2: 123 }, // IOptionsMetadata test,
        tax_id_data: [
            {
                type: 'eu_vat',
                value: 'DE123456789',
            },
        ],
    },
    (err, customer) => {
        // asynchronously called
    },
);
stripe.customers
    .create({
        description: 'Customer for test@example.com',
        source: 'tok_15V2YhEe31JkLCeQy9iUgsJX', // obtained with Stripe.js
        metadata: null, // IOptionsMetadata test
    })
    .then(customer => {
        // asynchronously called
        customer.cards.create({ card: 'tok_17wV94BoqMA9o2xkhlAd3ALf' }).then(customer => {});
        customer.cards.retrieve('card_17xMvXBoqMA9o2xkq6W5gamx').then(card => {
            const strCustomer: string = card.customer as string;
            const objCustomer: customers.ICustomer = card.customer as customers.ICustomer;
        });
        customer.cards.update('card_17xMvXBoqMA9o2xkq6W5gamx', { name: 'Test' }).then(card => {});
        customer.cards.list().then(cards => {});
        customer.cards.del('card_17xMvXBoqMA9o2xkq6W5gamx').then(confirmation => {});

        customer.subscriptions.create({ items: [{ plan: 'gold' }], trial_period_days: 7 }).then(subscription => {});
        customer.subscriptions
            .create({ items: [{ plan: 'gold' }], trial_end: 'now', billing_cycle_anchor: 1516881177, prorate: true })
            .then(subscription => {});
        customer.subscriptions
            .create({ items: [{ plan: 'gold' }], trial_end: 1516881177, billing: 'send_invoice', days_until_due: 7 })
            .then(subscription => {});
        customer.subscriptions
            .create({ items: [{ plan: 'gold' }], billing: 'charge_automatically' })
            .then(subscription => {});
        customer.subscriptions
            .create({ items: [{ plan: 'gold' }], transfer_data: { destination: 'acct_17wV8KBoqMA9o2xk' }})
            .then(subscription => {});
        customer.subscriptions.retrieve('sub_8Eluur5KoIKxuy').then(subscription => {
            customer.subscriptions
                .update('sub_8Eluur5KoIKxuy', { items: [{ id: subscription.items.data[0].id, plan: 'silver' }] })
                .then(subscription => {});
        });
        customer.subscriptions.update('sub_8Eluur5KoIKxuy', { trial_end: 'now', billing_cycle_anchor: 'now' });
        customer.subscriptions.update('sub_8Eluur5KoIKxuy', {
            trial_end: 1516881177,
            billing: 'send_invoice',
            days_until_due: 7,
            billing_cycle_anchor: 'unchanged',
            cancel_at_period_end: false,
        });
        customer.subscriptions.list().then(subscriptions => {});
        customer.subscriptions.del('sub_8Eluur5KoIKxuy').then(subscription => {});
        customer.subscriptions.deleteDiscount('sub_8Eluur5KoIKxuy').then(confirmation => {});

        const str = '123';
        // IAddress tests:
        customer.address.line1 === str;
        customer.address.line2 === str;
        customer.address.city === str;
        customer.address.postal_code === str;
        customer.address.state === str;
        customer.address.country === str;

        // IMetadata tests:
        customer.metadata['test'] === str;
        customer.metadata.test1 === str;

        // IOptionsMetadata tests:
        let metadata: Stripe.IOptionsMetadata;
        const num = 123;
        metadata['test'] = str;
        metadata['test'] === str;
        metadata['test'] = num;
        metadata['test'] === num;
        metadata.testStr = str;
        metadata.testNum = num;
        metadata.test1 === str;
        metadata.test2 === num;
        metadata = {
            test1: str,
            test2: num,
        };
        metadata = {};
        metadata = null;
    });

// With address
stripe.customers.create(
    {
        name: 'John Doe',
        address: {
            line1: '96 Road Drive',
            country: 'United Kingdom',
        },
    },
    (err, customer) => {
        // asynchronously called
    },
);
stripe.customers.create(
    {
        name: 'John Doe',
        address: {
            line1: '96 Road Drive',
            line2: 'Something',
            city: 'London',
        },
    },
    (err, customer) => {
        // asynchronously called
    },
);

stripe.customers.create(
    {
        description: 'Customer for test@example.com',
        source: 'tok_15V2YhEe31JkLCeQy9iUgsJX', // obtained with Stripe.js
    },
    { stripe_account: '' },
    (err, customer) => {
        // asynchronously called
    },
);
stripe.customers
    .create(
        {
            description: 'Customer for test@example.com',
            source: 'tok_15V2YhEe31JkLCeQy9iUgsJX', // obtained with Stripe.js
        },
        { stripe_account: '' },
    )
    .then(customer => {});

// {"now"} for trial_end
stripe.customers.create({
    description: 'Customer for test@example.com',
    source: 'tok_15V2YhEe31JkLCeQy9iUgsJX', // obtained with Stripe.js
    plan: 'platypi-dev',
    trial_end: 'now',
});

// {number} for trial_end
stripe.customers.create({
    description: 'Customer for test@example.com',
    source: 'tok_15V2YhEe31JkLCeQy9iUgsJX', // obtained with Stripe.js
    plan: 'platypi-dev',
    trial_end: 1516881177,
});

stripe.customers.retrieve('cus_5rfJKDJkuxzh5Q', (err, customer) => {
    // asynchronously called
    customer.cards.create({ card: 'tok_15V2YhEe31JkLCeQy9iUgsJX' }, (err, card) => {
        // asynchronously called
        card.brand;
    });
});
stripe.customers.retrieve('cus_5rfJKDJkuxzh5Q').then(customer => {
    // asynchronously called
});

stripe.customers.update(
    'cus_5rfJKDJkuxzh5Q',
    {
        name: 'John Doe',
        phone: '15551234567',
        description: 'Customer for test@example.com',
        address: {
            line1: '2 New Road',
        },
    },
    (err, customer) => {
        // asynchronously called
    },
);
stripe.customers
    .update('cus_5rfJKDJkuxzh5Q', {
        description: 'Customer for test@example.com',
    })
    .then(customer => {
        // asynchronously called
    });

stripe.customers.del('cus_5rfJKDJkuxzh5Q', (err, confirmation) => {
    // asynchronously called
});
stripe.customers.del('cus_5rfJKDJkuxzh5Q').then(confirmation => {
    // asynchronously called
});

stripe.customers.list({ limit: 3 }, (err, customers) => {
    // asynchronously called
});
stripe.customers.list({ limit: 3 }).then(customers => {
    // asynchronously called
});

stripe.customers.list({ email: 'test@example.com' }).then(customers => {
    // asynchronously called
});

stripe.customers.createCard('cus_5rfJKDJkuxzh5Q', { card: 'tok_15V2YhEe31JkLCeQy9iUgsJX' }, (err, card) => {
    // asynchronously called
});
stripe.customers.createCard('cus_5rfJKDJkuxzh5Q', { card: 'tok_15V2YhEe31JkLCeQy9iUgsJX' }).then(card => {
    // asynchronously called
});

stripe.customers.createSource('cus_5rfJKDJkuxzh5Q', { source: 'tok_15V2YhEe31JkLCeQy9iUgsJX' }, (err, source) => {
    const card = source as Stripe.ICard;
    const bankAcc = source as Stripe.IBankAccount;
});
stripe.customers.createSource('cus_5rfJKDJkuxzh5Q', { source: 'tok_15V2YhEe31JkLCeQy9iUgsJX' }).then(source => {
    const card = source as Stripe.ICard;
    const bankAcc = source as Stripe.IBankAccount;
});

stripe.customers.createSource(
    'cus_5rfJKDJkuxzh5Q',
    {
        source: {
            object: 'card',
            exp_month: 1,
            exp_year: 16,
            number: '4242424242424242',
        },
    },
    (err, card) => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    },
);
stripe.customers
    .createSource('cus_5rfJKDJkuxzh5Q', {
        source: {
            object: 'card',
            exp_month: 1,
            exp_year: 16,
            number: '4242424242424242',
        },
    })
    .then(card => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    });

stripe.customers.createSource(
    'cus_5rfJKDJkuxzh5Q',
    { source: 'btok_8E264Lxsbyvj3E' },
    (err: Stripe.IStripeError, bankAcc: Stripe.IBankAccount) => {
        // asynchronously called
        bankAcc.bank_name;
    },
);
stripe.customers
    .createSource('cus_5rfJKDJkuxzh5Q', { source: 'btok_8E264Lxsbyvj3E' })
    .then((bankAcc: Stripe.IBankAccount) => {
        // asynchronously called
        bankAcc.bank_name;
    });

stripe.customers.createSource(
    'cus_5rfJKDJkuxzh5Q',
    {
        source: {
            object: 'bank_account',
            country: 'US',
            currency: 'USD',
            account_holder_name: 'Account Holder',
            account_holder_type: 'individual',
            account_number: '000123456789',
            routing_number: '110000000',
        },
    },
    (err, bankAcc) => {
        // asynchronously called
        bankAcc; // $ExpectType IBankAccount
    },
);
stripe.customers
    .createSource('cus_5rfJKDJkuxzh5Q', {
        source: {
            object: 'bank_account',
            country: 'US',
            currency: 'USD',
            account_holder_name: 'Account Holder',
            account_holder_type: 'individual',
            account_number: '000123456789',
            routing_number: '110000000',
        },
    })
    .then(bankAcc => {
        // asynchronously called
        bankAcc; // $ExpectType IBankAccount
    });

stripe.customers.createSubscription('cus_5rfJKDJkuxzh5Q', {
    items: [{ plan: 'some_plan', quantity: 2 }],
    pay_immediately: false,
});

stripe.customers.retrieveCard('cus_5rfJKDJkuxzh5Q', 'card_15fvyXEe31JkLCeQ9KMktP5S', (err, card) => {
    // asynchronously called
    const obj: Stripe.ICard = card;
});
stripe.customers.retrieveCard('cus_5rfJKDJkuxzh5Q', 'card_15fvyXEe31JkLCeQ9KMktP5S').then(card => {
    // asynchronously called
    const obj: Stripe.ICard = card;
});

stripe.customers.updateCard(
    'cus_5rfJKDJkuxzh5Q',
    'card_15fvyXEe31JkLCeQ9KMktP5S',
    { name: 'Jane Austen' },
    (err, card) => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    },
);

stripe.customers
    .updateCard('cus_5rfJKDJkuxzh5Q', 'card_15fvyXEe31JkLCeQ9KMktP5S', { name: 'Jane Austen' })
    .then(card => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    });

stripe.customers.deleteCard('cus_5rfJKDJkuxzh5Q', 'card_15fvyXEe31JkLCeQ9KMktP5S', (err, confirmation) => {
    // asynchronously called
});
stripe.customers.deleteCard('cus_5rfJKDJkuxzh5Q', 'card_15fvyXEe31JkLCeQ9KMktP5S').then(confirmation => {
    // asynchronously called
});

stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', null, (err, cards) => {
    // asynchronously called
});
stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', null).then(cards => {
    // asynchronously called
});

stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', (err, cards) => {
    // asynchronously called
});
stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc').then(cards => {
    // asynchronously called
});

stripe.customers.listSources('cu_15fvyVEe31JkLCeQvr155iqc', null, (err, cards) => {
    // asynchronously called
});
stripe.customers.listSources('cu_15fvyVEe31JkLCeQvr155iqc', null).then(cards => {
    // asynchronously called
});
stripe.customers
    .listSources('cu_15fvyVEe31JkLCeQvr155iqc', {
        object: 'card',
        limit: 100,
    })
    .then(cards => {
        // asynchronously called
    });
stripe.customers
    .listSources('cu_15fvyVEe31JkLCeQvr155iqc', {
        object: 'bank_account',
        limit: 100,
    })
    .then(cards => {
        // asynchronously called
    });

stripe.customers.retrieveSubscription('cus_5rfJKDJkuxzh5Q', 'sub_5rfJxnBLGSwsYp', (err, subscription) => {
    // asynchronously called
});
stripe.customers.retrieveSubscription('cus_5rfJKDJkuxzh5Q', 'sub_5rfJxnBLGSwsYp').then(subscription => {
    // asynchronously called
});

stripe.customers.updateSubscription(
    'cus_5rfJKDJkuxzh5Q',
    'sub_5rfJxnBLGSwsYp',
    { items: [{ id: 'si_62U5U5BoqBA2o2xp6Eqcl6J7', plan: 'platypi-dev' }], pay_immediately: false },
    (err, subscription) => {
        // asynchronously called
    },
);
stripe.customers
    .updateSubscription('cus_5rfJKDJkuxzh5Q', 'sub_5rfJxnBLGSwsYp', {
        items: [{ id: 'si_62U5U5BoqBA2o2xp6Eqcl6J7', plan: 'platypi-dev' }],
    })
    .then(subscription => {
        // asynchronously called
    });

stripe.customers.cancelSubscription('cus_5rfJKDJkuxzh5Q', 'sub_5rfJxnBLGSwsYp', null, (err, confirmation) => {
    // asynchronously called
});
stripe.customers.cancelSubscription('cus_5rfJKDJkuxzh5Q', 'sub_5rfJxnBLGSwsYp', null).then(confirmation => {
    // asynchronously called
});

stripe.customers.cancelSubscription('cus_5rfJKDJkuxzh5Q', 'sub_5rfJxnBLGSwsYp', (err, confirmation) => {
    // asynchronously called
});
stripe.customers.cancelSubscription('cus_5rfJKDJkuxzh5Q', 'sub_5rfJxnBLGSwsYp').then(confirmation => {
    // asynchronously called
});

stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', null, (err, subscriptions) => {
    // asynchronously called
});
stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', null).then(subscriptions => {
    // asynchronously called
});

stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', (err, subscriptions) => {
    // asynchronously called
});
stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc').then(subscriptions => {
    // asynchronously called
});

stripe.customers.deleteDiscount('cus_5rfJKDJkuxzh5Q', (err, confirmation) => {
    // asynchronously called
});
stripe.customers.deleteDiscount('cus_5rfJKDJkuxzh5Q').then(confirmation => {
    // asynchronously called
});

stripe.customers.deleteSubscriptionDiscount('cus_5rfJKDJkuxzh5Q', 'sub_5rfJxnBLGSwsYp', (err, confirmation) => {
    // asynchronously called
});
stripe.customers.deleteSubscriptionDiscount('cus_5rfJKDJkuxzh5Q', 'sub_5rfJxnBLGSwsYp').then(confirmation => {
    // asynchronously called
});

stripe.customers.createBalanceTransaction(
    'cus_5rfJKDJkuxzh5Q',
    { amount: -1000, currency: 'usd' },
    (err: Stripe.IStripeError, transaction: Stripe.customerBalanceTransactions.ICustomerBalanceTransaction) => {
        // asynchronously called
        transaction.id;
    },
);

stripe.customers
    .createBalanceTransaction('cus_5rfJKDJkuxzh5Q', { amount: -1000, currency: 'usd' })
    .then(transaction => {
        // asynchronously called
    });

stripe.customers.updateBalanceTransaction(
    'cus_5rfJKDJkuxzh5Q',
    'cbtxn_1FKTaPJzPJMCPpdPMDh9CxBe',
    { description: 'Some description' },
    (err: Stripe.IStripeError, transaction: Stripe.customerBalanceTransactions.ICustomerBalanceTransaction) => {
        // asynchronously called
        transaction.id;
    },
);

stripe.customers
    .updateBalanceTransaction('cus_5rfJKDJkuxzh5Q', 'cbtxn_1FKTaPJzPJMCPpdPMDh9CxBe', {
        description: 'Some description',
    })
    .then(transaction => {
        // asynchronously called
    });

stripe.customers.retrieveBalanceTransaction(
    'cus_5rfJKDJkuxzh5Q',
    'cbtxn_1FKTaPJzPJMCPpdPMDh9CxBe',
    (err, transaction) => {
        // asynchronously called
    },
);

stripe.customers
    .retrieveBalanceTransaction('cus_5rfJKDJkuxzh5Q', 'cbtxn_1FKTaPJzPJMCPpdPMDh9CxBe')
    .then(transaction => {
        // asynchronously called
    });

stripe.customers.listBalanceTransactions('cu_15fvyVEe31JkLCeQvr155iqc', null, (err, transactions) => {
    // asynchronously called
});

stripe.customers.listBalanceTransactions('cu_15fvyVEe31JkLCeQvr155iqc', null).then(transactions => {
    // asynchronously called
});

stripe.customers.listBalanceTransactions('cu_15fvyVEe31JkLCeQvr155iqc', (err, transactions) => {
    // asynchronously called
});

stripe.customers.listBalanceTransactions('cu_15fvyVEe31JkLCeQvr155iqc').then(transactions => {
    // asynchronously called
});

//#endregion

//#region Customer Tax Ids
// ##################################################################################

stripe.customers.createTaxId(
    'cus_FhdWgak8aeNfht',
    {
        type: 'eu_vat',
        value: 'DE123456789',
    },
    (err, taxId) => {
        // asynchronously called
    },
);

stripe.customers.retrieveTaxId('cus_FhdWgak8aeNfht', 'txi_123456789', (err, taxId) => {
    // asynchronously called
});

stripe.customers.deleteTaxId('cus_FhdWgak8aeNfht', 'txi_123456789', (err, confirmation) => {
    // asynchronously called
});

stripe.customers.listTaxIds('cus_FhdWgak8aeNfht', (err, taxIds) => {
    // asynchronously called
});

//#endregion

//#region Disputes tests
// ##################################################################################

//#endregion

//#region Events tests
// ##################################################################################

const fakeEvent: Stripe.events.IEvent = stripe.webhooks.constructEvent('', '', '');
const previousStatus = fakeEvent.data.previous_attributes && fakeEvent.data.previous_attributes.status;

//#endregion

//#region File Uploads tests
// ##################################################################################

//#endregion

//#region Refunds tests
// ##################################################################################

//#endregion

//#region Tokens tests
// ##################################################################################

//#endregion

//#region Topups tests
// ##################################################################################

stripe.topups.create(
    {
        amount: 2000,
        currency: 'usd',
        description: 'Top-up for Jenny Rosen',
        statement_descriptor: 'Top-up',
        metadata: {
            key: 'any',
        },
        source: 'sourceId',
        transfer_group: 'transfer group',
    },
    (err, topup) => {
        topup; // $ExpectType ITopup
    },
);

stripe.topups
    .create({
        amount: 2000,
        currency: 'usd',
        description: 'Top-up for Jenny Rosen',
        statement_descriptor: 'Top-up',
        metadata: {
            key: 'any',
        },
        source: 'sourceId',
        transfer_group: 'transfer group',
    })
    .then(topup => {
        topup; // $ExpectType ITopup
    });

stripe.topups.retrieve('tu_123456789', (err, topup) => {
    topup; // $ExpetType ITopup
});

stripe.topups.retrieve('tu_123456789').then(topup => {
    topup; // $ExpectType ITopup
});

stripe.topups.update('tu_123456789', { metadata: { order_id: '6735' } }, (err, topup) => {
    topup; // $ExpectType ITopup
});

stripe.topups.update('tu_123456789', { metadata: { order_id: '6735' }, description: 'description' }, (err, topup) => {
    topup; // $ExpectType ITopup
});

stripe.topups.update('tu_123456789', { metadata: { order_id: '6735' } }).then(topup => {
    topup; // $ExpectType ITopup
});

stripe.topups.list({ amount: '25', limit: 3, status: 'canceled' }, (err, topups) => {
    topups; // $ExpectType IList<ITopup>
});

stripe.topups.list({ amount: { gt: '24', lt: '50' }, limit: 3, status: 'succeeded' }, (err, topups) => {
    topups; // $ExpectType IList<ITopup>
});

stripe.topups.list({ limit: 3 }).then(topups => {
    topups; // $ExpectType IList<ITopup>
});

stripe.topups.cancel('tu_123456789', (err, topup) => {
    topup; // $ExpectType ITopup
});

stripe.topups.cancel('tu_123456789').then(topup => {
    topup; // $ExpectType ITopup
});

//#endregion

//#region Transfers tests
// ##################################################################################

stripe.transfers.create(
    {
        amount: 100,
        currency: 'USD',
        destination: 'acct_17wV8KBoqMA9o2xk',
        source_type: 'bank_account',
        transfer_group: 'Order_X',
    },
    (err, reversal) => {
        // asynchronously called
    },
);

stripe.transfers
    .create({
        amount: 100,
        currency: 'USD',
        destination: 'acct_17wV8KBoqMA9o2xk',
        source_type: 'bank_account',
        transfer_group: 'Order_X',
    })
    .then(reversal => {
        // asynchronously called
    });

//#endregion

//#region Transfers Reversals tests
// ##################################################################################

stripe.transfers.createReversal('tr_17F2JBFuhr4V1legrq97JrFE', (err, reversal) => {
    // asynchronously called
});

stripe.transfers.createReversal('tr_17F2JBFuhr4V1legrq97JrFE').then(reversal => {
    // asynchronously called
});

//#endregion

//#region Accounts test
// ##################################################################################

stripe.accounts.create(
    {
        type: 'custom',
        country: 'US',
        email: 'bob@example.com',
        requested_capabilities: ['card_payments', 'transfers'],
    },
    (err, account) => {
        // asynchronously called
    },
);
stripe.accounts
    .create({
        type: 'custom',
        business_type: 'individual',
        individual: {
            first_name: 'John',
            last_name: 'Smith',
            email: 'test@example.com',
            dob: {
                day: 1,
                month: 1,
                year: 1970,
            },
        },
    })
    .then(customer => {
        // asynchronously called
    });

stripe.accounts.retrieve('acct_17wV8KBoqMA9o2xk', (err, account) => {
    // asynchronously called
});
stripe.accounts.retrieve('acct_17wV8KBoqMA9o2xk').then(account => {
    // asynchronously called

    // account should have external_accounts property
    account.external_accounts; // $ExpectType IList<IExternalAccount>
});

stripe.accounts.update(
    'acct_17wV8KBoqMA9o2xk',
    {
        business_profile: {
            support_phone: '555-867-5309',
        },
    },
    (err, account) => {
        // asynchronously called
    },
);
stripe.accounts
    .update('acct_17wV8KBoqMA9o2xk', {
        business_profile: {
            support_phone: '555-867-5309',
        },
    })
    .then(account => {
        // asynchronously called
    });

stripe.accounts
    .update('acct_17wV8KBoqMA9o2xk', {
        settings: {
            payouts: {
                statement_descriptor: 'From Stripe',
            },
        },
    })
    .then(account => {
        // asynchronously called
    });

stripe.accounts
    .update('acct_17wV8KBoqMA9o2xk', {
        settings: {
            payouts: {
                schedule: {
                    delay_days: 5,
                    interval: 'monthly',
                    monthly_anchor: 4,
                    weekly_anchor: 'monday',
                },
            },
        },
    })
    .then(account => {
        // asynchronously called
    });

stripe.accounts
    .update('acct_17wV8KBoqMA9o2xk', {
        business_profile: {
            mcc: '1234',
            name: 'My Amazing Company',
            product_description: 'My Amazing Product',
            support_address: {
                line1: '42 Wallaby Way',
                line2: 'Apt 1',
                city: 'Sydney',
                state: 'NSW',
                postal_code: '1000',
                country: 'Australia',
            },
            support_email: 'support@example.org',
            support_phone: '+15555551212',
            support_url: 'https://example.org',
            url: 'https://example.org',
        },
        settings: {
            branding: {
                icon: 'https://example.org/icon.png',
                logo: 'https://example.org/logo.png',
                primary_color: '#a346b7',
            },
            card_payments: {
                decline_on: {
                    avs_failure: false,
                    cvc_failure: false,
                },
                statement_descriptor_prefix: 'foo',
            },
            dashboard: {
                display_name: 'My Amazing Company',
                timezone: 'America/Montreal',
            },
            payments: {
                statement_descriptor: 'example.org',
            },
            payouts: {
                debit_negative_balances: true,
                schedule: {
                    delay_days: 7,
                    interval: 'daily',
                    monthly_anchor: 1,
                    weekly_anchor: 'monday',
                },
                statement_descriptor: 'foo',
            },
        },
    })
    .then(account => {
        // asynchronously called
    });

stripe.accounts
    .update('acct_17wV8KBoqMA9o2xk', {
        business_profile: {
            mcc: null,
            name: null,
            product_description: null,
            support_address: {
                line1: null,
                line2: null,
                city: null,
                state: null,
                postal_code: null,
                country: null,
            },
            support_email: null,
            support_phone: null,
            support_url: null,
            url: null,
        },
        settings: {
            branding: {
                icon: null,
                logo: null,
                primary_color: null,
            },
            card_payments: {
                decline_on: {
                    avs_failure: null,
                    cvc_failure: null,
                },
                statement_descriptor_prefix: null,
            },
            dashboard: {
                display_name: null,
                timezone: null,
            },
            payments: {
                statement_descriptor: null,
            },
            payouts: {
                debit_negative_balances: null,
                schedule: {
                    delay_days: null,
                    interval: null,
                    monthly_anchor: null,
                    weekly_anchor: null,
                },
                statement_descriptor: null,
            },
        },
    })
    .then(account => {
        // asynchronously called
    });

stripe.accounts.del('acct_17wV8KBoqMA9o2xk', (err, confirmation) => {});
stripe.accounts.del('acct_17wV8KBoqMA9o2xk').then(confirmation => {});

stripe.accounts.reject('acct_17wV8KBoqMA9o2xk', { reason: 'fraud' }, (err, account) => {
    // asynchronously called
});
stripe.accounts.reject('acct_17wV8KBoqMA9o2xk', { reason: 'fraud' }).then(account => {
    // asynchronously called
});

stripe.accounts.list({ limit: 3 }, (err, accounts) => {
    // asynchronously called
});
stripe.accounts.list({ limit: 3 }).then(accounts => {
    // asynchronously called
});
stripe.accounts.retrieve('acct_17wV8KBoqMA9o2xk').then(accounts => {
    const payouts_enabled: boolean = accounts.payouts_enabled;
});
stripe.accounts.createLoginLink('acct_17wV8KBoqMA9o2xk').then(loginLink => {
    const object: string = loginLink.object;
    const created: number = loginLink.created;
    const url: string = loginLink.url;
});
stripe.accounts.createLoginLink('acct_17wV8KBoqMA9o2xk', { redirect_url: 'http://localhost:3000' }).then(loginLink => {
    const object: string = loginLink.object;
    const created: number = loginLink.created;
    const url: string = loginLink.url;
});

//#endregion

//#region Connect Account Person tests
// ##################################################################################

stripe.accounts
    .createPerson('acct_17wV8KBoqMA9o2xk', {
        email: 'test@example.com',
        relationship: {
            executive: true,
        },
    })
    .then(person => {
        const email: string = person.email;
    });
stripe.accounts
    .updatePerson('acct_17wV8KBoqMA9o2xk', 'person_G1SCYvWQBpvF37', {
        first_name: 'John',
        last_name: 'Doe',
        phone: '15551234567',
    })
    .then(person => {
        const first_name: string = person.first_name;
        const last_name: string = person.last_name;
    });

stripe.accounts.deletePerson('acct_17wV8KBoqMA9o2xk', 'person_G1SCYvWQBpvF37').then(person => {
    const email: string = person.email;
});

stripe.accounts.retrievePerson('acct_17wV8KBoqMA9o2xk', 'person_G1SCYvWQBpvF37').then(person => {
    const email: string = person.email;
});

stripe.accounts
    .listPersons(
        'acct_17wV8KBoqMA9o2xk',
        { relationship: { executive: true }, limit: 3 },
        { stripe_account: 'acct_17wV8KOoqMF9a2xk' },
    )
    .then(persons => {
        const email: string = persons.data[0].email;
    });
stripe.accounts.listPersons('acct_17wV8KBoqMA9o2xk', { relationship: { executive: true }, limit: 3 }).then(persons => {
    const email: string = persons.data[0].email;
});
stripe.accounts.listPersons('acct_17wV8KBoqMA9o2xk', { stripe_account: 'acct_17wV8KOoqMF9a2xk' }).then(persons => {
    const email: string = persons.data[0].email;
});
stripe.accounts.listPersons('acct_17wV8KBoqMA9o2xk').then(persons => {
    const email: string = persons.data[0].email;
});
//#endregion

//#region Issuing tests
// ##################################################################################

// Authorizations
stripe.issuing.authorizations.approve('iauth_h1i4AfJvb7x60ib4t6HYQah4').then(authorization => {
    // asynchronously called
});
stripe.issuing.authorizations.decline('iauth_h1i4AfJvb7x60ib4t6HYQah4').then(authorization => {
    // asynchronously called
});
stripe.issuing.authorizations.list({ card: 'ic_hl1LlYJvbh660ib4viYdZdj4' }).then(authorization => {
    // asynchronously called
});
stripe.issuing.authorizations.retrieve('iauth_h1i4AfJvb7x60ib4t6HYQah4').then(authorization => {
    // asynchronously called
});
stripe.issuing.authorizations.update('iauth_h1i4AfJvb7x60ib4t6HYQah4', { metadata: {} }).then(authorization => {
    // asynchronously called
});

// Cardholders
stripe.issuing.cardholders.create({
    billing: {
        address: {
            line1: '1 Remote Way',
            line2: 'Mistro Inc',
            city: 'San Francisco',
            state: 'CA',
            postal_code: '94104',
            country: 'US',
        }
    },
    name: 'John Doe',
    type: 'business_entity',
}).then(cardholder => {
    // asynchronously called
});
stripe.issuing.cardholders.list({ email: 'hello@mistro.io' }).then(cardholder => {
    // asynchronously called
});
stripe.issuing.cardholders.retrieve('ich_jd4b0pJvb7x60u442RQUnv2f').then(cardholder => {
    // asynchronously called
});
stripe.issuing.cardholders.update('ich_jd4b0pJvb7x60u442RQUnv2f', { metadata: {} }).then(cardholder => {
    // asynchronously called
});

stripe.issuing.cards.create({ currency: 'usd', type: 'physical' }).then(card => {
    // asynchronously called
});
stripe.issuing.cards.list({ cardholder: 'ich_jd4b0pJvb7x60u442RQUnv2f'}).then(card => {
    // asynchronously called
});
stripe.issuing.cards.retrieve('ic_hl1LlYJvbh660ib4viYdZdj4').then(card => {
    // asynchronously called
});
stripe.issuing.cards.retrieveDetails('ic_hl1LlYJvbh660ib4viYdZdj4').then(card => {
    // asynchronously called
});
stripe.issuing.cards.update('ic_hl1LlYJvbh660ib4viYdZdj4', { metadata: {} }).then(card => {
    // asynchronously called
});

stripe.issuing.disputes.create({
    disputed_transaction: 'ipi_6diQkdnvb7x60ib4j9amJDBW',
    reason: 'fraudlent',
}).then(dispute => {
    // asynchronously called
});
stripe.issuing.disputes.list({ limit: 3 }).then(dispute => {
    // asynchronously called
});
stripe.issuing.disputes.retrieve('ipi_6diQkdnvb7x60ib4j9amJDBW').then(dispute => {
    // asynchronously called
});
stripe.issuing.disputes.update('ipi_6diQkdnvb7x60ib4j9amJDBW', { metadata: {} }).then(dispute => {
    // asynchronously called
});

stripe.issuing.transactions.list({ limit: 3}).then(dispute => {
    // asynchronously called
});
stripe.issuing.transactions.retrieve('ipi_6diQkdnvb7x60ib4j9amJDBW').then(dispute => {
    // asynchronously called
});
stripe.issuing.transactions.update('ipi_6diQkdnvb7x60ib4j9amJDBW', { metadata: {} }).then(dispute => {
    // asynchronously called
});

// ##endregion

//#region Application Fee Refunds tests
// ##################################################################################

//#endregion

//#region Application Fees tests
// ##################################################################################
stripe.applicationFees.retrieveRefund('fee_1Eq2auEELBA7Bnp1FpeuNccq', 'fr_1Eq2auEELBA7Bnp1sNrbVAO9').then(refund => {
    refund; // $ExpectType IApplicationFeeRefund
});

//#endregion

//#region Country Specs tests
// ##################################################################################

//#endregion

//#region Reviews tests
// ##################################################################################

stripe.reviews.approve('prv_1FhJ93BZBR5SQORgPByBqMbC', (err, review) => {
    review; // $ExpectType IReview
});

stripe.reviews.approve('prv_1FhJ93BZBR5SQORgPByBqMbC').then(review => {
    review; // $ExpectType IReview
});

stripe.reviews.retrieve('prv_1FhJ93BZBR5SQORgPByBqMbC', (err, review) => {
    review; // $ExpectType IReview
});

stripe.reviews.retrieve('prv_1FhJ93BZBR5SQORgPByBqMbC').then(review => {
    review; // $ExpectType IReview
});

stripe.reviews.list({ limit: 3 }, (err, reviews) => {
    reviews; // $ExpectType IList<IReview>
});

stripe.reviews.list({ limit: 3 }).then(reviews => {
    reviews; // $ExpectType IList<IReview>
});

//#endregion

//#region External Accounts tests
// ##################################################################################

stripe.accounts.createExternalAccount('', { external_account: 'btok_8E264Lxsbyvj3E' }, (err, extAcc) => {
    const card = extAcc as Stripe.ICard;
    const bankAcc = extAcc as Stripe.IBankAccount;
});
stripe.accounts.createExternalAccount('', { external_account: 'tok_15V2YhEe31JkLCeQy9iUgsJX' }).then(extAcc => {
    const card = extAcc as Stripe.ICard;
    const bankAcc = extAcc as Stripe.IBankAccount;
});

stripe.accounts
    .createExternalAccount(
        '',
        { external_account: 'tok_15V2YhEe31JkLCeQy9iUgsJX' },
        { stripe_account: 'acct_17wV8KOoqMF9a2xk' },
    )
    .then(extAcc => {
        const card = extAcc as Stripe.ICard;
        const bankAcc = extAcc as Stripe.IBankAccount;
    });
stripe.accounts
    .createExternalAccount('', { external_account: 'tok_15V2YhEe31JkLCeQy9iUgsJX' }, 'acct_17wV8KOoqMF9a2xk')
    .then(extAcc => {
        const card = extAcc as Stripe.ICard;
        const bankAcc = extAcc as Stripe.IBankAccount;
    });

//#endregion

//#region Bank Accounts tests
// ##################################################################################

//#endregion

//#region Bitcoin Receivers tests
// ##################################################################################

//#endregion

//#region Cards tests
// ##################################################################################

//#endregion

//#region Orders tests
// ##################################################################################
stripe.orders.retrieve('or_1C8XKwEe31JkLCeQHg0jcisf', (err, order) => {
    // asynchronously called
    const amount_returned: number = order.amount_returned;
});

//#endregion

//#region Order Items tests
// ##################################################################################

//#endregion

//#region Products tests
// ##################################################################################

stripe.products.create(
    {
        name: 'My amazing product',
        type: 'service',
        attributes: ['color'],
    },
    (err, coupon) => {
        // asynchronously called
    },
);
stripe.products
    .create({
        name: 'My amazing product',
        type: 'service',
        attributes: ['color'],
    })
    .then(product => {
        // asynchronously called
        const prodType: 'service' | 'good' = product.type;
    });

//#endregion

//#region Oauth tests
// ##################################################################################

stripe.oauth
    .token({
        grant_type: 'authorization_code',
        code: 'ac_123456789',
    })
    .then(response => {
        // asynchronously called
        const connected_account_id = response.stripe_user_id;
    });

stripe.oauth
    .token({
        grant_type: 'refresh_token',
        refresh_token: 'random_refresh_token',
    })
    .then(response => {
        // asynchronously called
        const access_token = response.access_token;
    });

stripe.oauth.deauthorize('ac_123456789', 'userid_123456789').then(response => {
    // asynchronously called
    const stripe_user_id = response.stripe_user_id;
});

//#endregion

//#region SKUs tests
// ##################################################################################

//#endregion

//#region WebHooks tests
// ##################################################################################

const webhookRequest = {
    rawBody: '',
    headers: { 'stripe-signature': '' },
};
const webhookSecret = '';

const event: Stripe.events.IEvent = stripe.webhooks.constructEvent(
    webhookRequest.rawBody,
    webhookRequest.headers['stripe-signature'],
    webhookSecret,
);

const header: string = stripe.webhooks.generateTestHeaderString({
    payload: JSON.stringify(event),
    secret: webhookSecret,
});

//#endregion

//#region WebHook Endpoints tests
// ##################################################################################

stripe.webhookEndpoints.create(
    {
        url: 'https://example.com/success',
        enabled_events: ['plan.updated'],
    },
    (err, webhookEndpoint) => {
        // asynchronously called
    },
);
stripe.webhookEndpoints
    .create({
        url: 'https://example.com/success',
        enabled_events: ['plan.updated'],
    })
    .then(webhookEndpoint => {
        // asynchronously called
    });

stripe.webhookEndpoints.retrieve('we_1FdwxEJmFhanyRvFIL756jiC', (err, webhookEndpoint) => {
    // asynchronously called
});
stripe.webhookEndpoints.retrieve('we_1FdwxEJmFhanyRvFIL756jiC').then(webhookEndpoint => {
    // asynchronously called
});

stripe.webhookEndpoints.update(
    'we_1FdwxEJmFhanyRvFIL756jiC',
    {
        metadata: { key: 'value' },
    },
    (err: Stripe.IStripeError, webhook: Stripe.webhookEndpoints.IWebhookEndpoint) => {
        // asynchronously called
    },
);
stripe.webhookEndpoints
    .update('we_1FdwxEJmFhanyRvFIL756jiC', {
        metadata: { key: 'value' },
    })
    .then(coupon => {
        // asynchronously called
    });

stripe.webhookEndpoints.del('we_1FdwxEJmFhanyRvFIL756jiC', (err, confirmation) => {});
stripe.webhookEndpoints.del('we_1FdwxEJmFhanyRvFIL756jiC').then(confirmation => {});

stripe.webhookEndpoints.list({ limit: 3 }, (err, coupons) => {
    // asynchronously called
});
stripe.webhookEndpoints.list({ limit: 3 }).then(coupons => {
    // asynchronously called
});

//#endregion

//#region Coupons tests
// ##################################################################################

stripe.coupons.create(
    {
        name: '25% Off',
        percent_off: 25,
        duration: 'repeating',
        duration_in_months: 3,
        id: '25OFF',
    },
    (err, coupon) => {
        // asynchronously called
    },
);
stripe.coupons
    .create({
        name: '25% Off',
        percent_off: 25,
        duration: 'repeating',
        duration_in_months: 3,
        id: '25OFF',
    })
    .then(coupon => {
        // asynchronously called
    });

stripe.coupons.retrieve('25OFF', (err, coupon) => {
    // asynchronously called
});
stripe.coupons.retrieve('25OFF').then(coupon => {
    // asynchronously called
});

stripe.coupons.update(
    '25OFF',
    {
        metadata: { key: 'value' },
    },
    (err: Stripe.IStripeError, coupon: Stripe.coupons.ICoupon) => {
        // asynchronously called
    },
);
stripe.coupons
    .update('25OFF', {
        metadata: { key: 'value' },
    })
    .then(coupon => {
        // asynchronously called
    });

stripe.coupons.del('25OFF', (err, confirmation) => {});
stripe.coupons.del('25OFF').then(confirmation => {});

stripe.coupons.list({ limit: 3 }, (err, coupons) => {
    // asynchronously called
});
stripe.coupons.list({ limit: 3 }).then(coupons => {
    // asynchronously called
});

//#endregion

//#region FileLinks tests
// ##################################################################################

stripe.fileLinks.create(
    { file: 'file_1FgxGXBZBR5SQORg4FkgjG2O', expires_at: 1542822417, metadata: { any: 'any' } },
    (err, fileLink) => {
        fileLink; // $ExpectType IFileLink
    },
);

stripe.fileLinks
    .create({ file: 'file_1FgxGXBZBR5SQORg4FkgjG2O', expires_at: 1542822417, metadata: { any: 'any' } })
    .then(fileLink => {
        fileLink; // $ExpectType IFileLink
    });

stripe.fileLinks.retrieve('link_1FhJXrBZBR5SQORg2hZCYnZ7', (err, fileLink) => {
    fileLink; // $ExpectType IFileLink
});

stripe.fileLinks.retrieve('link_1FhJXrBZBR5SQORg2hZCYnZ7').then(fileLink => {
    fileLink; // $ExpectType IFileLink
});

stripe.fileLinks.update(
    'link_1FhJXrBZBR5SQORg2hZCYnZ7',
    { expires_at: 'now', metadata: { order_id: '6735' } },
    (err, fileLink) => {
        fileLink; // $ExpectType IFileLink
    },
);

stripe.fileLinks.update('link_1FhJXrBZBR5SQORg2hZCYnZ7', { expires_at: 1542822417 }, (err, fileLink) => {
    fileLink; // $ExpectType IFileLink
});

stripe.fileLinks.update('link_1FhJXrBZBR5SQORg2hZCYnZ7', {}).then(fileLink => {
    fileLink; // $ExpectType IFileLink
});

stripe.fileLinks.list({ limit: 3 }, (err, fileLinks) => {
    // asynchronously called
});

stripe.fileLinks.list({ limit: 3 }).then(fileLinks => {
    // asynchronously called
});

//#endregion

//#region Discounts tests
// ##################################################################################

//#endregion

//#region Invoices tests
// ##################################################################################

stripe.invoices.create(
    {
        customer: 'cus_5rfJKDJkuxzh5Q',
    },
    (err, invoice) => {
        // asynchronously called
    },
);
stripe.invoices
    .create({
        customer: 'cus_5rfJKDJkuxzh5Q',
    })
    .then(invoice => {
        // asynchronously called
    });

stripe.invoices.retrieve('in_15fvyXEe31JkLCeQH7QbgZZb', (err, invoice) => {
    // asynchronously called
});
stripe.invoices.retrieve('in_15fvyXEe31JkLCeQH7QbgZZb').then(invoice => {
    // asynchronously called
});

stripe.invoices.retrieveLines('in_15fvyXEe31JkLCeQH7QbgZZb', { limit: 5 }, (err, lines) => {
    // asynchronously called
    lines.data[0].type = 'invoiceitem';
});
stripe.invoices.retrieveLines('in_15fvyXEe31JkLCeQH7QbgZZb', { limit: 5 }).then(lines => {
    // asynchronously called
});
stripe.invoices.listLineItems('in_15fvyXEe31JkLCeQH7QbgZZb', { limit: 5 }).then(lines => {
    lines; // $ExpectType IList<IInvoiceLineItem>
});

stripe.invoices.retrieveUpcoming('cus_5rfJKDJkuxzh5Q', null, (err, upcoming) => {
    // asynchronously called
});
stripe.invoices.retrieveUpcoming('cus_5rfJKDJkuxzh5Q', null).then(upcoming => {
    // asynchronously called
});

stripe.invoices.retrieveUpcoming('cus_5rfJKDJkuxzh5Q', (err, upcoming) => {
    // asynchronously called
});
stripe.invoices.retrieveUpcoming('cus_5rfJKDJkuxzh5Q').then(upcoming => {
    // asynchronously called
});
stripe.subscriptions.create({ items: [{ plan: 'platypi-dev' }], customer: 'cus_5rfJKDJkuxzh5Q' }).then(subscription => {
    // asynchronously called

    stripe.invoices
        .retrieveUpcoming({
            customer: 'cus_5rfJKDJkuxzh5Q',
            subscription: subscription.id,
        })
        .then(invoices => {
            invoices; // $ExpectType IInvoice
        });
});

stripe.invoices.listUpcomingLineItems({ limit: 5 }).then(lines => {
    lines; // $ExpectType IList<IInvoiceLineItem>
});

stripe.invoices.update(
    'in_15fvyXEe31JkLCeQH7QbgZZb',
    {
        auto_advance: false,
        closed: true,
    },
    (err, invoice) => {
        // asynchronously called
    },
);
stripe.invoices
    .update('in_15fvyXEe31JkLCeQH7QbgZZb', {
        auto_advance: false,
        closed: true,
    })
    .then(invoice => {
        // asynchronously called
    });

stripe.invoices.pay('in_15fvyXEe31JkLCeQH7QbgZZb', (err, invoice) => {
    // asynchronously called
});
stripe.invoices.pay('in_15fvyXEe31JkLCeQH7QbgZZb').then(invoice => {
    // asynchronously called
});

stripe.invoices.pay('in_15fvyXEe31JkLCeQH7QbgZZb', { source: 'source_id' }).then(invoice => {
    // asynchronously called
});

stripe.invoices.pay('in_15fvyXEe31JkLCeQH7QbgZZb', { paid_out_of_band: true }).then(invoice => {
    // asynchronously called
});

stripe.invoices.pay('in_15fvyXEe31JkLCeQH7QbgZZb', { forgive: true }).then(invoice => {
    // asynchronously called
});

stripe.invoices.finalizeInvoice('in_15fvyXEe31JkLCeQH7QbgZZb').then(invoice => {
    invoice; // $ExpectType IInvoice
});

stripe.invoices.finalizeInvoice('in_15fvyXEe31JkLCeQH7QbgZZb', { auto_advance: true }).then(invoice => {
    invoice; // $ExpectType IInvoice
});

stripe.invoices.list({ customer: 'cus_5rfJKDJkuxzh5Q', limit: 3 }, (err, invoices) => {
    // asynchronously called
});
stripe.invoices.list({ customer: 'cus_5rfJKDJkuxzh5Q', limit: 3 }).then(invoices => {
    // asynchronously called
});

stripe.invoices.retrieve('in_15fvyXEe31JkLCeQH7QbgZZb', { expand: ['subscription'] }).then(invoice => {
    invoice.subscription;
});

stripe.invoices.sendInvoice('in_15fvyXEe31JkLCeQH7QbgZZb').then(invoice => {
    // asynchronously called
});

//#endregion

//#region Invoice Items tests
// ##################################################################################

stripe.invoiceItems.list(
    {
        customer: 'cus_5rfJKDJkuxzh5Q',
        invoice: 'in_15fvyXEe31JkLCeQH7QbgZZb',
        pending: true,
        limit: 3,
    },
    (err, invoiceItems) => {
        // asynchronously called
    },
);

stripe.invoiceItems
    .list({
        customer: 'cus_5rfJKDJkuxzh5Q',
        invoice: 'in_15fvyXEe31JkLCeQH7QbgZZb',
        pending: true,
        limit: 3,
    })
    .then(invoiceItems => {
        // asynchronously called
    });

//#endregion

//#region Payment Intents test
// ##################################################################################
stripe.paymentIntents.create(
    {
        amount: 2000,
        currency: 'eur',
        payment_method_types: ['card', 'ideal', 'sepa_debit'],
        customer: 'cus_5rfJKDJkuxzh5Q',
    },
    (err, intent) => {},
);

stripe.paymentIntents
    .create({
        amount: 2000,
        currency: 'eur',
        payment_method_types: ['card', 'ideal', 'sepa_debit'],
        customer: 'cus_5rfJKDJkuxzh5Q',
    })
    .then(intent => {});

stripe.paymentIntents.list({}, (err, intent) => {});
stripe.paymentIntents.list({}).then(intent => {});
stripe.paymentIntents.list((err, intent) => {});
stripe.paymentIntents.list().then(intent => {});
stripe.paymentIntents.list({ customer: 'cus_5rfJKDJkuxzh5Q' }, (err, intent) => {});
stripe.paymentIntents.list({ customer: 'cus_5rfJKDJkuxzh5Q' }).then(intent => {});

stripe.paymentIntents.update(
    'pi_Aabcxyz01aDfoo',
    {
        amount: 2001,
        currency: 'usd',
    },
    (err, intent) => {},
);
stripe.paymentIntents
    .update('pi_Aabcxyz01aDfoo', {
        amount: 2001,
        currency: 'usd',
    })
    .then(intent => {});

stripe.paymentIntents.retrieve('pi_Aabcxyz01aDfoo', (err, intent) => {});
stripe.paymentIntents.retrieve('pi_Aabcxyz01aDfoo').then(intent => {});

stripe.paymentIntents.confirm('pi_Aabcxyz01aDfoo', {}, (err, intent) => {});
stripe.paymentIntents.confirm('pi_Aabcxyz01aDfoo', {}).then(intent => {});

stripe.paymentIntents.capture('pi_Aabcxyz01aDfoo', {}, (err, intent) => {});
stripe.paymentIntents.capture('pi_Aabcxyz01aDfoo', {}).then(intent => {});

stripe.paymentIntents.cancel('pi_Aabcxyz01aDfoo', (err, intent) => {});
stripe.paymentIntents.cancel('pi_Aabcxyz01aDfoo').then(intent => {});
stripe.paymentIntents.cancel('pi_Aabcxyz01aDfoo', {}, (err, intent) => {});
stripe.paymentIntents.cancel('pi_Aabcxyz01aDfoo', {}).then(intent => {});
stripe.paymentIntents.cancel('pi_Aabcxyz01aDfoo', { cancellation_reason: 'duplicate' }, (err, intent) => {});
stripe.paymentIntents.cancel('pi_Aabcxyz01aDfoo', { cancellation_reason: 'requested_by_customer' }).then(intent => {});
//#endregion

//#region Setup Intents test
// ##################################################################################
stripe.setupIntents.create(
    {
        payment_method_types: ['card'],
    },
    (err, intent) => {},
);

stripe.setupIntents
    .create({
        customer: 'cus_5rfJKDJkuxzh5Q',
        payment_method_types: ['card'],
    })
    .then(intent => {});

stripe.setupIntents.list({}, (err, intent) => {});
stripe.setupIntents.list({}).then(intent => {});
stripe.setupIntents.list((err, intent) => {});
stripe.setupIntents.list().then(intent => {});
stripe.setupIntents.list({ limit: 10 }, (err, intent) => {});
stripe.setupIntents.list({ customer: 'cus_5rfJKDJkuxzh5Q' }).then(intent => {});

stripe.setupIntents.update(
    'seti_123456789',
    {
        customer: 'cus_5rfJKDJkuxzh5Q',
    },
    (err, intent) => {},
);
stripe.setupIntents
    .update('seti_123456789', {
        customer: 'cus_5rfJKDJkuxzh5Q',
    })
    .then(intent => {});

stripe.setupIntents.retrieve('seti_123456789', (err, intent) => {});
stripe.setupIntents.retrieve('seti_123456789').then(intent => {});

stripe.setupIntents.confirm('seti_123456789', {}, (err, intent) => {});
stripe.setupIntents.confirm('seti_123456789', {}).then(intent => {});
stripe.setupIntents.confirm('seti_123456789', {client_secret: 'seti_987654321'}, (err, intent) => {});
stripe.setupIntents.confirm('seti_123456789', {client_secret: 'seti_987654321'}).then(intent => {});

stripe.setupIntents.cancel('seti_123456789', (err, intent) => {});
stripe.setupIntents.cancel('seti_123456789').then(intent => {});
stripe.setupIntents.cancel('seti_123456789', {}, (err, intent) => {});
stripe.setupIntents.cancel('seti_123456789', {}).then(intent => {});
stripe.setupIntents.cancel('seti_123456789', { cancellation_reason: 'duplicate' }, (err, intent) => {});
stripe.setupIntents.cancel('seti_123456789', { cancellation_reason: 'requested_by_customer' }).then(intent => {});
//#endregion

//#region Payouts tests
// ##################################################################################
stripe.payouts.create(
    {
        amount: 2000,
        currency: 'usd',
        description: 'The Payout',
    },
    (err, payout) => {},
);
stripe.payouts
    .create({
        amount: 2000,
        currency: 'usd',
        description: 'The Payout',
    })
    .then(payout => {});
stripe.payouts.create(
    {
        amount: 2000,
        currency: 'usd',
        description: 'The Payout',
    },
    {
        stripe_account: 'acct_abc12345678',
    },
    (err, payout) => {},
);
stripe.payouts
    .create(
        {
            amount: 2000,
            currency: 'usd',
            description: 'The Payout',
        },
        {
            stripe_account: 'acct_abc12345678',
        },
    )
    .then(payout => {});

stripe.payouts.retrieve('po_5rfJKDJkuxzh5Q', (err, payout) => {});
stripe.payouts.retrieve('po_5rfJKDJkuxzh5Q').then(payout => {});
stripe.payouts.retrieve('po_5rfJKDJkuxzh5Q', { stripe_account: 'acct_abc12345678' }, (err, payout) => {});
stripe.payouts.retrieve('po_5rfJKDJkuxzh5Q', { stripe_account: 'acct_abc12345678' }).then(payout => {});

stripe.payouts.update(
    'po_5rfJKDJkuxzh5Q',
    { metadata: { key: 'value' } },
    (err: Stripe.IStripeError, payout: Stripe.payouts.IPayout) => {},
);
stripe.payouts.update('po_5rfJKDJkuxzh5Q', { metadata: { key: 'value' } }).then(payout => {});
stripe.payouts.update(
    'po_5rfJKDJkuxzh5Q',
    { metadata: { key: 'value' } },
    { stripe_account: 'acct_abc12345678' },
    (err, payout) => {},
);
stripe.payouts
    .update('po_5rfJKDJkuxzh5Q', { metadata: { key: 'value' } }, { stripe_account: 'acct_abc12345678' })
    .then(payout => {});

stripe.payouts.list({ limit: 100 }, { stripe_account: 'acct_abc12345678' }, (err, payouts) => {});
stripe.payouts.list({ limit: 100 }, { stripe_account: 'acct_abc12345678' }).then(payouts => {});
stripe.payouts.list({ limit: 100 }, (err, payouts) => {});
stripe.payouts.list({ limit: 100 }).then(payouts => {});
stripe.payouts.list({ stripe_account: 'acct_abc12345678' }, (err, payouts) => {});
stripe.payouts.list({ stripe_account: 'acct_abc12345678' }).then(payouts => {});
stripe.payouts.list((err, payouts) => {});
stripe.payouts.list().then(payouts => {});

stripe.payouts.cancel('po_5rfJKDJkuxzh5Q', { stripe_account: 'acct_abc12345678' }, (err, payout) => {});
stripe.payouts.cancel('po_5rfJKDJkuxzh5Q', { stripe_account: 'acct_abc12345678' }).then(payout => {});
stripe.payouts.cancel('po_5rfJKDJkuxzh5Q', (err, payout) => {});
stripe.payouts.cancel('po_5rfJKDJkuxzh5Q').then(payout => {});

//#endregion

//#region Plans tests
// ##################################################################################

// all product hash options
stripe.plans.create(
    {
        amount: 2000,
        interval: 'month',
        product: {
            name: 'Amazing Gold Plan',
            statement_descriptor: 'Gold Plan',
            metadata: {
                plan_id: 'goldplan123',
            },
        },
        nickname: 'Something to remember me by',
        currency: 'usd',
        id: 'gold-plan',
        usage_type: 'metered',
        billing_scheme: 'per_unit',
    },
    (err, plan) => {
        // asynchronously called
    },
);

// minimum options with product hash
stripe.plans
    .create({
        amount: 2000,
        currency: 'usd',
        interval: 'month',
        product: {
            name: 'Amazing Gold Plan',
        },
    })
    .then(plan => {
        // asynchronously called
    });

// minimum options with product id
stripe.plans
    .create({
        amount: 2000,
        currency: 'usd',
        interval: 'month',
        product: 'prod_UT1t06yZ3iBEHi',
    })
    .then(plan => {
        // asynchronously called
        const productId = plan.product as string;
    });

stripe.plans.retrieve(
    'gold-plan',
    {
        expand: ['product'],
    },
    (err, plan) => {
        // asynchronously called
        const product = plan.product as Stripe.products.IProduct;
    },
);
stripe.plans.retrieve('gold-plan').then(plan => {
    // asynchronously called
});

stripe.plans.update(
    'gold-plan',
    {
        product: 'prod_UT1t06yZ3iBEHi',
    },
    (err, plan) => {
        // asynchronously called
    },
);
stripe.plans.update('gold-plan', { nickname: 'New gold plan nickname' }).then(plan => {
    // asynchronously called
});
stripe.plans.update('gold-plan', { active: true }).then(plan => {
    // asynchronously called
});
stripe.plans.update('gold-plan', { trial_period_days: 1 }).then(plan => {
    // asynchronously called
});

stripe.plans.del('gold-plan', (err, confirmation) => {
    // asynchronously called
});
stripe.plans.del('gold-plan').then(confirmation => {
    // asynchronously called
});

stripe.plans.list({ active: true, product: 'prod_someproduct' }, (err, plans) => {
    // asynchronously called
    plans.data[0].tiers[0].unit_amount; // $ExpectType number
});
stripe.plans.list({ active: true, product: 'prod_someproduct' }).then(plans => {
    // asynchronously called
});

stripe.plans.list(null, (err, plans) => {
    // asynchronously called
});
stripe.plans.list(null).then(plans => {
    // asynchronously called
});

stripe.plans.list((err, plans) => {
    // asynchronously called
});
stripe.plans.list().then(plans => {
    // asynchronously called
});

//#endregion

//#region Subscriptions tests
// ##################################################################################

stripe.subscriptions.create(
    { items: [{ plan: 'platypi-dev' }], customer: 'cus_5rfJKDJkuxzh5Q' },
    (err, subscription) => {
        // asynchronously called
    },
);

stripe.subscriptions.create(
    { cancel_at: 1234567890, items: [{ plan: 'platypi-dev' }], customer: 'cus_5rfJKDJkuxzh5Q' },
    (err, subscription) => {
        // asynchronously called
    },
);

stripe.subscriptions.create(
    { cancel_at: 1234567890, prorate: true, items: [{ plan: 'platypi-dev' }], customer: 'cus_5rfJKDJkuxzh5Q' },
    (err, subscription) => {
        // asynchronously called
    },
);

stripe.subscriptions.create(
    { cancel_at_period_end: true, items: [{ plan: 'platypi-dev' }], customer: 'cus_5rfJKDJkuxzh5Q' },
    (err, subscription) => {
        // asynchronously called
    },
);

stripe.subscriptions.create({ items: [{ plan: 'platypi-dev' }], customer: 'cus_5rfJKDJkuxzh5Q' }).then(subscription => {
    // asynchronously called

    stripe.subscriptions.update(
        'sub_8QwCiwZ9tmMSpt',
        { items: [{ id: subscription.items.data[0].id, plan: 'platypi' }] },
        (err, subscription) => {
            // asynchronously called
        },
    );
    stripe.subscriptions
        .update('sub_8QwCiwZ9tmMSpt', { items: [{ id: subscription.items.data[0].id, plan: 'platypi' }] })
        .then(subscription => {
            // asynchronously called
        });
});

stripe.subscriptions.retrieve('sub_8QwCiwZ9tmMSpt', (err, subscription) => {
    // asynchronously called
    if (typeof subscription.customer === 'object') {
        subscription.customer.email;
    }
});
stripe.subscriptions.retrieve('sub_8QwCiwZ9tmMSpt').then(subscription => {
    // asynchronously called
    if (typeof subscription.customer === 'object') {
        subscription.customer.email;
    }
});

stripe.subscriptions.del('sub_8QwCiwZ9tmMSpt', (err, subscription) => {
    // asynchronously called
});
stripe.subscriptions.del('sub_8QwCiwZ9tmMSpt').then(subscription => {
    // asynchronously called
});

stripe.subscriptions.list({ customer: 'cus_5rfJKDJkuxzh5Q', plan: 'platypi-dev' }, (err, subscriptions) => {
    // asynchronously called
});
stripe.subscriptions.list({ customer: 'cus_5rfJKDJkuxzh5Q', plan: 'platypi-dev' }).then(subscriptions => {
    // asynchronously called
});

//#endregion

//#region Sources tests
// ##################################################################################

stripe.sources.retrieve('tok_15V2YhEe31JkLCeQy9iUgsJX').then(source => {
    // asynchronously called
    source.card; // $ExpectType ICardHashInfo
});

//#endregion

//#region Subscription Items tests
// ##################################################################################

stripe.subscriptionItems.create(
    { subscription: 'sub_C9giwDfCeN8fwt', plan: 'platypi-dev' },
    (err, subscriptionItem) => {
        // asynchronously called
    },
);
stripe.subscriptionItems.create({ subscription: 'sub_C9giwDfCeN8fwt', plan: 'platypi-dev' }).then(subscriptionItem => {
    // asynchronously called
});

stripe.subscriptionItems
    .create({
        subscription: 'sub_C9giwDfCeN8fwt',
        plan: 'platypi-dev',
        prorate: true,
        proration_date: Math.round(new Date().valueOf() / 1000),
    })
    .then(subscriptionItem => {
        // asynchronously called
    });

stripe.subscriptionItems.retrieve('si_C9gimdd2l9qvCU', (err, subscriptionItem) => {
    // asynchronously called
});
stripe.subscriptionItems.retrieve('si_C9gimdd2l9qvCU').then(subscriptionItem => {
    // asynchronously called
});

stripe.subscriptionItems.update('si_C9gimdd2l9qvCU', { plan: 'platypi' }, (err, subscriptionItem) => {
    // asynchronously called
});
stripe.subscriptionItems.update('si_C9gimdd2l9qvCU', { plan: 'platypi' }).then(subscriptionItem => {
    // asynchronously called
});

stripe.subscriptionItems.del('si_C9gimdd2l9qvCU', (err, subscriptionItem) => {
    // asynchronously called
});
stripe.subscriptionItems.del('si_C9gimdd2l9qvCU').then(subscriptionItem => {
    // asynchronously called
});

stripe.subscriptionItems.list({ subscription: 'si_C9gimdd2l9qvCU' }, (err, subscriptionItems) => {
    // asynchronously called
});
stripe.subscriptionItems.list({ subscription: 'si_C9gimdd2l9qvCU' }).then(subscriptionItems => {
    // asynchronously called
});

//#endregion

//#region Ephemeral keys tests
// ##################################################################################

stripe.ephemeralKeys
    .create({ customer: 'cus_5rfJKDJkuxzh5Q' }, { stripe_version: '2017-08-15' })
    .then(ephemeralKeys => {
        // asynchronously called
    });

stripe.usageRecords
    .create('sub_8QwCiwZ9tmMSpt', { action: 'set', quantity: 10000, timestamp: 1537006853 })
    .then((usageRecord: Stripe.usageRecords.IUsageRecord) => {});
stripe.usageRecords.create(
    'sub_8QwCiwZ9tmMSpt',
    { action: 'set', quantity: 10000, timestamp: 1537006853 },
    (err, usageRecord: Stripe.usageRecords.IUsageRecord) => {},
);

stripe.usageRecordSummaries
    .list('si_C9gimdd2l9qvCU', { limit: 10 })
    .then((usageRecordSummaries: Stripe.usageRecordSummaries.IUsageRecordSummaries) => {});
stripe.usageRecordSummaries.list(
    'si_C9gimdd2l9qvCU',
    { limit: 10 },
    (err, usageRecordSummaries: Stripe.usageRecordSummaries.IUsageRecordSummaries) => {},
);

//#region Errors
// ##################################################################################

stripe.charges
    .create({
        amount: 123,
        currency: 'usd',
    })
    .catch(err => {
        if (err instanceof Stripe.errors.StripeCardError) {
            const type = err.type;
        }

        if (err instanceof Stripe.errors.StripeError) {
            if (err.charge) {
                const charge: string = err.charge;
            }
            if (err.payment_intent) {
                const payment_intent: Stripe.paymentIntents.IPaymentIntent = err.payment_intent;
            }
            if (err.payment_method) {
                const payment_method: Stripe.paymentMethods.IPaymentMethod = err.payment_method;
            }
            if (err.setup_intent) {
                const setup_intent: Stripe.setupIntents.ISetupIntent = err.setup_intent;
            }
            if (err.source) {
                const source: Stripe.sources.ISource = err.source;
            }
            if (err.decline_code) {
                const decline_code: string = err.decline_code;
            }
            if (err.statusCode) {
                const statusCode: number = err.statusCode;
            }
        }
    });

//#endregion Errors
// ##################################################################################
