import * as tryer from "tryer";

// @ts-expect-error
tryer();

// @ts-expect-error
tryer({ action: null });

// @ts-expect-error
tryer({ fail: null });

// @ts-expect-error
tryer({ fail: null });

// @ts-expect-error
tryer({ interval: null });

// @ts-expect-error
tryer({ limit: null });

// @ts-expect-error
tryer({ pass: null });

// @ts-expect-error
tryer({ until: null });

// @ts-expect-error
tryer({ when: null });

// @ts-expect-error
tryer({ when: () => 1 });

// @ts-expect-error
tryer({ until: () => 1 });

// @ts-expect-error
tryer({ limit: "notNumber" });

// @ts-expect-error
tryer({ interval: "notNumber" });

tryer({});

tryer({
    action: done => {
        done();
    },
    fail: error => {
        error.message;
        error.name;
    },
    interval: 1,
    until: () => true,
    when: () => false,
    limit: 1,
    pass: () => {}
});
