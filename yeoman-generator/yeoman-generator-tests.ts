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
compose.destinationRoot() === 'string';
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
compose.sourceRoot('rootPath') === 'string';
compose.sourceRoot() === 'string';

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

// http://yeoman.io/generator/Base.html#destinationPath
generator.destinationPath() === 'string';
generator.destinationPath('path1') === 'string';
generator.destinationPath('path1', 'path2') === 'string';
generator.destinationPath('path1', 'path2', 'path3') === 'string';

// http://yeoman.io/generator/Base.html#templatePath
generator.templatePath() === 'string';
generator.templatePath('path1') === 'string';
generator.templatePath('path1', 'path2') === 'string';
generator.templatePath('path1', 'path2', 'path3') === 'string';

// http://yeoman.io/generator/Base.html#npmInstall
generator.npmInstall();
generator.npmInstall('pkg');
generator.npmInstall([ 'pkg1', 'pkg2' ]);
generator.npmInstall('pkg', {});
generator.npmInstall('pkg', {}, () => {});

// http://yeoman.io/generator/Base.html#installDependencies
generator.installDependencies();
generator.installDependencies({});
generator.installDependencies({ npm: true });
generator.installDependencies({ bower: true });
generator.installDependencies({ skipMessage: true });
generator.installDependencies({ callback: () => {} });

// http://yeoman.io/generator/Base.html#spawnCommand
generator.spawnCommand('command', []);
generator.spawnCommand('command', [ '-arg' ]);
generator.spawnCommand('command', [], {});

// http://yeoman.io/generator/Base.html#spawnCommandSync
generator.spawnCommandSync('command', []);
generator.spawnCommandSync('command', [ '-arg' ]);
generator.spawnCommandSync('command', [], {});

// http://yeoman.io/generator/Base.html#option
generator.options['opt'] === 'string';

// http://yeoman.io/generator/Base.html#prompt
// https://github.com/SBoudrias/Inquirer.js
generator.prompt({ name: 'Name', message: 'Message' }, (answer) => {}); 
generator.prompt({ name: 'Name', message: (answers) => 'Message' }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', choices: [ 'c1', 'c2' ] }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', choices: [ { name: 'Choice 1', value: 'c1' } ] }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', choices: (answers) => [ 'c1', 'c2' ] }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', choices: (answers) => [ { name: 'Choice 1', value: 'c1' } ] }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', choices: (answers) => [ { name: 'Choice 1', value: 'c1', short: '1' } ] }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', default: 'string' }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', default: 10 }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', default: [ 'string' ] }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', default: [ 10 ] }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', default: (answers) => [ 'string' ] }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', default: (answers) => [ 10 ] }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', default: (answers) => 'string' }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', default: (answers) => 10 }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', type: "list" }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', validate: (input) => true }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', validate: (input) => "Error" }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', filter: (input) => input }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', when: (answers) => true }, (answer) => {}); 
generator.prompt({ name: 'Name', message: '', when: true }, (answer) => {}); 

// http://yeoman.io/generator/Base.html
// https://github.com/SBoudrias/mem-fs-editor
generator.fs.read("file") === "string";
generator.fs.read("file", {}) === "string";
generator.fs.readJSON("file") === {};
generator.fs.readJSON("file", {}) === {};
generator.fs.write("file", "contents");
generator.fs.writeJSON("file", {});
generator.fs.writeJSON("file", {}, () => {});
generator.fs.writeJSON("file", {}, () => {}, 2);
generator.fs.delete("file");
generator.fs.delete("file", {});
generator.fs.copy("from", "to");
generator.fs.copy("from", "to", {});
generator.fs.copyTpl("from", "to", {});
generator.fs.copyTpl("from", "to", {}, {});
generator.fs.move("from", "to");
generator.fs.move("from", "to", {});
generator.fs.exists("file") === true;
generator.fs.commit(() => {});
generator.fs.commit([], () => {});
