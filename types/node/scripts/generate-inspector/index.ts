// Usage: node generate-inspector [tag]
// [tag] corresponds to a tag name in the node-core repository.
// By default, uses the current Node version.

import { execSync } from "child_process";
import { existsSync, readFileSync, writeFileSync } from "fs";
import * as https from "https";

import * as schema from "./devtools-protocol-schema";
import { generateSubstituteArgs } from "./generate-substitute-args";
import { substitute, trimRight } from "./utils";

const httpsGet = (url: string) => new Promise<string>((resolve, reject) => {
    https.get(url, res => {
        const frames: Buffer[] = [];
        res.on("data", (data: Buffer) => {
            frames.push(data);
        });
        res.on("end", () => {
            resolve(Buffer.concat(frames).toString("utf8"));
        });
        res.on("error", (err: Error) => {
            reject(err);
        });
    });
});

// Input arguments
const tag = process.argv[2] || process.version;

const V8_PROTOCOL_URL = `https://raw.githubusercontent.com/nodejs/node/${tag}/deps/v8/src/inspector/js_protocol-1.3.json`;
const NODE_PROTOCOL_URL = `https://raw.githubusercontent.com/nodejs/node/${tag}/src/inspector/node_protocol.pdl`;
const INSPECTOR_PROTOCOL_REMOTE = `https://chromium.googlesource.com/deps/inspector_protocol`;
const INSPECTOR_PROTOCOL_LOCAL_DIR = "/tmp/inspector_protocol";

/**
 * Given a list of Inspector protocol definitions, write an inspector.d.ts
 * containing all of those definitions merged together.
 * @param jsonProtocols A list of Inspector protocol definitions.
 */
function writeProtocolsToFile(jsonProtocols: string[]) {
    const combinedProtocol: schema.Schema = {
        version: { major: '', minor: '' }, // doesn't matter
        domains: []
    };
    for (const json of jsonProtocols) {
        if (json) {
            const protocol: schema.Schema = JSON.parse(json);
            combinedProtocol.domains.push(...protocol.domains);
        }
    }
    const substituteArgs = generateSubstituteArgs(combinedProtocol);
    const template = readFileSync(`${__dirname}/inspector.d.ts.template`, "utf8");

    const inspectorDts = substitute(template, substituteArgs).split("\n")
        .map(line => trimRight(line))
        .join("\n");

    writeFileSync("./inspector.d.ts", inspectorDts, "utf8");
}

/**
 * Given a PDL-formatted string, return a JSON-formatted string.
 * Note that this function run blocking shell commands, as it depends on an
 * external script to do the conversion.
 * @param pdl A PDL-formatted string.
 */
function convertPdlToJson(pdl: string): string {
    if (!existsSync(INSPECTOR_PROTOCOL_LOCAL_DIR)) {
        execSync(`git clone ${INSPECTOR_PROTOCOL_REMOTE} ${INSPECTOR_PROTOCOL_LOCAL_DIR}`);
    }
    writeFileSync("/tmp/inspector_protocol.pdl", pdl);
    execSync(`${INSPECTOR_PROTOCOL_LOCAL_DIR}/convert_protocol_to_json.py /tmp/inspector_protocol.pdl /tmp/inspector_protocol.json`);
    return readFileSync("/tmp/inspector_protocol.json", 'utf8');
}

// "Main" -- get the V8 built-in inspector protocol definition, as well as the
// Node extensions, and then write this to inspector.d.ts.
Promise.all([
    httpsGet(V8_PROTOCOL_URL),
    httpsGet(NODE_PROTOCOL_URL).then(convertPdlToJson).catch(() => '')
]).then(writeProtocolsToFile).catch(console.error);
