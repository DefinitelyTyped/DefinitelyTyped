import webpack = require('webpack');
import VirtualModulesPlugin = require('webpack-virtual-modules');

const virtualModules = new VirtualModulesPlugin({
    'node_modules/module-foo.js': 'module.exports = { foo: "foo" };',
    'node_modules/module-bar.js': 'module.exports = { bar: "bar" };',
});

virtualModules.writeModule('node_modules/module-foo.js', 'module.exports = { foo: "foo" };');

webpack({
    plugins: [virtualModules],
});
