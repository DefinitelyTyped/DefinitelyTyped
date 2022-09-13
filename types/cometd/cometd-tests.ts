import {
    BaseMessage,
    ConnectionType,
    CometD,
    HandshakeListener,
    HandshakeMessage,
    Listener,
    Message,
    ReconnectAdvice,
    Status,
    SubscribeListener,
    SubscribeMessage,
    SuccessfulHandshakeMessage,
    SubscriptionHandle,
    UnsuccessfulHandshakeMessage,
} from "cometd";
import TimeSyncExtension from 'cometd/TimeSyncExtension';
import AckExtension from 'cometd/AckExtension';
import BinaryExtension from 'cometd/BinaryExtension';
import ReloadExtension from 'cometd/ReloadExtension';

const cometd = new CometD();

function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
}
function validateStatus(status: Status) {
    switch (status) {
        case 'connected': return true;
        case 'connecting': return true;
        case 'disconnected': return true;
        case 'disconnecting': return true;
        case 'handshaking': return true;
        default: return assertNever(status);
    }
}

validateStatus(cometd.getStatus());

// Configuring
// ===========

cometd.configure("http://localhost:8080/cometd");

cometd.configure({
    url: "http://localhost:8080/cometd"
});

cometd.registerExtension("ack", new AckExtension());
cometd.registerExtension("binary", new BinaryExtension());
cometd.registerExtension("reload", new ReloadExtension());

const timesync = new TimeSyncExtension();
cometd.registerExtension("timesync", timesync);

const timeSyncSubscription = cometd.addListener("/foo/bar", () => {
    if (timesync.getNetworkLag() > 1000) {
        cometd.publish("/mychannel", { timesyncStats: {
                lag: timesync.getNetworkLag(),
                serverTime: timesync.getServerTime(),
                serverDate: timesync.getServerDate(),
                timeOffset: timesync.getTimeOffset(),
                timeOffsetSamples: timesync.getTimeOffsetSamples()
            }
        });
    }
});

cometd.unregisterTransport("websocket");
const transportTypes = cometd.getTransportTypes();

// Reload extension usage
// ======================
const windowUnloadFunction = () => {
    if (cometd.isDisconnected()) {
        return;
    }
    if (cometd.reload) cometd.reload();
    const transport = cometd.getTransport();
    if (transport) transport.abort();
};

// Handshaking
// ===========

cometd.handshake(handshakeReply => {
    if (handshakeReply.successful) {
        // Successfully connected to the server.

        if (handshakeReply.reestablish) {
            // Restablished a connection to the server.
        }

        const { advice, supportedConnectionTypes } = handshakeReply;

        const callbackPollingType: ConnectionType = 'callback-polling';

        if (supportedConnectionTypes.indexOf(callbackPollingType) > -1) {
            // Callback polling is supported by the server.
        }

        if (advice && advice.reconnect === 'none') {
            // Server advises not to reconnect, CometD will stop attempting to connect or handshake.
        }
    }

    if (!handshakeReply.successful) {
        const { error } = handshakeReply;
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
        validateStatus(cometd.getStatus());
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
    const { subscription } = unsubscribeReply;
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
            cometd.subscribe("/members", m => {
                const { subscription } = m;
            });

            // Correct to subscribe to service channels
            cometd.subscribe("/service/status", m => {
                const { subscription } = m;
            });

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
    validateStatus(cometd.getStatus());

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
    validateStatus(cometd.getStatus());

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
    validateStatus(cometd.getStatus());

    if (disconnectReply.successful) {
        // Server truly received the disconnect request
    }

    if (disconnectReply.successful) {
        const { error } = disconnectReply;
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
