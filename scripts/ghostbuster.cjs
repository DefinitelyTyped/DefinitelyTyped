// @ts-check
const { AllPackages, getDefinitelyTyped, parseDefinitions } = require('@definitelytyped/definitions-parser');
const { loggerWithErrors } = require('@definitelytyped/utils');
const os = require('node:os');
const path = require("path");
const { writeFileSync, readFile, readFileSync, readdirSync, existsSync } = require('fs-extra');
const hp = require("@definitelytyped/header-parser");

/**
 * @param dir string
 */
function bust(dir) {
    const index = path.join(dir, "index.d.ts");
    if (existsSync(index)) {
        const indexContent = readFileSync(index, "utf-8");
        let parsed;
        try {
            parsed = hp.parseHeaderOrFail(indexContent);
        } catch (e) {
        }

        let newContent = indexContent;
        for (const ghost of ghosts) {
            if (indexContent.toLowerCase().indexOf(ghost.toLowerCase()) >= 0) {
                if (parsed === undefined) {
                    throw new Error(`File ${index} references a ghost, but does not parse. Patch manually and retry`);
                } else {
                    const isGhost = p => p.githubUsername.toLowerCase() === ghost.toLowerCase();
                    if (parsed.contributors.filter(isGhost).length === 0) {
                        console.log(`False positive of ${ghost} in ${index} - actuals were ${parsed.contributors.map(c => c.githubUsername).join(";")}. Verify manually.`);
                        continue;
                    }
                    if (parsed.contributors.length === 1) {
                        const prevContent = newContent;
                        newContent = newContent.replace(/^\/\/ Definitions by:.*$/mi, "// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>");
                        if (prevContent === newContent) throw new Error("Patch failed.");
                    } else {
                        const newOwnerList = parsed.contributors.filter(c => !isGhost(c));
                        if (newOwnerList.length === parsed.contributors.length) throw new Error("Didn't remove anyone??");
                        let newDefinitionsBy = `// Definitions by: ${newOwnerList[0].name} <https://github.com/${newOwnerList[0].githubUsername}>\n`;
                        for (let i = 1; i < newOwnerList.length; i++) {
                            newDefinitionsBy = newDefinitionsBy + `//                 ${newOwnerList[i].name} <https://github.com/${newOwnerList[i].githubUsername}>\n`;
                        }
                        const patchStart = newContent.indexOf("// Definitions by:");
                        const patchEnd = newContent.indexOf("// Definitions:");
                        if (patchStart === -1) throw new Error("No Definitions by:");
                        if (patchEnd === -1) throw new Error("No Definitions:");
                        if (patchEnd < patchStart) throw new Error("Definition header not in expected order");
                        newContent = newContent.substring(0, patchStart) + newDefinitionsBy + newContent.substring(patchEnd);
                    }
                }
            }
        }

        if (newContent !== indexContent) {
            writeFileSync(index, newContent, "utf-8");
        }
    }
}

function recurse(dir) {
    const entryPoints = readdirSync(dir, { withFileTypes: true })
    for (const subdir of entryPoints) {
        if (subdir.isDirectory()) {
            const subpath = path.join(dir, subdir.name);
            bust(subpath);
            recurse(subpath);
        }
    }
}

const ghosts = (readFileSync("ghosts.txt", "utf-8")).split(/\r?\n/g).map(s => s.trim()).filter(s => s.length);
console.log(`Busting ${ghosts.length} ghosts...`);
recurse(path.join(__dirname, "../types"));
