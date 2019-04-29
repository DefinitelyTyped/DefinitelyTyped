import Mixpanel, { MixpanelInstance } from 'react-native-mixpanel';

Mixpanel.sharedInstanceWithToken('1234567890');
Mixpanel.track('Event name');
Mixpanel.trackWithProperties('Click Button', { button_type: 'yellow button', button_text: 'magic button' });
Mixpanel.createAlias('123456');
Mixpanel.identify('123456');
Mixpanel.set({ $email: 'elvis@email.com' });
Mixpanel.setOnce({ $email: 'elvis@email.com', Created: new Date().toISOString() });
Mixpanel.timeEvent('Image Upload');
Mixpanel.track('Image Upload');
Mixpanel.registerSuperProperties({ 'Account type': 'Free', 'User Type': 'Vendor' });
Mixpanel.registerSuperPropertiesOnce({ Gender: 'Female' });
Mixpanel.trackCharge(399);
Mixpanel.trackChargeWithProperties(399, { product: 'ACME Wearable tech' });
Mixpanel.increment("Login Count", 1);
Mixpanel.setPushRegistrationId('1234567890abc');
Mixpanel.initPushHandling('123456666');
Mixpanel.clearPushRegistrationId();
Mixpanel.addPushDeviceToken('1234567890abc');
Mixpanel.reset();
Mixpanel.getDistinctId((id) => (id));

const instance = new MixpanelInstance();

instance.initialize().then().catch();

instance.getDistinctId().then().catch();

instance.getSuperProperty('propName').then().catch();

instance.track('event').then().catch();

instance.flush().then().catch();

instance.disableIpAddressGeolocalization().then().catch();

instance.alias('alias').then().catch();

instance.identify('userId').then().catch();

instance.timeEvent('event').then().catch();

instance.registerSuperProperties({properties: 1}).then().catch();

instance.registerSuperPropertiesOnce({properties: 1}).then().catch();

instance.initPushHandling('token').then().catch();

instance.set({properties: 1}).then().catch();

instance.setOnce({properties: 1}).then().catch();

instance.trackCharge(1).then().catch();

instance.trackChargeWithProperties(1, {properties: 1}).then().catch();

instance.increment('property', 1).then().catch();

instance.union('name', [1, 'f', {}]).then().catch();

instance.removePushDeviceToken({token: 'token'}).then().catch();

instance.removeAllPushDeviceTokens().then().catch();

instance.addPushDeviceToken('token').then().catch();
