// Type definitions for Arbiter.js 1.0
// Project: http://arbiterjs.com/
// Definitions by: Arash Shakery <https://github.com/arash16>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// May 22 2013





// Publish a simple message
Arbiter.publish('component/msg');

// Subscribe to a message
Arbiter.subscribe('component/msg', function () { });

// Pass data to subscribers
Arbiter.publish('component/msg', { "data": "value" });

// Force message bubbling
Arbiter.publish('component/msg', null, { cancelable: false });

// Allow late susbcribers to be notified of past messages
Arbiter.publish('component/msg', null, { persist: true });

// Fire subscribers asynchronously
Arbiter.publish('component/msg', null, { async: true });

// Subscribe to multiple messages at once
Arbiter.subscribe('component/msg, component/msg2', function () { });
Arbiter.subscribe(['component/msg', 'component/msg2'], function () { });

// Subscribe to multiple messages using a wildcard
Arbiter.subscribe('component/*', function () { });

// Subscribe to ALL messages
Arbiter.subscribe('*', function () { });

// Set subscriber priority
Arbiter.subscribe('msg', { priority: 10 }, function () { });
Arbiter.subscribe('msg', { priority: 20 }, function () { } ); // Called first!

// Execute a subscriber asynchronously
Arbiter.subscribe('msg', { async: true }, function () { });

// Ignore persisted messages
Arbiter.subscribe('msg', { persist: false }, function () { });

// Set the value of "this"
Arbiter.subscribe('msg', null, document.getElementById('x'),
    function () {
        this.innerHTML = "Message handled!";
    });

// Unsubscribe from messages
var subscription_id = Arbiter.subscribe('msg', function () { });
Arbiter.unsubscribe(subscription_id);

// Re-subscribe to messages
Arbiter.resubscribe(subscription_id);

// Create a new message handler
var MyController = Arbiter.create()
