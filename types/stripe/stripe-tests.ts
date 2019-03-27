import Stripe = require('stripe');
import { customers } from 'stripe';

const stripe = new Stripe("sk_test_BF573NobVn98OiIsPAv7A04K");

stripe.setApiVersion('2017-04-06');

//#region Balance tests
// ##################################################################################

stripe.balance.retrieve((err, balance) => {
    // asynchronously called
});
stripe.balance.retrieve().then((balance) => {
    // asynchronously called
});

stripe.balance.retrieveTransaction(
    "txn_17xMvmBoqMA9o2xkYNH2ewNj",
    (err, balanceTransaction) => {
        // asynchronously called
    }
);
stripe.balance.retrieveTransaction(
    "txn_17xMvmBoqMA9o2xkYNH2ewNj").then(
    (balanceTransaction) => {
        // asynchronously called
    }
);

stripe.balance.listTransactions({ limit: 3 }, (err, transactions) => {
    // asynchronously called
});
stripe.balance.listTransactions({ limit: 3 }).then((transactions) => {
    // asynchronously called
});
stripe.balance.listTransactions().then((transactions) => {
    // asynchronously called
});
//#endregion

//#region Charges tests
// ##################################################################################

stripe.charges.create({
    amount: 400,
    currency: "gbp",
    source: "tok_17wV94BoqMA9o2xkhlAd3ALf", // obtained with Stripe.js
    description: "Charge for test@example.com"
}, (err, charge) => {
    // asynchronously called
    });
stripe.charges.create({
    amount: 400,
    currency: "gbp",
    source: "tok_17wV94BoqMA9o2xkhlAd3ALf", // obtained with Stripe.js
    description: "Charge for test@example.com"
}).then((charge) => {
    // asynchronously called

    charge.refunds.create().then((refund) => {
        const reason = refund.failure_reason;
        // asynchronously called
    });
    charge.refunds.create({ amount: 100 }).then((refund) => {
        // asynchronously called
    });

    charge.refunds.retrieve("re_15jzA4Ee31JkLCeQcxbTbjaL").then((refund) => {
        const status: "pending" | "succeeded" | "failed" | "canceled" = refund.status;
    });

    charge.refunds.update("re_15jzA4Ee31JkLCeQcxbTbjaL", { metadata: { test: "data" } }).then((refund) => {
    });

    charge.refunds.list({ limit: 3 }).then((refund) => {
    });
    charge.refunds.list().then((refund) => {
    });
});

stripe.charges.retrieve("ch_15fvyXEe31JkLCeQOo0SwFk9", (err, charge) => {
    // asynchronously called
    if (typeof charge.application_fee === "object") {
        charge.application_fee.amount;
    }
});
stripe.charges.retrieve("ch_15fvyXEe31JkLCeQOo0SwFk9").then((charge) => {
    // asynchronously called
    if (typeof charge.application_fee === "object") {
        charge.application_fee.amount;
    }
});

stripe.charges.update(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    {
        description: "Charge for test@example.com"
    },
    (err, charge) => {
        // asynchronously called
    }
);
stripe.charges.update(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    {
        description: "Charge for test@example.com"
    })
    .then((charge) => {
        // asynchronously called
    });

stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9", {amount: 1}, {}, (err, charge) => {
    // asynchronously called
});
stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9", {amount: 1}, {}).then((charge) => {
    // asynchronously called
});
stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9", {}, {}, (err, charge) => {
    // asynchronously called
});
stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9", {}).then((charge) => {
    // asynchronously called
});
stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9").then((charge) => {
    // asynchronously called
});

stripe.charges.list({ limit: 3 }, (err, charges) => {
    // asynchronously called
});
stripe.charges.list({ limit: 3 }).then((charges) => {
    // asynchronously called
});

stripe.charges.refund("ch_15fvyXEe31JkLCeQOo0SwFk9", {},
    (err, refund) => {
        // asynchronously called
    }
);
stripe.charges.refund("ch_15fvyXEe31JkLCeQOo0SwFk9", {}).then((refund) => {
    // asynchronously called
});
stripe.charges.refund("ch_15fvyXEe31JkLCeQOo0SwFk9").then((refund) => {
    // asynchronously called
});

stripe.charges.retrieveRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL",
    (err, refund) => {
        // asynchronously called
    }
);
stripe.charges.retrieveRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL").then((refund) => {
        // asynchronously called
    }
);

stripe.charges.createRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    {},
    (err, refund) => {
        // asynchronously called
    }
);
stripe.charges.createRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    (err, refund) => {
        // asynchronously called
    }
);
stripe.charges.createRefund("ch_15fvyXEe31JkLCeQOo0SwFk9").then((refund) => {
    // asynchronously called
});

stripe.charges.updateRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL",
    { metadata: { key: "value" } },
    (err: Stripe.IStripeError, refund: Stripe.refunds.IRefund) => {
        // asynchronously called
    }
);
stripe.charges.updateRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL",
    { metadata: { key: "value" } }).then(
    (refund) => {
        // asynchronously called
    }
);

stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', (err, refunds) => {
    // asynchronously called
});
stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9').then((refunds) => {
    // asynchronously called
});
stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', { limit: 3 }, (err, refunds) => {
    // asynchronously called
});
stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', { limit: 3 }).then((refunds) => {
    // asynchronously called
});

stripe.charges.markAsSafe('ch_15fvyXEe31JkLCeQOo0SwFk9', (err, refunds) => {
    // asynchronously called
});
stripe.charges.markAsSafe('ch_15fvyXEe31JkLCeQOo0SwFk9').then((refunds) => {
    // asynchronously called
});

stripe.charges.markAsFraudulent('ch_15fvyXEe31JkLCeQOo0SwFk9', (err, refunds) => {
    // asynchronously called
});
stripe.charges.markAsFraudulent('ch_15fvyXEe31JkLCeQOo0SwFk9').then((refunds) => {
    // asynchronously called
});

//#endregion

//#region Customer tests
// ##################################################################################

stripe.customers.create({
    description: 'Customer for test@example.com',
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX", // obtained with Stripe.js
    metadata: { test: "123", test2: 123 } // IOptionsMetadata test
}, (err, customer) => {
    // asynchronously called
    });
stripe.customers.create({
    description: 'Customer for test@example.com',
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX", // obtained with Stripe.js
    metadata: null // IOptionsMetadata test
}).then((customer) => {
    // asynchronously called
    customer.cards.create({ card: "tok_17wV94BoqMA9o2xkhlAd3ALf"}).then((customer) => {});
    customer.cards.retrieve("card_17xMvXBoqMA9o2xkq6W5gamx").then((card) => {
        const strCustomer: string = card.customer as string;
        const objCustomer: customers.ICustomer = card.customer as customers.ICustomer;
    });
    customer.cards.update("card_17xMvXBoqMA9o2xkq6W5gamx", { name: "Test" }).then((card) => {});
    customer.cards.list().then((cards) => {});
    customer.cards.del("card_17xMvXBoqMA9o2xkq6W5gamx").then((confirmation) => {});

    customer.subscriptions.create({ items: [{ plan: "gold" }], trial_period_days: 7 }).then((subscription) => { });
    customer.subscriptions.create({ items: [{ plan: "gold" }], trial_end: "now", billing_cycle_anchor: 1516881177, prorate: true }).then((subscription) => { });
    customer.subscriptions.create({ items: [{ plan: "gold" }], trial_end: 1516881177, billing: "send_invoice", days_until_due: 7 }).then((subscription) => { });
    customer.subscriptions.create({ items: [{ plan: "gold" }], billing: "charge_automatically" }).then((subscription) => { });
    customer.subscriptions.retrieve("sub_8Eluur5KoIKxuy").then((subscription) => {
        customer.subscriptions.update("sub_8Eluur5KoIKxuy", { items: [{ id: subscription.items.data[0].id, plan: "silver" }] }).then((subscription) => { });
     });
    customer.subscriptions.update("sub_8Eluur5KoIKxuy", { trial_end: "now", billing_cycle_anchor: "now" });
    customer.subscriptions.update("sub_8Eluur5KoIKxuy", { trial_end: 1516881177, billing: "send_invoice", days_until_due: 7, billing_cycle_anchor: "unchanged", cancel_at_period_end: false });
    customer.subscriptions.list().then((subscriptions) => { });
    customer.subscriptions.del("sub_8Eluur5KoIKxuy").then((subscription) => { });
    customer.subscriptions.deleteDiscount("sub_8Eluur5KoIKxuy").then((confirmation) => { });

    // IMetadata tests:
    const str = '123';
    customer.metadata["test"] === str;
    customer.metadata.test1 === str;

    // IOptionsMetadata tests:
    let metadata: Stripe.IOptionsMetadata;
    const num = 123;
    metadata["test"] = str;
    metadata["test"] = num;
    metadata["test"] === str;
    metadata["test"] === num;
    metadata.testStr = str;
    metadata.testNum = num;
    metadata.test1 === str;
    metadata.test2 === num;
    metadata = {
        test1: str,
        test2: num
    };
    metadata = {};
    metadata = null;
});

stripe.customers.create({
    description: 'Customer for test@example.com',
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX" // obtained with Stripe.js
}, { stripe_account: "" }, (err, customer) => {
    // asynchronously called
});
stripe.customers.create({
    description: 'Customer for test@example.com',
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX" // obtained with Stripe.js
}, { stripe_account: "" }).then((customer) => {
});

// {"now"} for trial_end
stripe.customers.create({
    description: "Customer for test@example.com",
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX", // obtained with Stripe.js
    plan: "platypi-dev",
    trial_end: "now"
});

// {number} for trial_end
stripe.customers.create({
    description: "Customer for test@example.com",
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX", // obtained with Stripe.js
    plan: "platypi-dev",
    trial_end: 1516881177
});

