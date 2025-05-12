import { Octokit } from "octokit";
import sh from "shelljs";

var gh = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

// This script calls out to npm; ensure corepack doesn't complain if present.
process.env.COREPACK_ENABLE_STRICT = "0";

async function main() {
    const prs = await recentPrs();
    const longestLatency = recentPackages(prs);
    if (longestLatency > 5400) {
        console.log("types-publisher's longest unpublished latency was over 1.5 hour.");
        throw new Error();
    }
}

/**
 * 1. Only match paths that begin with types/
 * 2. Only match paths that end with index.d.ts; test changes don't cause a republish
 * 3. Capture the package name
 */
const packageNameFromIndexDts = /^types\/([^\/]+?)\/index.d.ts$/;

/**
 * @param {"created" | "updated"} sort
 */
async function getTopFiveMerged(sort) {
    const iterator = gh.paginate.iterator(gh.rest.pulls.list, {
        owner: "DefinitelyTyped",
        repo: "DefinitelyTyped",
        state: "closed",
        per_page: 100,
        direction: "desc",
        sort,
    });

    const result = [];

    for await (const { data: pulls } of iterator) {
        for (const pull of pulls) {
            if (result.length === 5) {
                return result;
            }

            if (!pull.merged_at) {
                continue;
            }

            result.push(pull);
        }
    }

    return result;
}

/** @returns {Promise<Map<string, { mergeDate: Date, pr: number, deleted: boolean }>>} */
async function recentPrs() {
    console.log("search for 5 most recently created PRs");
    const searchByCreatedDate = await getTopFiveMerged("created");
    console.log("search for 5 most recently updated PRs");
    const searchByUpdateDate = await getTopFiveMerged("updated");

    /** @type {Map<string, { mergeDate: Date, pr: number, deleted: boolean }>} */
    const prs = new Map();
    for (const it of searchByCreatedDate) {
        await addPr(it, prs);
    }
    for (const it of searchByUpdateDate) {
        await addPr(it, prs);
    }
    return prs;
}
/**
 * @param {{ number: number }} item
 * @param {Map<string, { mergeDate: Date, pr: number, deleted: boolean }>} prs
 */
async function addPr(item, prs) {
    console.log("get merge_at date for PR", item.number);
    const mergedAt = (await gh.rest.pulls.get({
        owner: "DefinitelyTyped",
        repo: "DefinitelyTyped",
        pull_number: item.number,
    })).data.merged_at;
    if (mergedAt == null) {
        return;
    }
    const mergeDate = new Date(mergedAt);
    console.log("list first 100 files for PR", item.number);
    const fileEntries = (await gh.rest.pulls.listFiles({
        owner: "DefinitelyTyped",
        repo: "DefinitelyTyped",
        pull_number: item.number,
        per_page: 100,
    })).data;
    /** @type {Set<string>} */
    const packages = new Set();
    /** @type {Set<string>} */
    const deleteds = new Set();
    const editsNotNeededPackages = !!fileEntries.find(e => e.filename.match("notNeededPackages.json"));
    for (const fileChange of fileEntries) {
        const packageName = fileChange.filename.match(packageNameFromIndexDts);
        if (packageName == null) {
            continue;
        }
        if (fileChange.status === "removed") {
            if (editsNotNeededPackages) {
                deleteds.add(packageName[1]);
                packages.add(packageName[1]);
            }
        } else {
            packages.add(packageName[1]);
        }
    }
    for (const name of packages) {
        const prev = prs.get(name);
        if (!prev || mergeDate > prev.mergeDate) {
            prs.set(name, { mergeDate, pr: item.number, deleted: deleteds.has(name) });
        }
    }
}
/**
 * @param {Date} m1
 * @param {Date} m2
 */
function monthSpan(m1, m2) {
    var diff = m1.getMonth() - m2.getMonth();
    return diff < 0 ? diff + 12 : diff;
}
/** @param {Map<string, { mergeDate: Date, pr: number, deleted: boolean }>} prs */
function recentPackages(prs) {
    console.log();
    console.log();
    console.log("## Interesting PRs ##");
    let longest = 0;
    let longestName = "No unpublished PRs found";
    for (const [name, { mergeDate, pr, deleted }] of prs) {
        const { deprecated, publishDate } = parseNpmInfo(
            sh.exec(`npm info @types/${name} time.modified deprecated`, { silent: true }).stdout.toString(),
        );
        if (monthSpan(publishDate, mergeDate) > 1) {
            console.log(`${name}: published long before merge; probably a rogue edit to #${pr}`);
            console.log("       merged:" + mergeDate);
            console.log("    published:" + publishDate);
        } else if (mergeDate > publishDate || isNaN(publishDate.getTime()) || deprecated !== deleted) {
            console.log(
                `${name}: #${pr} not published yet; latency so far: ${(Date.now() - mergeDate.valueOf()) / 1000}`,
            );
            console.log("       merged:" + mergeDate);
            console.log("    published:" + publishDate);
            const latency = Date.now() - mergeDate.valueOf();
            if (latency > longest) {
                longest = latency;
                longestName = name;
            }
        } else if (publishDate.valueOf() - mergeDate.valueOf() > 100000000) {
            console.log(`${name}: #${pr} very long latency: ${(publishDate.valueOf() - mergeDate.valueOf()) / 1000}`);
            console.log("       merged:" + mergeDate);
            console.log("    published:" + publishDate);
        }
    }
    console.log();
    console.log();
    console.log("## Longest publish latency ##");
    console.log(longestName + ": " + (longest / 1000));
    return longest / 1000;
}
/** @param {string} info */
function parseNpmInfo(info) {
    if (info.includes("deprecated")) {
        const firstLine = info.split("\n")[0];
        return {
            publishDate: new Date(firstLine.slice(firstLine.indexOf("'") + 1, firstLine.length - 1)),
            deprecated: true,
        };
    } else {
        return { publishDate: new Date(info.trim()), deprecated: false };
    }
}
main().catch(error => {
    console.error(error && (error.stack || error.message || error));
    process.exit(1);
});
