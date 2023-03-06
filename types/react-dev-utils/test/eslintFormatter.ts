import { ESLint } from 'eslint';
import eslintFormatter = require('react-dev-utils/eslintFormatter');

async function main() {
    const results = await (new ESLint({}).lintText(''));

    // @ts-expect-error
    eslintFormatter(['error']);

    // @ts-expect-error
    eslintFormatter([results]);

    // $ExpectType string
    eslintFormatter(results);
}
