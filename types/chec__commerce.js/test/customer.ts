import Commerce = require("@chec/commerce.js");
import Customer = require("@chec/commerce.js/types/customer");

const commerce = new Commerce("{your_public_key}");

const email = "test@test.com";
const base_url = "at";
const customerId = "cstmr_VNplJa1EaYwL60";
const token = "token";
const orderId = "ord_p7ZAMo1xwNJ4xX";

// $ExpectType Promise<{ success: boolean; }>
commerce.customer.login(email, base_url);

// $ExpectType Promise<{ customer_id: string; jwt: string; }>
commerce.customer.getToken(token, true);

// $ExpectType Promise<Customer>
commerce.customer.update({}, customerId, token);

// $ExpectType Promise<CustomerOrdersCollection>
commerce.customer.getOrders(customerId, token, {});

// $ExpectType Promise<Order>
commerce.customer.getOrder(orderId, customerId, token);

// $ExpectType Promise<Customer>
commerce.customer.about();

// $ExpectType string | null
commerce.customer.id();

// $ExpectType string | null
commerce.customer.token();

// $ExpectType boolean
commerce.customer.isLoggedIn();

// $ExpectType void
commerce.customer.logout();

// From https://api.chec.io/v1/customer/<customer>
const customer: Customer.Customer = {
    id: "cstmr_cO3J2apam2oDdz",
    external_id: null,
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: null,
    meta: [],
    created: 1621784891,
    updated: 1621784891,
};
