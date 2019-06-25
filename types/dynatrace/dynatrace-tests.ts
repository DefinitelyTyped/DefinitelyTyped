function customActions() {
    const actionId = dynaTrace.enterAction("my custom action", "click");
    dynaTrace.leaveAction(actionId);
}

function customVisit() {
    dynaTrace.tagVisit("My Custom Visit");
    /** after some code execution we can end the visit early */
    dynaTrace.endVisit();
}

function signal() {
    dynaTrace.signalLoadStart();
    dynaTrace.signalLoadEnd();
    dynaTrace.signalOnLoadStart();
    dynaTrace.signalOnLoadEnd();

    dynaTrace.sendSignal(false, false, true);
}

function load() {
    dynaTrace.setLoadEndManually();
    dynaTrace.incrementOnLoadEndMarkers();
}

function automaticDetection() {
    dynaTrace.setAutomaticActionDetection(false);
}

function reporting() {
    dynaTrace.reportError(" Custom error");
    const actionId = dynaTrace.enterAction("second action", "keypress");
    dynaTrace.reportError("Second custom error", actionId);

    dynaTrace.reportEvent("My Event");
    dynaTrace.reportString("My Key", "Custom value");
    dynaTrace.reportValue("Value Key", 2);
    dynaTrace.reportWarning("Warning");
}

function thirdParty() {
    const url = "http://somescript.com";
    dynaTrace.startThirdParty("s", url);
    dynaTrace.stopThirdParty(url, true, Date.now() - 1000, Date.now());
}

function listener() {
    const clickListener = (key: string) => ({});
    dynaTrace.addPageLeavingListener(clickListener);
}

function streaming() {
    dynaTrace.addStreamingNode(
        "http://youtube.com",
        120,
        true,
        false,
        120,
        30,
        10,
        5,
        "_info_"
    );
}

function userInput() {
    const userInput = dynaTrace.beginUserInput("", "click", "RETURN", 23);
    dynaTrace.endUserInput(userInput);
}

function Xhr() {
    const enterActionId = dynaTrace.enterXhrAction(
        "Angular Http request",
        0,
        false
    );
    dynaTrace.enterXhrCallback(enterActionId);
    dynaTrace.leaveXhrCallback(enterActionId);
    dynaTrace.leaveXhrAction(enterActionId);
}

function appVersion() {
    dynaTrace.setAppVersion("1.1.1");
}

function metadata() {
    dynaTrace.setMetaData("some metadata", "value");
}
