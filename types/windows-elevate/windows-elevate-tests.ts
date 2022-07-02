import elevate = require('windows-elevate');

// Example from the README:
elevate.exec('echo', 'Hello World', (error, stdout: string, stderror: string) => {
    if (error) {
        console.error('Failed!', stderror);
        return;
    }

    console.log('Success!', stdout);
});

// No arguments
elevate.exec('dir', null, (error, stdout: string, stderror: string) => {
    if (error) {
        console.error('Failed!', stderror);
        return;
    }

    console.log('Success!', stdout);
});

// Multiple arguments, no callback
elevate.exec('dir', ['C:\\Documents', '/p']);
