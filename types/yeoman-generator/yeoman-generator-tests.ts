import Base = require('yeoman-generator');
import { Questions, Answers } from 'yeoman-generator';
import { EventEmitter } from 'events';
import * as inquirer from 'inquirer';

class MyES2015Generator extends Base {}

const generator = new MyES2015Generator(['arg1', 'arg2'], { opt1: 'foo', opt2: 3, opt3: false });
const eventEmitter: EventEmitter = generator;

const env: {
  adapter: {
    promptModule: inquirer.PromptModule;
  }
} = generator.env;
const args: {} = generator.args;
const resolved: string = generator.resolved;
const description: string = generator.description;
const appname: string = generator.appname;
const config: Base.Storage = generator.config;
const fs: Base.MemFsEditor = generator.fs;
generator.log('my message');

generator.argument('arg1', {});
generator.argument('arg2', {
  description: 'second argument',
  required: false,
  optional: true,
  type: String,
  default: 'foo',
});
generator.argument('arg2', {
  description: 'second argument',
  required: false,
  type: Number,
  default: 3,
});
generator.argument('arg3', {
  optional: true,
  type: Array,
  default: ['an item'],
});
generator.argument('arg4', {
  type: Object,
  default: {},
});

const argsHelp = generator.argumentsHelp();
generator.async();

async function install() {
    generator.installDependencies();
    generator.installDependencies({
        bower: true,
        npm: true,
    });

    generator.bowerInstall();
    generator.bowerInstall('pkg');
    generator.bowerInstall(['pkg1', 'pkg2']);
    generator.bowerInstall('pkg', {});
    generator.bowerInstall('pkg', { 'custom-option': 3 }, {});

    generator.npmInstall();
    generator.npmInstall('pkg');
    generator.npmInstall(['pkg1', 'pkg2']);
    generator.npmInstall('pkg', {});
    generator.npmInstall('pkg', { 'custom-option': 3 }, {});

    generator.yarnInstall();
    generator.yarnInstall('pkg');
    generator.yarnInstall(['pkg1', 'pkg2']);
    generator.yarnInstall('pkg', {});
    generator.yarnInstall('pkg', { 'custom-option': 3 }, {});

    generator.scheduleInstallTask('installer');
    generator.scheduleInstallTask('installer', 'pkg');
    generator.scheduleInstallTask('installer', ['pkg1', 'pkg2']);
    generator.scheduleInstallTask('installer', 'pkg', {});
    generator.scheduleInstallTask('installer', 'pkg', { 'custom-option': 3 }, {});
}

const composed1: Base = generator.composeWith('bootstrap', { sass: true });
const composed2: Base = generator.composeWith(require.resolve('generator-bootstrap/app/main.js'), { sass: true });

generator.desc('new description');

const dPath1: string = generator.destinationPath();
const dPath2: string = generator.destinationPath('foo');
const dPath3: string = generator.destinationPath(...['many', 'parts']);

const appname2: string = generator.determineAppname();

const gitEmail: string = generator.user.git.email();
const gitName: string = generator.user.git.name();
const githubUsername: Promise<string> = generator.user.github.username();

const help: string = generator.help();

generator.option('name', {});
generator.option('opt2', {
  description: 'a description',
  type: Boolean,
  alias: 'h',
  default: false,
  hide: false,
});
generator.option('opt3', {
  type: String,
  default: 'default value',
});
generator.option('opt4', {
  type: Number,
  default: 3.2,
});

const optionValue1 = generator.options.opt1;

const optionsHelp: string = generator.optionsHelp();

const answers: Promise<Answers> = generator.prompt([] as Questions);
const answers2: Promise<Answers> = generator.prompt([{store: true}] as Questions);
const answers3: Promise<Answers> = generator.prompt([{type: "input"}] as Questions);
const answers4: Promise<Answers> = generator.prompt({type: "input"});
const answers5: Promise<Answers> = generator.prompt({type: "input", store: false});

generator.registerTransformStream([]);

const rootGeneratorName: string = generator.rootGeneratorName();
const rootGeneratorVersion: string = generator.rootGeneratorVersion();

generator.run();
generator.run(() => undefined);

const sourceRoot: string = generator.sourceRoot();
const sourceRoot2: string = generator.sourceRoot('new root');

generator.spawnCommand('command', []);
generator.spawnCommand('command', [ '-arg' ]);
generator.spawnCommand('command', [], {});

generator.spawnCommandSync('command', []);
generator.spawnCommandSync('command', [ '-arg' ]);
generator.spawnCommandSync('command', [], {});

const tPath1: string = generator.templatePath();
const tPath2: string = generator.templatePath('foo');
const tPath3: string = generator.templatePath(...['many', 'parts']);

const usage: string = generator.usage();
