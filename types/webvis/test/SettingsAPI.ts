function test(testContext: webvis.ContextAPI): void {
    const hasChanged: boolean = testContext.changeSetting(webvis.SettingStrings.BATCHED_QUERIES, true);

    testContext.importConfig({
        [webvis.SettingStrings.BATCHED_QUERIES]: true,
        [webvis.SettingStrings.FRONT_PLANE_AXIS]: webvis.FrontPlaneAxis.POS_X_POS_Y,
    });

    const booleanValue: boolean = testContext.readSetting(webvis.SettingStrings.BATCHED_QUERIES);

    const enumValue: webvis.FrontPlaneAxis = testContext.readSetting(webvis.SettingStrings.FRONT_PLANE_AXIS);

    const stringValue: string = testContext.readSetting(webvis.SettingStrings.APPLICATION_IDENTIFIER);

    const numberValue: number = testContext.readSetting(webvis.SettingStrings.MEASUREMENT_ANGULAR_TOLERANCE);

    testContext.resetSetting(webvis.SettingStrings.BATCHED_QUERIES);

    testContext.resetUserSettings();

    testContext.registerListener([webvis.EventType.SETTING_CHANGED], (event: webvis.SettingChangedEvent) => {
        console.log("Setting changed", event.setting, event.newValue, event.oldValue);
    });
}
