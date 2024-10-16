// ACCESS

// $ExpectType Access
window.Access;

// $ExpectType boolean
window.Access.isPoool;

// $ExpectType Access
globalThis.Access;

// $ExpectType boolean
globalThis.Access.isPoool;

// $ExpectType Access
Access;

// $ExpectType boolean
Access.isPoool;

// $ExpectType Access
window.PooolAccess;

// $ExpectType boolean
window.Access.isPoool;

// $ExpectType boolean
window.PooolAccess.isPoool;

// $ExpectType Access
globalThis.PooolAccess;

// $ExpectType boolean
globalThis.Access.isPoool;

// $ExpectType boolean
globalThis.PooolAccess.isPoool;

// $ExpectType Access
PooolAccess;

// $ExpectType Access
Access.noConflict();

// $ExpectType AccessFactory
Access.init("key-string");

const access = Access.init("key-string");

// $ExpectType AccessFactory
access.createPaywall({
    target: "target",
    content: "content",
    mode: "hide",
    pageType: "premium",
    percent: 80,
});

// $ExpectType AccessFactory
access.createPaywall({
    target: "target",
    content: "content",
    mode: "hide",
    pageType: "page",
    percent: 80,
});

// $ExpectType AccessFactory
access.config(
    {
        debug: false,
    },
    true,
);

// $ExpectType AccessFactory
access.config(
    {
        context: ["context-1", "context-2"],
    },
);

// $ExpectType AccessFactory
access.config(
    {
        debug: false,
        skip_audit_loader: false,
    },
    true,
);

// $ExpectType AccessFactory
access.config("key", "value", true);

// $ExpectType AccessFactory
access.config("key", false, true);

// $ExpectType AccessFactory
access.texts("key", "value", false, "en");

// $ExpectType AccessFactory
access.texts(
    {
        key: "value",
    },
    false,
    "en",
);

// $ExpectType AccessFactory
access.styles("key", "value", false);

// $ExpectType AccessFactory
access.styles(
    {
        brand_cover: "value",
    },
    false,
);

// $ExpectType AccessFactory
access.variables("key", "value");

// $ExpectType AccessFactory
access.variables({
    key: "value",
});

// $ExpectType AccessFactory
access.variables("variable", false);

// $ExpectType AccessFactory
access.variables({
    variable: "value",
    variable2: true,
    variable3: 4,
});

// $ExpectType AccessFactory
access.on("subscribeClick", () => {});

// $ExpectType AccessFactory
access.on("onSubscribeClick", () => {});

// $ExpectType AccessFactory
access.once("subscribeClick", () => {});

// $ExpectType AccessFactory
access.off("subscribeClick", () => {});

// $ExpectType null
access.destroy();

// AUDIT
// $ExpectType Audit
window.Audit;

// $ExpectType boolean
window.Audit.isPoool;

// $ExpectType Audit
globalThis.Audit;

// $ExpectType boolean
globalThis.Audit.isPoool;

// $ExpectType Audit
Audit;

// $ExpectType boolean
Audit.isPoool;

// $ExpectType Audit
window.PooolAudit;

// $ExpectType boolean
window.PooolAudit.isPoool;

// $ExpectType Audit
globalThis.PooolAudit;

// $ExpectType boolean
globalThis.PooolAudit.isPoool;

// $ExpectType Audit
PooolAudit;

// $ExpectType boolean
PooolAudit.isPoool;

// $ExpectType Audit
Audit.noConflict();

// $ExpectType Audit
Audit.init("key-string");

const audit = Audit.init("key-string");

// $ExpectType Audit
audit.config(
    {
        debug: false,
    },
    true,
);

// $ExpectType Audit
audit.config({ context: ["context-1", "context-2"] });

// $ExpectType Promise<boolean>
audit.sendEvent("page-view", { type: "premium" }, { key: "value" });

// $ExpectType Audit
audit.config({ debug: false }, true);

// $ExpectType Audit
audit.config("key", "value", true);

// $ExpectType Audit
audit.config("key", false, true);

// $ExpectType Audit
audit.on("subscribeClick", () => {});

// $ExpectType Audit
audit.once("subscribeClick", () => {});

// $ExpectType Audit
audit.off("subscribeClick", () => {});
