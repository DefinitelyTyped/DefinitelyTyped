// Script to remove a package from DefinitelyTyped and add it to notNeededPackages.json

import * as fs from "node:fs";
import * as path from "node:path";

import attw from "../attw.json" with { type: "json" };
import notNeededPackages from "../notNeededPackages.json" with { type: "json" };

if (process.argv.length !== 4 && process.argv.length !== 5) {
    console.log("Usage: pnpm run not-needed typingsPackageName asOfVersion [libraryName]");
    process.exit(1);
}

const typingsPackageName = process.argv[2];
const asOfVersion = process.argv[3];
const libraryName = process.argv[4] || typingsPackageName;

fs.rmSync(path.join("types", typingsPackageName), {
    recursive: true,
    force: true,
    maxRetries: process.platform === "win32" ? 10 : 0,
});

/** @type {Record<string, Record<"libraryName" | "asOfVersion", string>>} */
let packages = notNeededPackages.packages;
packages[typingsPackageName] = { libraryName, asOfVersion };
packages = Object.fromEntries(Object.entries(packages).sort());
fs.writeFileSync("notNeededPackages.json", JSON.stringify({ packages }, undefined, 4) + "\n", "utf-8");

const packageWithOptionalVersionRegex = new RegExp(`^${typingsPackageName}(/v\\d+)?$`);
attw.failingPackages = attw.failingPackages.filter((failingPackage) => (
    !packageWithOptionalVersionRegex.test(failingPackage)
));
fs.writeFileSync("attw.json", JSON.stringify(attw, undefined, 4) + "\n", "utf-8");
