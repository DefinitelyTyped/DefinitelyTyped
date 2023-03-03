const access = Access.init('key-string');

// $ExpectType AccessFactory
access.config({
    debug: false,
}, true);

// $ExpectType AccessFactory
access.on('error', (err) => {});

// $ExpectType AccessFactory
access.createPaywall({});
