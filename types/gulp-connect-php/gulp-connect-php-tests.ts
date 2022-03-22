import connect = require('gulp-connect-php');

// No arguments passsed
connect.server();
// Empty options and no callback
connect.server({});
// Empty options and callback
connect.server({}, err => {
    if (err) throw err;
});

// All options and no callback
connect.server({
    port: 8080,
    hostname: 'localhost',
    base: '../',
    open: true,
    bin: '../php',
    root: '/php',
    stdio: 'inherit',
    configCallback: (_type, collection) => collection,
    debug: true,
    ini: 'foo',
    router: 'foo',
});

// Mutating config options with configCallback
connect.server({
    configCallback(type, collection) {
        if (type === connect.OPTIONS_PHP_CLI_ARR) {
            collection.push('--abc');
        } else if (type === connect.OPTIONS_SPAWN_OBJ) {
            collection.env = { CUSTOM_ENV_VAR: 'abc' };
        }
        return collection;
    },
});

connect.server({
    configCallback(type) {
        if (type === connect.OPTIONS_PHP_CLI_ARR) {
            return ['--abc'];
        } else {
            return { foo: 'abc' };
        }
    },
});

// Killing server
connect.closeServer(result => {
    result; // $ExpectType boolean | undefined
});

// Instance of class
const connectInstance = new connect();
connectInstance.server({}, err => {
    err; // $ExpectType Error | undefined
    if (err) throw err;
    connectInstance.port; // $ExpectType number
    connectInstance.closeServer(result => {
        result; // $ExpectType boolean | undefined
    });
});

// Deprecated compat property
// Shouldn't really be used like this, but these properties do exist
connect.compat.server(
    {
        configCallback(type, collection) {
            if (type === connect.compat.OPTIONS_SPAWN_OBJ) collection.foo = 'bar';
            else if (type === connect.compat.OPTIONS_PHP_CLI_ARR) collection.push('--foo');

            return collection;
        },
    },
    err => {
        err; // $ExpectType Error | undefined
        if (err) throw err;
        connect.compat.port; // $ExpectType number
        connect.compat.closeServer(result => {
            result; // $ExpectType boolean | undefined
        });
    },
);
