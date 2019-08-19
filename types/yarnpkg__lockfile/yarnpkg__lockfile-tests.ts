import { parse, stringify, FirstLevelDependency } from '@yarnpkg/lockfile';

function testFirstLevelDependency(obj: FirstLevelDependency) {}

const file = '';
const json = parse(file);
const fileAgain = stringify(json);
fileAgain.toLowerCase();

Object.keys(json.object).forEach(k => {
  const value = json.object[k];
  testFirstLevelDependency(value);
});
