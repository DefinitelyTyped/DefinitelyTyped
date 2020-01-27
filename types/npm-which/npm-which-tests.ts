import npmWhich = require("npm-which");

const which = npmWhich("");
// $ExpectError
npmWhich("", { });
npmWhich("", { cwd: "" });
npmWhich(
    "",
    { cwd: "" },
    (error, result) => {
        // $ExpectType string
        error;
        // $ExpectType string
        result;
    });
// $ExpectError
npmWhich.sync("", { });
npmWhich.sync("", { cwd: "" });
which("", () => null);
which("", { cwd: "" }, () => null);
which.sync("");
const innerWhich = which("");
innerWhich({});
innerWhich({}, () => null);
innerWhich.sync({});
