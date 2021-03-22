import appsFlyer, { EmailCryptType } from 'react-native-appsflyer';

// $ExpectType void | Promise<string>
appsFlyer.initSdk({ devKey: '1A2b3C', appId: 'app_id', isDebug: true });

// $ExpectType void
appsFlyer.getAppsFlyerUID((error, appsFlyerId) => {});

// $ExpectType () => void
appsFlyer.onAppOpenAttribution(res => {});

// $ExpectType () => void
appsFlyer.onInstallConversionData(res => {});

// $ExpectType void
appsFlyer.sendDeepLinkData('https://reactjs.org');

// $ExpectType void
appsFlyer.setAdditionalData({});

// $ExpectType void
appsFlyer.setAppInviteOneLinkID('ABCD');

// $ExpectType void
appsFlyer.setCollectAndroidID(true);

// $ExpectType void
appsFlyer.setCollectIMEI(true);

// $ExpectType void
appsFlyer.setCurrencyCode('USD');

// $ExpectType void
appsFlyer.setCustomerUserId('my_user_id');

// $ExpectType void
appsFlyer.setUserEmails({ emails: [], emailsCryptType: EmailCryptType.EmailCryptTypeNone });

// $ExpectType void
appsFlyer.stopTracking(true);

// $ExpectType void
appsFlyer.trackAndOpenStore('app_id', 'testing');

// $ExpectType void
appsFlyer.trackAppLaunch();

// $ExpectType void
appsFlyer.trackCrossPromotionImpression('app_id', 'testing');

// $ExpectType void | Promise<string>
appsFlyer.trackEvent('af_testing', {});

// $ExpectType void
appsFlyer.trackLocation(100.1, 120.3);

// $ExpectType void
appsFlyer.updateServerUninstallToken('token');

// $ExpectType void
appsFlyer.generateInviteLink({});

// $ExpectType void
appsFlyer.setDeviceTrackingDisabled(true);
