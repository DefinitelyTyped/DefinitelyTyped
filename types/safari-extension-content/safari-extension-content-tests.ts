

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingExtensionToolbars/AddingExtensionToolbars.html#//apple_ref/doc/uid/TP40009977-CH5-SW7
var theBody = document.body;
// create a para and insert it at the top of the body
var element = document.createElement("p");
element.id = "status";
element.style.cssText = "float:right; color:red";
element.textContent = "Waiting...";
theBody.insertBefore(element, theBody.firstChild);
 
function replyToMessage(aMessageEvent: SafariExtensionMessageEvent) {
   if (aMessageEvent.name === "hey") {
    document.getElementById("status").textContent="Message received.";
    safari.self.tab.dispatchMessage("gotIt","Message acknowledged.");
    }
}
// register for message events
safari.self.addEventListener("message", replyToMessage, false);

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingContextualMenuItems/AddingContextualMenuItems.html#//apple_ref/doc/uid/TP40009977-CH4-SW15
document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event: MouseEvent) {
    safari.self.tab.setContextMenuEventUserInfo(event, (<Node>event.target).nodeName);
}

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/AddingContextualMenuItems/AddingContextualMenuItems.html#//apple_ref/doc/uid/TP40009977-CH4-SW16
document.addEventListener("contextmenu", handleContextMenu2, false);
 
function handleContextMenu2(event: MouseEvent) {
    if ((<Node>event.target).nodeName == "VIDEO") {
        event.preventDefault();
    }
}

// https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/MessagesandProxies/MessagesandProxies.html#//apple_ref/doc/uid/TP40009977-CH14-SW2
var initialVal=1;
var calculatedVal=0 ;
 
function doBigCalc(theData: number) {
    safari.self.tab.dispatchMessage("calcThis",theData);
}
 
function getAnswer(theMessageEvent: SafariExtensionMessageEvent) {
    if (theMessageEvent.name === "theAnswer") {
        calculatedVal=theMessageEvent.message;
        console.log(calculatedVal);
    }
}
safari.self.addEventListener("message", getAnswer, false);
 
doBigCalc(initialVal);

//https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/MessagesandProxies/MessagesandProxies.html#//apple_ref/doc/uid/TP40009977-CH14-SW9
function isItOkay(event: BeforeLoadEvent) {
    var myMessageData = event.url;
    var theAnswer = safari.self.tab.canLoad(event, myMessageData);
    if (theAnswer == "block") {
        event.preventDefault();
    }
}
 
document.addEventListener("beforeload", isItOkay, true);
