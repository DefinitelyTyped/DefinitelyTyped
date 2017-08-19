// Tests for Amplitude SDK TypeScript definitions

module Amplitude.Tests {
    function all() {
        amplitude.init('YOUR_API_KEY_HERE', null, {
            // optional configuration options
            saveEvents: true,
            includeUtm: true,
            includeReferrer: true,
            batchEvents: true,
            eventUploadThreshold: 50
        });
        amplitude.init('YOUR_API_KEY_HERE', 'USER_ID_HERE', null, () => {});

        amplitude.logEvent('EVENT_IDENTIFIER_HERE');
        amplitude.setUserId('USER_ID_HERE');
        amplitude.init('YOUR_API_KEY_HERE', 'USER_ID_HERE');
        amplitude.setUserId(null); // not string 'null'
        amplitude.setVersionName('VERSION_NAME_HERE');

        amplitude.regenerateDeviceId();
        amplitude.setDeviceId('CUSTOM_DEVICE_ID');

        amplitude.logEvent('EVENT_IDENTIFIER_HERE', {
            'color': 'blue',
            'age': 20,
            'key': 'value'
        });
        amplitude.logEvent("EVENT_IDENTIFIER_HERE", null, (httpCode, response) => { });

        let identify = new amplitude.Identify().set('gender', 'female').set('age', 20);
        amplitude.identify(identify);

        identify = new amplitude.Identify().setOnce('sign_up_date', '08/24/2015');
        amplitude.identify(identify);

        identify = new amplitude.Identify().setOnce('sign_up_date', '09/14/2015');
        amplitude.identify(identify);

        identify = new amplitude.Identify().unset('gender').unset('age');
        amplitude.identify(identify);

        identify = new amplitude.Identify().add('karma', 1).add('friends', 1);
        amplitude.identify(identify);

        identify = new amplitude.Identify().append('ab-tests', 'new-user-test').append('some_list', [1, 2, 3, 4, 'values']);
        amplitude.identify(identify);

        identify = new amplitude.Identify().prepend('ab-tests', 'new-user-test').prepend('some_list', [1, 2, 3, 4, 'values']);
        amplitude.identify(identify);

        identify = new amplitude.Identify()
            .set('karma', 10)
            .add('karma', 1)
            .unset('karma');
        amplitude.identify(identify);

        identify = new amplitude.Identify()
            .set('colors', ['rose', 'gold'])
            .append('ab-tests', 'campaign_a')
            .append('existing_list', [4, 5]);
        amplitude.identify(identify);

        amplitude.setUserProperties({
            gender: 'female',
            age: 20
        });

        amplitude.clearUserProperties();

        amplitude.setOptOut(true);
        amplitude.setOptOut(false);

        amplitude.setGroup('orgId', '15');
        amplitude.setGroup('sport', ['soccer', 'tennis']);

        // TODO: Implement those.
        /*
        var revenue = new amplitude.Revenue().setProductId('com.company.productId').setPrice(3.99).setQuantity(3);
        amplitude.logRevenueV2(revenue);

        amplitude.logEventWithGroups('initialize_game', { 'key': 'value' }, { 'sport': 'soccer' });
        */
    }
}
