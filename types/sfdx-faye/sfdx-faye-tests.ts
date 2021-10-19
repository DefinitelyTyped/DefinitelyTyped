import { Client, Subscription, logger } from "sfdx-faye";

// $ExpectType Client
const client = new Client();

// $ExpectType typeof Subscription
const subscription = Subscription;

// $ExpectType any
const theLogger = logger;
