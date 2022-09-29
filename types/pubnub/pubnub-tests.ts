import Pubnub = require('pubnub');

const console = {
    log: (...params: any[]) => { },
    error: (...params: any[]) => { },
};

const config: Pubnub.PubnubConfig = {
    subscribeKey: '',
    publishKey: '',
    secretKey: '',
    ssl: true,
    authKey: '',
    useRandomIVs: false,
    subscribeRequestTimeout: 60,
    uuid: 'myUUID'
};

// userId should work
const pnconfig: Pubnub.PubnubConfig = {
    subscribeKey: '',
    publishKey: '',
    secretKey: '',
    ssl: true,
    authKey: '',
    useRandomIVs: false,
    subscribeRequestTimeout: 60,
    userId: 'myUniqueUserId'
};

const pubnub = new Pubnub(config);

pubnub.setAuthKey('myAuthenKey');

// publish with callback
pubnub.publish({ channel: 'channel-1', message: { data: 1 } }, (status, response) => {
    /*
     * Do something
     */
    console.log(response.timetoken);
});

// publish promise
pubnub.publish({ channel: 'channel-1', message: { data: 1 } }).then(response => {
    /*
     * Do something
     */
    console.log(response.timetoken);
});

pubnub.signal({ channel: 'channel-1', message: { data: 'small payload' } }, (status, { timetoken }) =>
    console.log(timetoken),
);

pubnub
    .signal({ channel: 'channel-1', message: { data: 'small payload' } })
    .then(({ timetoken }) => console.log(timetoken));

pubnub.subscribe({ channels: ['channel-1', 'user-1', 'space-1'] });

pubnub.addListener({
    status: statusEvent => {
        if (statusEvent.category === Pubnub.CATEGORIES.PNConnectedCategory) {
            console.log(statusEvent.category);
        } else if (statusEvent.operation === Pubnub.OPERATIONS.PNAccessManagerAudit) {
            console.log(statusEvent.operation);
        }
    },
    message: ({ message }) => console.log(message),
    presence: ({ action, occupancy, state, uuid }) =>
        console.log({
            action,
            occupancy,
            state,
            uuid,
        }),
    signal: ({ message }) => console.log(message),
    messageAction: ({
        channel,
        publisher,
        subscription,
        timetoken,
        event,
        data: { type, value, uuid, actionTimetoken, messageTimetoken },
    }) =>
        console.log({
            channel,
            publisher,
            subscription,
            timetoken,
            event,
            data: { type, value, uuid, actionTimetoken, messageTimetoken },
        }),
    objects: ({
        channel,
        publisher,
        subscription,
        timetoken,
        message: {
            type,
            event,
            data
        }
    }) => {
        console.log(
            {
                channel,
                publisher,
                subscription,
                timetoken,
                message: {
                    type,
                    event,
                    data
                }
            }
        );
    },
    file: ({
        channel,
        subscription,
        timetoken,
        publisher,
        message,
        file: {
            id,
            name,
            url
        }
    }) => console.log({
        channel,
        subscription,
        timetoken,
        publisher,
        message,
        file: {
            id,
            name,
            url
        }
    })
});

pubnub.unsubscribe({ channels: ['channel-1'] });

pubnub.unsubscribeAll();

pubnub.getSubscribedChannels();

pubnub.getSubscribedChannelGroups();

pubnub.setUUID(Pubnub.generateUUID());
const uuid = pubnub.getUUID();

pubnub.whereNow({ uuid: '' }, (status, res) => {
    if (!status.error) {
        console.log(res.channels[0]);
    }
});

pubnub.whereNow({ uuid: '' }).then(res => {
    console.log(res.channels[1]);
});

pubnub.getState({ uuid: '' }, (status, res) => {
    if (!status.error) {
        console.log(res.channels[0]);
    }
});

pubnub.getState({ uuid: '' }).then(res => {
    console.log(res.channels[1]);
});

