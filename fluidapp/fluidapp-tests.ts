/// <reference path="index-userscript.d.ts" />

// Setting Dock badge
window.fluid.dockBadge = "10";

// Setting Dock menu items
window.fluid.addDockMenuItem("mytitle", () => {});
window.fluid.removeDockMenuItem("mytitle");

// Showing Growl notifications
window.fluid.showGrowlNotification({
    title: "title",
    description: "description",
    priority: 1,
    sticky: false,
    identifier: "foo",
    onclick: () => {},
    icon: new HTMLImageElement()
});
window.fluid.showGrowlNotification({
    icon: ""
});

// (Un)hide SSB application
window.fluid.hide();
window.fluid.unhide();

// Activate/terminate SSB application
window.fluid.activate();
window.fluid.terminate();

// Eval local JavaScript files
window.fluid.include("");

// Get SSB application path values
const applicationPath = window.fluid.applicationPath;
const resourcePath = window.fluid.resourcePath;
const userscriptPath = window.fluid.userscriptPath;

// Get user attention
window.fluid.requestUserAttention();
window.fluid.beep();
window.fluid.playSound("Basso");