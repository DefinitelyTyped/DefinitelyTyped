import { parse } from 'comment-json';
import { promises as fs } from 'fs';
import { format } from 'prettier';
import * as path from 'path';

const emptyObject = {};

const parseAndReadFileContents = async filePath => {
    try {
        return parse((await fs.readFile(filePath)).toString());
    } catch {
        return undefined;
    }
};

(async () => {
    const prettierConfig = await parseAndReadFileContents('.prettierrc.json');

    const writeFileFormatted = async (filePath, contents) => {
        await fs.writeFile(
            filePath,
            format(JSON.stringify(contents, null, 4), {
                ...prettierConfig,
                filepath: filePath,
            }),
        );
    };

    const [, , tslintRuleName, eslintRuleName = tslintRuleName] = process.argv;

    const typeNames = await fs.readdir('types');
    for (const typeName of typeNames) {
        const typeDirectory = path.join('types', typeName);

        const tslintFilePath = path.join(typeDirectory, 'tslint.json');
        const tslintData = await parseAndReadFileContents(tslintFilePath);
        if (tslintData?.rules?.[tslintRuleName] !== false) {
            continue;
        }

        console.log(`Converting ${typeName}...`);

        delete tslintData.rules[tslintRuleName];
        if (Object.keys(tslintData.rules).length === 0) {
            console.log(`\t${tslintFilePath} has no remaining rules; deleting rules property.`);
            delete tslintFilePath.rules;
        } else {
            console.log(`\t${tslintFilePath} has remaining rules.`);
        }
        await writeFileFormatted(tslintFilePath, tslintData);

        const eslintFilePath = path.join(typeDirectory, '.eslintrc.json');
        const eslintData = (await parseAndReadFileContents(eslintFilePath)) ?? emptyObject;

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
})();
