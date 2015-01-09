import jsdom = require("jsdom");

jsdom.env(
    "http://nodejs.org/dist/",
    ["http://code.jquery.com/jquery.js"],
    function (errors, window) {
        console.log("there have been nodejs releases!");
    }
);

jsdom.env(
    "http://nodejs.org/dist/",
    function (errors, window) {
        console.log("there have been nodejs releases!");
    }
);

jsdom.env(
    "http://nodejs.org/dist/",
    {
        scripts: ["http://code.jquery.com/jquery.js"],
    },
    function (errors, window) {
        console.log("there have been nodejs releases!");
    }
);

jsdom.env(
    '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
    ["http://code.jquery.com/jquery.js"],
    function (errors, window) {
        console.log("contents of a.the-link:", (<any>window).$("a.the-link").text());
    }
);

jsdom.env({
    url: "http://news.ycombinator.com/",
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (errors, window) {
        var $ = (<any>window).$;
        console.log("HN Links");
        $("td.title:not(:last) a").each(function() {
            console.log(" -", $(this).text());
        });
    }
});

var jquery: string;

jsdom.env({
    url: "http://news.ycombinator.com/",
    src: [jquery],
    done: function (errors, window) {
        var $ = (<any>window).$;
        console.log("HN Links");
        $("td.title:not(:last) a").each(function () {
            console.log(" -", $(this).text());
        });
    }
});

var window = jsdom.jsdom().parentWindow;
var window = jsdom.jsdom("<div>foobar</div>").parentWindow;
var window = jsdom.jsdom("<div>foobar</div>", {
scripts: ["http://code.jquery.com/jquery.js"],
done: function (errors, window) {
    var $ = (<any>window).$;
    console.log("HN Links");
    $("td.title:not(:last) a").each(function() {
        console.log(" -", $(this).text());
    });
}}).parentWindow;