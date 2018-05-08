/// <reference types="cordova"  />

function callback(badgeOrGranted: number | boolean) {
    console.log(badgeOrGranted);
}

window.cordova.plugins.notification.badge.clear();
window.cordova.plugins.notification.badge.set(10, callback);
window.cordova.plugins.notification.badge.decrease(2, callback);
window.cordova.plugins.notification.badge.increase(5, callback);
window.cordova.plugins.notification.badge.hasPermission(callback);
window.cordova.plugins.notification.badge.requestPermission(callback);
window.cordova.plugins.notification.badge.get(callback);
window.cordova.plugins.notification.badge.configure({
    autoClear: true
});
