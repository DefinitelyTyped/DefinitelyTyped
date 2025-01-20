import { NonPrimitiveType, PrimitiveType, RemoteType } from "selenium-webdriver/bidi/protocolType";

function TestPrimitiveType() {
    const primitiveTypeMatch = PrimitiveType.findByName("undefined") !== null;
    if (!primitiveTypeMatch) {
        throw new Error("PrimitiveType.findByName failure");
    }
}

function TestNonPrimitiveType() {
    const nonPrimitiveTypeMatch = NonPrimitiveType.findByName("array") !== null;
    if (!nonPrimitiveTypeMatch) {
        throw new Error("NonPrimitiveType.findByName failure");
    }
}

function TestRemoteType() {
    const remoteTypeMatch = RemoteType.findByName("symbol") !== null;
    if (!remoteTypeMatch) {
        throw new Error("RemoteType.findByName failure");
    }
}
