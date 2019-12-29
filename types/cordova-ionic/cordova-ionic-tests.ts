/// <reference types="cordova" />


// Keyboard
cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
cordova.plugins.Keyboard.close();
cordova.plugins.Keyboard.disableScroll(true);
cordova.plugins.Keyboard.disableScroll(false);
cordova.plugins.Keyboard.show();
cordova.plugins.Keyboard.close();
console.log(cordova.plugins.Keyboard.isVisible);
