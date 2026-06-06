import * as chmln from "@chamaeleonidae/chmln";

// $ExpectType void
chmln.init("token");

// $ExpectType void
chmln.init("token", { fastUrl: "https://example.com" });

// $ExpectType void
chmln.init("token", { forceOverride: true });

// @ts-expect-error
chmln.init(42);

// @ts-expect-error
chmln.init("token", 42);

// @ts-expect-error
chmln.init("token", { foo: "bar" });

// $ExpectType void
chmln.identify("id");

// $ExpectType void
chmln.identify(1, {
    email: "jdoe@airbnb.com",
    created: "2017-07-01T03:21:10Z",
    name: "James Doe",
    role: "Admin",
    logins: 39,
    project: "12a34b56",
    company: {
        uid: "590b80e5f433ea81b96c9bf7",
        created: "2017-07-01T03:21:10Z",
        name: "airbnb",
        trial_ends: "2017-08-01T03:21:10Z",
        version: "1.56",
        plan: "Gold",
        spend: "sales rep",
    },
});

// @ts-expect-error
chmln.identify("id", 42);

// @ts-expect-error
chmln.identify("id", ["foo", "bar"]);

// $ExpectType void
chmln.track("event");

// @ts-expect-error
chmln.track(42);
