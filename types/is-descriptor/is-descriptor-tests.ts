import isDescriptor = require("is-descriptor");

// Check a value descriptor
const dataDesc: boolean = isDescriptor({ value: "foo", writable: true, configurable: true, enumerable: true });

// Check an accessor descriptor
isDescriptor({ get: () => "foo", configurable: true, enumerable: true });

// Check a property on an object
isDescriptor({ name: "foo" }, "name");

// With checkProto flag
isDescriptor({ name: "foo" }, "name", true);

// Non-descriptor values
isDescriptor("string");
isDescriptor(null);
isDescriptor(42);
