import * as Ably from 'ably';

declare const console: { log(message: any): void };

const ApiKey = 'appId.keyId:secret';
const client = new Ably.Realtime(ApiKey);
const restClient = new Ably.Rest(ApiKey);

// Connection
// Successful connection:

client.connection.on('connected', () => {
  // successful connection
});

// Failed connection:

client.connection.on('failed', () => {
  //  failed connection
});

// Subscribing to a channel

const channel = client.channels.get('test');
channel.subscribe(message => {
  message.name; // 'greeting'
  message.data; // 'Hello World!'
});

// Only certain events:

channel.subscribe('myEvent', message => {
  message.name; // 'myEvent'
  message.data; // 'myData'
});

// Publishing to a channel

// Publish a single message with name and data
channel.publish('greeting', 'Hello World!');

// Optionally, you can use a callback to be notified of success or failure
channel.publish('greeting', 'Hello World!', err => {
  if (err) {
    console.log('publish failed with error ' + err);
  } else {
    console.log('publish succeeded');
  }
});

// Publish several messages at once
channel.publish([{name: 'greeting', data: 'Hello World!'}], () => { });

// Querying the History

channel.history((err, messagesPage) => {
  messagesPage.items;                              // array of Message
  messagesPage.items[0].data;                      // payload for first message
  messagesPage.items.length;                      // number of messages in the current page of history
  messagesPage.hasNext();                          // true if there are further pages
  messagesPage.isLast();                           // true if this page is the last page
  messagesPage.next(nextPage => { nextPage; });  // retrieves the next page as PaginatedResult
});

// Can optionally take an options param, see https://www.ably.io/documentation/rest-api/#message-history
channel.history({ start: Date.now() - 10000, end: Date.now(), limit: 100, direction: 'forwards'}, (err, messagesPage) => {
  console.log(messagesPage.items.length);
});

// Presence on a channel
// Getting presence:

channel.presence.get(presenceSet => {
  presenceSet; // array of PresenceMessages
});

// Note that presence#get on a realtime channel does not return a PaginatedResult, as the library maintains a local copy of the presence set.

// Entering (and leaving) the presence set:

channel.presence.enter('my status', err => {
  // now I am entered
});

channel.presence.update('new status', err => {
  // my presence data is updated
});

channel.presence.leave(null, err => {
  // I've left the presence set
});

channel.presence.enterClient('myClientId', 'status', err => {
});

// and similiarly, updateClient and leaveClient
// Querying the Presence History

channel.presence.history((err, messagesPage) => { // PaginatedResult
  messagesPage.items;                              // array of PresenceMessage
  messagesPage.items[0].data;                      // payload for first message
  messagesPage.items.length;                       // number of messages in the current page of history
  messagesPage.hasNext();                           // true if there are further pages
  messagesPage.isLast();                           // true if this page is the last page
  messagesPage.next(nextPage => { });  // retrieves the next page as PaginatedResult
});

// Can optionally take an options param, see https://www.ably.io/documentation/rest-api/#message-history
channel.history({ start: Date.now() - 10000, end: Date.now(), limit: 100, direction: 'forwards' }, (err, messagesPage) => {});

// Symmetrical end-to-end encrypted payloads on a channel

// When a 128 bit or 256 bit key is provided to the library, the data attributes of all messages are encrypted and decrypted automatically using that key.
// The secret key is never transmitted to Ably. See https://www.ably.io/documentation/realtime/encryption

// Generate a random 256-bit key for demonstration purposes (in
// practice you need to create one and distribute it to clients yourselves)
Ably.Realtime.Crypto.generateRandomKey((err, key) => {
    const channel = client.channels.get('channelName', { cipher: { key } });

    channel.subscribe(message => {
        message.name; // 'name is not encrypted'
        message.data; // 'sensitive data is encrypted'
    });

    channel.publish('name is not encrypted', 'sensitive data is encrypted');
});

// You can also change the key on an existing channel using setOptions (which takes a callback which is called after the new encryption settings have taken effect):

channel.setOptions({cipher: {key: '<KEY>'}}, () => {
    // New encryption settings are in effect
});

// Using the REST API

const restChannel = restClient.channels.get('test');

// Publishing to a channel

// Publish a single message with name and data
restChannel.publish('greeting', 'Hello World!');

// Optionally, you can use a callback to be notified of success or failure
restChannel.publish('greeting', 'Hello World!', err => {
  if (err) {
    console.log('publish failed with error ' + err);
  } else {
    console.log('publish succeeded');
  }
});

