import { spawn } from 'child_process';
import BottomBar from 'inquirer/lib/ui/bottom-bar';
// tslint:disable-next-line: no-var-requires
const cmdify = require('cmdify');

const loader = ['/ Installing', '| Installing', '\\ Installing', '- Installing'];
let i = 4;
const ui = new BottomBar({ bottomBar: loader[i % 4] });

setInterval(() => {
    ui.updateBottomBar(loader[i++ % 4]);
}, 300);

const cmd = spawn(cmdify('npm'), ['-g', 'install', 'inquirer'], { stdio: 'pipe' });
cmd.stdout.pipe(ui.log);
cmd.on('close', () => {
    ui.updateBottomBar('Installation done!\n');
    process.exit();
});
