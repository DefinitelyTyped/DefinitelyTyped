import isAccessorDescriptor = require("is-accessor-descriptor");

// Check an accessor descriptor
const result: boolean = isAccessorDescriptor({
    get: () => "foo",
    configurable: true,
    enumerable: true,
});

// Check a property on an object
isAccessorDescriptor({ name: "foo" }, "name");

// With checkProto flag
isAccessorDescriptor({ name: "foo" }, "name", true);

// Non-accessor values
isAccessorDescriptor({ value: "foo", writable: true });
isAccessorDescriptor(null);
isAccessorDescriptor(42);
