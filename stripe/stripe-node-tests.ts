/// <reference path="stripe-node.d.ts" />

import StripeNode = require('stripe');


var stripeTor = new StripeNode("sk_test_BF573NobVn98OiIsPAv7A04K");
var stripe = StripeNode("sk_test_BF573NobVn98OiIsPAv7A04K")

stripe.setApiVersion('2016-03-07');
stripe.customers.list({ limit: 3 }, function (err, customers) {
    // asynchronously called
});

stripe.charges.create({
    amount: 400,
    currency: "usd",
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX", // obtained with Stripe.js
    description: "Charge for test@example.com"
}, function (err, charge) {
    // asynchronously called
});

stripe.charges.retrieve(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    function (err, charge) {
        // asynchronously called
    }
    );

stripe.charges.update(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    {
        description: "Charge for test@example.com"
    },
    function (err, charge) {
        // asynchronously called
    }
    );

stripe.charges.capture("ch_15fvyXEe31JkLCeQOo0SwFk9", function (err, charge) {
    // asynchronously called
});

stripe.charges.list({ limit: 3 }, function (err, charges) {
    // asynchronously called
});

stripe.charges.createRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    {},
    function (err, refund) {
        // asynchronously called
    }
    );

stripe.charges.retrieveRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL",
    function (err, refund) {
        // asynchronously called
    }
    );

stripe.charges.updateRefund(
    "ch_15fvyXEe31JkLCeQOo0SwFk9",
    "re_15jzA4Ee31JkLCeQcxbTbjaL",
    { metadata: { key: "value" } },
    function (err, refund) {
        // asynchronously called
    }
    );

stripe.charges.listRefunds('ch_15fvyXEe31JkLCeQOo0SwFk9', null, function (err, refunds) {
    // asynchronously called
});

stripe.customers.create({
    description: 'Customer for test@example.com',
    source: "tok_15V2YhEe31JkLCeQy9iUgsJX" // obtained with Stripe.js
}, function (err, customer) {
        // asynchronously called
    });

stripe.customers.retrieve(
    "cus_5rfJKDJkuxzh5Q",
    function (err, customer) {
        // asynchronously called
        customer.cards.create(
            { card: "tok_15V2YhEe31JkLCeQy9iUgsJX" },
            function(err, card) {
                // asynchronously called
                card.brand;
            }
        );
    }
);

stripe.customers.retrieve("cus_5rfJKDJkuxzh5Q").then(function (customer) {
    // asynchronously called
    
    return customer.cards.create({ card: "tok_15V2YhEe31JkLCeQy9iUgsJX" }).then(function(card) {
        // asynchronously called
        card.brand;
    });
});

stripe.customers.update("cus_5rfJKDJkuxzh5Q", {
    description: "Customer for test@example.com"
}, function (err, customer) {
        // asynchronously called
    });

stripe.customers.del(
    "cus_5rfJKDJkuxzh5Q",
    function (err, confirmation) {
        // asynchronously called
    }
    );

stripe.customers.list({ limit: 3 }, function (err, customers) {
    // asynchronously called
});

stripe.customers.createCard(
    "cus_5rfJKDJkuxzh5Q",
    { card: "tok_15V2YhEe31JkLCeQy9iUgsJX" },
    function (err, card) {
        // asynchronously called
    }
    );

stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    { source: "tok_15V2YhEe31JkLCeQy9iUgsJX" },
    function (err: StripeNode.IStripeError, card: StripeNode.ICard) {
        // asynchronously called
        if (card) {
            card.brand;
        }
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
    },
    function (err, card) {
        // asynchronously called
        card.brand;
    }
);

stripe.customers.createSource(
    "cus_5rfJKDJkuxzh5Q",
    { source: "btok_8E264Lxsbyvj3E" },
    function (err: StripeNode.IStripeError, bankAcc: StripeNode.IBankAccount) {
        // asynchronously called
        bankAcc.bank_name;
    }
);

stripe.customers.retrieveCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    function (err, card) {
        // asynchronously called
        card.brand;
    }
    );

stripe.customers.retrieveCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S").then(function(card) {
        // asynchronously called
        card.brand;
    });

stripe.customers.updateCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    { name: "Jane Austen" },
    function (err, card) {
        // asynchronously called
    }
    );

stripe.customers.updateCard(
    "cus_5rfJKDJkuxzh5Q",
    "card_15fvyXEe31JkLCeQ9KMktP5S",
    { name: "Jane Austen" }).then(function (card) {
        // asynchronously called
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

stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', function (err, cards) {
    // asynchronously called
});

