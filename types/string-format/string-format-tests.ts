import Format = require("string-format");

Format.extend(String.prototype, {});

const fmt = Format.create({
	upper: (s: string) => s.toUpperCase()
});

fmt("Hallo {name!upper}, you are {age} years old!", { name: "Somebody", age: 10 });

Format("Hallo {name}, you are {age} years old!", { name: "Somebody", age: 10 });
