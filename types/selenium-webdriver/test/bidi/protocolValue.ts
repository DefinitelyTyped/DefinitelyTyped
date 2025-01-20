import {
    LocalValue,
    ReferenceValue,
    RegExpValue,
    RemoteReferenceType,
    RemoteValue,
} from "selenium-webdriver/bidi/protocolValue";

function TestLocalValue() {
    const local = new LocalValue(1);
    const localValue = local.toJson();
    const localValueMatch = localValue.value === 1;
    if (!localValueMatch) {
        throw new Error("LocalValue.toJson failure");
    }
}

function TestRemoteValue() {
    const remote = new RemoteValue({ value: 1 });
    const remoteValue = remote.value;
    const remoteValueMatch = remoteValue === 1;
    if (!remoteValueMatch) {
        throw new Error("RemoteValue.value failure");
    }
}

function TestReferenceValue() {
    const reference = new ReferenceValue("handle", "shareId");
    const referenceValue = reference.asMap();
    const referenceValueMatch = referenceValue.handle === "handle";
    if (!referenceValueMatch) {
        throw new Error("ReferenceValue.asMap failure");
    }
}

function TestRemoteReferenceType() {
    const remoteReferenceTypeMatch = RemoteReferenceType.findByName("node") !== null;
    if (!remoteReferenceTypeMatch) {
        throw new Error("RemoteReferenceType.findByName failure");
    }
}

function TestRegExpValue() {
    const regExp = new RegExpValue(/pattern/, "flags");
    const regExpValue = regExp.pattern;
    const regExpValueMatch = regExpValue.source === "pattern";
    if (!regExpValueMatch) {
        throw new Error("RegExpValue.pattern failure");
    }
}
