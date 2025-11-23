import { createInstance, util } from "sharetribe-flex-integration-sdk";

const sdk = createInstance({
  clientId: "client-id",
  clientSecret: "client-secret"
});

sdk.marketplace.show().then((response) => {
  const name: string = response.data.data.attributes.name;
});

sdk.users.query({ page: 1, include: ["profileImage"] }).then((response) => {
  const firstUser = response.data.data[0];
  if (firstUser) {
    const email: string = firstUser.attributes.email;
  }
});

sdk.transactions.transition({
  id: "transaction-id",
  transition: "request-payment",
  params: { listingId: "listing-id" }
}).then((response) => {
  const status: number = response.status;
});

const rateLimiterConfig = util.prodQueryLimiterConfig;
const rateLimiter = util.createRateLimiter(rateLimiterConfig);
