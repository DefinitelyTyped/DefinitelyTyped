/// <reference types="cordova"  />

/**
 * Open an APK install dialog:
 */
cordova.plugins.fileOpener2.open(
    '/sdcard/Download/gmail.apk',
    'application/vnd.android.package-archive'
);

/**
 * Open a PDF document with the default PDF reader and optional callback object:
 */
cordova.plugins.fileOpener2.open(
    '/sdcard/Download/starwars.pdf', // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
    'application/pdf',
    {
        error: e => {
        },
        success: () => {
        }
    }
);

cordova.plugins.fileOpener2.showOpenWithDialog(
    '/sdcard/Download/starwars.pdf', // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
    'application/pdf',
    {
        error: e => {
        },
        success: () => {
        }
    }
);

cordova.plugins.fileOpener2.uninstall('com.zynga.FarmVille2CountryEscape', {
    error: e => {
    },
    success: () => {
    }
});

cordova.plugins.fileOpener2.appIsInstalled('com.adobe.reader', {
    success: res => {
        if (res.status === 0) {
        } else {
        }
    }
});
