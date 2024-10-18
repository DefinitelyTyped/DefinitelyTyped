import { RealmInfo, RealmType } from "selenium-webdriver/bidi/realmInfo";

function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Test failed");
    }
}

function TestRealmInfo() {
    // Test RealmType
    assert(RealmType.AUDIO_WORKLET === "audio-worklet", "RealmType.AUDIO_WORKLET failed");
    assert(RealmType.findByName("audio-worklet") === "audio-worklet", "RealmType.findByName failed");

    // Test RealmInfo
    const realmInfo = new RealmInfo("realmId", "origin", "realmType");
    assert(realmInfo.realmId === "realmId", "RealmInfo.realmId failed");
    assert(realmInfo.origin === "origin", "RealmInfo.origin failed");
    assert(realmInfo.realmType === "realmType", "RealmInfo.realmType failed");

    // Test RealmInfo.fromJson
    const realmInfoFromJson = RealmInfo.fromJson({ type: "audio-worklet", realm: "realmId", origin: "origin" });
    assert(realmInfoFromJson.realmId === "realmId", "RealmInfo.fromJson failed");
    assert(realmInfoFromJson.origin === "origin", "RealmInfo.fromJson failed");
    assert(realmInfoFromJson.realmType === "audio-worklet", "RealmInfo.fromJson failed");

    // Test WindowRealmInfo
    const windowRealmInfo = new WindowRealmInfo("realmId", "origin", "window", "browsingContext", "sandbox");
    assert(windowRealmInfo.realmId === "realmId", "WindowRealmInfo.realmId failed");
    assert(windowRealmInfo.origin === "origin", "WindowRealmInfo.origin failed");
    assert(windowRealmInfo.realmType === "window", "WindowRealmInfo.realmType failed");
    assert(windowRealmInfo.browsingContext === "browsingContext", "WindowRealmInfo.browsingContext failed");
    assert(windowRealmInfo.sandbox === "sandbox", "WindowRealmInfo.sandbox failed");
}

TestRealmInfo();
