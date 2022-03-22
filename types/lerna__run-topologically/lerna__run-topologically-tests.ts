import { Package } from '@lerna/package';
import { runTopologically } from '@lerna/run-topologically';

runTopologically([], (a: Package) => 5);
runTopologically<number>([], (a: Package) => 5);
runTopologically<string>([], (a: Package) => 'test', {
    concurrency: 5,
});
