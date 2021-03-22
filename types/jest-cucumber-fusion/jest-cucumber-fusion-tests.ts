import * as jcf from 'jest-cucumber-fusion';

type CbArgs = ReadonlyArray<string | Array<Record<string, string>>>;
function cb(...args: CbArgs): void {}
async function cbAsync(...args: CbArgs): Promise<void> {}

jcf.Given('', cb); // $ExpectType void
jcf.Given('', cbAsync); // $ExpectType void

jcf.When('', cb); // $ExpectType void
jcf.When('', cbAsync); // $ExpectType void

jcf.Then('', cb); // $ExpectType void
jcf.Then('', cbAsync); // $ExpectType void

jcf.And('', cb); // $ExpectType void
jcf.And('', cbAsync); // $ExpectType void

jcf.But('', cb); // $ExpectType void
jcf.But('', cbAsync); // $ExpectType void

jcf.After(() => {}); // $ExpectType void
jcf.After(async () => {}); // $ExpectType void

jcf.Before(() => {}); // $ExpectType void
jcf.Before(async () => {}); // $ExpectType void

jcf.Fusion(''); // $ExpectType void
jcf.Fusion('', { errors: true }); // $ExpectType void
jcf.Fusion('', { loadRelativePath: true }); // $ExpectType void
jcf.Fusion('', { scenarioNameTemplate: vars => vars.featureTitle }); // $ExpectType void
jcf.Fusion('', { tagFilter: '' }); // $ExpectType void
