/// <reference path='../cordova/cordova.d.ts'  />
/// <reference path='./cordova-plugin-background-mode.d.ts' />

cordova.plugins.backgroundMode.setDefaults({ silent: true });

cordova.plugins.backgroundMode.enable();
cordova.plugins.backgroundMode.isEnabled();
cordova.plugins.backgroundMode.isActivated();

cordova.plugins.backgroundMode.configure({ text: 'Insane Title' });

cordova.plugins.backgroundMode.onactivate = () => { }
cordova.plugins.backgroundMode.ondeactivate = () => { }
cordova.plugins.backgroundMode.onfailure = (errorCode) => { }