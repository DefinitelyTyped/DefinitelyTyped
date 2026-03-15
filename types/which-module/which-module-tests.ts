import whichModule = require("which-module");

// Find the module that exported a value
const mod: NodeModule | null = whichModule(require("path"));

// Returns null if not found
const notFound: NodeModule | null = whichModule({});

// Can pass any value
whichModule("string");
whichModule(42);
whichModule(null);