stripe.customers.retrieve(
    "cus_5rfJKDJkuxzh5Q",
    (err, customer) => {
        // asynchronously called
        customer.cards.create(
            { card: "tok_15V2YhEe31JkLCeQy9iUgsJX" },
            (err, card) => {
                // asynchronously called
                card.brand;
            }
        );
    }
);
stripe.customers.retrieve("cus_5rfJKDJkuxzh5Q").then((customer) => {
    // asynchronously called
});

stripe.customers.update("cus_5rfJKDJkuxzh5Q", {
    description: "Customer for test@example.com"
}, (err, customer) => {
    // asynchronously called
    });
stripe.customers.update("cus_5rfJKDJkuxzh5Q", {
    description: "Customer for test@example.com"
}).then((customer) => {
    // asynchronously called
});

stripe.customers.del(
    "cus_5rfJKDJkuxzh5Q",
    (err, confirmation) => {
        // asynchronously called
    }
);
stripe.customers.del("cus_5rfJKDJkuxzh5Q").then((confirmation) => {
        // asynchronously called
    }
);

stripe.customers.list({ limit: 3 }, (err, customers) => {
    // asynchronously called
});
stripe.customers.list({ limit: 3 }).then((customers) => {
    // asynchronously called
});

stripe.customers.list({ email: "test@example.com" }).then((customers) => {
	// asynchronously called
});

stripe.customers.createCard(
    "cus_5rfJKDJkuxzh5Q",
    { card: "tok_15V2YhEe31JkLCeQy9iUgsJX" },
    (err, card) => {
        // asynchronously called
    }
);
stripe.customers.createCard("cus_5rfJKDJkuxzh5Q", { card: "tok_15V2YhEe31JkLCeQy9iUgsJX" }).then((card) => {
    // asynchronously called
});

stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    { source: "tok_15V2YhEe31JkLCeQy9iUgsJX" },
    (err, source) => {
        const card = source as Stripe.ICard;
        const bankAcc = source as Stripe.IBankAccount;
    }
);
stripe.customers.createSource("cus_5rfJKDJkuxzh5Q", { source: "tok_15V2YhEe31JkLCeQy9iUgsJX" }).then((source) => {
    const card = source as Stripe.ICard;
    const bankAcc = source as Stripe.IBankAccount;
});

stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    {
        source: {
            object: "card",
            exp_month: 1,
            exp_year: 16,
            number: '4242424242424242'
        }
    },
    (err, card) => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    }
);
stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    {
        source: {
            object: "card",
            exp_month: 1,
            exp_year: 16,
            number: '4242424242424242'
        }
    }).then(
    (card) => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    }
);

stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    { source: "btok_8E264Lxsbyvj3E" },
    (err: Stripe.IStripeError, bankAcc: Stripe.IBankAccount) => {
        // asynchronously called
        bankAcc.bank_name;
    }
);
stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    { source: "btok_8E264Lxsbyvj3E" }).then((bankAcc: Stripe.IBankAccount) => {
        // asynchronously called
        bankAcc.bank_name;
    }
);

stripe.customers.retrieveCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    (err, card) => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    }
);
stripe.customers.retrieveCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S").then((card) => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    });

stripe.customers.updateCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    { name: "Jane Austen" },
    (err, card) => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    }
);

stripe.customers.updateCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    { name: "Jane Austen" }).then((card) => {
        // asynchronously called
        const obj: Stripe.ICard = card;
    });

stripe.customers.deleteCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    (err, confirmation) => {
        // asynchronously called
    }
);
stripe.customers.deleteCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S").then((confirmation) => {
        // asynchronously called
    });

stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', null, (err, cards) => {
    // asynchronously called
});
stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', null).then((cards) => {
    // asynchronously called
});

stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', (err, cards) => {
    // asynchronously called
});
stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc').then((cards) => {
    // asynchronously called
});

stripe.customers.listSources('cu_15fvyVEe31JkLCeQvr155iqc', null, (err, cards) => {
    // asynchronously called
});
stripe.customers.listSources('cu_15fvyVEe31JkLCeQvr155iqc', null).then((cards) => {
    // asynchronously called
});
stripe.customers.listSources('cu_15fvyVEe31JkLCeQvr155iqc', {
    object: "card",
    limit: 100
}).then((cards) => {
    // asynchronously called
});
stripe.customers.listSources('cu_15fvyVEe31JkLCeQvr155iqc', {
    object: "bank_account",
    limit: 100
}).then((cards) => {
    // asynchronously called
});

stripe.customers.retrieveSubscription(
    "cus_5rfJKDJkuxzh5Q",
    "sub_5rfJxnBLGSwsYp",
    (err, subscription) => {
        // asynchronously called
    }
);
stripe.customers.retrieveSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp").then((subscription) => {
    // asynchronously called
});

stripe.customers.updateSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp", { items: [{ id: "si_62U5U5BoqBA2o2xp6Eqcl6J7", plan: "platypi-dev" }] },
    (err, subscription) => {
        // asynchronously called
    }
);
stripe.customers.updateSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp", { items: [{ id: "si_62U5U5BoqBA2o2xp6Eqcl6J7", plan: "platypi-dev" }] }).then((subscription) => {
    // asynchronously called
});

