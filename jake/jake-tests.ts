// https://github.com/mde/jake
/// <reference path="jake.d.ts" />

import path = module("path");

desc('This is the default task.');
task('default', function (params) {
  console.log('This is the default task.');
});

desc('This task has prerequisites.');
task('hasPrereqs', ['foo', 'bar', 'baz'], function (params) {
  console.log('Ran some prereqs first.');
});

desc('This is an asynchronous task.');
task('asyncTask', {async: true}, function () {
  setTimeout(complete, 1000);
});

desc('This builds a minified JS file for production.');
file('foo-minified.js', ['bar', 'foo-bar.js', 'foo-baz.js'], function () {
  // Code to concat and minify goes here
});

desc('This creates the bar directory for use with the foo-minified.js file-task.');
directory('bar');

desc('This is the default task.');
task('default', function () {
  console.log('This is the default task.');
});

namespace('foo', function () {
  desc('This the foo:bar task');
  task('bar', function () {
    console.log('doing foo:bar task');
  });

  desc('This the foo:baz task');
  task('baz', ['default', 'foo:bar'], function () {
    console.log('doing foo:baz task');
  });

});

desc('This is an awesome task.');
task('awesome', function (a, b, c) {
  console.log(a, b, c);
});


desc('This is an awesome task.');
task('awesome', function (a, b, c) {
  console.log(a, b, c);
  console.log(process.env.qux, process.env.frang);
});


jake.addListener('complete', function () {
  process.exit();
});

desc('Calls the foo:bar task and its prerequisites.');
task('invokeFooBar', function () {
  // Calls foo:bar and its prereqs
  jake.Task['foo:bar'].invoke();
});

desc('Calls the foo:bar task and its prerequisites.');
task('invokeFooBar', function () {
  // Calls foo:bar and its prereqs
  jake.Task['foo:bar'].invoke();
  // Does nothing
  jake.Task['foo:bar'].invoke();
});

desc('Calls the foo:bar task without its prerequisites.');
task('executeFooBar', function () {
  // Calls foo:bar without its prereqs
  jake.Task['foo:baz'].execute();
});

desc('Calls the foo:bar task without its prerequisites.');
task('executeFooBar', function () {
  // Calls foo:bar without its prereqs
  jake.Task['foo:baz'].execute();
  // Can keep running this over and over
  jake.Task['foo:baz'].execute();
  jake.Task['foo:baz'].execute();
});

desc('Calls the foo:bar task and its prerequisites.');
task('invokeFooBar', function () {
  // Calls foo:bar and its prereqs
  jake.Task['foo:bar'].invoke();
  // Does nothing
  jake.Task['foo:bar'].invoke();
  // Only re-runs foo:bar, but not its prerequisites
  jake.Task['foo:bar'].reenable();
  jake.Task['foo:bar'].invoke();
});

desc('Calls the foo:bar task and its prerequisites.');
task('invokeFooBar', function () {
  // Calls foo:bar and its prereqs
  jake.Task['foo:bar'].invoke();
  // Does nothing
  jake.Task['foo:bar'].invoke();
  // Re-runs foo:bar and all of its prerequisites
  jake.Task['foo:bar'].reenable(true);
  jake.Task['foo:bar'].invoke();
});

desc('Passes params on to other tasks.');
task('passParams', function () {
  var t = jake.Task['foo:bar'];
  // Calls foo:bar, passing along current args
  t.invoke.apply(t, arguments);
});

desc('Calls the async foo:baz task and its prerequisites.');
task('invokeFooBaz', {async: true}, function () {
  var t = jake.Task['foo:baz'];
  t.addListener('complete', function () {
    console.log('Finished executing foo:baz');
    // Maybe run some other code
    // ...
    // Complete the containing task
    complete();
  });
  // Kick off foo:baz
  t.invoke();
});


namespace('vronk', function () {
  task('groo', function () {
    var t = jake.Task['vronk:zong'];
    t.addListener('error', function (e) {
      console.log(e.message);
    });
    t.invoke();
  });

  task('zong', function () {
    throw new Error('OMFGZONG');
  });
});

desc('This task fails.');
task('failTask', function () {
  fail('Yikes. Something back happened.');
});


desc('This task fails with an exit-status of 42.');
task('failTaskQuestionCustomStatus', function () {
  fail('What is the answer?', 42);
});


declare var sourceDir:string;
declare var currentDir:string;
jake.mkdirP('app/views/layouts');
jake.cpR(path.join(sourceDir, '/templates'), currentDir);
jake.readdirR('pkg');
jake.rmRf('pkg');

desc('Runs the Jake tests.');
task('test', {async: true}, function () {
  var cmds = [
    'node ./tests/parseargs.js'
  , 'node ./tests/task_base.js'
  , 'node ./tests/file_task.js'
  ];
  jake.exec(cmds, function () {
    console.log('All tests passed.');
    complete();
  }, {printStdout: true});
});

var ex = jake.createExec(['do_thing.sh'], {printStdout: true});
ex.addListener('error', function (msg, code) {
  if (code == 127) {
    console.log("Couldn't find do_thing script, trying do_other_thing");
    ex.append('do_other_thing.sh');
  }
  else {
    fail('Fatal error: ' + msg, code);
  }
});
ex.run();

task('echo', {async: true}, function () {
  jake.exec(['echo "hello"'], function () {
    jake.logger.log('Done.');
    complete();
  }, {printStdout: !jake.program.opts.quiet});
});

function hoge(){
  var t = new jake.PackageTask('fonebone', 'v0.1.2112', function () {
    var fileList = [
      'Jakefile'
    , 'README.md'
    , 'package.json'
    , 'lib/*'
    , 'bin/*'
    , 'tests/*'
    ];
    this.packageFiles.include(fileList);
    this.needTarGz = true;
    this.needTarBz2 = true;
  });
}

var list = new jake.FileList();
list.include('foo/*.txt');
list.include(['bar/*.txt', 'README.md']);
list.include('Makefile', 'package.json');
list.exclude('foo/zoobie.txt');
list.exclude(/foo\/src.*.txt/);
console.log(list.toArray());


var t = new jake.TestTask('fonebone', function () {
  var fileList = [
    'tests/*'
  , 'lib/adapters/**/test.js'
  ];
  this.testFiles.include(fileList);
  this.testFiles.exclude('tests/helper.js');
  this.testName = 'testMainAndAdapters';
});

var assert = require('assert')
  , tests;

tests = {
  'sync test': function () {
    // Assert something
    assert.ok(true);
  }
, 'async test': function (next) {
    // Assert something else
    assert.ok(true);
    // Won't go next until this is called
    next();
  }
, 'another sync test': function () {
    // Assert something else
    assert.ok(true);
  }
};

//module.exports = tests;

var p = new jake.NpmPublishTask('jake', [
  'Makefile'
, 'Jakefile'
, 'README.md'
, 'package.json'
, 'lib/*'
, 'bin/*'
, 'tests/*'
]);