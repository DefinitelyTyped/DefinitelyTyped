/// <reference path="deployJava.d.ts" />

/**
 * @summary Test for the method: "allowPlugin".
 */
function testAllowPlugin() {
    var result: boolean = deployJava.allowPlugin();
}

/**
 * @summary Test for the method: "compareVersions".
 */
function testCompareVersions() {
    var installed = '1.8';
    var required = '1.7';
    
    var result = deployJava.compareVersions(installed, required);
}

/**
 * @summary Test for the method: "compareVersionToPattern".
 */
function testCompareVersionToPattern() {
    var version: string = '1.8';
    var patternArray: Array<string> = ['1.6', '1.7', '1.8'];
    var familyMatch: boolean = false;
    var minMatch: boolean = true;
    
    var result = deployJava.compareVersionToPattern(version, patternArray, familyMatch, minMatch);
}

/**
 * @summary Test for the method: "enableAlerts".
 */
function testEnableAlerts() {
    deployJava.enableAlerts();
}

/**
 * @summary Test for the method: "FFInstall".
 */
function testFFInstall() {
    var result: boolean = deployJava.FFInstall();
}

/**
 * @summary Test for the method: "getBrowser".
 */
function testGetBrowser() {
    var result: string = deployJava.getBrowser();
}

/**
 * @summary Test for the method: "getJPIVersionUsingMimeType".
 */
function testGetJPIVersionUsingMimeType() {
    deployJava.getJPIVersionUsingMimeType();
}

/**
 * @summary Test for the method: "getJREs".
 */
function testGetJREs() {
    var versions: Array<String> = deployJava.getJREs();
}

/**
 * @summary Test for the method: "getPlugin".
 */
function testGetPlugin() {
    var versions: HTMLElement = deployJava.getPlugin();
}

/**
 * @summary Test for the method: "IEInstall".
 */
function testIEInstall() {
    var result: boolean = deployJava.IEInstall();
}

/**
 * @summary Test for the method: "installJRE".
 */
function testInstallJRE() {
    var requestVersion: string = '1.8';
    var result: boolean = deployJava.installJRE(requestVersion);
}

/**
 * @summary Test for the method: "installLatestJRE".
 */
function testInstallLatestJRE() {
    var installCallback: Function = () => {};
    var result: boolean = deployJava.installLatestJRE(installCallback);
}

/**
 * @summary Test for the method: "isAutoInstallEnabled".
 */
function testIsAutoInstallEnabled() {
    var requestedJREVersion: string = '1.8';
    var result: boolean = deployJava.isAutoInstallEnabled();
    var result: boolean = deployJava.isAutoInstallEnabled(requestedJREVersion);
}

/**
 * @summary Test for the method: "isAutoUpdateEnabled".
 */
function testIsAutoUpdateEnabled() {
    var result: boolean = deployJava.isAutoUpdateEnabled();
}

/**
 * @summary Test for the method: "isCallbackSupported".
 */
function testIsCallbackSupported() {
    var result: boolean = deployJava.isCallbackSupported();
}

/**
 * @summary Test for the method: "isPlugin2".
 */
function testIsPlugin2() {
    var result: boolean = deployJava.isPlugin2();
}

/**
 * @summary Test for the method: "isPluginInstalled".
 */
function testIsPluginInstalled() {
    var result: boolean = deployJava.isPluginInstalled();
}

/**
 * @summary Test for the method: "isWebStartInstalled".
 */
function testIsWebStartInstalled() {
    var minimumVersion: string = '1.7';
    var result: boolean = deployJava.isWebStartInstalled();
    var result: boolean = deployJava.isWebStartInstalled(minimumVersion);
}

/**
 * @summary Test for the method: "launch".
 */
function testLaunch() {
    var jnlp: string = 'http://www.example.com/';
    var result: boolean = deployJava.launch(jnlp);
}

/**
 * @summary Test for the method: "launchWebStartApplication".
 */
function testLaunchWebStartApplication() {
    var jnlp: string = 'http://www.example.com/';
    deployJava.launchWebStartApplication(jnlp);
}

/**
 * @summary Test for the method: "poll".
 */
function testPool() {
    deployJava.poll();
}

/**
 * @summary Test for the method: "refresh".
 */
function testRefresh() {
    deployJava.refresh();
}

/**
 * @summary Test for the method: "runApplet".
 */
function testRunApplet() {
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
 * @summary Test for the method: "setAdditionalPackages".
 */
function testSetAdditionalPackages() {
    var packageList: string = 'javax.swing';
    var result: boolean = deployJava.setAdditionalPackages(packageList);
}

/**
 * @summary Test for the method: "setAutoUpdateEnabled".
 */
function testSetAutoUpdateEnabled() {
    deployJava.setAutoUpdateEnabled();
}

/**
 * @summary Test for the method: "setEarlyAccess".
 */
function testSetEarlyAccess() {
    var enabled: string = 'true';
    deployJava.setEarlyAccess(enabled);
}

/**
 * @summary Test for the method: "setInstallerType".
 */
function testSetInstallerType() {
    var type: string = 'kernel';
    deployJava.setInstallerType(type);
}

/**
 * @summary Test for the method: "testForMSVM".
 */
function testTestForMSVM() {
    var result: boolean = deployJava.testForMSVM();
}

/**
 * @summary Test for the method: "testUsingActiveX".
 */
function testTestUsingActiveX() {
    var version: string = '1.7.0';
    var result: boolean = deployJava.testUsingActiveX(version);
}

/**
 * @summary Test for the method: "testUsingMimeTypes".
 */
function testTestUsingMimeTypes() {
    var version: string = '1.7.0';
    var result: boolean = deployJava.testUsingMimeTypes(version);
}

/**
 * @summary Test for the method: "testUsingPluginsArray".
 */
function testTestUsingPluginsArray() {
    var version: string = '1.7.0';
    var result: boolean = deployJava.testUsingPluginsArray(version);
}

/**
 * @summary Test for the method: "versionCheck".
 */
function testVersionCheck() {
    deployJava.versionCheck('1.x');
}

/**
 * @summary Test for the method: "writeAppletTag".
 */
function testWriteAppletTag() {
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
 * @summary Test for the method: "writeEmbedTag".
 */
function testWriteEmbedTag() {
    deployJava.writeEmbedTag();
}