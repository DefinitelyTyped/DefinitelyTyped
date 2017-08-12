import findUp = require('find-up');

findUp('unicorn.png').then(filepath => {
    filepath; // $ExpectType string | null
});

findUp('unicorn.png', {cwd: ''});
findUp(['rainbow.png', 'unicorn.png']);
findUp(['rainbow.png', 'unicorn.png'], {cwd: ''});

findUp.sync('unicorn.png'); // $ExpectType string | null
findUp.sync('unicorn.png', {cwd: ''});
findUp.sync(['rainbow.png', 'unicorn.png']);
findUp.sync(['rainbow.png', 'unicorn.png'], {cwd: ''});
