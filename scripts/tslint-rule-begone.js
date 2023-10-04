import { parse } from 'comment-json';
import fs from 'fs';
import sh from 'shelljs';
import * as path from 'path';

/**
 * @param {string} filePath
 */
const parseAndReadFileContents = filePath => {
    try {
        return parse(fs.readFileSync(filePath).toString()) ?? {};
    } catch {
        return {};
    }
};

/**
 * @param {string} filePath
 * @param {unknown} contents
 */
const writeFileFormatted = (filePath, contents) => {
    fs.writeFileSync(
        filePath,
        JSON.stringify(contents, null, 4),
    );
};

const [, , ...tslintRuleNames] = process.argv;

for (const tslintRuleName of tslintRuleNames) {
    console.log(`Clearing ${tslintRuleName} comment directives...`);
    sh.exec(
        `find types -path '*/node_modules' -prune -o -iname '*.ts' -type f -print | xargs sed -i '' '/tslint:disable[: ]${tslintRuleName}/d'`,
    );
    sh.exec(
        `find types -path '*/node_modules' -prune -o -iname '*.ts' -type f -print | xargs sed -i '' '/tslint:enable[: ]${tslintRuleName}/d'`,
    );
    sh.exec(
        `find types -path '*/node_modules' -prune -o -iname '*.ts' -type f -print | xargs sed -i '' '/tslint:disable-next-line[: ]${tslintRuleName}/d'`,
    );
    sh.exec(
        `find types -path '*/node_modules' -prune -o -iname '*.ts' -type f -print | xargs sed -i '' '/tslint:disable-line[: ]${tslintRuleName}/d'`,
    );
}

console.log('Done clearing comment directives.');

const typeNames = fs.readdirSync('types');
for (const typeName of typeNames) {
    const typeDirectory = path.join('types', typeName);
    try {
        typeNames.push(...fs.readdirSync(typeDirectory).map(childDirectory => path.join(typeName, childDirectory)));
    } catch {}

    const tslintFilePath = path.join(typeDirectory, 'tslint.json');

    /** @type {Partial<{ extends: string; rules?: { [s:string]: boolean }}>} */
    const tslintData = parseAndReadFileContents(tslintFilePath);
    if (!tslintData?.rules) {
        continue;
    }

    let matchedTSLintRule = false;

    for (const tslintRuleName of tslintRuleNames) {
        if (tslintData.rules[tslintRuleName] !== undefined) {
            delete tslintData.rules[tslintRuleName];
            matchedTSLintRule = true;
        }
    }

    if (!matchedTSLintRule) {
        continue;
    }

    console.log(`Re-writing ${typeName}...`);

    if (Object.keys(tslintData.rules).length === 0) {
        console.log(`\t${tslintFilePath} has no remaining rules; deleting rules property.`);
        delete tslintData.rules;
    } else {
        console.log(`\t${tslintFilePath} has remaining rules.`);
    }

    writeFileFormatted(tslintFilePath, tslintData);
    console.log(`\t(Re-)wrote ${tslintFilePath}.`);
}