pubnub.setState({ channels: [] }, (status, res) => {
    if (!status.error) {
        console.log(res.state);
    }
});

pubnub.setState({ channels: [] }).then(res => {
    console.log(res.state);
});

const grantOptions = {
    channels: ['channel-1'],
    authKeys: ['auth-key'],
    read: true,
    write: false,
    manage: false,
    delete: false,
    update: false,
    join: true,
    ttl: 1440
};
pubnub.grant(grantOptions).then(status => {
    console.log(status);
});

const grantUuidOptions = {
    uuids: ['uuid-1'],
    authKeys: ['auth-key'],
    update: true
};
pubnub.grant(grantUuidOptions).then(status => {
    console.log(status);
});

const grantchannelGroupsOptions = {
    channelGroups: ['cg-1'],
    authKeys: ['auth-key'],
    read: true,
    manage: false,
    ttl: 1440
};
pubnub.grant(grantchannelGroupsOptions).then(status => {
    console.log(status);
});

const grantTokenParameters = {
    ttl: 15,
    authorized_uuid: 'my-authorized-uuid',
    resources: {
        channels: {
            'channel-a': {
                read: true,
            },
            'channel-b': {
                read: true,
                write: true,
            },
            'channel-c': {
                read: true,
                write: true,
            },
            'channel-d': {
                read: true,
                write: true,
            },
        },
        groups: {
            'channel-group-b': {
                read: true,
            },
        },
        uuids: {
            'uuid-c': {
                get: true,
            },
            'uuid-d': {
                get: true,
                update: true,
            },
        },
    },
    patterns: {
        channels: {
            '^channel-[A-Za-z0-9]$': {
                read: true,
            },
        },
    }
};

pubnub.grantToken(grantTokenParameters).then(token => console.log(token));

pubnub.parseToken('someToken');

pubnub.setToken('someToken');

pubnub.revokeToken('someToken');

pubnub.history({ channel: 'channel-1', count: 2 }, (status, res) => console.log(status, res));

pubnub.history({ channel: 'channel-1', count: 2 }).then(res => console.log(res));

pubnub.fetchMessages(
    {
        channels: ['my_channel'],
        stringifiedTimeToken: true,
        start: '15343325214676133',
        end: '15343325004275466',
        includeUUID: true,
        includeMessageType: true,
        includeMeta: true,
        includeMessageActions: true,
    },
    (status, { channels }) =>
        Object.keys(channels).forEach(channel =>
            channels[channel].forEach(({ message, timetoken, meta, actions = {} }) => {
                console.log({ message, timetoken, meta });
                Object.keys(actions).forEach(type =>
                    Object.keys(actions[type]).forEach(value =>
                        actions[type][value].forEach(({ uuid, actionTimetoken }) =>
                            console.log({ uuid, actionTimetoken }),
                        ),
                    ),
                );
            }),
        ),
);

pubnub
    .fetchMessages({
        channels: ['my_channel'],
        stringifiedTimeToken: true,
        start: '15343325214676133',
        end: '15343325004275466',
    })
    .then(res => console.log(res));

pubnub.deleteMessages(
    {
        channel: 'ch1',
        start: '15088506076921021',
        end: '15088532035597390',
    },
    status => console.log(status),
);

pubnub
    .deleteMessages({
        channel: 'ch1',
        start: '15088506076921021',
        end: '15088532035597390',
    })
    .then();

pubnub.messageCounts(
    {
        channels: ['ch1'],
        channelTimetokens: ['15518041524300251'],
    },
    (status, { channels }) => {
        Object.keys(channels).forEach(channel => {
            console.log(channels[channel]);
        });
    },
);

pubnub
    .messageCounts({
        channels: ['ch1'],
        channelTimetokens: ['15518041524300251'],
    })
    .then(res => console.log(res));

