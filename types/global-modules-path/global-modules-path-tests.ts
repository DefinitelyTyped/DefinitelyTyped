import globalModulesPath = require('global-modules-path');

globalModulesPath(); // $ExpectError
globalModulesPath.getPath(); // $ExpectError
globalModulesPath.getPath(undefined, undefined); // $ExpectError
globalModulesPath.getPath(undefined, 'hello'); // $ExpectError

globalModulesPath.getPath(undefined); // $ExpectError
globalModulesPath.getPath(null); // $ExpectError
globalModulesPath.getPath(() => {}); // $ExpectError
globalModulesPath.getPath({}); // $ExpectError
globalModulesPath.getPath(1); // $ExpectError
globalModulesPath.getPath([]); // $ExpectError
globalModulesPath.getPath(({})); // $ExpectError

globalModulesPath.getPath('typescript', undefined); // $ExpectType string | null
globalModulesPath.getPath('typescript', null); // $ExpectError
globalModulesPath.getPath('typescript', () => {}); // $ExpectError
globalModulesPath.getPath('typescript', {}); // $ExpectError
globalModulesPath.getPath('typescript', 1); // $ExpectError
globalModulesPath.getPath('typescript', []); // $ExpectError
globalModulesPath.getPath('typescript', ({})); // $ExpectError

globalModulesPath.getPath('typescript'); // $ExpectType string | null
globalModulesPath.getPath('typescript', 'tsc'); // $ExpectType string | null
