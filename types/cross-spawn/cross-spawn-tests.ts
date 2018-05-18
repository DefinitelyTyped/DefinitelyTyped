import spawn = require('cross-spawn');
import * as cp from 'child_process';

const p1: cp.ChildProcess = spawn('my-cmd', ['foo', 'bar']);
const pw: cp.ChildProcess = spawn('my-cmd', ['foo', 'bar'], {env: process.env});

pw.on('error', (err: Error) => {
    console.log(err);
});

function testBuffer() {
    const res = spawn.sync('foo');
    const r1: Error | null = res.error;
    const r2: [Buffer | null, Buffer | null, Buffer | null] | null = res.output;
    const r3: Buffer | null = res.stdout;
    const r4: Buffer | null = res.stderr;
    const r5: number | null = res.status;
    const r6: string | null = res.signal;
}

function testString() {
    const res = spawn.sync('foo', {encoding: 'utf8'});
    const r1: Error | null = res.error;
    const r2: [string | null, string | null, string | null] | null = res.output; const r3: string | null = res.stdout;
    const r4: string | null = res.stderr;
    const r5: number | null = res.status;
    const r6: string | null = res.signal;
}

spawn.sync('foo', ['bar']);
spawn.sync('foo', ['bar'], {stdio: 'inherit'});
