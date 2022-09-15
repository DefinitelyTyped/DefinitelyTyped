import { parse } from 'comment-json';
import fs from 'fs';
import { format } from 'prettier';
import sh from 'shelljs';
import * as path from 'path';

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

const prettierConfig = parseAndReadFileContents('.prettierrc.json');

/**
 * @param {string} filePath
 * @param {unknown} contents
 */
const writeFileFormatted = (filePath, contents) => {
    fs.writeFileSync(
        filePath,
        format(JSON.stringify(contents, null, 4), {
            ...prettierConfig,
            filepath: filePath,
        }),
    );
};

const [, , tslintRuleName, eslintRuleName = tslintRuleName] = process.argv;

sh.exec(`find types -path '*/node_modules' -prune -o -iname '*.ts' -type f -print | xargs sed -i 's/tslint:disable-next-line[: ]${tslintRuleName}/eslint-disable-next-line ${eslintRuleName}/'`);

const typeNames = fs.readdirSync('types');
for (const typeName of typeNames) {
    const typeDirectory = path.join('types', typeName);
    typeNames.push(
        ...(fs.readdirSync(typeDirectory))
            .filter(childDirectory => /^(ts|v)(\d+|\.)+$/.test(childDirectory))
            .map(childDirectory => path.join(typeName, childDirectory)),
    );

    const tslintFilePath = path.join(typeDirectory, 'tslint.json');
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

    const eslintFilePath = path.join(typeDirectory, '.eslintrc.json');
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
            [eslintRuleName]: 'off',
        },
    });
}
