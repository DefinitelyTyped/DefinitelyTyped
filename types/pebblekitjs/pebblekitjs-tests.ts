

var transactionId = Pebble.sendAppMessage({'0': 42, '1': 'String value'},
    function (e) {
        console.log('Successfully delivered message with transactionId='
            + e.data.transactionId);
    },
    function (e) {
        console.log('Unable to deliver message with transactionId='
            + e.data.transactionId
            + ' Error is: ' + e.error.message);
    }
);

Pebble.addEventListener('appmessage',
    function (e) {
        console.log('Received message: ' + JSON.stringify(e.payload));
    }
);

Pebble.addEventListener('showConfiguration', function (e) {
    // Show config page
    Pebble.openURL('https://my-website.com/config-page.html');
});


Pebble.getTimelineToken(
    function (token) {
        console.log('My timeline token is ' + token);
    },
    function (error) {
        console.log('Error getting timeline token: ' + error);
    }
);

Pebble.timelineSubscribe('aTopic',
    function () {
        console.log('Subscribed to aTopic');
    },
    function (errorString) {
        console.log('Error subscribing to topic: ' + errorString);
    }
);

Pebble.timelineUnsubscribe('aTopic',
    function () {
        console.log('Unsubscribed from aTopic');
    },
    function (errorString) {
        console.log('Error unsubscribing from topic: ' + errorString);
    }
);

Pebble.timelineSubscriptions(
    function (topics) {
        console.log('Subscribed to ' + topics.join(', '));
    },
    function (errorString) {
        console.log('Error getting subscriptions: ' + errorString);
    }
);

Pebble.appGlanceReload(
    [{
        layout: {
            'icon': 'system://images/HOTEL_RESERVATION',
            'subtitleTemplateString': 'Nice Slice!'
        }
    }],
    function (appGlanceSlices) {
        console.log('AppGlanceReload is successful');
    },
    function (appGlanceSlices) {
        console.log('AppGlanceReload has failed');
    }
);
