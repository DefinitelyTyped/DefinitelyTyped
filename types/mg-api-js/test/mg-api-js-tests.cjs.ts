import GeotabApi = require("mg-api-js");

// @ts-expect-error
const noPassOrSession = new GeotabApi({ credentials: { database: "", userName: "" } });

const password = new GeotabApi({ credentials: { database: "", userName: "", password: "" } });
const sessionId = new GeotabApi({ credentials: { database: "", userName: "", sessionId: "" } });
const withOptions = new GeotabApi(
    { credentials: { database: "", userName: "", password: "" } },
    { fullResponse: true, rememberMe: true, timeout: 5000 },
);

const customStore = new GeotabApi(
    { credentials: { database: "", userName: "", sessionId: "" } },
    {
        newCredentialStore: {
            clear() {},
            get() {
                return false;
            },
            set(credentials, server) {},
        },
    },
);
const customStoreError = new GeotabApi(
    { credentials: { database: "", userName: "", sessionId: "" } },
    // @ts-expect-error
    { newCredentialStore: {} },
);

async function regularCall() {
    // @ts-expect-error
    password.call("Ad", { entity: {}, typeName: "Driver" });
    // @ts-expect-error
    password.call("Add", { typeName: "Driver" });
    // @ts-expect-error
    password.call("Add", { entity: {} });
    // @ts-expect-error
    const implicitCast: GeotabApi.Objects.Driver = await password.call("Add", { entity: {}, typeName: "Driver" });
    // $ExpectType Driver
    const explicitCast = (await password.call("Add", { entity: {}, typeName: "Driver" })) as GeotabApi.Objects.Driver;
    // $ExpectType GeotabObject
    const notCasted = await password.call("Add", { entity: {}, typeName: "Driver" });
}

async function multiCall() {
    // $ExpectType GeotabObject
    const a = await password.multiCall([
        // @ts-expect-error
        ["Add", { typeName: "Driver" }],
        ["Get", { typeName: "Driver" }],
    ]);
    // $ExpectType GeotabObject
    const b = await password.multiCall([
        ["Add", { typeName: "Driver", entity: {} }],
        ["Get", { typeName: "Driver" }],
        ["GenerateCaptcha", { id: "" }],
    ]);
}

async function misc() {
    // $ExpectType LoginResult
    const session = await password.getSession();

    // $ExpectType LoginResult
    const forget = await password.forget();
}

async function fullResponse() {
    // $ExpectType { data: { result: GeotabObject } }
    const response = await withOptions.call("Add", { entity: {}, typeName: "Driver" });
    // $ExpectType GeotabObject
    const response1 = await password.call("Add", { entity: {}, typeName: "Driver" });
}
