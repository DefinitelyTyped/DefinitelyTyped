import Stripe = require('stripe');
import { customers } from 'stripe';

var stripe = new Stripe("sk_test_BF573NobVn98OiIsPAv7A04K")

stripe.setApiVersion('2016-03-07');

//#region Balance tests
// ##################################################################################

stripe.balance.retrieve(function (err, balance) {
    // asynchronously called
});
stripe.balance.retrieve().then(function (balance) {
    // asynchronously called
});

stripe.balance.retrieveTransaction(
    "txn_17xMvmBoqMA9o2xkYNH2ewNj",
    function (err, balanceTransaction) {
        // asynchronously called
    }
);
stripe.balance.retrieveTransaction(
    "txn_17xMvmBoqMA9o2xkYNH2ewNj").then(
    function (balanceTransaction) {
        // asynchronously called
    }
);

stripe.balance.listTransactions({ limit: 3 }, function (err, transactions) {
    // asynchronously called
});
stripe.balance.listTransactions({ limit: 3 }).then( function (transactions) {
    // asynchronously called
});
stripe.balance.listTransactions().then(function (transactions) {
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
}, function (err, charge) {
    // asynchronously called
    });
stripe.charges.create({
    amount: 400,
    currency: "gbp",
    source: "tok_17wV94BoqMA9o2xkhlAd3ALf", // obtained with Stripe.js
    description: "Charge for test@example.com"
}).then(function (charge) {
    // asynchronously called

    charge.refunds.create().then(function (refund) {
        // asynchronously called
    });
    charge.refunds.create({ amount: 100 }).then(function (refund) {
        // asynchronously called
    });

    charge.refunds.retrieve("re_15jzA4Ee31JkLCeQcxbTbjaL").then(function (refund) {

    });

    charge.refunds.update("re_15jzA4Ee31JkLCeQcxbTbjaL", { metadata: { test: "data" } }).then(function (refund) {

    });

    charge.refunds.list({ limit: 3 }).then(function (refund) {

    });
    charge.refunds.list().then(function (refund) {

    });
});

stripe.charges.retrieve("ch_15fvyXEe31JkLCeQOo0SwFk9", function (err, charge) {
    // asynchronously called
    if (typeof charge.application_fee === "object") {
        charge.application_fee.amount;
    }
});
stripe.charges.retrieve("ch_15fvyXEe31JkLCeQOo0SwFk9").then(function (charge) {
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
    function (err, charge) {
        // asynchronously called
    }
);
stripe.charges.update(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    {
        description: "Charge for test@example.com"
    })
    .then(function (charge) {
        // asynchronously called
    });

stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9", {amount: 1}, {}, function (err, charge) {
    // asynchronously called
});
stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9", {amount: 1}, {}).then( function (charge) {
    // asynchronously called
});
stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9", {}, {},function (err, charge) {
    // asynchronously called
});
stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9", {}).then( function (charge) {
    // asynchronously called
});
stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9").then( function (charge) {
    // asynchronously called
});

stripe.charges.list({ limit: 3 }, function (err, charges) {
    // asynchronously called
});
stripe.charges.list({ limit: 3 }).then(function (charges) {
    // asynchronously called
});

stripe.charges.refund("ch_15fvyXEe31JkLCeQOo0SwFk9", {},
    function (err, refund) {
        // asynchronously called
    }
);
stripe.charges.refund("ch_15fvyXEe31JkLCeQOo0SwFk9", {}).then(function (refund) {
    // asynchronously called
});
stripe.charges.refund("ch_15fvyXEe31JkLCeQOo0SwFk9").then(function (refund) {
    // asynchronously called
});

stripe.charges.retrieveRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL",
    function (err, refund) {
        // asynchronously called
    }
);
stripe.charges.retrieveRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL").then(function (refund) {
        // asynchronously called
    }
);

stripe.charges.createRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    {},
    function (err, refund) {
        // asynchronously called
    }
);
stripe.charges.createRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    function (err, refund) {
        // asynchronously called
    }
);
stripe.charges.createRefund("ch_15fvyXEe31JkLCeQOo0SwFk9").then(function (refund) {
    // asynchronously called
});

