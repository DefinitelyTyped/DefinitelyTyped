declare function assertNever(val: never): never;

// Let the tests begin
declare let adapter: ioBroker.Adapter;

// Test EventEmitter definitions
adapter
    .on("ready", readyHandler)
    .on("stateChange", stateChangeHandler)
    .on("objectChange", objectChangeHandler)
    .on("message", messageHandler)
    .on("unload", unloadHandler)
    ;
adapter
    .removeListener("ready", readyHandler)
    .removeListener("stateChange", stateChangeHandler)
    .removeListener("objectChange", objectChangeHandler)
    .removeListener("message", messageHandler)
    .removeListener("unload", unloadHandler)
    ;
adapter.removeAllListeners();

// Test adapter constructor options
let adapterOptions: ioBroker.AdapterOptions = {
    name: "foo",
    ready: readyHandler,
    stateChange: stateChangeHandler,
    objectChange: objectChangeHandler,
    message: messageHandler,
    unload: unloadHandler,
};

function readyHandler() { }

function stateChangeHandler(id: string, state: ioBroker.State | null | undefined) {
    // Test State properties
    if (state) {
        state.ack;
        state.c && state.c.toLowerCase();
        state.expire && state.expire.toFixed();
        state.from.toLowerCase();
        state.lc.toFixed();
        state.q && state.q.toFixed();
        state.ts.toFixed();
        state.val;
    }
}

function objectChangeHandler(id: string, object: ioBroker.Object | null | undefined) {
    // Test properties of all objects
    if (object) {
        object._id.toLowerCase();
        object.common.name.toLowerCase();
        object.common.role && object.common.role.toLowerCase();
        object.common.icon && object.common.icon.toLowerCase();
        object.native.toString();
        object.enums && object.enums.toString();
        if (object.acl) {
            object.acl.object.toFixed();
            object.acl.owner.toLowerCase();
            object.acl.ownerGroup.toLowerCase();
        }
        // Test different object kinds
        switch (object.type) {
            case "adapter":
            case "config":
            case "enum":
            case "group":
            case "host":
            case "info":
            case "instance":
            case "meta":
            case "script":
            case "user":
                // nothing special here, update these tests when we have specialized definitions
                break;

            case "state":
                if (object.acl) object.acl.state.toFixed();
                object.common.def;
                object.common.desc && object.common.desc.toLowerCase();
                object.common.history;
                object.common.max && object.common.max.toFixed();
                object.common.min && object.common.min.toFixed();
                object.common.read.valueOf();
                object.common.states && object.common.states.toString();
                object.common.type && object.common.type.toLowerCase();
                object.common.unit && object.common.unit.toLowerCase();
                object.common.workingID && object.common.workingID.toLowerCase();
                object.common.write.valueOf();
                break;

            case "channel":
                object.common.desc && object.common.desc.toLowerCase();
                break;

            case "device":
                // nothing special here, update these tests when we have specialized definitions
                break;
        }
    }
}

function messageHandler(msg: ioBroker.Message) {
    msg._id.toFixed();
    msg.callback.ack.valueOf();
    msg.callback.id.toFixed();
    msg.callback.message.toString();
    msg.callback.time.toFixed();
    msg.command.toLowerCase();
    msg.from.toLowerCase();
    typeof msg.message === "object" && msg.message.anything;
    typeof msg.message === "string" && msg.message.toLowerCase();
}

function unloadHandler(callback: ioBroker.EmptyCallback) {
    adapter.log.info("shutting down");
    callback();
}

// Test the most important methods
adapter.setState("state.name", "value");
adapter.setState("state.name", "value", true);
adapter.setState("state.name", "value", (err, id) => { });
adapter.setState("state.name", { val: "value", ack: true });
adapter.setState("state.name", { val: "value", ack: true }, (err, id) => { });

