import use = require("use");

// Basic usage
const app = use({});
app.use((ctx: object) => {});
app.run({});

// With options
const app2 = use({}, { prop: "plugins" });

// Type-based plugin
app.use("view", (ctx: object) => {});

// Access fns array
const fns = app.fns;

// @ts-expect-error - app must be an object
use("not an object");