stripe.charges.updateRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL",
    { metadata: { key: "value" } },
    function (err: Stripe.IStripeError, refund: Stripe.refunds.IRefund) {
        // asynchronously called

    }
);
stripe.charges.updateRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL",
    { metadata: { key: "value" } }).then(
    function (refund) {
        // asynchronously called

    }
);

stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', function (err, refunds) {
    // asynchronously called
});
stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9').then(function (refunds) {
    // asynchronously called
});
stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', { limit: 3 }, function (err, refunds) {
    // asynchronously called
});
stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', { limit: 3 }).then(function (refunds) {
    // asynchronously called
});

stripe.charges.markAsSafe('ch_15fvyXEe31JkLCeQOo0SwFk9', function (err, refunds) {
    // asynchronously called
});
stripe.charges.markAsSafe('ch_15fvyXEe31JkLCeQOo0SwFk9').then(function (refunds) {
    // asynchronously called
});

stripe.charges.markAsFraudulent('ch_15fvyXEe31JkLCeQOo0SwFk9', function (err, refunds) {
    // asynchronously called
});
stripe.charges.markAsFraudulent('ch_15fvyXEe31JkLCeQOo0SwFk9').then(function (refunds) {
    // asynchronously called
});

//#endregion

//#region Customer tests
// ##################################################################################

stripe.customers.create({
    description: 'Customer for test@example.com',
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX", // obtained with Stripe.js
    metadata: { test: 123, test2: 123 } // IMetadata test
}, function (err, customer) {
    // asynchronously called
    });
stripe.customers.create({
    description: 'Customer for test@example.com',
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX", // obtained with Stripe.js
    metadata: null // IMetadata test
}).then( function (customer) {
    // asynchronously called
    customer.cards.create({ card: "tok_17wV94BoqMA9o2xkhlAd3ALf"}).then(function (customer) {});
    customer.cards.retrieve("card_17xMvXBoqMA9o2xkq6W5gamx").then(function (card) { 
        let strCustomer: string = <string>card.customer;
        let objCustomer: customers.ICustomer = <customers.ICustomer>card.customer;
    });
    customer.cards.update("card_17xMvXBoqMA9o2xkq6W5gamx", { name: "Test" }).then(function (card) {});
    customer.cards.list().then(function (cards) {});
    customer.cards.del("card_17xMvXBoqMA9o2xkq6W5gamx").then(function (confirmation) {});

    customer.subscriptions.create({ plan: "gold" }).then(function (subscription) { });
    customer.subscriptions.retrieve("sub_8Eluur5KoIKxuy").then(function (subscription) { });
    customer.subscriptions.update("sub_8Eluur5KoIKxuy", { plan: "silver" }).then(function (subscription) { });
    customer.subscriptions.list().then(function (subscriptions) { });
    customer.subscriptions.del("sub_8Eluur5KoIKxuy").then(function (subscription) { });
    customer.subscriptions.deleteDiscount("sub_8Eluur5KoIKxuy").then(function (confirmation) { });

    // IMetadata tests:
    let num: number;
    let str: string;
    customer.metadata["test"] = str;
    customer.metadata["test"] = num;
    customer.metadata["test"] == str;
    customer.metadata["test"] == num;
    customer.metadata.testStr = str;
    customer.metadata.testNum = num;
    customer.metadata.test1 == str;
    customer.metadata.test2 == num;
    customer.metadata = {
        test1: str,
        test2: num
    }
    customer.metadata = null;
});


stripe.customers.create({
    description: 'Customer for test@example.com',
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX" // obtained with Stripe.js
}, { stripe_account: "" }, function (err, customer) {
    // asynchronously called
});
stripe.customers.create({
    description: 'Customer for test@example.com',
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX" // obtained with Stripe.js
}, { stripe_account: "" }).then(function (customer) {

});

stripe.customers.retrieve(
    "cus_5rfJKDJkuxzh5Q",
    function (err, customer) {
        // asynchronously called
        customer.cards.create(
            { card: "tok_15V2YhEe31JkLCeQy9iUgsJX" },
            function (err, card) {
                // asynchronously called
                card.brand;
            }
        );
    }
);
stripe.customers.retrieve("cus_5rfJKDJkuxzh5Q").then(function (customer) {
    // asynchronously called
});

stripe.customers.update("cus_5rfJKDJkuxzh5Q", {
    description: "Customer for test@example.com"
}, function (err, customer) {
    // asynchronously called
    });