adapter.setStateAsync("state.name", "value").then(id => id.toLowerCase());
adapter.setStateAsync("state.name", "value", true).then(id => id.toLowerCase());
adapter.setStateAsync("state.name", { val: "value", ack: true }).then(id => id.toLowerCase());

adapter.setStateChanged("state.name", "value");
adapter.setStateChanged("state.name", "value", true);
adapter.setStateChanged("state.name", "value", (err, id) => { });
adapter.setStateChanged("state.name", { val: "value", ack: true });
adapter.setStateChanged("state.name", { val: "value", ack: true }, (err, id) => { });

adapter.setStateChangedAsync("state.name", "value").then(id => id.toLowerCase());
adapter.setStateChangedAsync("state.name", "value", true).then(id => id.toLowerCase());
adapter.setStateChangedAsync("state.name", { val: "value", ack: true }).then(id => id.toLowerCase());

adapter.setForeignState("state.name", "value");
adapter.setForeignState("state.name", "value", true);
adapter.setForeignState("state.name", "value", (err, id) => { });
adapter.setForeignState("state.name", { val: "value", ack: true });
adapter.setForeignState("state.name", { val: "value", ack: true }, (err, id) => { });

adapter.setForeignStateAsync("state.name", "value").then(id => id.toLowerCase());
adapter.setForeignStateAsync("state.name", "value", true).then(id => id.toLowerCase());
adapter.setForeignStateAsync("state.name", { val: "value", ack: true }).then(id => id.toLowerCase());

adapter.setForeignStateChanged("state.name", "value");
adapter.setForeignStateChanged("state.name", "value", true);
adapter.setForeignStateChanged("state.name", "value", (err, id) => { });
adapter.setForeignStateChanged("state.name", { val: "value", ack: true });
adapter.setForeignStateChanged("state.name", { val: "value", ack: true }, (err, id) => { });

adapter.setForeignStateChangedAsync("state.name", "value").then(id => id.toLowerCase());
adapter.setForeignStateChangedAsync("state.name", "value", true).then(id => id.toLowerCase());
adapter.setForeignStateChangedAsync("state.name", { val: "value", ack: true }).then(id => id.toLowerCase());

adapter.getState("state.id", (err, state) => state && state.from.toLowerCase());
adapter.getStateAsync("state.id").then(state => state && state.from.toLowerCase());
adapter.getForeignState("state.id", (err, state) => state && state.from.toLowerCase());
adapter.getForeignStateAsync("state.id").then(state => state && state.from.toLowerCase());
adapter.getBinaryState("state.id", (err, state) => state && state.writeUInt16BE(0, 0));
adapter.getBinaryStateAsync("state.id").then(state => state && state.writeUInt16BE(0, 0));

adapter.setObject("obj.id", { type: "state", common: { name: "foo" }, native: {} });
adapter.setObject("obj.id", { type: "state", common: { name: "foo" }, native: {} }, (err, id) => { });
adapter.setForeignObject("obj.id", { type: "state", common: { name: "foo" }, native: {} });
adapter.setForeignObject("obj.id", { type: "state", common: { name: "foo" }, native: {} }, (err, id) => { });

adapter.setObjectAsync("obj.id", { type: "state", common: { name: "foo" }, native: {} }).then(({ id }) => id.toLowerCase());
adapter.setForeignObjectAsync("obj.id", { type: "state", common: { name: "foo" }, native: {} }).then(({ id }) => id.toLowerCase());

adapter.setObjectNotExists("obj.id", { type: "state", common: { name: "foo" }, native: {} });
adapter.setObjectNotExists("obj.id", { type: "state", common: { name: "foo" }, native: {} }, (err, id) => { });
adapter.setForeignObjectNotExists("obj.id", { type: "state", common: { name: "foo" }, native: {} });
adapter.setForeignObjectNotExists("obj.id", { type: "state", common: { name: "foo" }, native: {} }, (err, id) => { });

