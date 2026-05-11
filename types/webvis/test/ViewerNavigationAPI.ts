function test(testContext: webvis.ContextAPI, testViewer: webvis.ViewerAPI): void {
    testViewer.changeSetting(webvis.ViewerSettingStrings.NAVIGATION_MODE, webvis.NavigationMode.WEBVIS);
    testViewer.changeSetting(webvis.ViewerSettingStrings.NAVIGATION_MODE, webvis.NavigationMode.XR_TURNTABLE);
}
