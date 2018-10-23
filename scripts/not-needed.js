// Script to remove a package from DefinitelyTyped and add it to notNeededPackages.json

const fs = require("fs");
const path = require("path");

const typingsPackageName = process.argv[2];
const asOfVersion = process.argv[3];
const sourceRepoURL = process.argv[4];
const libraryName = process.argv[5] || typingsPackageName;

if (process.argv.length !== 5 && process.argv.length !== 6) {
	console.log("Usage: npm run not-needed -- typingsPackageName asOfVersion sourceRepoURL [libraryName]");
	process.exit(1);
}

rmdirRecursive(path.join("types", typingsPackageName));
const notNeededPackages = JSON.parse(fs.readFileSync("notNeededPackages.json", "utf-8"));
notNeededPackages.packages.push({ libraryName, typingsPackageName, sourceRepoURL, asOfVersion });
notNeededPackages.packages.sort((x, y) => x.typingsPackageName < y.typingsPackageName ? -1 : 1);
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
