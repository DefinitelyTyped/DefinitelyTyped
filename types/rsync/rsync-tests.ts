import Rsync = require('rsync');

// --------------------------
// simple usage
// Build the command
const rs = new Rsync()
    .shell('ssh')
    .flags('az')
    .source('/path/to/source')
    .destination('server:/path/to/destination');

// Execute the command
rs.execute(function(error, code, cmd) {
    // we're done
});

// --------------------------
// api
const rsync = new Rsync();


// set(flags, set)
rsync.set('a')
    .set('progress')
    .set('list-only')
    .set('exclude-from', '/path/to/exclude-file');

// unset
rsync.unset('progress')
    .unset('quiet');

// flags// As String
rsync.flags('avz');        // set
rsync.flags('avz', false); // unset

// As String arguments
rsync.flags('a', 'v', 'z');        // set
rsync.flags('a', 'v', 'z', false); // unset

// As Array
rsync.flags(['a', 'v', 'z']);   // set
rsync.flags(['a', 'z'], false); // unset

// As Object
rsync.flags({
    'a': true, // set
    'z': true, // set
    'v': false // unset
});


// isSet(option)
rsync.set('quiet');
rsync.isSet('quiet'); // is TRUE
rsync.isSet('q');     // is FALSE


// option(option)
rsync.option('rsh');      // returns String value
rsync.option('progress'); // returns NULL


// command()
const command = rsync.command();


// output(stdoutHandler, stderrHandler)
rsync.output(
    function(data) {
        // do things like parse progress
    }, function(data) {
        // do things like parse error output
    }
);


// execute(callback, stdoutHandler, stderrHandler)
// signal handler function
const quitting = function() {
    if (rsyncPid) {
        rsyncPid.kill();
    }
    process.exit();
}
process.on("SIGINT", quitting); // run signal handler on CTRL-C
process.on("SIGTERM", quitting); // run signal handler on SIGTERM
process.on("exit", quitting); // run signal handler when main process exits

// simple execute
var rsyncPid = rsync.execute(function(error, code, cmd) {
    // we're done
});

// execute with stream callbacks
var rsyncPid = rsync.execute(
    function(error, code, cmd) {
        // we're done
    }, function(data) {
        // do things like parse progress
    }, function(data) {
        // do things like parse error output
    }
);


// option shorthands
rsync.shell('ssh')
    .delete()
    .progress()
    .archive()
    .compress()
    .recursive()
    .update()
    .quiet()
    .dirs()
    .links()
    .dry();


// accessor methods
rsync.executable('executable');
const e = rsync.executable();

rsync.executableShell('executableShell');
const s = rsync.executableShell();

rsync.destination('destination');
const d = rsync.destination();

rsync.source('/a/path')
    .source('/b/path');
rsync.source(['/a/path', '/b/path']);
const src = rsync.source()


// patterns
// on an existing Rsync object
rsync.patterns([ '-.git', { action: '+', pattern: '/some_dir' }]);

// exclude(pattern)
// chained
rsync.exclude('.git')
  .exclude('.DS_Store');

// as Array
rsync.exclude(['.git', '.DS_Store']);


// include(pattern)
// chained
rsync.include('/a/file')
  .include('/b/file');

// as Array
rsync.include(['/a/file', '/b/file']);