
/// <reference path="msportalfx-test.d.ts" />

import testFx = require('MsPortalFx-Test');

var galleryPackageName = "My.Package";
var bladeTitle = "A Service";
var resourceProvider = 'My.Provider';
var resourceType = 'myResourceType';
var resourceName = 'myResource';
var userName = 'johndoe@johndoe.com';
var password = '123';
var resourceId = '/subscriptions/123/resourceGroups/456/providers/My.Provider/myResourceType/myResource';
var extensionName = 'LocalExtension';
var label = 'Field label';
var extensionUrl = 'https://localhost:44300/';
var voidPromise: Q.Promise<void>;
var boolPromise: Q.Promise<boolean>;
var anyPromise: Q.Promise<any>;

var summaryBlade = new testFx.Blades.Blade(resourceName);

function TestPortal() {
    
    testFx.portal.portalContext.signInEmail = userName;
    testFx.portal.portalContext.signInPassword = password;
    testFx.portal.portalContext.features = [{ name: "greatfeature", value: "true" }];
    testFx.portal.portalContext.testExtensions = [{ name: extensionName, uri: extensionUrl }];

    anyPromise = testFx.portal.waitForElementLocated(summaryBlade.getLocator(), 30000);
    anyPromise = testFx.portal.quit();
    var createBladePromise = testFx.portal.openGalleryCreateBlade(galleryPackageName, bladeTitle, 20000);
    var browseResourcePromise = testFx.portal.openBrowseBlade(resourceProvider, resourceType, bladeTitle, 20000);
    var bladePromise = testFx.portal.openResourceBlade(resourceId, summaryBlade.title, 20000)
    var stringPromise = testFx.portal.takeScreenshot("TestPortal");
    var stringArrayPromise = testFx.portal.getBrowserLogs(testFx.LogLevel.All);
}

function TestBlades() {
    var blade = new testFx.Blades.Blade(resourceName);
    blade.clickCommand('Delete');

    var createBlade = new testFx.Blades.CreateBlade(bladeTitle);
    voidPromise = createBlade.actionBar.clickCreate();
    voidPromise = createBlade.actionBar.clickDelete();

    var browseBlade = new testFx.Blades.BrowseResourceBlade(bladeTitle);
    voidPromise = browseBlade.selectResource(resourceName);

    var pickerBlade = new testFx.Blades.PickerBlade(bladeTitle);
    pickerBlade.pickItem('abc');
}

function TestParts() {
    var part = new testFx.Parts.Part(summaryBlade.getLocator(), "Roles");
    voidPromise = part.click();
    boolPromise = part.isSelected();
    boolPromise = part.waitUntilLoaded();
    boolPromise = part.isLoaded();

    var resourceSummary = new testFx.Parts.ResourceSummaryPart(summaryBlade.getLocator());
    var count = resourceSummary.properties.length;
}

function TestControls() {
    var selector = new testFx.Controls.SelectorField(summaryBlade.getLocator(), label);
    voidPromise = selector.openPicker();

    var creatorAndSelector = new testFx.Controls.CreatorAndSelectorField(summaryBlade.getLocator(), label, label);
    var creatorAndSelectorPromise = creatorAndSelector.clickCreateNew();
    creatorAndSelectorPromise = creatorAndSelector.enterNewValue('XYZ');

    var textField = new testFx.Controls.TextField(summaryBlade.getLocator(), "Resource name");
    var textFieldPromise = textField.sendKeys(resourceName);
}

function TestActionBars() {
    var bar = new testFx.ActionBars.ActionBar(summaryBlade.getLocator());
    voidPromise = bar.clickCreate();
    voidPromise = bar.clickDelete();
}