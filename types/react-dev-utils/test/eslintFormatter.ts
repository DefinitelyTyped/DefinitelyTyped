import { CLIEngine } from 'eslint';
import eslintFormatter = require('react-dev-utils/eslintFormatter');

const { results } = new CLIEngine({}).executeOnText('');

// $ExpectError
eslintFormatter(['error']);

// $ExpectError
eslintFormatter([results]);

// $ExpectType string
eslintFormatter(results);
