import findDown = require('find-down');

findDown('unicorn.png').then(file => {
    file; // $ExpectType string | null
});

findDown(['unicorn.png']).then(file => {
    file; // $ExpectType string | null
});

findDown('unicorn.png', { cwd: '.' }).then(file => {
    file; // $ExpectType string | null
});
