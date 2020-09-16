import stream = require('stream');
import readline = require('mz/readline');

declare function completer(line: string): Promise<[string[], string]> | [string[], string];
declare function completer(line: string, callback: (err: Error | null, result: readline.CompleterResult) => void): void;

const input = new stream.PassThrough();
const output = new stream.PassThrough();
const rl = readline.createInterface({ input, output });
const rlc = readline.createInterface({
    input,
    output,
    completer,
    terminal: true,
});

rl.question('a'); // $ExpectType Promise<string>
rl.question('a', answer => {
    answer; // $ExpectType string
});

rlc.question('a'); // $ExpectType Promise<string>
rlc.question('a', answer => {
    answer; // $ExpectType string
});
