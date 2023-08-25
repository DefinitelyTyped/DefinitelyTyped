import autosni = require("auto-sni");
const a = autosni({
    agreeTos: true,
    email: "",
    dir: "",
    domains: [""],
});

const b = autosni({
    agreeTos: true,
    email: "",
    domains: () => [],
});

const c = autosni({
    agreeTos: true,
    email: "",
    domains: () => Promise.resolve([]),
});
