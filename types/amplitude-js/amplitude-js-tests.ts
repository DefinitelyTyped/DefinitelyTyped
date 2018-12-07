// Tests for Amplitude SDK TypeScript definitions

module Amplitude.Tests {

    function all() {
        var client: amplitude.AmplitudeClient = new amplitude.AmplitudeClient();
        var identify: amplitude.Identify = new amplitude.Identify();
        var revenue: amplitude.Revenue = new amplitude.Revenue();

        client = amplitude.getInstance();
        client = amplitude.getInstance('some name');

        amplitude.__VERSION__ === '1.2.3';
        amplitude.options.logLevel = 'WARN';

        amplitude.init('API_KEY', 'USER_ID', {
            saveEvents: true,
            includeUtm: true,
            includeReferrer: true,
            batchEvents: true,
            eventUploadThreshold: 50
        }, function () { });
        amplitude.init('API_KEY', 'USER_ID', { includeReferrer: true, includeUtm: true });
        amplitude.init('API_KEY', 'USER_ID');
        amplitude.init('API_KEY');

        amplitude.logEvent('Clicked Homepage Button', { 'finished_flow': false, 'clicks': 15 });
        amplitude.logEvent('EVENT_IDENTIFIER_HERE', { 'color': 'blue', 'age': 20, 'key': 'value' });
        amplitude.logEvent("EVENT_IDENTIFIER_HERE", null, (httpCode, response) => { });
        amplitude.logEventWithGroups('initialize_game', { 'key': 'value' }, { 'sport': 'soccer' });

        amplitude.setDeviceId('45f0954f-eb79-4463-ac8a-233a6f45a8f0');
        amplitude.setDomain('.amplitude.com');
        amplitude.setGroup('orgId', '15');
        amplitude.setGroup('orgId', ['15', '16']);
        amplitude.setUserId('joe@gmail.com');
        amplitude.setUserProperties({ 'gender': 'female', 'sign_up_complete': true })
        amplitude.setVersionName('1.12.3');
        amplitude.isNewSession();
        amplitude.getSessionId() === 123;

        amplitude.identify(identify);
        amplitude.logRevenue(3.99, 1, 'product_1234');
        amplitude.logRevenueV2(revenue);


        client.init('API_KEY', 'USER_ID', {
            saveEvents: true,
            includeUtm: true,
            includeReferrer: true,
            batchEvents: true,
            eventUploadThreshold: 50
        }, function () { });
        client.init('API_KEY', 'USER_ID', { includeReferrer: true, includeUtm: true });
        client.init('API_KEY', 'USER_ID');
        client.init('API_KEY');

        client.logEvent('Clicked Homepage Button', { 'finished_flow': false, 'clicks': 15 });
        client.logEvent('EVENT_IDENTIFIER_HERE', { 'color': 'blue', 'age': 20, 'key': 'value' });
        client.logEvent("EVENT_IDENTIFIER_HERE", null, (httpCode, response) => { });
        client.logEventWithGroups('initialize_game', { 'key': 'value' }, { 'sport': 'soccer' });
        client.logEventWithTimestamp('EVENT_IDENTIFIER_HERE', { 'key': 'value' }, 1505430378000, (httpCode, response) => { });


        client.setDeviceId('45f0954f-eb79-4463-ac8a-233a6f45a8f0');
        client.setDomain('.amplitude.com');
        client.setUserId('joe@gmail.com');
        client.setOptOut(true);
        client.setGroup('type', 'name');
        client.setGroup('type', ['name', 'name2']);
        client.setUserProperties({ 'gender': 'female', 'sign_up_complete': true });
        client.setGlobalUserProperties({ 'gender': 'female', 'sign_up_complete': true });
        client.setVersionName('1.12.3');
        client.setSessionId(1505430378000);

        client.options.logLevel = 'WARN';
        client.getSessionId() === 123;
        client.isNewSession() === true;
        client.regenerateDeviceId();
        client.clearUserProperties();

        client.identify(identify);
        client.logRevenue(3.99, 1, 'product_1234');
        client.logRevenueV2(revenue);


        identify = new amplitude.Identify().set('colors', ['rose', 'gold']).add('karma', 1).setOnce('sign_up_date', '2016-03-31');
        identify = new amplitude.Identify().add('karma', 1).add('friends', 1);
        identify = new amplitude.Identify().set('karma', 10).add('karma', 1).unset('karma');
        identify = new amplitude.Identify().append('ab-tests', 'new-user-tests');
        identify.append('some_list', [1, 2, 3, 4, 'values']);
        identify = new amplitude.Identify().prepend('ab-tests', 'new-user-tests');
        identify.prepend('some_list', [1, 2, 3, 4, 'values']);
        identify = new amplitude.Identify().set('user_type', 'beta');
        identify.set('name', { 'first': 'John', 'last': 'Doe' });
        identify = new amplitude.Identify().setOnce('sign_up_date', '2016-04-01');
        identify = new amplitude.Identify().unset('user_type').unset('age');
        identify = new amplitude.Identify()
            .set('colors', ['rose', 'gold'])
            .append('ab-tests', 'campaign_a')
            .append('existing_list', [4, 5]);


        revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99);
        revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setEventProperties({ 'city': 'San Francisco' });
        revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setQuantity(5);
        revenue = new amplitude.Revenue().setProductId('productIdentifier').setPrice(10.99).setRevenueType('purchase');
    }

}
