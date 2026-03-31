import { createInstance, util } from "sharetribe-flex-integration-sdk";

const sdk = createInstance({
    clientId: "client-id",
    clientSecret: "client-secret",
});

sdk.marketplace.show().then((response) => {
    const name: string = response.data.data.attributes.name;
});

sdk.users.query({ page: 1, include: ["profileImage"] }).then((response) => {
    const firstUser = response.data.data[0];
    if (firstUser && firstUser.attributes.email) {
        const email: string = firstUser.attributes.email;
    }
});

// Test users.update() method
sdk.users.update({
    id: "user-id",
    privateData: { shopify: { access_token: "token" } },
}).then((response) => {
    const userId: string = response.data.data.id.uuid;
});

sdk.users.update({
    id: "user-id",
    publicData: { country: "US" },
    protectedData: { email: "test@example.com" },
}).then((response) => {
    const status: number = response.status;
});

sdk.transactions.transition({
    id: "transaction-id",
    transition: "request-payment",
    params: { listingId: "listing-id" },
}).then((response) => {
    const status: number = response.status;
});

// Test listings.create() with plain price object
sdk.listings.create({
    authorId: "user-id",
    title: "Test Listing",
    state: "published",
    price: { amount: 5000, currency: "USD" },
    publicData: { category: "electronics" },
}, {
    expand: true,
    include: ["author"],
}).then((response) => {
    const listingId: string = response.data.data.id.uuid;
});

// Test listings.create() with Money type (should still work)
sdk.listings.create({
    authorId: "user-id",
    title: "Test Listing",
    state: "pendingApproval",
    price: { _sdkType: "Money", amount: 5000, currency: "USD" },
}).then((response) => {
    const status: number = response.status;
});

// Test listings.update() with plain price object
sdk.listings.update({
    id: "listing-id",
    title: "Updated Title",
    price: { amount: 6000, currency: "USD" },
    publicData: { updated: true },
}).then((response) => {
    const listingId: string = response.data.data.id.uuid;
});

// Test stock.compareAndSet() with null oldTotal (new listing)
sdk.stock.compareAndSet({
    listingId: "listing-id",
    oldTotal: null,
    newTotal: 10,
}).then((response) => {
    const quantity: number = response.data.data.attributes.quantity;
});

// Test stock.compareAndSet() with number oldTotal (existing listing)
sdk.stock.compareAndSet({
    listingId: "listing-id",
    oldTotal: 10,
    newTotal: 5,
}).then((response) => {
    const status: number = response.status;
});

// Test stockAdjustments.query() with listingId
sdk.stockAdjustments.query({
    listingId: "listing-id",
    page: 1,
    perPage: 10,
}).then((response) => {
    const adjustments = response.data.data;
    const totalPages: number = response.data.meta.totalPages;
});

// Test stockAdjustments.create() with listingId
sdk.stockAdjustments.create({
    listingId: "listing-id",
    quantity: 5,
}).then((response) => {
    const adjustmentId: string = response.data.data.id.uuid;
});

const rateLimiterConfig = util.prodQueryLimiterConfig;
const rateLimiter = util.createRateLimiter(rateLimiterConfig);
