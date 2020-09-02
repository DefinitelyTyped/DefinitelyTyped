import Stronghold = require("stronghold-pay-js");

// Some random vals to use

// Use for page props or user traits
var testProps = {
    favoriteCheese: "brie",
    favoritePie: "apple"
};

// Segment options
var testOpts = {
    integrations: {
        Mixpanel: true
    },
    context: {
        campaign: {
            name: 'Cheese Promo'
        }
    }
};

var testCb = function () { };

/////////////

function test_add_payment_source() {
    var client = Stronghold.Pay({ publishableKey: 'publishableKey', environment: Stronghold.ENVIRONMENT.sandbox });

    client.addPaymentSource('customer_token', {
        onSuccess: (paymentSource) => {
            var id = paymentSource.id;
            var label = paymentSource.label;
            var type = paymentSource.type;
        },
    });
}

function test_update_payment_source() {
    var client = Stronghold.Pay({ publishableKey: 'publishableKey', environment: Stronghold.ENVIRONMENT.sandbox });

    client.updatePaymentSource('customer_token', {
        paymentSourceId: 'payment_source_id',
        onSuccess: (paymentSource) => {
            var id = paymentSource.id;
            var label = paymentSource.label;
            var type = paymentSource.type;
        },
    });
}

function test_charge() {
    var client = Stronghold.Pay({ publishableKey: 'publishableKey', environment: Stronghold.ENVIRONMENT.sandbox });

    client.charge('customer_token', {
        charge: {
            amount: 4950,
            paymentSourceId: 'payment_source_id'
        },
        authorizeOnly: true,
        tip: {
            amount: 300,
            beneficiaryName: 'Joe',
            details: {drawerId: 'drawer', terminalId: 'terminal'}
        },
        onSuccess: (charge) => {
            var id = charge.id;
            var amount = charge.amount;
            var status = charge.status;
            var created_at = charge.created_at;
            var type = charge.type;
        },
    });
}

function test_tip() {
    var client = Stronghold.Pay({ publishableKey: 'publishableKey', environment: Stronghold.ENVIRONMENT.sandbox });

    client.tip('customer_token', {
        authorizeOnly: true,
        tip: {
            amount: 300,
            beneficiaryName: 'Joe',
            chargeId: 'charge_id',
            paymentSourceId: 'payment_source_id',
            details: {drawerId: 'drawer', terminalId: 'terminal'}
        },
        onSuccess: (tip) => {
            var id = tip.id;
            var amount = tip.amount;
            var created_at = tip.created_at;
        },
    });
}