/// <reference types="node" />

import childProcess = require('child_process');
import npmRunPath = require('npm-run-path');

npmRunPath(); // $ExpectType string
npmRunPath({ cwd: '/foo' }); // $ExpectType string
npmRunPath({ path: '/usr/local/bin' }); // $ExpectType string

npmRunPath.env(); // $ExpectType ProcessEnv
npmRunPath.env({ cwd: '/foo' }); // $ExpectType ProcessEnv
npmRunPath.env({ env: process.env }); // $ExpectType ProcessEnv

childProcess.execFileSync('foo', {
    env: npmRunPath.env(),
});
