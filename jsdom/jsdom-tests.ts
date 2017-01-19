
import jsdom = require("jsdom");

jsdom.defaultDocumentFeatures.FetchExternalResources = ["img"];

jsdom.env(
    "http://nodejs.org/dist/",
    ["http://code.jquery.com/jquery.js"],
    function (errors: Error[], window: Window) {
    }
);

jsdom.env(
    "http://nodejs.org/dist/",
    function (errors: Error[], window: Window) {
    }
);

jsdom.env(
    "http://nodejs.org/dist/",
    {
        scripts: ["http://code.jquery.com/jquery.js"],
    },
    function (errors: Error[], window: Window) {
    }
);

jsdom.env(
    '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
    ["http://code.jquery.com/jquery.js"],
    function (errors: Error[], window: Window) {
    }
);

jsdom.env({
    url: "http://news.ycombinator.com/",
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (errors: Error[], window: Window) {
    }
});

var jquery: string;

jsdom.env({
    url: "http://news.ycombinator.com/",
    src: [jquery],
    done: function (errors: Error[], window: Window) {
    }
});

var document: Document = jsdom.jsdom("<html></html>");
