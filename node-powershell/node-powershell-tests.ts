import * as nodePowershell from 'node-powershell';

var options: nodePowershell.ShellOptions = {
    debugMsg: true
};

// Initialization
var ps = new nodePowershell(options);

// Methods
ps.addCommand('Write-Host node-powershell', [
    { name: 'foregroundcolor', value: 'red' },
    { name: 'nonewline', value: null } //switch
]).then((cmdsArr: string[]) => { }).catch((err: any) => { });

ps.addCommand('Write-Host node-powershell', [
    { foregroundcolor: 'red' },
    { nonewline: null } //switch
]);

ps.invoke().then((output: string) => { }).catch((err: any) => { });

ps.dispose().then((code: string) => { }).catch((err: any) => { });

// Properties
console.log(ps.history);

ps.streams.stdin.write('data');
ps.streams.stdout.on('data', (data: any) => { });

// Events
ps.on('output', (data: string) => { });
ps.on('err', (err: string) => { });
ps.on('end', (code: string) => { });