stripe.customers.cancelSubscription(
    "cus_5rfJKDJkuxzh5Q",
    "sub_5rfJxnBLGSwsYp",
    null,
    (err, confirmation) => {
        // asynchronously called
    }
);
stripe.customers.cancelSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp", null).then((confirmation) => {
    // asynchronously called
});

stripe.customers.cancelSubscription(
    "cus_5rfJKDJkuxzh5Q",
    "sub_5rfJxnBLGSwsYp",
    (err, confirmation) => {
        // asynchronously called
    }
);
stripe.customers.cancelSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp").then((confirmation) => {
    // asynchronously called
});

stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', null, (err, subscriptions) => {
    // asynchronously called
});
stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', null).then((subscriptions) => {
    // asynchronously called
});

stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', (err, subscriptions) => {
    // asynchronously called
});
stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc').then((subscriptions) => {
    // asynchronously called
});

stripe.customers.deleteDiscount("cus_5rfJKDJkuxzh5Q", (err, confirmation) => {
    // asynchronously called
});
stripe.customers.deleteDiscount("cus_5rfJKDJkuxzh5Q").then((confirmation) => {
    // asynchronously called
});

stripe.customers.deleteSubscriptionDiscount("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp", (err, confirmation) => {
    // asynchronously called
});
stripe.customers.deleteSubscriptionDiscount("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp").then((confirmation) => {
    // asynchronously called
});

//#endregion

//#region Disputes tests
// ##################################################################################

//#endregion

//#region Events tests
// ##################################################################################

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

//#region Transfers tests
// ##################################################################################

//#endregion

//#region Transfers Reversals tests
// ##################################################################################

stripe.transfers.createReversal("tr_17F2JBFuhr4V1legrq97JrFE", (err, reversal) => {
    // asynchronously called
});

stripe.transfers.createReversal("tr_17F2JBFuhr4V1legrq97JrFE").then((reversal) => {
    // asynchronously called
});

//#endregion

//#region Accounts test
// ##################################################################################

stripe.accounts.create({
    email: "",
    type: "standard"
}, (err, customer) => {
    // asynchronously called
    }
);
stripe.accounts.create({
    type: "custom"
}).then((customer) => {
    // asynchronously called
    }
);

stripe.accounts.retrieve(
    "acct_17wV8KBoqMA9o2xk",
    (err, account) => {
        // asynchronously called
    }
);
stripe.accounts.retrieve(
    "acct_17wV8KBoqMA9o2xk").then(
    (account) => {
        // asynchronously called
    }
);

stripe.accounts.update("acct_17wV8KBoqMA9o2xk",
    {
        support_phone: "555-867-5309"
    },
    (err, account) => {
        // asynchronously called
    }
);
stripe.accounts.update("acct_17wV8KBoqMA9o2xk",
    {
        support_phone: "555-867-5309"
    }).then(
    (account) => {
        // asynchronously called
    }
);

stripe.accounts.update("acct_17wV8KBoqMA9o2xk",
    {
        payout_statement_descriptor: "From Stripe"
    }).then(
    (account) => {
        // asynchronously called
    }
);

stripe.accounts.update("acct_17wV8KBoqMA9o2xk",
    {
        payout_schedule: {
            delay_days: 5,
            interval: "monthly",
            monthly_anchor: 4,
            weekly_anchor: "monday"
        }
    }).then(
    (account) => {
        // asynchronously called
    }
);

stripe.accounts.del("acct_17wV8KBoqMA9o2xk", (err, confirmation) => { });
stripe.accounts.del("acct_17wV8KBoqMA9o2xk").then((confirmation) => { });

stripe.accounts.reject("acct_17wV8KBoqMA9o2xk", { reason: 'fraud' }, (err, account) => {
    // asynchronously called
});
stripe.accounts.reject("acct_17wV8KBoqMA9o2xk", { reason: 'fraud' }).then((account) => {
    // asynchronously called
});

stripe.accounts.list(
    { limit: 3 },
    (err, accounts) => {
        // asynchronously called
    }
);
stripe.accounts.list(
    { limit: 3 }).then(
    (accounts) => {
        // asynchronously called
    }
);
stripe.accounts.retrieve("acct_17wV8KBoqMA9o2xk").then(
    (accounts) => {
        const payouts_enabled: boolean = accounts.payouts_enabled;
    }
);
stripe.accounts.createLoginLink("acct_17wV8KBoqMA9o2xk").then(
    (loginLink) => {
        const object: string = loginLink.object;
        const created: number = loginLink.created;
        const url: string = loginLink.url;
    }
);
stripe.accounts.createLoginLink("acct_17wV8KBoqMA9o2xk", "http://localhost:3000").then(
    (loginLink) => {
        const object: string = loginLink.object;
        const created: number = loginLink.created;
        const url: string = loginLink.url;
    }
);
//#endregion

//#region Application Fee Refunds tests
// ##################################################################################

