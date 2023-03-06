import { spawn, spawnStreaming, exec, execSync, getExitCode, getChildProcessCount } from '@lerna/child-process';
import { Options, SyncOptions } from 'execa';

const childCount: number = getChildProcessCount();
const testArguments: string[] = ['a', 'b'];

const options: Options = {};
spawn('test', testArguments);
spawn('test', testArguments, options);

spawnStreaming('test', testArguments);
spawnStreaming('test', testArguments, options);

exec('test', testArguments);
exec('test', testArguments, options);

const syncOptions: SyncOptions = {};
execSync('test', testArguments);
execSync('test', testArguments, syncOptions);
