import * as spawn from 'cross-spawn';
import * as cp from 'child_process';

const p1: cp.ChildProcess = spawn('my-cmd', ['foo', 'bar']);
const pw: cp.ChildProcess = spawn('my-cmd', ['foo', 'bar'], {env: process.env});

pw.on('error', (err: Error) => {
    console.log(err);
});
