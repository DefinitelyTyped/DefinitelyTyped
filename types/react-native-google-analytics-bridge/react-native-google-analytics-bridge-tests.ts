import {
    GoogleAnalyticsTracker,
    GoogleTagManager,
    GoogleAnalyticsSettings,
} from 'react-native-google-analytics-bridge';

const tracker = new GoogleAnalyticsTracker('GA_UA');

tracker.allowIDFA();
tracker.allowIDFA(true);

tracker.setAnonymizeIp('1.1.1.1');

tracker.setAppName('name');

GoogleTagManager.openContainerWithId('123');
GoogleTagManager.boolForKey('key');
GoogleTagManager.stringForKey('key');
GoogleTagManager.doubleForKey('key');
GoogleTagManager.pushDataLayerEvent<string>({
    event: 'event',
    payload: 'payload',
});

GoogleAnalyticsSettings.setOptOut(true);
GoogleAnalyticsSettings.setDispatchInterval(1000);
GoogleAnalyticsSettings.setDryRun(true);
