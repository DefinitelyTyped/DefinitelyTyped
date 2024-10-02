import { existsSync, readdirSync, readFileSync } from "node:fs";
import { writeFile } from "node:fs/promises";

const header = `# This file is generated.
# Add yourself to the "owners" in package.json instead.
# See https://github.com/DefinitelyTyped/DefinitelyTyped#definition-owners`;

async function main() {
  try {
    const { owners, maxPathLen } = await getAllOwners();
    const codeOwnersPath = new URL("../.github/CODEOWNERS", import.meta.url);
    const entries = mapDefined(owners, ([p, users]) => getEntry(p, users, maxPathLen));
    await writeFile(codeOwnersPath, `${header}\n\n${entries.join("\n")}\n`, { encoding: "utf-8" });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();

/**
 * Recursively walks through directories, excluding "node_modules",
 * and calls `fn` for each subdirectory.
 * @param {URL} dir - The base directory to start recursion.
 * @param {(subpath: URL) => void} fn - The callback function to call for each subdirectory.
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

async function getAllOwners() {
  const owners = [];
  console.log("Reading headers...");
  const rootPrefixLength = (new URL("../", import.meta.url)).pathname.length - 1;
  let maxPathLen = 0;

  await recurse(new URL("../types/", import.meta.url), async (subpath) => {
    const index = new URL("package.json", subpath);
    if (existsSync(index)) {
      try {
        const indexContent = await readFileSync(index, "utf-8");
        const parsed = JSON.parse(indexContent);
        if (parsed && parsed.owners && Array.isArray(parsed.owners)) {
          const usernames = mapDefined(parsed.owners, (o) => o.githubUsername);
          if (usernames.length > 0) {
            const p = subpath.pathname.slice(rootPrefixLength);
            maxPathLen = Math.max(maxPathLen, p.length);
            owners.push([p, usernames]);
          }
        }
      } catch (err) {
        console.warn(`Error parsing package.json at ${index.href}`, err);
      }
    }
  });

  return { maxPathLen, owners };
}

/**
 * @param {string} p - The path to be included in the CODEOWNERS file.
 * @param {string[]} users - The users who own the path.
 * @param {number} maxPathLen - The maximum length of a path in the CODEOWNERS file.
 * @returns {string | undefined} - The generated entry for the CODEOWNERS file, or undefined if there are no users.
 */
function getEntry(p, users, maxPathLen) {
  if (users.length === 0) {
    return undefined; // Skip paths without owners
  }
  const path = p.padEnd(maxPathLen);
  return `${path} ${users.map(u => `@${u}`).join(" ")}`;
}

/**
 * Maps an array of elements to a new array, filtering out undefined values.
 * @template T,U
 * @param {ReadonlyArray<T>} arr - The input array.
 * @param {(t: T) => U | undefined} mapper - The mapping function.
 * @returns {U[]} - The new array with mapped and filtered elements.
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
