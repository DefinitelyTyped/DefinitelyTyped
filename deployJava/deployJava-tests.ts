/// <reference path="deployJava.d.ts" />

/**
 * @summary Asserts for the method: "allowPlugin".
 */
function assertAllowPlugin() {
    var result: boolean = deployJava.allowPlugin();
}

/**
 * @summary Asserts for the method: "compareVersions".
 */
function assertCompareVersions() {
    var installed = '1.8';
    var required = '1.7';
    
    var result = deployJava.compareVersions(installed, required);
}

/**
 * @summary Asserts for the method: "compareVersionToPattern".
 */
function assertCompareVersionToPattern() {
    var version: string = '1.8';
    var patternArray: Array<string> = ['1.6', '1.7', '1.8'];
    var familyMatch: boolean = false;
    var minMatch: boolean = true;
    
    var result = deployJava.compareVersionToPattern(version, patternArray, familyMatch, minMatch);
}

/**
 * @summary Asserts for the method: "enableAlerts".
 */
function assertEnableAlerts() {
    deployJava.enableAlerts();
}

/**
 * @summary Asserts for the method: "FFInstall".
 */
function assertFFInstall() {
    var result: boolean = deployJava.FFInstall();
}

/**
 * @summary Asserts for the method: "getBrowser".
 */
function assertGetBrowser() {
    var result: string = deployJava.getBrowser();
}

/**
 * @summary Asserts for the method: "getJPIVersionUsingMimeType".
 */
function assertGetJPIVersionUsingMimeType() {
    deployJava.getJPIVersionUsingMimeType();
}

/**
 * @summary Asserts for the method: "getJREs".
 */
function assertGetJREs() {
    var versions: Array<String> = deployJava.getJREs();
}

/**
 * @summary Asserts for the method: "getPlugin".
 */
function assertGetPlugin() {
    var versions: HTMLElement = deployJava.getPlugin();
}

/**
 * @summary Asserts for the method: "IEInstall".
 */
function assertIEInstall() {
    var result: boolean = deployJava.IEInstall();
}

/**
 * @summary Asserts for the method: "installJRE".
 */
function assertInstallJRE() {
    var requestVersion: string = '1.8';
    var result: boolean = deployJava.installJRE(requestVersion);
}

/**
 * @summary Asserts for the method: "installLatestJRE".
 */
function assertInstallLatestJRE() {
    var installCallback: Function = () => {};
    var result: boolean = deployJava.installLatestJRE(installCallback);
}

/**
 * @summary Asserts for the method: "isAutoInstallEnabled".
 */
function assertIsAutoInstallEnabled() {
    var requestedJREVersion: string = '1.8';
    var result: boolean = deployJava.isAutoInstallEnabled();
    var result: boolean = deployJava.isAutoInstallEnabled(requestedJREVersion);
}

/**
 * @summary Asserts for the method: "isAutoUpdateEnabled".
 */
function assertIsAutoUpdateEnabled() {
    var result: boolean = deployJava.isAutoUpdateEnabled();
}

/**
 * @summary Asserts for the method: "isCallbackSupported".
 */
function assertIsCallbackSupported() {
    var result: boolean = deployJava.isCallbackSupported();
}

/**
 * @summary Asserts for the method: "isPlugin2".
 */
function assertIsPlugin2() {
    var result: boolean = deployJava.isPlugin2();
}

/**
 * @summary Asserts for the method: "isPluginInstalled".
 */
function assertIsPluginInstalled() {
    var result: boolean = deployJava.isPluginInstalled();
}

/**
 * @summary Asserts for the method: "isWebStartInstalled".
 */
function assertIsWebStartInstalled() {
    var minimumVersion: string = '1.7';
    var result: boolean = deployJava.isWebStartInstalled();
    var result: boolean = deployJava.isWebStartInstalled(minimumVersion);
}

/**
 * @summary Asserts for the method: "launch".
 */
function assertLaunch() {
    var jnlp: string = 'http://www.example.com/';
    var result: boolean = deployJava.launch(jnlp);
}

/**
 * @summary Asserts for the method: "launchWebStartApplication".
 */
function assertLaunchWebStartApplication() {
    var jnlp: string = 'http://www.example.com/';
    deployJava.launchWebStartApplication(jnlp);
}

/**
 * @summary Asserts for the method: "poll".
 */
function assertPool() {
    deployJava.poll();
}

/**
 * @summary Asserts for the method: "refresh".
 */
function assertRefresh() {
    deployJava.refresh();
}

/**
 * @summary Asserts for the method: "runApplet".
 */
function assertRunApplet() {
    var attributes: Object = {
        code:'java2d.Java2DemoApplet.class',
        archive:'Java2Demo.jar',
        width:710,
        height:540
    };
    
    var parameters: Object = { fontSize:16, permissions:'sandbox' };
    var version: string = '1.8';
    
    deployJava.runApplet(attributes, parameters);
    deployJava.runApplet(attributes, parameters, version);
}

/**
 * @summary Asserts for the method: "setAdditionalPackages".
 */
function assertSetAdditionalPackages() {
    var packageList: string = 'javax.swing';
    var result: boolean = deployJava.setAdditionalPackages(packageList);
}

/**
 * @summary Asserts for the method: "setAutoUpdateEnabled".
 */
function assertSetAutoUpdateEnabled() {
    deployJava.setAutoUpdateEnabled();
}

/**
 * @summary Asserts for the method: "setEarlyAccess".
 */
function assertSetEarlyAccess() {
    var enabled: string = 'true';
    deployJava.setEarlyAccess(enabled);
}

/**
 * @summary Asserts for the method: "setInstallerType".
 */
function assertSetInstallerType() {
    var type: string = 'kernel';
    deployJava.setInstallerType(type);
}

/**
 * @summary Asserts for the method: "testForMSVM".
 */
function assertTestForMSVM() {
    var result: boolean = deployJava.testForMSVM();
}

/**
 * @summary Asserts for the method: "testUsingActiveX".
 */
function assertTestUsingActiveX() {
    var version: string = '1.7.0';
    var result: boolean = deployJava.testUsingActiveX(version);
}

/**
 * @summary Asserts for the method: "testUsingMimeTypes".
 */
function assertTestUsingMimeTypes() {
    var version: string = '1.7.0';
    var result: boolean = deployJava.testUsingMimeTypes(version);
}

/**
 * @summary Asserts for the method: "testUsingPluginsArray".
 */
function assertTestUsingPluginsArray() {
    var version: string = '1.7.0';
    var result: boolean = deployJava.testUsingPluginsArray(version);
}

/**
 * @summary Asserts for the method: "versionCheck".
 */
function assertVersionCheck() {
    deployJava.versionCheck('1.x');
}

/**
 * @summary Asserts for the method: "writeAppletTag".
 */
function assertWriteAppletTag() {
    var attributes: Object = {
        code:'java2d.Java2DemoApplet.class',
        archive:'Java2Demo.jar',
        width:710,
        height:540
    };
    
    var parameters: Object = { fontSize:16, permissions:'sandbox' };
    deployJava.writeAppletTag(attributes, parameters);
}

/**
 * @summary Asserts for the method: "writeEmbedTag".
 */
function assertWriteEmbedTag() {
    deployJava.writeEmbedTag();
}