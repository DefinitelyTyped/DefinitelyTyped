import { RemoteValue } from "selenium-webdriver/bidi/remoteValue";
import { Message, Source, source as SourceClass } from "selenium-webdriver/bidi/scriptTypes";

function testMessageClass() {
    const source: Source = {
        realm: "testRealm",
        context: "testContext",
    };

    const remoteValue: RemoteValue = {
        type: "string",
        value: "testValue",
    };

    const message = new Message("testChannel", remoteValue, source);

    if (message.channel !== "testChannel") {
        console.error("Failed: Message channel does not match expected value");
    } else {
        console.log("Passed: Message channel matches expected value");
    }

    if (message.data !== remoteValue) {
        console.error("Failed: Message data does not match expected value");
    } else {
        console.log("Passed: Message data matches expected value");
    }

    if (message.source !== source) {
        console.error("Failed: Message source does not match expected value");
    } else {
        console.log("Passed: Message source matches expected value");
    }
}

function testSourceClass() {
    const sourceInstance: Source = {
        realm: "testRealm",
        context: "testContext",
    };

    const sourceObj = new SourceClass(sourceInstance);

    if (sourceObj.browsingContextId !== null) {
        console.error("Failed: browsingContextId should be null");
    } else {
        console.log("Passed: browsingContextId is null as expected");
    }

    if (sourceObj.realmId !== "testRealm") {
        console.error("Failed: realmId does not match expected value");
    } else {
        console.log("Passed: realmId matches expected value");
    }
}

testSourceClass();
testMessageClass();
