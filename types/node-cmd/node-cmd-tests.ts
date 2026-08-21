import cmd = require("node-cmd");

cmd.runSync("touch ./example/example.created.file");

cmd.run(
    `cd ./example
ls`,
    function(err, data, stderr) {
    },
);

const process = cmd.run("node");
const pid = process.pid;

const processRef = cmd.run("python -i");

processRef.stdout!.on(
    "data",
    function(data) {
    },
);

const pythonTerminalInput = `primes = [2, 3, 5, 7]
for prime in primes:
    print(prime)

`;

processRef.stdin!.write(pythonTerminalInput);
