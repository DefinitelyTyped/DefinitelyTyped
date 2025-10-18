import { RemoteValue } from "selenium-webdriver/bidi/remoteValue";
import { Message, ScriptSource, Source } from "selenium-webdriver/bidi/scriptTypes";

function testMessageClass() {
    const scriptSource: ScriptSource = {
        realm: "testRealm",
        context: "testContext",
    };

    const source = new Source(scriptSource);

    const remoteValue: RemoteValue = {
        type: "string",
        value: "testValue",
    };

    const message = new Message("testChannel", remoteValue, source);

    // $ExpectType string
    message.channel;
    // $ExpectType RemoteValue
    message.data;
    // $ExpectType Source
    message.source;
}

function testSourceClass() {
    const scriptSource: ScriptSource = {
        realm: "testRealm",
        context: "testContext",
    };

    const source = new Source(scriptSource);

    // $ExpectType string | null
    source.browsingContextId;
    // $ExpectType string
    source.realmId;
}
