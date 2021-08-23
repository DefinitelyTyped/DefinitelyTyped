import amplitude = require('amplitude-js');

(() => {
    let client: amplitude.AmplitudeClient = new amplitude.AmplitudeClient();
    let identify: amplitude.Identify = new amplitude.Identify();
    let revenue: amplitude.Revenue = new amplitude.Revenue();

    client = amplitude.getInstance();
    client = amplitude.getInstance('some name');

    amplitude.__VERSION__ === '1.2.3';
    amplitude.options.logLevel = 'WARN';

    amplitude.init(
        'API_KEY',
        'USER_ID',
        {
            saveEvents: true,
            includeUtm: true,
            includeReferrer: true,
            batchEvents: true,
            eventUploadThreshold: 50,
        },
        () => {},
    );
    amplitude.init('API_KEY', 'USER_ID', { includeReferrer: true, includeUtm: true });
    amplitude.init('API_KEY', 'USER_ID');
    amplitude.init('API_KEY');

    amplitude.logEvent('Clicked Homepage Button', { finished_flow: false, clicks: 15 });
    amplitude.logEvent('EVENT_IDENTIFIER_HERE', { color: 'blue', age: 20, key: 'value' });
    amplitude.logEvent('EVENT_IDENTIFIER_HERE', null, (httpCode, response) => {});
    amplitude.logEventWithGroups('initialize_game', { key: 'value' }, { sport: 'soccer' });

    amplitude.setDeviceId('45f0954f-eb79-4463-ac8a-233a6f45a8f0');
    amplitude.setDomain('.amplitude.com');
    amplitude.setGroup('orgId', '15');
    amplitude.setGroup('orgId', ['15', '16']);
    amplitude.setUserId('joe@gmail.com');
    amplitude.setUserId(null);
    amplitude.setUserProperties({ gender: 'female', sign_up_complete: true });
    amplitude.setVersionName('1.12.3');
    amplitude.isNewSession();
    amplitude.getSessionId() === 123;

    amplitude.identify(identify);
    amplitude.logRevenue(3.99, 1, 'product_1234');
    amplitude.logRevenueV2(revenue);

    client.init(
        'API_KEY',
        'USER_ID',
        {
            saveEvents: true,
            includeUtm: true,
            includeReferrer: true,
            batchEvents: true,
            eventUploadThreshold: 50,
        },
        () => {},
    );
    client.init('API_KEY', 'USER_ID', { includeReferrer: true, includeUtm: true });
    client.init('API_KEY', 'USER_ID');
    client.init('API_KEY');
    client.logEvent('Clicked Homepage Button', { finished_flow: false, clicks: 15 });
    client.logEvent('EVENT_IDENTIFIER_HERE', { color: 'blue', age: 20, key: 'value' });
    client.logEvent('EVENT_IDENTIFIER_HERE', null, (httpCode, response) => {});
    client.logEventWithGroups('initialize_game', { key: 'value' }, { sport: 'soccer' });
    client.logEventWithTimestamp('EVENT_IDENTIFIER_HERE', { key: 'value' }, 1505430378000, (httpCode, response) => {});
    client.setDeviceId('45f0954f-eb79-4463-ac8a-233a6f45a8f0');
    client.setDomain('.amplitude.com');
    client.setUserId('joe@gmail.com');
    client.setUserId(null);
    client.setOptOut(true);
    client.setGroup('type', 'name');
    client.setGroup('type', ['name', 'name2']);
    client.setUserProperties({ gender: 'female', sign_up_complete: true });
    client.setGlobalUserProperties({ gender: 'female', sign_up_complete: true });
    client.setVersionName('1.12.3');
    client.setSessionId(1505430378000);
    client.options.logLevel = 'WARN';
    client.getSessionId() === 123;
    client.isNewSession();
    client.regenerateDeviceId();
    client.clearUserProperties();
    client.identify(identify);
    client.logRevenue(3.99, 1, 'product_1234');
    client.logRevenueV2(revenue);
    identify = new amplitude.Identify()
        .set('colors', ['rose', 'gold'])
        .add('karma', 1)
        .setOnce('sign_up_date', '2016-03-31');
    identify = new amplitude.Identify().add('karma', 1).add('friends', 1);
    identify = new amplitude.Identify()
        .set('karma', 10)
        .add('karma', 1)
        .unset('karma');
    identify = new amplitude.Identify().append('ab-tests', 'new-user-tests');
    identify.append('some_list', [1, 2, 3, 4, 'values']);
    identify = new amplitude.Identify().prepend('ab-tests', 'new-user-tests');
    identify.prepend('some_list', [1, 2, 3, 4, 'values']);
    identify = new amplitude.Identify().set('user_type', 'beta');
    identify.set('name', { first: 'John', last: 'Doe' });
    identify = new amplitude.Identify().setOnce('sign_up_date', '2016-04-01');
    identify = new amplitude.Identify().unset('user_type').unset('age');
    identify = new amplitude.Identify()
        .set('colors', ['rose', 'gold'])
        .append('ab-tests', 'campaign_a')
        .append('existing_list', [4, 5]);
    identify.setOnce('is_test_user', true);
    identify.set('is_alpha_user', false);

    revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
    revenue = new amplitude.Revenue()
        .setProductId('productIdentifier')
        .setPrice(10.99)
        .setEventProperties({ city: 'San Francisco' });
    revenue = new amplitude.Revenue()
        .setProductId('productIdentifier')
        .setPrice(10.99)
        .setQuantity(5);
    revenue = new amplitude.Revenue()
        .setProductId('productIdentifier')
        .setPrice(10.99)
        .setRevenueType('purchase');

    identify = new client.Identify();
    revenue = new client.Revenue();
})();

