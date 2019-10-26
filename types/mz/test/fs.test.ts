import fs = require('mz/fs');

fs.stat(__filename); // $ExpectType Promise<Stats>
fs.stat(__filename, (err, stats) => {
	err; // $ExpectType ErrnoException | null
	stats; // $ExpectType Stats
});

fs.exists(__filename); // $ExpectType Promise<boolean>
fs.exists(__filename, (err, exists) => {
	err; // $ExpectType ErrnoException | null
	exists; // $ExpectType boolean
});