// Publish several messages at once
restChannel.publish([{name: 'greeting', data: 'Hello World!'}], () => {});

// Querying the History

restChannel.history((err, messagesPage) => {
  messagesPage;                                    // PaginatedResult
  messagesPage.items;                              // array of Message
  messagesPage.items[0].data;                      // payload for first message
  messagesPage.items.length;                       // number of messages in the current page of history
  messagesPage.hasNext();                          // true if there are further pages
  messagesPage.isLast();                           // true if this page is the last page
  messagesPage.next(nextPage => {});  // retrieves the next page as PaginatedResult
});

// Can optionally take an options param, see https://www.ably.io/documentation/rest-api/#message-history
restChannel.history({ start: Date.now() - 10000, end: Date.now(), limit: 100, direction: 'forwards' }, (err, messagesPage) => {});

// Presence on a channel

restChannel.presence.get((err, presencePage) => { // PaginatedResult
  presencePage.items;                              // array of PresenceMessage
  presencePage.items[0].data;                      // payload for first message
  presencePage.items.length;                       // number of messages in the current page of members
  presencePage.hasNext();                          // true if there are further pages
  presencePage.isLast();                           // true if this page is the last page
  presencePage.next(nextPage => {});  // retrieves the next page as PaginatedResult
});

// Querying the Presence History

restChannel.presence.history((err, messagesPage) => { // PaginatedResult
  messagesPage.items;                              // array of PresenceMessage
  messagesPage.items[0].data;                      // payload for first message
  messagesPage.items.length;                       // number of messages in the current page of history
  messagesPage.hasNext();                          // true if there are further pages
  messagesPage.isLast();                           // true if this page is the last page
  messagesPage.next(nextPage => { });  // retrieves the next page as PaginatedResult
});

// Can optionally take an options param, see https://www.ably.io/documentation/rest-api/#message-history
restChannel.history({ start: Date.now() - 10000, end: Date.now(), limit: 100, direction: 'forwards' }, (err, messagesPage) => {});

// Generate Token and Token Request
// See https://www.ably.io/documentation/general/authentication for an explanation of Ably's authentication mechanism.

// Requesting a token:

client.auth.requestToken((err, tokenDetails) => {
  // tokenDetails is instance of TokenDetails
  // see https://www.ably.io/documentation/rest/authentication/#token-details for its properties

  // Now we have the token, we can send it to someone who can instantiate a client with it:
  const clientUsingToken = new Ably.Realtime(tokenDetails.token);
});

// requestToken can take two optional params
// tokenParams: https://www.ably.io/documentation/rest/authentication/#token-params
// authOptions: https://www.ably.io/documentation/rest/authentication/#auth-options
client.auth.requestToken({}, {}, (err, tokenDetails) => { });

// Creating a token request (for example, on a server in response to a request by a client using the authCallback or authUrl mechanisms):

client.auth.createTokenRequest((err, tokenRequest) => {
  // now send the tokenRequest back to the client, which will
  // use it to request a token and connect to Ably
});

// createTokenRequest can take two optional params
// tokenParams: https://www.ably.io/documentation/rest/authentication/#token-params
// authOptions: https://www.ably.io/documentation/rest/authentication/#auth-options
client.auth.createTokenRequest({}, {}, (err, tokenRequest) => { });

// Fetching your application's stats

client.stats({ limit: 50 }, (err, statsPage) => {        // statsPage as PaginatedResult
  statsPage.items;                              // array of Stats
  statsPage.items[0].inbound.rest.messages.count; // total messages published over REST
  statsPage.items.length;                       // number of stats in the current page of history
  statsPage.hasNext();                          // true if there are wrther pages
  statsPage.isLast();                           // true if this page is the last page
  statsPage.next((nextPage) => {});  // retrieves the next page as PaginatedResult
});

// Fetching the Ably service time

client.time({}, (err, time) => {}); // time is in ms since epoch

// Getting decoded Message objects from JSON
const messages = Ably.Realtime.Message.fromEncodedArray([{ id: 'foo' }]);
console.log(messages[0].id);

const message = Ably.Rest.Message.fromEncoded({ id: 'foo' });
console.log(message.id);

// Getting decoded PresenceMessage objects from JSON
const presenceMessages = Ably.Realtime.PresenceMessage.fromEncodedArray([{ id: 'foo' }]);
console.log(presenceMessages[0].action);

const presenceMessage = Ably.Rest.PresenceMessage.fromEncoded({ id: 'foo' });
console.log(presenceMessage.action);
