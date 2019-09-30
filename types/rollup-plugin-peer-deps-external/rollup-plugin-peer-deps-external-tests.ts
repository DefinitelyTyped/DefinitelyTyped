import external from 'rollup-plugin-peer-deps-external';

const module = external();

module();
module({});
external({includeDependencies: true, packageJsonPath: ''});
