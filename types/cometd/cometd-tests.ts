import { CometD, Listener, Message, SubscriptionHandle } from "cometd";

const cometd = new CometD();

// Configuring
// ===========

cometd.configure("http://localhost:8080/cometd");

cometd.configure({
    url: "http://localhost:8080/cometd"
});

cometd.registerExtension("ack", { incoming: () => {}, outgoing: () => {} });

cometd.unregisterTransport("websocket");

// Handshaking
// ===========

cometd.handshake(handshakeReply => {
    if (handshakeReply.successful) {
        // Successfully connected to the server.
    }
});

const additionalInfoHandshake = {
    "com.acme.credentials": {
        user: "cometd",
        token: "xyzsecretabc"
    }
};
cometd.handshake(additionalInfoHandshake, handshakeReply => {
    if (handshakeReply.successful) {
        // Successfully connected to the server.
    }
});

cometd.init("http://host1:8080/cometd");

// Subscribing and Unsubscribing
// =============================

cometd.subscribe(
    "/foo",
    message => {},
    subscribeReply => {
        if (subscribeReply.successful) {
            // The server successfully subscribed this client to the "/foo" channel.
        }
    }
);

const additionalInfoSubscribe = {
    "com.acme.priority": 10
};
cometd.subscribe("/foo", message => {}, additionalInfoSubscribe, subscribeReply => {
    if (subscribeReply.successful) {
        // The server successfully subscribed this client to the "/foo" channel.
    }
});

const subscription1 = cometd.addListener("/meta/connect", () => {});
const subscription2 = cometd.subscribe("/foo/bar/", () => {});

cometd.unsubscribe(subscription2);
cometd.removeListener(subscription1);

const subscription3 = cometd.subscribe("/foo/bar/", () => {});

const additionalInfoUnsubscribe = {
    "com.acme.discard": true
};
cometd.unsubscribe(subscription3, additionalInfoUnsubscribe, unsubscribeReply => {
    // Your logic here.
});

// Subscribers versus Listeners
// ============================

let _reportListener: SubscriptionHandle | undefined;

cometd.addListener("/meta/handshake", message => {
    // Only subscribe if the handshake is successful
    if (message.successful) {
        // Batch all subscriptions together
        cometd.batch(() => {
            // Correct to subscribe to broadcast channels
            cometd.subscribe("/members", m => {});

            // Correct to subscribe to service channels
            cometd.subscribe("/service/status", m => {});

            // Messy to add listeners after removal, prefer using cometd.subscribe(...)
            if (_reportListener) {
                cometd.removeListener(_reportListener);
                _reportListener = cometd.addListener("/service/report", m => {});
            }

            // Wrong to add listeners without removal
            cometd.addListener("/service/notification", m => {});
        });
    }
});

// Dynamic Resubscription
// ======================

let _subscription: SubscriptionHandle | undefined;

class Controller {
    dynamicSubscribe = () => {
        _subscription = cometd.subscribe("/dynamic", this.onEvent);
    }

    onEvent = (message: Message) => {
        if (message.successful) {
            // Your logic here.
        }
    }

    dynamicUnsubscribe = () => {
        if (_subscription) {
            cometd.unsubscribe(_subscription);
            _subscription = undefined;
        }
    }
}

cometd.addListener("/meta/handshake", message => {
    if (message.successful) {
        cometd.batch(() => {
            // Static subscription, no need to remember the subscription handle
            cometd.subscribe("/static", () => {});

            // Dynamic re-subscription
            if (_subscription) {
                _subscription = cometd.resubscribe(_subscription);
            }
        });
    }
});

// Listeners and Subscribers Exception Handling
// ============================================

cometd.onListenerException = function(exception, subscriptionHandle, isListener, message) {
    // Uh-oh, something went wrong, disable this listener/subscriber
    // Object "this" points to the CometD object
    if (isListener) {
        this.removeListener(subscriptionHandle);
    } else {
        this.unsubscribe(subscriptionHandle);
    }
};

// Meta Channel List
// =================

let _connected = false;

cometd.addListener("/meta/connect", message => {
    if (cometd.isDisconnected()) {
        return;
    }

    const wasConnected = _connected;
    _connected = message.successful;
    if (!wasConnected && _connected) {
        // Reconnected
    } else if (wasConnected && !_connected) {
        // Disconnected
    }
});

cometd.addListener("/meta/disconnect", message => {
    if (message.successful) {
        _connected = false;
    }
});

// Publishing
// ==========

cometd.publish("/mychannel", { mydata: { foo: "bar" } });

cometd.publish("/mychannel", { mydata: { foo: "bar" } }, publishAck => {
    if (publishAck.successful) {
        // The message reached the server
    }
});

// Publishing Binary Data
// ======================

// Create an ArrayBuffer.
const buffer = new ArrayBuffer(4);

// Fill it with the bytes.
const view = new DataView(buffer);
view.setUint8(0, 0xca);
view.setUint8(1, 0xfe);
view.setUint8(2, 0xba);
view.setUint8(3, 0xbe);

// Send it.
cometd.publishBinary("/binary", view, true, { prolog: "java" });

// Disconnecting
// =============

cometd.disconnect(disconnectReply => {
    if (disconnectReply.successful) {
        // Server truly received the disconnect request
    }
});

const additionalInfoDisconnect = {
    "com.acme.reset": false
};
cometd.disconnect(additionalInfoDisconnect, disconnectReply => {
    if (disconnectReply.successful) {
        // Server truly received the disconnect request
    }
});

// Message Batching
// ================

cometd.batch(() => {
    cometd.publish("/channel1", { product: "foo" });
    cometd.publish("/channel2", { notificationType: "all" });
    cometd.publish("/channel3", { update: false });
});

// Alternatively, but not recommended:
cometd.startBatch();
cometd.publish("/channel1", { product: "foo" });
cometd.publish("/channel2", { notificationType: "all" });
cometd.publish("/channel3", { update: false });
cometd.endBatch();
