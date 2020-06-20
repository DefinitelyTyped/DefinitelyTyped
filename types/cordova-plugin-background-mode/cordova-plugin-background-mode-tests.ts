/// <reference types="cordova"  />

cordova.plugins.backgroundMode.setDefaults({ silent: true });

cordova.plugins.backgroundMode.enable();
cordova.plugins.backgroundMode.isEnabled();
cordova.plugins.backgroundMode.isActivated();

cordova.plugins.backgroundMode.configure({ text: 'Insane Title' });

cordova.plugins.backgroundMode.onactivate = () => { }
cordova.plugins.backgroundMode.ondeactivate = () => { }
cordova.plugins.backgroundMode.onfailure = (errorCode) => { }
