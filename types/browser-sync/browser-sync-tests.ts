import * as browserSync from "browser-sync";

(() => {
    //make sure that the interfaces are correctly exposed
    var bsInstance: browserSync.BrowserSyncInstance;
    var bsStatic: browserSync.BrowserSyncStatic;
    var opts: browserSync.Options;
})();

browserSync({
    server: {
        baseDir: "./"
    }
});

// multiple base directory
browserSync({
    server: {
        baseDir: ["app", "dist"]
    }
});

browserSync({
    proxy: "yourlocal.dev"
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyReq: function(proxyReq) {
           console.log(proxyReq);
        }
    }
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyReq: [
            function(proxyReq) {
                console.log(proxyReq);
            }
        ]
    }
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyRes: function(proxyRes, req, res) {
            console.log(proxyRes);
        }
    }
});

browserSync({
    proxy: {
        target: "http://yourlocal.dev",
        proxyRes: [
            function(proxyRes, req, res) {
                console.log(proxyRes);
            }
        ]
    }
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
browserSync.reload( "styles.css" );

// multiple files
browserSync.reload( ["styles.css", "ie.css"] );

// streams support
browserSync.reload( { stream: true } );

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
browser.stream({once: true});

// -- "match" option (string).
browser.stream({match: "**/*.js"});

// -- "match" option (RegExp).
browser.stream({match: /\.js$/});

// -- "match" option (function).
browser.stream({match: (testString) => true});

// -- "match" option (array).
browser.stream({match: ["**/*.js", /\.js$/, (testString) => true]});

// -- Both options.
browser.stream({once: true, match: ["**/*.js", /\.js$/, (testString) => true]});
