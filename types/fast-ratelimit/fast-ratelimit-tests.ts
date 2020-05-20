import { FastRateLimit } from 'fast-ratelimit';

const limit = new FastRateLimit({ // $type: FastRateLimit
    threshold: 20,
    ttl: 60,
});

const someNamespace = 'some-namespace';

const consume = limit.consume(someNamespace);   // $type: Promise<void>
consume.then(() => {});                // User can send message.
consume.catch(() => {});              // Use cannot send message.

const hasToken = limit.hasToken(someNamespace); // $type: Promise<void>
hasToken.then(() => {});               // User has remaining token.
hasToken.catch(() => {});             // User does not have remaining token.

// Synchronously check if user is allowed to send message.
const consumeSync = limit.consumeSync(someNamespace);   // $type: boolean

// Synchronously check if user has remaining token.
const hasTokenSync = limit.hasTokenSync(someNamespace); // $type: boolean
