import external from 'rollup-plugin-peer-deps-external';

external();
external({});
external({ includeDependencies: true, packageJsonPath: '' });
