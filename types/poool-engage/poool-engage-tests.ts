import { Poool } from "poool-engage";

// $ExpectType Engage
Engage;

// $ExpectType boolean
Engage.isPoool;

// $ExpectType Engage
window.Engage;

// $ExpectType boolean
window.Engage.isPoool;

// $ExpectType Engage
globalThis.Engage;

// $ExpectType boolean
globalThis.Engage.isPoool;

// $ExpectType Engage
PooolEngage;

// $ExpectType boolean
PooolEngage.isPoool;

// $ExpectType Engage
window.PooolEngage;

// $ExpectType boolean
window.PooolEngage.isPoool;

// $ExpectType Engage
globalThis.PooolEngage;

// $ExpectType boolean
globalThis.PooolEngage.isPoool;

// $ExpectType Engage
Engage.noConflict();

// $ExpectType Engage
Engage.init("key-string");

const engage = Engage.init("key-string");

// $ExpectType Promise<EngageElement>
engage.createElement("key", "value");

// $ExpectType Engage
engage.config(
    {
        debug: false,
    },
    true,
);

// $ExpectType Engage
engage.config(
    {
        autoPageViews: false,
        debug: false,
    },
);

// $ExpectType Engage
engage.config(
    {
        locale: "en",
        stripePublicKey: "pk_test_123",
    },
    true,
);

// $ExpectType Engage
engage.config("key", "value", true);

// $ExpectType Engage
engage.config("key", false, true);

// $ExpectType Engage
engage.texts("key", "value", false, "en");

// $ExpectType Engage
engage.texts("form_error_invalid_email_field", "value", false, "en");

// $ExpectType Engage
engage.texts(
    {
        key: "value",
    },
    false,
    "en",
);

// $ExpectType Engage
engage.variables("key", "value");

// $ExpectType Engage
engage.variables({
    key: "value",
});

// $ExpectType Engage
engage.variables("variable", false);

// $ExpectType Engage
engage.variables({
    variable: "value",
    variable2: true,
    variable3: 4,
});

// $ExpectType Engage
engage.on("click", () => {}, { once: false });

// $ExpectType Engage
engage.on("destroy", () => {}, { once: true });

// $ExpectType Engage
engage.on("error", () => {});

// $ExpectType Engage
engage.on("formSubmit", () => {});

// $ExpectType Engage
engage.on("ready", () => {});

// $ExpectType Engage
engage.on("seen", () => {});

// $ExpectType Engage
engage.off("click", () => {});

// $ExpectType Engage
engage.off("destroy", () => {});

// $ExpectType Engage
engage.off("error", () => {});

// $ExpectType Engage
engage.off("formSubmit", () => {});

// $ExpectType Engage
engage.off("ready", () => {});

// $ExpectType Engage
engage.off("seen", () => {});
// $ExpectType Engage
engage.on("onClick", () => {});

// $ExpectType Engage
engage.on("onDestroy", () => {});

// $ExpectType Engage
engage.on("onError", () => {});

// $ExpectType Engage
engage.on("onFormSubmit", () => {});

// $ExpectType Engage
engage.on("onReady", () => {});

// $ExpectType Engage
engage.on("onSeen", () => {});

// $ExpectType Engage
engage.off("onClick", () => {});

// $ExpectType Engage
engage.off("onDestroy", () => {});

// $ExpectType Engage
engage.off("onError", () => {});

// $ExpectType Engage
engage.off("onFormSubmit", () => {});

// $ExpectType Engage
engage.off("onReady", () => {});

// $ExpectType Engage
engage.off("onSeen", () => {});

const element = Engage.createElement("key", "value");

// $ExpectType Promise<void>
element.then((e) => e.destroy());

// $ExpectType Promise<EngageElement[]>
engage.autoCreate();

// $ExpectType Promise<EngageElement[]>
engage.autoCreate({ filters: ["filter"] });

// $ExpectType { id: string; type: "visitsPerDay" value: string;}
const display: Poool.EngageDisplayConditions = {
    id: "id",
    type: "visitsPerDay",
    value: "desktop",
};
