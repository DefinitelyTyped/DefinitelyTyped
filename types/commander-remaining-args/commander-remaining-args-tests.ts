import cli = require('commander');
import getRemainingArgs = require('commander-remaining-args');

cli.allowUnknownOption().option('--some-flag');

getRemainingArgs(cli); // ['--unknown-flag', '--unknown-arg=value', '-x'])
