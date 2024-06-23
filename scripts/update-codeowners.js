import { existsSync, readdirSync, readFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";

const header = `# This file is generated.
# Add yourself to the "owners" in package.json instead.
# See https://github.com/DefinitelyTyped/DefinitelyTyped#definition-owners`;

async function main() {
    const { owners, maxPathLen } = getAllOwners();
    const codeOwnersPath = new URL("../.github/CODEOWNERS", import.meta.url);
    const entries = mapDefined(owners, ([p, users]) => getEntry(p, users, maxPathLen));
    await writeFile(
        codeOwnersPath,
        `${header}\n\n${entries.join("\n")}\n`,
        { encoding: "utf-8" },
    );
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    });

/**
 * @param {URL} dir
 * @param {(subpath: URL) => void} fn
 */
function recurse(dir, fn) {
    const entryPoints = readdirSync(dir, { withFileTypes: true });
    for (const subdir of entryPoints) {
        if (subdir.isDirectory() && subdir.name !== "node_modules") {
            const subpath = new URL(`${subdir.name}/`, dir);
            fn(subpath);
            recurse(subpath, fn);
        }
    }
}

function getAllOwners() {
    /** @type {[string, string[]][]} */
    const owners = [];
    console.log("Reading headers...");
    const rootPrefixLength = (new URL("../", import.meta.url)).pathname.length - 1;
    let maxPathLen = 0;

    recurse(new URL("../types/", import.meta.url), subpath => {
        const index = new URL("package.json", subpath);
        if (existsSync(index)) {
            const indexContent = readFileSync(index, "utf-8");
            let parsed;
            try {
                parsed = JSON.parse(indexContent);
            } catch (e) {}
            if (parsed && parsed.owners && Array.isArray(parsed.owners)) {
                const usernames = mapDefined(parsed.owners, o => o.githubUsername);
                if (usernames.length > 0) {
                    const p = subpath.pathname.slice(rootPrefixLength);
                    maxPathLen = Math.max(maxPathLen, p.length);
                    owners.push([p, usernames]);
                }
            }
        }
    });

    return { maxPathLen, owners };
}

/**
 * @param {string} p
 * @param {string[]} users
 * @param {number} maxPathLen
 * @return {string | undefined}
 */
function getEntry(p, users, maxPathLen) {
    const path = p.padEnd(maxPathLen);
    return `${path} ${users.map(u => `@${u}`).join(" ")}`;
}

/**
 * @template T,U
 * @param {ReadonlyArray<T>} arr
 * @param {(t: T) => U | undefined} mapper
 * @return U[]
 */
function mapDefined(arr, mapper) {
    const out = [];
    for (const a of arr) {
        const res = mapper(a);
        if (res !== undefined) {
            out.push(res);
        }
    }
    return out;
}
