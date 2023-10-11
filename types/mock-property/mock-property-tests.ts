import mockProperty = require("mock-property");

// @ts-expect-error
mockProperty(null, "foo");

// @ts-expect-error
mockProperty({}, null);

mockProperty({}, "foo", { value: "bar" }); // $ExpectType RestoreFunction

mockProperty({}, "foo", { get: () => "bar" }); // $ExpectType RestoreFunction
mockProperty({}, "foo", { set: (v) => "bar" }); // $ExpectType RestoreFunction
mockProperty({}, "foo", { get: () => "bar", set: (v) => "bar" }); // $ExpectType RestoreFunction

mockProperty({}, "foo", { delete: true }); // $ExpectType RestoreFunction

// @ts-expect-error
mockProperty({}, "foo", { delete: true, value: 3 });
