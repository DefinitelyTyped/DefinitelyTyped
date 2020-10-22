import commandExists = require('command-exists');

commandExists('ls', (err, commandExists) => {
    // $ExpectType boolean
    commandExists;
});

commandExists('ls').then(command => {
    // $ExpectType string
    command;
});

// $ExpectType boolean
commandExists.sync('ls');
