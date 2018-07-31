/// <reference types="cordova" />


cordova.plugins.email.isAvailable((isAvailable) => {}, {});
cordova.plugins.email.open({
  to: ['foo@bar.com'],
  body: 'foo bar'
});
cordova.plugins.email.open();
cordova.plugins.email.open({}, () => {});
cordova.plugins.email.open({}, () => {}, {});

cordova.plugins.email.openDraft({
  to: ['foo@bar.com'],
  body: 'foo bar'
});
cordova.plugins.email.openDraft();
cordova.plugins.email.openDraft({}, () => {});
cordova.plugins.email.openDraft({}, () => {}, {});
