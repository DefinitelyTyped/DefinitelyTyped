declare function assertNever(val: never): never;

// Let the tests begin
declare let adapter: ioBroker.Adapter;

// Test EventEmitter definitions
adapter
    .on('ready', readyHandler)
    .on('stateChange', stateChangeHandler)
    .on('objectChange', objectChangeHandler)
    .on('message', messageHandler)
    .on('unload', unloadHandler);
adapter
    .removeListener('ready', readyHandler)
    .removeListener('stateChange', stateChangeHandler)
    .removeListener('objectChange', objectChangeHandler)
    .removeListener('message', messageHandler)
    .removeListener('unload', unloadHandler);
adapter.removeAllListeners();

// Test adapter constructor options
let adapterOptions: ioBroker.AdapterOptions = {
    name: 'foo',
    ready: readyHandler,
    stateChange: stateChangeHandler,
    objectChange: objectChangeHandler,
    message: messageHandler,
    unload: unloadHandler,
    error: (err) => {
        console.log(err);
        return true;
    },
};

function readyHandler() {}

function stateChangeHandler(id: string, state: ioBroker.State | null | undefined) {
    // Test State properties
    if (state) {
        state.ack;
        state.c && state.c.toLowerCase();
        state.expire && state.expire.toFixed();
        state.from.toLowerCase();
        state.lc.toFixed();
        state.q && state.q.toFixed();
        state.user && state.user.toLowerCase();
        state.ts.toFixed();
        state.val;
    }
}

