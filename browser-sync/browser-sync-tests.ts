/// <reference path="./browser-sync.d.ts"/>
import browserSync = require("browser-sync");

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

var bs = browserSync.create();

bs.init({
    server: "./app"
});

bs.reload();

function browserSyncInit() {
    var browser = browserSync.create();
    browser.init();
    console.log(browser.name);
    console.log(browserSync.name);
    return browser;
}
var browser = browserSyncInit();
browser.exit();
