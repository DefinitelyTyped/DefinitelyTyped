import ck = require("creditkey-js");

const client = new ck.Client("my-api-key", "development");
const charges = new ck.Charges(100, 10, 20, 30, 100);
const items = [new ck.CartItem("product123", "Product 123", 123.0, "PROD123", 1, null, null)];
const billingAddress = new ck.Address(
    "John",
    "Doe",
    "Wayne Enterprises",
    "jdoe123@gmail.com",
    "100 Gotham Ave",
    null,
    "Gotham",
    "NY",
    "12309",
    "800-555-1234",
);
const shippingAddress = new ck.Address(
    "John",
    "Doe",
    "Wayne Enterprises",
    "jdoe123@gmail.com",
    "100 Gotham Ave",
    null,
    "Gotham",
    "NY",
    "12309",
    "800-555-1234",
);
client
    .begin_checkout(
        items,
        billingAddress,
        shippingAddress,
        charges,
        "Order123",
        "Customer123",
        "http://return",
        "http://cancel",
        "modal",
        {},
    )
    .then(response => {
        ck.checkout(response.checkout_url, "modal");
    });

let marketingDisplay;
let customer;
let isDisplayed;

client.get_marketing_display(charges, "checkout", "button", "medium").then(response => marketingDisplay = response);
client.get_customer("user@user.com", "123456").then(response => customer = response);
client.is_displayed_in_checkout(items).then(response => isDisplayed = response);

ck.apply("my-api-key");