new amplitude.Identify();
let identify = new amplitude.Identify().add('karma', 1).add('friends', 1);
amplitude.identify(identify); // send the Identify call

identify = new amplitude.Identify().append('ab-tests', 'new-user-tests');
identify.append('some_list', [1, 2, 3, 4, 'values']);
amplitude.identify(identify); // send the Identify call

identify = new amplitude.Identify().prepend('ab-tests', 'new-user-tests');
identify.prepend('some_list', [1, 2, 3, 4, 'values']);
amplitude.identify(identify); // send the Identify call

identify = new amplitude.Identify().setOnce('sign_up_date', '2016-04-01');
amplitude.identify(identify); // send the Identify call

identify = new amplitude.Identify().unset('user_type').unset('age');
amplitude.identify(identify); // send the Identify call

identify = new amplitude.Identify()
    .set('colors', ['rose', 'gold'])
    .add('karma', 1)
    .setOnce('sign_up_date', '2016-03-31');
amplitude.identify(identify);

amplitude.init('API_KEY', 'USER_ID', { includeReferrer: true, includeUtm: true }, () => {});

amplitude.logEvent('Clicked Homepage Button', { finished_flow: false, clicks: 15 });
amplitude.logEventWithGroups('Clicked Button', null, { orgId: 24 });
amplitude.logRevenue(3.99, 1, 'product_1234');

const revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
amplitude.logRevenueV2(revenue);
amplitude.setDeviceId('45f0954f-eb79-4463-ac8a-233a6f45a8f0');
amplitude.setGroup('orgId', '15'); // this adds the current user to orgId 15.
amplitude.setUserProperties({ gender: 'female', sign_up_complete: true });
amplitude.setVersionName('1.12.3');

const defaults: amplitude.Config = {
    apiEndpoint: 'api.amplitude.com',
    batchEvents: false,
    cookieExpiration: 365 * 10,
    cookieName: 'amplitude_id',
    deviceIdFromUrlParam: false,
    domain: '',
    eventUploadPeriodMillis: 30 * 1000, // 30s
    eventUploadThreshold: 30,
    forceHttps: true,
    includeGclid: false,
    includeReferrer: false,
    includeUtm: false,
    language: 'en',
    logLevel: 'WARN',
    optOut: false,
    onError: () => {},
    platform: 'iOS',
    savedMaxCount: 1000,
    saveEvents: true,
    saveParamsReferrerOncePerSession: true,
    secureCookie: false,
    sessionTimeout: 30 * 60 * 1000,
    trackingOptions: {
        city: true,
        country: true,
        carrier: true,
        device_manufacturer: true,
        device_model: true,
        dma: true,
        ip_address: true,
        language: true,
        os_name: true,
        os_version: true,
        platform: true,
        region: true,
        version_name: true,
    },
    unsetParamsReferrerOnNewSession: false,
    unsentKey: 'amplitude_unsent',
    unsentIdentifyKey: 'amplitude_unsent_identify',
    uploadBatchSize: 100,
};
