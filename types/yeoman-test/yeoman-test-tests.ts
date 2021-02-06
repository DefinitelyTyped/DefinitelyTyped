import * as fs from 'fs';
import * as path from 'path';
import * as helpers from 'yeoman-test';
import Generator = require('yeoman-generator');

declare const env: any;
declare const generator: Generator;
declare function before(done: (...args: any[]) => void): void;

// helpers.setUpTestDirectory()
before(helpers.setUpTestDirectory('dir'));

// helpers.gruntfile()
before(done => helpers.gruntfile({foo: 'bar'}, done));

// helpers.testDirectory()
helpers.testDirectory(path.join(__dirname, './temp'), () => {
    fs.writeFileSync('testfile', 'Roses are red.');
});

// helpers.mockPrompt()
helpers.mockPrompt(generator, {foo: 'bar'});

// helpers.restorePrompt()
helpers.restorePrompt(generator);

// helpers.mockLocalConfig()
helpers.mockLocalConfig(generator, {foo: 'bar'});

// helpers.createDummyGenerator()
const dummyGenerator = helpers.createDummyGenerator();

// helpers.createGenerator()
const angularGenerator = helpers.createGenerator('angular:app', [
    '../../app',
    '../../common',
    '../../controller',
    '../../main',
    [helpers.createDummyGenerator(), 'testacular:app']
]);

// helpers.registerDependencies()
helpers.registerDependencies(env, ['dependency']);

// helpers.run()
helpers.run(path.join(__dirname, '../app'))
    .withOptions({foo: 'bar'})
    .withArguments(['name-x'])
    .withPrompts({coffee: false});

helpers.run(path.join(__dirname, '../app'))
    .inTmpDir(dir => { /* ... */ })
    .withPrompts({coffee: false})
    .then(() => { /* ... */ });

helpers.run(path.join(__dirname, '../app')).withGenerators([
    [helpers.createDummyGenerator(), 'karma:app'],
]);

helpers.run(Generator, {
    resolved: '../app',
    namespace: 'custom:generator'
});

before(done => {
    helpers.run(path.join(__dirname, '../app'))
        .on('error', error => { /* ... */ })
        .on('ready', generator => { /* ... */ })
        .on('end', done);
});
