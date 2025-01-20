import deleteEmpty = require("delete-empty");

deleteEmpty("foo").then(f => f[0].toLowerCase());
deleteEmpty("foo", {}, (err, f) => {
    if (err) {
        err.message;
    } else {
        f[0].toLowerCase();
    }
});
deleteEmpty("foo", (err, f) => {
    if (err) {
        err.message;
    } else {
        f[0].toLowerCase();
    }
});

deleteEmpty("foo", {
    filter: (file, regex) => file.startsWith("foo"),
}, (err, f) => {
    if (err) {
        err.message;
    } else {
        f[0].toLowerCase();
    }
});

deleteEmpty.sync("foo")[0].toLowerCase();

(async () => {
    const deleted = await deleteEmpty("foo");
    const moreDeleted = await deleteEmpty("bar", { dryRun: true });
    const deleteWithFilter = await deleteEmpty("bar", { filter: (file, regex) => file.startsWith("bar") });
})();
