// Run to generate the CJS types:
//
// ```sh
// pnpm i es-module-lexer
// node ./scripts/bundle-cjs.mjs
// ```
import { parse } from "es-module-lexer";
import fs from "node:fs/promises";

const PKG_ROOT = new URL("../", import.meta.url);
const ENTRY = new URL("./src/index.d.ts", PKG_ROOT);
const OUT_FILE = new URL("./bundled/culori.d.cts", PKG_ROOT);

main();

async function main() {
    const start = performance.now();
    const output = await bundle(ENTRY);
    await fs.writeFile(OUT_FILE, output);
    console.log(`Bundled to ${OUT_FILE.href.replace(PKG_ROOT.href, "")} ${Math.round(performance.now() - start)}ms`);
}

/**
 * Recursively load a file and its imports.
 * Note this is NOT generic; it makes export assumptions about @types/culori
 * @param {URL} filepath
 * @param {URL} root
 * @param {Object} options
 * @returns {Promise<string>}
 */
async function bundle(filepath, root = PKG_ROOT, imported = new Set()) {
    imported.add(filepath.href);
    let contents = await fs.readFile(filepath, "utf8");
    const [imports, exports] = await parse(contents);

    const codeReplacements = {};
    const namedExportsToInject = [];

    // parse imports
    for (const spec of imports) {
        const importMod = spec.n.replace(/\.js$/, ".d.ts");
        const importPath = new URL(importMod, filepath);
        // if already imported, skip inlining and replace with nothing
        if (imported.has(importPath.href)) {
            codeReplacements[`${contents.slice(spec.ss, spec.se)};\n`] = "";
            continue;
        }
        // inject imports
        const replacement = (await bundle(importPath, root, imported)).trim();
        const importStatement = contents.slice(spec.ss, spec.se);
        codeReplacements[`${importStatement};\n`] = replacement
            ? `/* ${importPath.href.replace(root.href, "")} */\n${replacement}\n`
            : "";
    }

    // strip default exports manually
    // note: es-module-lexer doesn’t bother with full export statements like it does imports
    const defaultExports = contents.matchAll(/export\s+default\s+([^;]+);/g);
    for (const match of defaultExports ?? []) {
        const [fullMatch, exportMod] = match;
        // note: this will break on `export default function …`; this assumes those have been removed
        codeReplacements[fullMatch] = "";
        namedExportsToInject.push(exportMod);
    }

    // strip type re-exports
    // node: es-module-lexer ignores "export type", but also these are far too complex to handle
    // comprehensively. Only handle the syntax in this package, and this will break/will need updating
    // if a new syntax is introduced.
    const typeReExports = contents.matchAll(/export\s+type\s+{([^}]+)}\s+from\s+"([^"]+)";/g);
    for (const spec of typeReExports) {
        const [fullMatch, rawTypeList, rawImportPath] = spec;
        const importPath = new URL(rawImportPath.replace(/\.js$/, ".d.ts"), filepath);
        // if already inlined, ignore
        if (imported.has(importPath.href)) {
            codeReplacements[fullMatch] = "";
            continue;
        }
        const importedTypes = await bundle(importPath, root, imported);
        codeReplacements[fullMatch] = `\n/* ${importPath.href.replace(root.href, "")} */\n${importedTypes}\n`;
    }

    // replace code and re-inject default exports as named exports
    for (const [oldCode, newCode] of Object.entries(codeReplacements)) {
        contents = contents.replace(oldCode, newCode);
    }
    if (namedExportsToInject.length) {
        contents += `export {\n${namedExportsToInject.map(e => `${indent(e, 1)},`).join("\n")}\n};\n\n`;
    }

    // random cleanup: export { mode[ColorMode] } gets duplicated; remove
    contents = contents.replace(/export\s*{\n\s*mode[A-Za-z0-9]+,\n};\n/g, "");

    return contents;
}

function indent(code, level = 0) {
    return `${"    ".repeat(level)}${code}`;
}
