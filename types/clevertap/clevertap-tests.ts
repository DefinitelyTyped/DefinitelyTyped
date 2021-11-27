import * as CleverTap from 'clevertap';

const clevertap = CleverTap.init('accountId', 'accountPasscode', CleverTap.REGIONS.EUROPE);

const data: CleverTap.UploadData[] = [
    {
        type: 'profile',
        identity: '6264372124',
        profileData: {
            favoriteColor: 'green',
            Age: 30,
            Phone: '+14155551234',
            Email: 'peter@foo.com',
        },
    },
    {
        type: 'event',
        identity: '6264372124',
        // ts: Math.floor(new Date().getTime() / 1000),
        evtName: 'choseNewFavoriteFood',
        evtData: {
            value: 'sushi',
        },
    },
];

// upload an array of event/profile records callback style
clevertap.upload(data, { debug: 1, batchSize: 50 }, (res: any) => {});

// or if you prefer Promises
clevertap.upload(data, { debug: 1, batchSize: 50 }).then((res: any) => {});

// query for events
const query1 = {
    event_name: 'choseNewFavoriteFood',
    props: [{ name: 'value', operator: 'contains', value: 'piz' }],
    from: 20210101,
    to: 20210701,
};

// callback style
clevertap.events(query1, { debug: 1, batchSize: 500 }, (res: any) => {});

// or if you prefer Promises
clevertap.events(query1, { debug: 1, batchSize: 500 }).then((res: any) => {});

// query for user profiles
const query2 = {
    event_name: 'choseNewFavoriteFood',
    from: 20210101,
    to: 20210701,
};

// callback style
clevertap.profiles(query2, { debug: 1, batchSize: 200 }, (res: any) => {});

// or if you prefer Promises
clevertap.profiles(query2, { debug: 1, batchSize: 200 }).then((res: any) => {});

// send a push notification
const createPayload = {
    name: 'green freedom',
    when: 'now',
    where: {
        event_name: 'App Launched',
        from: 20210101,
        to: 20210701,
    },
    content: {
        title: 'Hello!',
        body: 'Strictly Green Lantern fans only!',
        platform_specific: {
            ios: {
                deep_link: 'judepereira.com',
                sound_file: 'judepereira.wav',
                category: 'reactive',
                badge_count: 1,
                foo: 'bar_ios',
            },
            android: {
                background_image: 'http://judepereira.com/a.jpg',
                default_sound: true,
                deep_link: 'judepereira.com',
                foo: 'bar_android',
                wzrk_cid: 'BRTesting',
            },
        },
    },
    devices: ['android', 'ios'],
};

// callback style
clevertap.targets(clevertap.TARGET_CREATE, createPayload, { debug: 1 }, (res: any) => {});

// or if you prefer Promises
clevertap.targets(clevertap.TARGET_CREATE, createPayload, { debug: 1 }).then((res: any) => {});

// Estimate a target compaigns
const estimatePayload = {
    name: 'green freedom',
    when: 'now',
    // This flag should be add in the the payload for target estimate api
    estimate_only: true,
    where: {
        event_name: 'App Launched',
        from: 20210101,
        to: 20210701,
    },
    content: {
        title: 'Hello!',
        body: 'Strictly Green Lantern fans only!',
        platform_specific: {
            ios: {
                deep_link: 'judepereira.com',
                sound_file: 'judepereira.wav',
                category: 'reactive',
                badge_count: 1,
                foo: 'bar_ios',
            },
            android: {
                background_image: 'http://judepereira.com/a.jpg',
                default_sound: true,
                deep_link: 'judepereira.com',
                foo: 'bar_android',
                wzrk_cid: 'BRTesting',
            },
        },
    },
    devices: ['android', 'ios'],
};
// callback style
clevertap.targets(clevertap.TARGET_ESTIMATE, estimatePayload, { debug: 1 }, (res: any) => {});

// or if you prefer Promises
clevertap.targets(clevertap.TARGET_ESTIMATE, estimatePayload, { debug: 1 }).then((res: any) => {});

// List all target compaigns in a date range
const listPayload = { from: 20210101, to: 20210701 };
// callback style
clevertap.targets(clevertap.TARGET_LIST, listPayload, { debug: 1 }, (res: any) => {});

// or if you prefer Promises
clevertap.targets(clevertap.TARGET_LIST, listPayload, { debug: 1 }).then((res: any) => {});

// Stop a specific target compaign
const stopPayload = { id: 1629904249 };
// callback style
clevertap.targets(clevertap.TARGET_STOP, stopPayload, { debug: 1 }, (res: any) => {});

// or if you prefer Promises
clevertap.targets(clevertap.TARGET_STOP, stopPayload, { debug: 1 }).then((res: any) => {});

// Resule out  a target compaign
const resultPayload = { id: 1629904249 };
// callback style
clevertap.targets(clevertap.TARGET_RESULT, resultPayload, { debug: 1 }, (res: any) => {});

// or if you prefer Promises
clevertap.targets(clevertap.TARGET_RESULT, resultPayload, { debug: 1 }).then((res: any) => {});
