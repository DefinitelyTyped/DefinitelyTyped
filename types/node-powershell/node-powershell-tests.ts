import nodePowershell = require("node-powershell");

// Set base options
const options: nodePowershell.ShellOptions = {
    debugMsg: true,
};

// Initialization
const powershell = new nodePowershell(options);

async function run() {
    // Adding commands
    await powershell.addCommand('Write-Host "node-powershell is pretty awesome"');

    // Adding parameters
    // $ExpectType string[]
    const afterParameters = await powershell.addParameters([
        { name: "ForegroundColor", value: "Red" },
        { name: "NoNewLine", value: true },
    ]);

    // $ExpectType string
    const output = await powershell.invoke();

    // $ExpectType string
    const disposedCode = await powershell.dispose();
}

// $ExpectType unknown[]
const history = powershell.history;

powershell.streams.stdin.write("data");
powershell.streams.stdout.on("data", (data: any) => {});

// Events
powershell.on("output", data => {});
powershell.on("err", err => {});
powershell.on("end", code => {});
