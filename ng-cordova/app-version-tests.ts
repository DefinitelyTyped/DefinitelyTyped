/// <reference path="app-version.d.ts" />

module ngCordova {
    function test($cordovaAppVersion: IAppVersionService) {

        $cordovaAppVersion.getVersionNumber()
            .then((versionNumber) => {
                console.log(versionNumber.toLowerCase());
            });

        $cordovaAppVersion.getVersionCode()
            .then((versionCode) => {
                console.log(versionCode.toLowerCase());
            });
    }
}
