import Stronghold = require("stronghold-pay-js");

function test_add_payment_source() {
    const client = Stronghold.Pay({ publishableKey: 'publishableKey', environment: Stronghold.ENVIRONMENT.sandbox });

    client.addPaymentSource('customer_token', {
        onSuccess: (paymentSource) => {
            console.log(paymentSource.id);
            console.log(paymentSource.label);
            console.log(paymentSource.type);
        },
    });
}

function test_update_payment_source() {
    const client = Stronghold.Pay({ publishableKey: 'publishableKey', environment: Stronghold.ENVIRONMENT.sandbox });

    client.updatePaymentSource('customer_token', {
        paymentSourceId: 'payment_source_id',
        onSuccess: (paymentSource) => {
            console.log(paymentSource.id);
            console.log(paymentSource.label);
            console.log(paymentSource.type);
        },
    });
}

function test_charge() {
    const client = Stronghold.Pay({ publishableKey: 'publishableKey', environment: Stronghold.ENVIRONMENT.sandbox });

    client.charge('customer_token', {
        charge: {
            amount: 4950,
            paymentSourceId: 'payment_source_id',
            externalId: 'qwerty123456789',
        },
        authorizeOnly: true,
        tip: {
            amount: 300,
            beneficiaryName: 'Joe',
            details: {drawerId: 'drawer', terminalId: 'terminal'}
        },
        onSuccess: (charge) => {
            console.log(charge.id);
            console.log(charge.amount);
            console.log(charge.status);
            console.log(charge.created_at);
            console.log(charge.type);
        },
    });
}

function test_tip() {
    const client = Stronghold.Pay({ publishableKey: 'publishableKey', environment: Stronghold.ENVIRONMENT.sandbox });

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
            console.log(tip.id);
            console.log(tip.amount);
            console.log(tip.created_at);
        },
    });
}
