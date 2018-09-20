/// <reference types="node" />

import find = require('find-process');

find('pid', 12345).then((processList) => {
    processList.forEach((ps) => {
        console.log('Full command with args: ' + ps.cmd);
        console.log('User group ID (for *nix): ' + ps.gid);
        console.log('command/process name: ' + ps.name);
        console.log('Process ID: ' + ps.pid);
        console.log('Parent process ID: ' + ps.ppid);
        console.log('User ID (for *nix): ' + ps.uid);
    });
}, (err) => {
    console.log(err.stack || err);
});
