import { spawn } from 'child_process';

spawn('node', ['input.js'], {
    cwd: __dirname,
    stdio: 'inherit',
});
