import { exec, ExecError, SubProcess, SubProcessOptions } from 'teen_process';

exec('bigfix');
exec('echo', ['my name is bob', 'lol']);
exec('echo', ['arg'], { cwd: process.cwd(), env: { FOO: 'bar' }, timeout: 500, ignoreOutput: true });

const stringResult: Promise<{
    stdout: string;
    stderr: string;
    code: number;
}> = exec('ls', [__dirname]);

const stringResult2: Promise<{
    stdout: string;
    stderr: string;
    code: number;
}> = exec('ls', [__dirname], { isBuffer: false });

const stringResult3: Promise<{
    stdout: string;
    stderr: string;
    code: number;
}> = exec('ls', [__dirname], { encoding: 'binary' });

const bufferResult: Promise<{
    stdout: Buffer;
    stderr: Buffer;
    code: number;
}> = exec('ls', [__dirname], {
    isBuffer: true,
});

const props: {
    args: ReadonlyArray<string>;
    opts: SubProcessOptions;
    pid: number | null | undefined;
} = new SubProcess('ls');

try {
    exec('exit', ['1'], {shell: true});
} catch (err) {
    const {stdout, stderr, code} = err as ExecError;
}
const subproc = new SubProcess('ls', [], { cwd: process.cwd() });
subproc.on('lines-stdout', (newLines: string[]) => {});
subproc.once('lines-stderr', (newLines: string[]) => {});
subproc.addListener('output', (stdout: string, stderr: string) => {});
subproc.start(0);
subproc.start((stdout: string) => stdout.indexOf('nothere') !== -1);
subproc.join();

subproc.prependListener('exit', (code: number | null, signal: NodeJS.Signals | null) => {});
subproc.stop();
subproc.detachProcess();
