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

// Used for Google Analytics User-ID
tracker.setUser('unique_username');

tracker.trackScreenView('Video');

// Tracking pagination of a video list
tracker.trackEvent('Videos', 'Page2');

// The Video 'Awesome Video Title' has started playing
tracker.trackEvent('Video', 'play', { label: 'Awesome Video Title'});

// The video 'Awesome Video Title' has stopped playing 1234 ms into the video
tracker.trackEvent('Video', 'stop', { label: 'Awesome Video Title', value: 1234});

// Tracking the time it took to encode a video
tracker.trackTiming('Video', 15000, { name: 'VideoEncoded' });

tracker.trackException('Exception Message');

// Tracking an ecommerce purchase event happening for a single product
tracker.trackPurchaseEvent({
  id: 'P12345',
  name: 'Android Warhol T-Shirt',
  category: 'Apparel/T-Shirts',
  brand: 'Google',
  variant: 'Black',
  price: 29.20,
  quantity: 1,
  couponCode: 'APPARELSALE'
}, {
  id: 'T12345',
  affiliation: 'Google Store - Online',
  revenue: 37.39,
  tax: 2.85,
  shipping: 5.34,
  couponCode: 'SUMMER2013'
}, 'Ecommerce', 'Purchase');

// Tracking an ecommerce purchase event happening for mutliple products
tracker.trackMultiProductsPurchaseEvent([{
  id: 'P12345',
  name: 'Android Warhol T-Shirt',
  category: 'Apparel/T-Shirts',
  brand: 'Google',
  variant: 'Black',
  price: 29.20,
  quantity: 1,
  couponCode: 'APPARELSALE'
},
{
  id: 'P67890',
  name: 'iOS Warhol T-Shirt',
  category: 'Apparel/T-Shirts',
  brand: 'Apple',
  variant: 'Black',
  price: 29.20,
  quantity: 1,
  couponCode: 'TECHSALE20'
}
], {
  id: 'T12345',
  affiliation: 'Google Store - Online',
  revenue: 37.39,
  tax: 2.85,
  shipping: 5.34,
  couponCode: 'SUMMER2013'
}, 'Ecommerce', 'Purchase');

// Usage of custom dimensions
const tracker2 = new GoogleAnalyticsTracker('GA_UA-2', { test: 1, OtherCustomDimension: 2});

tracker2.trackScreenViewWithCustomDimensionValues('Home', { test: 'Beta' });

tracker2.trackEventWithCustomDimensionValues('Video', 'play', {}, { test: 'data', OtherCustomDimension: 'OtherStuff'});

// Google Tag Manager tests
GoogleTagManager.openContainerWithId('123');

GoogleTagManager.boolForKey('key').then((value: boolean) => {
        console.log('Do something with the boolean for the key "key"');
    });

GoogleTagManager.stringForKey('key').then((value: string) => {
        console.log('Do something with the string for the key "key"');
    });

GoogleTagManager.doubleForKey('key').then((value: number) => {
        console.log('Do something with the number for the key "key"');
    });

GoogleTagManager.pushDataLayerEvent<string>({
        event: 'event',
        payload: 'payload',
    }).then((success: boolean) => {
        console.log(success ? 'Successfully got pushed the DataLayerEvent' : 'Failed to push the DataLayerEvent');
    });

// Google Analytic Settings

GoogleAnalyticsSettings.setOptOut(true);
GoogleAnalyticsSettings.setDispatchInterval(1000);
GoogleAnalyticsSettings.setDryRun(true);
