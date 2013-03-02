///<reference path="commander.d.ts"/>

//
// TODO: improve tests
// [the code below was extracted from the documentation and examples, but does not seem to cover all cases]
// 

import program = module("commander");

program
  .version('0.0.1')
  .option('-C, --chdir <path>', 'change the working directory')
  .option('-c, --config <path>', 'set config path [./deploy.conf]')
  .option('-T, --no-tests', 'ignore test hook')

// $ deploy setup stage
// $ deploy setup
program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .action(function (env) {
      env = env || 'all';
      console.log('setup for %s env(s)', env);
  });

// $ deploy stage
// $ deploy production
program
  .command('*')
  .action(function (env) {
      console.log('deploying "%s"', env);
  });

program.option('-p, --pepper', 'add pepper');

program.option('-C, --chdir <path>', 'change the working directory');

program.prompt('Username: ', function (name) {
    console.log('hi %s', name);
});

program.prompt('Description:', function (desc) {
    console.log('description was "%s"', desc.trim());
});

program.promptForNumber("Enter a number:", (n) => { });

program.confirm("Confirm? ", (f) => { });

program.choose(["a", "b", "c"], (i) => { });