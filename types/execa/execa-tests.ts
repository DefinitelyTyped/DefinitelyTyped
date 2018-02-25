import assert = require('assert');
import execa = require('execa');
import { PassThrough } from "stream";

execa('unicorns')
    .then(result => {
        assert(result.cmd === 'unicorns');
        assert(result.code === 0);
        assert(result.failed === false);
        assert(result.killed === false);
        assert(result.signal === null);
        assert(result.stderr === 'bad unicorns');
        assert(result.stdout === 'good unicorns');
        assert(result.timedOut === false);
    });

execa('foo')
    .catch(error => {
        assert(error.cmd === 'foo');
        assert(error.code === 128);
        assert(error.failed === true);
        assert(error.killed === false);
        assert(error.signal === 'SIGINT');
        assert(error.stderr === 'stderr');
        assert(error.stdout === 'stdout');
        assert(error.timedOut === false);
    });

execa('noop', ['foo'])
    .then(result => result.stderr.toLocaleLowerCase());

execa.stdout('unicorns')
    .then(stdout => stdout.toLocaleLowerCase());
execa.stdout('echo', ['unicorns'])
    .then(stdout => stdout.toLocaleLowerCase());

execa.stderr('unicorns')
    .then(stderr => stderr.toLocaleLowerCase());
execa.stderr('echo', ['unicorns'])
    .then(stderr => stderr.toLocaleLowerCase());

execa.shell('echo unicorns')
    .then(result => result.stdout.toLocaleLowerCase());

{
    let result: string;
    result = execa.shellSync('foo').stderr;
    result = execa.shellSync('noop', { cwd: 'foo' }).stdout;

    result = execa.shellSync('foo').stderr;
    result = execa.shellSync('noop foo').stdout;
}

execa('echo', ['unicorns']).stdout.pipe(process.stdout);
execa('echo', ['unicorns']).stderr.pipe(process.stderr);

execa('forever', {extendEnv: false}).pid;
execa('forever', {argv0: 'hi'}).pid;
execa('forever', {localDir: '~'}).pid;
execa('forever', {reject: false}).pid;
execa('forever', {cleanup: false}).pid;
execa('forever', {stdin: 1}).pid;
execa('forever', {stdout: 'ignore'}).pid;
execa('forever', {stderr: undefined}).pid;

async () => {
    const { stdout } = await execa('noop', ['foo'], { stripEof: false });
    assert(stdout === 'foo\n');
};

async () => {
    const { stdout } = await execa('foo', { preferLocal: false });
    assert(stdout === 'global foo');
};

async () => {
    const { stdout } = await execa('stdin', { input: 'foobar' });
    assert(stdout === 'foobar');
};

async () => {
    const { stdout } = await execa('stdin', { input: new Buffer('foobar') });
    assert(stdout === 'foobar');
};

async () => {
    const s = new PassThrough();
    s.write('howdy');
    s.end();
    const { stdout } = await execa('stdin', { input: s });
    assert(stdout === 'foobar');
};

async () => {
    const child = execa('stdin');
    child.stdin.end('unicorns');
    const { stdout } = await child;
    assert(stdout === 'unicorns');
};

async () => {
    const { stdout } = await execa('stdin', {
        input: 'hello',
        stdio: [null, 'ignore', null]
    });
    assert(stdout === null);
};

{
    const child = execa('stdin', {
        input: 'hello',
        stdio: [null, 'ignore', null]
    });

    child.stdout.setEncoding('utf8');

    assert(child.pid === 0);
    child.kill();
}

async () => {
    const { timedOut, code } = await execa('delay', ['3000', '22'], { timeout: 9000 });
    assert(timedOut === true);
    assert(code === 22);
};

async () => {
    const { stdout } = await execa.shell('noop foo', {
        shell: process.platform === 'win32' ? 'cmd.exe' : '/bin/bash'
    });

    assert(stdout === 'foo');
};