pubnub.push.addChannels(
    {
        channels: ['a', 'b'],
        device: 'niceDevice',
        pushGateway: 'apns',
    },
    status => console.log(status),
);

pubnub.push
    .addChannels({
        channels: ['a', 'b'],
        device: 'niceDevice',
        pushGateway: 'apns',
    })
    .then();

pubnub.push.listChannels(
    {
        device: 'niceDevice',
        pushGateway: 'apns',
    },
    (status, { channels = [] }) => channels.forEach(channel => console.log(channel)),
);

pubnub.push
    .listChannels({
        device: 'niceDevice',
        pushGateway: 'apns',
    })
    .then(res => console.log(res));

pubnub.push.removeChannels(
    {
        channels: ['a', 'b'],
        device: 'niceDevice',
        pushGateway: 'apns', // apns, gcm, mpns
    },
    status => console.log(status),
);
pubnub.push
    .removeChannels({
        channels: ['a', 'b'],
        device: 'niceDevice',
        pushGateway: 'apns', // apns, gcm, mpns
    })
    .then();

pubnub.push.deleteDevice(
    {
        device: 'niceDevice',
        pushGateway: 'apns', // apns, gcm, mpns
    },
    status => console.log(status),
);

pubnub.push
    .deleteDevice({
        device: 'niceDevice',
        pushGateway: 'apns', // apns, gcm, mpns
    })
    .then();

const cryptoOptions = {
    encryptKey: true,
    keyEncoding: 'utf8',
    keyLength: 256,
    mode: 'cbc',
};

const mySecret = {
    message: 'Hi!',
};

pubnub.decrypt(mySecret, undefined, cryptoOptions);
pubnub.decrypt('mySecretString', undefined, cryptoOptions);
pubnub.encrypt('egrah5rwgrehwqh5eh3hwfwef', undefined, cryptoOptions);

pubnub.time().then(response => console.log(response));

pubnub.time((status, response) => console.log(status, response));

const channelGroup = 'channel-group-1';
const channels = ['channel-1'];

pubnub.channelGroups.addChannels({ channelGroup, channels }).then(response => console.log(response));

pubnub.channelGroups.listChannels({ channelGroup }).then(response => console.log(response));

pubnub.channelGroups.listGroups().then(response => console.log(response));

pubnub.channelGroups.removeChannels({ channelGroup, channels }).then(response => console.log(response));

pubnub.channelGroups.deleteGroup({ channelGroup }).then(response => console.log(response));

pubnub.channelGroups.addChannels({ channelGroup, channels }, status => console.log(status));

pubnub.channelGroups.listChannels({ channelGroup }, (status, response) => console.log(status, response));

pubnub.channelGroups.listGroups((status, response) => console.log(status, response));

pubnub.channelGroups.removeChannels({ channelGroup, channels }, status => console.log(status));

pubnub.channelGroups.deleteGroup({ channelGroup }, status => console.log(status));

pubnub.addMessageAction(
    {
        channel: 'channel1',
        messageTimetoken: '15610547826970040',
        action: {
            type: 'reaction',
            value: 'smiley_face',
        },
    },
    (status, { data: { type, value, uuid, actionTimetoken, messageTimetoken } }) =>
        console.log({ type, value, uuid, actionTimetoken, messageTimetoken }),
);

pubnub
    .addMessageAction({
        channel: 'channel1',
        messageTimetoken: '15610547826970040',
        action: {
            type: 'reaction',
            value: 'smiley_face',
        },
    })
    .then(res => console.log(res));

pubnub.removeMessageAction(
    {
        channel: 'channel1',
        messageTimetoken: '15610547826970040',
        actionTimetoken: '15610547826970040',
    },
    (status, data) => console.log(status, data),
);

pubnub
    .removeMessageAction({
        channel: 'channel1',
        messageTimetoken: '15610547826970040',
        actionTimetoken: '15610547826970040',
    })
    .then(res => console.log(res));