adapter.setObjectNotExistsAsync("obj.id", { type: "state", common: { name: "foo" }, native: {} }).then(({ id }) => id.toLowerCase());
adapter.setForeignObjectNotExistsAsync("obj.id", { type: "state", common: { name: "foo" }, native: {} }).then(({ id }) => id.toLowerCase());

adapter.getObject("obj.id", (err, obj) => { });
adapter.getForeignObject("obj.id", (err, obj) => { });

adapter.getObjectAsync("obj.id").then(obj => obj && obj._id.toLowerCase());
adapter.getForeignObjectAsync("obj.id").then(obj => obj && obj._id.toLowerCase());

adapter.getForeignObjects("*", (err, objs) => objs["foo"]._id.toLowerCase());
adapter.getForeignObjectsAsync("*").then(objs => objs["foo"]._id.toLowerCase());

adapter.getObjectView("system", "admin", {startkey: "foo", endkey: "bar"}, (err, docs) => {
    docs && docs.rows[0] && docs.rows[0].id.toLowerCase();
});
adapter.getObjectViewAsync("system", "admin", {startkey: "foo", endkey: "bar"}).then(docs => {
    docs && docs.rows[0] && docs.rows[0].id.toLowerCase();
});

adapter.getObjectList({startkey: "foo", endkey: "bar"}, {}, (err, result) => {
    result && result.rows[0] && result.rows[0].id.toLowerCase();
});
adapter.getObjectList({startkey: "foo", endkey: "bar"}, (err, result) => {
    result && result.rows[0] && result.rows[0].id.toLowerCase();
});
adapter.getObjectListAsync({startkey: "foo", endkey: "bar"}, {}).then(result => {
    result && result.rows[0] && result.rows[0].id.toLowerCase();
});
adapter.getObjectListAsync({startkey: "foo", endkey: "bar"}).then(result => {
    result && result.rows[0] && result.rows[0].id.toLowerCase();
});

adapter.subscribeObjects("*");
adapter.subscribeStates("*");
adapter.subscribeForeignObjects("*");
adapter.subscribeForeignStates("*");
adapter.unsubscribeObjects("*");
adapter.unsubscribeStates("*");
adapter.unsubscribeForeignObjects("*");
adapter.unsubscribeForeignStates("*");

adapter.log.info("msg");
adapter.log.debug("msg");
adapter.log.warn("msg");
adapter.log.error("msg");
adapter.log.silly("msg");

switch (adapter.log.level) {
    case "debug":
    case "error":
    case "info":
    case "silly":
    case "warn":
        break;
    default:
        assertNever(adapter.log.level);
}

adapter.sendTo("foo.0", "command", "message");
adapter.sendTo("foo.0", "message");
adapter.sendTo("foo.0", "command", { msg: "message" });
adapter.sendTo("foo.0", { msg: "message" });

function handleMessageResponse(response?: ioBroker.Message) {
    if (!response) return;
    response._id.toFixed();
    response.callback.ack.valueOf();
    response.callback.id.toFixed();
    response.callback.message.toString();
    response.callback.time.toFixed();
    response.command.toLowerCase();
    response.from.toLowerCase();
    typeof response.message === "object" && response.message.anything;
    typeof response.message === "string" && response.message.toLowerCase();
}
adapter.sendTo("foo.0", "command", "message", handleMessageResponse);
adapter.sendTo("foo.0", "message", handleMessageResponse);
adapter.sendTo("foo.0", "command", { msg: "message" }, handleMessageResponse);
adapter.sendTo("foo.0", { msg: "message" }, handleMessageResponse);

adapter.sendToAsync("foo.0", "command", "message").then(handleMessageResponse);
adapter.sendToAsync("foo.0", "message").then(handleMessageResponse);
adapter.sendToAsync("foo.0", "command", { msg: "message" }).then(handleMessageResponse);
adapter.sendToAsync("foo.0", { msg: "message" }).then(handleMessageResponse);

