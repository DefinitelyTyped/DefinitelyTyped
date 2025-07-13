import Basil = require("basil.js");

const basil1 = Basil();
const basil2 = new Basil();

const customOptions: Basil.BasilOptions = {
    namespace: "yujiosaka",
    storages: ["local", "session", "cookie", "memory"],
    keyDelimiter: ":",
    raw: false,
    expireDays: 7,
    domain: "example.com",
    secure: true,
    sameSite: "lax",
};

basil1.init(customOptions);

basil1.set("stringKey", "stringValue");
basil1.set("numberKey", 123);
basil1.set("booleanKey", true);

const strVal: string | null = basil1.get("stringKey");
const numVal: number | null = basil1.get("numberKey");
const boolVal: boolean | null = basil1.get("booleanKey");

basil1.remove("booleanKey");

basil1.reset({ namespace: "myApp" });
basil1.reset();

const allKeys: string[] = basil1.keys();

const mapOfKeys = basil1.keysMap();

const canUseLocal: boolean = basil1.check("local");

if (Basil.localStorage.check()) {
    Basil.localStorage.set("localKey", "localValue");
    const localVal: string | null = Basil.localStorage.get("localKey");
    Basil.localStorage.remove("localKey");
    Basil.localStorage.reset();
}

if (Basil.sessionStorage.check()) {
    Basil.sessionStorage.set("sessionKey", { user: "alice" });
    const sessionVal = Basil.sessionStorage.get<{ user: string }>("sessionKey");
    Basil.sessionStorage.remove("sessionKey");
}

if (Basil.memory.check()) {
    Basil.memory.set("memKey", [1, 2, 3]);
    const memVal = Basil.memory.get<number[]>("memKey");
    Basil.memory.reset();
}

if (Basil.cookie.check({ secure: true })) {
    Basil.cookie.set("cookieKey", "cookieValue", {
        domain: "example.com",
        expireDays: 10,
        sameSite: "none",
        secure: true,
    });
    const cookieVal = Basil.cookie.get("cookieKey");
    Basil.cookie.remove("cookieKey");
}

basil2.set([1, "compositeKey"], "value for a composite key");
const compositeValue = basil2.get([1, "compositeKey"]);

basil2.setOptions({ namespace: "updatedNamespace" });
