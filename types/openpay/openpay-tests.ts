// Test code obtained from original repository https://github.com/open-pay/openpay-node
import Openpay = require("openpay");

const openpay = new Openpay("your merchant id", "your private key");

const newCustomer = {
    name: "John",
    email: "johndoe@example.com",
    last_name: "Doe",
    address: {
        city: "Queretaro",
        state: "Queretaro",
        line1: "Calle Morelos no 10",
        line2: "col. san pablo",
        postal_code: "76000",
        country_code: "MX",
    },
    phone_number: "44209087654",
};

openpay.customers.create(newCustomer, (error, body) => {
    // ...
});

const newCharge = {
    method: "card",
    card: {
        card_number: "4111111111111111",
        holder_name: "John Doe",
        expiration_year: "20",
        expiration_month: "12",
        cvv2: "110",
    },
    amount: 200.00,
    description: "Service Charge",
    order_id: "oid-00721",
};
openpay.charges.create(newCharge, (error, body) => {
    // ...
});

const payout = {
    method: "bank_account",
    bank_account: {
        clabe: "012298026516924616",
        holder_name: "John Doe",
    },
    amount: 10.50,
    description: "Monthly payment",
};
openpay.payouts.create(payout, (error, body) => {
    // ...
});

openpay.setTimeout(20000); // in ms (default is 90000ms)
openpay.setMerchantId(" your merchant id ");
openpay.setPrivateKey(" your private key ");
openpay.setProductionReady(true);
