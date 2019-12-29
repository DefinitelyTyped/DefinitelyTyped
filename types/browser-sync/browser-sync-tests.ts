import browserSync = require("browser-sync");
import { EventEmitter } from "events";

(() => {
    //make sure that the interfaces are correctly exposed
    var bsInstance: browserSync.BrowserSyncInstance;
    var bsStatic: browserSync.BrowserSyncStatic;
    var opts: browserSync.Options;
})();

browserSync({
    ui: true
});

browserSync({
    ui: {
        port: 9000,
        weinre: {
            port: 9001
        }
    }
});

browserSync({
    files: "app/css/style.css"
});

browserSync({
    files: [
        "app/css/style.css",
        "app/js/*.js"
    ]
});

browserSync({
    files: [
        "app/css/style.css",
        "!app/js/*.js"
    ]
});

browserSync({
    files: [
        "wp-content/themes/**/*.css",
        {
            match: ["wp-content/themes/**/*.css"],
            fn: function (event, file) {
                /** Custom event handler **/
            }
        }
    ]
});

browserSync({
    watchEvents: [
        "change",
        "add",
        "unlink",
        "addDir",
        "unlinkDir"
    ]
});

browserSync({
    watch: true
});

browserSync({
    ignore: [
        "app/js/*.js"
    ]
});

browserSync({
    single: true
});

browserSync({
    watchOptions: {
        ignoreInitial: true,
        ignored: '*.txt'
    },
    files: ['./app']
});

browserSync({
    files: [
        {
            match: ["wp-content/themes/**/*.php"],
            fn: function (event, file) {
                /** Custom event handler **/
            },
            options: {
                ignored: '*.txt'
            }
        }
    ]
});

browserSync({
    server: "app"
});

// multiple base directory
browserSync({
    server: {
        baseDir: ["app", "dist"]
    }
});

browserSync({
    server: true
});

browserSync({
    server: {
        baseDir: "./"
    }
});

browserSync({
    server: {
        baseDir: "./",
        index: "index.htm"
    }
});

browserSync({
    server: {
        baseDir: "./",
        directory: true
    }
});

browserSync({
    server: {
        baseDir: "app",
        serveStaticOptions: {
            extensions: ["html"]
        }
    }
});

browserSync({
    proxy: "yourlocal.dev"
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyReq: function (proxyReq) {
            console.log(proxyReq);
        }
    }
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyReq: [
            function (proxyReq) {
                console.log(proxyReq);
            }
        ]
    }
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyRes: function (proxyResponse, req, res) {
            console.log(proxyResponse);
        }
    }
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyRes: [
            function (proxyResponse, req, res) {
                console.log(proxyResponse);
            }
        ]
    }
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyRes: function (res) {
            console.log(res);
        }
    }
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyRes: [
            function (res) {
                console.log(res);
            }
        ]
    }
});

browserSync({
    proxy: "https://yourlocal.dev",
    https: {
        key: "./path/to/the/key/file.key",
        cert: "./path/to/the/cert/file.cer"
    }
});

browserSync({
    port: 3000
});

browserSync({
    proxy: "http://yourlocal.dev",
    serveStatic: ['.', './app/css']
});

browserSync({
    proxy: "http://yourlocal.dev",
    serveStatic: [{
        route: '/assets',
        dir: 'tmp'
    }]
});

browserSync({
    proxy: "http://yourlocal.dev",
    serveStatic: [{
        route: ['/assets', '/content'],
        dir: 'tmp'
    }]
});

browserSync({
    proxy: "http://yourlocal.dev",
    serveStatic: [{
        route: '/assets',
        dir: ['./tmp', './app']
    }]
});

browserSync({
    serveStatic: ['.', './app', './temp'],
    serveStaticOptions: {
        extensions: ['html'] // pretty urls
    }
});

browserSync({
    https: true
});

browserSync({
    server: "./app",
    https: true
});

browserSync({
    server: "./app",
    https: {
        key: "./path/to/the/key/file.key",
        cert: "./path/to/the/cert/file.cer"
    }
});

browserSync({
    httpModule: "http2"
});

