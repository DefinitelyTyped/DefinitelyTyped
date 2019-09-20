import AppLink, { maybeOpenURL, openInStore } from 'react-native-app-link';

AppLink.maybeOpenURL('instagram://user?username=microsoft', {
  appName: 'instagram',
  appStoreId: 389801252,
  appStoreLocale: 'gb',
  playStoreId: 'com.instagram.android'
}).then(() => {
  // do stuff
});

maybeOpenURL('instagram://user?username=microsoft', {
  appName: 'instagram',
  appStoreId: 389801252,
  appStoreLocale: 'gb',
  playStoreId: 'com.instagram.android'
}).then(() => {
  // do stuff
});

AppLink.openInStore({
  appName: 'whatsapp-messenger',
  appStoreId: 310633997,
  appStoreLocale: 'gb',
  playStoreId: 'com.whatsapp'
}).then(() => {
  // do stuff
});

openInStore({
  appName: 'whatsapp-messenger',
  appStoreId: 310633997,
  appStoreLocale: 'gb',
  playStoreId: 'com.whatsapp'
}).then(() => {
  // do stuff
});
