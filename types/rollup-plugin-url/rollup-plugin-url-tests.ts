import url from "rollup-plugin-url";

url(); // $ExpectType Plugin

url({}); // $ExpectType Plugin

url({ include: ["**/*.svg"], limit: 0, emitFiles: true }); // $ExpectType Plugin
