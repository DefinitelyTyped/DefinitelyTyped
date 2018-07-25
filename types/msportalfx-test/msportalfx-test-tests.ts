import * as Q from 'q';
import testFx = require('msportalfx-test');

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
var stringPromise: Q.Promise<string>;

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
    anyPromise = testFx.portal.waitUntilElementDoesNotContainAttribute(testFx.Locators.By.className('part'), 'class', 'invalid');
    voidPromise = testFx.portal.goHome();
    boolPromise = testFx.portal.waitForElementVisible(summaryBlade.getLocator());
    var anyArrayPromise = testFx.portal.waitForElementsLocated(summaryBlade.getLocator());
    var voidPromise = testFx.portal.executeScript<void>("console.log('hello from script');");
    stringPromise = testFx.portal.getCurrentUrl();
}

function TestBlades() {
    var blade = new testFx.Blades.Blade(resourceName);
    var bladePromise = blade.clickCommand('Delete');
    var tilesPromise = blade.getTiles();

    var createBlade = new testFx.Blades.CreateBlade(bladeTitle);
    voidPromise = createBlade.actionBar.createButton.click();

    var browseBlade = new testFx.Blades.BrowseResourceBlade(bladeTitle);
    voidPromise = browseBlade.selectResource(resourceName);

    var pickerBlade = new testFx.Blades.PickerBlade(bladeTitle);
    pickerBlade.pickItem('abc');

    var specPickerBlade = new testFx.Blades.SpecPickerBlade(bladeTitle);
    specPickerBlade.pickSpec('S2');

    var quickStartBlade = new testFx.Blades.QuickStartBlade();
    voidPromise = quickStartBlade.clickLink('Learn more');

    var usersBlade = new testFx.Blades.UsersBlade();
}

function TestParts() {
    var part = new testFx.Parts.Part(summaryBlade.getLocator(), "Roles");
    voidPromise = part.click();
    boolPromise = part.isSelected();
    boolPromise = part.waitUntilLoaded();
    boolPromise = part.isLoaded();
    boolPromise = part.isClickable();
    boolPromise = part.hasError();

    var resourceSummary = new testFx.Parts.ResourceSummaryPart(summaryBlade.getLocator());
    var count = resourceSummary.properties.length;
    voidPromise = resourceSummary.quickStartHotSpot.click();
    voidPromise = resourceSummary.accessHotSpot.click();

    var pricingTier = new testFx.Parts.PricingTierPart(summaryBlade.getLocator());
    voidPromise = pricingTier.click();

    var tile = new testFx.Parts.Tile(summaryBlade.getLocator());
    voidPromise = tile.tryPin();
    var part: testFx.Parts.Part = tile.getPart();
    voidPromise = tile.waitUntilLoaded();
}

function TestControls() {
    var selector = new testFx.Controls.SelectorField(summaryBlade.getLocator(), label);
    voidPromise = selector.openPicker();

    var creatorAndSelector = new testFx.Controls.CreatorAndSelectorField(summaryBlade.getLocator(), label, label);
    var creatorAndSelectorPromise = creatorAndSelector.clickCreateNew();
    creatorAndSelectorPromise = creatorAndSelector.enterNewValue('XYZ');

    var textField = new testFx.Controls.TextField(summaryBlade.getLocator(), "Resource name");
    var textFieldPromise = textField.sendKeys(resourceName);

    var hotSpot = new testFx.Controls.HotSpot(summaryBlade.getLocator());
    boolPromise = hotSpot.isSelected();
}

function TestActionBars() {
    var createBar = new testFx.ActionBars.CreateActionBar(summaryBlade.getLocator());
    voidPromise = createBar.createButton.click();
    
    var deleteBar = new testFx.ActionBars.DeleteActionBar(summaryBlade.getLocator());
    voidPromise = deleteBar.deleteButton.click();
    voidPromise = deleteBar.cancelButton.click();

    var pickerBar = new testFx.ActionBars.PickerActionBar(summaryBlade.getLocator());
    voidPromise = pickerBar.selectButton.click();
}

function TestCommands() {
    var menu = new testFx.Commands.ContextMenu();
    var itemName = "Pin";
    boolPromise = menu.hasItem(itemName);
    voidPromise = menu.clickItem(itemName);

    var item = new testFx.Commands.ContextMenuItem(menu.getLocator(), itemName);
    voidPromise = item.click();
}

function TestStartBoard() {
    var board = new testFx.StartBoard();
    var tilesPromise = board.getTiles();
}

function TestNotifications() {
    var menu = new testFx.Notifications.NotificationsMenu();
    menu.waitForNewNotification("success").then((notification) => {
        stringPromise = notification.getDescription();
    });
}

function TestTests() {
    boolPromise = testFx.Tests.Parts.canPinAllBladeParts(resourceId, bladeTitle);
}