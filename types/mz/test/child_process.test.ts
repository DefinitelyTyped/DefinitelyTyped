import cp = require('mz/child_process');

// Promise:
cp.exec('node --version', {
	encoding: String(Math.random() < 0.5 ? 'utf-8' : 'buffer')
}).then((params: [string | Buffer, string | Buffer]) => {
	(params[0] as Buffer).toString('utf8'); // $ExpectType string
});

// Callback:
cp.exec('node --version', (err, stdout) => {
	err; // $ExpectType ExecException | null
	stdout; // $ExpectType string
});
