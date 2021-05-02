import { QiwiBillPaymentsAPI } from "@qiwi/bill-payments-node-js-sdk";

// $ExpectType void
const qiwiApi = new QiwiBillPaymentsAPI("dotik");

// $ExpectType string
qiwiApi.generateId();

// $ExpectType string
qiwiApi.getLifetimeByDay(1);

// $ExpectError
qiwiApi.getLifetimeByDay("dotik");