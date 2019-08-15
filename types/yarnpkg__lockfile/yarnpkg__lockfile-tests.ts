import parseYarnLock = require('@yarnpkg/lockfile');

function testFirstLevelDependency(obj: {
  version: string;
  resolved?: string;
  dependencies?: {
    [packageName: string]: string;
  }
}) {}

const { object } = parseYarnLock('');

Object.keys(object).forEach(k => {
  const value = object[k];
  testFirstLevelDependency(value);
});
