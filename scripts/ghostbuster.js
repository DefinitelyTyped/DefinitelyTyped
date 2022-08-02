import { flatMap, mapDefined } from "@definitelytyped/utils";
import fsExtra from "fs-extra";
const { writeFileSync, readFileSync, readdirSync, existsSync } = fsExtra;
import hp from "@definitelytyped/header-parser";
import { Octokit } from "@octokit/core";

/**
 * @param {string} indexPath
 * @param {hp.Header & { raw: string }} header
 * @param {Set<string>} ghosts
 */
function bust(indexPath, header, ghosts) {
    /** @param {hp.Author} c */
    const isGhost = c => c.githubUsername && ghosts.has(c.githubUsername.toLowerCase());
    if (header.contributors.some(isGhost)) {
        console.log(`Found one or more deleted accounts in ${indexPath}. Patching...`);
        const indexContent = header.raw;
        let newContent = indexContent;
        if (header.contributors.length === 1) {
            const prevContent = newContent;
            newContent = newContent.replace(/^\/\/ Definitions by:.*$/mi, "// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>");
            if (prevContent === newContent) throw new Error("Patch failed.");
        } else {
            const newOwnerList = header.contributors.filter(c => !isGhost(c));
            if (newOwnerList.length === header.contributors.length) throw new Error("Didn't remove anyone??");
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

        if (newContent !== indexContent) {
            writeFileSync(indexPath, newContent, "utf-8");
        }
    }
}

/**
 * @param {URL} dir
 * @param {(subpath: URL) => void} fn
 */
function recurse(dir, fn) {
    const entryPoints = readdirSync(dir, { withFileTypes: true })
    for (const subdir of entryPoints) {
        if (subdir.isDirectory() && subdir.name !== "node_modules") {
            const subpath = new URL(`${subdir.name}/`, dir);
            fn(subpath);
            recurse(subpath, fn);
        }
    }
}

function getAllHeaders() {
    /** @type {Record<string, hp.Header & { raw: string }>} */
    const headers = {};
    console.log("Reading headers...");
    recurse(new URL("../types/", import.meta.url), subpath => {
        const index = new URL("index.d.ts", subpath);
        if (existsSync(index)) {
            const indexContent = readFileSync(index, "utf-8");
            let parsed;
            try {
                parsed = hp.parseHeaderOrFail(indexContent);
            } catch (e) {}
            if (parsed) {
                headers[index.pathname] = { ...parsed, raw: indexContent };
            }
        }
    });
    return headers;
}

/**
 * @param {Set<string>} users
 */
async function fetchGhosts(users) {
    console.log("Checking for deleted accounts...");
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const maxPageSize = 2000;
    const pages = Math.ceil(users.size / maxPageSize);
    const userArray = Array.from(users);
    /** @type string[] */
    const ghosts = [];
    for (let page = 0; page < pages; page++) {
        const startIndex = page * maxPageSize;
        const endIndex = Math.min(startIndex + maxPageSize, userArray.length);
        const query = `query {
            ${userArray.slice(startIndex, endIndex).map((user, i) => `u${i}: user(login: "${user}") { id }`).join("\n")}
        }`;
        const result = await tryGQL(() => octokit.graphql(query));
        for (const k in result) {
            if (result[k] === null) {
                ghosts.push(userArray[startIndex + parseInt(k.substring(1), 10)]);
            }
        }
    }

    // Filter out organizations
    if (ghosts.length) {
        const query = `query {
            ${ghosts.map((user, i) => `o${i}: organization(login: "${user}") { id }`).join("\n")}
        }`;
        const result = await tryGQL(() => octokit.graphql(query));
        if (result) {
            return new Set(ghosts.filter(g => result[`o${ghosts.indexOf(g)}`] === null));
        }
    }

    return new Set(ghosts);
}

/**
 * @param {() => Promise<any>} fn
 */
async function tryGQL(fn) {
    try {
        const result = await fn();
        if (result.data) return result.data;
        return result;
        // @ts-expect-error
    } catch (/** @type {{}} */ resultWithErrors) {
        if (resultWithErrors.data) {
            return resultWithErrors.data;
        }
        throw resultWithErrors;
    }
}

process.on("unhandledRejection", err => {
    console.error(err);
    process.exit(1);
});

(async () => {
    if (!process.env.GITHUB_TOKEN) {
        throw new Error("GITHUB_TOKEN environment variable is not set");
    }

    const headers = getAllHeaders();
    const users = new Set(flatMap(Object.values(headers), h => mapDefined(h.contributors, c => c.githubUsername?.toLowerCase())));
    const ghosts = await fetchGhosts(users);
    if (!ghosts.size) {
        console.log("No ghosts found");
        return;
    }

    for (const indexPath in headers) {
        bust(indexPath, headers[indexPath], ghosts);
    }
})();
