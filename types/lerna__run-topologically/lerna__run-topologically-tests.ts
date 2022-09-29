import { Package } from '@lerna/package';
import { runTopologically } from '@lerna/run-topologically';

runTopologically([], (a: Package) => Promise.resolve(5));
runTopologically<number>([], (a: Package) => Promise.resolve(5));
runTopologically<string>([], (a: Package) => Promise.resolve('test'), {
    concurrency: 5,
});
