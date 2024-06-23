import express = require("express");
import serveIndex = require("serve-index");

const app = express();

const filter = (name: string): boolean => {
    if (name.indexOf("foo") === -1) return true;
    return false;
};

app.use("/ftp", serveIndex("public/ftp", { icons: true }));
app.listen(8080);

const fixtures = "/fixtures";

serveIndex("test/fixtures", { hidden: false });
serveIndex("test/fixtures", { hidden: true });
serveIndex(fixtures, { filter });
serveIndex(fixtures, { filter, hidden: false });
serveIndex(fixtures, { icons: true });
serveIndex(fixtures, { template: __dirname + "/shared/template.html" });
serveIndex(fixtures, {
    template: (locals, callback) => {
        callback(null, "This is a template.");
    },
});

serveIndex(fixtures, {
    template: (locals, callback) => callback(new Error("boom!")),
});

serveIndex(fixtures, {
    template: (locals, callback) => callback(null, JSON.stringify(locals.directory)),
});

serveIndex(fixtures, {
    template: (locals, callback) => callback(null, JSON.stringify(locals.displayIcons)),
});

serveIndex(fixtures, {
    template: (locals, callback) => callback(null, JSON.stringify(locals.fileList.map(file => file))),
});

serveIndex(fixtures, {
    template: (locals, callback) => callback(null, JSON.stringify(locals.path)),
});

serveIndex(fixtures, {
    template: (locals, callback) => callback(null, JSON.stringify(locals.style)),
});

serveIndex(fixtures, {
    template: (locals, callback) => callback(null, JSON.stringify(locals.viewName)),
});

serveIndex(fixtures, { stylesheet: __dirname + "/shared/styles.css" });
