import * as tryer from "tryer";

tryer(); // $ExpectError

// $ExpectError
tryer({ action: null });

// $ExpectError
tryer({ fail: null });

// $ExpectError
tryer({ fail: null });

// $ExpectError
tryer({ interval: null });

// $ExpectError
tryer({ limit: null });

// $ExpectError
tryer({ pass: null });

// $ExpectError
tryer({ until: null });

// $ExpectError
tryer({ when: null });

// $ExpectError
tryer({ when: () => 1 });

// $ExpectError
tryer({ until: () => 1 });

// $ExpectError
tryer({ limit: "notNumber" });

// $ExpectError
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
