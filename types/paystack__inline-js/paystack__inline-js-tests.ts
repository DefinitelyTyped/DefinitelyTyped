import PaystackInline from "@paystack/inline-js";

const paystackPop = new PaystackInline();

const tx = paystackPop.newTransaction({
    key: "pk_test_TYooMQauvdEDq54NiTphI7jx",
    email: "demo@paystack.com",
    amount: 10000,
    phone: "09031234567",
    reference: "23ui2nd3d",
    firstName: "David",
    lastName: "Doe",
    currency: "USD",
    customerCode: "1212",
    channels: ["apple_pay", "bank_transfer", "card"],
    paymentRequest: "21ds112",
    paymentPage: "121212",
    split_code: "2121212",
    subaccountCode: "212121",
    bearer: "account",
    transactionCharge: 1000,
    planCode: "1212",
    subscriptionCount: 0,
    planInterval: "monthly",
    subscriptionLimit: 5,
    subscriptionStartDate: "2018-12-20",
    metadata: {
        custom_fields: [
            {
                display_name: "Name",
                variable_name: "Name",
                value: "David Doe",
            },
            {
                display_name: "Phone Number",
                variable_name: "Phone Number",
                value: "09031234567",
            },
        ],
    },
    onSuccess(response) {
        console.log(response);
    },
    onCancel() {
    },
    onError: (error) => {
        console.log(error);
    },
});

const status = tx.getStatus();

console.log(status.checkoutUrl, paystackPop.isLoaded());

paystackPop.resumeTransaction({
    accessCode: "121212",
});

paystackPop.paymentRequest({
    key: "pk_test_TYooMQauvdEDq54NiTphI7jx",
    email: "demo@paystack.com",
    amount: 10000,
    currency: "USD",
    container: "big-div",
});

paystackPop.paymentRequest({
    key: "pk_test_TYooMQauvdEDq54NiTphI7jx",
    email: "demo@paystack.com",
    amount: 10000,
    currency: "USD",
    container: document.getElementById("big-div") as HTMLElement,
});

paystackPop.checkout({
    key: "pk_test_TYooMQauvdEDq54NiTphI7jx",
    email: "demo@paystack.com",
    amount: 10000,
    currency: "USD",
});

paystackPop.preloadTransaction({
    key: "pk_test_TYooMQauvdEDq54NiTphI7jx",
    email: "testuser@paystack.com",
    amount: 10000,
    currency: "NGN",
});

paystackPop.cancelTransaction(tx);

paystackPop.cancelTransaction("asasas");
