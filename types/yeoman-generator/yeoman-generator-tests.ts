import Base = require('yeoman-generator');
import { Questions, Answers } from 'yeoman-generator';
import { EventEmitter } from 'events';
import * as inquirer from 'inquirer';
import { Editor } from 'mem-fs-editor';
import Storage = require('yeoman-generator/lib/util/storage');

class MyES2015GeneratorWithFeatures extends Base {
    constructor(args: any, options: Base.GeneratorOptions) {
        super(args, options, { customInstallTask: true, customCommitTask: true });
    }

    customInstallTask() {
    }

    customCommitTask() {
    }
}

class MyES2015Generator extends Base { }

const generator = new MyES2015Generator(
  ['arg1', 'arg2'],
  {
    opt1: 'foo',
    opt2: 3,
    opt3: false,
    customPriorities: [
      {
        priorityName: 'build',
        before: 'writing'
      },
      {
        priorityName: 'cleanup',
        before: 'end'
      }
    ]
  });

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
const config: Storage = generator.config;
const fs: Editor = generator.fs;
const contextRoot: string = generator.contextRoot;

// $ExpectType any
generator._templateData('lint.ruleset');

generator.queueBasicTasks();
generator.queueMethod(() => { });
generator.queueTask(
  {
    method: () => { },
    taskName: 'nothing'
  });
generator.queueTaskGroup(
  {
    install: () => { },
    initializing: () => { }
  },
  {
    queueName: 'test'
  });
generator.cancelCancellableTasks();

generator.log('my message');
generator.log('Hello %world', { world: 'Universe' });
generator.log.error('Error: %s', 'This is a test');
generator.log.ok('Workspace created');

generator.debug('test');

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
  generator.bowerInstall('pkg', { 'custom-option': 3 }, { cwd: '.' });

  generator.npmInstall();
  generator.npmInstall('pkg');
  generator.npmInstall(['pkg1', 'pkg2']);
  generator.npmInstall('pkg', {});
  generator.npmInstall('pkg', { 'custom-option': 3 }, { cwd: '.' });

  generator.yarnInstall();
  generator.yarnInstall('pkg');
  generator.yarnInstall(['pkg1', 'pkg2']);
  generator.yarnInstall('pkg', {});
  generator.yarnInstall('pkg', { 'custom-option': 3 }, { cwd: '.' });

  generator.scheduleInstallTask('installer');
  generator.scheduleInstallTask('installer', 'pkg');
  generator.scheduleInstallTask('installer', ['pkg1', 'pkg2']);
  generator.scheduleInstallTask('installer', 'pkg', {});
  generator.scheduleInstallTask('installer', 'pkg', { 'custom-option': 3 }, { cwd: '.' });
}

const composed1: Base = generator.composeWith('bootstrap', { sass: true });
const composed2: Base = generator.composeWith(require.resolve('generator-bootstrap/app/main.js'), { sass: true });
const composed3: Base = generator.composeWith(
  {
    Generator: MyES2015Generator,
    path: './my-es2015-generator/lib/generators/app/index.js'
  });
// $ExpectType MyES2015Generator
generator.composeWith('bootstrap', {}, false);
// $ExpectType MyES2015Generator
generator.composeWith([], {}, false);
// $ExpectType Generator<GeneratorOptions>
generator.composeWith('bootstrap', {}, true);
// $ExpectType Generator<GeneratorOptions>[]
generator.composeWith([], {}, true);
// $ExpectType Generator<GeneratorOptions>[]
generator.composeWith(
  [
    "",
    {
      Generator: MyES2015Generator,
      path: ""
    }
  ],
  {},
  true);

generator.desc('new description');

// $ExpectType string
generator.destinationRoot();
generator.destinationRoot('./destination', true);

const dPath1: string = generator.destinationPath();
const dPath2: string = generator.destinationPath('foo');
const dPath3: string = generator.destinationPath(...['many', 'parts']);

const appname2: string = generator.determineAppname();

const gitEmail: string = generator.user.git.email();
const gitName: string = generator.user.git.name();
const githubUsername: Promise<string> = generator.user.github.username();

const help: string = generator.help();

generator.option('name', { type: Boolean });
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
generator.option('opt5');
generator.option('opt6', {
  type(opt: string): any {
    return opt;
  }
});

const optionValue1 = generator.options.opt1;

const optionsHelp: string = generator.optionsHelp();

const answers: Promise<Answers> = generator.prompt([]);
const answers2: Promise<Answers> = generator.prompt([{ store: true }]);
const answers3: Promise<Answers> = generator.prompt([{ type: 'input' }]);
const answers4: Promise<Answers> = generator.prompt({ type: 'input' });
const answers5: Promise<Answers> = generator.prompt({ type: 'input', store: false });

generator.registerPriorities(
  [
    {
      priorityName: 'cleanup',
      queueName: 'my#cleanup',
      before: 'end'
    }
  ]);

generator.registerConfigPrompts([{ storage: generator.config, exportOption: true, type: "input" }]);
generator.queueTransformStream([]);

const rootGeneratorName: string = generator.rootGeneratorName();
const rootGeneratorVersion: string = generator.rootGeneratorVersion();

generator.run();
generator.run(() => undefined);
generator.startOver();
generator.startOver({ customPriorities: [] });

const sourceRoot: string = generator.sourceRoot();
const sourceRoot2: string = generator.sourceRoot('new root');

generator.spawnCommand('command', []);
generator.spawnCommand('command', ['-arg']);
generator.spawnCommand('command', [], {});

generator.spawnCommandSync('command', []);
generator.spawnCommandSync('command', ['-arg']);
generator.spawnCommandSync('command', [], {});

const tPath1: string = generator.templatePath();
const tPath2: string = generator.templatePath('foo');
const tPath3: string = generator.templatePath(...['many', 'parts']);

const usage: string = generator.usage();

generator.copyDestination('LICENSE', 'packages/test/LICENSE');
generator.copyTemplate('LICENSE', 'packages/test/LICENSE', {}, { AuthorName: 'John Doe', Year: new Date().getFullYear() });
generator.deleteDestination('.eslintrc.js');
generator.readDestination("README.md");
generator.renderTemplate('package.json', 'package.json', 'package');
generator.renderTemplates(
  [
    {
      source: 'LICENSE'
    }
  ],
  {});

generator.addDependencies("yeoman-generator@^5.0.0");
generator.addDevDependencies("yo@^4.0.0");
generator.packageJson.merge({ scripts: { test: "mocha" } });

// $ExpectType string | undefined
generator.options.resolved;
