import spawn = require('cross-spawn');
import * as cp from 'child_process';

const p1: cp.ChildProcess = spawn('my-cmd', ['foo', 'bar']);
const pw: cp.ChildProcess = spawn('my-cmd', ['foo', 'bar'], {env: process.env});

pw.on('error', (err: Error) => {
    console.log(err);
});

const r1: Error | null = spawn.sync('foo').error;
const r2: string[] | null = spawn.sync('foo').output;
const r3: Buffer | null = spawn.sync('foo').stdout;
const r4: Buffer | null = spawn.sync('foo').stderr;
const r5: number | null = spawn.sync('foo').status;
const r6: string | null = spawn.sync('foo').signal;
const r7: string | null = spawn.sync('foo', {encoding: 'utf8'}).stdout;

spawn.sync('foo', ['bar']);
spawn.sync('foo', ['bar'], {stdio: 'inherit'});
