import autoExternal from './index';
import { Plugin } from 'rollup';

const config: Plugin = autoExternal({
    builtins: false,
    dependencies: true,
    packagePath: './packages/module/package.json',
    peerDependencies: false,
});
console.log(config);
