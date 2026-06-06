import keychain = require("keychain");

/**
 * setPassword
 */

// @ts-expect-error
// Another error when missing options
keychain.setPassword({ account: "some-account", password: "some-pass" }, err => {
    if (err) {
        err; // $ExpectType KeychainError
    }
});

// Should pass
keychain.setPassword({ account: "some-account", password: "some-pass", service: "some-service" });

// Should pass
keychain.setPassword({ account: "some-account", password: "some-pass", service: "some-service" }, err => {
    if (err) {
        err; // $ExpectType KeychainError
    }
});

/**
 * getPassword
 */

// @ts-expect-error
// Errors when doesn't have the required properties
keychain.getPassword({ account: "some-account" }, (err, password) => {
    if (err) {
        err; // $ExpectType KeychainError
        return;
    }

    return password;
});

// Should pass
keychain.getPassword({ account: "some-account", service: "some-service" }, (err, password) => {
    if (err) {
        err; // $ExpectType KeychainError
        return;
    }

    return password;
});

/**
 * deletePassword
 */

// @ts-expect-error
// Errors when doesn't have the required properties
keychain.deletePassword({ account: "some-account" }, err => {
    if (err) {
        err; // $ExpectType KeychainError
        return;
    }
});

// Should pass
keychain.getPassword({ account: "some-account", service: "some-service" }, err => {
    if (err) {
        err; // $ExpectType KeychainError
        return;
    }
});
