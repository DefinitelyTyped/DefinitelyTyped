import commandLineCommands = require('command-line-commands');

const commands = [null, 'first', 'second'];

const { command, argv } = commandLineCommands(commands, ['first', '--arg']);


