import cp from "child_process";
import { parse } from "comment-json";
import fs from "fs";
import * as path from "path";
import sh from "shelljs";

/** @type {any} */
const emptyObject = {};

/**
 * @param {string} filePath
 * @returns {any}
 */
const parseAndReadFileContents = filePath => {
    try {
        return parse(fs.readFileSync(filePath).toString());
    } catch {
        return undefined;
    }
};

/**
 * @param {string} contents
 */
function formatFile(contents) {
    return cp.execFileSync(
        process.execPath,
        ["./node_modules/dprint/bin.js", "fmt", "--stdin", "json"],
        {
            stdio: ["pipe", "pipe", "inherit"],
            encoding: "utf-8",
            input: contents,
            maxBuffer: 100 * 1024 * 1024, // 100 MB "ought to be enough for anyone"; https://github.com/nodejs/node/issues/9829
        },
    );
}

/**
 * @param {string} filePath
 * @param {unknown} contents
 */
const writeFileFormatted = (filePath, contents) => {
    fs.writeFileSync(
        filePath,
        formatFile(JSON.stringify(contents, null, 4)),
    );
};

const [, , tslintRuleName, eslintRuleName = "@definitelytyped/" + tslintRuleName] = process.argv;

sh.exec(
    `find types -path '*/node_modules' -prune -o -iname '*.ts' -type f -print | xargs sed -i 's_tslint:disable-next-line[: ]${tslintRuleName}_eslint-disable-next-line ${eslintRuleName}_'`,
);
sh.exec(
    `find types -path '*/node_modules' -prune -o -iname '*.ts' -type f -print | xargs sed -i 's_tslint:disable-next-line[: ] ${tslintRuleName}_eslint-disable-next-line ${eslintRuleName}_'`,
);
sh.exec(
    `find types -path '*/node_modules' -prune -o -iname '*.ts' -type f -print | xargs sed -i 's_tslint:disable-line[: ]${tslintRuleName}_eslint-disable-line ${eslintRuleName}_'`,
);

const typeNames = fs.readdirSync("types");
for (const typeName of typeNames) {
    const typeDirectory = path.join("types", typeName);
    typeNames.push(
        ...(fs.readdirSync(typeDirectory))
            .filter(childDirectory => /^(ts|v)(\d+|\.)+$/.test(childDirectory))
            .map(childDirectory => path.join(typeName, childDirectory)),
    );

    const tslintFilePath = path.join(typeDirectory, "tslint.json");
    /** @type {{ rules?: { [s:string]: boolean }}} */
    const tslintData = parseAndReadFileContents(tslintFilePath);
    if (tslintData?.rules?.[tslintRuleName] !== false) {
        continue;
    }

    console.log(`Converting ${typeName}...`);

    delete tslintData.rules[tslintRuleName];
    if (Object.keys(tslintData.rules).length === 0) {
        console.log(`\t${tslintFilePath} has no remaining rules; deleting rules property.`);
        delete tslintData.rules;
    } else {
        console.log(`\t${tslintFilePath} has remaining rules.`);
    }
    writeFileFormatted(tslintFilePath, tslintData);

    const eslintFilePath = path.join(typeDirectory, ".eslintrc.json");
    const eslintData = parseAndReadFileContents(eslintFilePath) ?? emptyObject;

    if (eslintData === emptyObject) {
        console.log(`\t${eslintFilePath} did not yet exist; creating.`);
    } else {
        console.log(`\t${eslintFilePath} already exists; modifying.`);
    }

    writeFileFormatted(eslintFilePath, {
        ...eslintData,
        rules: {
            ...eslintData.rules,
            [eslintRuleName]: "off",
        },
    });
}
