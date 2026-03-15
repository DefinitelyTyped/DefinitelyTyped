import copyDescriptor = require("copy-descriptor");

const src = { name: "foo" };
const dest: Record<string, unknown> = {};

// Basic usage
copyDescriptor(dest, src, "name");

// With rename
copyDescriptor(dest, src, "name", "alias");

// @ts-expect-error - from must be a string
copyDescriptor(dest, src, 42);
