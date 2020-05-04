import { parse, stringify, FirstLevelDependency } from '@yarnpkg/lockfile';

function testParseResultConflict(obj: {}) {}
function testFirstLevelDependency(obj: FirstLevelDependency) {}

const file = '';
const parseResult = parse(file);

if (parseResult.type === 'conflict') testParseResultConflict(parseResult.object)
if (parseResult.type === 'success' || parseResult.type === 'merge') {
  const fileAgain = stringify(parseResult.object);
  fileAgain.toLowerCase();
}

if (parseResult.type === 'merge' || parseResult.type === 'success')
  Object.values(parseResult.object).forEach(v => testFirstLevelDependency(v));