browserSync({
    ghostMode: {
        clicks: true,
        scroll: true,
        forms: {
            inputs: true,
            submit: true,
            toggles: true
        }
    },
    proxy: "https://yourlocal.dev"
});

/**
 * Not testing a bunch because they are either only string or boolean types.
 * ....Also just got lazy and tired of writing the simple ones.
 */

browserSync({
    snippetOptions: {

        // Ignore all HTML files within the templates folder
        blacklist: [
            "templates/*.html"
        ],
        // Provide a custom Regex for inserting the snippet.
        rule: {
            match: /<\/body>/i,
            fn: function (snippet, match) {
                return snippet + match;
            }
        }
    }
});

browserSync({
    rewriteRules: [
        {
            match: /Browsersync/g,
            fn: function (req, res, match) {
                return 'kittenz';
            }
        }
    ]
});

browserSync({
    rewriteRules: [
        {
            match: /(cats|kitten[sz]) are mediocre/g,
            replace: "$1 are excellent"
        }
    ]
});

var config = {
    server: {
        baseDir: "./"
    }
};

// config only
browserSync(config);

// config + callback
browserSync(config, function (err, bs) {
    if (!err) {
        console.log("BrowserSync is ready!");
    }
});

// browser reload
browserSync.reload();

// single file
browserSync.reload("styles.css");

// multiple files
browserSync.reload(["styles.css", "ie.css"]);

// streams support
browserSync.reload({ stream: true });

browserSync.notify("Compiling, please wait!");

browserSync.notify("HTML <span color='green'>is supported</span> too!");

// Since 1.3.0, specify a timeout
browserSync.notify("This message will only last a second", 1000);

browserSync(config, function (err, bs) {
    browserSync.exit();
});

console.log(browserSync.active); // false

browserSync(config, function (err, bs) {
    console.log(browserSync.active); // true
});

var evt = browserSync.emitter;

evt.on("init", function () {
    console.log("BrowserSync is running!");
});

browserSync(config);

var has = browserSync.has("My server");

var bs = browserSync.create();

bs.init({
    server: { index: "./app" }
});

bs.reload();

browserSync.use(
    {
        plugin: function(opts: object, bs: browserSync.BrowserSyncInstance) {
            console.log(opts);
        },
        "plugin:name": "test"
    },
    { files: "*.css" }
);

browserSync.use({
    plugin: function(opts: object, bs: browserSync.BrowserSyncInstance) {
        console.log(bs.name);
    }
});

browserSync(
    {
        server: {
            baseDir: "test/fixtures"
        },
        logLevel: "silent",
        open: false
    }
);

var instanceName = "TestInstance";
var namedInstance = browserSync.create(instanceName);
namedInstance.init({
    server: { index: "./app" },
    https: true
});

console.log(namedInstance.getOption("https")); // Should output true.

var existingInstance = browserSync.get(instanceName);

browserSync.create("InstanceWithEventEmitter", new EventEmitter());

// Should output something greater than 0.
console.log(browserSync.instances.length);

browserSync.reset();

// Should output 0.
console.log(browserSync.instances.length);

var cleanupTestInstance = browserSync.create("CleanupTest");
cleanupTestInstance.cleanup();
console.log(cleanupTestInstance.active); // Should output false.

function browserSyncInit(): browserSync.BrowserSyncInstance {
    var browser = browserSync.create();
    browser.init();
    console.log(browser.name);
    console.log(browserSync.name);
    return browser;
}
var browser = browserSyncInit();
browser.exit();

// Stream method.

// -- No options.
browser.stream();

// -- "once" option.
browser.stream({ once: true });

// -- "match" option (string).
browser.stream({ match: "**/*.js" });

// -- "match" option (RegExp).
browser.stream({ match: /\.js$/ });

// -- "match" option (function).
browser.stream({ match: (testString) => true });

// -- "match" option (array).
browser.stream({ match: ["**/*.js", /\.js$/, (testString) => true] });

// -- Both options.
browser.stream({ once: true, match: ["**/*.js", /\.js$/, (testString) => true] });
