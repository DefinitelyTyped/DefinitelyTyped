/// <reference path="./nexpect.d.ts" />

import nexpect = require('nexpect');

nexpect.spawn("echo", ["hello"])
    .expect("hello")
    .run((err, stdout, exitcode) => {
        if (!err) {
            console.log("hello was echoed");
        }
    });

nexpect.spawn("ls -la /tmp/undefined", {stream: 'stderr'})
    .expect("No such file or directory")
    .run((err) => {
        if (!err) {
            console.log("checked that file doesn't exists");
        }
    });

nexpect.spawn("node --interactive")
    .expect(">")
    .sendline("console.log('testing')")
    .expect("testing")
    .sendline("process.exit()")
    .run((err) => {
        if (!err) {
            console.log("node process started, console logged, process exited");
        }
        else {
            console.log(err)
        }
    });