stripe.customers.listCards('cu_15fvyVEe31JkLCeQvr155iqc', null).then(function (cards) {
    // asynchronously called
});

stripe.customers.retrieveSubscription(
    "cus_5rfJKDJkuxzh5Q",
    "sub_5rfJxnBLGSwsYp",
    function (err, subscription) {
        // asynchronously called
    }
    );

stripe.customers.updateSubscription(
    "cus_5rfJKDJkuxzh5Q",
    "sub_5rfJxnBLGSwsYp",
    { plan: "platypi-dev" },
    function (err, subscription) {
        // asynchronously called
    }
    );

stripe.customers.cancelSubscription(
    "cus_5rfJKDJkuxzh5Q",
    "sub_5rfJxnBLGSwsYp",
    null,
    function (err, confirmation) {
        // asynchronously called
    }
    );

stripe.customers.listSubscriptions('cu_15fvyVEe31JkLCeQvr155iqc', null, function (err, subscriptions) {
    // asynchronously called
});

stripe.plans.create({
    amount: 2000,
    interval: "month",
    name: "Amazing Gold Plan",
    currency: "usd",
    id: "gold"
}, function (err, plan) {
        // asynchronously called
    });

stripe.plans.retrieve(
    "platypi-dev",
    function (err, plan) {
        // asynchronously called
    }
    );

stripe.plans.update("platypi-dev", {
    name: "New plan name"
}, function (err, plan) {
        // asynchronously called
});

stripe.plans.del(
    "platypi-dev",
    function (err, confirmation) {
        // asynchronously called
    }
    );

stripe.plans.list(null, function (err, plans) {
    // asynchronously called
});

stripe.coupons.create({
    percent_off: 25,
    duration: 'repeating',
    duration_in_months: 3,
    id: '25OFF'
}, function (err, coupon) {
        // asynchronously called
    });

stripe.coupons.retrieve(
    "25OFF",
    function (err, coupon) {
        // asynchronously called
    }
    );

stripe.coupons.update("25OFF", {
    metadata: { key: "value" }
}, function (err, coupon) {
        // asynchronously called
    });

stripe.coupons.del("25OFF", function (err, confirmation) {

});

stripe.coupons.list({ limit: 3 }, function (err, coupons) {
    // asynchronously called
});

stripe.customers.deleteDiscount("cus_5rfJKDJkuxzh5Q", function (err, confirmation) {
    // asynchronously called
});

stripe.customers.deleteSubscriptionDiscount("cus_5rfJKDJkuxzh5Q", "sub_5rfJxnBLGSwsYp", function (err, confirmation) {
    // asynchronously called
});

stripe.invoices.create({
    customer: "cus_5rfJKDJkuxzh5Q"
}, function (err, invoice) {
        // asynchronously called
    });

stripe.invoices.retrieve(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    function (err, invoice) {
        // asynchronously called
    }
    );

stripe.invoices.retrieveLines(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    { limit: 5 },
    function (err, lines) {
        // asynchronously called
    }
    );

stripe.invoices.retrieveUpcoming(
    "cus_5rfJKDJkuxzh5Q",
    null,
    function (err, upcoming) {
        // asynchronously called
    }
    );

stripe.invoices.update(
    "in_15fvyXEe31JkLCeQH7QbgZZb",
    {
        closed: true
    },
    function (err, invoice) {
        // asynchronously called
    }
    );

stripe.invoices.pay("in_15fvyXEe31JkLCeQH7QbgZZb", function (err, invoice) {
    // asynchronously called
});

stripe.invoices.list(
    { customer: "cus_5rfJKDJkuxzh5Q", limit: 3 },
    function (err, invoices) {
        // asynchronously called
    }
    );

stripe.charges.retrieve("ch_15fvyXEe31JkLCeQOo0SwFk9").then(function(charge) {
    // asynchronously called
}).catch(function(err){
    // asynchronously called
});

stripe.account.createExternalAccount("", { external_account: "btok_8E264Lxsbyvj3E" }).then(function(bankAcc: StripeNode.IBankAccount) {
    // asynchronously called
    bankAcc.bank_name;
});

stripe.account.createExternalAccount("", { external_account: "tok_15V2YhEe31JkLCeQy9iUgsJX" }).then(function(bankAcc: StripeNode.ICard) {
    // asynchronously called
    bankAcc.brand;
});