import { ESLint } from 'eslint';
import eslintFormatter = require('react-dev-utils/eslintFormatter');

async function main() {
    const results = await (new ESLint({}).lintText(''));

    // $ExpectError
    eslintFormatter(['error']);

    // $ExpectError
    eslintFormatter([results]);

    // $ExpectType string
    eslintFormatter(results);
}
