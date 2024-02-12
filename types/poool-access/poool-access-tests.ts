// ACCESS

// $ExpectType Access
window.Access;
// $ExpectType Access
Access;
// $ExpectType Access
window.PooolAccess;
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
access.config(
    {
        debug: false,
    },
    true,
);

// $ExpectType AccessFactory
access.config(
    {
        debug: false,
        skip_audit_loader: false,
    },
    true,
);

//  $ExpectType AccessFactory
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
access.on("subscribeClick", () => {});

// $ExpectType AccessFactory
access.once("subscribeClick", () => {});

// $ExpectType AccessFactory
access.off("subscribeClick", () => {});

// $ExpectType null
access.destroy();

// AUDIT
// $ExpectType Audit
window.Audit;
// $ExpectType Audit
Audit;
// $ExpectType Audit
window.PooolAudit;
// $ExpectType Audit
PooolAudit;

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
