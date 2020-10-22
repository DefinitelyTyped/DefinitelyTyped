import dependencyTree = require('dependency-tree');

const tree = dependencyTree({
  filename: 'path/to/a/file',
  directory: 'path/to/all/files',
  requireConfig: 'path/to/requirejs/config',
  webpackConfig: 'path/to/webpack/config',
  tsConfig: 'path/to/typescript/config',
  nodeModulesConfig: {
    entry: 'module'
  },
  filter: path => path.indexOf('node_modules') === -1,
  nonExistent: []
});

const list = dependencyTree.toList({
  filename: 'path/to/a/file',
  directory: 'path/to/all/files'
});
