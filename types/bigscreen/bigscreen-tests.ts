import BigScreen = require("bigscreen");

BigScreen.onchange = function(element: Element) {
    console.log("Full-screen element " + element + " changed.");
}

BigScreen.onenter = function(element: Element) {
    console.log(BigScreen.element + " entered full-screen.");
};

BigScreen.onexit = function() {
    console.log("Exited full-screen.");
}

BigScreen.onerror = function(element: Element, reason: string) {
    console.log("Error sending " + element + " into full-screen: " + reason);
}

console.log("full-screen-enabled? " + BigScreen.enabled);

BigScreen.request(document.documentElement);
BigScreen.exit();
BigScreen.toggle(document.documentElement);