stripe.customers.update("cus_5rfJKDJkuxzh5Q", {
    description: "Customer for test@example.com"
}).then(function (customer) {
    // asynchronously called
});

stripe.customers.del(
    "cus_5rfJKDJkuxzh5Q",
    function (err, confirmation) {
        // asynchronously called
    }
);
stripe.customers.del("cus_5rfJKDJkuxzh5Q").then(function (confirmation) {
        // asynchronously called
    }
);

stripe.customers.list({ limit: 3 }, function (err, customers) {
    // asynchronously called
});
stripe.customers.list({ limit: 3 }).then(function (customers) {
    // asynchronously called
});

stripe.customers.createCard(
    "cus_5rfJKDJkuxzh5Q",
    { card: "tok_15V2YhEe31JkLCeQy9iUgsJX" },
    function (err, card) {
        // asynchronously called
    }
);
stripe.customers.createCard("cus_5rfJKDJkuxzh5Q", { card: "tok_15V2YhEe31JkLCeQy9iUgsJX" }).then(function (card) {
    // asynchronously called
});

stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    { source: "tok_15V2YhEe31JkLCeQy9iUgsJX" },
    function (err, source) {
        var card = <Stripe.ICard>source;
        var bankAcc = <Stripe.IBankAccount>source;
    }
);
stripe.customers.createSource("cus_5rfJKDJkuxzh5Q", { source: "tok_15V2YhEe31JkLCeQy9iUgsJX" }).then(function (source) {
    var card = <Stripe.ICard>source;
    var bankAcc = <Stripe.IBankAccount>source;
});

stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    {
        source: {
            object: "card",
            exp_month: 1,
            exp_year: 16,
            number: 4242424242424242
        }
    },
    function (err, card) {
        // asynchronously called
        var obj: Stripe.ICard = card;
    }
);
stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    {
        source: {
            object: "card",
            exp_month: 1,
            exp_year: 16,
            number: 4242424242424242
        }
    }).then(
    function (card) {
        // asynchronously called
        var obj: Stripe.ICard = card;
    }
);

stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    { source: "btok_8E264Lxsbyvj3E" },
    function (err: Stripe.IStripeError, bankAcc: Stripe.IBankAccount) {
        // asynchronously called
        bankAcc.bank_name;
    }
);
stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    { source: "btok_8E264Lxsbyvj3E" }).then(function (bankAcc: Stripe.IBankAccount) {
        // asynchronously called
        bankAcc.bank_name;
    }
);

stripe.customers.retrieveCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    function (err, card) {
        // asynchronously called
        var obj: Stripe.ICard = card;
    }
);
stripe.customers.retrieveCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S").then(function (card) {
        // asynchronously called
        var obj: Stripe.ICard = card;
    });

stripe.customers.updateCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    { name: "Jane Austen" },
    function (err, card) {
        // asynchronously called
        var obj: Stripe.ICard = card;
    }
);

stripe.customers.updateCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    { name: "Jane Austen" }).then(function (card) {
        // asynchronously called
        var obj: Stripe.ICard = card;
    });

stripe.customers.deleteCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    function (err, confirmation) {
        // asynchronously called
    }
);
stripe.customers.deleteCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S").then(function (confirmation) {
        // asynchronously called
    });

stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', null, function (err, cards) {
    // asynchronously called
});
stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', null).then(function (cards) {
    // asynchronously called
});

stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', function (err, cards) {
    // asynchronously called
});
stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc').then(function (cards) {
    // asynchronously called
});

stripe.customers.retrieveSubscription(
    "cus_5rfJKDJkuxzh5Q",
    "sub_5rfJxnBLGSwsYp",
    function (err, subscription) {
        // asynchronously called
    }
);
stripe.customers.retrieveSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp").then(function (subscription) {
    // asynchronously called
});

stripe.customers.updateSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp", { plan: "platypi-dev" },
    function (err, subscription) {
        // asynchronously called
    }
);
stripe.customers.updateSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp", { plan: "platypi-dev" }).then(function (subscription) {
    // asynchronously called
});

stripe.customers.cancelSubscription(
    "cus_5rfJKDJkuxzh5Q",
    "sub_5rfJxnBLGSwsYp",
    null,
    function (err, confirmation) {
        // asynchronously called
    }
);
stripe.customers.cancelSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp", null).then(function (confirmation) {
    // asynchronously called
});

