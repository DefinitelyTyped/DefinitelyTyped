

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AccessingResourcesWithinYourExtensionFolder/AccessingResourcesWithinYourExtensionFolder.html#//apple_ref/doc/uid/TP40009977-CH18-SW2
var img = document.createElement("img");
img.src = safari.extension.baseURI + 'Images/myImage.png'

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingExtensionToolbars/AddingExtensionToolbars.html#//apple_ref/doc/uid/TP40009977-CH5-SW2
const bars = safari.extension.bars;
const activeBrowserWindow = safari.application.activeBrowserWindow;
for (var i = 0; i < bars.length; ++i) {
    var bar = bars[i];
    if (bar.browserWindow === activeBrowserWindow && bar.identifier === "Audio Controls") {
        /* Do something. */
    }
}


var server = "http://developer.apple.com/";
var reflib = "safari/library/documentation/AppleApplications/Reference/"
function openInTab(source: string) {
    var newTab = (<SafariExtensionBar>safari.self).browserWindow.openTab();
    newTab.url = source;
}

function sendMessage() {
    document.getElementById("textField").innerHTML = "Sending message...";
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("hey", "there");
}

function respondToMessage(messageEvent: SafariExtensionMessageEvent) {
    if (messageEvent.name === "gotIt")
        document.getElementById("textField").innerHTML = messageEvent.message;
}

(<SafariExtensionBar>safari.self).browserWindow.addEventListener("message", respondToMessage, false);

const myBars = safari.extension.bars;
function updateAllBars() {
    for (var i = 0; i < myBars.length; ++i) {
        var barWindow = <any>myBars[i].contentWindow;
        barWindow.doSomething();
        var myWindow = safari.application.activeBrowserWindow;
        if (myBars[i].browserWindow == myWindow) {
            barWindow.doSomethingSpecial();
        }
    }
}

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingaGlobalHTMLPage/AddingaGlobalHTMLPage.html#//apple_ref/doc/uid/TP40009977-CH16-SW2
const myGlobal: any = safari.extension.globalPage.contentWindow;

function doButton() {
    myGlobal.calcThis(myGlobal.theAnswer);
    var mButton = <HTMLButtonElement>document.getElementById("myButton");
    mButton.value = ("Increment " + myGlobal.theAnswer);
}

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingButtonstotheMainSafariToolbar/AddingButtonstotheMainSafariToolbar.html#//apple_ref/doc/uid/TP40009977-CH3-SW12
var itemArray = safari.extension.toolbarItems;
for (var i = 0; i < itemArray.length; ++i) {
    var item = itemArray[i];
    if (item.identifier == "my lovely button") {
        /* Do something. */
    }
}

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingButtonstotheMainSafariToolbar/AddingButtonstotheMainSafariToolbar.html#//apple_ref/doc/uid/TP40009977-CH3-SW8
function performCommand(event: SafariCommandEvent) {
    if (event.command === "reload-page") {
        var currentURL = (<SafariExtensionToolbarItem>event.target).browserWindow.activeTab.url;
        if (currentURL)
            (<SafariExtensionToolbarItem>event.target).browserWindow.activeTab.url = currentURL;
    }
}

function validateCommand(event: SafariValidateEvent) {
    if (event.command === "reload-page") {
        // Disable the button if there is no URL loaded in the tab.
        (<SafariExtensionToolbarItem>event.target).disabled = !(<SafariExtensionToolbarItem>event.target).browserWindow.activeTab.url;
    }
}
 
// if event handlers are in the global HTML page,
// register with application:
safari.application.addEventListener("command", performCommand, false);
safari.application.addEventListener("validate", validateCommand, false);
// if event handlers are in an extension bar,
// register with parent window:
(<SafariExtensionBar>safari.self).browserWindow.addEventListener("command", performCommand, false);
(<SafariExtensionBar>safari.self).browserWindow.addEventListener("validate", validateCommand, false);

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingExtensionMenus/AddingExtensionMenus.html#//apple_ref/doc/uid/TP40009977-CH20-SW8
var myMenu = safari.extension.createMenu("menuId");
safari.extension.removeMenu("menuId");
myMenu.removeMenuItem(0);
myMenu.appendMenuItem("identifier", "title");
myMenu.insertMenuItem(1, "identifier", "title");
myMenu.appendSeparator("identifier");
myMenu.insertSeparator(1, "identifier");

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingPopovers/AddingPopovers.html#//apple_ref/doc/uid/TP40009977-CH21-SW7
var validateHandler = (event: SafariValidateEvent) => {
    if ((<SafariExtensionPopover>event.target).identifier !== "myToolbarItemID") return;
};
var popoverHandler = (event: SafariEvent) => {
    if ((<SafariExtensionPopover>event.target).identifier !== "myToolbarItemID") return;
};
safari.application.addEventListener("validate", validateHandler, true);
safari.application.addEventListener("popover", popoverHandler, true);

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingPopovers/AddingPopovers.html#//apple_ref/doc/uid/TP40009977-CH21-SW8
var width = 400;
var height = 400;
var myPop = safari.extension.createPopover("myPopoverID", safari.extension.baseURI + "myFile.html", width, height);

var myToolbarItem = safari.extension.toolbarItems[0];
myToolbarItem.popover = myPop;
myToolbarItem.popover = null;
safari.extension.removePopover("myPopoverID");

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingContextualMenuItems/AddingContextualMenuItems.html#//apple_ref/doc/uid/TP40009977-CH4-SW17
safari.application.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event: SafariExtensionContextMenuEvent) {
    if (event.userInfo === "IMG") {
        event.contextMenu.appendContextMenuItem("enlarge", "Enlarge Item");
    }
}

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/MessagesandProxies/MessagesandProxies.html#//apple_ref/doc/uid/TP40009977-CH14-SW2
function bigCalc(startVal: number, event: SafariExtensionMessageEvent) {
    // imagine hundreds of lines of code here...
    var endVal = startVal + 2;
    // return to sender
    (<SafariBrowserTab>event.target).page.dispatchMessage("theAnswer", endVal);
}

function respondToMessage2(theMessageEvent: SafariExtensionMessageEvent) {
    if (theMessageEvent.name === "calcThis") {
        var startVal = theMessageEvent.message;
        bigCalc(startVal, theMessageEvent);
    }
}

safari.application.addEventListener("message", respondToMessage2, false);

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/ExtensionSettings/ExtensionSettings.html#//apple_ref/doc/uid/TP40009977-CH11-SW13
var myVolume: number;
function volumeChanged(event: SafariExtensionSettingsChangeEvent) {
    if (event.key == "volume") {
        myVolume = event.newValue;
    }
}

safari.extension.settings.addEventListener("change", volumeChanged, false);
safari.extension.settings["volume"] = myVolume;
safari.extension.settings.setItem("volume", myVolume);
safari.extension.secureSettings["volume"] = myVolume;
safari.extension.secureSettings.setItem("volume", myVolume);