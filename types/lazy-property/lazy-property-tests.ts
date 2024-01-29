import addLazyProperty = require("lazy-property");

const obj: { foo?: string | undefined } = {};

addLazyProperty(obj, "foo", () => {
    return "bar";
});

// Access the property
obj.foo;