//#endregion

//#region Application Fees tests
// ##################################################################################

//#endregion

//#region Country Specs tests
// ##################################################################################

//#endregion

//#region External Accounts tests
// ##################################################################################

stripe.accounts.createExternalAccount("", { external_account: "btok_8E264Lxsbyvj3E" }, (err, extAcc) => {
    const card = extAcc as Stripe.ICard;
    const bankAcc = extAcc as Stripe.IBankAccount;
});
stripe.accounts.createExternalAccount("", { external_account: "tok_15V2YhEe31JkLCeQy9iUgsJX" }).then((extAcc) => {
    const card = extAcc as Stripe.ICard;
    const bankAcc = extAcc as Stripe.IBankAccount;
});

stripe.accounts.createExternalAccount("", { external_account: "tok_15V2YhEe31JkLCeQy9iUgsJX" }, { stripe_account: "acct_17wV8KOoqMF9a2xk" }).then((extAcc) => {
    const card = extAcc as Stripe.ICard;
    const bankAcc = extAcc as Stripe.IBankAccount;
});
stripe.accounts.createExternalAccount("", { external_account: "tok_15V2YhEe31JkLCeQy9iUgsJX" }, "acct_17wV8KOoqMF9a2xk").then((extAcc) => {
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
stripe.orders.retrieve("or_1C8XKwEe31JkLCeQHg0jcisf", (err, order) => {
    // asynchronously called
    const amount_returned: number = order.amount_returned;
});

//#endregion

//#region Order Items tests
// ##################################################################################

//#endregion

//#region Products tests
// ##################################################################################

stripe.products.create({
    name: "My amazing product",
    type: "service",
    attributes: ["color"]
}, (err, coupon) => {
    // asynchronously called
});
stripe.products.create({
    name: "My amazing product",
    type: "service",
    attributes: ["color"]
}).then((product) => {
    // asynchronously called
    const prodType: "service" | "good" = product.type;
});

//#endregion

//#region SKUs tests
// ##################################################################################

//#endregion

//#region WebHooks tests
// ##################################################################################

const webhookRequest = {
  rawBody: '',
  headers: { 'stripe-signature': '' }
};
const webhookSecret = '';

const event: Stripe.events.IEvent = stripe.webhooks.constructEvent(
  webhookRequest.rawBody,
  webhookRequest.headers['stripe-signature'],
  webhookSecret
);

//#endregion

//#region Coupons tests
// ##################################################################################

stripe.coupons.create({
    name: '25% Off',
    percent_off: 25,
    duration: 'repeating',
    duration_in_months: 3,
    id: '25OFF'
}, (err, coupon) => {
    // asynchronously called
    });
stripe.coupons.create({
    name: '25% Off',
    percent_off: 25,
    duration: 'repeating',
    duration_in_months: 3,
    id: '25OFF'
}).then((coupon) => {
    // asynchronously called
});

stripe.coupons.retrieve(
    "25OFF",
    (err, coupon) => {
        // asynchronously called
    }
);
stripe.coupons.retrieve("25OFF").then((coupon) => {
    // asynchronously called
});

stripe.coupons.update("25OFF", {
    metadata: { key: "value" }
}, (err: Stripe.IStripeError, coupon: Stripe.coupons.ICoupon) => {
    // asynchronously called
});
stripe.coupons.update("25OFF", {
    metadata: { key: "value" }
}).then((coupon) => {
    // asynchronously called
});

stripe.coupons.del("25OFF", (err, confirmation) => {
});
stripe.coupons.del("25OFF").then((confirmation) => {
});

stripe.coupons.list({ limit: 3 }, (err, coupons) => {
    // asynchronously called
});
stripe.coupons.list({ limit: 3 }).then((coupons) => {
    // asynchronously called
});

//#endregion

//#region Discounts tests
// ##################################################################################

//#endregion

//#region Invoices tests
// ##################################################################################

stripe.invoices.create({
    customer: "cus_5rfJKDJkuxzh5Q"
}, (err, invoice) => {
    // asynchronously called
    });
stripe.invoices.create({
    customer: "cus_5rfJKDJkuxzh5Q"
}).then((invoice) => {
    // asynchronously called
});

stripe.invoices.retrieve(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    (err, invoice) => {
        // asynchronously called
    }
);
stripe.invoices.retrieve("in_15fvyXEe31JkLCeQH7QbgZZb").then((invoice) => {
    // asynchronously called
});

stripe.invoices.retrieveLines(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    { limit: 5 },
    (err, lines) => {
        // asynchronously called
        lines.data[0].type = "invoiceitem";
    }
);
stripe.invoices.retrieveLines("in_15fvyXEe31JkLCeQH7QbgZZb", { limit: 5 }).then((lines) => {
    // asynchronously called
});

stripe.invoices.retrieveUpcoming(
    "cus_5rfJKDJkuxzh5Q",
    null,
    (err, upcoming) => {
        // asynchronously called
    }
);
stripe.invoices.retrieveUpcoming("cus_5rfJKDJkuxzh5Q", null).then((upcoming) => {
    // asynchronously called
});

stripe.invoices.retrieveUpcoming(
    "cus_5rfJKDJkuxzh5Q",
    (err, upcoming) => {
        // asynchronously called
    }
);
stripe.invoices.retrieveUpcoming("cus_5rfJKDJkuxzh5Q").then((upcoming) => {
    // asynchronously called
});

stripe.invoices.update(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    {
        closed: true
    },
    (err, invoice) => {
        // asynchronously called
    }
);
stripe.invoices.update(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    {
        closed: true
    }).then((invoice) => {
        // asynchronously called
    }
);

stripe.invoices.pay("in_15fvyXEe31JkLCeQH7QbgZZb", (err, invoice) => {
    // asynchronously called
});
stripe.invoices.pay("in_15fvyXEe31JkLCeQH7QbgZZb").then((invoice) => {
    // asynchronously called
});

stripe.invoices.pay("in_15fvyXEe31JkLCeQH7QbgZZb", { source: "source_id" }).then((invoice) => {
    // asynchronously called
});

stripe.invoices.list(
    { customer: "cus_5rfJKDJkuxzh5Q", limit: 3 },
    (err, invoices) => {
        // asynchronously called
    }
);
stripe.invoices.list({ customer: "cus_5rfJKDJkuxzh5Q", limit: 3 }).then((invoices) => {
    // asynchronously called
});

stripe.invoices.retrieve("in_15fvyXEe31JkLCeQH7QbgZZb", { expand: ["subscription"] }).then((invoice) => {
  invoice.subscription;
});

//#endregion

//#region Invoice Items tests
// ##################################################################################

//#endregion

//#region Payment Intents test
// ##################################################################################
stripe.paymentIntents.create({
    amount: 2000,
    currency: "eur",
    payment_method_types: ["card"],
}, (err, intent) => {});

stripe.paymentIntents.create({
    amount: 2000,
    currency: "eur",
    payment_method_types: ["card"],
}).then((intent) => {});

stripe.paymentIntents.list({}, (err, intent) => {});
stripe.paymentIntents.list({}).then((intent) => {});
stripe.paymentIntents.list((err, intent) => {});
stripe.paymentIntents.list().then((intent) => {});
stripe.paymentIntents.list({ expired: true }, (err, intent) => {});
stripe.paymentIntents.list({ expired: true }).then((intent) => {});

stripe.paymentIntents.update("pi_Aabcxyz01aDfoo", {
    amount: 2001,
    currency: 'usd',
}, (err, intent) => {});
stripe.paymentIntents.update("pi_Aabcxyz01aDfoo", {
    amount: 2001,
    currency: 'usd',
}).then((intent) => {});

stripe.paymentIntents.retrieve("pi_Aabcxyz01aDfoo", (err, intent) => {});
stripe.paymentIntents.retrieve("pi_Aabcxyz01aDfoo").then((intent) => {});

stripe.paymentIntents.confirm("pi_Aabcxyz01aDfoo", {}, (err, intent) => {});
stripe.paymentIntents.confirm("pi_Aabcxyz01aDfoo", {}).then((intent) => {});

stripe.paymentIntents.capture("pi_Aabcxyz01aDfoo", {}, (err, intent) => {});
stripe.paymentIntents.capture("pi_Aabcxyz01aDfoo", {}).then((intent) => {});

stripe.paymentIntents.cancel("pi_Aabcxyz01aDfoo", (err, intent) => {});
stripe.paymentIntents.cancel("pi_Aabcxyz01aDfoo").then((intent) => {});
stripe.paymentIntents.cancel("pi_Aabcxyz01aDfoo", {}, (err, intent) => {});
stripe.paymentIntents.cancel("pi_Aabcxyz01aDfoo", {}).then((intent) => {});
stripe.paymentIntents.cancel("pi_Aabcxyz01aDfoo", { cancellation_reason: 'duplicate' }, (err, intent) => {});
stripe.paymentIntents.cancel("pi_Aabcxyz01aDfoo", { cancellation_reason: 'requested_by_customer' }).then((intent) => {});
//#endregion

//#region Payouts tests
// ##################################################################################
stripe.payouts.create({
    amount: 2000,
    currency: "usd",
    description: "The Payout",
}, (err, payout) => {});
stripe.payouts.create({
    amount: 2000,
    currency: "usd",
    description: "The Payout",
}).then((payout) => {});
stripe.payouts.create({
    amount: 2000,
    currency: "usd",
    description: "The Payout",
}, {
    stripe_account: "acct_abc12345678",
}, (err, payout) => {});
stripe.payouts.create({
    amount: 2000,
    currency: "usd",
    description: "The Payout",
}, {
    stripe_account: "acct_abc12345678",
}).then((payout) => {});

stripe.payouts.retrieve(
    "po_5rfJKDJkuxzh5Q",
    (err, payout) => {}
);
stripe.payouts.retrieve("po_5rfJKDJkuxzh5Q").then(
    (payout) => {}
);
stripe.payouts.retrieve(
    "po_5rfJKDJkuxzh5Q",
    { stripe_account: "acct_abc12345678" },
    (err, payout) => {}
);
stripe.payouts.retrieve(
    "po_5rfJKDJkuxzh5Q",
    { stripe_account: "acct_abc12345678" }
).then((payout) => {});

stripe.payouts.update(
    "po_5rfJKDJkuxzh5Q",
    { metadata: { key: "value" } },
    (err: Stripe.IStripeError, payout: Stripe.payouts.IPayout) => {}
);
stripe.payouts.update(
    "po_5rfJKDJkuxzh5Q",
    { metadata: { key: "value" } },
).then((payout) => {});
stripe.payouts.update(
    "po_5rfJKDJkuxzh5Q",
    { metadata: { key: "value" } },
    { stripe_account: "acct_abc12345678" },
    (err, payout) => {}
);
stripe.payouts.update(
    "po_5rfJKDJkuxzh5Q",
    { metadata: { key: "value" } },
    { stripe_account: "acct_abc12345678" },
).then((payout) => {});

stripe.payouts.list(
    { limit: 100 },
    { stripe_account: "acct_abc12345678" },
    (err, payouts) => {}
);
stripe.payouts.list(
    { limit: 100 },
    { stripe_account: "acct_abc12345678" },
).then((payouts) => {});
stripe.payouts.list(
    { limit: 100 },
    (err, payouts) => {}
);
stripe.payouts.list(
    { limit: 100 },
).then((payouts) => {});
stripe.payouts.list(
    { stripe_account: "acct_abc12345678" },
    (err, payouts) => {}
);
stripe.payouts.list(
    { stripe_account: "acct_abc12345678" },
).then((payouts) => {});
stripe.payouts.list(
    (err, payouts) => {}
);
stripe.payouts.list().then((payouts) => {});

stripe.payouts.cancel(
    "po_5rfJKDJkuxzh5Q",
    { stripe_account: "acct_abc12345678" },
    (err, payout) => {}
);
stripe.payouts.cancel(
    "po_5rfJKDJkuxzh5Q",
    { stripe_account: "acct_abc12345678" },
).then((payout) => {});
stripe.payouts.cancel(
    "po_5rfJKDJkuxzh5Q",
    (err, payout) => {}
);
stripe.payouts.cancel(
    "po_5rfJKDJkuxzh5Q",
).then((payout) => {});

//#endregion

//#region Plans tests
// ##################################################################################

// all product hash options
stripe.plans.create({
    amount: 2000,
    interval: "month",
    product: {
        name: "Amazing Gold Plan",
        statement_descriptor: "Gold Plan",
        metadata: {
            plan_id: "goldplan123"
        }
    },
    nickname: "Something to remember me by",
    currency: "usd",
    id: "gold-plan",
    usage_type: 'metered',
    billing_scheme: 'per_unit'
}, (err, plan) => {
    // asynchronously called
});

// minimum options with product hash
stripe.plans.create({
    amount: 2000,
    currency: "usd",
    interval: "month",
    product: {
        name: "Amazing Gold Plan"
    }
}).then((plan) => {
    // asynchronously called
});

// minimum options with product id
stripe.plans.create({
    amount: 2000,
    currency: "usd",
    interval: "month",
    product: "prod_UT1t06yZ3iBEHi"
}).then((plan) => {
    // asynchronously called
    const productId = plan.product as string;
});

stripe.plans.retrieve(
    "gold-plan",
    {
        expand: ["product"]
    },
    (err, plan) => {
        // asynchronously called
        const product = plan.product as Stripe.products.IProduct;
    }
);
stripe.plans.retrieve("gold-plan").then((plan) => {
    // asynchronously called
});

stripe.plans.update("gold-plan", {
    product: "prod_UT1t06yZ3iBEHi"
}, (err, plan) => {
    // asynchronously called
});
stripe.plans.update("gold-plan", { nickname: "New gold plan nickname" }).then((plan) => {
    // asynchronously called
});

stripe.plans.del(
    "gold-plan",
    (err, confirmation) => {
        // asynchronously called
    }
);
stripe.plans.del("gold-plan").then((confirmation) => {
    // asynchronously called
});

stripe.plans.list({ active: true, product: 'prod_someproduct' }, (err, plans) => {
    // asynchronously called
});
stripe.plans.list({ active: true, product: 'prod_someproduct' }).then((plans) => {
    // asynchronously called
});

stripe.plans.list(null, (err, plans) => {
    // asynchronously called
});
stripe.plans.list(null).then((plans) => {
    // asynchronously called
});

stripe.plans.list((err, plans) => {
    // asynchronously called
});
stripe.plans.list().then((plans) => {
    // asynchronously called
});

//#endregion

//#region Subscriptions tests
// ##################################################################################

stripe.subscriptions.create({ items: [{ plan: "platypi-dev" }], customer: "cus_5rfJKDJkuxzh5Q" }, (err, subscription) => {
    // asynchronously called
});
stripe.subscriptions.create({ items: [{ plan: "platypi-dev" }], customer: "cus_5rfJKDJkuxzh5Q" }).then((subscription) => {
    // asynchronously called

    stripe.subscriptions.update("sub_8QwCiwZ9tmMSpt", { items: [{ id: subscription.items.data[0].id, plan: "platypi" }] }, (err, subscription) => {
        // asynchronously called
    });
    stripe.subscriptions.update("sub_8QwCiwZ9tmMSpt", { items: [{ id: subscription.items.data[0].id, plan: "platypi" }] }).then((subscription) => {
        // asynchronously called
    });
});

stripe.subscriptions.retrieve("sub_8QwCiwZ9tmMSpt", (err, subscription) => {
    // asynchronously called
    if (typeof subscription.customer === "object") {
        subscription.customer.email;
    }
});
stripe.subscriptions.retrieve("sub_8QwCiwZ9tmMSpt").then((subscription) => {
    // asynchronously called
    if (typeof subscription.customer === "object") {
        subscription.customer.email;
    }
});

stripe.subscriptions.del("sub_8QwCiwZ9tmMSpt", (err, subscription) => {
    // asynchronously called
});
stripe.subscriptions.del("sub_8QwCiwZ9tmMSpt").then((subscription) => {
    // asynchronously called
});

stripe.subscriptions.list({ customer: "cus_5rfJKDJkuxzh5Q", plan: "platypi-dev" }, (err, subscriptions) => {
    // asynchronously called
});
stripe.subscriptions.list({ customer: "cus_5rfJKDJkuxzh5Q", plan: "platypi-dev" }).then((subscriptions) => {
    // asynchronously called
});

//#endregion

//#region Subscription Items tests
// ##################################################################################

stripe.subscriptionItems.create({ subscription: "sub_C9giwDfCeN8fwt", plan: "platypi-dev" }, (err, subscriptionItem) => {
    // asynchronously called
});
stripe.subscriptionItems.create({ subscription: "sub_C9giwDfCeN8fwt", plan: "platypi-dev" }).then((subscriptionItem) => {
    // asynchronously called
});

stripe.subscriptionItems.create({ subscription: "sub_C9giwDfCeN8fwt", plan: "platypi-dev", prorate: true, proration_date: Math.round(new Date().valueOf() / 1000) }).then((subscriptionItem) => {
    // asynchronously called
});

stripe.subscriptionItems.retrieve("si_C9gimdd2l9qvCU", (err, subscriptionItem) => {
    // asynchronously called
});
stripe.subscriptionItems.retrieve("si_C9gimdd2l9qvCU").then((subscriptionItem) => {
    // asynchronously called
});

stripe.subscriptionItems.update("si_C9gimdd2l9qvCU", { plan: "platypi" }, (err, subscriptionItem) => {
    // asynchronously called
});
stripe.subscriptionItems.update("si_C9gimdd2l9qvCU", { plan: "platypi" }).then((subscriptionItem) => {
    // asynchronously called
});

stripe.subscriptionItems.del("si_C9gimdd2l9qvCU", (err, subscriptionItem) => {
    // asynchronously called
});
stripe.subscriptionItems.del("si_C9gimdd2l9qvCU").then((subscriptionItem) => {
    // asynchronously called
});

stripe.subscriptionItems.list({ subscription: "si_C9gimdd2l9qvCU" }, (err, subscriptionItems) => {
    // asynchronously called
});
stripe.subscriptionItems.list({ subscription: "si_C9gimdd2l9qvCU" }).then((subscriptionItems) => {
    // asynchronously called
});

//#endregion

//#region Ephemeral keys tests
// ##################################################################################

stripe.ephemeralKeys.create({ customer: "cus_5rfJKDJkuxzh5Q" }, { stripe_version: "2017-08-15" }).then((ephemeralKeys) => {
    // asynchronously called
});

stripe.usageRecords.create('sub_8QwCiwZ9tmMSpt', { action: 'set', quantity: 10000, timestamp: 1537006853 }).then((usageRecord: Stripe.usageRecords.IUsageRecord) => {});
stripe.usageRecords.create('sub_8QwCiwZ9tmMSpt', { action: 'set', quantity: 10000, timestamp: 1537006853 }, (err, usageRecord: Stripe.usageRecords.IUsageRecord) => {});

stripe.usageRecordSummaries.list('si_C9gimdd2l9qvCU', { limit: 10 }).then((usageRecordSummaries: Stripe.usageRecordSummaries.IUsageRecordSummaries) => {});
stripe.usageRecordSummaries.list('si_C9gimdd2l9qvCU', { limit: 10 }, (err, usageRecordSummaries: Stripe.usageRecordSummaries.IUsageRecordSummaries) => {});

//#region Errors
// ##################################################################################

stripe.charges.create({
    amount: 123,
    currency: 'usd',
}).catch(err => {
    if (err instanceof Stripe.errors.StripeCardError) {
        const type = err.type;
    }
});

//#endregion Errors
// ##################################################################################
