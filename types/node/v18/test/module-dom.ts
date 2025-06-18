import Module = require("node:module");
import { URL } from "node:url";
// global
{
    const importmeta: ImportMeta = {} as any; // Fake because we cannot really access the true `import.meta` with the current build target
    importmeta.url; // $ExpectType string
    importmeta.resolve!("local"); // $ExpectType Promise<string> || string
}