adapter.sendToHost("host-foo", "command", "message");
adapter.sendToHost("host-foo", "message");
adapter.sendToHost("host-foo", "command", { msg: "message" });
adapter.sendToHost("host-foo", { msg: "message" });

adapter.sendToHost("host-foo", "command", "message", handleMessageResponse);
adapter.sendToHost("host-foo", "message", handleMessageResponse);
adapter.sendToHost("host-foo", "command", { msg: "message" }, handleMessageResponse);
adapter.sendToHost("host-foo", { msg: "message" }, handleMessageResponse);

adapter.sendToHostAsync("host-foo", "command", "message").then(handleMessageResponse);
adapter.sendToHostAsync("host-foo", "message").then(handleMessageResponse);
adapter.sendToHostAsync("host-foo", "command", { msg: "message" }).then(handleMessageResponse);
adapter.sendToHostAsync("host-foo", { msg: "message" }).then(handleMessageResponse);

function handleError(err?: string) { }
adapter.subscribeStates("*", handleError);
adapter.subscribeForeignStates("*", handleError);
adapter.unsubscribeStates("*", handleError);
adapter.unsubscribeForeignStates("*", handleError);

adapter.subscribeStatesAsync("*").catch(handleError);
adapter.subscribeForeignStatesAsync("*").catch(handleError);
adapter.unsubscribeStatesAsync("*").catch(handleError);
adapter.unsubscribeForeignStatesAsync("*").catch(handleError);
adapter.subscribeObjectsAsync("*").catch(handleError);
adapter.subscribeForeignObjectsAsync("*").catch(handleError);
adapter.unsubscribeObjectsAsync("*").catch(handleError);
adapter.unsubscribeForeignObjectsAsync("*").catch(handleError);

adapter.getHistory("state.id", {}, (err, result: ioBroker.GetHistoryResult) => {});

(() => adapter.terminate())();
(() => adapter.terminate(1))();
(() => adapter.terminate("Reason"))();
(() => adapter.terminate("Reason", 4))();

// $ExpectError
adapter.states.getStates();
// $ExpectError
adapter.objects.getObjectView();

adapter.oObjects && adapter.oObjects["foo"]._id.toString();
adapter.oStates && adapter.oStates["foo"].val;

// Repro from https://github.com/ioBroker/adapter-core/issues/3
const repro1: ioBroker.ObjectChangeHandler = (id, obj) => {
    if (!obj || !obj.common) return;
    if (obj.common.custom) {
        const test1: ioBroker.StateCommon = obj.common;
    }
    obj
        && obj.common
        && obj.common.custom
        && obj.common.custom["adapter.0"]
        && obj.common.custom["adapter.0"].enabled
        ;
};

// Repro from https://github.com/ioBroker/adapter-core/issues/4
function repro2() {
    // Prepare custom object
    const obj = {
        common: {
            custom: {
                "adapter.namespace": { start_day: null as any }
            }
        }
    };
    adapter.extendForeignObject("obj.id", obj, (err) => { });
}

// repro from https://github.com/ioBroker/adapter-core/issues/6
function repro3() {
    adapter.getDevices((error, deviceList) => {
        if (deviceList) {
            deviceList; // $ExpectType DeviceObject[]
        }
    });
    adapter.getDevicesAsync().then(list => {
        list; // $ExpectType DeviceObject[]
    });
    adapter.getChannels((error, channelList) => {
        if (channelList) {
            channelList; // $ExpectType ChannelObject[]
        }
    });
    adapter.getChannelsOfAsync().then(list => {
        list; // $ExpectType ChannelObject[]
    });
    adapter.getStatesOf((error, stateList) => {
        if (stateList) {
            stateList; // $ExpectType StateObject[]
        }
    });
    adapter.getStatesOfAsync().then(list => {
        list; // $ExpectType StateObject[]
    });
}
