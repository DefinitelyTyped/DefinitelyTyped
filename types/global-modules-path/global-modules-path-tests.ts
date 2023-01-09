import globalModulesPath = require('global-modules-path');

// @ts-expect-error
globalModulesPath();
// @ts-expect-error
globalModulesPath.getPath();
// @ts-expect-error
globalModulesPath.getPath(undefined, undefined);
// @ts-expect-error
globalModulesPath.getPath(undefined, 'hello');

// @ts-expect-error
globalModulesPath.getPath(undefined);
// @ts-expect-error
globalModulesPath.getPath(null);
// @ts-expect-error
globalModulesPath.getPath(() => {});
// @ts-expect-error
globalModulesPath.getPath({});
// @ts-expect-error
globalModulesPath.getPath(1);
// @ts-expect-error
globalModulesPath.getPath([]);
// @ts-expect-error
globalModulesPath.getPath(({}));

globalModulesPath.getPath('typescript', undefined); // $ExpectType string | null
// @ts-expect-error
globalModulesPath.getPath('typescript', null);
// @ts-expect-error
globalModulesPath.getPath('typescript', () => {});
// @ts-expect-error
globalModulesPath.getPath('typescript', {});
// @ts-expect-error
globalModulesPath.getPath('typescript', 1);
// @ts-expect-error
globalModulesPath.getPath('typescript', []);
// @ts-expect-error
globalModulesPath.getPath('typescript', ({}));

globalModulesPath.getPath('typescript'); // $ExpectType string | null
globalModulesPath.getPath('typescript', 'tsc'); // $ExpectType string | null