stripe.customers.cancelSubscription(
    "cus_5rfJKDJkuxzh5Q",
    "sub_5rfJxnBLGSwsYp",
    function (err, confirmation) {
        // asynchronously called
    }
);
stripe.customers.cancelSubscription("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp").then(function (confirmation) {
    // asynchronously called
});

stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', null, function (err, subscriptions) {
    // asynchronously called
});
stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', null).then(function (subscriptions) {
    // asynchronously called
});

stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', function (err, subscriptions) {
    // asynchronously called
});
stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc').then(function (subscriptions) {
    // asynchronously called
});

stripe.customers.deleteDiscount("cus_5rfJKDJkuxzh5Q", function (err, confirmation) {
    // asynchronously called
});
stripe.customers.deleteDiscount("cus_5rfJKDJkuxzh5Q").then(function (confirmation) {
    // asynchronously called
});

stripe.customers.deleteSubscriptionDiscount("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp", function (err, confirmation) {
    // asynchronously called
});
stripe.customers.deleteSubscriptionDiscount("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp").then(function (confirmation) {
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

//#endregion

//#region Accounts test
// ##################################################################################

stripe.accounts.create({
    email: "",
    type: "standard"
}, function (err, customer) {
    // asynchronously called
    }
);
stripe.accounts.create({
    type: "custom"
}).then(function (customer) {
    // asynchronously called
    }
);

stripe.accounts.retrieve(
    "acct_17wV8KBoqMA9o2xk",
    function (err, account) {
        // asynchronously called
    }
);
stripe.accounts.retrieve(
    "acct_17wV8KBoqMA9o2xk").then(
    function (account) {
        // asynchronously called
    }
);

stripe.accounts.update("acct_17wV8KBoqMA9o2xk",
    {
        support_phone: "555-867-5309"
    },
    function(err, account) {
        // asynchronously called
    }
);
stripe.accounts.update("acct_17wV8KBoqMA9o2xk",
    {
        support_phone: "555-867-5309"
    }).then(
    function(account) {
        // asynchronously called
    }
);

stripe.accounts.del("acct_17wV8KBoqMA9o2xk", function (err, confirmation) { });
stripe.accounts.del("acct_17wV8KBoqMA9o2xk").then(function (confirmation) { });

stripe.accounts.reject("acct_17wV8KBoqMA9o2xk", { reason: 'fraud' }, function (err, account) {
    // asynchronously called
});
stripe.accounts.reject("acct_17wV8KBoqMA9o2xk", { reason: 'fraud' }).then(function (account) {
    // asynchronously called
});

stripe.accounts.list(
    { limit: 3 },
    function (err, accounts) {
        // asynchronously called
    }
);
stripe.accounts.list(
    { limit: 3 }).then(
    function (accounts) {
        // asynchronously called
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

stripe.accounts.createExternalAccount("", { external_account: "btok_8E264Lxsbyvj3E" }, function (err, extAcc) {
    var card = <Stripe.ICard>extAcc;
    var bankAcc = <Stripe.IBankAccount>extAcc;
});
stripe.accounts.createExternalAccount("", { external_account: "tok_15V2YhEe31JkLCeQy9iUgsJX" }).then(function (extAcc) {
    var card = <Stripe.ICard>extAcc;
    var bankAcc = <Stripe.IBankAccount>extAcc;
});

stripe.accounts.createExternalAccount("", { external_account: "tok_15V2YhEe31JkLCeQy9iUgsJX" }, { stripe_account: "acct_17wV8KOoqMF9a2xk" }).then(function (extAcc) {
    var card = <Stripe.ICard>extAcc;
    var bankAcc = <Stripe.IBankAccount>extAcc;
});
stripe.accounts.createExternalAccount("", { external_account: "tok_15V2YhEe31JkLCeQy9iUgsJX" }, "acct_17wV8KOoqMF9a2xk").then(function (extAcc) {
    var card = <Stripe.ICard>extAcc;
    var bankAcc = <Stripe.IBankAccount>extAcc;
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



//#endregion

//#region Order Items tests
// ##################################################################################



//#endregion

//#region Products tests
// ##################################################################################



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

const event = stripe.webhooks.constructEvent<Stripe.subscriptions.ISubscription>(
  webhookRequest.rawBody,
  webhookRequest.headers['stripe-signature'],
  webhookSecret
);

//#endregion

//#region Coupons tests
// ##################################################################################

stripe.coupons.create({
    percent_off: 25,
    duration: 'repeating',
    duration_in_months: 3,
    id: '25OFF'
}, function (err, coupon) {
    // asynchronously called
    });
stripe.coupons.create({
    percent_off: 25,
    duration: 'repeating',
    duration_in_months: 3,
    id: '25OFF'
}).then(function (coupon) {
    // asynchronously called
});

stripe.coupons.retrieve(
    "25OFF",
    function (err, coupon) {
        // asynchronously called
    }
);
stripe.coupons.retrieve("25OFF").then(function (coupon) {
    // asynchronously called
});

stripe.coupons.update("25OFF", {
    metadata: { key: "value" }
}, function (err: Stripe.IStripeError, coupon: Stripe.coupons.ICoupon) {
    // asynchronously called
});
stripe.coupons.update("25OFF", {
    metadata: { key: "value" }
}).then(function (coupon) {
    // asynchronously called
});

stripe.coupons.del("25OFF", function (err, confirmation) {

});
stripe.coupons.del("25OFF").then(function (confirmation) {

});

stripe.coupons.list({ limit: 3 }, function (err, coupons) {
    // asynchronously called
});
stripe.coupons.list({ limit: 3 }).then(function (coupons) {
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
}, function (err, invoice) {
    // asynchronously called
    });
stripe.invoices.create({
    customer: "cus_5rfJKDJkuxzh5Q"
}).then(function (invoice) {
    // asynchronously called
});

stripe.invoices.retrieve(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    function (err, invoice) {
        // asynchronously called
    }
);
stripe.invoices.retrieve("in_15fvyXEe31JkLCeQH7QbgZZb").then(function (invoice) {
    // asynchronously called
});

stripe.invoices.retrieveLines(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    { limit: 5 },
    function (err, lines) {
        // asynchronously called
        lines.data[0].type = "invoiceitem"
    }
);
stripe.invoices.retrieveLines("in_15fvyXEe31JkLCeQH7QbgZZb", { limit: 5 }).then(function (lines) {
    // asynchronously called
});

stripe.invoices.retrieveUpcoming(
    "cus_5rfJKDJkuxzh5Q",
    null,
    function (err, upcoming) {
        // asynchronously called
    }
);
stripe.invoices.retrieveUpcoming("cus_5rfJKDJkuxzh5Q", null).then(function (upcoming) {
    // asynchronously called
});

stripe.invoices.retrieveUpcoming(
    "cus_5rfJKDJkuxzh5Q",
    function (err, upcoming) {
        // asynchronously called
    }
);
stripe.invoices.retrieveUpcoming("cus_5rfJKDJkuxzh5Q").then(function (upcoming) {
    // asynchronously called
});

stripe.invoices.update(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    {
        closed: true
    },
    function (err, invoice) {
        // asynchronously called
    }
);
stripe.invoices.update(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    {
        closed: true
    }).then(function (invoice) {
        // asynchronously called
    }
);

stripe.invoices.pay("in_15fvyXEe31JkLCeQH7QbgZZb", function (err, invoice) {
    // asynchronously called
});
stripe.invoices.pay("in_15fvyXEe31JkLCeQH7QbgZZb").then(function (invoice) {
    // asynchronously called
});

stripe.invoices.pay("in_15fvyXEe31JkLCeQH7QbgZZb", { source: "source_id" }).then(function (invoice) {
    // asynchronously called
});

stripe.invoices.list(
    { customer: "cus_5rfJKDJkuxzh5Q", limit: 3 },
    function (err, invoices) {
        // asynchronously called
    }
);
stripe.invoices.list({ customer: "cus_5rfJKDJkuxzh5Q", limit: 3 }).then(function (invoices) {
    // asynchronously called
});

//#endregion

//#region Invoice Items tests
// ##################################################################################



//#endregion

//#region Payouts tests
// ##################################################################################
stripe.payouts.create({
    amount: 2000,
    currency: "usd",
    description: "The Payout",
}, function(err, payout) {});
stripe.payouts.create({
    amount: 2000,
    currency: "usd",
    description: "The Payout",
}).then(function(payout) {});
stripe.payouts.create({
    amount: 2000,
    currency: "usd",
    description: "The Payout",
}, {
    stripe_account: "acct_abc12345678",
}, function(err, payout) {});
stripe.payouts.create({
    amount: 2000,
    currency: "usd",
    description: "The Payout",
}, {
    stripe_account: "acct_abc12345678",
}).then(function(payout) {});

stripe.payouts.retrieve(
    "po_5rfJKDJkuxzh5Q",
    function(err, payout) {}
);
stripe.payouts.retrieve("po_5rfJKDJkuxzh5Q").then(
    function(payout) {}
);
stripe.payouts.retrieve(
    "po_5rfJKDJkuxzh5Q",
    { stripe_account: "acct_abc12345678" },
    function(err, payout) {}
);
stripe.payouts.retrieve(
    "po_5rfJKDJkuxzh5Q",
    { stripe_account: "acct_abc12345678" }
).then(function(payout) {});

stripe.payouts.update(
    "po_5rfJKDJkuxzh5Q",
    { metadata: { key: "value" } },
    function(err: Stripe.IStripeError, payout: Stripe.payouts.IPayout) {}
);
stripe.payouts.update(
    "po_5rfJKDJkuxzh5Q",
    { metadata: { key: "value" } },
).then(function(payout) {});
stripe.payouts.update(
    "po_5rfJKDJkuxzh5Q",
    { metadata: { key: "value" } },
    { stripe_account: "acct_abc12345678" },
    function(err, payout) {}
);
stripe.payouts.update(
    "po_5rfJKDJkuxzh5Q",
    { metadata: { key: "value" } },
    { stripe_account: "acct_abc12345678" },
).then(function(payout) {});

stripe.payouts.list(
    { limit: 100 },
    { stripe_account: "acct_abc12345678" },
    function(err, payouts) {}
);
stripe.payouts.list(
    { limit: 100 },
    { stripe_account: "acct_abc12345678" },
).then(function(payouts) {});
stripe.payouts.list(
    { limit: 100 },
    function(err, payouts) {}
);
stripe.payouts.list(
    { limit: 100 },
).then(function(payouts) {});
stripe.payouts.list(
    { stripe_account: "acct_abc12345678" },
    function(err, payouts) {}
);
stripe.payouts.list(
    { stripe_account: "acct_abc12345678" },
).then(function(payouts) {});
stripe.payouts.list(
    function(err, payouts) {}
);
stripe.payouts.list().then(function(payouts) {});

stripe.payouts.cancel(
    "po_5rfJKDJkuxzh5Q",
    { stripe_account: "acct_abc12345678" },
    function(err, payout) {}
);
stripe.payouts.cancel(
    "po_5rfJKDJkuxzh5Q",
    { stripe_account: "acct_abc12345678" },
).then(function(payout) {});
stripe.payouts.cancel(
    "po_5rfJKDJkuxzh5Q",
    function(err, payout) {}
);
stripe.payouts.cancel(
    "po_5rfJKDJkuxzh5Q",
).then(function(payout) {});

//#endregion

//#region Plans tests
// ##################################################################################

stripe.plans.create({
    amount: 2000,
    interval: "month",
    name: "Amazing Gold Plan",
    currency: "usd",
    id: "gold"
}, function (err, plan) {
    // asynchronously called
    });
stripe.plans.create({
    amount: 2000,
    interval: "month",
    name: "Amazing Gold Plan",
    currency: "usd",
    id: "gold"
}).then(function (plan) {
    // asynchronously called
});

stripe.plans.retrieve(
    "platypi-dev",
    function (err, plan) {
        // asynchronously called
    }
);
stripe.plans.retrieve("platypi-dev").then(function (plan) {
    // asynchronously called
});

stripe.plans.update("platypi-dev", {
    name: "New plan name"
}, function (err, plan) {
    // asynchronously called
});
stripe.plans.update("platypi-dev", { name: "New plan name" }).then(function (plan) {
    // asynchronously called
});

stripe.plans.del(
    "platypi-dev",
    function (err, confirmation) {
        // asynchronously called
    }
);
stripe.plans.del("platypi-dev").then(function (confirmation) {
    // asynchronously called
});

stripe.plans.list(null, function (err, plans) {
    // asynchronously called
});
stripe.plans.list(null).then(function (plans) {
    // asynchronously called
});

stripe.plans.list(function (err, plans) {
    // asynchronously called
});
stripe.plans.list().then(function (plans) {
    // asynchronously called
});

//#endregion

//#region Subscriptions tests
// ##################################################################################

stripe.subscriptions.create({ plan: "platypi-dev", customer: "cus_5rfJKDJkuxzh5Q" }, function(err, subscription) {
    // asynchronously called
});
stripe.subscriptions.create({ plan: "platypi-dev", customer: "cus_5rfJKDJkuxzh5Q" }).then(function(subscription) {
    // asynchronously called
});

stripe.subscriptions.retrieve("sub_8QwCiwZ9tmMSpt", function(err, subscription) {
    // asynchronously called
    if (typeof subscription.customer === "object") {
        subscription.customer.email;
    }
});
stripe.subscriptions.retrieve("sub_8QwCiwZ9tmMSpt").then(function(subscription) {
    // asynchronously called
    if (typeof subscription.customer === "object") {
        subscription.customer.email;
    }
});

stripe.subscriptions.update("sub_8QwCiwZ9tmMSpt", { plan: "platypi" }, function(err, subscription) {
    // asynchronously called
});
stripe.subscriptions.update("sub_8QwCiwZ9tmMSpt", { plan: "platypi" }).then(function(subscription) {
    // asynchronously called
});

stripe.subscriptions.del("sub_8QwCiwZ9tmMSpt", function(err, subscription) {
    // asynchronously called
});
stripe.subscriptions.del("sub_8QwCiwZ9tmMSpt").then(function(subscription) {
    // asynchronously called
});

stripe.subscriptions.list({ customer: "cus_5rfJKDJkuxzh5Q", plan: "platypi-dev" }, function(err, subscriptions) {
    // asynchronously called
});
stripe.subscriptions.list({ customer: "cus_5rfJKDJkuxzh5Q", plan: "platypi-dev" }).then(function(subscriptions) {
    // asynchronously called
});

//#endregion

//#region Subscription Items tests
// ##################################################################################

stripe.subscriptionItems.create({ subscription: "sub_C9giwDfCeN8fwt", plan: "platypi-dev" }, function(err, subscriptionItem) {
    // asynchronously called
});
stripe.subscriptionItems.create({ subscription: "sub_C9giwDfCeN8fwt", plan: "platypi-dev" }).then(function(subscriptionItem) {
    // asynchronously called
});

stripe.subscriptionItems.create({ subscription: "sub_C9giwDfCeN8fwt", plan: "platypi-dev", prorate: true, proration_date: Math.round(new Date().valueOf() / 1000) }).then(function(subscriptionItem) {
    // asynchronously called
});

stripe.subscriptionItems.retrieve("si_C9gimdd2l9qvCU", function(err, subscriptionItem) {
    // asynchronously called
});
stripe.subscriptionItems.retrieve("si_C9gimdd2l9qvCU").then(function(subscriptionItem) {
    // asynchronously called
});

stripe.subscriptionItems.update("si_C9gimdd2l9qvCU", { plan: "platypi" }, function(err, subscriptionItem) {
    // asynchronously called
});
stripe.subscriptionItems.update("si_C9gimdd2l9qvCU", { plan: "platypi" }).then(function(subscriptionItem) {
    // asynchronously called
});

stripe.subscriptionItems.del("si_C9gimdd2l9qvCU", function(err, subscriptionItem) {
    // asynchronously called
});
stripe.subscriptionItems.del("si_C9gimdd2l9qvCU").then(function(subscriptionItem) {
    // asynchronously called
});

stripe.subscriptionItems.list({ subscription: "si_C9gimdd2l9qvCU" }, function(err, subscriptionItems) {
    // asynchronously called
});
stripe.subscriptionItems.list({ subscription: "si_C9gimdd2l9qvCU" }).then(function(subscriptionItems) {
    // asynchronously called
});

//#endregion

//#region Ephemeral keys tests
// ##################################################################################

stripe.ephemeralKeys.create({ customer: "cus_5rfJKDJkuxzh5Q" }, { stripe_version: "2017-08-15" }).then(function(ephemeralKeys) {
    // asynchronously called
});
