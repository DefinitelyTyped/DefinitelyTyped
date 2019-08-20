import parseYarnLock = require('@yarnpkg/lockfile');

function testFirstLevelDependency(obj: parseYarnLock.FirstLevelDependency) {}

const { object } = parseYarnLock('');

Object.keys(object).forEach(k => {
  const value = object[k];
  testFirstLevelDependency(value);
});
