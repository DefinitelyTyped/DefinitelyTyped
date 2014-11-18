/// <reference path="yeoman-generator.d.ts" />
import yeoman = require('yeoman-generator');

var base = yeoman.generators.Base;
var namedBase = yeoman.generators.NamedBase;

var generator = base.extend({
  initializing: function() {
    return;
  },
  writing: {
    app: function() {
      return;
    },
    other: function() {
      return;
    }
  },
  end: function() {
    return;
  }
});

generator.argument('name', {
  desc: 'desc',
  required: true,
  optional: true,
  type: 'any',
  defaults: 'any',
});

var compose = generator.composeWith('namespace', 'any', {
  local: 'local',
  link: 'link'
});

compose.defaultFor('name');
compose.destinationRoot('rootPath') === 'string';
compose.determineAppname();
compose.getCollisionFilter()('output');
compose.hookFor('name', {
  as: 'string',
  args: 'any',
  options: 'any'
});
compose.option('name', {
  alias: 'string',
  defaults: 'any',
  desc: 'string',
  hide: true,
  type: 'any'
});
var returnString: boolean;
returnString = compose.rootGeneratorName() === 'string';
compose.run('args');
compose.run('args', () => {
  return;
});
compose.runHooks(() => {
  return;
});
returnString = compose.sourceRoot('rootPath') === 'string';

var assert = yeoman.assert;

assert.file('path');
assert.file(['paths', 'paths']);
assert.fileContent('file', /.*/);
assert.fileContent([
  ['string', /.*/],
  ['string', /.*/],
  ['string', /.*/]
]);
assert.files([
  ['string', /.*/],
  'string',
  ['string', /.*/],
  'string'
]);
assert.implement('subject', 'methods');
assert.noFile('file');
assert.noFileContent('file', /.*/);
assert.noFileContent([
  ['string', /.*/],
  ['string', /.*/],
  ['string', /.*/]
]);
assert.noImplement('subject', 'methods');
assert.textEqual('value', 'expected');

var test = yeoman.test;
var dummyGen = test.createDummyGenerator();
dummyGen.determineAppname();

var createdGen = test.createGenerator('name', ['any', 'amy'], 'args', 'options');
createdGen.determineAppname();

test.decorate('context', 'method', () => {
  return; // replacement
}, 'options');
test.gruntfile('options', () => {
  return; // done
});
test.mockPrompt(createdGen, 'answers');
test.registerDependencies(['dependencies', 'dependencies']);
test.restore();
var runContext = test.run('generator');

runContext.async()();
runContext.inDir('dirPath')
  .withArguments('args')
  .withGenerators(['deps', 'deps'])
  .withOptions('opts')
  .withPrompts('answers');
