/// <reference lib="esnext"/>
// Script to remove a package from DefinitelyTyped and add it to notNeededPackages.json

const fs = require("fs");
const path = require("path");

const typingsPackageName = process.argv[2];
const asOfVersion = process.argv[3];
const libraryName = process.argv[4] || typingsPackageName;

if (process.argv.length !== 4 && process.argv.length !== 5) {
	console.log("Usage: npm run not-needed -- typingsPackageName asOfVersion [libraryName]");
	process.exit(1);
}

rmdirRecursive(path.join("types", typingsPackageName));

/**  @type  {{packages: Record<string, { libraryName: string; asOfVersion: string; }> }} */
const notNeededPackages = JSON.parse(fs.readFileSync("notNeededPackages.json", "utf-8"));
notNeededPackages.packages[typingsPackageName] = { libraryName, asOfVersion };
const sortedPackages = Object.entries(notNeededPackages.packages).sort((packageA, packageB) =>
    packageA[0].localeCompare(packageB[0]),
);
notNeededPackages.packages = Object.fromEntries(sortedPackages);
fs.writeFileSync("notNeededPackages.json", JSON.stringify(notNeededPackages, undefined, 4) + "\n", "utf-8");

function rmdirRecursive(dir) {
	for (let entry of fs.readdirSync(dir)) {
		entry = path.join(dir, entry)
		if (fs.statSync(entry).isDirectory())
			rmdirRecursive(entry);
		else
			fs.unlinkSync(entry);
	}
	fs.rmdirSync(dir);
}
