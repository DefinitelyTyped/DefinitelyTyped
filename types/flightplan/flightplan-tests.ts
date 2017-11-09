

import flightplan = require('flightplan');

// flightplan.target
// run with `fly staging`
flightplan.target('staging', {
  // see: https://github.com/mscdex/ssh2#connection-methods
  host: 'staging.example.com',
  username: 'pstadler',
  agent: 'agent'
});

// run with `fly production`
flightplan.target('production', [
  {
    host: 'www1.example.com',
    username: 'pstadler',
    agent: 'agent'
  },
  {
    host: 'www2.example.com',
    username: 'pstadler',
    agent: 'agent'
  }
]);

// run with `fly dynamic-hosts`
flightplan.target('dynamic-hosts', function(done) {
    done('test');
});

// with failsafe
flightplan.target('production', [
  {
    host: 'www1.example.com',
    username: 'pstadler',
    agent: 'agent'
  },
  {
    host: 'www2.example.com',
    username: 'pstadler',
    agent: 'agent',
    failsafe: true // continue flightplan even if connection to www2 fails
  }
]);

// flightplan.local
flightplan.local(function(local) {
  local.echo('hello from your localhost.');
});

// flightplan.remote
flightplan.remote(function(remote) {
  remote.echo('hello from the remote host.');
});

// flightplan.abort
flightplan.abort('Severe turbulences over the atlantic ocean!');

// transport.exec
flightplan.local(function(local) {
  local.echo('Shell.echo() called');
});
 
flightplan.remote(function(remote) {
  remote.echo('SSH.echo() called');
});

flightplan.remote(function(transport) { // applies to local flights as well 
  // Flightplan specific information 
  console.log(flightplan.runtime.task);    // 'default' 
  console.log(flightplan.runtime.target);  // 'production' 
  console.log(flightplan.runtime.hosts);   // [{ host: 'www1.example.com', port: 22 }, ...] 
  console.log(flightplan.runtime.options.debug); // { debug: true, ... } 
 
  // Flight specific information 
  console.log(transport.runtime); // { host: 'www1.example.com', port: 22 } 
});


flightplan.local(function(transport) {
  // output of `ls -al` is suppressed 
  transport.ls('-al', {silent: true});
  
  // flightplan continues even if command fails with exit code `1` 
  transport.ls('-al foo', {failsafe: true}); // ls: foo: No such file or directory 
  
  // both options together 
  transport.ls('-al foo', {silent: true, failsafe: true});
  
  var result = transport.echo('Hello world');
  console.log(result); // { code: 0, stdout: 'Hello world\n', stderr: null }
  
  // increase maxBuffer for child_process#exec() 
  transport.ls('-al', {exec: {maxBuffer: 2000*1024}});
  
  // enable pty for mscdex/ssh2#exec() 
  transport.ls('-al', {exec: {pty: true}});
});

flightplan.remote(function(transport) {
  // output of `ls -al` is suppressed 
  transport.ls('-al', {silent: true});
  
  // flightplan continues even if command fails with exit code `1` 
  transport.ls('-al foo', {failsafe: true}); // ls: foo: No such file or directory 
  
  // both options together 
  transport.ls('-al foo', {silent: true, failsafe: true});
  
  var result = transport.echo('Hello world');
  console.log(result); // { code: 0, stdout: 'Hello world\n', stderr: null }
  
  // increase maxBuffer for child_process#exec() 
  transport.ls('-al', {exec: {maxBuffer: 2000*1024}});
  
  // enable pty for mscdex/ssh2#exec() 
  transport.ls('-al', {exec: {pty: true}});
});

// transport.sudo
flightplan.local(function(transport) {
  // will run: sudo -u root -i bash -c 'Hello world' 
  transport.sudo('echo Hello world');
  
  // will run sudo -u www -i bash -c 'Hello world' 
  transport.sudo('echo Hello world', {user: 'www'});
  
  // further options passed (see `exec()`) 
  transport.sudo('echo Hello world', {user: 'www', silent: true, failsafe: true});
});

flightplan.remote(function(transport) {
  // will run: sudo -u root -i bash -c 'Hello world' 
  transport.sudo('echo Hello world');
  
  // will run sudo -u www -i bash -c 'Hello world' 
  transport.sudo('echo Hello world', {user: 'www'});
  
  // further options passed (see `exec()`) 
  transport.sudo('echo Hello world', {user: 'www', silent: true, failsafe: true});
});

// transport.files
flightplan.local(function(transport) {
  var files = ['path/to/file1', 'path/to/file2'];
  transport.transfer(files, '/tmp/foo');
  
  // use result from a previous command 
  var files2 = transport.git('ls-files', {silent: true}); // get list of files under version control 
  transport.transfer(files2, '/tmp/foo');
  
  // use zero-terminated result from a previous command 
  var files3 = transport.exec('(git ls-files -z;find node_modules -type f -print0)', {silent: true});
  transport.transfer(files3, '/tmp/foo');
  
  // use results from multiple commands 
  var result1 = transport.git('ls-files', {silent: true}).stdout.split('\n');
  var result2 = transport.find('node_modules -type f', {silent: true}).stdout.split('\n');
  var files4 = result1.concat(result2);
  files4.push('path/to/another/file');
  transport.transfer(files4, '/tmp/foo');
});

flightplan.remote(function(transport) {
  var files = ['path/to/file1', 'path/to/file2'];
  transport.transfer(files, '/tmp/foo');
  
  // use result from a previous command 
  var files2 = transport.git('ls-files', {silent: true}); // get list of files under version control 
  transport.transfer(files2, '/tmp/foo');
  
  // use zero-terminated result from a previous command 
  var files3 = transport.exec('(git ls-files -z;find node_modules -type f -print0)', {silent: true});
  transport.transfer(files3, '/tmp/foo');
  
  // use results from multiple commands 
  var result1 = transport.git('ls-files', {silent: true}).stdout.split('\n');
  var result2 = transport.find('node_modules -type f', {silent: true}).stdout.split('\n');
  var files4 = result1.concat(result2);
  files4.push('path/to/another/file');
  transport.transfer(files4, '/tmp/foo');
});

// transport.prompt
flightplan.local(function (transport) {
  var input = transport.prompt('Are you sure you want to continue? [yes]');
  if(input.indexOf('yes') === -1) {
    flightplan.abort('User canceled flight');
  }
  
  // prompt for password (with UNIX-style hidden input) 
  var password = transport.prompt('Enter your password:', { hidden: true });
  
  // prompt when deploying to a specific target 
  if(flightplan.runtime.target === 'production') {
    var input = transport.prompt('Ready for deploying to production? [yes]');
    if(input.indexOf('yes') === -1) {
      flightplan.abort('User canceled flight');
    }
  }
});

flightplan.remote(function (transport) {
  var input = transport.prompt('Are you sure you want to continue? [yes]');
  if(input.indexOf('yes') === -1) {
    flightplan.abort('User canceled flight');
  }
  
  // prompt for password (with UNIX-style hidden input) 
  var password = transport.prompt('Enter your password:', { hidden: true });
  
  // prompt when deploying to a specific target 
  if(flightplan.runtime.target === 'production') {
    var input = transport.prompt('Ready for deploying to production? [yes]');
    if(input.indexOf('yes') === -1) {
      flightplan.abort('User canceled flight');
    }
  }
});

// transport.waitFor
flightplan.local(function (transport) {
  var result = transport.waitFor(function(done) {
    done('sent!');
  });
  console.log(result); // 'sent!' 
});