function objectChangeHandler(id: string, object: ioBroker.Object | null | undefined) {
    // Test properties of all objects
    if (object) {
        object._id.toLowerCase();
        const name = object.common.name;
        if (typeof name !== "string") {
            name.de; // $ExpectType string | undefined
        }
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
            case 'adapter':
            case 'config':
            case 'enum':
            case 'group':
            case 'host':
            case 'instance':
            case 'meta':
            case 'script':
            case 'user':
                // nothing special here, update these tests when we have specialized definitions
                break;

            case 'state':
                if (object.acl) object.acl.state.toFixed();
                object.common.def;
                typeof object.common.desc === "string" && object.common.desc.toLowerCase();
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

            case 'channel':
                object.common.desc && object.common.desc.toLowerCase();
                break;

            case 'device':
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
    typeof msg.message === 'object' && msg.message.anything;
    typeof msg.message === 'string' && msg.message.toLowerCase();
}

function unloadHandler(callback: ioBroker.EmptyCallback) {
    adapter.log.info('shutting down');
    callback();
}

// Test the most important methods
adapter.setState('state.name', 'value');
adapter.setState('state.name', 'value', true);
adapter.setState('state.name', 'value', (err, id) => {});
adapter.setState('state.name', { val: 'value', ack: true });
adapter.setState('state.name', { val: 'value', ack: true }, (err, id) => {});

adapter.setStateAsync('state.name', 'value').then(id => id.toLowerCase());
adapter.setStateAsync('state.name', 'value', true).then(id => id.toLowerCase());
adapter.setStateAsync('state.name', { val: 'value', ack: true }).then(id => id.toLowerCase());

adapter.setStateChanged('state.name', 'value');
adapter.setStateChanged('state.name', 'value', true);
adapter.setStateChanged('state.name', 'value', (err, id) => {});
adapter.setStateChanged('state.name', { val: 'value', ack: true });
adapter.setStateChanged('state.name', { val: 'value', ack: true }, (err, id) => {});

adapter.setStateChangedAsync('state.name', 'value').then(id => id.toLowerCase());
adapter.setStateChangedAsync('state.name', 'value', true).then(id => id.toLowerCase());
adapter.setStateChangedAsync('state.name', { val: 'value', ack: true }).then(id => id.toLowerCase());

adapter.setForeignState('state.name', 'value');
adapter.setForeignState('state.name', 'value', true);
adapter.setForeignState('state.name', 'value', (err, id) => {});
adapter.setForeignState('state.name', { val: 'value', ack: true });
adapter.setForeignState('state.name', { val: 'value', ack: true }, (err, id) => {});

adapter.setForeignStateAsync('state.name', 'value').then(id => id.toLowerCase());
adapter.setForeignStateAsync('state.name', 'value', true).then(id => id.toLowerCase());
adapter.setForeignStateAsync('state.name', { val: 'value', ack: true }).then(id => id.toLowerCase());

adapter.setForeignStateChanged('state.name', 'value');
adapter.setForeignStateChanged('state.name', 'value', true);
adapter.setForeignStateChanged('state.name', 'value', (err, id) => {});
adapter.setForeignStateChanged('state.name', { val: 'value', ack: true });
adapter.setForeignStateChanged('state.name', { val: 'value', ack: true }, (err, id) => {});

adapter.setForeignStateChangedAsync('state.name', 'value').then(id => id.toLowerCase());
adapter.setForeignStateChangedAsync('state.name', 'value', true).then(id => id.toLowerCase());
adapter.setForeignStateChangedAsync('state.name', { val: 'value', ack: true }).then(id => id.toLowerCase());

adapter.getState('state.id', (err, state) => state && state.from.toLowerCase());
adapter.getStateAsync('state.id').then(state => state && state.from.toLowerCase());
adapter.getForeignState('state.id', (err, state) => state && state.from.toLowerCase());
adapter.getForeignStateAsync('state.id').then(state => state && state.from.toLowerCase());
adapter.getBinaryState('state.id', (err, state) => state && state.writeUInt16BE(0, 0));
adapter.getBinaryStateAsync('state.id').then(state => state && state.writeUInt16BE(0, 0));

adapter.setObject('obj.id', { type: 'device', common: { name: 'foo' }, native: {} });
adapter.setObject('obj.id', { type: 'device', common: { name: 'foo' }, native: {} }, (err, id) => {});
adapter.setForeignObject('obj.id', { type: 'device', common: { name: 'foo' }, native: {} });
adapter.setForeignObject('obj.id', { type: 'device', common: { name: 'foo' }, native: {} }, (err, id) => {});

adapter
    .setObjectAsync('obj.id', { type: 'device', common: { name: 'foo' }, native: {} })
    .then(({ id }) => id.toLowerCase());
adapter
    .setForeignObjectAsync('obj.id', { type: 'device', common: { name: 'foo' }, native: {} })
    .then(({ id }) => id.toLowerCase());

adapter.setObjectNotExists('obj.id', { type: 'device', common: { name: 'foo' }, native: {} });
adapter.setObjectNotExists('obj.id', { type: 'device', common: { name: 'foo' }, native: {} }, (err, id) => {});
adapter.setForeignObjectNotExists('obj.id', { type: 'device', common: { name: 'foo' }, native: {} });
adapter.setForeignObjectNotExists('obj.id', { type: 'device', common: { name: 'foo' }, native: {} }, (err, id) => {});

adapter
    .setObjectNotExistsAsync('obj.id', { type: 'device', common: { name: 'foo' }, native: {} })
    .then(({ id }) => id.toLowerCase());
adapter
    .setForeignObjectNotExistsAsync('obj.id', { type: 'device', common: { name: 'foo' }, native: {} })
    .then(({ id }) => id.toLowerCase());

adapter.getObject('obj.id', (err, obj) => {});
adapter.getForeignObject('obj.id', (err, obj) => {});

adapter.getObjectAsync('obj.id').then(obj => obj && obj._id.toLowerCase());
adapter.getForeignObjectAsync('obj.id').then(obj => obj && obj._id.toLowerCase());

adapter.getForeignObjects('*', (err, objs) => objs!['foo']._id.toLowerCase());
// getForeignObjectsAsync always returns a Record when it doesn't throw
adapter.getForeignObjectsAsync('*').then(objs => objs['foo']._id.toLowerCase());
// If an object type was specified, the returned objects have the correct type
adapter.getForeignObjectsAsync('*', "adapter").then(objs => {
    objs[0].type; // $ExpectType "adapter"
});

// Check that required properties are enforced
// OK:
adapter.setObject('id', {
    _id: 'id',
    type: 'state',
    common: {
        type: 'array',
        name: 'foo',
        read: true,
        write: false,
        role: 'some role',
        def: [],
        defAck: false,
    },
    native: {},
    from: 'me',
    user: 'also me',
    ts: Date.now(),
});

adapter.setObject(
    'id',
    // missing property type
    // $ExpectError
    {
        common: {
            type: 'array',
            name: 'foo',
            read: true,
            write: false,
            role: 'some role',
        },
        native: {},
        protectedNative: ['none'],
        encryptedNative: ['none'],
        from: 'me',
        ts: Date.now(),
    },
);

adapter.setObject(
    'id',
    // missing property common
    // $ExpectError
    {
        type: 'state',
        native: {},
        from: 'me',
        ts: Date.now(),
    },
);

adapter.setObject(
    'id',
    // missing property common.role
    // $ExpectError
    {
        type: 'state',
        common: {
            name: 'foo',
            read: true,
            write: false,
        },
        native: {},
    },
);

// TODO: Cannot enforce this without making it impossible to use interfaces to describe the shape of `native`
// adapter.setObject('id', {
//     type: 'device',
//     common: {
//         name: 'foo',
//     },
//     native: {
//         // Date is not allowed here
//         // $ExpectError
//         date: new Date(),
//     },
// });

// Check that name as object is okay:
adapter.extendForeignObject("id", {
    common: {
        name: {
            en: "foobar",
            fr: "le foo de bar",
        }
    }
});

adapter.getObjectView('system', 'admin', { startkey: 'foo', endkey: 'bar' }, (err, docs) => {
    docs && docs.rows[0] && docs.rows[0].id.toLowerCase();
});
adapter.getObjectViewAsync('system', 'admin', { startkey: 'foo', endkey: 'bar' }).then(docs => {
    docs && docs.rows[0] && docs.rows[0].id.toLowerCase();
});

adapter.getObjectList({ startkey: 'foo', endkey: 'bar' }, {}, (err, result) => {
    result && result.rows[0] && result.rows[0].id.toLowerCase();
});
adapter.getObjectList({ startkey: 'foo', endkey: 'bar' }, (err, result) => {
    result && result.rows[0] && result.rows[0].id.toLowerCase();
});
adapter.getObjectListAsync({ startkey: 'foo', endkey: 'bar' }, {}).then(result => {
    result && result.rows[0] && result.rows[0].id.toLowerCase();
});
adapter.getObjectListAsync({ startkey: 'foo', endkey: 'bar' }).then(result => {
    result && result.rows[0] && result.rows[0].id.toLowerCase();
});

adapter.subscribeObjects('*');
adapter.subscribeStates('*');
adapter.subscribeForeignObjects('*');
adapter.subscribeForeignStates('*');
adapter.unsubscribeObjects('*');
adapter.unsubscribeStates('*');
adapter.unsubscribeForeignObjects('*');
adapter.unsubscribeForeignStates('*');

adapter.encrypt("top secret").toLocaleLowerCase();
adapter.decrypt("garbled nonsense").toLocaleLowerCase();

adapter.log.info('msg');
adapter.log.debug('msg');
adapter.log.warn('msg');
adapter.log.error('msg');
adapter.log.silly('msg');

switch (adapter.log.level) {
    case 'debug':
    case 'error':
    case 'info':
    case 'silly':
    case 'warn':
        break;
    default:
        assertNever(adapter.log.level);
}

adapter.sendTo('foo.0', 'command', 'message');
adapter.sendTo('foo.0', 'message');
adapter.sendTo('foo.0', 'command', { msg: 'message' });
adapter.sendTo('foo.0', { msg: 'message' });

function handleMessageResponse(response?: ioBroker.Message) {
    if (!response) return;
    response._id.toFixed();
    response.callback.ack.valueOf();
    response.callback.id.toFixed();
    response.callback.message.toString();
    response.callback.time.toFixed();
    response.command.toLowerCase();
    response.from.toLowerCase();
    typeof response.message === 'object' && response.message.anything;
    typeof response.message === 'string' && response.message.toLowerCase();
}
adapter.sendTo('foo.0', 'command', 'message', handleMessageResponse);
adapter.sendTo('foo.0', 'message', handleMessageResponse);
adapter.sendTo('foo.0', 'command', { msg: 'message' }, handleMessageResponse);
adapter.sendTo('foo.0', { msg: 'message' }, handleMessageResponse);

adapter.sendToAsync('foo.0', 'command', 'message').then(handleMessageResponse);
adapter.sendToAsync('foo.0', 'message').then(handleMessageResponse);
adapter.sendToAsync('foo.0', 'command', { msg: 'message' }).then(handleMessageResponse);
adapter.sendToAsync('foo.0', { msg: 'message' }).then(handleMessageResponse);

adapter.sendToHost('host-foo', 'command', 'message');
adapter.sendToHost('host-foo', 'message');
adapter.sendToHost('host-foo', 'command', { msg: 'message' });
adapter.sendToHost('host-foo', { msg: 'message' });

adapter.sendToHost('host-foo', 'command', 'message', handleMessageResponse);
adapter.sendToHost('host-foo', 'message', handleMessageResponse);
adapter.sendToHost('host-foo', 'command', { msg: 'message' }, handleMessageResponse);
adapter.sendToHost('host-foo', { msg: 'message' }, handleMessageResponse);

adapter.sendToHostAsync('host-foo', 'command', 'message').then(handleMessageResponse);
adapter.sendToHostAsync('host-foo', 'message').then(handleMessageResponse);
adapter.sendToHostAsync('host-foo', 'command', { msg: 'message' }).then(handleMessageResponse);
adapter.sendToHostAsync('host-foo', { msg: 'message' }).then(handleMessageResponse);

function handleError(err?: string) {}
adapter.subscribeStates('*', handleError);
adapter.subscribeForeignStates('*', handleError);
adapter.unsubscribeStates('*', handleError);
adapter.unsubscribeForeignStates('*', handleError);

adapter.subscribeStatesAsync('*').catch(handleError);
adapter.subscribeForeignStatesAsync('*').catch(handleError);
adapter.unsubscribeStatesAsync('*').catch(handleError);
adapter.unsubscribeForeignStatesAsync('*').catch(handleError);
adapter.subscribeObjectsAsync('*').catch(handleError);
adapter.subscribeForeignObjectsAsync('*').catch(handleError);
adapter.unsubscribeObjectsAsync('*').catch(handleError);
adapter.unsubscribeForeignObjectsAsync('*').catch(handleError);

adapter.getHistory('state.id', {}, (err, result?: ioBroker.GetHistoryResult) => {});

(() => adapter.terminate())();
(() => adapter.terminate(1))();
(() => adapter.terminate('Reason'))();
(() => adapter.terminate('Reason', 4))();

adapter.supportsFeature && !!adapter.supportsFeature('foo');
() => {
    const instance = adapter.getPluginInstance('my-plugin');
    instance && instance.someMethod();
    const config = adapter.getPluginConfig('my-plugin');
    config && config.x;
};

// $ExpectError
adapter.states.getStates();
// $ExpectError
adapter.objects.getObjectView();

adapter.oObjects && adapter.oObjects['foo'] && adapter.oObjects['foo']._id.toString();
adapter.oStates && adapter.oStates['foo'] && adapter.oStates['foo'].val;

// Repro from https://github.com/ioBroker/adapter-core/issues/3
const repro1: ioBroker.ObjectChangeHandler = (id, obj) => {
    if (!obj || !obj.common) return;
    if (obj.common.custom) {
        const test1: ioBroker.StateCommon = obj.common;
    }
    obj && obj.common && obj.common.custom && obj.common.custom['adapter.0'] && obj.common.custom['adapter.0'].enabled;
};

// Repro from https://github.com/ioBroker/adapter-core/issues/4
function repro2() {
    // Prepare custom object
    const obj = {
        common: {
            custom: {
                'adapter.namespace': { start_day: null as any },
            },
        },
    };
    adapter.extendForeignObject('obj.id', obj, err => {});
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
    adapter.getChannelsAsync().then(list => {
        list; // $ExpectType ChannelObject[]
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

const folderObj: ioBroker.FolderObject = {
    _id: 'id',
    type: 'folder',
    common: {
        name: 'something',
        // any property is allowed
        foo: 'bar',
    },
    native: {},
};

// Repro from https://github.com/ioBroker/ioBroker.js-controller/issues/782
// $ExpectError
adapter.setState('id', { ack: false });

// null is a valid state value
adapter.setState("id", null);
adapter.setForeignState("id", null);
adapter.setStateAsync("id", null);
adapter.setForeignStateAsync("id", null);
adapter.setStateChanged("id", null);
adapter.setForeignStateChanged("id", null);
adapter.setStateChangedAsync("id", null);
adapter.setForeignStateChangedAsync("id", null);
adapter.delBinaryState("id");
adapter.delBinaryStateAsync("id").then(() => null);

// Allow alias states
adapter.getObjectAsync("id").then(obj => obj && obj.type === "state" && obj.common.alias && obj.common.alias.id.toUpperCase());

adapter.getObjectAsync('id').then(obj => {
    // Allow accessing unknown properties - the user is on its own here
    obj && obj.common && obj.common.alias && obj.common.alias.id;
    obj && obj.common && obj.common.unit && obj.common.workingID;
});

declare let state: ioBroker.StateObject;
if (typeof state.common.smartName === "object") {
    state.common.smartName.de && state.common.smartName.de.toUpperCase();
    state.common.smartName.byOn && state.common.smartName.byOn.toUpperCase();
}

declare let enumObj: ioBroker.EnumObject;
enumObj.common.members && enumObj.common.members.map(() => 1);

// Adapter.clearTimeout and clearInterval are not compatible with the builtins
adapter.clearTimeout(adapter.setTimeout(() => {}, 10));
adapter.clearInterval(adapter.setInterval(() => {}, 10));
// $ExpectError
clearTimeout(adapter.setTimeout(() => {}, 10));
// $ExpectError
clearInterval(adapter.setInterval(() => {}, 10));
// $ExpectError
adapter.clearTimeout(setTimeout(() => {}, 10));
// $ExpectError
adapter.clearInterval(setInterval(() => {}, 10));
// And they must not be switched
// $ExpectError
adapter.clearInterval(adapter.setTimeout(() => {}, 10));
// $ExpectError
adapter.clearTimeout(adapter.setInterval(() => {}, 10));

// Error callbacks were changed to Error objects
adapter.delFile(null, "foo", (err) => {
    if (err) {
        // And the fs-specific ones now contain the code
        err.code;
        err.message;
        err.syscall;
    }
});

adapter.FORBIDDEN_CHARS.test("foo");
// $ExpectError
adapter.FORBIDDEN_CHARS = /_/;

// Repro from ioBroker.i2c
{
    interface PCF8574Config {
        pollingInterval: number;
        interrupt?: string;
        pins: PinConfig[];
    }

    interface PinConfig {
        dir: 'in' | 'out';
        inv?: boolean;
    }

    const config: PCF8574Config = undefined as any;

    adapter.extendObject(`some state`, {
        type: 'state',
        common: {
            name: `some name`,
            read: true,
            write: false,
            type: 'boolean',
            role: 'indicator',
        },
        native: config,
    });
}

// Test some of the more uncommon object types
const adapterObject: ioBroker.AdapterObject = {
    _id: "",
    type: "adapter",
    native: {},
    common: {
        enabled: true,
        installedVersion: "1.2.3",
        materialize: false,
        materializeTab: false,
        mode: "daemon",
        name: "test",
        platform: "Javascript/Node.js",
        titleLang: {
            de: "foo",
            es: "foo",
            fr: "foo",
            it: "foo",
            nl: "foo",
            pl: "foo",
            pt: "foo",
            ru: "foo",
            en: "foo",
            "zh-cn": "foo"
        },
        version: "1.2.3"
    }
};

const folderObject: ioBroker.FolderObject = {
    _id: '',
    type: 'folder',
    common: { name: 'My Folder' },
    native: {},
};

const enumObject: ioBroker.EnumObject = {
    _id: '',
    type: 'enum',
    common: { name: 'My Enum', members: [] },
    native: {},
};

const metaObject: ioBroker.MetaObject = {
    _id: '',
    type: 'meta',
    common: { type: 'meta.folder', name: 'foobar' },
    native: {},
};

const instanceObject: ioBroker.InstanceObject = {
    _id: '',
    type: 'instance',
    common: { enabled: true, host: 'my host', mode: 'daemon', name: 'instance 1' },
    native: {},
};

const userObject: ioBroker.UserObject = {
    _id: '',
    type: 'user',
    common: { name: 'me', password: '*****', enabled: true },
    native: {},
};

// Ensure that getForeignObject tries to resolve a specific object type
(async () => {
    let inst: ioBroker.InstanceObject | null | undefined;
    inst = await adapter.getForeignObjectAsync("system.adapter.admin.0");

    let adptr: ioBroker.AdapterObject | null | undefined;
    adptr = await adapter.getForeignObjectAsync("system.adapter.admin");

    let meta: ioBroker.MetaObject | null | undefined;
    meta = await adapter.getForeignObjectAsync("admin.0");
    meta = await adapter.getForeignObjectAsync("admin.admin");
    meta = await adapter.getForeignObjectAsync("admin.meta");
    meta = await adapter.getForeignObjectAsync("admin.meta.foobar");
    meta = await adapter.getForeignObjectAsync("admin.0.meta.blub");

    let chnl: ioBroker.ChannelObject | null | undefined;
    chnl = await adapter.getForeignObjectAsync("script.js.common");
    chnl = await adapter.getForeignObjectAsync("script.js.global");
    chnl = await adapter.getForeignObjectAsync("admin.777.info");

    let state: ioBroker.StateObject | null | undefined;
    state = await adapter.getForeignObjectAsync("system.adapter.admin.0.foobar");

    let scrChnl: ioBroker.ChannelObject | ioBroker.ScriptObject | null | undefined;
    scrChnl = await adapter.getForeignObjectAsync("script.js.my-script");
    scrChnl = await adapter.getForeignObjectAsync("script.js.my-script.foobar");

    let enm: ioBroker.EnumObject | null | undefined;
    enm = await adapter.getForeignObjectAsync("enum.functions");
    enm = await adapter.getForeignObjectAsync("enum.functions.light");

    let group: ioBroker.GroupObject | null | undefined;
    group = await adapter.getForeignObjectAsync("system.group.admin.faz");

    let user: ioBroker.UserObject | null | undefined;
    user = await adapter.getForeignObjectAsync("system.user.admin.faz");

    let host: ioBroker.HostObject | null | undefined;
    host = await adapter.getForeignObjectAsync("system.host.my-hostname");

    let config: ioBroker.OtherObject & {type: "config"} | null | undefined;
    config = await adapter.getForeignObjectAsync("system.repositories");
    config = await adapter.getForeignObjectAsync("system.config");
    config = await adapter.getForeignObjectAsync("system.certificates");

    let misc: ioBroker.FolderObject | ioBroker.DeviceObject | ioBroker.ChannelObject | ioBroker.StateObject | null | undefined;
    misc = await adapter.getForeignObjectAsync("system.host.hostname.foobar");
    misc = await adapter.getForeignObjectAsync("adapter-name.0.foo");
    misc = await adapter.getForeignObjectAsync("adapter-name.0.foo.bar");
    misc = await adapter.getForeignObjectAsync("adapter-name.0.foo.bar.baz");

    // combined
    const idCombined = "" as "enum.functions" | "script.js.global";
    let combined: ioBroker.ChannelObject | ioBroker.EnumObject | null | undefined;
    combined = await adapter.getForeignObjectAsync(idCombined);

    // unknown id
    let unknown: ioBroker.Object | null | undefined;
    unknown = await adapter.getForeignObjectAsync("");
});

// Ensure that setForeignObject tries to resolve a specific object type
(async () => {
    adapter.setForeignObject("system.host.my-hostname", {
        // $ExpectError
        type: "not-host"
    });

    adapter.setForeignObject("admin.0.maybe-channel", {
        type: "channel",
        common: {
            name: "A channel"
        },
        native: {}
    });

    adapter.setForeignObject(null! as string, null! as ioBroker.Object);
});