pubnub.getMessageActions(
    {
        channel: 'channel1',
        start: '15610547826970040',
        end: '15610547826970040',
        limit: 100,
    },
    (status, { data }) => {
        data.forEach(({ type, value, uuid, actionTimetoken, messageTimetoken }, index) => {
            console.log(index, { type, value, uuid, actionTimetoken, messageTimetoken });
        });
    },
);

pubnub
    .getMessageActions({
        channel: 'channel1',
        start: '15610547826970040',
        end: '15610547826970040',
        limit: 100,
    })
    .then(res => console.log(res));

// APNS

Pubnub.notificationPayload('Chat invitation', "You have been invited to 'quiz' chat").buildPayload(['apns2', 'fcm']);

// Objects v2 (examples taken from docs https://www.pubnub.com/docs/web-javascript/api-reference-objects)

pubnub.objects.getAllUUIDMetadata();

// using UUID from the config
pubnub.objects.getUUIDMetadata();

// using passed in UUID
pubnub.objects.getUUIDMetadata({
    uuid: 'myUuid',
});

// using UUID from the config
pubnub.objects.setUUIDMetadata({
    data: {
        name: 'John Doe',
    },
});

// using passed in UUID
pubnub.objects.setUUIDMetadata({
    uuid: 'myUuid',
    data: {},
});

// using UUID from the config
pubnub.objects.removeUUIDMetadata();

// using passed in UUID
pubnub.objects.removeUUIDMetadata({
    uuid: 'myUuid',
});

pubnub.objects.getAllChannelMetadata({
    include: {
        totalCount: true,
    },
});

pubnub.objects.getChannelMetadata({
    channel: 'myChannel',
});

pubnub.objects.setChannelMetadata({
    channel: 'myChannel',
    data: {
        name: 'Channel Name',
    },
});

pubnub.objects.removeChannelMetadata({
    channel: 'myChannel',
});

// using UUID from the config
pubnub.objects.getMemberships();

// using passed in UUID
pubnub.objects.getMemberships({
    uuid: 'myUuid',
    include: {
        channelFields: true,
    },
});

// using UUID from the config
pubnub.objects.setMemberships({
    channels: ['ch-1', 'ch-2'],
});

// using passed in UUID
pubnub.objects.setMemberships({
    uuid: 'my-uuid',
    channels: ['my-channel-1', { id: 'my-channel-2' }, { id: 'my-channel-3', custom: { hello: 'world' } }],
    include: {
        // To include channel fields in response
        channelFields: true,
    },
});

// using UUID from the config
pubnub.objects.removeMemberships({
    channels: ['ch-1', 'ch-2'],
});

// using passed in UUID
pubnub.objects.removeMemberships({
    uuid: 'myUuid',
    channels: ['ch-1', 'ch-2'],
});

pubnub.objects.getChannelMembers({
    channel: 'myChannel',
    include: {
        UUIDFields: true,
    },
});

pubnub.objects.setChannelMembers({
    channel: 'myChannel',
    uuids: ['uuid-1', 'uuid-2'],
    page: {
        next: "abc",
        prev: "def"
    }
});

pubnub.objects.removeChannelMembers({
    channel: 'myChannel',
    uuids: ['uuid-1', 'uuid-2'],
});

pubnub.listFiles({
    channel: 'myChannel',
    limit: 10
});

pubnub.sendFile({
    channel: 'myChannel',
    file: {
        data: [ 12, 34 ],
        name: 'cat_picture.jpg'
    }
});

pubnub.downloadFile({
    channel: 'myChannel',
    id: '...',
    name: 'cat_picture.jpg'
});

pubnub.deleteFile({
    channel: 'myChannel',
    id: '...',
    name: 'cat_picture.jpg'
});

pubnub.publishFile({
    channel: 'myChannel',
    fileId: '...',
    fileName: 'cat_picture.jpg',
    message: { field: 'value' }
});
